
var objID = null;
var selectedData;
var dtRows = [];
var aUSerid;
var tData = [];
var table;
var baseurl = '';
var aLocation = '';
var loadedXML;
function getMinDate() {
    var future = new Date();
    future.setDate(future.getDate() - 180);
    var wMonth = (future.getMonth() + 1);
    var wDate = future.getDate();
    var minDate = future.getFullYear() + '-' + (wMonth < 10 ? '0' + wMonth : '' + wMonth) + '-' + (wDate < 10 ? '0' + wDate : '' + wDate);
    return minDate;
}
function getCurrentDate() {
    var date = new Date();
    var wMonth = (date.getMonth() + 1);
    var wDate = date.getDate();
    var currdate = date.getFullYear() + '-' + (wMonth < 10 ? '0' + wMonth : '' + wMonth) + '-' + (wDate < 10 ? '0' + wDate : '' + wDate);
    return currdate;
}
function DropdownBind(xmlTag, dropdownName) {
    $("#" + dropdownName + "").empty();
    var select = $('#' + dropdownName + '');
    $(loadedXML).find(xmlTag).each(function () {
        var Value = $(this).find('id').text();
        var Label = $(this).find('value').text();
        select.append("<option  value='" + Value + "'>" + Label + "</option>");
    });
}
$(document).ready(function () {    
    var environ = window.location.host;
    var pathname = window.location.pathname;
    var res = pathname.split("/");
    if (location.hostname !== "localhost") {
        baseurl = "//" + environ + "/" + res[1];
    }
    if (res[1] !== undefined && res[1] !== "")
        aLocation = "/" + res[1];

    //Load ConfigXML
    $.ajax({
        type: "GET",
        url: baseurl + "/configXML.xml",
        dataType: "xml",
        success: function (xml) {
            loadedXML = xml;
            DropdownBind('SearchType', 'ddSearchtype');
        },
        error: function (exception) {
            bootbox.dialog({
                message: exception,
                backdrop: null,
                size: 'small',
                buttons: {
                    danger: {
                        label: 'ok',
                        className: "btn-primary"
                    }
                }
            });
        }
    });

    $("body").css('overflow-x', 'hidden');
    $("body").css('overflow-y', 'auto');
    $("#lbluname").css("visibility", "hidden");
    $("#lbluser").css("visibility", "hidden");
    $("#lblpol").css("visibility", "hidden");
    $("#lblPolicyNum").css("visibility", "hidden");
    
    $("#txtCOCD").attr('maxlength', '3');
    $("#txtssn").attr('maxlength', '11');
    $("#txtbirthDate").attr('maxlength', '10');
    $("#txtFromDate").val(getMinDate());
    $("#txtToDate").val(getCurrentDate());    
    aUSerid = $('#awdUser').val();

    var logOut = $('<div style="color: white;float: right;min-width: 190px;padding-top:15px;"><div class="btn-group">' +
        '<button class="btn btn-logout dropdown-toggle" type="button" id="menu1" data-toggle="dropdown"><i class="fa fa-user fa-fw"></i>' + aUSerid.toLowerCase() + '<span class="caret"></span></button>' +
    '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink"><a class="dropdown-item" id="aLogout" href="">Logout</a></div>');

    if (aUSerid != null && aUSerid != undefined && aUSerid != "") {
        $('.logOut').append(logOut);
    }
      
    DatatableBind();
    //makeUnselectable(document.getElementById("foo"));
});

