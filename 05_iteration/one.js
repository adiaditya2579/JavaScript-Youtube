// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element ==5) {
        // console.log("5 is the best number")
    }
    // console.log(element);
    
}
// console.log(element);


// for(let i = 0; i >= 10; i++){
//     console.log(`outer loop value ${i}`);
//     for(let j = 0; j>= 10; j++){
//         console.log(`Inner Loop value of j ${j} Inner Loop value of i ${i} `)
//     }
// }



// let myArray = ["flash", "batman", "superman"]

// for(let i=0; i < myArray.length; i++){
//     let element = myArray[i]
//     console.log(element);
// }



// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }


//   Break and continue

// for (let index = 1; index <= 20 ; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`)
//         break
//     }
//     console.log(`value if i is ${index}`);
    
// }


for (let index = 1; index <= 20 ; index++) {
    if (index == 5) {
        console.log(`Detected 5`)
        continue
    }
    console.log(`value if i is ${index}`);
    
}