
// adding funtion multiply to global so that it can be accesed any where
exports.multiply = function(multiplier1, multiplier2) {

	if(arguments.length ==2){

	return (multiplier1 * multiplier2); // it will return the multiplication
	}

	else if(arguments.length ==1) {
		return ("undefined");
	}
    else if(arguments.length ==3) {
		return (multiplier1 * multiplier2); // it will return the multiplication
	}
};
