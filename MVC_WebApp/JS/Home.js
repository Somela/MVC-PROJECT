var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
$(document).ready(function () {
    $.ajax({
        url: "Home" + "\\" + "GetEmployeeDetails",
        type: "GET",
        //cache: false,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: OnSuccess,
        failed: OnError
    });
});
function OnSuccess(data) {
    var htmlBody = "";
    $.each(data, function (key, item) {
        var DateOfBirth = new Date(item.DateOfBirth);
        var DateofJoining = new Date(DateofJoining);
        var DOB = DateOfBirth.toString("dd-MMM-yyyy");
        var DOJ = DateofJoining.toString("dd-MMM-yyyy")
        htmlBody += "<tr>";
        htmlBody += "<td>" + item.EmployeeName + "</td>"
        htmlBody += "<td>" + item.Email + "</td>"
        htmlBody += "<td>" + item.DepartName + "</td>"
        htmlBody += "<td>" + item.DateOfBirth + "</td>"
        htmlBody += "<td>" + item.DateofJoining + "</td>"
        htmlBody += "<td><button type='button' class='btn btn-primary btn-sm' id='onEdit'>Edit</button></td>"
        htmlBody += "<td><button type='button' class='btn btn-primary btn-sm' id='onDelete'>Delete</button></td>"
        htmlBody += "</tr>";
    });
    $('.employeeBody').html(htmlBody);

}
function OnError(data) {
    console.log(data);
}
