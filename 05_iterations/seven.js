//map
// chaining = diecrtly use 2-3 methods

const myNumbers = [1,2,3,4,5,6,7,8]

//const newNums = myNumbers.map( (num) => num+10)
console.log(newNums);
/*[
  11, 12, 13, 14,
  15, 16, 17, 18
]*/

const newNums = myNumbers
    .map((num) => num*10)
   .map((num)=>num+1)
   .filter((num) => num>=40)

   console.log(newNums);