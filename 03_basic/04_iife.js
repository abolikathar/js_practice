//Immediately Invoked function Expressions(IIFE)

//we have to add ";" before run another iife function

(function chai(){   //function with name is called named iife
    console.log(`DB connected`);
})(); //DB connected

//for arrow function
((name) => {
    console.log(`DB connected to ${name}`);
})('hitesh') //DB connected to hitesh