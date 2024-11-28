$(document).ready(function () {
    
    
    $('#crear').on('change',function () {
        if ($(this).is(':checked')) {
            const inputSumar = $('<input>')
                                .attr('id','sumar')
                                .attr('type','number');
            $('.nuevo').append(inputSumar);

            var valorNum1 = parseFloat($('#num1').val());
            var valorNum2 = parseFloat($('#num2').val());

            $('#sumar').val(valorNum1 + valorNum2);

        } else {
            $('#sumar').remove();
        }
    });
});