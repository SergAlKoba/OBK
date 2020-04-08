$(document).ready(function(){

    $('.phone').mask('+7 (000) 000 00 00', {placeholder: "+7 (___) ___ __ __"});

    var header_height = $('header').height();
    var footer_height = $('footer').height();
    $('body').css({
        'padding-top': header_height,
        'padding-bottom': footer_height
    });

    $('.close').on('click', function(){
        $('.menu-mobile').removeClass('active');
    });

    $('.modile-menu').on('click', function(){
        console.log(0)
        $('.menu-mobile').addClass('active');
    });

});

$(window).resize(function(){

    var header_height = $('header').height();
    var footer_height = $('footer').height();
    $('body').css({
        'padding-top': header_height,
        'padding-bottom': footer_height
    });

});


