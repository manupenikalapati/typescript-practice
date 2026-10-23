interface Employee {
    readonly id: number;
    name: string;
    salary: number;
    department?: string //optional parameter
}

let employee1: Employee = {
    id: 101,
    name: "Manmohan",
    salary: 40000,
}

//employee1.id = 102   we cannot change the value
employee1.name = "Hari"

let employee2: Employee = {
    id: 102,
    name: "Ravi",
    salary: 30000,
    department: "IT"
}

//console.log(employee1)


//interface with methods

interface Employee2 {
    id: number;
    name: string;

    displayDetails(): void
}

let employee3: Employee2 = {
    id: 105,
    name: "Hari",

    displayDetails() {
        console.log(`Employee Id: ${this.id}`)
        console.log(`Eployee Name: ${this.name}`)
    }
}

//employee3.displayDetails()

//Interface with arrays

let employees: Employee[] = [
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
]

employees.forEach(employee => {
    //console.log(employee.salary)
})

//Nested interfaces 

interface Address {
    city: string;
    state: string;
    pincode: number
}

interface Employee3 {
    id: number;
    name: string;
    address: Address
}

let employee4: Employee3 = {
    id: 101,
    name: "Manmohan",
    address: {
        city: "Kurnool",
        state: "Andhra Pradesh",
        pincode: 518002
    }
}

//console.log(employee4)

//Interface inheritence with extends

interface Manager extends Employee {
    teamSize: number
}

let manager: Manager = {
    id: 101,
    name: "Manmohan",
    salary: 20000,
    teamSize: 10
}

//console.log(manager)

//Interface in functions

function showDetails(employee6: Employee) {
    console.log(employee6.name)
    console.log(employee6.salary)
}

showDetails({id:101, name:"manu", salary:10000})