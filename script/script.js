$(document).ready(function() {

    const ifChecked = function () {
        if($('.checkbox-check').is(':checked')) {

                $('main').addClass('dark');
                $('main').removeClass('light');
            } else {

                $('main').removeClass('dark');
                $('main').addClass('light');
            } 
    }
    ifChecked();

    $('.checkbox-check').change(function() {
        ifChecked();   
    });
    });
