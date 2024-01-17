function multiplication(num){
    return num*5
}
multiplication.power = 3
console.log(multiplication(4));
console.log(multiplication.power);
console.log(multiplication.prototype);



function createuser(username, score){
    this.username = username
    this.score = score
}
createuser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
const chai = new createUser("chai", 25)
const tea = createUSEE("tea", 250)
