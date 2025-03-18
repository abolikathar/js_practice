const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));  //100.0 precision value

const otherNumber = 123.890836
console.log(otherNumber.toPrecision(4));


/*******MAth**********/
//Math-> object
console.log(Math.abs(-3));//3
console.log(Math.round(4.3)); //4
console.log(Math.ceil(4.2)); //4 upper value
console.log(Math.floor(4.5));//5
console.log(Math.max(4,5,5,7,7)); //max value

console.log(Math.random()); //values comes between 0-1
console.log((Math.random()*10) + 1);//to get values except 0
console.log(Math.floor(Math.random()*10) + 1); //to get floor value from decimal value

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min)
