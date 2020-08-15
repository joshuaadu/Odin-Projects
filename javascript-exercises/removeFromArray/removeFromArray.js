const removeFromArray = function(array, ...arguments) {

	//Assign arguments to an array
	let elements = [...arguments];
	
	//Check whether an element is a string
	const hasString = (element)=> typeof element == "string";
	
	

	
	//loop through each element in the elements/arguments array-modern style
	for (let element of elements){
	
		//Check whether argument/value is present in the array
		if(array.includes(element)){
		
			//Check if an argument is a number
			if (typeof element == "number"){
					array.splice(array.indexOf(element), 1);
				}
				
			//If the array has a string then remove any string argument
			else if(array.some(hasString)){
				array.splice(array.indexOf(element), 1);
			}
		}
	}
		
	
	/*
	//loop through the array to find the index of each argument-Old style
	for(let i = 0; i < elements.length; i++){
		let elementIndex = array.indexOf(elements[i])
			
			//Check if an argument is a number
			if (typeof elements[i] == "number"){
				array.splice(elementIndex, 1).;
			}
			//If the array has a string then remove any string argument
			else if(array.some(hasString)){
				array.splice(elementIndex, 1);
			}
					
			
			
	}*/
	
	
	return array;
}

//removeFromArray([1, 2, 3, 4], 3);

module.exports = removeFromArray

/*
//Using the argument object to access arguments of a function
function add(){
	
	// Using an array literal is shorter than above but allocates an empty array
	let args = [].slice.call(arguments);
	// You can use ES2015's Array.from() method or spread syntax to convert arguments to a real Array:
	let args = Array.from(arguments);
	// or
	let args = [...arguments];
	let sum = 0;
	
	for(let i = 0; i < args.length; i++){
		sum += args[i];
	}
	return sum;
}

add(22, 33, 33, 55);
*/