$(function () {    
       
    $('#btnSearch').click(function () {
        var fldLOBFields = '';
        var sPolicyNumber = $('#txtPolicyno').val();
        var sFirstName = $('#txtFname').val();
        var sLastName = $('#txtLname').val();
        var sSSN = $('#txtssn').val().replace(/-/g, "");
        var sBirthDate = $('#txtbirthDate').val();        
        var sStatCO = $('#txtCOCD').val();
        var s_FromDate = $("#txtFromDate").val();
        var s_ToDate = $("#txtToDate").val();
        var ddSearchOption = $('#ddSearchtype :selected').text();
        if (sPolicyNumber != "")
            fldLOBFields = fldLOBFields + ',-,PolicyNumber,' + sPolicyNumber + ',POLN';
        if (sFirstName != "")
            fldLOBFields = fldLOBFields + ',-,FirstName,' + sFirstName + ',FNAM';
        if (sLastName != "")
            fldLOBFields = fldLOBFields + ',-,LastName,' + sLastName + ',LNAM';
        if (sSSN != "")
            fldLOBFields = fldLOBFields + ',-,SSN,' + sSSN + ',TIN';
        if (sBirthDate != "")
            fldLOBFields = fldLOBFields + ',-,BirthDate,' + sBirthDate + ',BDTE';
        if (sStatCO != "")
            fldLOBFields = fldLOBFields + ',-,StatCO,' + sStatCO + ',COCD';
        if (ddSearchOption == "" || ddSearchOption == undefined || ddSearchOption == null) {            
            dialogBox("Select search type", "ddSearchtype");
        }
        else
        {
            var s_REQUIRED = checkAtleastOne();
            if (s_REQUIRED == 1) {
                var sContext;
                if (ddSearchOption == "ALIP")
                    sContext = "ROSALIP";
                else
                    if (ddSearchOption == "AGL")
                        sContext = "ROSAGL";
                    else
                        sContext = "ROSAGLA";

                modelDialog.show();
                jQuery.post(
                     baseurl + '/Home/SearchWorkitem',
                    {
                        //AGLIFENBTAXAUTH search context
                        SearchContext: sContext,
                        AppId: 'ESUB',
                        UserId: '',
                        FromDate: s_FromDate,
                        ToDate: s_ToDate,
                        PageNumber: null,
                        SearchLOBValues: fldLOBFields
                    })
            .done(function (data) {
                if (data.Results != null) {
                    tData = [];
                    for (var key in data.Results) {
                        tData[key] = [data.Results[key].ObjectId];
                    }
                    $('#tblSource').dataTable().fnDestroy();
                    DatatableBind();
                }
                setTimeout(function () {
                    modelDialog.hide();
                }, 100);
            });
            }
            else
                dialogBox("Enter atleast one search field", "txtPolicyno");
        }                
    });

    function genGUID() {
        jQuery.post(
                 baseurl + '/Home/genGUID',
                {})
        .done(function (data) {
            if(!data)
                alert("GUID not generated process it again")
            });
    }

    function checkAtleastOne() {
        var valid = 0;
        var S_LBLNAME = ["txtPolicyno", "txtFname", "txtLname", "txtssn", "txtbirthDate", "txtCOCD"];
        for (var i = 0; i < S_LBLNAME.length; ++i) {
            var S_VALUE=$("#" + S_LBLNAME[i] + "").val();
            if (S_VALUE != '') {
                valid = 1;
                return valid;                
            }
        }
        return valid;
    }

    $('#btnClear').click(function () {
        $('#txtPolicyno').val(''); 
        $('#txtCOCD').val('');
        $('#txtFname').val('');
        $('#txtLname').val('');
        $('#txtssn').val('');
        $('#txtbirthDate').val('');        
        $('select option[value="0"]').attr("selected", true);
        $("#txtToDate").val($.datepicker.formatDate("yy-mm-dd", new Date()));
    });

    Date.prototype.addDays = function (n) {
        var time = this.getTime();
        var changedDate = new Date(time + (n * 24 * 60 * 60 * 1000));
        this.setTime(changedDate.getTime());
        return this;
    };          

    $("#txtssn").on('keypress', function () {
        var ssn = $(this).val();
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
        if (ssn.length == 3) {
            ssn = ssn + "-";
            $(this).val(ssn);
        }
        if (ssn.length == 7) {
            ssn = ssn + "-";
            $(this).val(ssn);
        }
        $(this).val(ssn)
    });    
    $('#txtToDate').datepicker({ minDate: -180, maxDate: "0", dateFormat: 'yy-mm-dd' });
    $("#txtToDate").val($.datepicker.formatDate("yy-mm-dd", new Date()));
    $('#txtbirthDate').datepicker({ dateFormat: 'mm/dd/yy', maxDate: "0" });
    $('#aLogout').click(function () {
        CloseSession();
    });

    $("#tblSource tbody").on('click','tr', function (event) {
        $("#tblSource tbody tr").removeClass('row_selected');
        $(this).addClass('row_selected');
    });

    //Getting Selected Work item object id
    $('#tblSource tbody').on('dblclick', 'tr', function () {
        var data = table.row(this).data();        
        objID = data[0];
        genGUID();
        postObjId();
    });

    function postObjId() {
        jQuery.post(
                   baseurl + '/Home/sessionData',
                   {
                       objId: objID
                   })
                       .done(function (data) {
                           if (data)
                               window.location.assign(aLocation + "/Home/Home");                                                             
                       });
    }

    function dialogBox(message, controlName, color) {        
        if (color != null || color != undefined) {
            message = '<b style="color:' + color + ';">' + message + '.</b>';
        }

        bootbox.dialog({
            message: message,
            size: 'small',
            buttons: {
                danger: {
                    label: 'ok',
                    className: "btn-primary",
                    callback: function () {
                        if (controlName != undefined)
                            $('#' + controlName + '').focus();
                    }
                }
            }
        });
    }
    
    function CloseSession() {
        jQuery.post(baseurl + '/Home/sessionClear')
        .done(function (data) {
            window.location.assign(aLocation + "/Home/Index");
        });
    }
});

function DatatableBind() {
    table = $("#tblSource").DataTable({        
        data: tData,        
        "scrollY": 410,        
        "lengthChange": false,
    });
}

var modelDialog = modelDialog || (function ($) {
    'use strict';

    // Creating modal dialog's DOM
    var $dialog = $(
        '<div class="modal fade bs-example-modal-sm" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="overflow-y:visible;">' +
        '<div class="modal-dialog modal-sm">' +
        '<div class="modal-content">' +
            '<div class="modal-header"><h4 style="margin:0;"></h4></div>' +
            '<div class="modal-body">' +
                '<div class="progress " style="margin-bottom:0;"><div class="progress-bar progress-bar-striped progress-bar-animated active" style="width: 100%"></div></div>' +
            '</div>' +
        '</div></div></div>');

    return {
        show: function (message, options) {
            // Assigning defaults
            if (typeof options === 'undefined') {
                options = {};
            }
            if (typeof message === 'undefined') {
                message = 'Fetching Workitems..';
            }
            var settings = $.extend({
                dialogSize: 'sm',
                progressType: '',
                onHide: null // This callback runs after the dialog was hidden
            }, options);

            // Configuring dialog
            $dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
            $dialog.find('h4').text(message);
            // Adding callbacks
            if (typeof settings.onHide === 'function') {
                $dialog.off('hidden.bs.modal').on('hidden.bs.modal', function (e) {
                    settings.onHide.call($dialog);
                });
            }
            // Opening dialog
            $dialog.modal();
        },
        /**
         * Closes dialog
         */
        hide: function () {
            $dialog.modal('hide');
        }
    };

})(jQuery);

function noBack() { window.history.forward() }
noBack();
window.onload = noBack;
window.onpageshow = function (evt) { if (evt.persisted) noBack() }
window.onunload = function () { void (0) }
