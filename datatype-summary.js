// Primitiveo    ------------------------------------

// 7 types: string,Number,Boolean,null,undefined,symbol,BigInt

// const score = 100
// const scorevalue = 100.3
// const isLoggedIn = false
// const outsideTem = null

// const id = Symbol('123');
// const anotherID = Symbol('123');
// console.log(id === anotherID)


//Reference (Non Primitive) ------------------------------

//Array, Objects, Null

// let heros = ["saktiman", "hatim", "gogo"]
// let myObj = {
//     name: "Aditya",
//     age: 22,
//     gender: "male"
// }
// let myfunction =  function(){
//     console.log("hello world")
// }
// console.log(typeof myfunction)


// stack (Primitive),  Heap (Non-Primitive) ------------------------


let userOne = {
    email: "adiaditya2579@gmail.com",
    upi:"user@ubl"
};
let userTwo = userOne;

userTwo.email = "rajaditya2579@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)