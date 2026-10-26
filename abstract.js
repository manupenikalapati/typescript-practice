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
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.displayName = function () {
        console.log(this.name);
    };
    return Employee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullTimeEmployee.prototype.calculateBonus = function () {
        return 10000;
    };
    return FullTimeEmployee;
}(Employee));
var employee1 = new FullTimeEmployee("Manu");
employee1.displayName();
console.log(employee1.calculateBonus());
var Employee1 = /** @class */ (function () {
    function Employee1(name, employeeId) {
        this.name = name;
        this.employeeId = employeeId;
    }
    Employee1.prototype.displayDetails = function () {
        console.log("".concat(this.name, " - ").concat(this.employeeId));
    };
    return Employee1;
}());
var employee2 = new Employee1("Manu", 101);
employee2.displayDetails();
