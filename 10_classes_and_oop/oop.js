// const user = {
//     username:"Aditya",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetel: function(){
//         // console.log('get user detail from data base');
//         // console.log(`Username: ${ this.username}`);
//         // console.log(this);
//     }
// }

// console.log(this);
// console.log(user.username);
// console.log(user.getUserDetel());


// const promiseOne = new Promises()
// const data = new Date()

function user(username, loginCount, isloggedIn){
    this.username = username;
    this.isloggedIn = isloggedIn;
    this.loginCount = loginCount;

    return this
}
const userOne = new user('Aditya', 8, true)
const userTwo = new user('chai aue code', 10, true)

console.log(userOne);
console.log(userTwo);

