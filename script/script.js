$(document).ready(function() {

    darkmodeChecked();    
    $('.checkbox-check').change(function() {
        darkmodeChecked();   
    });

    menu();
});

//on checkbox check change class on main page to dark mode
const darkmodeChecked = function () {
    //if the checkbox is checked add the dark class and remove the light class
    if($('.checkbox-check').is(':checked')) {

            $('main').addClass('dark');
            $('main').removeClass('light');
            $('#grid-item-last').addClass('grid-item-dark');
            $('#grid-item-last').removeClass('grid-item-light');

        //remove the dark class and add the light class when checkbox is unchecked
        } else {

            $('main').removeClass('dark');
            $('main').addClass('light');
            $('#grid-item-last').removeClass('grid-item-dark');
            $('#grid-item-last').addClass('grid-item-light');
        } 
}

//on click of menu element add the active class to each menu element to display on page
const menu = function () {

    let list = $('.main-menu .menu-container .nav-menu ul li');

    //on click of element in menu add the active class and remove active class from currently active menu item, unless already active
    //INCOMPLETE
    list.on('click', function() {
        let element = $(this);
        let href = element.find('a').attr('href');
        let mainContent = $('.main-page');
        let mainSection = $('.modal-section');

        
        if(!element.hasClass('active')) {
            list.removeClass('active');
            element.addClass('active');
            mainSection.removeClass('active');
            mainContent.find(href).addClass('active');
        }
    })
}