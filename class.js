var Employee = /** @class */ (function () {
    function Employee() {
        this.name = "Manu";
        this.employeeId = 101;
    }
    Employee.prototype.showEmployeeDetails = function () {
        console.log(this.name);
        console.log(this.employeeId);
    };
    return Employee;
}());
var employee1 = new Employee();
//employee1.showEmployeeDetails()
//console.log(employee1)
//constructor in class
var Employee1 = /** @class */ (function () {
    function Employee1(name, employeeId) {
        this.name = name;
        this.employeeId = employeeId;
    }
    Employee1.prototype.displayDetails = function () {
        console.log("Name: ".concat(this.name));
        console.log("ID : ".concat(this.employeeId));
    };
    return Employee1;
}());
var employee2 = new Employee1("Manmohan", 101);
var employee3 = new Employee1("Navin", 102);
//employee2.displayDetails()
//employee3.displayDetails()
//access modifiers
//console.log(employee2.name)
//console.log(employee2.employeeId)
//getters and setters
var Employee3 = /** @class */ (function () {
    function Employee3(name) {
        this.name = name;
    }
    Object.defineProperty(Employee3.prototype, "nameOfEmp", {
        get: function () {
            return this.name;
        },
        set: function (newName) {
            if (newName.length > 5) {
                console.log("Name should not exceed more than 5 chars");
                return;
            }
            this.name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Employee3;
}());
var employee4 = new Employee3("Navin");
console.log(employee4.nameOfEmp);
employee4.nameOfEmp = "Manmohan";
console.log(employee4.nameOfEmp);
