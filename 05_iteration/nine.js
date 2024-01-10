const myNums = [1,2,3,4]

const  myTotal =myNums.reduce((acc, currval)=>{
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+currval
}, 5)


console.log(myTotal);