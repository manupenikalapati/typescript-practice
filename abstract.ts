abstract class Employee {
    constructor(public name: string) {}

    abstract calculateBonus(): number;

    displayName(): void {
        console.log(this.name);
    }
}

class FullTimeEmployee extends Employee {
    calculateBonus(): number {
        return 10000;
    }
}

const employee1 = new FullTimeEmployee("Manu");

employee1.displayName();
console.log(employee1.calculateBonus());


//implementing interface

interface EmployeeDetails {
    name: string;
    employeeId: number;
    
}

class Employee1 implements EmployeeDetails {
    constructor(
        public name: string,
        public employeeId: number
    ) {}

    displayDetails(): void {
        console.log(`${this.name} - ${this.employeeId}`);
    }
}

const employee2 = new Employee1("Manu", 101);
employee2.displayDetails();