"use strict";
// primitive data type
//strings
let username = "ajju";
//number
let age = 40;
//boolean
let isLoggedIn = true;
let hasError = false;
//array
let searchKeywords = ["organic", "fresh", "grocery"];
let quantities = [1, 2, 3];
// quantities.push("ten")
// console.log(quantities)
//objects
// let user= {
//     name1:"ajju",
//     email:"ajju@gmail.com",
//     role:"admin",
//     isLoggedIn:true
// }
// console.log("user name",user.name1)
// user.age=35
// //user.age="thirty six"
// console.log("user name",user)
// user.role=1
// console.log("user name",user)
let user = {
    name1: "ajju",
    email: "ajju@gmail.com",
    role: "admin",
    isLoggedIn: true,
};
let config = {
    baseURL: "http://qa-cart.com",
    timeOut: 5000
};
console.log(config);
//object containig arrays
let testUser = {
    name: "ajju",
    roles: ["admin", "editor"]
};
