var employee1 = {
    id: 101,
    name: "Manmohan",
    salary: 40000,
};
//employee1.id = 102   we cannot change the value
employee1.name = "Hari";
var employee2 = {
    id: 102,
    name: "Ravi",
    salary: 30000,
    department: "IT"
};
var employee3 = {
    id: 105,
    name: "Hari",
    displayDetails: function () {
        console.log("Employee Id: ".concat(this.id));
        console.log("Eployee Name: ".concat(this.name));
    }
};
//employee3.displayDetails()
//Interface with arrays
var employees = [
    {
        id: 101,
        name: "Manu",
        salary: 20000
    },
    {
        id: 102,
        name: "Hari",
        salary: 30000
    },
    {
        id: 103,
        name: "Navin",
        salary: 40000
    }
];
employees.forEach(function (employee) {
    //console.log(employee.salary)
});
var employee4 = {
    id: 101,
    name: "Manmohan",
    address: {
        city: "Kurnool",
        state: "Andhra Pradesh",
        pincode: 518002
    }
};
var manager = {
    id: 101,
    name: "Manmohan",
    salary: 20000,
    teamSize: 10
};
//console.log(manager)
//Interface in functions
function showDetails(employee5) {
    console.log(employee5.name);
    console.log(employee5.salary);
}
showDetails({ id: 101, name: "manu", salary: 10000 });
