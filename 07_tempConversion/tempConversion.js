const convertToCelsius = function(degreesC) {
	let degreesF = ((degreesC -32) * 5 )/ 9;
	let degreesRounded = degreesF.toFixed(1);
	return parseFloat(degreesRounded);
};

const convertToFahrenheit = function(degreesF) {
	let degreesC = ( degreesF * 9 ) / 5 + 32;
	let degreesRounded = degreesC.toFixed(1);
	return parseFloat(degreesRounded);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
