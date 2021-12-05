import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component loaded")

let userService = new UserService()
/*
let user1 = new User(1, "Yavuz", "Mutlu", "Gebze")
let user2 = new User(2, "Bİlgin", "Özçalkan", "Üsküdar")

userService.add(user1)
userService.add(user2)

console.log(userService.list())

console.log(userService.getById(1))*/

userService.load()

let customerToAdd = new Customer(10, "Yunus", "Özyavuz", "Samsun", 45, 155151)
customerToAdd.type = "customer"
userService.add(customerToAdd)

console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())





