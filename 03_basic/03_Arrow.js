const user = {
 username: "hitesh",
 price: 999,

 welcomeMessage : function(){
    console.log(`${this.username}, welcome to website`);
    console.log(this);
 }
}

//output of this()
/*
{
    username: 'hitesh',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
  }
*/
// user.welcomeMessage() //hitesh, welcome to website
// user.username = "sam" //sam, welcome to website
// user.welcomeMessage() 
/*{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}*/ 

//mostly 'this' used in the object not in functions as well as arrow function
/*
const chai = function (){
    let username = "hitesh"
    console.log(this.username);
}
chai()  //undefined
*/

const chai =  () => {
    let username = "hitesh"
    console.log(this.username);
}
chai() //undefined
/* Explicit way - with return
const addTwo = (num1 , num2) => { //if we add {} we have to write return word, () -> no need of return word. 
    return num1+num2
}
    */

//const addTwo = (num1 , num2) => num1+num2; //same  as above

//implicit way - without return
//const addTwo = (num1 , num2) =>( num1+num2) //same as above

//with object
const addTwo = (num1 , num2) => ({usernmae:"asbd"})

console.log(addTwo(3,4)); //7