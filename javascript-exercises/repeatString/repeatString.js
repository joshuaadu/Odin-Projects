const repeatString = function(string, iterations) {
	let newString = "";
	if(iterations > 0){
		 for(;iterations > 0; iterations--){
		 	newString += string;
		 }
	return newString;
	}
	else if(iterations == 0){
	return newString;
	}
	else return "ERROR";
	 
}
//repeatString("hello", 2);
module.exports = repeatString
