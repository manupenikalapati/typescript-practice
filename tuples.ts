let studentDetails: [string, number, boolean] = ["Manu", 10, false]
console.log(studentDetails)
// We have no type safety in our tuple for indexes 3+
studentDetails.push("manu")
console.log(studentDetails)
studentDetails.push(20)
console.log(studentDetails)
