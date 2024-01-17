// let myName = "Aditya        "
// let channelName = "chai       "

// console.log(myName.trim().length);


// let hero = ["thor","spiderman"]

// let heroPower = {
//     thor:"hammer",
//     spiderman:"sling",

//     getSpiderPower: function(){
//         console.log(`spidy power is ${this.spiderman}`);
//     }
// }


// Object.prototype.Aditya = function(){
//     console.log(`Aditya is present in all objects`);
// }
// Array.prototype.Raj = function(){
//     console.log(`Raj is present in all Array`);
// }
// heroPower.Aditya()
// hero.Aditya()
// heroPower.raj()
// hero.Raj()

const user = {
    userName:"chai aur code"
}
const Teacher = {
    makeVideo:true
}
const TeachingSupport = {
    isAvalable: false
}
const TASupport = {
    makeAssigmment: 'js assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = user


//modern syntex
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "Aditya         "

String.prototype.trueLenth = function(){
    console.log(`${this.trim().length}`)
}
anotherUserName.trueLenth()
"chai aur code        ".trueLenth()