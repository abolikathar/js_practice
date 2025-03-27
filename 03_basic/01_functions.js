//some line of code which we can combine together to put in one block .

/*
function myName(){
 console.log('a');
 console.log('b');
 console.log('c');    
}

myName(); //a b c

function addNumber(number1 , number2){ //while writting function defination we declare parameter.
    console.log(number1+number2);
}
*/
//addNumber(3,4);//7 //while calling function we give argument values.

//after declare of 'return' we cant write console.log(). and we can store that return variable in outside the function block.

/*
function addTwoNumber(number1,number2){
    //let result = number1+number2;
    //return result;
    return number1+number2;
}

const result = addTwoNumber(3,5);

console.log("Result: ", result); //Result:  8
*/

/*
function loginUserMsg(username){
    if(username === undefined){  //(!username)
         console.log("plz enter username");
         return
    }
    return `${username} just logged in`
}
*/
//console.log(loginUserMsg("hitesh"));//hitesh just logged in -> we need to print that return value through console.log
//console.log(loginUserMsg()); //undefined output if we not give any argument
//plz enter username
//undefined

//rest operator (...value)
function calculatePrice(...num1){
    return num1
}

function calculatePrice(val1,val2,...num1){
    return num1
}

//console.log(calculatePrice(200,400,500,2000)); //[ 200, 400, 500, 2000 ]
console.log(calculatePrice(200,400,500,2000));//[ 500, 2000 ]

const user = {
    username : "hitesh",
    price : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user); //username is hitesh and price is 199

//we can pass object directly as argument
handleObject({
    username:"sam",
    price:399
})

const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); //400

console.log(returnSecondValue([200,400,500]));//400


