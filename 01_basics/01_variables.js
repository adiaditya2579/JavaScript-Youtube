const accountID = 144553
let accountEmail = "aditya257@gmail.com"
var accountPassword = "12345"
var accountCity = "Ballia"
let accountState;

//  accountID = 2   not allowed

accountCity = "Mirzapur";
accountEmail = "rajaditya";
accountPassword = "121212"

console.log(accountID);

/*
Prefer not to use var
bacause of issue in block scope and functional scope
*/



console.table([accountCity, accountEmail, accountPassword, accountState, accountID])