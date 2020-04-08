$(document).ready(function(){

    jcf.replaceAll();

    $('.accordion').accordion({
        heightStyle: "content"
    });

    $('.filter-title').on('click', function(){
        $(this).toggleClass('active');
        $('.filter-content').toggleClass('active');
    });

    $('.like').on('click', function(){
        $(this).toggleClass('active');
    });

    $('.product-sections .img').matchHeight({
        byRow: false
    });

});

$(window).resize(function(){

    

});


