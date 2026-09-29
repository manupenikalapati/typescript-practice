// class Student {
//     name: string;
//     age: number;
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
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     introduce() {
//         console.log(`My name is ${this.name} and I am ${this.age} years old.`)
//     }
// }
// const student1 = new Student("Rahul", 25);
// const student2 = new Student("Priya", 22);
// student1.introduce()
// student2.introduce()
// class BankAccount {
//     private balance: number;
//     constructor(balance: number) {
//         this.balance = balance;
//     }
//     deposit(amount: number) {
//         this.balance = this.balance + amount
//     }
//     showBalance(){
//         console.log(this.balance)
//     }
// }
// const account = new BankAccount(10000);
// account.deposit(5000);
// account.showBalance();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.introduce = function () {
        console.log("My name is ".concat(this.name));
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.study = function () {
        console.log("I am studying");
    };
    return Student;
}(Person));
var student = new Student("Rahul");
student.introduce();
student.study();
