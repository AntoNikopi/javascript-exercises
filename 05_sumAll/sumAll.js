const sumAll = function(num1, num2) {

	if ( num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number" ) {
		return 'ERROR';
	}

	const count = Math.abs(num2 - num1);
	let sum = 0;
	let current = Math.min(num1, num2);

	for ( let i = 0; i <= count; i++ ) {
		
		sum += current;
		current ++;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
