// Dates. 
  
const myDate = new Date();

// console.log(myDate.toString())

// console.log(myDate.toDateString())

// console.log(myDate.toISOString())

// console.log(myDate.toJSON())

// console.log(myDate.toLocaleDateString())

// let myCreatedDate = new Date (2023, 0, 23)
// let myCreatedDate = new Date (2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("01-14-2023")
let myCreatedDate = new Date("2023-02-25")

// console.log(myCreatedDate.toLocaleString())



let myTimeStamp = Date.now()



// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth())
// console.log(newDate.getDate())

newDate.toLocaleString('dafault', {
    weekday:"long"
})