//         fetch('https://google.com').then().catch().finally()

// const promiseOne = new Promise(function(resolve, reject) {
//     //Do  an Async task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is complete')
//         resolve()
//     },1000)

// })

// promiseOne.then(function(){
//     console.log('promise consumed');
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 reolved");
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){

//         resolve({username:"Aditya",email:"aitya@exmple.ccom"})
//     },1000)
// })

// promiseThree.then(function(u){
//     console.log(u);
// })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;

//         if(!error){
//             resolve({userName:'Adiaditya',password:'1234'})
//         }else{
//             reject('ERROR: somthing went wrong')
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.userName
// }).then((username)=>{
//     console.log(username)
// }).catch(function(error){
//     console.log(error)
// }).finally(()=> console.log("The Promise is either resolve or reject"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"javascript", password:"123"})
        }else{
            reject('ERROR: js went wrong')
        }
    }, 1000)
})    

async function consumePromiseFive(){
    try {
        const responce = await promiseFive
        console.log(responce);
        
    } catch (error) {
        console.log(ERROR);
    }
}
consumePromiseFive()


// async function getUser(){
//     try {
//         const responce = await fetch('https://api.github.com/users/adiaditya2579')
//         const data = await responce.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E",error);
//     }
// }
// getUser()

fetch('https://api.github.com/users/adiaditya2579')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log('error');
})