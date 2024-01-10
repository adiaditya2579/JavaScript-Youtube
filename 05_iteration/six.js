const cooding = ["js", "ruby", "java", "phython", "cpp"]


// const values = cooding.forEach((item)=>{
//     console.log(item);
//     return item 
// } )
// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10];

// let val = myNums.filter((num)=> num >= 4)
// console.log(val);

// let val1 = myNums.filter((num)=> {
//     return num>=4
// })
// console.log(val1);



// const newNums = []
// myNums.forEach((raj)=>{
//     if(raj >= 4){
//         newNums.push(raj)
//     }
// })
// console.log(newNums)


let books = [
    {
        title:'Book Two', genre:'Non-firction', publish:1992, edition:2008
    },
    {
        title:'Book three', genre:'History', publish:1999, edition:2007
    },
    {
        title:'Book four', genre:'Non-firction', publish:1989, edition:2010
    },
    {
        title:'Book five', genre:'science', publish:2009, edition:2014
    },
    {
        title:'Book six', genre:'Non-firction', publish:1987, edition:2010
    },
    {
        title:'Book seven', genre:'science', publish:1911, edition:2016
    },
    {
        title:'Book eight', genre:'History', publish:1981, edition:2089
    }
]

const newBook = books.filter((bk)=>{
    return bk.genre == 'science' && bk.edition == 2016
})
console.log(newBook);

// let newBook = books.filter((bk)=> bk.genre == 'science');
// console.log(newBook);