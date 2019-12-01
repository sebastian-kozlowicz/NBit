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
        //let startingPoint = Math.pow(2, n - 1);
        let formatter = new Formatter();
        let startingPoint = 0;
        let endingPoint = Math.pow(2, n) - 1;

        for (let i = startingPoint; i <= endingPoint; i++) {
            this.binaryNumbers.push(
                formatter.setFormat(this.toBinary(i), n)
            );
        }
    }

    getBinaryNumbers() {
        return this.binaryNumbers.join(', ');
    }
}