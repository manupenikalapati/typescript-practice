//type alias gives a name to a type so that we can reuse it whenever we need it

//without type alias

// let employeeName: string = "Manu"
// let manmagerName: string = "Navin"
// let trainerName: string = "Hari"

//with type alias

type PersonName = string

let hrName: PersonName = "Manu"
let empName: PersonName = "Ravi"
let managerName: PersonName = "Somesh"


type EmployeeName = string
type EmployeeAge = number
type IsEmployeeActice = boolean

let employeeName: EmployeeName = 'Manu'
let employeeAge: EmployeeAge = 30
let isEmpActive: IsEmployeeActice = true


//type aliases for objects

type Employee = {
    id: number;
    name: string;
    salary: number
}

let employee1: Employee = {
    id: 101,
    name: "Manu",
    salary: 30000
}

//type alias for arrays 

type EmployeeNamesList = string[]

let employeesList: EmployeeNamesList = ["Manu", "Navin", "Harish"]
employeesList.push("Tarak")


//nested objects type alias

type Address = {
    city: string;
    state: string;
    pincode: number
}

type Employee2 = {
    name: string;
    age: number;
    address: Address
}

let employee2: Employee2 = {
    name: "Manu",
    age: 30,
    address: {
        city: "Kurnool",
        state: "Andhra Pradesh",
        pincode: 518002
    }
}


//type alias for function types

type AddFunction = (a: number, b: number) => number

let add: AddFunction = (a, b) => {
    return a + b
}

console.log(add(2, 4))

//type alias with tuple

type StudentRecord = [string, number]

let student1: StudentRecord = ["Manu", 87]
let student2: StudentRecord = ["Navin", 55]