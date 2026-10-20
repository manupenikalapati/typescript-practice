var studentDetails = ["Manu", 10, false];
console.log(studentDetails);
// We have no type safety in our tuple for indexes 3+
studentDetails.push("manu");
console.log(studentDetails);
studentDetails.push(20);
console.log(studentDetails);
//named tuples
var graph = [55.5, 60];
graph.push(30);
console.log(graph);
