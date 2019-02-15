
//******************************************LabOneDeclarations***********************************
var PI01RecordType = "";
var PI01PolicyType = "";
var PI01Amount = "";
var PI01PolicyNumber = "";
var PI01Beneficiary = "";
var PI01Relationship = "";
var PI01ChangeOfPlan = "";
var PI01NonTobacco = "";
var PI01AgentOverride = "";
var PI01ApplicationDate = "";
var PI01VariableProduct = "";
var PI01Spaces = "";

var AG01RecordType = "";
var AG01AgentNumber = "";
var AG01LastName = "";
var AG01FirstName = "";
var AG01MiddleName = "";
var AG01NamePrefix = "";
var AG01NameSuffix = "";
var AG01SSN = "";
var AG01Spaces = "";

var AG02RecordType = "";
var AG02WorkPhone = "";
var AG02WorkExtension = "";
var AG02Fax = "";
var AG02Nickname = "";
var AG02Email = "";
var AG02Spaces = "";

var AN01RecordType = "";
var AN01LastName = "";
var AN01FirstName = "";
var AN01MiddleName = "";
var AN01NamePrefix = "";
var AN01NameSuffix = "";
var AN01DateOfBirth = "";
var AN01SSN = "";
var AN01Gender = "";
var AN01MaritalStatus = "";
var AN01SmokerStatus = "";
var AN01ApplicantAge = "";
var AN01BestTimeToCall = "";
var AN01PlaceToCall = "";
var AN01Spaces = "";

var AN02RecordType = "";
var AN02Address1 = "";
var AN02HomePhone = "";
var AN02WorkPhone = "";
var AN02WorkExtension = "";
var AN02CountryName = "";
var AN02CountryCode = "";
var AN02MobilePhone = "";
var AN02Spaces = "";

var AN03RecordType = "";
var AN03Address2 = "";
var AN03Address3 = "";
var AN03City = "";
var AN03State = "";
var AN03Zip = "";
var AN03Spaces = "";

var AN04RecordType = "";
var AN04DriversState = "";
var AN04DriversNumber = "";
var AN04ApplicantRole = "";
var AN04PreferredLang = "";
var AN04ApplicantOccupation = "";
var AN04Spaces = "";

var AY01RecordType = "";
var AY01AgencyNumber = "";
var AY01AgencyName = "";
var AY01Phone = "";
var AY01Extension = "";
var AY01Fax = "";
var AY01CompanyCode = "";
var AY01Spaces = "";

var DC01RecordType = "";
var DC01SequenceNo = "";
var DC01Address1 = "";
var DC01Address2 = "";
var DC01City = "";
var DC01State = "";
var DC01Zip = "";
var DC01PatientID = "";
var DC01Spaces = "";

var DR01RecordType = "";
var DR01SequenceNo = "";
var DR01LastName = "";
var DR01FirstName = "";
var DR01MiddleName = "";
var DR01ClinicName = "";
var DR01Phone = "";
var DR01Extension = "";
var DR01Spaces = "";

var LV01Name = "";
var LV01Phone = "";
var LV01Email = "";


var CO01RecordType = "";
var CO01CompanySourceCode = "";
var CO01CompanyCode = "";
var CO01CompanyName = "";
var CO01CompanyBillingCode = "";
var CO01ClientQuotebackNumber = "";
var CO01Spaces = "";

var SR01RecordType = "";
var SR01SourceCode = "";
var SR01RequestCode = "";
var SR01Description = "";
var SR01CompletedDate = "";
var SR01CompletedTime = "";
var SR01StatusCode = "";
var SR01StatusCodeSource = "";
var SR01Reflex = "";
var SR01Spaces = "";

var SC01RecordType = "";
var SC01ServiceCode = "";
var SC01Spaces = "";

var TOTLRecordType = "";
var TOTLTotalApplicants = "";
var TOTLTotalRecords = "";
var TOTLSpaces = "";


var ON01RecordType = "";
var ON01Note = "";
var ON01Spaces = "";

var OR01RecordType = "";
var OR01VersionNumber = "";
var OR01TransactionCode = "";
var OR01SenderQuoteback = "";
var OR01OrderSource = "";
var OR01OrderSequence = "";
var OR01MailToCode = "";
var OR01GlobalSiteID = "";
var OR01GlobalRefNo = "";
var OR01DestinationOfficeCode = "";
var OR01ReceiverQuoteback = "";
var OR01RushOrder = "";
var OR01Spaces = "";

var LV01RecordType = "";
var LV01Name = "";
var LV01Email = "";
var LV01Phone = "";
var LV01Fax = "";
var LV01Spaces = "";

var AY02RecordType = "";
var AY02Email = "";
var AY02Spaces = "";


var gsLocalOutputPath;

var crLabOneData = [];
var apsLabOneData = [];

//******************************************LabOneDeclaration END***********************************

var mvrTab1 = 0;
var irTab1 = 0;
var irTab6 = 0;
var irTab7 = 0;
var crTab1 = 0;
var apsTab1 = 0;
var apsTab2 = 0;
var apsTab3 = 0;
var apsTab4 = 0;

var MVR_FIRST_NAME_LEN = 20;
var MVR_MIDDLE_NAME_LEN = 15;
var MVR_LAST_NAME_LEN = 20;
var MVR_DRIVER_LIC_LEN = 22;

var IR_FIRST_NAME_LEN = 15;
var IR_MIDDLE_NAME_LEN = 15;
var IR_LAST_NAME_LEN = 25;
var IR_CITY_LEN = 20;
var IR_ZIP_LEN = 5;
var IR_DRIVER_LIC_LEN = 25;
var IR_AMOUNT_LEN = 9;

var CR_ES_FIRST_NAME_LEN = 20;
var CR_ES_MIDDLE_NAME_LEN = 1;
var CR_ES_LAST_NAME_LEN = 25;
var CR_ES_ADD1_LEN = 30;
var CR_ES_ADD2_LEN = 30;
var CR_ES_CITY_LEN = 25;

var APS_FIRST_NAME_LEN = 20;
var APS_MIDDLE_NAME_LEN = 20;
var APS_LAST_NAME_LEN = 30;
var APS_ADD1_LEN = 40;
var APS_ADD2_LEN = 40;
var APS_ADD3_LEN = 40;
var APS_CITY_LEN = 27;
var APS_ZIP_LEN = 10;

var companyCode;
var gUnitCd;
var policyNumber;
var gAgencyCode = '';
var gAgentNumber = 0;
var gCHCPlan = '';

var controlsName=[];//control names for MVR require field validation
var lableName = [];//Label names for MVR require field validation

//Req Order variable check
var ChkMVR = 0;
var ChkIR = 0;
var ChkIRYoungerAges = 0;
var rtCreditRpt = 0;
var rtEsearch = 0;
var ChkAPS = 0;

var ChkBBR = 0;
var ChkCC = 0;
var ChkCCR = 0;
var selectionCode = 0;
var rtEMSI = 0;
var rtSelectQuote = 0;
var rtRXREVIEW = 0;
var rtCorpMarket = 0;
var rtAIGdirect = 0;
var sSourceObjID;
var crQuoteback;
var apsQuoteback;
var tCount = 0;
var gFileTimeStamp;
var gTiffTimeStamp;
var modal = null;
var s_APS = "APSAUTH";
var IRCommentFlag = 0;

//*****LAbone global variable***
var CommentCount = 0;
var SequenceCount = 0;
var StringCount = 0;
var CommentArray;
var CommentNdx = 0;
var CurrComment = "";
var txrCheck = "";
var cocdCheck = "";

//******end*****

var filterFields;
var UserName = '';
var U_EMAILID = '';
var Quoteback;
var LocalOutputPath;
var OutputPath;
var closeAlert = 0;
var oMsgDisplayed;
var fMsgDisplayed;
var oloopCount = 0;
var gloopCount = 0;
var oError = 0;
var gError = 0;
var oSubmit = 0;
var OrderList;
var dateNow = new Date();
var Null = "";
var apsComCount = 0;
var orderCount = 0;
var fileGenCount=0;
var fileCrNames = '';
var lstSelected = null;
var loadedXML;
var vURL;
var rConfirm = 0;
var version_id;
var apsFailed = 0;
var aLocation = '';
var mSuccess = 0;
var iSuccess = 0;
var aSuccess = 0;
var cSuccess = 0;
var eSuccess = 0;

