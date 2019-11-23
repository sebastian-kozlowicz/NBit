class StreamWriter {
    save(binaryString, timeCounter) {
        var blob = new Blob([binaryString + "\nelapsed time: " + timeCounter + "s"], { type: "text/plain;charset=utf-8" });

        saveAs(blob, "output.txt");
    }
}