//singleton -> objects that created through constuctor like single object

let mySym= Symbol("key1")

const JsUser = {
    name:"Hitesh",
    "full name":"kathar",
    age:18,
    [mySym] :"mykey1",
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","Saturday"]
}
/*
console.log(JsUser.email) //not proper syntax  hitesh@google.com
console.log(JsUser["email"]) //proper syntax    hitesh@google.com
console.log(JsUser["full name"]) //kathar
console.log(JsUser[mySym])//mykey1

JsUser.email="abc@hmail.com"
Object.freeze(JsUser) //changes can`t possible
console.log(JsUser);
*/
/*{
  name: 'Hitesh',
  'full name': 'kathar',
  age: 18,
  location: 'jaipur',
  email: 'abc@hmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}*/

JsUser.greeting = function(){
    console.log("Hello Js user");
}

console.log(JsUser.greeting()); //Hello Js user

JsUser.greetingTwo = function(){
    console.log(`Hello Js user , ${this.name}`); //Hello Js user , Hitesh
}


console.log(JsUser.greetingTwo());


//[mykey]:"mykey" -> syntax for symbol

