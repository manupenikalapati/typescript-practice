//Generics allow us to write reusable code that works with different data types while preserving type safety.
function getValue(value) {
    return value;
}
var empName = getValue("Manu");
var empAge = getValue(25);
var empResponse = {
    success: true,
    data: {
        name: "Manu",
        age: 35
    }
};
console.log(empResponse.data.name);
console.log(empResponse.data.age);
//arrays 
function getFirstItem(items) {
    return items[0];
}
var names = ["Ravi", "Manmohan", "Sita"];
var ages = [25, 30, 28];
var firstName = getFirstItem(names);
var firstAge = getFirstItem(ages);
console.log(firstName);
console.log(firstAge);
//classes 
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var nameBox = new Box("Manmohan");
var ageBox = new Box(30);
console.log(nameBox.getValue());
console.log(ageBox.getValue());
