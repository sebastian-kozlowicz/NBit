//#region Converter constructor function 
function Converter() {
    this.binaryNumbers = [];
}
//#endregion

//#region Prototypical inheritence toBinary function added to Converter base object
Converter.prototype.toBinary = function(n) {
	let remainder;
	let convertedString = '';

	if (n == 0)
		return '0';

	while (n > 0) {
		remainder = Math.floor(n % 2);
		convertedString = remainder + convertedString;
		n = Math.floor(n / 2);
	}

	return convertedString;
}
//#endregion

//#region Prototypical inheritence getNDigitBinaryNumbers function added to Converter base object
Converter.prototype.getNDigitBinaryNumbers = function(n) {
	let startingPoint = Math.pow(2, n - 1);
	let endingPoint = Math.pow(2, n) - 1;

	if (n == 1)
		startingPoint--;

	for (let i = startingPoint; i <= endingPoint; i++) {
		this.binaryNumbers.push(this.toBinary(i));
	}
}
//#endregion

//#region Prototypical inheritence getBinaryNumbers function added to Converter object
Converter.prototype.getBinaryNumbers = function() {
	return this.binaryNumbers.join(', ');
}
//#endregion