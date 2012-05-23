var phone = "440-506-8107";
var email = "NickClawson@fullsail.edu"
var num = 5.14432645;

var lib = nixLib();

//checkPhone function test
console.log("phone test: " + lib.checkPhone(phone));

//checkEmail function test
console.log("email test: " + lib.checkEmail(email));

//roundDecimal function test
console.log("rounding test: " + lib.roundDecimal(num, 2));


//stringToNumber function test
var numb = lib.stringToNumber("45.76") + 5; //performed basic arithmetic to determine if value was being returned properly
console.log ("parse test: " + numb);





alert("JavaScript works!");