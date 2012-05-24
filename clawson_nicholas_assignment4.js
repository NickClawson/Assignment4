//Author: Nick Clawson
//Date: 5/23/12
//SDI 1205



var phone = "440-506-8107"; //example phone number
var email = "NickClawson@fullsail.edu" //example email
var num = 5.1; //example number
var url = "www.penny-arcade.com" //example URL
var lib = nixLib(); //pulls library information into file

//checkPhone function test
console.log("phone test: " + lib.checkPhone(phone)); //displaying value of checkPhone test in console

//checkEmail function test
console.log("email test: " + lib.checkEmail(email)); //displaying value of checkEmail test in console

//checkURL function test
console.log("url test: " + lib.checkURL(url)); //displaying value of checkURL in console

//roundDecimal function test
console.log("rounding test: " + lib.roundDecimal(num, 2)); //displaying value of roundDecimal test in console

//stringToNumber function test
var numb = lib.stringToNumber("45.76") + 5; //performed basic arithmetic to determine if value was being returned properly
console.log ("parse test: " + numb); // displaying value of above line in console





alert("JavaScript works!");