
const  coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// coding.forEach (function (val) { //use callback function
//     console.log(val);
// })
//js ,ruby ,java ,python ,cpp

// coding.forEach( (iteam) => {
//     console.log(iteam);  
// })

// function printMe(iteam){
//     console.log(iteam);
// }

// coding.forEach(printMe)

// coding.forEach((iteam , index, arr) => {
//     console.log(iteam , index , arr);
// })

const myCoding = [

    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "py"
    },

]

myCoding.forEach( (iteam) => {
    console.log(iteam.languageName);
})
/*
javascript
java
python*/