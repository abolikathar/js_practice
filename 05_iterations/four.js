//iteration for object  -> for in loop

const myObject = {
    js: 'javascript',
    cpp: "c++",
    rb: "ruby",
    swift : "swift by apple"
}

for(const key in myObject){
    //console.log(`${key} shortcuts is for ${myObject[key]}`);
}
// js shortcuts is for javascript
// cpp shortcuts is for c++
// rb shortcuts is for ruby
// swift shortcuts is for swift by apple

const programming = ["js", "ruby", "c++", "java"]

for(const key in programming){
    console.log(programming[key]);
} 
/*
js
ruby
c++
java*/

//don`t work on map

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }   