
let a=200; //global scope declararation
if(true){
    let a=10; //block scope
    const b=20;
    var c=30;
}
//console.log(a);  can`t access outside the scope -> 200
//console.log(b); can`t access outside the scope
//console.log(c); can access outside the scope  thats why we won`t use var keyword

//when we chck scope in console on browser then it is different than the terminal 

//nested function- > can inherit parents property 

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
   // console.log(website); -> gives error cauz we cant access this outside the scope
    
   two()
}

one() //hitesh

if(true){
    const username = "hitesh"

    if(username=="hitesh"){
        const website = "youtube"
        console.log(username+website); //hiteshyoutube
    }
   // console.log(website); ->error

}
//console.log(username);->error scope

//++++++++++++++ intresting +++++++++++++++++

function addone(num){
    return num+1
}
addone(5) //6

const addTwo = function(num){ //consider as varible as well
    return num+1
}
addTwo(3); //4




