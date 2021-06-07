$(document).ready(function() {

    const ifChecked = function () {
        if($('.checkbox-check').is(':checked')) {

                $('main').addClass('dark');
                $('main').removeClass('light');
                $('#grid-item-last').addClass('grid-item-dark');
                $('#grid-item-last').removeClass('grid-item-light');

            } else {

                $('main').removeClass('dark');
                $('main').addClass('light');
                $('#grid-item-last').removeClass('grid-item-dark');
                $('#grid-item-last').addClass('grid-item-light');
            } 
    }
    ifChecked();

    $('.checkbox-check').change(function() {
        ifChecked();   
    });
    });