var aUser;
var version;
var GUID;
var objId = null;
var appId = "ESUB";
var baseurl = '';
var tempIDX = "TempIDX\\";
var aPostVersion = "";
$(document).ready(function () {
    $("body").css('overflow-x', 'hidden');
    $("body").css('overflow-y', 'auto');
    objId = $("#myObjId").val();
    aUser = $("#awdUser").val();
    GUID = $("#aGUID").val();    
    version = $("#aVersion").val();
    if (version != "C")
        aPostVersion = "sApp";
    else
        aPostVersion = "cApp";
    
    var environ = window.location.host;
    var pathname = window.location.pathname;
    var res = pathname.split("/");
    if (location.hostname !== "localhost") {
        baseurl = "//" + environ + "/" + res[1];
    }
    if (res[1] !== undefined && res[1] !== "")
        aLocation = "/" + res[1];

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
                    message = 'Retrieving Data';
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
   
    //Show model for fetching data loading..
    modelDialog.show();

    //Getting object id related data's from WISE Service
    jQuery.post(
                   baseurl + '/Home/GetObjectData',
                   {
                       ObjId: objId,
                       AppId: appId,
                       UserId: "",
                       URL: ""
                   })
                       .done(function (data) {
                           if (data.Response.Message.indexOf("Error") != -1) {
                               bootbox.alert({
                                   message: "<b style='color:red;'>Error in retrieving Data</b> - <b>Can't place order</b><br />" + data.Response.Message,
                                   callback: function () {
                                   }
                               });
                           } else {
                               for (var key in data.IndexFields) {
                                   if (data.IndexFields[key].LOBTranslation == "COCD") {
                                       companyCode = data.IndexFields[key].FieldValue;
                                   }
                                   if (data.IndexFields[key].LOBTranslation == "FNAM") {
                                       if (UserName != '')
                                           UserName = data.IndexFields[key].FieldValue + " " + UserName;
                                       else
                                           UserName = " " + data.IndexFields[key].FieldValue + " ";
                                       $('#txtAppFname').val(data.IndexFields[key].FieldValue);
                                   }
                                   if (data.IndexFields[key].LOBTranslation == "LNAM") {
                                       $('#txtAppLname').val(data.IndexFields[key].FieldValue);
                                       UserName = UserName + data.IndexFields[key].FieldValue;
                                   }
                                   if (data.IndexFields[key].LOBTranslation == "BDTE") {
                                       var Date = data.IndexFields[key].FieldValue;
                                       Date = Date.split('-');
                                       var Result = Date[1] + "/" + Date[2] + "/" + Date[0];
                                       $('#txtAppBirthDay').val(Result);
                                   }
                                   if (data.IndexFields[key].LOBTranslation == "TIN") {
                                       var SSN = data.IndexFields[key].FieldValue;                                       
                                       if (SSN.length == 9) {
                                           var split = SSN.substring(3, SSN.length - 4);
                                           var ResultSSN = SSN.substring(0, 3) + "-" + split + "-" + SSN.substring(5);
                                           $('#txtAppssn').val(ResultSSN);
                                       }
                                       else
                                           AlertBox("SSN number is should be 9 digit.", Null);
                                   }
                                   if (data.IndexFields[key].LOBTranslation == "POLN") {
                                       policyNumber = data.IndexFields[key].FieldValue;
                                       $('#txtPolicyNo').val(data.IndexFields[key].FieldValue);
                                       $('#lblPolicyNum').html("&nbsp;" + data.IndexFields[key].FieldValue);
                                   }
                                   if (data.IndexFields[key].LOBTranslation == "CODE") {
                                       $('#txtAgentNumber').val(data.IndexFields[key].FieldValue);
                                   }
                                   if (data.IndexFields[key].LOBTranslation == "AGCY") {
                                       gAgencyCode = data.IndexFields[key].FieldValue;
                                   }
                                   if (data.IndexFields[key].LOBTranslation == "PHNE") {
                                       $('#txtConRequestorPhone').val(data.IndexFields[key].FieldValue);
                                   }
                                   if (data.IndexFields[key].LOBTranslation == "PLAN") {
                                       gCHCPlan = data.IndexFields[key].FieldValue;
                                   }
                               }
                               $("#lbluser").html("&nbsp;" + UserName);
                               //$('#txtConRequestorName').val(UserName);
                               for (var sKey in data.ObjectFields) {
                                   if (data.ObjectFields[sKey].FieldName == "businessAreaName")
                                       gUnitCd = data.IndexFields[key].FieldValue;
                               }
                               if (gAgencyCode == "8AY73") {
                                   $('input[type=radio][name=rdorderEMSI]').filter('[value=1]').prop('checked', false);
                                   $('input[type=radio][name=rdorderEMSI]').filter('[value=2]').prop('checked', true);
                                   rtEMSI = 0;
                                   rtSelectQuote = 1;
                               } else {
                                   $('input[type=radio][name=rdorderEMSI]').filter('[value=1]').prop('checked', true);
                                   rtEMSI = 1;
                                   rtSelectQuote = 0;
                               }                               
                               sleep(2000);
                               setTimeout(function () {
                                   modelDialog.hide();
                               }, 100);
                           }
                       });

    //Load configXML into loadedXML variable
    $.ajax({
        type: "GET",
        url: baseurl + "/configXML.xml",
        dataType: "xml",
        success: function (xml) {
            loadedXML = xml;
            var ReqPhone = GetConfigValue("RequestorPhone", "id", "1");
            if (ReqPhone != '') {

                $('#txtConRequestorPhone').val("(" + ReqPhone.substring(0, 3) + ") " + ReqPhone.substring(3, 6) + "-" + ReqPhone.substring(6));
            }
            else
                $('#txtConRequestorPhone').val("(  )    -   ");
        },
        error: function (exception) {
            bootbox.dialog({
                message: exception,                
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

    jQuery.post(
        baseurl + '/Home/Authentication',
        {
            _AWDusername: aUser.toUpperCase(),
            _Password: '',
            _objID: objId,
            _AppVersion: aPostVersion
        })
        .done(function (data) {
            if (data._Email != null)
                $('#txtConRequestorEmail').val(data._Email);
            else
                $('#txtConRequestorEmail').val("unknown@aig.com");
            if (data._FullName != null)
                $('#txtConRequestorName').val(data._FullName);            
            else {
                var phoneNum = $('#txtConRequestorPhone').val();
                if (phoneNum == null || phoneNum == '' || phoneNum == undefined)
                    $('#txtConRequestorPhone').val("(   )   -    ");
            }
        });

    jQuery.post(baseurl + '/Home/GetConfigURL')
            .done(function (data) {
                LocalOutputPath = data.TiffPath;
                OutputPath = data.OutputPath;
                vURL = data.Viewer;
            });

    //Hidding tabs 
    $('#menuTab ul li').eq(1).addClass("hidden");
    $('#menuTab ul li').eq(2).addClass("hidden");
    $('#menuTab ul li').eq(3).addClass("hidden");
    $('#menuTab ul li').eq(4).addClass("hidden");
    $('#menuTab ul li').eq(5).addClass("hidden");
    $('#menuTab ul li').eq(6).addClass("hidden");

    //Visiblity
    $("#lbluname").css("visibility", "visible");
    $("#lbluser").css("visibility", "visible");
    $("#lblpol").css("visibility", "visible");
    $("#lblPolicyNum").css("visibility", "visible");

    $("#txtBirthDay").css("visibility", "hidden");
    $("#labelPolicyAmount").css("visibility", "hidden");
    $("#txtPolicyAmount").css("visibility", "hidden");

    //Setting initial MAX length for textboxes
    $("#txtAppWorkPhone").attr('maxlength', '14');
    $("#txtAddPhone").attr('maxlength', '14');
    $("#txtAddAgentPhone").attr('maxlength', '14');       
    $("#txtConRequestorPhone").attr('maxlength', '14');
    $('#txtAgentNumber').attr("disabled", "disabled");
    $("#txtAppFname").attr('maxlength', '20');
    $("#txtAppMiddlename").attr('maxlength', '20');
    $("#txtAppLname").attr('maxlength', '30');
    $("#txtAppBirthDay").attr('maxlength', '10');
    $("#txtAppAddressFirst").attr('maxlength', '40');
    $("#txtAppAddressSecond").attr('maxlength', '40');
    $("#txtAppAddressThird").attr('maxlength', '40');
    $("#txtAppCity").attr('maxlength', '27');
    $("#txtAppssn").attr('maxlength', '11'); //<--SpecialFormatting
    $("#txtAppPrefix").attr('maxlength', '3');
    $("#txtAppHomePhone").attr('maxlength', '14');
    $("#txtAppZip").attr('maxlength', '5');
    $("#txtDocClinicName").attr('maxlength', '35');
    $("#txtConEmail").attr('maxlength', '50');
    $("#txtConFirstName").attr('maxlength', '15');
    $("#txtConMiddleName").attr('maxlength', '15');    
    $("#txtConPhone").attr('maxlength', '14'); //<--SpecialFormatting

    $("#txtDocAddress1").attr('maxlength', '30');
    $("#txtDocAddress2").attr('maxlength', '30');
    $("#txtDocCity").attr('maxlength', '20');
    $("#txtDocFirstName").attr('maxlength', '20');
    $("#txtDocLastName").attr('maxlength', '30');
    $("#txtDocPhone").attr('maxlength', '14'); //<--SpecialFormatting
    $("#txtDocZip").attr('maxlength', '10'); //<--SpecialFormatting
    $("#txtAppDriverLicNo").attr('maxlength', '25');
    $("#txtareaorderSpecialinstr").attr('maxlength', '90');
    $("#txtDocPatientNumber").attr('maxlength', '10');
    $("#txtPolicyAmount").attr('maxlength', '11');
    $("#txtConRequestorEmail").attr('maxlength', '50');    
    $("#txtConRequestorName").attr('maxlength', '40');
    $("#txtConLastName").attr('maxlength', '25');
    $("#txtIREmpOccupation").attr('maxlength', '30');    
    $("#TxtAreaAdditionalRemark").attr('maxlength', '260');

    //hide order tab controls
    $('.divOrder').css("visibility", "hidden"); 
    $('.textArea').css("visibility", "hidden");
    version = $("#aVersion").val();
    //if (version == 'C') {
    //    for (var i = 1; i <= 8; i++)
    //        $('#btnCanceltab' + i).css("visibility", "hidden");
    //}
});

$(function () {
    $('#chkMVR').change(function () {
        if (this.checked)
            ChkMVR = 1;
        else 
            ChkMVR = 0;                    
        SetRequireFields();
    });

    $('#chkIR').change(function () {
        if (this.checked) {
            ChkIR = 1;
            ChkIRYoungerAges = 0;
            $('#chkAHinspection').prop('checked', false)
            if (ChkAPS != 1)
                suffixField('IR');
            else
                suffixField('APS');
        }
        else {            
            ChkIR = 0;            
            $('#chkIRcoverSheet').prop('checked', false)
            if (ChkAPS == 1)
                suffixField('APS');
            else
                $("#lblAppSuffix").css("visibility", "hidden");
        }        
        SetRequireFields();
        
    });

    $('#chkAHinspection').change(function () {
        if (this.checked) {
            ChkIRYoungerAges = 1;
            ChkIR = 0;
            $('#chkIR').prop('checked', false)
            $('#chkIRcoverSheet').prop('checked', false)
        }
        else {
            ChkIRYoungerAges = 0;
        }        
        SetRequireFields();
    });

    $('input[type=radio][name=rdCreditEsearch]').change(function () {
        if (this.value == '1') {
            rtCreditRpt = 1;
            rtEsearch = 0;            
        }
        else if (this.value == '2') {
            rtCreditRpt = 0;
            rtEsearch = 1;
        }
        SetRequireFields();
    });    

    $('input[type=radio][name=rdorderEMSI]').change(function () {
        rtEMSI = 0;
        rtSelectQuote = 0;
        rtRXREVIEW = 0;
        rtCorpMarket = 0;
        rtAIGdirect = 0;
        if (this.value == '1') {
            rtEMSI = 1;

        }
        if (this.value == '2') {
            rtSelectQuote = 1;
        }
        if (this.value == '3') {
            rtRXREVIEW = 1;
        }
        if (this.value == '4') {
            rtCorpMarket = 1;
        }
        if (this.value == '5') {
            rtAIGdirect = 1;
        }
    });

    $('#chkAPSEMSI').change(function () {
        if (this.checked) {
            ChkAPS = 1;            
            suffixField('APS');
        }
        else {
            ChkAPS = 0;
            if (ChkIR == 1)
                suffixField('IR');
            else
                $("#lblAppSuffix").css("visibility", "hidden");
            $('#chkAPSdbSheet').prop('checked', false);
            $('#chkAPSAgentError').prop('checked', false);
        }
        SetRequireFields();
    });

    $("#txtPolicyAmount").on("keypress keyup blur", function (event) {
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });

    $('#ddAppDriverLicState').change(function () {        
        var ddValue = $('#ddAppDriverLicState :selected').text();
        if (ChkMVR == 1) {
            if (ddValue == "NH")
                AlertBox('A New Hampshire MVR Authorization is required before an MVR order can be requested', Null);
            MVRRequireFields(ddValue.substring(0,2))
        }
        if(ChkMVR!=1)
            if (ChkIR == 1) {
                if (ddValue.length > 1) {
                    RequireOn("lblAppFname");
                    RequireOn("lblAppBirthDay");
                    RequireOn("lblAppLname");
                }
            }
    });

    $('#chkAddRepBBR').change(function () {
        if (this.checked)
            ChkBBR = 1;
        else
            ChkBBR = 0;
    });

    $("#chkIRcoverSheet").change(function () {
        var valid = 0;
        if(this.checked)
        {            
            if (ChkIR != 1) {
                AlertBox("Please select IR request order", "chkIR");
                valid = 1;
            }
        }
        if (valid == 1)
            $('#chkIRcoverSheet').prop('checked', false);
    });

    $("#chkAPSdbSheet").change(function () {
        var valid = 0;
        if (this.checked) {
            if (ChkAPS != 1) {
                AlertBox("Please select APS request order", "chkAPSEMSI");
                valid = 1;
            }
        }
        if (valid == 1)
            $('#chkAPSdbSheet').prop('checked', false);
    });

    $("#chkAPSAgentError").change(function () {
        var valid = 0;
        if (this.checked) {
            if (ChkAPS != 1) {
                AlertBox("Please select APS request order", "chkAPSEMSI");
                valid = 1;
            }
        }
        if (valid == 1)
            $('#chkAPSAgentError').prop('checked', false);
    });

    $('#chkAddRepCreditCheck').change(function () {
        if (this.checked)
            ChkCC = 1;
        else
            ChkCC = 0;
    });

    $('#chkAddRepCriminalRec').change(function () {
        if (this.checked)
            ChkCCR = 1;
        else
            ChkCCR = 0;
    });
 
    //Keypress events
    $("#txtAppZip").on("keypress keyup blur", function (event) {
        var Zip = $(this).val();
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
        if (ChkAPS == 1) {
            if (Zip.length == 5)
                Zip = Zip + "-";
        }
        $(this).val(Zip);
    });

    $("#txtAddZip").on("keypress keyup blur", function (event) {
        var Zip = $(this).val();
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
        if (Zip.length == 5)
            Zip = Zip + "-";
        $(this).val(Zip);
    });

    $("#txtDocZip").on("keypress keyup blur", function (event) {
        var Zip = $(this).val();
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
        if (Zip.length == 5)
            Zip = Zip + "-";
        $(this).val(Zip);
    });

    $("#txtConPhone").on("keypress keyup blur", function (event) {
        var phone = $(this).val();
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
        else
            phone = phoneFormat(phone);
        $(this).val(phone)
    });

    $("#txtAddAgentPhone").on('keypress', function (event) {
        var phone = $(this).val();
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
        else
            phone = phoneFormat(phone);
        $(this).val(phone)
    });

    $("#txtConRequestorPhone").on('keypress', function (event) {
        var phone = $(this).val();
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
        else
            phone = phoneFormat(phone);
        $(this).val(phone)
    });

    $("#txtAddPhone").on('keypress', function (event) {
        var phone = $(this).val();
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
        else
            phone = phoneFormat(phone);
        $(this).val(phone)
    });

    $("#txtAppHomePhone").on('keypress', function (event) {
        var phone = $(this).val();
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        } else
            phone = phoneFormat(phone);
        $(this).val(phone)
    });

    $("#txtAppWorkPhone").on('keypress', function (event) {
        var phone = $(this).val();
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        } else
            phone = phoneFormat(phone);
        $(this).val(phone)
    });

    $("#txtDocPhone").on('keypress', function (event) {
        var phone = $(this).val();
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        } else
            phone = phoneFormat(phone);
        $(this).val(phone)
    });
    
    $("#txtAppssn").on('keypress', function (event) {
        var ssn = $(this).val();
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
        if (ssn.length == 3) {
            ssn = ssn + "-";
            $(this).val(ssn);
        }
        if (ssn.length == 6) {
            ssn = ssn + "-";
            $(this).val(ssn);
        }
        $(this).val(ssn)
    });

    $("#txtAppBirthDay").on('keypress', function (event) {
        var date = $(this).val();
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
        if (date.length == 2) {
            date = date + "/";
            $(this).val(date);
        }
        if (date.length == 5) {
            date = date + "/";
            $(this).val(date);
        }
        $(this).val(date);
    });

    $("#txtAppPrefix").keypress(function (e) {
        var key = e.keyCode;
        if (key >= 48 && key <= 57) {
            e.preventDefault();
        }
    });

    $('#txtAppDriverLicNo').keypress(function (e) {
        var regex = new RegExp("^[a-zA-Z0-9]+$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }

        e.preventDefault();
        return false;
    });

    //Focus In and Out function
    $('#txtConRequestorPhone').focus(
    function () {
        if ($(this).val() == '(   )   -    ')
            $(this).val('');        
    });

    $("#txtAppBirthDay").focusout(function () {
        if (!isDate($("#txtAppBirthDay").val()))
            AlertBox("Please enter valid Date", "txtAppBirthDay");
    });
    
    $("#txtAppHomePhone").focusout(function () {
        if (!CheckPhoneNumFromat("txtAppHomePhone"))
            AlertBox("Please enter valid Phone number", "txtAppHomePhone");
    });

    $("#txtAppWorkPhone").focusout(function () {
        if (!CheckPhoneNumFromat("txtAppWorkPhone"))
            AlertBox("Please enter valid Phone number", "txtAppWorkPhone");
    });

    $("#txtConRequestorPhone").focusout(function () {
        if (!CheckPhoneNumFromat("txtConRequestorPhone"))
            AlertBox("Please enter valid Phone number", "txtConRequestorPhone");
    });

    $("#txtConPhone").focusout(function () {
        if (!CheckPhoneNumFromat("txtConPhone"))
            AlertBox("Please enter valid Phone number", "txtConPhone");
    });

    $("#txtDocPhone").focusout(function () {
        if (!CheckPhoneNumFromat("txtDocPhone"))
            AlertBox("Please enter valid Phone number", "txtDocPhone");
    });

    $("#txtAddPhone").focusout(function () {
        if (!CheckPhoneNumFromat("txtAddPhone"))
            AlertBox("Please enter valid Phone number", "txtAddPhone");
    });

    $("#txtAddAgentPhone").focusout(function () {
        if (!CheckPhoneNumFromat("txtAddAgentPhone"))
            AlertBox("Please enter valid Phone number", "txtAddAgentPhone");
    });

    $("#txtConEmail").focusout(function () {
        var emailID=$("#txtConEmail").val();
        if (emailID != '' && emailID != undefined)
            if (!validateEmail(emailID))
                AlertBox("Please enter valid email id", "txtConEmail");
    });
    
    $("#txtConRequestorEmail").focusout(function () {
        var emailID = $("#txtConRequestorEmail").val();
        if (emailID != '' && emailID != undefined)
            if (!validateEmail(emailID))
                AlertBox("Please enter valid email id", "txtConRequestorEmail");
    });
    
    $("#txtAppssn").focusout(function () {
        var ssnValue = $('#txtAppssn').val();
        if (ssnValue != '' && ssnValue != undefined)
            if (ssnValue.length != 11)
                AlertBox("Please enter valid SSN number", "txtAppssn");
    });

    $("#btnNexttab1").click(function () {
        CheckSelection()
        var valid = 0;
        //Main tab validation
        valid = tabOneValidation();
        if (ChkMVR == 0 && ChkIR == 0 && rtCreditRpt == 0 && rtEsearch == 0 && ChkAPS == 0 && ChkIRYoungerAges == 0) {
            valid = 1;
            AlertBox("Please select request type", "chkAPSEMSI");
        }
        if (valid == 0)
            Tab(2);
    });
    $("#btnNexttab2").click(function () {
        CheckSelection()
        var valid = 0;
        var mvrValid = 1;        
        //Based on selection code validate tab and navigate to next tab
        switch (selectionCode) {        
            case 1100: //MVR + IR                
                if (ChkMVR == 1) 
                    mvrValid = checkMVR();                                    
                if (mvrValid == 0) {
                    if (checkIR() == 0)
                        Tab(6);
                }
                break;
            case 11000://IR+CR
                if (checkIR() == 0)
                    Tab(6);
                break;
            case 11100://MVR+IR+CR
                if (ChkMVR == 1)
                    mvrValid = checkMVR();
                if (mvrValid == 0) {
                    if (checkIR() == 0)
                        Tab(6);
                }
                break;
            case 100://MVR                
                mvrValid = checkMVR();
                if (mvrValid == 0)
                    Tab(8);
                break
            case 1000://IR
                if (checkIR() == 0)
                    Tab(6);
                break;
            case 10000://CR
                valid = CrtandESchValidation();
                if (valid == 0)
                    Tab(8);
                break;
            case 10100://MVR+CR
                valid = MVRValidation();
                if (valid == 0)
                    valid = CrtandESchValidation();
                if (valid == 0)
                    Tab(8);
                break;
            case 10: //APS 
                valid = APSValidation(1);
                if (valid == 0)
                    Tab(3);
                break;
            case 1010: //APS+IR                
                if (checkIR() == 0) {
                    if (dropdownValidation('ddAppDriverLicState', "Driver's License State"))
                        valid = 1;
                }
                else
                    valid = 1;
                if (valid == 0) {
                    apsTab1 = 1;
                    Tab(3);
                }
                break;
            case 1110: //APS+MVR+IR
                if (ChkMVR == 1)
                    mvrValid = checkMVR();
                if (mvrValid == 0) {
                    if (checkIR() == 0) {
                        apsTab1 = 1;
                        Tab(3);
                    }
                }
                break;
            case 10010: //APS+CR
                valid = CrtandESchValidation();
                if (valid == 0) {
                    apsTab1 = 1;
                    Tab(3);
                }
                break;
            case 10110: //MVR+APS+CR
                valid = MVRValidation();
                if (valid == 0)
                    valid = CrtandESchValidation();
                if (valid == 0) {
                    apsTab1 = 1;
                    Tab(3);
                }
                break;
            case 11010: //CR+APS+IR
                if (checkIR() == 0) {
                    apsTab1 = 1;
                    Tab(3);
                }
                break;
            case 11110: //APS+MVR+IR+CR
                if (ChkMVR == 1)
                    mvrValid = checkMVR();
                if (mvrValid == 0) {
                    if (checkIR() == 0) {
                        apsTab1 = 1;
                        Tab(3);
                    }
                }
                break;
            case 110: //MVR + APS
                if (ChkMVR == 1)
                    mvrValid = checkMVR();
                if (mvrValid == 0) {
                    valid = APSValidation(1);
                    if (valid == 0)
                        Tab(3);
                }
                break;
            default:
                break;
        }        

    });
    $("#btnNexttab3").click(function () {        
        CheckSelection()
        var valid = 0;
        if (ChkAPS == 1) {
            valid = APSValidation(2); // 2 -checking Contact Tab validation 
            }
            if (valid == 0)
                Tab(4)        
    });
    $("#btnNexttab4").click(function () {
        CheckSelection()
        var valid = 1;
        if (ChkAPS == 1) {
            valid = APSValidation(3); // 3 -checking Doctor Tab validation 
        }
        if (valid == 0)
            Tab(5)
    });
    $("#btnNexttab5").click(function () {
        CheckSelection()
        if (ChkIR == 1 || ChkIRYoungerAges == 1)
            Tab(6);
        else {
            if (sourceListSelection() == 0)
                Tab(8);
        }
    });
    $("#btnNexttab6").click(function () {
        CheckSelection()
        var valid;
        if (ChkIR == 1 || ChkIRYoungerAges == 1) {
            valid = IRValidation(6);
            if (valid == 0)
                Tab(7);
        }
    });
    $("#btnNexttab7").click(function () {
        CheckSelection()
        Tab(8)
    });

    $("#btnPrevtab2").click(function () {
        CheckSelection()
        Tab(1)
    });
    $("#btnPrevtab3").click(function () {
        CheckSelection()
        Tab(2)
    });
    $("#btnPrevtab4").click(function () {
        CheckSelection()
        Tab(3)
    });
    $("#btnPrevtab5").click(function () {
        CheckSelection()
        Tab(4)
    });
    $("#btnPrevtab6").click(function () {
        CheckSelection()
        if (ChkAPS == 1) {
            Tab(5)
        } else {
            Tab(2);
        }

    });
    $("#btnPrevtab7").click(function () {
        CheckSelection()
        Tab(6);
    });
    $('#btnPrevtab8').click(function () {
        CheckSelection()
        switch (selectionCode) {
            case 1100: //MVR + IR    
                Tab(7)
                break;
            case 11000://IR+CR   
                Tab(7)
                break;
            case 11100://MVR+IR+CR 
                Tab(7)
                break;
            case 100://MVR                                
                Tab(2)
                break
            case 1000://IR             
                Tab(7)
                break;
            case 10000://CR
                Tab(2)
                break;
            case 10100://MVR+CR
                Tab(2)
                break;
            case 10: //APS 
                Tab(5)
                break;
            case 1010: //APS+IR
                Tab(7)
                break;
            case 1110: //APS+MVR+IR
                Tab(7)
                break;
            case 10010: //APS+CR
                Tab(5)
                break;
            case 10110: //MVR+APS+CR
                Tab(5)
                break;
            case 11010: //CR+APS+IR
                Tab(7)
                break;
            case 11110: //APS+MVR+IR+CR
                Tab(7)
                break;
            default:
                break;
        }
    });

    $('#btnSubmittab8').on('click', function () {   
        oSubmit++;
        if (oSubmit == 1) {
            var txtAppFname = $("#txtAppFname");
            var txtAppMiddlename = $("#txtAppMiddlename");
            var txtAppLname = $("#txtAppLname");
            var txtAppssn = $("#txtAppssn");
            var txtAppDriverLicNo = $("#txtAppDriverLicNo");
            var BirthDate = $("#txtAppBirthDay");
            OrderList = '';
            fileCrNames = '';
            var valid = 0;
            if (valid == 0)
                if (ChkMVR == 1) {
                    //$('#menuTab ul li a[href="#tab2"]').trigger('click');
                    // =============================================
                    // Validate that each of the required fields are
                    // filled in MVR visible tabs.
                    // Once validation completed. start procesing MVR order
                    // =============================================
                    if (mvrTab1 == 1) {
                        if (BirthDate.val() != '' && BirthDate.val() != undefined)
                            if (isDate(BirthDate.val())) {
                                OrderList = 'MVR';
                            }
                            else {
                                AlertBox('Please enter valid Date.', 'txtAppBirthDay');
                                Tab(2);
                                valid = 1;
                                oSubmit = 0;
                            }
                        else
                            OrderList = 'MVR';
                    }
                    else
                        if (MVRValidation() == 1) {
                            valid = 1;
                            oSubmit = 0;
                            Tab(2)
                        }
                }
            if (valid == 0)
                if (ChkIR == 1 || ChkIRYoungerAges == 1) {
                    // =============================================
                    // Validate that each of the required fields are
                    // filled in IR visible tabs.
                    // Once validation completed. start procesing IR order
                    // =============================================
                    var policyAmount;
                    policyAmount = $("#txtPolicyAmount").val();
                    if (policyAmount == null || policyAmount == '') {
                        Tab(1)
                        AlertBox('Required field is not completed <b>*Policy Amount.</b>', 'txtPolicyAmount');
                    }
                    if (irTab1 != 1) {
                        if (IRValidation(1) == 1) {
                            Tab(2);
                            valid = 1;
                            oSubmit = 0;
                        }
                    }
                    if (valid == 0)
                        if (irTab6 != 1) {
                            if (IRValidation(6) == 1) {
                                Tab(6);
                                valid = 1;
                                oSubmit = 0;
                            }
                        }
                    if (valid == 0) {
                        if (BirthDate.val() != '' && BirthDate.val() != undefined)
                            if (isDate(BirthDate.val())) {
                                var _TempDate = convertDate($("#txtAppBirthDay").val());
                                var _Amount = parseInt($("#txtPolicyAmount").val());
                                //Date Validation to find if age is between 61 and 70
                                var _Age = 0;
                                _Age = calcAge(_TempDate);
                                if (_Age > 61 && _Age < 71 && ($.trim(gCHCPlan) == 'CILL02' || $.trim(gCHCPlan) == 'CILL04' || $.trim(gCHCPlan) == 'CILL0M')) {
                                    if (_Amount > 1500000) {
                                        Tab(1);
                                        AlertBox('IR Order failed since this policy has Chronic Illness Rider and Amount is greater than $1.5 M.', 'txtPolicyAmount');
                                        valid = 1;
                                        oSubmit = 0;
                                    }
                                }
                                if (_Amount > 1500000 && ChkIRYoungerAges == 1) {
                                    Tab(1);
                                    AlertBox('IR Order failed: Amount should not be greater than 1.5 million for A&H Inspection for Younger Ages.', 'txtPolicyAmount');
                                    valid = 1;
                                    oSubmit = 0;
                                } else {
                                    if (OrderList.length > 0)
                                        OrderList = OrderList + ' and IR';
                                    else
                                        OrderList = OrderList + 'IR';
                                    // ProcessIR()
                                }
                            }
                            else {
                                Tab(2);
                                AlertBox('Invalid Date of Birth.', 'txtAppBirthDay');
                                valid = 1;
                                oSubmit = 0;
                            }
                        else
                            if (OrderList.length > 0)
                                OrderList = OrderList + ' and IR';
                            else
                                OrderList = OrderList + 'IR';
                    }
                }
            if (valid == 0)
                if (ChkAPS == 1) {
                    // =============================================
                    // Validate that each of the required fields are
                    // filled in APS visible tabs.
                    // Once validation completed. start procesing APS order
                    // =============================================           
                    if (apsTab1 != 1)
                        if (APSValidation(1) != 0) {
                            valid = 1;
                            oSubmit = 0;
                            Tab(2)
                        }
                    if (valid == 0)
                        if (apsTab2 != 1)
                            if (APSValidation(2) != 0) {
                                valid = 1;
                                oSubmit = 0;
                                Tab(3)
                            }
                    if (valid == 0)
                        if (apsTab3 != 1)
                            if (APSValidation(3) != 0) {
                                valid = 1;
                                oSubmit = 0;
                                Tab(4)
                            }
                    if (valid == 0) {
                        if (BirthDate.val() != '' && BirthDate.val() != undefined)
                            if (isDate(BirthDate.val())) {
                                fileCrNames = 'APS';
                            }
                            else {
                                Tab(2);
                                AlertBox('Please enter valid Date.', 'txtAppBirthDay');
                                valid = 1;
                                oSubmit = 0;
                            }
                        else
                            fileCrNames = 'APS';

                    }
                }
            if (valid == 0)
                if (rtCreditRpt == 1 || rtEsearch == 1) {
                    // =============================================
                    // Validate that each of the required fields are
                    // filled in CR visible tabs.
                    // Once validation completed. start procesing CR order
                    // =============================================
                    var policyAmount;
                    policyAmount = $("#txtPolicyAmount").val();
                    if (policyAmount == null || policyAmount == '') {
                        Tab(1);
                        AlertBox('Required field is not completed <b>*Policy Amount.</b>', 'txtPolicyAmount');
                    }

                    if (crTab1 != 1) {
                        var valid = CrtandESchValidation();
                        if (valid != 0)
                            Tab(2);
                    }
                    else {
                        if (rtCreditRpt == 1) {
                            if (BirthDate.val() != '' && BirthDate.val() != undefined)
                                if (isDate(BirthDate.val())) {
                                    if (fileCrNames.length > 1)
                                        fileCrNames = fileCrNames + ", Credit Report";
                                    else
                                        fileCrNames = fileCrNames + "Credit Report";
                                }
                                else {
                                    Tab(2);
                                    AlertBox('Please enter valid Date.', 'txtAppBirthDay');
                                    valid = 1;
                                    oSubmit = 0;
                                }
                            else
                                if (fileCrNames.length > 1)
                                    fileCrNames = fileCrNames + ", Credit Report";
                                else
                                    fileCrNames = fileCrNames + "Credit Report";
                        }
                        if (rtEsearch == 1) {
                            if (BirthDate.val() != '' && BirthDate.val() != undefined)
                                if (isDate(BirthDate.val())) {
                                    if (fileCrNames.length > 1)
                                        fileCrNames = fileCrNames + ", ESearch";
                                    else
                                        fileCrNames = fileCrNames + "ESearch";
                                }
                                else {
                                    Tab(2);
                                    AlertBox('Please enter valid Date.', 'txtAppBirthDay');
                                    valid = 1;
                                    oSubmit = 0;
                                }
                            else
                                if (fileCrNames.length > 1)
                                    fileCrNames = fileCrNames + ", ESearch";
                                else
                                    fileCrNames = fileCrNames + "ESearch";
                        }
                    }
                }


            if (ChkMVR == 0 && ChkIR == 0 && rtCreditRpt == 0 && rtEsearch == 0 && ChkAPS == 0 && ChkIRYoungerAges == 0) {
                Tab(1);
                valid = 1;
                oSubmit = 0;
                AlertBox('Select one order', 'chkMVR');
            }
            if (valid == 0) {               
                if (ChkAPS == 1)
                    apsTifCheck();
                else {
                    processDialog.show();
                    processOrder();                    
                }
            }            
        }
    });
    
    //clears all selections and required fields
    $("#btnClear").click(function () {
         ChkMVR = 0;
         ChkIR = 0;
         ChkIRYoungerAges = 0;
         rtCreditRpt = 0;
         rtEsearch = 0;
         ChkAPS = 0;
        $('#menuTab ul li').eq(1).addClass("hidden");
        $('#menuTab ul li').eq(2).addClass("hidden");
        $('#menuTab ul li').eq(3).addClass("hidden");
        $('#menuTab ul li').eq(4).addClass("hidden");
        $('#menuTab ul li').eq(5).addClass("hidden");
        $('#menuTab ul li').eq(6).addClass("hidden");

        //Main
        $("#txtBirthDay").css("visibility", "hidden");
        $("#labelPolicyAmount").css("visibility", "hidden");        
        $("#txtPolicyAmount").css("visibility", "hidden");
        $('#txtPolicyAmount').val('');
        $('#chkAPSEMSI').prop('checked', false)
        $('#chkMVR').prop('checked', false)
        $('#chkIR').prop('checked', false)
        $('#chkAHinspection').prop('checked', false)
        $('#chkAPSdbSheet').prop('checked', false)
        $('#chkIRcoverSheet').prop('checked', false)
        $('#chkAPSAgentError').prop('checked', false)
        $('input[name="rdCreditEsearch"]').prop('checked', false);



        $("#txtAppFname").attr('maxlength', '20');
        $("#txtAppMiddlename").attr('maxlength', '20');
        $("#txtAppLname").attr('maxlength', '30');

        $("#txtAppBirthDay").attr('maxlength', '10');
        $("#txtAppAddressFirst").attr('maxlength', '40');
        $("#txtAppAddressSecond").attr('maxlength', '40');
        $("#txtAppAddressThird").attr('maxlength', '40');
        $("#txtAppCity").attr('maxlength', '27');
        $("#txtAppssn").attr('maxlength', '11'); //<--SpecialFormatting
        $("#txtAppPrefix").attr('maxlength', '3');
        $("#txtAppHomePhone").attr('maxlength', '14');
        $("#txtAppZip").attr('maxlength', '5');
        $("#txtDocClinicName").attr('maxlength', '35');
        $("#txtConEmail").attr('maxlength', '50');
        $("#txtConFirstName").attr('maxlength', '15');
        $("#txtConMiddleName").attr('maxlength', '15');
        $("#txtConPhone").attr('maxlength', '14'); //<--SpecialFormatting

        $("#txtDocAddress1").attr('maxlength', '30');
        $("#txtDocAddress2").attr('maxlength', '30');
        $("#txtDocCity").attr('maxlength', '20');
        $("#txtDocFirstName").attr('maxlength', '20');
        $("#txtDocLastName").attr('maxlength', '30');
        $("#txtDocPhone").attr('maxlength', '14'); //<--SpecialFormatting
        $("#txtDocZip").attr('maxlength', '10'); //<--SpecialFormatting
        $("#txtAppDriverLicNo").attr('maxlength', '25');
        $("#txtareaorderSpecialinstr").attr('maxlength', '90');
        $("#txtDocPatientNumber").attr('maxlength', '10');
        $("#txtPolicyAmount").attr('maxlength', '11');
        $("#txtConRequestorEmail").attr('maxlength', '50');
        $("#txtConRequestorPhone").attr('maxlength', '14');
        $("#txtConRequestorName").attr('maxlength', '40');
        $("#txtConLastName").attr('maxlength', '25');

        RequireOff('labelPolicyNo');



    });

    $('#ddDocInstructon').change(function () {
        $('#txtEdit').val($('#ddDocInstructon :selected').text());
        $("#txtEdit").css("visibility", "hidden");
    });

    $('#btnEdit').click(function() {
        $('#txtEdit').val("");
        $('#txtEdit').val($('#ddDocInstructon :selected').text());
        $("#txtEdit").css("visibility", "visible");
    });

    //Show the Doctor instruction form...
    $("#btnDocAddline").click(function () {
        $("#lstDocPopList").empty();
        $('#txtEdit').val($('#ddDocInstructon :selected').text());
        $("#lstboxDocInstruction option").each(function () {
            var listBox = $('#lstDocPopList');
            listBox.append('<option value=' + $(this).val() + '>' + $(this).text() + '</option>');
        });        
    });

    //Adding doctor instruction - If we're here, they clicked OK.  Sync up the lists...
    $("#btnDocAdd").click(function () {
        var listBox = $('#lstDocPopList');
        var selectedValue = $('#ddDocInstructon :selected').val();
        var selectedText = $('#txtEdit').val();        
        listBox.append('<option value=' + selectedValue + '>' + selectedText + '</option>');
        $('#txtEdit').val("");
        $("#txtEdit").css("visibility", "hidden");
    });

    $("#btnDocRem").click(function () {
        var value = $("#lstDocPopList option:selected").val();
        if (value != 0 && value != '' && value != undefined)
            $("#lstDocPopList option:selected").remove();
        else
            AlertBox('select an item from the list, then click the "Remove" button');
    });

    $('#lstboxDocInstruction option').each(function () {
        if (!$(this).val())
            $(this).remove();
    });

    $('#btnDocMsubmit').click(function () {
        $("#lstboxDocInstruction").empty();
        $("#lstDocPopList option").each(function () {           
            var listBox = $('#lstboxDocInstruction');
            listBox.append('<option value=' + $(this).val() + '>' + $(this).text() + '</option>');
        });
    }); 

    $("#btnDocDeleteLine").click(function () {
        var value = $("#lstboxDocInstruction option:selected").val();
        if (value != 0 && value != '' && value != undefined)
            $("#lstboxDocInstruction option:selected").remove();
        else
            AlertBox('Select an item from the list, then click the "delete line" button');
    });

    $('a[href="#tab2"]').click(function (e) {
        CheckSelection()
        if (tabOneValidation() != 0)
            Tab(1);
    });
    $('a[href="#tab3"]').click(function (e) {
        CheckSelection()
        if (tabOneValidation() != 0)
            Tab(1);
    });
    $('a[href="#tab4"]').click(function (e) {
        CheckSelection()
        if (tabOneValidation() != 0)
            Tab(1);
    });
    $('a[href="#tab5"]').click(function (e) {
        CheckSelection()
        if (tabOneValidation() != 0)
            Tab(1);
    });
    $('a[href="#tab6"]').click(function (e) {
        CheckSelection()
        if (tabOneValidation() != 0)
            Tab(1);
    });
    $('a[href="#tab7"]').click(function (e) {
        CheckSelection()
        if (tabOneValidation() != 0)
            Tab(1);
    });
    $('a[href="#tab8"]').click(function (e) {
        CheckSelection()
        if (tabOneValidation() != 0)
            Tab(1);
    });

    $("#btnCanceltab1").click(function () {
        oCancel();
    });
    $("#btnCanceltab2").click(function () {
        oCancel();
    });
    $("#btnCanceltab3").click(function () {
        oCancel();
    });
    $("#btnCanceltab4").click(function () {
        oCancel();
    });
    $("#btnCanceltab5").click(function () {
        oCancel();
    });
    $("#btnCanceltab6").click(function () {
        oCancel();
    });
    $("#btnCanceltab7").click(function () {
        oCancel();
    });
    $("#btnCanceltab8").click(function () {
        oCancel();
    });       

    function oCancel() {
        // lgConfirmBox("Do you want to cancel the order?");
        if (version == 'C') {
            bootbox.confirm({
                message: "<b>Warning:</b> you have not generated an order.</br>Do you want to close the Requirement Ordering Window without generating an order?",
                buttons: {
                    confirm: {
                        label: 'Yes'
                    },
                    cancel: {
                        label: 'No'
                    }
                },
                callback: function (result) {
                    if (result) {
                        if (version == 'C')
                            closeWindow(true);
                        else {
                            jQuery.post(baseurl + '/Home/clearObjid', {})
                                .done(function (data) {
                                    if (data == "Y")
                                        window.location.assign(aLocation + "/Home/Search");
                                });
                        }
                    }
                }
            });
        }
    }

    function checkMVR() {
        var mvrValid = 1;
        if (ChkMVR == 1) {
            mvrValid = MVRValidation();
        }
        return mvrValid;
    }

    function checkIR() {
        var valid = 1;
        if (ChkIR == 1 || ChkIRYoungerAges == 1) {
            valid = IRValidation(1);
            if (rtCreditRpt == 1 || rtEsearch == 1)
                crTab1 = 1;          
        }
        return valid;
    }

    //Set require fields based one order selection
    function SetRequireFields() {
        clearRequirefields(); //First turn off everything, then re-set based on selections made
        orderCount = 0;
        fileGenCount = 0;
        selectionCode = 0;
        oMsgDisplayed = 0;
        fMsgDisplayed = 0;

        // set MVR fields
        if (ChkMVR == 1) {
            orderCount = orderCount + 1;
            selectionCode = selectionCode + 100;
            oMsgDisplayed = 1;
            $('#menuTab ul li').eq(1).removeClass('hidden');

            $('#labelPolicyNo').html('*Policy No:');
            //visibility 
            $("#txtAppFname").css("visibility", "visible");
            $("#txtAppMiddlename").css("visibility", "visible");
            $("#txtAppLname").css("visibility", "visible");
            $("#txtAppssn").css("visibility", "visible");
            $("#txtAppBirthDay").css("visibility", "visible");
            $("#txtAppDriverLicNo").css("visibility", "visible");
            $("#ddAppGender").css("visibility", "visible");
            $("#ddAppDriverLicState").css("visibility", "visible");

            $("#lblAppFname").css("visibility", "visible");
            $("#lblAppMiddlename").css("visibility", "visible");
            $("#lblAppLname").css("visibility", "visible");            
            $("#lblAppssn").css("visibility", "visible");
            $("#lblAppBirthDay").css("visibility", "visible");
            $("#lblAppDriverLicNo").css("visibility", "visible");
            $("#lblAppDriverLicState").css("visibility", "visible");
            $("#lblAppGender").css("visibility", "visible");

            $('.divOrder').css("visibility", "hidden");
            $('.textArea').css("visibility", "hidden");
            //Set length for textbox
            $("#txtAppFname").attr('maxlength', '20');
            $("#txtAppMiddlename").attr('maxlength', '15');
            $("#txtAppLname").attr('maxlength', '20');
            $("#txtAppDriverLicNo").attr('maxlength', '22');

            DropdownBind('MVRDriverState', 'ddAppDriverLicState');
            DropdownBind('Gender', 'ddAppGender'); //Gender dropdown

            //Require fields just * required no validation
            RequireOn("lblAppDriverLicNo");
            RequireOn("lblAppFname");
            RequireOn("lblAppMiddlename");
            RequireOn("lblAppLname");
            RequireOn("lblAppDriverLicState");
            RequireOn("lblAppBirthDay");
            RequireOn("lblAppssn");
            RequireOn("lblAppGender");         
        }

        //set credit report and ESearch fields
        if (rtCreditRpt == 1 || rtEsearch == 1) {
            fileGenCount = fileGenCount + 1;
            selectionCode = selectionCode + 10000;
            fMsgDisplayed = 1;
            $('#menuTab ul li').eq(1).removeClass('hidden');

            //visibility
            $("#labelPolicyAmount").css("visibility", "visible");
            $("#txtPolicyAmount").css("visibility", "visible");

            $("#txtAppFname").css("visibility", "visible");
            $("#txtAppMiddlename").css("visibility", "visible");
            $("#txtAppLname").css("visibility", "visible");
            $("#txtAppssn").css("visibility", "visible");
            $("#txtAppBirthDay").css("visibility", "visible");
            $("#txtAppAddressFirst").css("visibility", "visible");
            $("#txtAppAddressSecond").css("visibility", "visible");
            $("#txtAppCity").css("visibility", "visible");
            $("#txtAppZip").css("visibility", "visible");

            $("#ddAppState").css("visibility", "visible");

            $("#lblAppFname").css("visibility", "visible");
            $("#lblAppMiddlename").css("visibility", "visible");
            $("#lblAppLname").css("visibility", "visible");
            $("#lblAppssn").css("visibility", "visible");
            $("#lblAppBirthDay").css("visibility", "visible");
            $("#lblAppAddressFirst").css("visibility", "visible");
            $("#lblAppCity").css("visibility", "visible");
            $("#lblAppState").css("visibility", "visible");
            $("#lblAppZip").css("visibility", "visible");

            DropdownBind('IRstate', 'ddAppState');

            RequireOn("labelPolicyAmount");
            RequireOn("lblAppFname");
            RequireOn("lblAppLname");
            RequireOn("lblAppssn");
            RequireOn("lblAppBirthDay");
            RequireOn("lblAppAddressFirst");
            RequireOn("lblAppCity");
            RequireOn("lblAppState");
            RequireOn("lblAppZip");

            $("#txtAppFname").attr('maxlength', CR_ES_FIRST_NAME_LEN);
            $("#txtAppMiddlename").attr('maxlength', CR_ES_MIDDLE_NAME_LEN);
            $("#txtAppLname").attr('maxlength', CR_ES_LAST_NAME_LEN);
            $("#txtAppAddressFirst").attr('maxlength', CR_ES_ADD1_LEN);
            $("#txtAppAddressSecond").attr('maxlength', CR_ES_ADD2_LEN);
            $("#txtAppCity").attr('maxlength', CR_ES_CITY_LEN);
        }

        //set IR fields
        if (ChkIR == 1 || ChkIRYoungerAges == 1) {
            orderCount = orderCount + 1;
            selectionCode = selectionCode + 1000;
            oMsgDisplayed = 1;
            $('#menuTab ul li').eq(1).removeClass('hidden');
            $('#menuTab ul li').eq(5).removeClass('hidden');
            $('#menuTab ul li').eq(6).removeClass('hidden');
            ////////////////////applicant tab and Main            

            //visibility             
            $("#labelPolicyAmount").css("visibility", "visible");
            $("#txtPolicyAmount").css("visibility", "visible");

            $("#txtAppFname").css("visibility", "visible");
            $("#txtAppMiddlename").css("visibility", "visible");
            $("#txtAppLname").css("visibility", "visible");
            $("#txtAppssn").css("visibility", "visible");
            $("#txtAppBirthDay").css("visibility", "visible");
            $("#txtAppDriverLicNo").css("visibility", "visible");
            $("#txtAppAddressFirst").css("visibility", "visible");
            $("#txtAppAddressSecond").css("visibility", "visible");
            $("#txtAppCity").css("visibility", "visible");
            $("#txtAppHomePhone").css("visibility", "visible");
            $("#txtAppZip").css("visibility", "visible");

            //Applicant dropdown
            if (ChkIR == 1)
                $("#ddAppSuffix").css("visibility", "visible");
            $("#ddAppMaritalStatus").css("visibility", "visible");
            $("#ddAppState").css("visibility", "visible");
            $("#ddAppGender").css("visibility", "visible");
            $("#ddAppDriverLicState").css("visibility", "visible");

            //labels            
            $("#lblAppFname").css("visibility", "visible");
            $("#lblAppMiddlename").css("visibility", "visible");
            $("#lblAppLname").css("visibility", "visible");
            $("#lblAppssn").css("visibility", "visible");
            $("#lblAppBirthDay").css("visibility", "visible");
            $("#lblAppDriverLicNo").css("visibility", "visible");
            $("#lblAppAddressFirst").css("visibility", "visible");
            $("#lblAppCity").css("visibility", "visible");
            $("#lblAppHomePhone").css("visibility", "visible");
            $("#lblAppZip").css("visibility", "visible");
            if (ChkIR == 1)
                $("#lblAppSuffix").css("visibility", "visible");
            $("#lblAppDriverLicState").css("visibility", "visible");
            $("#lblAppGender").css("visibility", "visible");
            $("#lblAppMaritalStatus").css("visibility", "visible");
            $("#lblAppState").css("visibility", "visible");


            //Set length for textbox
            $("#txtAppFname").attr('maxlength', IR_FIRST_NAME_LEN);
            $("#txtAppMiddlename").attr('maxlength', IR_MIDDLE_NAME_LEN);
            $("#txtAppLname").attr('maxlength', IR_LAST_NAME_LEN);
            $("#txtAppDriverLicNo").attr('maxlength', IR_DRIVER_LIC_LEN);
            $("#txtPolicyAmount").attr('maxlength', IR_AMOUNT_LEN);
            $("#txtAppAddressFirst").attr('maxlength', '40');
            $("#txtAppAddressSecond").attr('maxlength', '25');
            $("#txtAppZip").attr('maxlength', IR_ZIP_LEN);
            $("#txtAppCity").attr('maxlength', IR_CITY_LEN);
            $("#txtAddBenificiaryFname").attr('maxlength', '15');
            $("#txtAddBenificiaryMname").attr('maxlength', '15');
            $("#txtAddBenificiaryLname").attr('maxlength', '25');
            $("#txtAddAgentName").attr('maxlength', '25');
            $("#txtAddAgencyName").attr('maxlength', '25');            

            //require fields            
            RequireOn("labelPolicyAmount");
            RequireOn("lblAppDriverLicNo");
            RequireOn("lblAppFname");
            RequireOn("lblAppssn")
            RequireOn("lblAppDriverLicState");
            RequireOn("lblAppBirthDay");
            RequireOn("lblAppAddressFirst");
            RequireOn("txtAppAddressSecond");
            RequireOn("lblAppCity");
            RequireOn("lblAppState");
            RequireOn("lblAppZip");
            RequireOn("lblAppHomePhone");
            RequireOn("lblAddEmpName");
            RequireOn("lblAddAddress1");
            RequireOn("lblAddOccupation");
            RequireOn("lblAddPhone");
            RequireOn("lblAddCity");
            RequireOn("lblAddState");
            RequireOn("lblAddZip");
            RequireOn("lblAddBenificiaryFname");
            RequireOn("lblAddBenificiaryLname");
            RequireOn("lblAddBenificiaryRship");

            //Dropdownlist data binding
            DropdownBind('IRDriverState', 'ddAppDriverLicState'); //driver's number state
            DropdownBind('Gender', 'ddAppGender'); //Gender dropdown
            DropdownBind('BenSuffix', 'ddAppSuffix'); //Suffix dropdown
            DropdownBind('IRstate', 'ddAppState'); //applicant state
            DropdownBind('BenRelationship', 'ddAddBeneficiaryRelationShip');
            DropdownBind('BenSuffix', 'ddAddbeneficiarySuf');
            DropdownBind('IRDriverState', 'ddAddState');
            DropdownBind('MaritalStatus', 'ddAppMaritalStatus');            
        }

        //set aps fields
        if (ChkAPS == 1) {            
            selectionCode = selectionCode + 10;
            fileGenCount = fileGenCount + 1;
            fMsgDisplayed = 1;

            //**************visibility**********

            //Tabs
            $('#menuTab ul li').eq(1).removeClass('hidden'); //Applicant Tab
            $('#menuTab ul li').eq(2).removeClass('hidden'); //Contact Tab
            $('#menuTab ul li').eq(3).removeClass('hidden'); //Doctor Tab
            $('#menuTab ul li').eq(4).removeClass('hidden'); //Authorization Tab

            //order tab
            $('.divOrder').css("visibility", "visible");
            $('.textArea').css("visibility", "visible");

            //Textbox
            $("#labelPolicyAmount").css("visibility", "visible");
            $("#txtPolicyAmount").css("visibility", "visible");
            $("#txtAgentNumber").removeAttr("disabled");

            $("#txtAppPrefix").css("visibility", "visible");
            $("#txtAppFname").css("visibility", "visible");
            $("#txtAppMiddlename").css("visibility", "visible");
            $("#txtAppLname").css("visibility", "visible");
            $("#txtAppSuffix").css("visibility", "visible");
            $("#txtAppssn").css("visibility", "visible");
            $("#txtAppBirthDay").css("visibility", "visible");
            $("#txtAppDriverLicNo").css("visibility", "visible");
            $("#ddAppDriverLicState").css("visibility", "visible");
            //$("#ddAppSuffix").css("visibility", "visible");
            $("#txtAppAddressFirst").css("visibility", "visible");
            $("#txtAppAddressSecond").css("visibility", "visible");
            $("#txtAppAddressThird").css("visibility", "visible");

            $("#txtAppCity").css("visibility", "visible");
            $("#ddAppState").css("visibility", "visible");
            $("#txtAppZip").css("visibility", "visible");
            $("#txtAppHomePhone").css("visibility", "visible");
            $("#txtAppWorkPhone").css("visibility", "visible");

            //label 
            $("#lblAppPrefix").css("visibility", "visible");
            $("#lblAppFname").css("visibility", "visible");
            $("#lblAppMiddlename").css("visibility", "visible");
            $("#lblAppLname").css("visibility", "visible");
            $("#lblAppSuffix").css("visibility", "visible");
            $("#lblAppssn").css("visibility", "visible");
            $("#lblAppBirthDay").css("visibility", "visible");
            $("#lblAppDriverLicNo").css("visibility", "visible");
            $("#lblAppDriverLicState").css("visibility", "visible");
            $("#lblAppAddressFirst").css("visibility", "visible");
            $("#lblAppCity").css("visibility", "visible");
            $("#lblAppState").css("visibility", "visible");
            $("#lblAppZip").css("visibility", "visible");
            $("#lblAppHomePhone").css("visibility", "visible");
            $("#lblAppWorkPhone").css("visibility", "visible");

            //Set Textbox length
            $("#txtAppFname").attr('maxlength', APS_FIRST_NAME_LEN);
            $("#txtAppMiddlename").attr('maxlength', APS_MIDDLE_NAME_LEN);
            $("#txtAppLname").attr('maxlength', APS_LAST_NAME_LEN);
            $("#txtAppAddressFirst").attr('maxlength', APS_ADD1_LEN);
            $("#txtAppAddressSecond").attr('maxlength', APS_ADD2_LEN);
            $("#txtAppAddressThird").attr('maxlength', APS_ADD3_LEN);
            $("#txtAppZip").attr('maxlength', APS_ZIP_LEN);
            $("#txtAppCity").attr('maxlength', APS_CITY_LEN);
            $("#txtAppPrefix").attr('maxlength', '3');
            $("#txtAppDriverLicNo").attr('maxlength', '25');

            //Set Requirefields   
            RequireOn("labelPolicyNo");
            RequireOn('lblAppFname');
            RequireOn('lblAppLname');
            RequireOn('lblAppssn');
            RequireOn('lblAppBirthDay');
            RequireOn('lblAppAddressFirst');
            RequireOn('lblAppCity');
            RequireOn('lblAppState');
            RequireOn('lblAppZip');
            RequireOn('lblAppHomePhone');
            RequireOn('lblDocState');
            RequireOn('lblDocCity');
            RequireOn('lblDocLname');
            //RequireOn('lblAutPageform');
            RequireOn('lblReqName');
            RequireOn('lblReqEmail');
            RequireOn('lblReqPhone');

            //Dropdownlist data binding
            DropdownBind('IRDriverState', 'ddAppDriverLicState'); //driver's number state
            DropdownBind('IRstate', 'ddAppState'); //applicant state
            DropdownBind('Doctor', 'ddDocInstructon') //Doctor instruction for popup window
            DropdownBind('IRDriverState', 'ddDocState') //Doctor state
            //DropdownBind('BenSuffix', 'ddAppSuffix'); //Applicant Suffix dropdown            
            findChildren(); //find children sources for object id            
        }

        // selectionCode will have a unique number based on the selections made
        // Set GUI rich edit lengths to the max based on the seletions made
        switch (selectionCode) {
            case 110: //MVR + APS
                $("#txtAppFname").attr('maxlength', '20');
                $("#txtAppMiddlename").attr('maxlength', '20');
                $("#txtAppLname").attr('maxlength', '30');
                $("#txtAppAddressFirst").attr('maxlength', '40');
                $("#txtAppAddressSecond").attr('maxlength', '40');
                $("#txtAppAddressThird").attr('maxlength', '40');
                $("#txtAppZip").attr('maxlength', '10');
                $("#txtAppCity").attr('maxlength', '27');
                $("#txtAppDriverLicNo").attr('maxlength', '22');
                $("#txtPolicyAmount").attr('maxlength', '11');
                break;
            case 1010: //APS + IR
                $("#txtAppFname").attr('maxlength', '20');
                $("#txtAppMiddlename").attr('maxlength', '20');
                $("#txtAppLname").attr('maxlength', '30');
                $("#txtAppAddressFirst").attr('maxlength', '40');
                $("#txtAppAddressSecond").attr('maxlength', '40');
                $("#txtAppAddressThird").attr('maxlength', '40');
                $("#txtAppZip").attr('maxlength', '10');
                $("#txtAppCity").attr('maxlength', '27');
                $("#txtAppDriverLicNo").attr('maxlength', '25');
                $("#txtPolicyAmount").attr('maxlength', '11');
                break;
            case 1100: //MVR + IR
                $("#txtAppFname").attr('maxlength', '20');
                $("#txtAppMiddlename").attr('maxlength', '15');
                $("#txtAppLname").attr('maxlength', '25');
                $("#txtAppAddressFirst").attr('maxlength', '40');
                $("#txtAppAddressSecond").attr('maxlength', '40');
                $("#txtAppZip").attr('maxlength', '5');
                $("#txtAppCity").attr('maxlength', '25');
                $("#txtAppDriverLicNo").attr('maxlength', '25');
                $("#txtPolicyAmount").attr('maxlength', '9');
                break;
            case 1110: //MVR + APS + IR
                $("#txtAppFname").attr('maxlength', '20');
                $("#txtAppMiddlename").attr('maxlength', '20');
                $("#txtAppLname").attr('maxlength', '30');
                $("#txtAppAddressFirst").attr('maxlength', '40');
                $("#txtAppAddressSecond").attr('maxlength', '40');
                $("#txtAppAddressThird").attr('maxlength', '40');
                $("#txtAppZip").attr('maxlength', '10');
                $("#txtAppCity").attr('maxlength', '27');
                $("#txtAppDriverLicNo").attr('maxlength', '25');
                $("#txtPolicyAmount").attr('maxlength', '11');
                break;
            case 10010: //APS + CR
                $("#txtAppFname").attr('maxlength', '25');
                $("#txtAppMiddlename").attr('maxlength', '20');
                $("#txtAppLname").attr('maxlength', '30');
                $("#txtAppAddressFirst").attr('maxlength', '40');
                $("#txtAppAddressSecond").attr('maxlength', '40');
                $("#txtAppZip").attr('maxlength', '10');
                $("#txtAppCity").attr('maxlength', '27');
                $("#txtPolicyAmount").attr('maxlength', '11');
                break;
            case 10100: //MVR + CR
                $("#txtAppFname").attr('maxlength', '25');
                $("#txtAppMiddlename").attr('maxlength', '15');
                $("#txtAppLname").attr('maxlength', '25');
                $("#txtAppAddressFirst").attr('maxlength', '30');
                $("#txtAppAddressSecond").attr('maxlength', '30');
                $("#txtAppZip").attr('maxlength', '5');
                $("#txtAppCity").attr('maxlength', '25');
                $("#txtAppDriverLicNo").attr('maxlength', '22');
                $("#txtPolicyAmount").attr('maxlength', '11');
                break;
            case 10110: //MVR + APS + CR
                $("#txtAppFname").attr('maxlength', '25');
                $("#txtAppMiddlename").attr('maxlength', '20');
                $("#txtAppLname").attr('maxlength', '30');
                $("#txtAppAddressFirst").attr('maxlength', '40');
                $("#txtAppAddressSecond").attr('maxlength', '40');
                $("#txtAppAddressThird").attr('maxlength', '40');
                $("#txtAppZip").attr('maxlength', '10');
                $("#txtAppCity").attr('maxlength', '27');
                $("#txtAppDriverLicNo").attr('maxlength', '22');
                $("#txtPolicyAmount").attr('maxlength', '11');
                break;
            case 11000: //IR + CR
                $("#txtAppFname").attr('maxlength', '25');
                $("#txtAppMiddlename").attr('maxlength', '20');
                $("#txtAppLname").attr('maxlength', '30');
                $("#txtAppAddressFirst").attr('maxlength', '40');
                $("#txtAppAddressSecond").attr('maxlength', '40');
                $("#txtAppZip").attr('maxlength', '10');
                $("#txtAppCity").attr('maxlength', '27');
                $("#txtAppDriverLicNo").attr('maxlength', '25');
                $("#txtPolicyAmount").attr('maxlength', '11');
                break;
            case 11010: //APS + IR + CR
                $("#txtAppFname").attr('maxlength', '25');
                $("#txtAppMiddlename").attr('maxlength', '20');
                $("#txtAppLname").attr('maxlength', '30');
                $("#txtAppAddressFirst").attr('maxlength', '40');
                $("#txtAppAddressSecond").attr('maxlength', '40');
                $("#txtAppAddressThird").attr('maxlength', '40');
                $("#txtAppZip").attr('maxlength', '10');
                $("#txtAppCity").attr('maxlength', '27');
                $("#txtAppDriverLicNo").attr('maxlength', '25');
                $("#txtPolicyAmount").attr('maxlength', '11');
                break;
            case 11100: //MVR + CR + IR
                $("#txtAppFname").attr('maxlength', '25');
                $("#txtAppMiddlename").attr('maxlength', '20');
                $("#txtAppLname").attr('maxlength', '25');
                $("#txtAppAddressFirst").attr('maxlength', '40');
                $("#txtAppAddressSecond").attr('maxlength', '40');
                $("#txtAppZip").attr('maxlength', '5');
                $("#txtAppCity").attr('maxlength', '25');
                $("#txtAppDriverLicNo").attr('maxlength', '25');
                $("#txtPolicyAmount").attr('maxlength', '11');
                break;
            case 11110: //APS + MVR + IR + CR
                $("#txtAppFname").attr('maxlength', '25');
                $("#txtAppMiddlename").attr('maxlength', '20');
                $("#txtAppLname").attr('maxlength', '30');
                $("#txtAppAddressFirst").attr('maxlength', '40');
                $("#txtAppAddressSecond").attr('maxlength', '40');
                $("#txtAppAddressThird").attr('maxlength', '40');
                $("#txtAppZip").attr('maxlength', '10');
                $("#txtAppCity").attr('maxlength', '27');
                $("#txtAppDriverLicNo").attr('maxlength', '25');
                $("#txtPolicyAmount").attr('maxlength', '11');
                break;
            default:
                break;
        }
    }

    //Based on state selection change applicant tab Mandatory fields(Only for MVR order)
    function MVRRequireFields(searchValue) {
        RequireOff("lblAppFname");
        RequireOff("lblAppMiddlename");
        RequireOff("lblAppLname");        
        RequireOff("lblAppBirthDay");
        RequireOff("lblAppssn");
        RequireOff("lblAppGender");
        var j = 0;
        var array;
        controlsName.length = 0;
        lableName.length = 0;
        var myXML = $(loadedXML).find("MVRstate").filter(function () {
            return $(this).find('id').text() == searchValue;
        });
        var display = myXML.children().map(function () {
            return $(this).text();
        }).get();
        if (display[1] !== null || display[1] != "") {
            array = display[1].split(';');
        }
        else
            AlertBox('novalue');
        if (array[0] != "NA") {
            for (var i = 0; i < array.length; ++i) {
                var result = $(loadedXML).find("field").filter(function () {
                    return $(this).find('id').text() == array[i];
                });
                var controlName = result.children().map(function () {
                    return $(this).text();
                }).get();
                RequireOn(controlName[1]);
                lableName[j] = controlName[3];
                controlsName[j] = controlName[2];
                j++;
            }
        }
        lableName[j] = "Driver's License Number";
        controlsName[j] = "txtAppDriverLicNo";
    }

    //Formating Phone number
    function phoneFormat(number) {
        var phone = number;
        if (phone.length == 0)
            phone = phone + "(";
        if (phone.length == 4)
            phone = phone + ") ";
        if (phone.length == 9)
            phone = phone + "-";
        return phone;
    }

    //Require textbox validation and set focus on that textbox
    function RequireFields(fieldName, labelName) {
        var txtValue = $("#" + fieldName + "").val();
        if (txtValue == null || txtValue == '' || txtValue == 0 || txtValue == "(   )   -    ") {
            AlertBox('Require field is not completed <b>*' + labelName + "</b>", fieldName);
            return true;
        }
        else
            return false;
    }

    //Removing * from label
    function RequireOff(controlName) {
        var value = $('#' + controlName + '').html();
        if (value.indexOf("*") != -1) {
            value = value.replace("*", "");
            $('#' + controlName + '').html(value);
        }
        else
            $('#' + controlName + '').html(value);
    }

    //Adding * in label
    function RequireOn(controlName) {
        var value = $('#' + controlName + '').html();
        if (value.indexOf("*") != -1) {
            $('#' + controlName + '').html(value)
        }
        else {
            value = "*" + value;
            $('#' + controlName + '').html(value)
        }
    }

    //Bind require Dropdownlist 
    function DropdownBind(xmlTag, dropdownName) {
        $("#" + dropdownName + "").empty();
        var select = $('#' + dropdownName + '');
        $(loadedXML).find(xmlTag).each(function () {
            var Value = $(this).find('id').text();
            var Label = $(this).find('value').text();
            select.append("<option  value='" + Value + "'>" + Label + "</option>");
        });
    }

    //getting work items children 
    function findChildren()
    {        
        var k = 0;
        jQuery.post(baseurl + "/Home/FindChildren", {
            ObjId: objId,
            AppId: appId,
            UserId: ""
        })
                         .done(function (data) {
                             var i = 0;
                             //$('.chkBoxWidth').empty();
                             //var content = "";
                             var objectID = [];
                             for (var key in data.ChildObjectIds) {                                 
                                 objectID[key] = data.ChildObjectIds[key];
                                // i++;
                                 //content += '<input type="checkbox" name="' + data.ChildObjectIds[key] + '" id=chk"' + i + '" value="' + data.ChildObjectIds[key] + '"/><label for="lbl' + i + '">' + data.ChildObjectIds[key] + '</label><br />';
                                 //addCheckbox(i, data.ChildObjectIds[key]);
                             }
                             getTypeName(objectID);
                         });       
    }

    function getTypeName(objid) {
        //var s_FILENAME = [];
       // var s_OBJID = []; // store only APS auth source 
        var s_COUNT = [];
        var s_ObjCount = []; // store except APS auth source objid
        var i = 0;
        //var j = 0;
        for (var key in objid) {
            jQuery.post(baseurl + "/Home/GetObjectData", {
                ObjId: objid[key],
                AppId: appId,
                UserId: ""
            })
                         .done(function (data) {
                             //i++;
                             var obj = data.ObjId;
                             for (var key in data.ObjectFields) {
                                 if (data.ObjectFields[key].FieldName == "typeName") {
                                     s_COUNT[i] = data.ObjectFields[key].FieldValue;
                                     s_ObjCount[i] = data.ObjId;
                                 }
                                 //if (data.ObjectFields[key].FieldValue == s_APS) { //Check whether source type is APSAUTH or not                                     
                                 //    s_FILENAME[j] = data.ObjectFields[key].FieldValue;
                                 //    s_OBJID[j] = obj;
                                 //    j++;
                                 //    }
                                 if (objid.length == s_COUNT.length) {
                                 //    if (s_OBJID.length >= 1)
                                 //        BindSourceList(s_OBJID, s_FILENAME); // if APSAUTH means bind APSAUTH alone to auth form
                                 //    else
                                 BindSourceList(s_ObjCount, s_COUNT); //Bind all source into auth form
                                 }                                         
                             }
                             i++;
                         });                    
        }                
    }

    //Display list of source present in the current object id.
    function BindSourceList(objid, fieldname) {
        var content = '<table id="tSource" cellspacing="0" style="width:100%;border-bottom: 1px solid;"><thead><tr><th>#</th><th>Source</th><th>Create_DateTime</th><th>Viewer</th></tr></thead></table><div class="inner_table"><table cellspacing="0" style="width:95%">';
        var i = 0;
        var apsFlag = 0;
        $(".chkBoxWidth").empty();
        for (var key in objid) {
            i++;
            var createdTime = objid[key];
            if (fieldname[key] == s_APS) //Check APSAUTH source type or not
                apsFlag = i;
            createdTime = createdTime.substring(0, 26);
            //<td><input type="checkbox"  id=chk' + i + ' value="' + objid[key] + '" onclick="sourceListSelection();"/></td>
            content += '<tr><td class="sourcePad"><input type="checkbox"  id=chk' + i + ' value="' + objid[key] + '" onclick="sourceListSelection(' + i + ');"/></td><td class="sourcePad"><label for="lbl' + i + '">' + fieldname[key] + '</label></td><td class="sourcePad"><label for="lblTime' + i + '">' + createdTime + '</label></td>' +
                '<td  class="sourcePad"><button id="btnView' + i + ' " data-id="' + objid[key] + '" class="btn btn-primary btn-xs" onClick="ShowTiff(this)" >View</button></td></tr>';
        }
        content += '</table></div>';
        $(".chkBoxWidth").html(content); 
        if (i >= 1) {
            if (apsFlag != 0)
                $("#chk" + apsFlag + "").attr('checked', true);
            else
                $("#chk1").attr('checked', true);
        }
    }
   
    //Clear all Require fields
    function clearRequirefields()
    {
        $('#menuTab ul li').eq(1).addClass("hidden");
        $('#menuTab ul li').eq(2).addClass("hidden");
        $('#menuTab ul li').eq(3).addClass("hidden");
        $('#menuTab ul li').eq(4).addClass("hidden");
        $('#menuTab ul li').eq(5).addClass("hidden");
        $('#menuTab ul li').eq(6).addClass("hidden");

        $("#labelPolicyAmount").css("visibility", "hidden");
        $("#txtPolicyAmount").css("visibility", "hidden");
        $("#txtAgentNumber").attr("disabled", "disabled");
        

        //hide order tab controls
        $('.divOrder').css("visibility", "hidden");
        $('.textArea').css("visibility", "hidden");

        //Applicant tab textboxs
        $("#txtAppPrefix").css("visibility", "hidden");
        $("#txtAppSuffix").css("visibility", "hidden");
        $("#txtAppFname").css("visibility", "hidden");
        $("#txtAppMiddlename").css("visibility", "hidden");
        $("#txtAppLname").css("visibility", "hidden");
        $("#txtAppssn").css("visibility", "hidden");
        $("#txtAppBirthDay").css("visibility", "hidden");
        $("#txtAppDriverLicNo").css("visibility", "hidden");
        $("#txtAppAddressFirst").css("visibility", "hidden");
        $("#txtAppAddressSecond").css("visibility", "hidden");
        $("#txtAppAddressThird").css("visibility", "hidden");
        $("#txtAppCity").css("visibility", "hidden");
        $("#txtAppHomePhone").css("visibility", "hidden");
        $("#txtAppZip").css("visibility", "hidden");
        $("#txtAppWorkPhone").css("visibility", "hidden");

        //Applicant dropdown
        $("#ddAppSuffix").css("visibility", "hidden");
        $("#ddAppMaritalStatus").css("visibility", "hidden");
        $("#ddAppState").css("visibility", "hidden");
        $("#ddAppGender").css("visibility", "hidden");
        $("#ddAppDriverLicState").css("visibility", "hidden");

        //labels
        $("#lblAppPrefix").css("visibility", "hidden");
        $("#lblAppFname").css("visibility", "hidden");
        $("#lblAppMiddlename").css("visibility", "hidden");
        $("#lblAppLname").css("visibility", "hidden");
        $("#lblAppssn").css("visibility", "hidden");
        $("#lblAppBirthDay").css("visibility", "hidden");
        $("#lblAppDriverLicNo").css("visibility", "hidden");
        $("#lblAppAddressFirst").css("visibility", "hidden");               
        $("#lblAppCity").css("visibility", "hidden");
        $("#lblAppHomePhone").css("visibility", "hidden");
        $("#lblAppZip").css("visibility", "hidden");
        $("#lblAppWorkPhone").css("visibility", "hidden");        
        $("#lblAppDriverLicState").css("visibility", "hidden");
        $("#lblAppGender").css("visibility", "hidden");
        $("#lblAppMaritalStatus").css("visibility", "hidden");
        $("#lblAppState").css("visibility", "hidden");

        //require off
        RequireOff("labelPolicyNo");
        RequireOff("labelPolicyAmount");
        RequireOff("lblAppPrefix");
        RequireOff("lblAppDriverLicNo");
        RequireOff("lblAppFname");
        RequireOff("lblAppMiddlename");
        RequireOff("lblAppLname");        
        RequireOff("lblAppDriverLicState");
        RequireOff("lblAppBirthDay");
        RequireOff("lblAppAddressFirst");        
        RequireOff("lblAppCity");
        RequireOff("lblAppState");        
        RequireOff("lblAppZip");
        RequireOff("lblAppWorkPhone");
        RequireOff("lblAppHomePhone");
        RequireOff("lblAddEmpName");
        RequireOff("lblAddAddress1");
        RequireOff("lblAddOccupation");
        RequireOff("lblAddPhone");
        RequireOff("lblAddCity");
        RequireOff("lblAddState");
        RequireOff("lblAddZip");
        RequireOff("lblAddBenificiaryFname");
        RequireOff("lblAddBenificiaryLname");
        RequireOff("lblAddBenificiaryRship");

        $("#txtAppFname").attr('maxlength', '20');
        $("#txtAppMiddlename").attr('maxlength', '20');
        $("#txtAppLname").attr('maxlength', '30');

        $("#txtAppBirthDay").attr('maxlength', '10');
        $("#txtAppAddressFirst").attr('maxlength', '40');
        $("#txtAppAddressSecond").attr('maxlength', '40');
        $("#txtAppAddressThird").attr('maxlength', '40');
        $("#txtAppCity").attr('maxlength', '27');
        $("#txtAppssn").attr('maxlength', '11'); //<--SpecialFormatting
        $("#txtAppPrefix").attr('maxlength', '3');
        $("#txtAppHomePhone").attr('maxlength', '14');
        $("#txtAppZip").attr('maxlength', '5');
        $("#txtDocClinicName").attr('maxlength', '35');
        $("#txtConEmail").attr('maxlength', '50');
        $("#txtConFirstName").attr('maxlength', '15');
        $("#txtConMiddleName").attr('maxlength', '15');
        $("#txtConPhone").attr('maxlength', '14'); //<--SpecialFormatting

        $("#txtDocAddress1").attr('maxlength', '30');
        $("#txtDocAddress2").attr('maxlength', '30');
        $("#txtDocCity").attr('maxlength', '20');
        $("#txtDocFirstName").attr('maxlength', '20');
        $("#txtDocLastName").attr('maxlength', '30');
        $("#txtDocPhone").attr('maxlength', '14'); //<--SpecialFormatting
        $("#txtDocZip").attr('maxlength', '10'); //<--SpecialFormatting
        $("#txtAppDriverLicNo").attr('maxlength', '25');
        $("#txtareaorderSpecialinstr").attr('maxlength', '90');
        $("#txtDocPatientNumber").attr('maxlength', '10');
        $("#txtPolicyAmount").attr('maxlength', '11');
        $("#txtConRequestorEmail").attr('maxlength', '50');
        $("#txtConRequestorPhone").attr('maxlength', '14');
        $("#txtConRequestorName").attr('maxlength', '40');
        $("#txtConLastName").attr('maxlength', '25');
        $("#lblAppSuffix").css("visibility", "hidden");        
    }

    //Validation for Main tab
    function tabOneValidation() {
        var valid = 0;
        if (valid == 0)
            if (ChkMVR == 1) {
                if ($("#txtPolicyNo").val() == null || $("#txtPolicyNo").val() == '') {
                    valid = 1;
                    AlertBox('Require field is not completed <b>*PolicyNo</b>', Null);                    
                }
            }
        if (valid == 0)
            if (ChkIR == 1 ) {
                var policyAmount;
                if ($("#chkIRcoverSheet").prop('checked') == true) {
                    policyAmount = $("#txtPolicyAmount").val();
                    if (policyAmount == null || policyAmount == '') {
                        valid = 1;
                        AlertBox('Required field is not completed <b>*Policy Amount.</b>', 'txtPolicyAmount');
                    }
                }
                else {
                    valid = 1;
                    AlertBox('Kindly acknowledge that you have checked coversheet and proceed.', 'chkIRcoverSheet')
                }
            }
        if (valid == 0)
            if (ChkIRYoungerAges == 1) {
                var pAmount = $("#txtPolicyAmount").val();
                if (pAmount == null || pAmount == '') {
                    valid = 1;
                    AlertBox('Required field is not completed <b>*Policy Amount.</b>', 'txtPolicyAmount');
                }
            }
        if (valid == 0)
            if (rtCreditRpt == 1 || rtEsearch == 1) {
                var policyAmount;
                policyAmount = $("#txtPolicyAmount").val();
                if (policyAmount == null || policyAmount == '') {
                    valid = 1;
                    AlertBox('Required field is not completed <b>*Policy Amount</b>', 'txtPolicyAmount');
                }
            }
        if (valid == 0)
            if (ChkAPS == 1) {
                var AgentNumber = $("#txtAgentNumber");
                if ($("#chkAPSdbSheet").prop('checked') != true) {
                    valid = 1;
                    AlertBox('Kindly acknowledge that you have checked coversheet and or Domino database and proceed.', 'chkAPSdbSheet')
                }
                else
                    if ($("#chkAPSAgentError").prop('checked') != true) {
                        valid = 1;
                        AlertBox('Check case for Agent error.', 'chkAPSAgentError')
                    }
                    else
                        if (gAgencyCode == 0 || gAgencyCode == null) {
                            valid = 1;
                            AlertBox('Check Agency Number - Order can not be placed.', 'txtAgentNumber');
                        }
            }
        return valid; // 0 is valid otherwise not valid
    }    

   //MVR required field validation
    function MVRValidation()
    {
        var mvrValid = 1;
        var valid = 0;
        var AppTxtName = ["txtAppFname", "txtAppMiddlename", "txtAppLname", "txtAppssn", "txtAppBirthDay", "txtAppDriverLicNo"];
        var AppLblName = ["First Name", "Middle Name", "Last Name", "SSN", "Birth Date", "Driver license Number"];
        filterFields = AppTxtName;
        if (controlsName.length == 0) {            
            for (var i = 0; i < AppTxtName.length; ++i) {
                if (RequireFields(AppTxtName[i], AppLblName[i])) {
                    valid = 1;
                    break;
                }
            }
            if (valid == 0) {
                if (dropdownValidation("ddAppDriverLicState", "Driver license state")) {
                    valid = 1;
                }
                else
                    if (dropdownValidation("ddAppGender", "Gender"))
                        valid = 1;                    
            }
        }
        else {
            for (var i = 0; i < controlsName.length; ++i) {
                if (controlsName[i] != "ddAppGender") {
                    if (RequireFields(controlsName[i], lableName[i])) {                        
                        valid = 1;
                        break;
                    }else
                        if (controlsName[i] == "txtAppssn") {
                            if ($('#txtAppssn').val().length != 11) {
                                AlertBox("Invalid SSN format", "txtAppssn");
                                valid = 1;
                                break;
                            }
                        }
                }
                else
                    if (dropdownValidation("ddAppGender", "Gender")) {
                        valid = 1;
                        break;
                    }
            }
        }
        if (valid == 0) {
            mvrValid = 0;
            mvrTab1 = 1;
        }
        else {
            mvrValid = 1;
            mvrTab1 = 0;
        }
        return mvrValid; // return 0 is valid, otherwise not valid.
    }

    //IR required field validation
    function IRValidation(tabNum)
    {
        var valid = 0;
        var irValid = 1;
        if (tabNum == 1) {
            var AppTxtNameIR = ["txtAppFname", "txtAppssn", "txtAppBirthDay", "txtAppDriverLicNo", "ddAppDriverLicState", "txtAppAddressFirst", "txtAppCity", "ddAppState", "txtAppZip", "txtAppHomePhone"];
            var AppLblValueIR = ["First Name","SSN","Birth Date(mm/dd/yyyy)", "Driver's License Number", "Driver license state", "Address", "City", "State", "Zip", "Home Phone"];
            if (controlsName.length != 0) {
                for (var k = 0; k < controlsName.length; k++) {
                    for (var r = 0; r < filterFields.length; r++) {
                        if (controlsName[k] == filterFields[r]) {
                            filterFields = jQuery.grep(filterFields, function (value) {
                                return value != filterFields[r];
                            });
                        }
                    }
                }
                for (var k = 0; k < filterFields.length; k++) {
                    for (var r = 0; r < AppTxtNameIR.length; r++) {
                        if (filterFields[k] == AppTxtNameIR[r]) {
                            AppTxtNameIR = jQuery.grep(AppTxtNameIR, function (value) {
                                return value != AppTxtNameIR[r];
                            });
                            AppLblValueIR = jQuery.grep(AppLblValueIR, function (value) {
                                return value != AppLblValueIR[r];
                            });
                        }
                    }
                }
            }
            for (var i = 0; i < AppTxtNameIR.length; ++i) {
                if (AppTxtNameIR[i] == "ddAppDriverLicState" || AppTxtNameIR[i] == "ddAppState")
                {
                    if (dropdownValidation(AppTxtNameIR[i], AppLblValueIR[i])) {
                        valid = 1;
                        break;
                    }
                } else
                    if (RequireFields(AppTxtNameIR[i], AppLblValueIR[i])) {                        
                        valid = 1;
                        break;
                    }else
                        if (AppTxtNameIR[i] == "txtAppssn") {
                            if ($('#txtAppssn').val().length != 11) {
                                AlertBox("Please enter correct SSN format", "txtAppssn");
                                valid = 1;
                                break;
                            }
                        }
            }

            if (valid == 0) {
                if (ChkIRYoungerAges != 1)
                    if (RequireFields("txtAppLname", "Last Name")) {
                        valid = 1;
                    }
            }
            if (valid == 0) {
                irTab1 = 1; //1 is IR applicant tab valid
                irValid = 0;
            }
            else {
                irTab1 = 0;
                irValid = 1;
            }
        }
        if (tabNum == 6) {
            var AddinfoTxtName = ["txtAddEmpName", "txtAddOccupation", "txtAddAddress1", "txtAddPhone", "txtAddCity", "ddAddState", "txtAddZip", "txtAddBenificiaryFname", "txtAddBenificiaryLname", "ddAddBeneficiaryRelationShip"];
            var AddinfoLblName = ["Employer Name", "Occupation", "Employer Address Line 1", "Employer Phone Number", "City", "State", "Zip", "Beneficiary First Name", "Beneficiary Last Name", "Beneficiary Relationship"];
            for (var i = 0; i < AddinfoTxtName.length; ++i) {
                if (AddinfoTxtName[i] == "ddAddState" || AddinfoTxtName[i] == "ddAddBeneficiaryRelationShip") {
                    if (dropdownValidation(AddinfoTxtName[i], AddinfoLblName[i])) {
                        valid = 1;
                        break;
                    }
                } else
                    if (RequireFields(AddinfoTxtName[i], AddinfoLblName[i])) {
                        valid = 1;
                        break;
                    }
            }
            if (valid == 0) {
                irTab6 = 1; //1 is IR Additional information tab valid
                irValid = 0;
            }
            else {
                irTab6 = 0;
                irValid = 1;
            }
        }

        return irValid; //0 is valid
    }

    //CR required field validation
    function CrtandESchValidation() {
        var crtEsrchvalid = 1;
        var valid = 0;
        if (rtCreditRpt == 1 || rtEsearch == 1) {

            var crtEsrchTxtName = ["txtAppFname", "txtAppLname", "txtAppssn", "txtAppBirthDay", "txtAppAddressFirst", "txtAppCity", "ddAppState", "txtAppZip"];
            var crtEsrchLblName = ["First Name", "Last Name", "SSN number", "Birth Date", "Address", "City", "State", "Zip"];

            if (controlsName.length != 0) {
                for (var k = 0; k < controlsName.length; k++) {
                    for (var r = 0; r < filterFields.length; r++) {
                        if (controlsName[k] == filterFields[r]) {
                            filterFields = jQuery.grep(filterFields, function (value) {
                                return value != filterFields[r];
                            });
                        }
                    }
                }
                for (var k = 0; k < filterFields.length; k++) {
                    for (var r = 0; r < crtEsrchTxtName.length; r++) {
                        if (filterFields[k] == crtEsrchTxtName[r]) {
                            crtEsrchTxtName = jQuery.grep(crtEsrchTxtName, function (value) {
                                return value != crtEsrchTxtName[r];
                            });
                            crtEsrchLblName = jQuery.grep(crtEsrchLblName, function (value) {
                                return value != crtEsrchLblName[r];
                            });
                        }
                    }
                }
            }

            for (var i = 0; i < crtEsrchTxtName.length; ++i) {
                if (crtEsrchTxtName[i] == "ddAppState") {
                    if (dropdownValidation(crtEsrchTxtName[i], crtEsrchLblName[i])) {
                        valid = 1;
                        break;
                    }
                } else
                    if (RequireFields(crtEsrchTxtName[i], crtEsrchLblName[i])) {
                        valid = 1;
                        break;
                    }else
                        if (crtEsrchTxtName[i] == "txtAppssn") {
                            if ($('#txtAppssn').val().length != 11) {
                                AlertBox("Please enter correct SSN format", "txtAppssn");
                                valid = 1;
                                break;
                            }
                        }
            }
            if (valid == 0) {
                crtEsrchvalid = 0;
                crTab1 = 1;
            }
        }
        return crtEsrchvalid;
    }

    //Check APS Tif file generated or not
    function apsTifCheck() {
        var valid = 1;
        //Check source list selection
        valid = sourceListSelection();
        if (valid != 1) {
            if (gTiffTimeStamp != undefined && gTiffTimeStamp != '') {
                var tPath = LocalOutputPath + YYYYMMDD(dateNow) + "\\" + GUID + "\\" + gTiffTimeStamp + ".tif";
                jQuery.post(
                       baseurl + '/Home/FileCheck',
                       {
                           tiffURL: tPath
                       })
                           .done(function (data) {
                               if (data) {
                                   processDialog.show();
                                   processOrder();
                               } else {
                                   AlertBox("*Page(s) Containing the Authorization Form");
                                   oSubmit = 0;
                                   Tab(5);
                               }
                           });
            } else {
                AlertBox("*Page(s) Containing the Authorization Form");
                oSubmit = 0;
                Tab(5);
            }
        }
        else
            oSubmit = 0;
    }

    //APS required field validation
    function APSValidation(tabNum) {
        var valid = 0;
        var apsValid = 1;
        if (tabNum == 1) {
            var apsAppTxtName = ["txtAppFname", "txtAppLname", "txtAppssn", "txtAppBirthDay", "txtAppAddressFirst", "txtAppCity", "ddAppState", "txtAppZip", "txtAppHomePhone"];
            var apsAppLblName = ["First Name", "Last Name", "SSN", "Birth Date", "Address", "City", "State", "Zip", "Home Phone"];
            if (controlsName.length != 0) {
                for (var k = 0; k < controlsName.length; k++) {
                    for (var r = 0; r < filterFields.length; r++) {
                        if (controlsName[k] == filterFields[r]) {
                            filterFields = jQuery.grep(filterFields, function (value) {
                                return value != filterFields[r];
                            });
                        }
                    }
                }
                for (var k = 0; k < filterFields.length; k++) {
                    for (var r = 0; r < apsAppTxtName.length; r++) {
                        if (filterFields[k] == apsAppTxtName[r]) {
                            apsAppTxtName = jQuery.grep(apsAppTxtName, function (value) {
                                return value != apsAppTxtName[r];
                            });
                            apsAppLblName = jQuery.grep(apsAppLblName, function (value) {
                                return value != apsAppLblName[r];
                            });
                        }
                    }
                }
            }

            for (var i = 0; i < apsAppTxtName.length; ++i) {
                if (apsAppTxtName[i] == "ddAppState") {
                    if (dropdownValidation(apsAppTxtName[i], apsAppLblName[i])) {
                        valid = 1;
                        break;
                    }
                } else
                    if (RequireFields(apsAppTxtName[i], apsAppLblName[i])) {
                        valid = 1;
                        break;
                    }
                if (apsAppTxtName[i] == "txtAppssn") {
                    if ($('#txtAppssn').val().length != 11) {
                        AlertBox("Please enter correct SSN format", "txtAppssn");
                        valid = 1;
                        break;
                    }
                }
            }

            if (valid == 0) {
                apsTab1 = 1; //1 is APS applicant tab valid
                apsValid = 0;
            }
            else {
                apsTab1 = 0;
                apsValid = 1;
            }
        }
        if (tabNum == 2) {
            var conTxtName = ["txtConRequestorName", "txtConRequestorPhone", "txtConRequestorEmail"];
            var conLblName = ["Requestor Full Name", "Requestor Phone Number", "Requestor Email"];
            for (var i = 0; i < conTxtName.length; i++) {
                if (RequireFields(conTxtName[i], conLblName[i])) {
                    valid = 1;
                    break;
                }
            }
            if (valid == 0) {
                apsTab2 = 1; //1 is APS Contact tab valid
                apsValid = 0;
            }
            else {
                apsTab2 = 0;
                apsValid = 1;
            }
        }
        if (tabNum == 3) {
            var apsDocTxtName = ["txtDocLastName", "txtDocCity"];
            var apsADocLblName = ["Doctor's Last Name", "City"];
            for (var i = 0; i < apsDocTxtName.length; ++i) {
                if (RequireFields(apsDocTxtName[i], apsADocLblName[i])) {
                    valid = 1;
                    break;
                }
            }
            if (valid == 0)
                if (dropdownValidation("ddDocState", "State"))
                    valid = 1;

            if (valid == 0) {
                apsTab3 = 1; //1 is APS Doctor tab valid
                apsValid = 0;
            }
            else {
                apsTab3 = 0;
                apsValid = 1;
            }
        }
        return apsValid; //0 is valid, 1 is not valid
    }

    //Phone number validation
    function CheckPhoneNumFromat(p_Num) {        
        var temp = $("#" + p_Num + "").val();
        if (temp != '' && temp.length != 14)
            return false;
        else
            return true;
    }
    
    //Checking source selected or not
    function sourceListSelection() {
        var valid = 1;
        for (var j = 0; j <= 100; j++) {
            if ($('#chk' + j + '').prop('checked') == true) {
                sSourceObjID = $('#chk' + j + '').val();
                valid = 0;
            }                     
        }
        if (valid == 1) {
            Tab(5)
            AlertBox('You must select the source that contains the authorization form.', 'chk1');
        }
        return valid;
    }

    //Dropdownbox require field validation function
    function dropdownValidation(ddName, labelNames) {
        var txtValue = $("#" + ddName + " :selected").val();
        if (txtValue == null || txtValue == '' || txtValue == 0) {
            AlertBox('Require field is not completed <b>*' + labelNames+"</b>", ddName);
            return true;
        }
        else
            return false;
    }

    //Showing processes modal box once submit the order
    var processDialog = processDialog || (function ($) {        

        // Creating modal dialog's DOM
        var $dialog = $(
            '<div class="modal bs-example-modal-m" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="overflow-y:visible;">' +
            '<div class="modal-dialog modal-m">' +
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
                    message = 'Order Processing...';
                }
                var settings = $.extend({
                    dialogSize: 'm',
                    progressType: '',
                    keyboard: false,
                    backdrop: 'static',
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

    function lgAlertBox(Message,o_FLAG) {
        bootbox.alert({
            message: Message,                        
            callback: function () {
                if (o_FLAG != undefined) {
                    if (OrderList != '' && fileCrNames != '')
                        closeAlert++;
                    else
                        closeAlert = 2;
                    if (closeAlert == 2)
                        if (oMsgDisplayed == 0 && fMsgDisplayed == 0) {
                            closeAlert = 0;
                            lgConfirmBox("Do you want to generate another order for this Policy?", true);
                        }
                }

            }
        })
    }

    function CloseConfirmation() {
        bootbox.confirm({
            message: "Close Requirement Ordering Window?",
            buttons: {
                confirm: {
                    label: 'Yes'
                },
                cancel: {
                    label: 'No'
                }
            },
            callback: function(result) {
                if (result)
                    CloseSession(true);
                else
                {                    
                    rConfirm = 1;
                    oSubmit = 0;
                    oMsgDisplayed = 0;
                    fMsgDisplayed = 0;
                    closeAlert = 0;
                    oloopCount = 0;
                    gloopCount = 0;
                }
            }});
    }

    function lgConfirmBox(Messsage,Flag,Control,TabNum) {
        bootbox.confirm({
            message: Messsage,                        
            buttons: {
                confirm: {
                    label: 'Yes'
                },
                cancel: {
                    label: 'No'
                }
            },
            callback: function (result) {
                if (!result) {
                    if (Flag) {
                        jQuery.post(baseurl + "/Home/clearObjid", {})
                            .done(function (data) {
                                if (data == "Y")
                                    window.location.assign(aLocation + "/Home/Search");
                                else
                                    CloseConfirmation();
                            });
                    } else {
                        Tab(TabNum);
                        setTimeout(function () {
                            $('#' + Control + '').focus();
                        }, 100);                        
                        rConfirm = 1;
                        oSubmit = 0;
                        oMsgDisplayed = 0;
                        fMsgDisplayed = 0;
                        closeAlert = 0;
                        oloopCount = 0;
                        gloopCount = 0;
                    }
                } else {
                    if (Control == undefined) {
                        OrderSelectionCount();
                        lgConfirmBox("Do you want to generate another order for this Insured?", false, "txtAppFname", 2);                        
                        jQuery.post(baseurl + "/Home/genGUID", {})
                            .done(function (data) {
                                if (data != "") {
                                    GUID = data;     
                                    $("#aGUID").val(GUID);
                                    gTiffTimeStamp = '';
                                }                                
                            });
                    }
                    if (!Flag) {
                        Tab(1);
                        rConfirm = 1;
                        oSubmit = 0;
                        oMsgDisplayed = 0;
                        fMsgDisplayed = 0;
                        closeAlert = 0;
                        oloopCount = 0;
                        gloopCount = 0;
                    }
                }
            }
        });
    }

    //changing flags incase of any order failed in between
    function checkErrorConfrim() {
        if (ChkMVR == 0 && ChkIR == 0 && rtCreditRpt == 0 && rtEsearch == 0 && ChkAPS == 0 && ChkIRYoungerAges == 0) {
            oMsgDisplayed = 0;
            fMsgDisplayed = 0;
            closeAlert = 0;
            oSubmit = 0;
        }
        else
            confirmPOPUP();
    }

    function oErrorHandler(reqType) {

        if (reqType == "MVR") {
            orderCount--;
            if (ChkIR == 1 || ChkIRYoungerAges == 1)
                OrderList = OrderList.replace(/MVR and /g, '');
            else
                OrderList = '';
            ChkMVR = 0;            
        }
        if (reqType == "IR") {
            orderCount--;
            if (OrderList.indexOf(" and IR") >= 0)
                OrderList = OrderList.replace(/ and IR/g, '');
            else
                OrderList = '';
            ChkIR = 0;
            ChkIRYoungerAges = 0;
        }
        if (reqType == "APS") {            
            fileGenCount--;
            if (rtCreditRpt == 1 || rtEsearch == 1)
                fileCrNames = fileCrNames.replace(/APS, /g, '');
            else
                fileCrNames = '';
            ChkAPS = 0;
        }
        if (reqType == "CR") {
            fileGenCount--;
            if (fileCrNames.indexOf(", Credit Report") >= 0)
                fileCrNames = fileCrNames.replace(/, Credit Report/g, '');
            else
                fileCrNames = '';
            rtCreditRpt = 0;            
        }
        if (reqType == "ES") {
            fileGenCount--;
            if (fileCrNames.indexOf(", ESearch") >= 0)
                fileCrNames = fileCrNames.replace(/, ESearch/g, '');
            else
                fileCrNames = '';
            rtCreditRpt = 0;
        }
        checkErrorConfrim();
    }
    //checking date format
    function isDate(txtDate) {
        var currVal = txtDate;
        if (currVal == '')
            return false;
        var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
        var dtArray = currVal.match(rxDatePattern); // is format OK?
        if (dtArray == null)
            return false;
        //Checks for mm/dd/yyyy format.
        dtMonth = dtArray[1];
        dtDay = dtArray[3];
        dtYear = dtArray[5];
        if (dtMonth < 1 || dtMonth > 12)
            return false;
        else if (dtDay < 1 || dtDay > 31)
            return false;
        else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
            return false;
        else if (dtMonth == 2) {
            var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
            if (dtDay > 29 || (dtDay == 29 && !isleap))
                return false;
        }
        return true;
    }

    //Age calculation
    function calcAge(dateString) {
        var birthday = +new Date(dateString);
        return ((Date.now() - birthday) / (31557600000));
    }

    //Hide model dialog box
    function closeProcessDialog()
    {
        setTimeout(function () {
            processDialog.hide();
        }, 100);
    }

    //Preform MVR process
    function ProcessMVR() {
        // =================================================================        
        // Dinesh Rajendran
        // Added Function to perform MVR processing
        var ssn = "";
        var DOB = "";
        var mvrAppFname = "";
        var mvrAppLname = "";
        var mvrAppMname = "";
        var mvrDriverLicense = "";
        var GEN = "";
        var DLS = "";
        var POLN = "";
        var reqData = "";

        sleep(2000); //pause 2 second
        var dNow = new Date();        

        mvrAppFname = $("#txtAppFname").val().substring(0, MVR_FIRST_NAME_LEN);
        mvrAppLname = $("#txtAppLname").val().substring(0, MVR_LAST_NAME_LEN);
        mvrAppMname = $("#txtAppMiddlename").val().substring(0, MVR_MIDDLE_NAME_LEN);
        mvrDriverLicense = $("#txtAppDriverLicNo").val().substring(0, MVR_DRIVER_LIC_LEN);

        POLN = $("#txtPolicyNo").val();
        DOB = $("#txtAppBirthDay").val().replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2");
        DLS = $("#ddAppDriverLicState option:selected").text().substring(0, 2);
        GEN = $("#ddAppGender option:selected").text().substring(0, 1);
        ssn = $("#txtAppssn").val().replace(/-/g, "");

        reqData = "<MVROrder><MVR>" +
         "<IvkId>R</IvkId>" + "<CpyId>" + companyCode + "</CpyId>" + "<VndCpyCd></VndCpyCd>" +
         "<EricRegCd></EricRegCd>" +
         "<AppLastName>" + mvrAppLname + "</AppLastName>" +
         "<AppFirstName>" + mvrAppFname + "</AppFirstName>" +
         "<AppMiddleName>" + mvrAppMname + "</AppMiddleName>" +
          "<DOB>" + DOB + "</DOB>" +
         "<SSN>" + ssn + "</SSN>" +
         "<Gender>" + GEN + "</Gender>" +
         "<DLState>" + DLS + "</DLState>" +
         "<DLNo>" + mvrDriverLicense + "</DLNo>" +
         "<PolNo>" + POLN + "</PolNo>" +
         "</MVR></MVROrder>";

        //Build Comment

        var sComment = "ROS: MVR ordered from ChoicePoint with - " + $.trim($("#txtAppFname").val()) + " " + $.trim($("#txtAppMiddlename").val()) + " " + $.trim($("#txtAppLname").val()) +
        ", " + $.trim($("#txtAppDriverLicNo").val()) +
        ", " + DLS +
        ", " + $("#txtAppBirthDay").val() +
        ", " + GEN +
        ", " + $("#txtAppssn").val() + "";

        $.ajax({
            type: 'POST',
            cache: false,
            url: baseurl + '/Home/soapRequestMVR',
            data: { rqdata: reqData },
            success: function (data) {
                if (data.toUpperCase() == "SUCCESS") {
                    //AlertBox("MVR Order was successfully processed", Null)
                    mSuccess = 1;
                    MVRcomments(dNow, sComment);//Add MVR Comments to AWD
                }
                else {
                    closeProcessDialog()
                    if (data.toUpperCase() == "FAILED: WSDLREADER:XML PARSER FAILED.")
                        lgAlertBox('MVR Order failed: VBWebServiceAgent web service is not available, please try again later; If problem persists, please contact MWAdmin and MWSpringfield. Detailed error message - WSDLReader: XML Parser failure, system cannot locate the object specified.');
                    else
                        if (data.toUpperCase() == "FAILED: MVR WEB SERVICE REMOTE EXCEPTION")
                            lgAlertBox('MVR Order failed: MVR web service is not available, please try again later; If problem persists, please contact MWAdmin and MWSpringfield. Detailed error message - MVR web service Remote Exception.');
                        else
                            if (data.toUpperCase() == "FAILED: CONNECTOR:CONNECTION TIME OUT")
                                lgAlertBox('Please contact MWAdmin and MWSpringfield to verify this MVR request with policy number ' + policyNumber + ' has been processed. Detailed error message -  RunTime/timeout Exception.');
                            else
                                if (data.toUpperCase() == "FAILED: RUNTIME/TIMEOUT EXCEPTION")
                                    lgAlertBox('Please contact MWAdmin and MWSpringfield to verify this MVR request with policy number ' + policyNumber + ' has been processed. Detailed error message -  RunTime/timeout Exception.');
                                else
                                    if (data.toUpperCase() == "FAILED - FTP ISSUE.")
                                        lgAlertBox('Please contact MWAdmin and MWSpringfield to verify this MVR request with policy number ' + policyNumber + ' has been processed. Detailed error message - ftp issue.');
                                    else
                                        lgAlertBox('MVR order Failed');
                    oErrorHandler('MVR');
                }
            },
            error: function (exception) {
            }
        });
    }

    //Preform IR process
    function ProcessIR() {
        // =================================================================        
        // Dinesh Rajendran
        // Added Function to perform IR processing

        if (ChkIR == 1 || ChkIRYoungerAges == 1) {
           
            var BBR = "";
            var cc = "";
            var PR = "";
            var CCR = "";
            if (ChkBBR == 1)
                BBR = "Checked";
            if (ChkCC == 1)
                cc = "Checked";
            if (ChkCCR == 1)
                CCR = "Checked";
            
            var birthDate = convertDate($("#txtAppBirthDay").val());
            var rqData;
            var rsData;
            var IRssn = "";
            var HPhoneNo = "";
            var EPhoneNo = "";
            var IRPhNo = "";
            var iGEN = "";
            var iDLS = "";
            var iZip = "";
            var iEZip = "";
            var iState = "";
            var iEState = "";
            var irAppFName = "";
            var irAppMName = "";
            var irAppLName = "";
            var irCity = "";
            var co;
            var cmbIRAppSuffix = "";
            var cmbMaritalStatus = "";
            var cmbIRSuffix = "";
            var cmbIRRelationship = "";

            sleep(2000); //pause 2 second
            var dnow = new Date();
            //Error checking
            

            cmbIRAppSuffix = $("#ddAppSuffix option:selected").text();
            cmbMaritalStatus = $("#ddAppMaritalStatus option:selected").text();
            cmbIRSuffix = $("#ddAddbeneficiarySuf option:selected").text();
            cmbIRRelationship = $("#ddAddBeneficiaryRelationShip option:selected").text();

            iEZip = $("#txtAddZip").val().replace(/-/g, "");
            iEZip = $.trim(iEZip.substring(0, IR_ZIP_LEN))

            iZip = $("#txtAppZip").val().replace(/-/g, "");
            iZip = $.trim(iZip.substring(0, IR_ZIP_LEN));

            IRssn = $("#txtAppssn").val().replace(/-/g, "");

            HPhoneNo = $("#txtAppHomePhone").val().replace(/-/g, "");
            HPhoneNo = HPhoneNo.replace(/[()]/g, "");
            HPhoneNo = $.trim(HPhoneNo);

            EPhoneNo = $("#txtAddPhone").val().replace(/-/g, "");
            EPhoneNo = EPhoneNo.replace(/[()]/g, "");
            EPhoneNo = $.trim(EPhoneNo);

            IRPhNo = $("#txtAddAgentPhone").val().replace(/-/g, "");
            IRPhNo = IRPhNo.replace(/[()]/g, "");
            IRPhNo = $.trim(IRPhNo);

            irAppFName = $("#txtAppFname").val().substring(0, IR_FIRST_NAME_LEN);
            irAppMName = $("#txtAppMiddlename").val().substring(0, IR_MIDDLE_NAME_LEN);
            irAppLName = $("#txtAppLname").val().substring(0, IR_LAST_NAME_LEN);

            irCity = $("#txtAppCity").val().substring(0, IR_CITY_LEN);

            iGEN = $("#ddAppGender option:selected").text().substring(0, 1);
            iDLS = $("#ddAppDriverLicState option:selected").text().substring(0, 2);
            iState = $("#ddAppState option:selected").text().substring(0, 2);
            iEState = $("#ddAddState option:selected").text().substring(0, 2);

            if (companyCode == "USL" || companyCode == "0A8")
                co = "0A8"
            else
                if (companyCode == "001")
                    co = "001";
                else
                    if (companyCode == '002')
                        co = "002";
                    else
                        co = "040";                
            var IRCaption = '';
            var sTemp = '';
            if (companyCode != '001' && companyCode != '002') {
                if (ChkIRYoungerAges == 1)
                    IRCaption = $("#lblChkAHinspct").text();
                else
                    IRCaption = $("#lblChkIR").text();
            } else {
                if (ChkIRYoungerAges == 1)
                    switch (companyCode) {
                        case '001':
                        case '002':
                            IRCaption = "A&H Inspection (ALIP)";
                            break;
                    }
            }
            sTemp = GetConfigValue("Account", "Item", IRCaption + " " + co);
            rqData = "<IRRequest><PolicyNumber>" + $("#txtPolicyNo").val() + "</PolicyNumber>"
                    + "<PolicyAmount>" + $("#txtPolicyAmount").val() + "</PolicyAmount>"
                    + "<FirstName>" + irAppFName + "</FirstName>"
                    + "<MiddleName>" + irAppMName + "</MiddleName>"
                    + "<LastName>" + irAppLName + "</LastName>"
                    + "<Suffix>" + (cmbIRAppSuffix != undefined ? cmbIRAppSuffix : '') + "</Suffix>"
                    + "<Gender>" + iGEN + "</Gender>"
                    + "<SSN>" + IRssn + "</SSN>"
                    + "<BirthDate>" + birthDate + "</BirthDate>"
                    + "<MaritalStatus>" + (cmbMaritalStatus != undefined ? cmbMaritalStatus : '') + "</MaritalStatus>"
                    + "<DLNumber>" + $("#txtAppDriverLicNo").val() + "</DLNumber>"
                    + "<LicenseState>" + iDLS + "</LicenseState>"
                    + "<AddressLine1>" + $("#txtAppAddressFirst").val() + "</AddressLine1>"
                    + "<AddressLine2>" + $("#txtAppAddressSecond").val() + "</AddressLine2>"
                    + "<City>" + irCity + "</City>"
                    + "<State>" + iState + "</State>"
                    + "<Zip>" + iZip + "</Zip>"
                    + "<HomePhoneNumber>" + HPhoneNo + "</HomePhoneNumber>"
                    + "<Occupation>" + $("#txtAddOccupation").val() + "</Occupation>"
                    + "<EmployerName>" + $("#txtAddEmpName").val() + "</EmployerName>"
                    + "<EmployerAddressLine1>" + $("#txtAddAddress1").val() + "</EmployerAddressLine1>"
                    + "<EmployerAddressLine2>" + $("#txtAddAddress2").val() + "</EmployerAddressLine2>"
                    + "<EmployerCity>" + $("#txtAddCity").val() + "</EmployerCity>"
                    + "<EmployerState>" + iEState + "</EmployerState>"
                    + "<EmployerZip>" + iEZip + "</EmployerZip>"
                    + "<EmployerPhoneNumber>" + EPhoneNo + "</EmployerPhoneNumber>"
                    + "<BeneficiaryFirstName>" + $("#txtAddBenificiaryFname").val() + "</BeneficiaryFirstName>"
                    + "<BeneficiaryMiddleName>" + $("#txtAddBenificiaryMname").val() + "</BeneficiaryMiddleName>"
                    + "<BeneficiaryLastName>" + $("#txtAddBenificiaryLname").val() + "</BeneficiaryLastName>"
                    + "<BeneficiarySuffix>" + (cmbIRSuffix != undefined ? cmbIRSuffix : '') + "</BeneficiarySuffix>"
                    + "<BeneficiaryRelationship>" + (cmbIRRelationship != undefined ? cmbIRRelationship : '') + "</BeneficiaryRelationship>"
                    + "<AgentName>" + $("#txtAddAgentName").val() + "</AgentName>"
                    + "<AgencyName>" + $("#txtAddAgencyName").val() + "</AgencyName>"
                    + "<AgencyAgentPhoneNumber>" + IRPhNo + "</AgencyAgentPhoneNumber>"
                    + "<BBR>" + BBR + "</BBR>"
                    + "<CreditCheck>" + cc + "</CreditCheck>"
                    + "<PoliceRecord>" + PR + "</PoliceRecord>"
                    + "<CriminalCourtRecord>" + CCR + "</CriminalCourtRecord>"
                    + "<SpecialAttentionAdditionalRemark>" + $("#TxtAreaAdditionalRemark").val() + "</SpecialAttentionAdditionalRemark>"
                    + "<StatsCompany>" + companyCode + "</StatsCompany>"
                    + "<BusinessArea>" + gUnitCd + "</BusinessArea>"
                    + "<HHAccountNumber>" + sTemp + "</HHAccountNumber>"
                    + "</IRRequest>";
            rqData = rqData.replace(/&/g, "and");

            //Build Comment
            var sComment = "";
            if (ChkIR == 1)
                sComment = "ROS - IR";
            else
                sComment = "ROS - A&H IR";

            sComment = sComment + " Ordered from CRL Plus with  - " + $.trim($("#txtAppFname").val()) + " " + $.trim($("#txtAppMiddlename").val()) + " " + $.trim($("#txtAppLname").val()) +
            ", " + $.trim($("#txtAppDriverLicNo").val()) +
            ", " + iDLS +
            ", " + $("#txtAppBirthDay").val() +
            ", " + iGEN +
            ", " + $("#txtAppssn").val() + "";

            if ($.trim($("#TxtAreaAdditionalRemark").val()) != null || $.trim($("#TxtAreaAdditionalRemark").val()) != "")
                sComment = sComment + " " + $("#TxtAreaAdditionalRemark").val();
             
            $.ajax({
                type: 'POST',
                cache: false,
                url: baseurl + '/Home/soapRequestIR',
                data: { reqData: rqData },
                success: function (data) {
                    if (data.toUpperCase() == "SUCCESS") {
                        //AlertBox("IR Order was successfully processed", Null)
                        iSuccess = 1;
                        IRcomments(dnow, sComment);//Add IR Comments to AWD
                        if (ChkIR == 1)
                            IRcomments(dnow, mmddyyyyhhmmAMPM(new Date()) + " - IR-CRL Plus: Checked coversheet.");
                    }
                    else {
                        closeProcessDialog()
                        if (data.toUpperCase() == "FAILED: WSDLREADER:XML PARSER FAILED")
                            lgAlertBox('IR Order failed: VBWebServiceAgent web service is not available, please try again later; If problem persists, please contact MWAdmin and MWSpringfield. Detailed error message - WSDLReader: XML Parser failure, system cannot locate the object specified.');
                        else
                            if (data.toUpperCase() == "FAILED: IR WEB SERVICE REMOTE EXCEPTION")
                                lgAlertBox('IR Order failed: IR web service is not available, please try again later; If problem persists, please contact MWAdmin and MWSpringfield. Detailed error message - IR web service Remote Exception.');
                            else
                                if (data.toUpperCase() == "FAILED: MIDDLEWARE CALL TO HH WEB SERVICE VIA DATAPOWER FAILURE.")
                                    lgAlertBox('IR Order failed: Middleware call to HH web service via DataPower failure, please try again later; If problem persists, please contact MWAdmin and MWSpringfield. Detailed error  message - middleware call to HH web service via DataPower failure.');
                                else
                                    if (data.toUpperCase() == "FAILED: CONNECTOR:CONNECTION TIME OUT")
                                        lgAlertBox('Please contact MWAdmin and MWSpringfield to verify this IR request with policy number ' + policyNumber + ' has been processed. Detailed error message -  RunTime/timeout Exception.');
                                    else
                                        lgAlertBox('IR Order Failed');
                        oErrorHandler('IR');
                    }
                },
                error: function (exception) {
                }
            });     
        }
    }

    //Loading dialog bar
    function LoadingDialog() {
        bootbox.dialog({ message: '<div class="text-center"><i class="fa fa-spin fa-spinner"></i> Loading...</div>' })
    }

    //Preform Credit Report generation process
    function ProcessCreditRpt() {
        // =================================================================        
        // Dinesh Rajendran
        // Added Function to perform Credit report processing

        
        // The functions we call will need to be synchronized to the same
        // timestamp.  Get it first...

        sleep(2000); //pause 2 second
        var dNow = new Date();

        // Clean any old information out of the LabOne variables (very important!)
        CleanLabOneData();

        // Read the information out of the GUI into the LabOne variables...

        ReadCreditRptOrder();

        // =================================================================
        // Build the IDX file.  Note that this also returns the Quoteback
        // number that we'll use plus the location of the temp IDX file...
        // =================================================================

        //Generate Order Files
        GenerateCreditRptOrderFile(dNow);
    }

    //Preform ESearch Report generation process
    function ProcessEsearch() {
        // =================================================================        
        // Dinesh Rajendran
        // Added Function to perform Esearch processing

        // The functions we call will need to be synchronized to the same
        // timestamp.  Get it first...
        sleep(2000); //pause 2 second
        var dNow = new Date();

        // Clean any old information out of the LabOne variables (very important!)
        CleanLabOneData();

        // Read the information out of the GUI into the LabOne variables...
        ReadESearchOrder();


        // =================================================================
        // Build the IDX file.  Note that this also returns the Quoteback
        // number that we'll use plus the location of the temp IDX file...
        // =================================================================

        //Generate Order Files
        GenerateESearchOrderFile(dNow);


    }

    //Preform APS process
    function ProcessAPS() {
        // =================================================================        
        // Dinesh Rajendran
        // Added Function to perform APS processing

        //******Page info****

        //need  to discuss

        //*************

        //***********I. Generate Order Files********

        // The functions we call will need to be synchronized to the same
        // timestamp.  Get it first...
        sleep(2000); // Wait for the clock to change
        var dNow = new Date();

        // Clean any old information out of the LabOne variables (very important!)
        CleanLabOneData();

        // Read the information out of the GUI into the LabOne variables...
        ReadAPSOrder();

        // =================================================================
        // Build the IDX file.  Note that this also returns the Quoteback
        // number that we'll use plus the location of the temp IDX file...
        // =================================================================

        // RLC store the comments in LabOneDeclares object, if any
        CommentArray = $("#lstboxDocInstruction option").map(function () {
            return this.text;
        }).get();
        SequenceCount = 0;
        CommentCount = CommentArray.length;
        if (rtRXREVIEW != 1)
            AG01AgentNumber = $("#txtAgentNumber").val();

        GenerateAPSOrderFile(dNow);

    }

    function processOrder() {
        if (ChkMVR == 1)
            ProcessMVR();
        if (ChkIR == 1 || ChkIRYoungerAges == 1)
            ProcessIR();
        if (ChkAPS == 1)
            ProcessAPS();
        if (rtCreditRpt == 1)
            ProcessCreditRpt();
        if (rtEsearch == 1)
            ProcessEsearch();
    }

    //Submitting MVR comments to AWD
    function MVRcomments(dNow, sComment) {

        var sQuoteback = $("#txtPolicyNo").val() + YYYYMMDDHHMMSS(dNow);
        //Add Comments To AWD        

        $.ajax({
            type: 'POST',
            cache: false,
            url: baseurl + '/Home/AddComments',
            data: {
                ObjId: objId,
                Comment: sComment,
                AppId: appId,
                UserId: aUser,
                cmdType:"MVR"
            },
            dataType: 'json',
            success: function (data) {
                closeProcessDialog()                
                if (data.Response.Message.indexOf("Successfully") < 0) {
                    if (mSuccess == 1) {
                        lgAlertBox('Unable to add MVR comment to AWD Work.  Please add comment to the work object yourself through AWD.');
                    }
                    else
                        lgAlertBox('Adding Comments failed for MVR');
                }

                //Log it...(Logs to ROS database as well.)
                //var dNow = dateNow;
                var policy = $.trim($("#txtPolicyNo").val());
                var LastName = $.trim($("#txtAppLname").val());
                var agentNumber = $.trim($("#txtAgentNumber").val());
                var agencyNumber = "";
                var tNow = new Date();

                LogOrdertoDB(tNow, sQuoteback, policy, LastName, "MVR")
            }
        });
    }

    //Submitting IR comments to AWD
    function IRcomments(dNow, sComment) {
        var sQuoteback = $("#txtPolicyNo").val() + YYYYMMDDHHMMSS(dNow);
        //Add Comments to AWD       
        $.ajax({
            type: 'POST',
            url: baseurl + '/Home/AddComments',
            data: {
                ObjId: objId,
                Comment: sComment,
                AppId: appId,
                UserId: aUser,
                cmdType: "IR"
            },
            dataType: 'json',
            success: function (data) {
                closeProcessDialog()
                if (data.Response.Message.indexOf("Successfully") < 0) {                                     
                    if (iSuccess == 1)
                        lgAlertBox('Unable to add IR comment to AWD Work.  Please add comment to the work object yourself through AWD.');
                    else
                        lgAlertBox('Adding Comments failed for IR');
                }
                if (ChkIR == 1)
                    IRCommentFlag++;
                else
                    IRCommentFlag = 2;
                if (IRCommentFlag == 2) {
                    IRCommentFlag = 0;
                    //Log it...(Logs to ROS database as well.)
                    //var dNow = dateNow;                    
                    var tNow = new Date();
                    var policy = $.trim($("#txtPolicyNo").val());
                    var LastName = $.trim($("#txtAppLname").val());
                    var agentNumber = $.trim($("#txtAgentNumber").val());
                    var agencyNumber = "";

                    LogOrdertoDB(tNow, sQuoteback, policy, LastName, "IR");
                }
            }
        });
    }         

    function ReadCreditRptOrder() {

        // Purpose: Reads the information out of
        // the GUI and into the variables.

        var stemp;

        // Text Boxes...
        PI01PolicyType = "01";
        PI01Amount = $('#txtPolicyAmount').val();
        PI01PolicyNumber = $('#txtPolicyNo').val();

        AN01FirstName = $("#txtAppFname").val().substring(0, CR_ES_FIRST_NAME_LEN);
        AN01LastName = $("#txtAppLname").val().substring(0, CR_ES_LAST_NAME_LEN);
        AN01MiddleName = $("#txtAppMiddlename").val().substring(0, CR_ES_MIDDLE_NAME_LEN);
        if (ChkAPS != 1)
            AN01NameSuffix = $('#ddAppSuffix :selected').text();
        else
            AN01NameSuffix = $('#txtAppSuffix').val();

        AN02Address1 = $("#txtAppAddressFirst").val().substring(0, CR_ES_ADD1_LEN);
        AN03Address2 = $("#txtAppAddressSecond").val().substring(0, CR_ES_ADD2_LEN);
        AN03City = $("#txtAppCity").val().substring(0, CR_ES_CITY_LEN);

        // Remove Zip formatting...
        stemp = $("#txtAppZip").val().replace(/-/g, "");
        stemp = $.trim(stemp.substring(0, 5));
        AN03Zip = stemp;

        // Remove SSN formatting...
        AN01SSN = $("#txtAppssn").val().replace(/-/g, "");

        //converting the date entered in mm/dd/yyyy
        //format into YYYYMMDD format...
        var date = new Date($("#txtAppBirthDay").val());
        var year = pad(date.getFullYear());
        var month = pad(date.getMonth() + 1);
        var day = pad(date.getDate());
        var dateFormat = year + month + day;

        AN01DateOfBirth = dateFormat;

        LV01Name = $("#txtConRequestorName").val();
        LV01Phone = $("#txtConRequestorPhone").val();
        LV01Email = $("#txtConRequestorEmail").val();

        AN03State = $('#ddAppState :selected').text().substring(0, 2);

        // changed to allow for country codes...
        if (companyCode == "0A8" || companyCode == "USL") //USL company selected?
            CO01CompanyCode = "800101811";
        else
            CO01CompanyCode = "7009401";
        CO01CompanyBillingCode = "";
        SC01ServiceCode = "  45";

        // no rush order for  ESH or CRT
        OR01RushOrder = "N";
        SR01RequestCode = "PHI";
    }

    function ReadESearchOrder() {
        
        // Purpose: Reads the information out of
        // the GUI and into the variables.

        var sTemp;

        // Text Boxes...
        PI01PolicyType = "01";
        PI01PolicyNumber = $.trim($('#txtPolicyNo').val());
        PI01Amount = $('#txtPolicyAmount').val();

        AN01FirstName = $("#txtAppFname").val().substring(0, CR_ES_FIRST_NAME_LEN);
        AN01LastName = $("#txtAppLname").val().substring(0, CR_ES_LAST_NAME_LEN);
        AN01MiddleName = $("#txtAppMiddlename").val().substring(0, CR_ES_MIDDLE_NAME_LEN);
        if (ChkAPS != 1)
            AN01NameSuffix = $('#ddAppSuffix :selected').text();
        else
            AN01NameSuffix = $('#txtAppSuffix').val();
        AN02Address1 = $("#txtAppAddressFirst").val().substring(0, CR_ES_ADD1_LEN);
        AN03Address2 = $("#txtAppAddressSecond").val().substring(0, CR_ES_ADD2_LEN);
        AN03City = $("#txtAppCity").val().substring(0, CR_ES_CITY_LEN);

        // Remove Zip formatting...
        sTemp = $("#txtAppZip").val().replace(/-/g, "");
        sTemp = $.trim(sTemp.substring(0, 5));
        AN03Zip = sTemp;

        // Remove ssn formatting...
        AN01SSN = $("#txtAppssn").val().replace(/-/g, "");


        //converting the date entered in mm/dd/yyyy
        //format into YYYYMMDD format...
        var date = new Date($("#txtAppBirthDay").val());
        var year = pad(date.getFullYear());
        var month = pad(date.getMonth() + 1);
        var day = pad(date.getDate());
        var dateFormat = year + month + day;

        AN01DateOfBirth = dateFormat;

        LV01Name = $("#txtConRequestorName").val();
        LV01Phone = $("#txtConRequestorPhone").val();
        LV01Email = $("#txtConRequestorEmail").val();

        // changed to allow for country codes...
        AN03State = $('#ddAppState :selected').text().substring(0, 2);

        if (companyCode == "0A8" || companyCode == "USL") //USL company selected?
            CO01CompanyCode = "800101811";
        else
            CO01CompanyCode = "7009401";
        
        CO01CompanyBillingCode = ""; // AGL account code
        SC01ServiceCode = "  30";    // this indicates we want an eSearch to EMSI

        // no rush order for  ESH or CRT
        OR01RushOrder = "N";
        SR01RequestCode = "PHI";
    }

    function ReadAPSOrder() {

        // Purpose: Reads the information out of
        // the GUI and into the variables.

        // Text Boxes...
        PI01PolicyNumber = $.trim($('#txtPolicyNo').val());
        PI01Amount = $('#txtPolicyAmount').val();

        AN04DriversNumber = $('#txtAppDriverLicNo').val();
        AN01NamePrefix = $('#txtAppPrefix').val();
        AN01FirstName = $("#txtAppFname").val().substring(0, APS_FIRST_NAME_LEN); 
        AN01MiddleName = $("#txtAppMiddlename").val().substring(0, APS_MIDDLE_NAME_LEN); 
        AN01LastName = $("#txtAppLname").val().substring(0, APS_LAST_NAME_LEN);
        if (ChkAPS != 1)
            AN01NameSuffix = $('#ddAppSuffix :selected').text();
        else
            AN01NameSuffix = $('#txtAppSuffix').val();
        AN02Address1 = $("#txtAppAddressFirst").val().substring(0, APS_ADD1_LEN);
        AN03Address2 = $("#txtAppAddressSecond").val().substring(0, APS_ADD2_LEN);
        AN03Address3 = $("#txtAppAddressThird").val().substring(0, APS_ADD3_LEN);
        AN03City = $("#txtAppCity").val().substring(0, APS_CITY_LEN);
        AN02HomePhone = $("#txtAppHomePhone").val();        // Don't need to remove formatting...
        AN02WorkPhone = $("#txtAppWorkPhone").val();        // Don't need to remove formatting...

        AG01LastName = $("#txtConLastName").val();

        // Remove formatting...
        AN03Zip = $("#txtAppZip").val().substring(0, APS_ZIP_LEN);      // <-- not necessary to remove formatting here...
        AN01SSN = $("#txtAppssn").val().replace(/-/g, "");
        
        var date = new Date($("#txtAppBirthDay").val());
        var year = pad(date.getFullYear());
        var month = pad(date.getMonth() + 1);
        var day = pad(date.getDate());
        var dateFormat = year + month + day;

        AN01DateOfBirth = dateFormat;

        LV01Name = $("#txtConRequestorName").val();
        LV01Phone = $("#txtConRequestorPhone").val();
        LV01Email = $("#txtConRequestorEmail").val();

        DR01ClinicName = $("#txtDocClinicName").val();
        DR01FirstName = $("#txtDocFirstName").val();
        DR01LastName = $("#txtDocLastName").val();
        DC01Address1 = $("#txtDocAddress1").val();
        DC01Address2 = $("#txtDocAddress2").val();
        DC01City = $("#txtDocCity").val();

        // Not necessary to remove formatting...
        DC01Zip = $("#txtDocZip").val();
        
        DR01Phone = $("#txtDocPhone").val();
        DC01PatientID = $("#txtDocPatientNumber").val();

        AG02Email = $("#txtConEmail").val();
        AG02WorkPhone = $("#txtConPhone").val();
        AG01MiddleName = $("#txtConMiddleName").val();
        AG01FirstName = $("#txtConFirstName").val();

        // If RXREVIEW/MIBEVAL is selected - DO NOT SEND and suppress the Agency and Agent information
        if (rtRXREVIEW != 1) {
            AG01AgentNumber = $('#txtAgentNumber').val();
            AY01AgencyNumber = gAgencyCode;
        }

        // Dropdownlist
        
        AN04DriversState = $("#ddAppDriverLicState :selected").text().substring(0, 2);
        AN03State = $("#ddAppState :selected").text().substring(0, 2);
        DC01State = $("#ddDocState :selected").text().substring(0, 2);
        
        // Need to read this one from the Client Code:
        // Company code can be AGL or 040, USL or 0A8
        var co="";
        if (companyCode == "USL" || companyCode == "0A8") {            
                
            co = "0A8";
        }
        else
            co = "040";

        var sTemp;
        if (rtEMSI == 1)
            sTemp = "EMSI (All Other BGA's) " + co;
        else
            if (rtSelectQuote == 1)
                sTemp = "SelectQuote (Only) " + co;
            else
                if (rtRXREVIEW == 1)
                    sTemp = "RXREVIEW/MIBEVAL " + co;
                else
                    if (rtCorpMarket == 1)
                        sTemp = "Corporate Markets 040"; // Always AGL
                    else
                        if (rtAIGdirect == 1)
                            sTemp = "AIG Direct " + co;

        CO01CompanyCode = GetConfigValue("Account", "Item", sTemp);

        //Need to update 2 fields based on this...
        if ($('#chkorderRushorder').prop('checked') == true) {
            OR01RushOrder = "Y";
            SR01RequestCode = "EXP";
        }
        else {
            OR01RushOrder = "N";
            SR01RequestCode = "APS";
        }
        
        ON01Note = $("#txtareaorderSpecialinstr").val();

    }

    function pad(numb) {
        return (numb < 10 ? '0' : '') + numb;
    }

    function GenerateCreditRptOrderFile(dNow) {

        // Purpose: Generates the eSearch order file.        
        //
        // Note: no checking is done here.  When this subroutine
        // is called, it is assumed that all checking has been
        // done.
        //
        // Arguments:
        // dNow -- the timestamp.

        var sQuotebackTimestamp;        
        var sFileSpec;

        //'   I. Fill in any remaining global variables for APS...
        
        //' Build the quoteback timestamp...
        sQuotebackTimestamp = YYYYMMDDHHMMSS(dNow);
        //' The timestamp becomes part of the quoteback number.

        //' The format is policy number + timestamp (in quoteback format)...
        crQuoteback = $('#txtPolicyNo').val() + sQuotebackTimestamp;
        
        //' Place the quoteback number into the correct variables...
        CO01ClientQuotebackNumber = crQuoteback;
        OR01SenderQuoteback = crQuoteback;

        // For a credit report, the transaction code is always "OO"...
        OR01TransactionCode = "OO";

        //'   II. Place the global variables into the data variable...

        //' Assemble the order.  Specifically, this sub builds each one of the
        //' OR01, AN01, etc. and places them into the global data variable...
        crLabOneData = BuildCreditReportOrder();

        //'   III. Create the TXT file...

        //' The quoteback number is the base filename...
        sFileSpec = LocalOutputPath + tempIDX + crQuoteback + ".IDX";

        //' Write the data to the temp directory...
        WriteData(sFileSpec, crLabOneData, "CR", dNow);


    }

    function GenerateESearchOrderFile(dNow) {
        // Purpose: Generates the eSearch order file.        
        //
        // Note: no checking is done here.  When this subroutine
        // is called, it is assumed that all checking has been
        // done.
        //
        // Arguments:
        // dNow -- the timestamp.

        var sQuotebackTimestamp;        
        var sFileSpec;

        // I. Fill in any remaining global variables for APS...

        //Build the quoteback timestamp...
        sQuotebackTimestamp = YYYYMMDDHHMMSS(dNow);

        //The timestamp becomes part of the quoteback number.
        //The format is policy number + timestamp (in quoteback format)...
        esQuoteback = $('#txtPolicyNo').val() + sQuotebackTimestamp;

        //Place the quoteback number into the correct variables...
        CO01ClientQuotebackNumber = esQuoteback;
        OR01SenderQuoteback = esQuoteback;

        //For a credit report, the transaction code is always "OO"...
        OR01TransactionCode = "OO";

        //II. Place the global variables into the data array...

        // Assemble the order.  Specifically, this sub builds each one of the
        // OR01, AN01, etc. and places them into the global data variable...
        crLabOneData = BuildESearchOrder();

        //III. Create the IDX file...

       // The quoteback number is the base filename...
        sFileSpec = LocalOutputPath + tempIDX + esQuoteback + ".IDX";

        // Write the data to the temp directory...
        WriteData(sFileSpec, crLabOneData, "ES", dNow);

    }

    function GenerateAPSOrderFile(dNow) {
        // Purpose: Generates the order files.
        //
        // Note: no checking is done here.  When this subroutine
        // is called, it is assumed that all checking has been
        // done.
        //
        // Arguments:
        // dNow -- the timestamp.
        
        var sFileSpec;
        
        // =================================================================
        //   I. Fill in any remaining global variables for APS...
        // =================================================================
        // Build the quoteback timestamp...        
        // The timestamp becomes part of the quoteback number.
        // The format is policy number + timestamp (in quoteback format)...

        gFileTimeStamp = $("#txtPolicyNo").val() + YYYYMMDDHHMMSS(dNow);        
        apsQuoteback = gFileTimeStamp;

        // Place the quoteback number into the correct variables...
        CO01ClientQuotebackNumber = apsQuoteback;
        OR01SenderQuoteback = apsQuoteback;
    
        // For an APS, the transaction code is always "OO"...
        OR01TransactionCode = "OO";

        // =================================================================
        //   II. Place the global variables
        // =================================================================
        // Assemble the order.  Specifically, this sub builds each one of the
        // OR01, AN01, etc. and places them into the global data variable

        apsLabOneData = BuildAPSOrder();

        // =================================================================
        //   III. Create the IDX file...
        // =================================================================
        // The quoteback number is the base filename...
        sFileSpec = LocalOutputPath + tempIDX + apsQuoteback + ".IDX";

        // Write the data to the temp directory...
        WriteData(sFileSpec, apsLabOneData, "APS", dNow);
    }

    function BuildCreditReportOrder() {

        // Purpose: Builds the gLabOneData() array in preparation
        // for writing the data file.
        //
        // Arguments:
        // None.  However, the global variables defined above
        // are used to build the string.
        //
        // Note: No error handler.

        //' Size this to hold the Credit Report information...
        var gLabOneData = [];

        //' Header -- Order Record...
        gLabOneData[0] = BuildOR01();

        //' Insurance Company Information...
        gLabOneData[1] = BuildCO01()

        //' Applicant data...
        gLabOneData[2] = BuildAN01()
        gLabOneData[3] = BuildAN02()
        gLabOneData[4] = BuildAN03()
        gLabOneData[5] = BuildAN04()

        //' Order notes...
        gLabOneData[6] = BuildON01()

        //' Policy information...
        gLabOneData[7] = BuildPI01()

        //' Service Request...
        gLabOneData[8] = BuildSR01()

        //' LabView Information...
        gLabOneData[9] = BuildSC01()
        gLabOneData[10] = BuildLV01()

        gLabOneData[11] = BuildTOTL(gLabOneData);

        return gLabOneData;
    }

    function BuildESearchOrder() {
        // Purpose: Builds the gLabOneData() array in preparation
        // for writing the data file.
        //
        // Arguments:
        // None.  However, the global variables defined above
        // are used to build the string.
        //
        // Note: No error handler.


        //Size this to hold the Credit Report information...
        var gLabOneData = [];

        //' Header -- Order Record...
        gLabOneData[0] = BuildOR01();

        //' Insurance Company Information...
        gLabOneData[1] = BuildCO01()

        //' Applicant data...
        gLabOneData[2] = BuildAN01()
        gLabOneData[3] = BuildAN02()
        gLabOneData[4] = BuildAN03()
        gLabOneData[5] = BuildAN04()

        //' Policy information...
        gLabOneData[6] = BuildPI01()

        //' Service Request...
        gLabOneData[7] = BuildSR01()

        //' LabView Information...
        gLabOneData[8] = BuildSC01()
        gLabOneData[9] = BuildLV01()
        gLabOneData[10] = BuildTOTL(gLabOneData);

        return gLabOneData;

    }

    function BuildAPSOrder() {

        //======================================================
        // Purpose: Builds the gLabOneData() array in preparation
        // for writing the data file.
        //
        // Arguments:
        // None.  However, the global variables defined above
        // are used to build the string.
        //
        //Return:
        //Data array - gLabOneData
        //
        // Note: No error handler.
        //======================================================

        // Data Array to hold the APS information...
        var gLabOneData = [];

        // Header -- Order Record...
        gLabOneData[0] = BuildOR01();

        // Insurance Company Information...
        gLabOneData[1] = BuildCO01();

        // Applicant data...
        gLabOneData[2] = BuildAN01();
        gLabOneData[3] = BuildAN02();
        gLabOneData[4] = BuildAN03();
        gLabOneData[5] = BuildAN04();

        // Order notes...
        gLabOneData[6] = BuildON01();

        // Policy information...
        gLabOneData[7] = BuildPI01();

        // Service Request...
        gLabOneData[8] = BuildSR01();

        // Doctor/Hospital/Clinic Information...
        gLabOneData[9] = BuildDR01();
        gLabOneData[10] = BuildDC01();

        // Agent data...
        gLabOneData[11] = BuildAG01();
        gLabOneData[12] = BuildAG02();

        // Agency information...
        gLabOneData[13] = BuildAY01();
        gLabOneData[14] = BuildAY02();

        // Special Attention...
        StringCount = 0;
        for (CommentNdx = 0; CommentNdx <= CommentCount - 1; CommentNdx++) {            
            var Result = BuildSA(CommentArray[CommentNdx], gLabOneData);
            StringCount = StringCount + Result;
        }

        //LabView Information...
        gLabOneData[15 + StringCount] = BuildLV01();

        gLabOneData[15 + StringCount + 1] = BuildTOTL(gLabOneData);

        return gLabOneData;

    }

    function AddCommentsCrdEsRpt(sComment,req,dNow)
    {
        $.ajax({
            type: 'POST',            
            url: baseurl + '/Home/AddComments',
            data: {
                ObjId: objId,
                Comment: sComment,
                AppId: appId,
                UserId: aUser,
                cmdType: req
            },
            dataType: "json",
            success: function (data) {   
                closeProcessDialog()
                if (data.Response.Message.indexOf("Successfully") < 0) {                    
                    if (req == "CR")
                        if (cSuccess == 1)
                            lgAlertBox('Unable to add Credit report comment to AWD Work.  Please add comment to the work object yourself through AWD.');
                        else
                            lgAlertBox('Adding Comments failed for Credit Report');
                    if (req == "ES")
                        if (aSuccess == 1)
                            lgAlertBox('Unable to add ESearch comment to AWD Work.  Please add comment to the work object yourself through AWD.');
                        else
                            lgAlertBox('Adding Comments failed for APS');
                    if (req == "APS") {
                        if (apsFailed == 0)
                            if (aSuccess == 1)
                                lgAlertBox('Unable to add APS comment to AWD Work.  Please add comment to the work object yourself through AWD.');
                            else
                                lgAlertBox('Adding Comments failed for APS');
                        apsFailed = 1;
                    }
                }                     
                if (req == "CR") {
                    //Log it...
                    LogOrdertoDB(dNow, crQuoteback, $.trim(PI01PolicyNumber), $.trim(AN01LastName), "CRT");
                }
                if (req == "ES") {
                    //Log it...
                    LogOrdertoDB(dNow, esQuoteback, $.trim(PI01PolicyNumber), $.trim(AN01LastName), "ESH");
                }
                if (req == "APS") {
                    apsComCount = apsComCount + 1;
                    if (apsComCount == 3) {
                        //Log to DB...
                        apsComCount = 0;
                        LogOrdertoDB(dNow, apsQuoteback, $.trim(PI01PolicyNumber), $.trim(AN01LastName), "APS");
                    }
                }
            },
            error: function (exception) {
                closeProcessDialog();
                AlertBox(req + "- order error in adding comments to AWD", Null);
            }
        });
    }

    function LogOrdertoDB(dNow, Quoteback, PolicyNo, lName, reqType) {        
        var agencyNumber = "";
        var agentNumber = "";
        if (reqType == "APS")
        {
            if(rtRXREVIEW!=1)
            {
                agentNumber = $.trim($("#txtAgentNumber").val());
                Agencynum = gAgencyCode;
            }
        }
        $.ajax({
            type: 'POST',
            cache: false,
            url: baseurl + '/Home/LogOrderToDB',
            data: {
                dNow: dateFormatforDB(dNow),
                policyNumber: PolicyNo,
                lastName: lName,
                sQuoteBack: Quoteback,
                reqType: reqType,
                AgentNumber: agentNumber,
                AgencyNumber: agencyNumber
            },
            success: function (data) {               
                if (data == "success") {
                    if (reqType == 'MVR' || reqType == 'IR')
                        orderCount = orderCount - 1;
                    if (reqType == 'APS' || reqType == 'CRT' || reqType == 'ESH')
                        fileGenCount = fileGenCount - 1;
                    //AlertBox(reqType + " - Logged order to the database...");                    
                }
                else {                    
                    if (reqType == 'MVR' || reqType == 'IR') {
                        orderCount = orderCount - 1;
                        //oError++;
                        lgAlertBox(reqType + " order - Non-critical error while writing to logging database." + data);
                    }
                    if (reqType == 'APS' || reqType == 'CR') {
                        fileGenCount = fileGenCount - 1;
                        //gError++;
                        lgAlertBox(reqType + " order - Non-critical error while writing to logging database." + data);
                    }                    
                }
                confirmPOPUP();
                               
            },
            error: function (exception) {
                closeProcessDialog();
                AlertBox( reqType + "- order error in updating to db", Null);
            }
        });
    }

    function confirmPOPUP() {
        if (ChkMVR == 1 || ChkIR == 1 || ChkIRYoungerAges == 1)
            if (orderCount == 0) {
                oloopCount++;
                if (oloopCount == 1 && oError == 0) {
                    oMsgDisplayed = 0;
                    lgAlertBox(OrderList + ' Order was successfully processed', 'true');
                }
            }
        if (ChkAPS == 1 || rtCreditRpt == 1 || rtEsearch == 1)
            if (fileGenCount == 0) {
                gloopCount++;
                if (gloopCount == 1 && gError == 0) {
                    fMsgDisplayed = 0;
                    lgAlertBox(fileCrNames + ' order successfully generated.', 'true');
                }
            }
    }

    function WriteData(sFilePath, gLabOneData, req, Dnow) {        
        $.ajax({
            type: "POST",
            url: baseurl + '/Home/GenerateRpt',
            data: {
                FilePath: sFilePath,
                LabOneData: gLabOneData,
                reqType: req
            },            
            success: function (data) {
                if (data == "Success") {                      
                    if (req == "CR") {
                        //AlertBox('Generated credit report successfully', Null);
                        cSuccess = 1;
                        //Add the comments to the Work...
                        //var dNow = Dnow
                        // Build the comment...
                        var sComment = "ROS - Credit Report Ordered - " + mmddyyyyhhmmAMPM(Dnow) +
                                       " by " + LV01Name + "," +
                                       " Quoteback Number: " + crQuoteback;
                        // Add it to AWD...
                        AddCommentsCrdEsRpt(sComment, "CR", Dnow);
                    }
                    else
                        if (req == "ES") {
                            eSuccess = 1;                            
                            //Add the comments to the Work...
                            //var dNow = Dnow
                            // Build the comment...
                            var sComment = "ROS - eSearch Ordered - " + mmddyyyyhhmmAMPM(Dnow) +
                                       " by " + LV01Name + "," +
                                       " Quoteback Number: " + esQuoteback;

                            // Add it to AWD...
                            AddCommentsCrdEsRpt(sComment, "ES", Dnow);
                        }
                        else
                            if (req == "APS") {
                                //Once generated File successully then build TIFF file
                                // =================================================================
                                // Build the TIF file.
                                // =================================================================
                                // Get the information about the selected source out of the listview...
                                //var Source = sSourceObjID;
                                //var idxPath = LocalOutputPath + apsQuoteback + ".idx";
                                GenarateAPStiff(Dnow);
                            }
                }
                else {
                    closeProcessDialog();
                    if (req == "CR") {
                        AlertBox('Unable to copy your order to the network.  Please make sure your network connection is still active.', 'close');
                        oErrorHandler(req);
                    }
                    else
                        if (req == "ES") {
                            AlertBox('Unable to copy your order to the network.  Please make sure your network connection is still active.', 'close');
                            oErrorHandler(req);
                        }
                        else
                            if (req == "APS") {
                                AlertBox('Unable to copy your order to the network.  Please make sure your network connection is still active.', 'close');
                                oErrorHandler(req);
                            }
                }                            
            },
            error: function (exception) {
                closeProcessDialog();
                AlertBox('error in generating report file', 'close');
            }
        });
    }
    
    function GenarateAPStiff(dnow) {        
        var sPath = LocalOutputPath + YYYYMMDD(dnow) + "\\" + GUID + "\\" + gTiffTimeStamp + ".tif";
        var dPath = OutputPath + gFileTimeStamp + ".tif";

        $.ajax({
            url: baseurl + '/Home/GenerateAPStiff',
            type: "POST",
            data: {
                DestPath: dPath,
                SharePath: sPath
                    },
            success: function (data) {
                if (data == "success") {
                    //AlertBox("APS Order file generated successfully.", Null);
                    aSuccess = 1;

                    //Add the comments to the Work... APS                    
                    var sComment = "ROS - APS Ordered - " + mmddyyyyhhmmAMPM(dnow) +
                                       " by " + $.trim(LV01Name) + "," +
                                       " Quoteback Number: " + apsQuoteback +
                                       " Dr. " + $.trim(DR01FirstName) + " " + $.trim(DR01LastName) + " " +
                                        $.trim(DR01ClinicName) + " " + $.trim(DC01Address1) + " " + $.trim(DC01Address2) + " " + DC01City +
                                       ", " + $.trim(DC01State) + " " + $.trim(DC01Zip) +
                                       " " + $.trim(DR01Phone) + ", APS ";
                    if ($("#txtareaorderSpecialinstr").val() != "")
                        sComment = sComment + $("#txtareaorderSpecialinstr").val();
                    AddCommentsCrdEsRpt(sComment, "APS", dnow)
                    AddCommentsCrdEsRpt(mmddyyyyhhmmAMPM(new Date()) + " APS-EMSI: Checked Domino database and or coversheet.", "APS", dnow);
                    AddCommentsCrdEsRpt(mmddyyyyhhmmAMPM(new Date()) + " APS-EMSI: Validated case for agent error.", "APS", dnow);
                }
                else {
                    closeProcessDialog();
                    AlertBox("APS order Tiff File generation Failed", Null);
                    oErrorHandler("APS");
                }
            }
        });      
    }

    function addSpace(StringValue, Count) {
        var Result = StringValue;
        for (var i = StringValue.length; i < Count; i++) {
            Result = Result + '\xa0';
        }
        return Result;
    }

    function BuildSA(comments,gLaboneData) {

        var LineCtr = 0;
        var sTemp;
        var Unpack;
        var sResponse;
        var BuildSA;

        SequenceCount = SequenceCount + 1;
        if (SequenceCount > 99) {
            Unpack = String(CommentNdx + 1);
            sTemp = 'Comment #' + Unpack + ' that begins <b>"' + comments.substring(0, 30) + '..."</b> could not be added to the order file.';
            AlertBox(sTemp + " Maximum Comment Lines Reached!")
            BuildSA = 0;
            return BuildSA;
        }

        sTemp = "SA"
        var count = String(CommentNdx + 1);
        Unpack = "00".substring(0, "00".length - count.length) + count;
        sTemp = sTemp + Unpack;
        var sCount = String(SequenceCount);
        Unpack = "00".substring(0, "00".length - sCount.length) + sCount;
        sTemp = sTemp + Unpack;

        while (comments.length > 90) {      //if the comment is too long, chop it up into 90 byte pieces
            sTemp = sTemp + comments.substring(0, 90);
            while (sTemp.length < 132) {
                sTemp = sTemp + " ";
            }
            gLaboneData[14 + SequenceCount] = sTemp;
            LineCtr = LineCtr + 1;
            sTemp = comments.substring(90, comments.length);

            comments = sTemp;
            sTemp = "SA";
            SequenceCount = SequenceCount + 1;
            var aCount = String(CommentNdx + 1);
            Unpack = "00".substring(0, "00".length - aCount.length) + aCount;
            sTemp = sTemp + Unpack;
            var vCount = String(SequenceCount);
            Unpack = "00".substring(0, "00".length - vCount.length) + vCount;
            sTemp = sTemp + Unpack;
            if (SequenceCount > 99) {
                Unpack = String(CommentNdx + 1);
                sTemp = 'Comment #' + Unpack + ' that begins <b>"' + comments.substring(0, 30) + '..."</b> could not be added to the order file.';
                AlertBox(sTemp + " Maximum Comment Lines Reached!")
                BuildSA = 0;
                return BuildSA;
            }
        }
        if (comments.length > 1) {   // anything left?
            while (comments.length < 90) {
                comments = comments + " "; // pad out the line with spaces
            }
            sTemp = sTemp + comments.substring(0, 90);
            while (sTemp.length < 132) {
                sTemp = sTemp + " "   // pad out the line with spaces            
            }
            gLaboneData[14 + SequenceCount] = sTemp
            LineCtr = LineCtr + 1            
        }
        BuildSA = LineCtr;   // return the number of lines we added
        return BuildSA;
    }

    function BuildOR01() {
        // ======================================================
        //Dinesh Rajendran
        //
        // Purpose: Builds OR01 into a printable string.  In
        // other words, turns OR01 into a string in the proper
        // order from its individual pieces.
        //
        // Arguments:
        // None.  However, the global variable OR01 is used
        // to build the string.
        //
        // Returns:
        // A string containing the field information from the
        // current OR01 variable.
        // ======================================================

        // Start off with the record type -- always the name of the record
        // to follow...
        var sTemp = "OR01";

        // Get the individual pieces...
        sTemp = sTemp + addSpace(OR01VersionNumber, 3);
        sTemp = sTemp + addSpace(OR01TransactionCode, 2);
        sTemp = sTemp + addSpace(OR01SenderQuoteback, 30);
        sTemp = sTemp + addSpace(OR01OrderSource, 20);
        sTemp = sTemp + addSpace(OR01OrderSequence, 8);
        sTemp = sTemp + addSpace(OR01MailToCode, 1);
        sTemp = sTemp + addSpace(OR01GlobalSiteID, 10);
        sTemp = sTemp + addSpace(OR01GlobalRefNo, 8);
        sTemp = sTemp + addSpace(OR01DestinationOfficeCode, 10);
        sTemp = sTemp + addSpace(OR01ReceiverQuoteback, 30);
        sTemp = sTemp + addSpace(OR01RushOrder, 1);
        sTemp = sTemp + addSpace(OR01Spaces, 5);

        if (sTemp.length != 132)
            AlertBox('Field definition error.  Consult with programmer - BuildOR01', Null);
        return sTemp;

    }

    function BuildCO01() {

        // ======================================================
        //Dinesh Rajendran
        //
        // Purpose: Builds CO01 into a printable string.  In
        // other words, turns CO01 into a string in the proper
        // order from its individual pieces.
        //
        // Arguments:
        // None.  However, the global variable CO01 is used
        // to build the string.
        //
        // Returns:
        // A string containing the field information from the
        // current CO01 variable.
        // ======================================================

        // Start off with the record type -- always the name of the record
        // to follow...

        var sTemp = "CO01";

        // Get the individual pieces...
        sTemp = sTemp + addSpace(CO01CompanySourceCode, 4);
        sTemp = sTemp + addSpace(CO01CompanyCode, 10);
        sTemp = sTemp + addSpace(CO01CompanyName, 50);
        sTemp = sTemp + addSpace(CO01CompanyBillingCode, 4);
        sTemp = sTemp + addSpace(CO01ClientQuotebackNumber, 30);
        sTemp = sTemp + addSpace(CO01Spaces, 30);

        if (sTemp.length != 132)
            AlertBox('Field definition error.  Consult with programmer - BuildCO01', Null);
        return sTemp;
    }

    function BuildAN01() {
        // ======================================================        
        // Dinesh Rajendran
        //
        // Purpose: Builds AN01 into a printable string.  In
        // other words, turns AN01 into a string in the proper
        // order from its individual pieces.
        //
        // Arguments:
        // None.  However, the global variable AN01 is used
        // to build the string.
        //
        // Returns:
        // A string containing the field information from the
        // current AN01 variable.
        // ======================================================

        // Start off with the record type -- always the name of the record
        // to follow...
        var sTemp = "AN01";

        // Get the individual pieces...
        sTemp = sTemp + addSpace(AN01LastName, 30);
        sTemp = sTemp + addSpace(AN01FirstName, 20);
        sTemp = sTemp + addSpace(AN01MiddleName, 20);
        sTemp = sTemp + addSpace(AN01NamePrefix, 3);
        sTemp = sTemp + addSpace(AN01NameSuffix, 3);
        sTemp = sTemp + addSpace(AN01DateOfBirth, 8);        
        sTemp = sTemp + addSpace(AN01SSN, 9);
        sTemp = sTemp + addSpace(AN01Gender, 1);
        sTemp = sTemp + addSpace(AN01MaritalStatus, 1);
        sTemp = sTemp + addSpace(AN01SmokerStatus, 1);
        sTemp = sTemp + addSpace(AN01ApplicantAge, 3);
        sTemp = sTemp + addSpace(AN01BestTimeToCall, 4);
        sTemp = sTemp + addSpace(AN01PlaceToCall, 2);
        sTemp = sTemp + addSpace(AN01Spaces, 23);

        if (sTemp.length != 132)
            AlertBox('Field definition error.  Consult with programmer - BuildAN01', Null);
        return sTemp;
    }

    function BuildAN02() {
        // ======================================================
        // Dinesh Rajendran
        //
        // Purpose: Builds AN02 into a printable string.  In
        // other words, turns AN02 into a string in the proper
        // order from its individual pieces.
        //
        // Arguments:
        // None.  However, the global variable AN02 is used
        // to build the string.
        //
        // Returns:
        // A string containing the field information from the
        // current AN02 variable.
        // ======================================================

        // Start off with the record type -- always the name of the record
        // to follow...
        var sTemp = "AN02";

        // Get the individual pieces...
        sTemp = sTemp + addSpace(AN02Address1, 40);
        sTemp = sTemp + addSpace(AN02HomePhone, 17);
        sTemp = sTemp + addSpace(AN02WorkPhone, 17);
        sTemp = sTemp + addSpace(AN02WorkExtension, 5);
        sTemp = sTemp + addSpace(AN02CountryName, 20);
        sTemp = sTemp + addSpace(AN02CountryCode, 5);
        sTemp = sTemp + addSpace(AN02MobilePhone, 17);
        sTemp = sTemp + addSpace(AN02Spaces, 7);

        if (sTemp.length != 132)
            AlertBox('Field definition error.  Consult with programmer - BuildAN02', Null)
        return sTemp;
    }

    function BuildAN03() {
        // ======================================================
        // Dinesh Rajendran
        //
        // Purpose: Builds AN03 into a printable string.  In
        // other words, turns AN03 into a string in the proper
        // order from its individual pieces.
        //
        // Arguments:
        // None.  However, the global variable AN03 is used
        // to build the string.
        //
        // Returns:
        // A string containing the field information from the
        // current AN03 variable.
        // ======================================================

        // Start off with the record type -- always the name of the record
        // to follow...
        var sTemp = "AN03";

        // Get the individual pieces...
        sTemp = sTemp + addSpace(AN03Address2, 40);
        sTemp = sTemp + addSpace(AN03Address3, 40);
        sTemp = sTemp + addSpace(AN03City, 27);
        sTemp = sTemp + addSpace(AN03State, 2);
        sTemp = sTemp + addSpace(AN03Zip, 10);
        sTemp = sTemp + addSpace(AN03Spaces, 9);

        if (sTemp.length != 132)
            AlertBox('Field definition error.  Consult with programmer - BuildAN03', Null)
        return sTemp;
    }

    function BuildAN04() {
        // ======================================================
        // Dinesh Rajendran
        //
        // Purpose: Builds AN04 into a printable string.  In
        // other words, turns AN04 into a string in the proper
        // order from its individual pieces.
        //
        // Arguments:
        // None.  However, the global variable AN04 is used
        // to build the string.
        //
        // Returns:
        // A string containing the field information from the
        // current AN04 variable.
        // ======================================================

        // Start off with the record type -- always the name of the record
        // to follow...
        var sTemp = "AN04";

        // Get the individual pieces...
        sTemp = sTemp + addSpace(AN04DriversState, 2);
        sTemp = sTemp + addSpace(AN04DriversNumber, 22);
        sTemp = sTemp + addSpace(AN04ApplicantRole, 2);
        sTemp = sTemp + addSpace(AN04PreferredLang, 2);
        sTemp = sTemp + addSpace(AN04ApplicantOccupation, 30);
        sTemp = sTemp + addSpace(AN04Spaces, 70);

        if (sTemp.length != 132)
            AlertBox('Field definition error.  Consult with programmer - BuildAN04', Null)
        return sTemp;
    }

    function BuildON01() {
        // ======================================================
        // Dinesh Rajendran
        //
        // Purpose: Builds ON01 into a printable string.  In
        // other words, turns ON01 into a string in the proper
        // order from its individual pieces.
        //
        // Note that there is NO SEQUENCE number here.  You may
        // be expecting one because it//s defined as ONnn but
        // there//s not one here.
        //
        // Arguments:
        // None.  However, the global variable ON01 is used
        // to build the string.
        //
        // Returns:
        // A string containing the field information from the
        // current ON01 variable.
        // ======================================================

        // Start off with the record type -- always the name of the record
        // to follow...
        var sTemp = "ON01";

        // Get the individual pieces...
        sTemp = sTemp + addSpace(ON01Note, 90);
        sTemp = sTemp + addSpace(ON01Spaces, 38);

        if (sTemp.length != 132)
            AlertBox('Field definition error.  Consult with programmer - BuildON01', Null);
        return sTemp;

    }

    function BuildPI01() {
        // ======================================================
        // Dinesh Rajendran
        //
        // Purpose: Builds PI01 into a printable string.  In
        // other words, turns PI01 into a string in the proper
        // order from its individual pieces.
        //
        // Arguments:
        // None.  However, the global variable PI01 is used
        // to build the string.
        //
        // Returns:
        // A string containing the field information from the
        // current PI01 variable.
        // ======================================================

        // Start off with the record type -- always the name of the record
        // to follow...
        var sTemp = "PI01";

        // Get the individual pieces...
        sTemp = sTemp + addSpace(PI01PolicyType, 2);
        sTemp = sTemp + addSpace(PI01Amount, 11);
        sTemp = sTemp + addSpace(PI01PolicyNumber, 28);
        sTemp = sTemp + addSpace(PI01Beneficiary, 50);
        sTemp = sTemp + addSpace(PI01Relationship, 6);
        sTemp = sTemp + addSpace(PI01ChangeOfPlan, 1);
        sTemp = sTemp + addSpace(PI01NonTobacco, 1);
        sTemp = sTemp + addSpace(PI01AgentOverride, 1);
        sTemp = sTemp + addSpace(PI01ApplicationDate, 8);
        sTemp = sTemp + addSpace(PI01VariableProduct, 1);
        sTemp = sTemp + addSpace(PI01Spaces, 19);

        if (sTemp.length != 132)
            AlertBox('Field definition error.  Consult with programmer - BuildPI01', Null);
        return sTemp;
    }

    function BuildSR01() {
        // ======================================================
        // Dinesh Rajendran
        //
        // Purpose: Builds SR01 into a printable string.  In
        // other words, turns SR01 into a string in the proper
        // order from its individual pieces.
        //
        // Note that there is NO SEQUENCE number here.  You may
        // be expecting one because it//s defined as ONnn but
        // there//s not one here.
        //
        // Arguments:
        // None.  However, the global variable SR01 is used
        // to build the string.
        //
        // Returns:
        // A string containing the field information from the
        // current SR01 variable.
        // ======================================================

        // Start off with the record type -- always the name of the record
        // to follow...
        var sTemp = "SR01";

        // Get the individual pieces...
        sTemp = sTemp + addSpace(SR01SourceCode, 4);
        sTemp = sTemp + addSpace(SR01RequestCode, 10);
        sTemp = sTemp + addSpace(SR01Description, 50);
        sTemp = sTemp + addSpace(SR01CompletedDate, 8);
        sTemp = sTemp + addSpace(SR01CompletedTime, 4);
        sTemp = sTemp + addSpace(SR01StatusCode, 10);
        sTemp = sTemp + addSpace(SR01StatusCodeSource, 10);
        sTemp = sTemp + addSpace(SR01Reflex, 1);
        sTemp = sTemp + addSpace(SR01Spaces, 31);

        if (sTemp.length != 132)
            AlertBox('Field definition error.  Consult with programmer - BuildSR01', Null)
        return sTemp;
    }

    function BuildDR01() {
        //======================================================
        // Dinesh Rajendran
        //
        // Purpose: Builds DR01 into a printable string.  In
        // other words, turns DR01 into a string in the proper
        // order from its individual pieces.
        //
        // The "quirk" here is that the sequence number must
        // also be set to match the variable so in this case,
        // it's set to "01"
        //
        // Arguments:
        // None.  However, the global variable DR01 is used
        // to build the string.
        //
        // Returns:
        // A string containing the field information from the
        // current DR01 variable.
        // ======================================================

        var sTemp = "";
        // Start off with the record type -- always the name of the record
        // to follow...
        sTemp = "DR01";
    
        // Add in the sequence number...
        sTemp = sTemp + "01";

        // Get the individual pieces...
        sTemp = sTemp + addSpace(DR01LastName, 30);
        sTemp = sTemp + addSpace(DR01FirstName, 20);
        sTemp = sTemp + addSpace(DR01MiddleName, 15);
        sTemp = sTemp + addSpace(DR01ClinicName, 35);
        sTemp = sTemp + addSpace(DR01Phone, 17);
        sTemp = sTemp + addSpace(DR01Extension, 5);
        sTemp = sTemp + addSpace(DR01Spaces, 4);

        if (sTemp.length != 132)
            AlertBox('Field definition error.  Consult with programmer - BuildDR01', Null)
        return sTemp;
    }

    function BuildDC01() {
        // ======================================================
        // Dinesh Rajendran
        //
        // Purpose: Builds DC01 into a printable string.  In
        // other words, turns DC01 into a string in the proper
        // order from its individual pieces.
        //
        // The "quirk" here is that the sequence number must
        // also be set to match the variable so in this case,
        // it's set to "01"
        //
        // Arguments:
        // None.  However, the global variable DC01 is used
        // to build the string.
        //
        // Returns:
        // A string containing the field information from the
        // current DC01 variable.
        // ======================================================

        var sTemp;

        // Start off with the record type -- always the name of the record
        // to follow...
        sTemp = "DC01";
    
        // Add in the sequence number...
        sTemp = sTemp + "01";
    
        // Get the individual pieces...

        sTemp = sTemp + addSpace(DC01Address1, 30);
        sTemp = sTemp + addSpace(DC01Address2, 30);
        sTemp = sTemp + addSpace(DC01City, 20);
        sTemp = sTemp + addSpace(DC01State, 2);
        sTemp = sTemp + addSpace(DC01Zip, 10);
        sTemp = sTemp + addSpace(DC01PatientID, 10);
        sTemp = sTemp + addSpace(DC01Spaces, 24);

        if (sTemp.length != 132)
            AlertBox('Field definition error.  Consult with programmer - BuildDC01', Null);
        return sTemp;
    }

    function BuildSC01() {
        // ======================================================
        // Dinesh Rajendran
        //
        // Purpose: Builds SC01 into a printable string.  In
        // other words, turns SC01 into a string in the proper
        // order from its individual pieces.
        //
        // Note that there is NO SEQUENCE number here.  You may
        // be expecting one because it//s defined as ONnn but
        // there//s not one here.
        //
        // Arguments:
        // None.  However, the global variable SR01 is used
        // to build the string.
        //
        // Returns:
        // A string containing the field information from the
        // current SC01 variable.
        // ======================================================

        // Start off with the record type -- always the name of the record
        // to follow...
        var sTemp = "SC01";

        // Get the individual pieces...
        sTemp = sTemp + addSpace(SC01ServiceCode, 4);
        sTemp = sTemp + addSpace(SC01Spaces, 124);

        if (sTemp.length != 132)
            AlertBox('Field definition error.  Consult with programmer - BuildSC01', Null);
        return sTemp;
    }

    function BuildLV01() {
        // ======================================================
        // Dinesh Rajendran
        //
        // Purpose: Builds LV01 into a printable string.  In
        // other words, turns LV01 into a string in the proper
        // order from its individual pieces.
        //
        // Arguments:
        // None.  However, the global variable LV01 is used
        // to build the string.
        //
        // Returns:
        // A string containing the field information from the
        // current LV01 variable.
        // ======================================================

        // Start off with the record type -- always the name of the record
        // to follow...
        var sTemp = "LV01";

        // Get the individual pieces...
        sTemp = sTemp + addSpace(LV01Name, 40);
        sTemp = sTemp + addSpace(LV01Email, 50);
        sTemp = sTemp + addSpace(LV01Phone, 17);
        sTemp = sTemp + addSpace(LV01Fax, 17);
        sTemp = sTemp + addSpace(LV01Spaces, 4);

        if (sTemp.length != 132)
            AlertBox('Field definition error.  Consult with programmer - BuildLV01', Null);
        return sTemp;
    }

    function BuildAG01() {
        // ======================================================
        // Dinesh Rajendran
        //
        // Purpose: Builds AG01 into a printable string.  In
        // other words, turns AG01 into a string in the proper
        // order from its individual pieces.
        //
        // Arguments:
        // None.  However, the global variable AG01 is used
        // to build the string.
        //
        // Returns:
        // A string containing the field information from the
        // current AG01 variable.
        // ======================================================

        var sTemp = "";
        // Start off with the record type -- always the name of the record
        // to follow...
        sTemp = "AG01";

        // Get the individual pieces...
        sTemp = sTemp + addSpace(AG01AgentNumber, 10);
        sTemp = sTemp + addSpace(AG01LastName, 25);
        sTemp = sTemp + addSpace(AG01FirstName, 15);
        sTemp = sTemp + addSpace(AG01MiddleName, 15);
        sTemp = sTemp + addSpace(AG01NamePrefix, 3);
        sTemp = sTemp + addSpace(AG01NameSuffix, 3);
        sTemp = sTemp + addSpace(AG01SSN, 9);
        sTemp = sTemp + addSpace(AG01Spaces, 48);

        if (sTemp.length != 132)
            AlertBox('Field definition error.  Consult with programmer - BuildAG01', Null);
        return sTemp;
    }

    function BuildAG02() {
        // ======================================================
        // Dinesh Rajendran
        //
        // Purpose: Builds AG02 into a printable string.  In
        // other words, turns AG02 into a string in the proper
        // order from its individual pieces.
        //
        // Arguments:
        // None.  However, the global variable AG02 is used
        // to build the string.
        //
        // Returns:
        // A string containing the field information from the
        // current AG02 variable.
        // =====================================================

        var sTemp = "";
        // Start off with the record type -- always the name of the record
        // to follow...
        sTemp = "AG02";

        // Get the individual pieces...
        sTemp = sTemp + addSpace(AG02WorkPhone, 17);
        sTemp = sTemp + addSpace(AG02WorkExtension, 5);
        sTemp = sTemp + addSpace(AG02Fax, 17);
        sTemp = sTemp + addSpace(AG02Nickname, 20);
        sTemp = sTemp + addSpace(AG02Email, 50);
        sTemp = sTemp + addSpace(AG02Spaces, 19);

        if (sTemp.length != 132)
            AlertBox('Field definition error.  Consult with programmer - BuildAG02', Null);
        return sTemp;

    }

    function BuildAY01() {
        // ======================================================
        // Dinesh Rajendran        
        //
        // Purpose: Builds AY01 into a printable string.  In
        // other words, turns AY01 into a string in the proper
        // order from its individual pieces.
        //
        // Arguments:
        // None.  However, the global variable AY01 is used
        // to build the string.
        //
        // Returns:
        // A string containing the field information from the
        // current AY01 variable.
        // ======================================================

        var sTemp = "";
        // Start off with the record type -- always the name of the record
        // to follow...
        sTemp = "AY01";

        // Get the individual pieces...
        sTemp = sTemp + addSpace(AY01AgencyNumber, 6);
        sTemp = sTemp + addSpace(AY01AgencyName, 44);
        sTemp = sTemp + addSpace(AY01Phone, 17);
        sTemp = sTemp + addSpace(AY01Extension, 5);
        sTemp = sTemp + addSpace(AY01Fax, 22);
        sTemp = sTemp + addSpace(AY01CompanyCode, 10);
        sTemp = sTemp + addSpace(AY01Spaces, 24);

        if (sTemp.length != 132)
            AlertBox('Field definition error.  Consult with programmer - BuildAY01', Null);
        return sTemp;

    }

    function BuildAY02() {
        // ======================================================
        // Dinesh Rajendran        
        //
        // Purpose: Builds AY02 into a printable string.  In
        // other words, turns AY02 into a string in the proper
        // order from its individual pieces.
        //
        // Arguments:
        // None.  However, the global variable AY02 is used
        // to build the string.
        //
        // Returns:
        // A string containing the field information from the
        // current AY02 variable.
        // ======================================================

        var sTemp = "";
        // Start off with the record type -- always the name of the record
        // to follow...
        sTemp = "AY02";

        // Get the individual pieces...
        sTemp = sTemp + addSpace(AY02Email, 50);
        sTemp = sTemp + addSpace(AY02Spaces, 78); 

        if (sTemp.length != 132)
            AlertBox('Field definition error.  Consult with programmer - BuildAY02', Null);
        return sTemp;

    }

    function BuildTOTL(gLabOneData) {
        // ======================================================
        // Dinesh Rajendran
        //
        // Purpose: Builds TOTL into a printable string.  This is
        // the final record that will be written to the file.
        //
        // Arguments:
        // None.  However, the global variable TOTL is used
        // to build the string.
        //
        // Returns:
        // A string containing the field information from the
        // current TOTL variable.
        // ======================================================

        // Start off with the record type -- always the name of the record
        // to follow...

        //000000000112
        var sTemp = "TOTL";
        sTemp = sTemp + "0000000001";
        var str = "" + ((gLabOneData.length - 1) + 2);
        var pad = "0000000000";
        sTemp = sTemp + pad.substring(0, pad.length - str.length) + str;
        sTemp = sTemp + addSpace(TOTLSpaces, 108);

        if (sTemp.length != 132)
            AlertBox('Field definition error.  Consult with programmer - BuildTOTL', Null);
        return sTemp;
    }

    function CleanLabOneData()
    {
        // Purpose: Cleans all of the lab one data variables.
        // This should be done *before* new information is
        // read from the GUI.  Call this every time a new order
        // is to be built.

        CleanAG01();
        CleanAG02();
        CleanAN01();
        CleanAN02();
        CleanAN03();
        CleanAN04();
        CleanAY01();
        CleanAY02();
        CleanCO01();
        CleanDC01();
        CleanDR01();
        CleanLV01();
        CleanON01();
        CleanOR01();
        CleanPI01();
        CleanSC01();
        CleanSR01();
        CleanTOTL();
    }

    function CleanAG01() {
        AG01RecordType = "";
        AG01AgentNumber = "";
        AG01LastName = "";
        AG01FirstName = "";
        AG01MiddleName = "";
        AG01NamePrefix = "";
        AG01NameSuffix = "";
        AG01SSN = "";
        AG01Spaces = "";
    }

    function CleanAG02() {
        AG02RecordType = "";
        AG02WorkPhone = "";
        AG02WorkExtension = "";
        AG02Fax = "";
        AG02Nickname = "";
        AG02Email = "";
        AG02Spaces = "";
    }

    function CleanAY01() {
        AY01RecordType = "";
        AY01AgencyNumber = "";
        AY01AgencyName = "";
        AY01Phone = "";
        AY01Extension = "";
        AY01Fax = "";
        AY01CompanyCode = "";
        AY01Spaces = "";
    }

    function CleanAY02() {
        AY02RecordType = "";
        AY02Email = "";
        AY02Spaces = "";
    }

    function CleanDC01() {
        DC01RecordType = "";
        DC01SequenceNo = "";
        DC01Address1 = "";
        DC01Address2 = "";
        DC01City = "";
        DC01State = "";
        DC01Zip = "";
        DC01PatientID = "";
        DC01Spaces = "";
    }

    function CleanDR01() {
        DR01RecordType = "";
        DR01SequenceNo = "";
        DR01LastName = "";
        DR01FirstName = "";
        DR01MiddleName = "";
        DR01ClinicName = "";
        DR01Phone = "";
        DR01Extension = "";
        DR01Spaces = "";
    }

    function CleanOR01() {
        OR01RecordType = "";
        OR01VersionNumber = "";
        OR01TransactionCode = "";
        OR01SenderQuoteback = "";
        OR01OrderSource = "";
        OR01OrderSequence = "";
        OR01MailToCode = "";
        OR01GlobalSiteID = "";
        OR01GlobalRefNo = "";
        OR01DestinationOfficeCode = "";
        OR01ReceiverQuoteback = "";
        OR01RushOrder = "";
        OR01Spaces = "";
    }

    function CleanCO01() {
        CO01RecordType = "";
        CO01CompanySourceCode = "";
        CO01CompanyCode = "";
        CO01CompanyName = "";
        CO01CompanyBillingCode = "";
        CO01ClientQuotebackNumber = "";
        CO01Spaces = "";
    }

    function CleanAN01() {
        AN01RecordType = "";
        AN01LastName = "";
        AN01FirstName = "";
        AN01MiddleName = "";
        AN01NamePrefix = "";
        AN01NameSuffix = "";
        AN01DateOfBirth = "";
        AN01SSN = "";
        AN01Gender = "";
        AN01MaritalStatus = "";
        AN01SmokerStatus = "";
        AN01ApplicantAge = "";
        AN01BestTimeToCall = "";
        AN01PlaceToCall = "";
        AN01Spaces = "";
    }

    function CleanAN02() {
        AN02RecordType = "";
        AN02Address1 = "";
        AN02HomePhone = "";
        AN02WorkPhone = "";
        AN02WorkExtension = "";
        AN02CountryName = "";
        AN02CountryCode = "";
        AN02MobilePhone = "";
        AN02Spaces = "";
    }

    function CleanAN03() {
        AN03RecordType = "";
        AN03Address2 = "";
        AN03Address3 = "";
        AN03City = "";
        AN03State = "";
        AN03Zip = "";
        AN03Spaces = "";
    }

    function CleanAN04() {
        AN04RecordType = "";
        AN04DriversState = "";
        AN04DriversNumber = "";
        AN04ApplicantRole = "";
        AN04PreferredLang = "";
        AN04ApplicantOccupation = "";
        AN04Spaces = "";
    }

    function CleanON01() {
        ON01RecordType = "";
        ON01Note = "";
        ON01Spaces = "";
    }

    function CleanPI01() {
        PI01RecordType = "";
        PI01PolicyType = "";
        PI01Amount = "";
        PI01PolicyNumber = "";
        PI01Beneficiary = "";
        PI01Relationship = "";
        PI01ChangeOfPlan = "";
        PI01NonTobacco = "";
        PI01AgentOverride = "";
        PI01ApplicationDate = "";
        PI01VariableProduct = "";
        PI01Spaces = "";
    }

    function CleanSR01() {
        SR01RecordType = "";
        SR01SourceCode = "";
        SR01RequestCode = "";
        SR01Description = "";
        SR01CompletedDate = "";
        SR01CompletedTime = "";
        SR01StatusCode = "";
        SR01StatusCodeSource = "";
        SR01Reflex = "";
        SR01Spaces = "";
    }

    function CleanSC01() {
        SC01RecordType = "";
        SC01ServiceCode = "";
        SC01Spaces = "";
    }

    function CleanLV01() {
        LV01Name = "";
        LV01Phone = "";
        LV01Email = "";
    }

    function CleanTOTL() {
        TOTLRecordType = "";
        TOTLTotalApplicants = "";
        TOTLTotalRecords = "";
        TOTLSpaces = "";
    }

});

//Tab navigation
function Tab(Num) {
    $('#menuTab ul li a[href="#tab' + Num + '"]').trigger('click');    
}

//Show alert modal box
function AlertBox(alertMessage, controlName) {
    bootbox.dialog({
        message: alertMessage,
        size: 'small',
        buttons: {
            danger: {
                label: 'ok',
                className: "btn-primary",
                callback: function () {
                    if (controlName == 'txtPolicyAmount' || controlName == 'chkIRcoverSheet' || controlName == 'chkAPSdbSheet' || controlName == 'chkAPSAgentError' || controlName == 'txtAgentNumber') {
                        Tab(1);
                        setTimeout(function () {
                            $('#' + controlName + '').focus();
                        }, 100);
                    } else
                        if (controlName != null && controlName != Null && controlName != undefined) {
                            setTimeout(function () {
                                $('#' + controlName + '').focus();
                            }, 100);
                        }
                    if (controlName == 'close')
                        closeWindow(true);
                }
            }
        }
    });
}

//Get value from configXML
function GetConfigValue(Tagname, subTag, searchString) {
    var Result = "";    
    var myXML = $(loadedXML).find(Tagname).filter(function () {
        return $(this).find(subTag).text() == $.trim(searchString);
    });
    var display = myXML.children().map(function () {
        return $(this).text();
    }).get();
    if (display[1] != '' && display[1] != undefined && display[1]!=null)
        Result = display[1];
    else
        Result = '';
    return Result;
}

function pad2(n) { return n < 10 ? '0' + n : n }

//Date format YYYYMMDDHHMMSS
function YYYYMMDDHHMMSS(date) {
    return date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds());
}

//Date format YYYY-MM-DD
function YYYYMMDD(date) {
    return date.getFullYear().toString() +"-"+ pad2(date.getMonth() + 1) +"-"+ pad2(date.getDate());
}

//Date format mm/dd/yyyy hh:mm AM/PM
function mmddyyyyhhmmAMPM(date) {
    var hours = pad2(date.getHours());
    var ampm = hours >= 12 ? 'PM' : 'AM';
    return pad2(date.getMonth() + 1) + "/" +
           pad2(date.getDate()) + "/" +
           date.getFullYear() + " " +
           pad2(date.getHours()) + ":" + pad2(date.getMinutes()) + " " + ampm;
}

//Date format yyyy-mm-dd-hh:mm:ss
function dateFormatforDB(date) {
    return date.getFullYear() + "-" + pad2(date.getMonth() + 1) + "-"
              + pad2(date.getDate()) + "-" + pad2(date.getHours()) + ":"
              + pad2(date.getMinutes()) + ":" + pad2(date.getSeconds());
}

//Sleep time change for 2 second
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

//Popup image viewer 
function ShowTiff(elem) {
    var s_CHECKED = 0;
    var s_FILENAME = $("#txtPolicyNo").val(); 
    var dataId = $(elem).data("id");
    for (var j = 0; j <= 30; j++) {
        if ($('#chk' + j + '').prop('checked') == true) {
            sSourceObjID = $('#chk' + j + '').val();
            s_CHECKED = 1;
        }        
    }
    if (s_CHECKED == 0)
        sSourceObjID = null;
    if (sSourceObjID != undefined && sSourceObjID != null)
        if (dataId == sSourceObjID) {            
            var viewerUrl = baseurl + '/Home/ROSWrapper?appType=ROS&DocumentId=' + dataId + '&colid=' + GUID + '&Filename=' + s_FILENAME + '&vURL=' + vURL + '';            
            parent = window.open(viewerUrl, 'Tiff Viewer', ' toolbar=no, scrollbars=no, menubar=no, status=no, directories=no,scrollbars=1,width=850,height=500,left=300,top=50');            
        }
        else
            AlertBox('Select the source and view');
    else
        AlertBox('Select atleast one source', "chk1");
}

//Retrieving Tiff filename from image viewer
function updateFields(strValue) {
    var fileName = strValue[0];
    if (fileName.indexOf(".tif") != -1)
        fileName = fileName.replace(".tif", "");    
    gTiffTimeStamp = fileName;
}

//Logout application
function CloseSession(cFlag)
{
    jQuery.post(
                baseurl + '/Home/sessionClear',
                {
                })
        .done(function (data) {
            if (cFlag != true) {
                if (data) {
                    window.location.assign(aLocation + "/Home/Index");
                }
            } else {
                parent.window.close();
            }                                     
                    });
}

//Append Suffix field
function suffixField(req) {
    var elementAPS = '<label id = "lblAppSuffix">Suffix:</label><br/><input type="text" id="txtAppSuffix" class="form-control" />';
    var elementIR = '<label id = "lblAppSuffix">Suffix:</label><br/><select class = "form-control" id="ddAppSuffix"></select>';
    var tr = document.getElementById('SuffixField');
    var td = tr.getElementsByTagName('td');    
    if (td.length > 4)
        tr.deleteCell(4);    
    var newCell = tr.insertCell(4);
    if (req == 'IR')
        newCell.innerHTML = elementIR;
    else {
        newCell.innerHTML = elementAPS;
        $("#txtAppSuffix").attr('maxlength', '3');
    }
        
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function CheckSelection() {
    if (document.getElementById("chkMVR").checked == true)
        ChkMVR = 1;
    if (document.getElementById("chkIR").checked == true) {
        ChkIR = 1;
        ChkIRYoungerAges = 0;
    }
    if (document.getElementById("chkAHinspection").checked == true) {
        ChkIR = 0;
        ChkIRYoungerAges = 1;
    }
    if (document.getElementById("chkAPSEMSI").checked == true)
        ChkAPS = 1;

    var radios = document.getElementsByName('rdCreditEsearch');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {            
            if (radios[i].value == '1') {
                rtCreditRpt = 1;
                rtEsearch = 0;
            } else if (radios[i].nodeValue == '2') {
                rtCreditRpt = 0;
                rtEsearch = 1;
            }
        }
    }
}

function OrderSelectionCount() {
    orderCount = 0;
    selectionCode = 0;
    oMsgDisplayed = 0;
    fMsgDisplayed = 0;
    if (ChkMVR == 1) {
        orderCount = orderCount + 1;
        selectionCode = selectionCode + 100;
        oMsgDisplayed = 1;        
    }
    if (ChkIR == 1 || ChkIRYoungerAges == 1) {
        orderCount = orderCount + 1;
        selectionCode = selectionCode + 1000;
        oMsgDisplayed = 1;
    }
    if (ChkAPS == 1) {
        selectionCode = selectionCode + 10;
        fileGenCount = fileGenCount + 1;
        fMsgDisplayed = 1;
    }
    if (rtCreditRpt == 1 || rtEsearch == 1) {
        fileGenCount = fileGenCount + 1;
        selectionCode = selectionCode + 10000;
        fMsgDisplayed = 1;
    }

}

var convertDate = function (usDate) {
    var dateParts = usDate.split(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
    return dateParts[3] + "-" + dateParts[1] + "-" + dateParts[2];
}

//Close current window
function closeWindow(_flag) {
    CloseSession(_flag);
    parent.window.close();
}

function noBack() { window.history.forward(); }
noBack();
window.onload = noBack;
window.onpageshow = function (evt) { if (evt.persisted) noBack();}

window.onbeforeunload = function () { unloadFunction(); }
function unloadFunction() {    
    version_id = $('#aVersion').val();    
    if (version_id == 'C' && rConfirm != 1) {
        rConfirm = 0;
        CloseSession(true);
    }
    return null;
}
