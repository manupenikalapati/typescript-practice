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


//void
function greet(): void {
    //console.log("Hello, Manmohan!");
}

greet();

//null
let manager: string | null = null;

//console.log(manager);

manager = "Manu"
//console.log(manager)

//let manager: string = null; //throws error, we cannot assign null to string data type.

//undefined --- a value has not been assigned
let city: string | undefined

//console.log(city)

city = "Kurnool"

//never 
type Role = "admin" | "employee" | "guest";

function showRole(role: Role): string {
    switch (role) {
        case "admin":
            return "Admin access";

        case "employee":
            return "Employee access";

        case "guest":
            return "Guest access";

        default: {
            const impossible: never = role;
            return impossible;
        }
    }
}

console.log(showRole("admin"));




