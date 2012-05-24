//Author: Nick Clawson
//Date: 5/23/12
//SDI 1205



var phone = "440-506-8107"; //example phone number
var email = "NickClawson@fullsail.edu"; //example email
var url = "http://www.penny-arcade.com"; //example URL
var list = "a,b,c,d,e,f"; //example list with separator characters
var num = 5.1; //example number
var stringNum = "45.76"
var lib = nixLib(); //pulls library information into file

//checkPhone function test
console.log("phone test: " + lib.checkPhone(phone)); //displaying value of checkPhone with string arguement phone in console

//checkEmail function test
console.log("email test: " + lib.checkEmail(email)); //displaying value of checkEmail with string arguement email in console

//checkURL function test
console.log("url test: " + lib.checkURL(url)); //displaying value of checkURL with string arguement url in console

//switchChar function test
console.log("switch test: " + lib.switchChar(list, ",", "/")) //displaying value of swithcChar with string arguements list, "," and "/"

//roundDecimal function test
console.log("rounding test: " + lib.roundDecimal(num, 2)); //displaying value of roundDecimal with number arguements num and 5.1 in console

//stringToNumber function test
console.log ("parse test: " + lib.stringToNumber(stringNum)); // displaying value of stringToNumber with string arguement stringNum in console





alert("JavaScript works!");