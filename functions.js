//basic function or void
function greet1() {
    console.log("Hello World");
}
greet1();
//function with parameters
function greet2(name) {
    console.log("Hello ".concat(name));
}
greet2("Manu");
//function with multiple parameters
function add(x, y) {
    return x + y;
}
console.log(add(5, 10));
//Optional parameters
function greet3(name, age) {
    console.log(name, age);
}
greet3("Manu");
greet3("Suresh", 33);
//Default parameters
function greet4(name) {
    if (name === void 0) { name = "Guest"; }
    console.log(name);
}
greet4();
greet4("Manu");
//Rest Parameters
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var number = numbers_1[_a];
        total = total + number;
    }
    return total;
}
console.log(sum(10, 20, 30));
//arrow function
var totalSum = function (a, b) {
    return a + b;
};
console.log(totalSum(20, 30));
//function returning arrays
function getNumbers() {
    return [10, 30, 40, 50];
}
console.log(getNumbers());
