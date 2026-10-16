let cities: string[] | number[] = ["Kurnool", "Tirupati", "Anantapur", "Kadapa"] //shorthand notation
cities = [10, 20, 30]
//console.log(cities)
cities = ["Kurnool", "Anantapur"]
cities[0] = "Vizag"
//console.log(cities)



let countries: Array<string | number | boolean> = ["India", "USA", "UK", 30, 40, true]  //generic type notation
countries[1] = "Canada"
countries[2] = 20
countries[3] = true


let names: Array<any> = ["Kumar", "Ravi", 20, true, {city1: "Kurnool", city2: "Vizag"}]
names[0] = "Manu"
names[1] = true