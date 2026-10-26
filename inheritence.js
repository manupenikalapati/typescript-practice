var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, empId) {
        this.name = name;
        this.empId = empId;
    }
    Employee.prototype.displayDetails = function () {
        console.log("".concat(this.name, " -- ").concat(this.empId));
    };
    return Employee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(name, empId, monthlySalary) {
        var _this = _super.call(this, name, empId) || this;
        _this.monthlySalary = monthlySalary;
        return _this;
    }
    return FullTimeEmployee;
}(Employee));
var employee1 = new FullTimeEmployee("Manu", 101, 50000);
//employee1.displayDetails()
//console.log(employee1.monthlySalary)
//static member and methods in class
var Student = /** @class */ (function () {
    function Student() {
        Student.stdCount = Student.stdCount + 1;
    }
    Student.displayCount = function () {
        console.log(Student.stdCount);
    };
    Student.stdCount = 0;
    return Student;
}());
var student1 = new Student();
var student2 = new Student();
var student3 = new Student();
Student.displayCount();
