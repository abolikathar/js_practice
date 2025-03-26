//const tinderUSer = new Object() //->singleton object

const tinderUSer={}

tinderUSer.id = "123abc"
tinderUSer.name = "Sammy"
tinderUSer.isLoggedIn = false

//console.log(tinderUSer);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname); // Hitesh

const obj1 = {1: "a" , 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5: "a", 5:"b"}

//const obj3 = {obj1,obj2} wrong practice
//const obj3 = Object.assign({} , obj1,obj2,obj4)

//using spred operator
const obj3 ={...obj1 , ...obj2}
console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users =  [
  {
    id:1,
    email:"abc@gmail.com",
  },
  {

  },

  {

  },
]

users[1].email; //-> from users 1st arrays value

console.log(tinderUSer);

console.log(Object.keys(tinderUSer)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUSer));//[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUSer)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUSer.hasOwnProperty('isLoggedIn'));//true