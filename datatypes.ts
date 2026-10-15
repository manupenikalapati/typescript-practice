// datatypes: string, number, boolean, any, object, array, tuple
// special types: void, null, undefined, never, unknown
//Explicit & Implicit

let studentName = "Manu"  //Implicit type string
let score = 225  //Implicit type number
let winner = true  //Implicit type boolean

let empName: string = "Ravi"  //Explicit type string
let salary: number = 50000   //Explicit type number
let isPermanent: boolean = false  //Explicit type boolean

//string type

let userName: string
userName = "Manu"

//number type

let userScore: number
userScore = 200

//boolean type

let isWinner: boolean
isWinner = true
isWinner = false

//any type

let employeeName: any
employeeName = "Ravi"
employeeName = 50000
employeeName = true

//union type

let cityName: string | number | boolean
cityName = "Banglore"
cityName = 1234
cityName = true

//unknown type

let userData: unknown
userData = "Manu"
userData = 1234
userData = true




