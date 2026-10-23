//basic function or void

function greet1(): void{
    console.log("Hello World")
}

greet1()

//function with parameters

function greet2(name: string): void{
    console.log(`Hello ${name}`)
}

greet2("Manu")

//function with multiple parameters

function add(x: number, y: number): number{
    return x + y
}

console.log(add(5, 10))


//Optional parameters

function greet3(name: string, age?: number){
    console.log(name, age)
}

greet3("Manu")
greet3("Suresh", 33)

//Default parameters
function greet4(name: string = "Guest"): void{
    console.log(name)
}

greet4()
greet4("Manu")

//Rest Parameters
function sum(...numbers: number[]){
    let total: number = 0
    for(const number of numbers){
        total = total + number
    }
    return total
}

console.log(sum(10, 20, 30))

//arrow function

let totalSum = (a: number, b: number): number => {
    return a + b
}

console.log(totalSum(20, 30))

//function returning arrays

function getNumbers(): number[] {
    return [10, 30, 40, 50]
}

console.log(getNumbers())

//function return object

function getObject(): {
    name: string,
    age: number,
    isAdmin: boolean
}{
    return {
        name: "Manu",
        age: 25,
        isAdmin: true
    }
}

console.log(getObject())