function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(array) {
	let sum = array.reduce((total, number) => {
		return total + number;
	}, 0);
	return sum;
}

function multiply(numbers) {
	let result = numbers.reduce((total, number) => {
		return total * number;
	});
	return result;
}

function power(a, b) {
	return a ** b;
}

function factorial(number) {
	if (number == 0) return 1;
	if (number > 0) {
		let result = 1;
		for (let i = 1; i <= number; i++) {
			result *= i;
		}
		return result;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};