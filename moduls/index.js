$(document).ready(function() {
    $('#generate').on('click', function() {
        let timer = new Timer();
        let converter = new Converter();

        timer.start();
        converter.getNDigitBinaryNumbers($('#bitsNumber').val());
        timer.stop();

        $('#results').val(converter.getBinaryNumbers());
        $('#timeElapsed').text(timer.elapsedTime);
    });
});