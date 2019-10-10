$(document).ready(function() {
    $('#generate').on('click', function() {
        let converter = new Converter();
        let timer = new Timer();

        converter.getNDigitBinaryNumbers($('#bitsNumber').val());

        $('#results').val(converter.getBinaryNumbers());
    });
});