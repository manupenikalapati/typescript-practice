//Generics allow us to write reusable code that works with different data types while preserving type safety.

function getValue<T>(value: T): T {
    return value
}

let empName = getValue<string>("Manu")
let empAge = getValue<number>(25)




interface ApiResponse<T> {
    success: boolean;
    data: T;
}

interface Employee {
    name: string;
    age: number;
}

interface Product {
    id: number;
    productName: string;
    price: number;
}

const empResponse: ApiResponse<Employee> = {
    success: true,
    data: {
        name: "Manu",
        age: 35
    }
};

console.log(empResponse.data.name);
console.log(empResponse.data.age);



//arrays 

function getFirstItem<T>(items: T[]): T | undefined {
    return items[0];
}

const names = ["Ravi", "Manmohan", "Sita"];
const ages = [25, 30, 28];

const firstName = getFirstItem(names);
const firstAge = getFirstItem(ages);

console.log(firstName);
console.log(firstAge);


//classes 

class Box<T> {
    constructor(public value: T) {}

    getValue(): T {
        return this.value;
    }
}

const nameBox = new Box<string>("Manmohan");
const ageBox = new Box<number>(30);

console.log(nameBox.getValue());
console.log(ageBox.getValue());