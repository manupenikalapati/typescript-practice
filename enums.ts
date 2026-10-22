enum Role {
    Admin,
    User,
    Guest
}

//numberic enums
let role = Role.User
console.log(role)
role = Role.Guest
console.log(role)
role = Role.Admin
console.log(role)

//custom starting value

enum Roles {
    Admin = 1,
    User,
    Guest
}

let roles = Roles.Admin
console.log(roles)
roles = Roles.User
console.log(roles)
roles = Roles.Guest
console.log(roles)


//string enum
enum items {
    Apple = "APPLE",
    Banana = "BANANA",
    Mango = "MANGO"
}

console.log(items.Apple)
console.log(items.Banana)
console.log(items.Mango)