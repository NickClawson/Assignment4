var nixLib = function (){
	
	var checkPhone = function (phone){

		/* RegExp below explained:
		([0-9]{3}) checks that first 3 characters are digits 0-9, 
		[-]? checks for a dash but it is optional, 
		([0-9]{3}) checks that next 3 characters are digits 0-9, 
		[-]? checks for dash but is optional,
		([0-9]{4})$ checks that the last 4 characters are digits 0-9*/
		var pattern = new RegExp("([0-9]{3})[-]?([0-9]{3})[-]?([0-9]{4})$"); 
		if (pattern.test(phone)){

			return true;
		}
		else{

			return false;
		};
	};

	return {
		"checkPhone": checkPhone

	};
};