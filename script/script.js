$(document).ready(function() {
    console.log('ready');

    $('.checkbox-check').val($(this).is(':checked'));

    $('.checkbox-check').change(function() {
        if($('.checkbox-check').is(':checked')) {
            console.log('cheked');
        } else {
            console.log('unchecked');
        }     
    })

})
