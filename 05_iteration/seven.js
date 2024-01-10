const myNumber = [1,2,3,4,5,6,7,8,9,10];
//   let newNumber = myNumber.map((item)=> item +10)

let newNumber = myNumber.map((item)=> item*10).map((item)=> item+20)



console.log(newNumber);