var nixLib = function (){
	
	var checkPhone = function (phone){ //checks if a string matches a NANP phone number pattern

		/* RegExp below explained:
		^([0-9]{3}) checks that first 3 characters are digits 0-9, 
		[-]? checks for a dash but it is optional, 
		([0-9]{3}) checks that next 3 characters are digits 0-9, 
		[-]? checks for dash but is optional,
		([0-9]{4})$ checks that the last 4 characters are digits 0-9*/
		var pattern = new RegExp("^([0-9]{3})[-]?([0-9]{3})[-]?([0-9]{4})$"); 
		
		if (pattern.test(phone)){ //checking if arguement matches regular expression

			return true; //returns true if arguement matches regular expression
		}
		else{

			return false; //returns false if arguement does not match regular expression
		};
	};

	var checkEmail = function (email){ //checks if a string matches a standard email address pattern

		/* RegExp below explained:
		^([a-zA-Z0-9_\.\-]) checks that the beginning the of string contains any letter, digit, underscore, period or dash. 
		[@] checks for a literal @,
		([a-zA-Z0-9]) checks the domain name for any letter or digit,
		[\.] checks for a literal ., 
		([a-zA-Z]{3})$ checks that the last 3 characters are any letter*/
		var pattern = new RegExp("^([a-zA-Z0-9_\.\-])+[@]([a-zA-Z0-9])+[\.]([a-zA-Z]{3})$");
		
		if (pattern.test(email)){ //checking if arguement matches regular expression

			return true; //returns true if arguement matches regular expression
		}
		else{

			return false; //returns false if arguement does not match regular expression
		};
	};

	var roundDecimal = function (num, places){ //rounds a given number arguement to a given decimal place

			return num.toFixed(places); //returns a number rounded to a given decimal place

	};

	var stringToNumber = function (sNum){ //takes a string version of a number value and returns the actual Number

		var num = parseFloat(sNum); //parseFloat returns a number from a string value regardless if it has a decimal or not. parseInt returns only integers

		return num;
	};

	return {
		"checkPhone": checkPhone,
		"checkEmail": checkEmail,
		"roundDecimal": roundDecimal,
		"stringToNumber": stringToNumber
	};
};