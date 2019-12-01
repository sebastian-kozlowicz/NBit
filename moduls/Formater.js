class Formater {
    constructor() {}

    setFormat(n, maxNLength) {
        if (n.length != maxNLength) {
            let neededZeros = maxNLength - n.length;
            let zeros = '';

            for (let i = 0; i < neededZeros; i++) {
                zeros += '0';
            }

            return zeros + n;
        } else {
            return n;
        }
    }
}