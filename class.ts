class Employee {
    name: string = "Manu"
    employeeId: number = 101

    showEmployeeDetails(): void {
        console.log(this.name)
        console.log(this.employeeId)
    }
}

let employee1 = new Employee()
//employee1.showEmployeeDetails()

//console.log(employee1)


//constructor in class

class Employee1 {
   public name: string;
   protected employeeId: number;

   constructor(name: string, employeeId: number){
     this.name = name
     this.employeeId = employeeId
   }

  

   displayDetails(){
    console.log(`Name: ${this.name}`)
    console.log(`ID : ${this.employeeId}`)
   }

}

const employee2 = new Employee1("Manmohan", 101)
const employee3 = new Employee1("Navin", 102)

//employee2.displayDetails()
//employee3.displayDetails()



//access modifiers

//console.log(employee2.name)
//console.log(employee2.employeeId)



//getters and setters

class Employee3 {
   private name: string;

    constructor(name: string){
        this.name = name;
    }

    get nameOfEmp(): string {
        return this.name
    }

    set nameOfEmp(newName: string){
        if(newName.length > 5) {
            console.log("Name should not exceed more than 5 chars")
            return;
        }
        this.name = newName
    }
}

const employee4 = new Employee3("Navin")
console.log(employee4.nameOfEmp)
employee4.nameOfEmp = "Manmohan";
console.log(employee4.nameOfEmp)