var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
//numberic enums
var role = Role.User;
console.log(role);
role = Role.Guest;
console.log(role);
role = Role.Admin;
console.log(role);
//custom starting value
var Roles;
(function (Roles) {
    Roles[Roles["Admin"] = 1] = "Admin";
    Roles[Roles["User"] = 2] = "User";
    Roles[Roles["Guest"] = 3] = "Guest";
})(Roles || (Roles = {}));
var roles = Roles.Admin;
console.log(roles);
roles = Roles.User;
console.log(roles);
roles = Roles.Guest;
console.log(roles);
var items;
(function (items) {
    items["Apple"] = "APPLE";
    items["Banana"] = "BANANA";
    items["Mango"] = "MANGO";
})(items || (items = {}));
console.log(items.Apple);
console.log(items.Banana);
console.log(items.Mango);
