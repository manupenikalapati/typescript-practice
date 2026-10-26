//union type allows a variable to store values more than one specified type

let employeeId: number | string 
employeeId = 101
employeeId = "EMP101"


let attendance: "Present" | "Absent" | "Leave";

attendance = "Present"; // Valid
attendance = "Absent";  // Valid
attendance = "Leave";   // Valid

//attendance = "On Vacation"; // Error


function displayEmployeeId(id: number | string): void {
    console.log("Employee ID:", id);
}

displayEmployeeId(101);
displayEmployeeId("EMP101");


let values: number[] | string[];

values = [10, 20, 30];
values = ["HTML", "CSS", "TypeScript"];


let valuess: (number | string)[];

valuess = [10, "TypeScript", 20, "Angular"];