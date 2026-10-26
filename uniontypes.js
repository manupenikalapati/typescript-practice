//union type allows a variable to store values more than one specified type
var employeeId;
employeeId = 101;
employeeId = "EMP101";
var attendance;
attendance = "Present"; // Valid
attendance = "Absent"; // Valid
attendance = "Leave"; // Valid
//attendance = "On Vacation"; // Error
function displayEmployeeId(id) {
    console.log("Employee ID:", id);
}
displayEmployeeId(101);
displayEmployeeId("EMP101");
var values;
values = [10, 20, 30];
values = ["HTML", "CSS", "TypeScript"];
var valuess;
valuess = [10, "TypeScript", 20, "Angular"];
