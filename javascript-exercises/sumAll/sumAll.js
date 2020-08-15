const sumAll = function(start, end) {
	let sum = 0;
	//Check whether start and end only positive numbers and parameter numbers
	if((start >= 0 && end >= 0) && (typeof start == "number" && typeof end == "number")){
	
		//Check whether the start is a larger number or a small number than the end
		if(start <= end){
			//Loop through numbers from start to end
			for (let i = start; i <= end; i++){
				sum += i;
			}
		}
		else{
			//Sum when start is greater than end
			for (let i = start; i >= end; i--){
				sum += i;
			}
		
		}
	return sum;
	
	}
	else return "ERROR";
	
	
	
	
}

module.exports = sumAll
