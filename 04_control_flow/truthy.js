const userEmail = {};

if (userEmail) {
    console.log("got user Email id")
}else{
    console.log("user don't Have Email id")
}


// falsey Values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN,

// truthy values,

// "0", "false", " ", [], {}, function{}


if (userEmail.length === 0){
    console.log("Array is empty")
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty")
}

//  Nullish Coalescing Operator (??): null Undifined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
//  

// console.log(val1);

// Terniary Operator

// condition ? true : false;

const iceCreamPrice = 50;

iceCreamPrice >= 80 ? console.log('more then 80') : console.log(" less then 80")

