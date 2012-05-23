var nixLib = function (){
	
	var checkPhone = function (phone){

		/* RegExp below explained:
		^([0-9]{3}) checks that first 3 characters are digits 0-9, 
		[-]? checks for a dash but it is optional, 
		([0-9]{3}) checks that next 3 characters are digits 0-9, 
		[-]? checks for dash but is optional,
		([0-9]{4})$ checks that the last 4 characters are digits 0-9*/
		var pattern = new RegExp("^([0-9]{3})[-]?([0-9]{3})[-]?([0-9]{4})$"); 
		if (pattern.test(phone)){

			return true;
		}
		else{

			return false;
		};
	};

	var checkEmail = function (email){

		/* RegExp below explained:
		^([a-zA-Z0-9_\.\-]) checks that the beginning the of string contains any letter, digit, underscore, period or dash. 
		[@] checks for a literal @,
		([a-zA-Z0-9]) checks the domain name for any letter or digit,
		[\.] checks for a literal ., 
		([a-zA-Z]{3})$ checks that the last 3 characters are any letter*/
		var pattern = new RegExp("^([a-zA-Z0-9_\.\-])+[@]([a-zA-Z0-9])+[\.]([a-zA-Z]{3})$");
		
		if (pattern.test(email)){

			return true;
		}
		else{

			return false;
		};
	};

	return {
		"checkPhone": checkPhone,
		"checkEmail": checkEmail
	};
};