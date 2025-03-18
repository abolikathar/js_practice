const name = "abc"
const repoCount = 50

//console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hiteshhc')  //string object

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4)); //position of character
console.log(gameName.indexOf('t'));

const gameName2 = new String("hitesh-shdhf")

console.log(gameName2.substring(0,4)); //0-3 char exclude last index-hite
console.log(gameName2.slice(-8,4));

const newString = "     hitesh "
console.log(newString);
console.log(newString.trim()); //to remove all whitespaces from the string

const url = "https://asndc.com/asdncn%10xjdjlkdnk"
console.log(url.replace('%10',"-"));

console.log(url.includes('https')); //includes()
console.log(gameName2.split('-')); //convert string into array on basis of '-'



