//for of -> to create array of objects.

//[{} , {} , {}]

const arr = [1,2,3,4,5,6]

for(const num of arr){
    console.log(num);
}

const greetings = "hello world"

for(const greet of greetings){
    console.log(`Each keyword is ${greet}`)
}

//maps -> contain unique values -> key value pair-> maintains order

const  map = new Map()

map.set('IN',"india")
map.set('usa' , "united states of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);
/*
Map(3) {
    'IN' => 'India',
    'usa' => 'united states of America',
    'Fr' => 'France'
  }
*/

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}



//for of -> can not work on object iteration

/*
const myObject = {
     game1: 'NFS',
    game2: 'Spiderman'
}

for(const [key,value] of myObject){
    console.log(key, ':-', value);  //myObject is not iterable
}
    */