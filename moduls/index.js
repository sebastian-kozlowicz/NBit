$(document).ready(function() {
    $('#generate').on('click', function() {
        let converter = new Converter();
        let timer = new Timer();

        timer.start();
        converter.getNDigitBinaryNumbers($('#bitsNumber').val());
        timer.stop();

        $('#results').val(converter.getBinaryNumbers());
        $('#timeElapsed').text(timer.elapsedTime + 's');
    });

    $('#generateTxtFile').on('click', function() {
        let converter = new Converter();
        let timer = new Timer();
        let streamWriter = new StreamWriter();

        timer.start();
        converter.getNDigitBinaryNumbers($('#bitsNumber').val());
        timer.stop();

        streamWriter.save(converter.getBinaryNumbers(), timer.elapsedTime);
    });
});