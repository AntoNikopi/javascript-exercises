const removeFromArray = function() {
	let array = arguments[0];
	let reduce_arr = Array.from(arguments);
	let new_arr = [];
	reduce_arr.shift();
	for (let i = 0; i<array.length; i++) {
		let is_unique = true;
		for (let j = 0; j<reduce_arr.length; i++) {
			if (array[i] === reduce_arr[j]) {
				is_unique = false;
			}
		}
		if ( is_unique ) {
			new_arr.push(array[i]);
		}
	}
	return new_arr;
};

// Do not edit below this line
module.exports = removeFromArray;
