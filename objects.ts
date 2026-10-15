//Objects

type Fruit = {color: string, price: number, isAvailable: boolean}

let apple: Fruit = {
    color: "red",
    price: 100,
    isAvailable: true
}

let mango: Fruit = {
    color: "yellow",
    price: 100,
    isAvailable: true
}

// console.log(apple.color)
// console.log(apple.price)
// console.log(apple.isAvailable)

apple.color = "green"
apple.price = 120
apple.isAvailable = false

console.log(apple)