$(document).ready(function() {
    $('#generate').on('click', function() {
        let converter = new Converter();
        let timer = new Timer();

        timer.start();
        converter.getNDigitBinaryNumbers($('#bitsNumber').val());
        timer.stop();

        $('#results').val(converter.getBinaryNumbers());
        $('#timeElapsed').text(timer.elapsedTime);
    });
});