//string, number, boolean types
let fname: string = "Manu";
let age: number = 20;
let isEligible: boolean = true;

//type inference
let empName = "Hari"
let empAge = 30;
let isChecked = true;

//interface
interface Employee {
    name: string;
    age: number
}

let emp: Employee = {
    name: "Manu",
    age : 25
}
console.log(emp)
