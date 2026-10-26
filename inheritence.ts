class Employee {
    

    constructor(public name: string, public empId: number){

    }

    displayDetails(): void {
        console.log(`${this.name} -- ${this.empId}`)

    }
}

class FullTimeEmployee extends Employee {
    constructor(name: string, empId: number, public monthlySalary: number ){
        super(name, empId)
    }
}

const employee1 = new FullTimeEmployee("Manu", 101, 50000)
//employee1.displayDetails()
//console.log(employee1.monthlySalary)











//static member and methods in class

class Student {
    static stdCount: number = 0

    constructor(){
        Student.stdCount = Student.stdCount + 1
    }

    static displayCount(){
        console.log(Student.stdCount)
    }
}

const student1 = new Student()
const student2 = new Student()
const student3 = new Student()

Student.displayCount()





