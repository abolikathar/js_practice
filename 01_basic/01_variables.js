const accountId = 133344
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState; //output will be undefined

//accountId = 2 //not allowed
console.log(accountId);

accountEmail = "hc@hc.com"
accountPassword = "212121212"
accountCity = "bengaluru"

console.table([accountEmail,accountId,accountPassword,accountCity])

/*prefer not to use var because of issue in block scope and functional scope  */