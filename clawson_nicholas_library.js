//Author: Nick Clawson
//Date: 5/23/12
//SDI 1205

var nixLib = function (){ //new library
	
	var checkPhone = function (phone){ //checks if a string matches NANP phone number syntax

		/* RegExp below explained:
		^([0-9]{3}) checks that first 3 characters are digits 0-9, 
		[-]? checks for literal dash but it is optional, 
		([0-9]{3}) checks that next 3 characters are digits 0-9, 
		[-]? checks for literal dash but is optional,
		([0-9]{4})$ checks that the last 4 characters are digits 0-9*/
		var pattern = new RegExp("^([0-9]{3})[-]?([0-9]{3})[-]?([0-9]{4})$"); //explained above
		
		if (pattern.test(phone)){ //checking if arguement matches regular expression

			return true; //returns true if arguement matches regular expression
		}
		else{

			return false; //returns false if arguement does not match regular expression
		};
	};

	var checkEmail = function (email){ //checks if a string matches standard email address syntax

		/* RegExp below explained:
		^([a-zA-Z0-9_\.\-]) checks that the beginning the of string contains any letter, digit, underscore, period or dash. 
		[@] checks for a literal @,
		([a-zA-Z0-9]) checks the domain name for any letter or digit,
		[\.] checks for a literal ., 
		([a-zA-Z]{2,4})$ checks that the last 2-4 characters are any letter*/
		var pattern = new RegExp("^([a-zA-Z0-9_\.\-])+[@]([a-zA-Z0-9])+[\.]([a-zA-Z]{2,4})$"); //explained above
		
		if (pattern.test(email)){ //checking if arguement matches regular expression

			return true; //returns true if arguement matches regular expression
		}
		else{

			return false; //returns false if arguement does not match regular expression
		};
	};

	var checkURL = function (url){ //checking if a given URL matches standard web address syntax

		/* RegExp below explained:
		^([https?:\/\/])? checks if beginning of string begins with http:// or https://. it is optional. 
		([www\.])? checks for "www." it is optional.
		([a-zA-Z0-9\.\-]) checks site name for any alphanumerics, literal . and literal -
		([a-zA-Z0-9]{2,4}) checks last 2 to 4 characters of domain name for any alphanumeric
		([\/\?\$\&\=\_\.a-zA-Z0-9]?) checks for optional special characters and alphanumerics in web address following main domain name*/
		var pattern = new RegExp("^([https?:\/\/])?([www\.])?([a-zA-Z0-9\.\-])([a-zA-Z0-9]{2,4})([\/\?\$\&\=\_\.a-zA-Z0-9]?)"); //explained above
    	 if (pattern.test(url)){ //checking if arguement matches regular expression

    	 	return true; //returns true if arguement matches regular expression
    	 }
    	 else{

    	 	return false; //returns false if arguement does not match regualar expression
    	 };

	};

	var roundDecimal = function (num, places){ //rounds a given number arguement to a given decimal place

			var rounded = num.toFixed(places); //creates new var with value of arguement rounded to given decimal place

			return rounded; //returns the arguement num rounded to the given decimal place

	};

	var stringToNumber = function (sNum){ //takes a string version of a number value and returns the actual Number

		var num = parseFloat(sNum); //parseFloat returns a number from a string value regardless if it has a decimal or not. parseInt returns only integers

		return num; //returns the number version of a stringified number
	};

	return {
		"checkPhone": checkPhone, //returns checkPhone function to be used outside of library
		"checkEmail": checkEmail, //returns checkEmail function to be used outside of library
		"checkURL": checkURL, //returns checkURL function to be used outside of library
		"roundDecimal": roundDecimal, //returns roundDecimal function to be used outside of library
		"stringToNumber": stringToNumber //returns stringToNumber function to be used outside of library
	};
};