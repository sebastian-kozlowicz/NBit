class Converter {
    constructor() {
        this.binaryNumbers = [];
    }

    toBinary(n) {
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

    getNDigitBinaryNumbers(n) {
        let startingPoint = Math.pow(2, n - 1);
        let endingPoint = Math.pow(2, n) - 1;
        if (n == 1)
            startingPoint--;
        for (let i = startingPoint; i <= endingPoint; i++) {
            this.binaryNumbers.push(this.toBinary(i));
        }
    }

    getBinaryNumbers() {
        return this.binaryNumbers.join(', ');
    }
}