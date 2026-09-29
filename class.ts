// class Student {
//     name: string;
//     age: number;

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

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    introduce() {
        console.log(`My name is ${this.name}`)
    }
}

class Student extends Person {
    study() {
        console.log("I am studying")
    }
}

const student = new Student("Rahul");
student.introduce();
student.study();