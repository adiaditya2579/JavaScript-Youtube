const cooding = ["js", "ruby", "java", "phython", "cpp"]


// cooding.forEach(function (item) {
//     console.log(item);
// })



// cooding.forEach((val)=>{
//     console.log(val)
// })



// function printme(raj){
//     console.log(raj);
// }
// cooding.forEach(printme)


// cooding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCooding = [
    {
        languageName:"javaScript",
        languageFileName:"js"
    },
    {
        languageName:"phython",
        languageFileName:"py"
    },
    {
        languageName:"ruby",
        languageFileName:"rb"
    }
]

myCooding.forEach((item)=>{
    console.log(item.languageName);
})