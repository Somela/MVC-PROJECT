
var awdUser = '';
var objId = '';
var status;
var lPassword = '';

//var loginPanel = $("<div class='centered'><h6 class='loginHeader'>login</h6><table><tbody><tr><td>Username:</td><td>" +
//    "<input type='text' id='txtlUsername' class='form-control' value='" + currentUser + "' readonly /></td><td class='tdPadding'><label id='elblUser'></label></td></tr>" +
//    "<tr><td>Password:</td><td><input type='password' id='txtlPassword' class='form-control' placeholder='enter password' /></td><td class='tdPadding'><label id='elblPswd'></label></td></tr>" +
//    "<tr><td></td><td><button type='submit' id='btnlogin' class='btn btn-primary btnWidth'>Submit</button></td></tr></tbody></table></div>");

var aLocation = '';
var baseurl = '';

$(document).ready(function () {
    $("body").css('overflow-x', 'hidden');
    $("#lbluname").css("visibility", "hidden");
    $("#lbluser").css("visibility", "hidden");
    $("#lblpol").css("visibility", "hidden");
    $("#lblPolicyNum").css("visibility", "hidden");    
    $('#login').css("visibility", "hidden");    
    
    awdUser = getUrlString()["userID"];
    objId = getUrlString()["objID"];    

    var environ = window.location.host;
    var pathname = window.location.pathname;
    var res = pathname.split("/");
    if (location.hostname !== "localhost")
        baseurl = "//" + environ + "/" + res[1];
    if (res[1] !== undefined && res[1] !== "")
        aLocation = "/" + res[1];
   if ((awdUser != null && objId !== null) || (awdUser != undefined && objId != undefined)) {
        status = "cApp";
        waitingDialog.show();
        authenticationCheck();
    }
    else {
        appendLoginPanel();
        $('#login').css("visibility", "visible");
        //var currentUser = $('#currentUser').val();
        //$('#txtlUsername').val(currentUser);
        status = "sApp";        
    }    
});

$(function () {   
    $("#btnlogin").click(function () {
        var valid = 0;
        objId = null;
        $("#elblUser").html("");
        $("#elblPswd").html("");
        var userName = $("#txtlUsername").val();
         lPassword = $("#txtlPassword").val();
            if (userName == null || userName == "") {
                valid = 1;
                $("#elblUser").html("*Required Username");               
            }        
            if (lPassword == null || lPassword == "") {
                valid = 1;
                $("#elblPswd").html("*Required Password");                            
            }
        if (valid == 0) {
            waitingDialog.show();
            awdUser = userName.toUpperCase();            
            authenticationCheck();
        }
    });    
});

function authenticationCheck() {

    jQuery.post(
                baseurl + '/Home/Authentication',
                {
                    _AWDusername: awdUser.toUpperCase(),
                    _Password: lPassword,
                    _objID: objId,
                    _AppVersion:status
                })
                    .done(function (data) {
                        if (data._Status == "1") {
                            setTimeout(function () {
                                waitingDialog.hide();
                            }, 1000);                            
                            window.location.assign(aLocation + "/Home/Search");
                        }
                        if (data._Status == "2") {
                            setTimeout(function () {
                                waitingDialog.hide();
                            }, 1000);
                            dialogBox('Access Denied', 'txtUsername', 'red');
                        }
                        if (data._Status == "0") {
                            setTimeout(function () {
                                waitingDialog.hide();
                            }, 1000);
                            dialogBox('Enter valid Username & Password.');
                        }
                    });
}

function getUrlString() {
    var qString = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        qString.push(hash[0]);
        qString[hash[0]] = hash[1];
    }
    return qString;
}

function closeWindow() {
    window.opener = window;
    parent.window.close();
    //if (opener.history.length  != null)
    //    if (opener.history.length > 1) {
    //        opener.history.go(1 - opener.history.length);
    //        setTimeout('opener.close()', 1000);
    //    }
    //    else
    //        opener.close();
}

function appendLoginPanel() {
    var loginPanel = $("<div class='centered'><h6 class='loginHeader'>login</h6><table><tbody><tr><td>Username:</td><td>" +
"<input type='text' id='txtlUsername' class='form-control' value='' placeholder='enter username' /></td><td class='tdPadding'><label id='elblUser'></label></td></tr>" +
"<tr><td>Password:</td><td><input type='password' id='txtlPassword' class='form-control' placeholder='enter password' /></td><td class='tdPadding'><label id='elblPswd'></label></td></tr>" +
"<tr><td></td><td><button type='submit' id='btnlogin' class='btn btn-primary btnWidth'>Submit</button></td></tr></tbody></table></div>");
    $('.loginPanel').append(loginPanel);
}

var waitingDialog = waitingDialog || (function ($) {
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
                message = 'Validating User';
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
                    if (color == 'red')
                        closeWindow();
                }
            }
        }
    });
}

