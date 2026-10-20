let studentDetails: [string, number, boolean] = ["Manu", 10, false]
console.log(studentDetails)
// We have no type safety in our tuple for indexes 3+
studentDetails.push("manu")
console.log(studentDetails)
studentDetails.push(20)
console.log(studentDetails)

//named tuples
const graph: [x: number, y: number] = [55.5, 60]
graph.push(30)
console.log(graph)


//destructring arrays
const [x, y] = graph
console.log(x)
console.log(y)