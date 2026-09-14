// primitive data type
//strings
let username:string ="ajju"

//number
let age:number = 40

//boolean
let isLoggedIn: boolean=true
let hasError: boolean=false

//array
let searchKeywords: string[]=["organic","fresh","grocery"]
let quantities: number[]=[1,2,3]
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

let user:
{   name1:string,
    email:string,
    role:string,
    isLoggedIn:boolean,
    age?:number
}
=
{
    name1:"ajju",
    email:"ajju@gmail.com",
    role:"admin",
    isLoggedIn:true,
    
}

let config:{
    readonly baseURL:string,
    timeOut:number
}={
    baseURL:"http://qa-cart.com",
    timeOut:5000
}
console.log(config)

//object containig arrays
let testUser:{
name:string,
roles:string[]
}={
 name:"ajju",
 roles:["admin","editor"]
}