class Formatter {
    constructor() {}

    setFormat(n, maxNLength) {
        if (n.length != maxNLength) {
            let neededZeros = maxNLength - n.length;
            let zeroAccumulator = '';

            for (let i = 0; i < neededZeros; i++) {
                zeroAccumulator += '0';
            }

            return zeroAccumulator + n;
        }
        return n;
    }
}