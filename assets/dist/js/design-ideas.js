$(document).ready(function(){

    jcf.replaceAll();

    $('.accordion').accordion({
        heightStyle: "content"
    });

    $('.filter-title').on('click', function(){
        $(this).toggleClass('active');
        $('.filter-content').toggleClass('active');
    });
    
    $('.ideas-tabs li').on('click', function(){
        $('.ideas-tabs li').removeClass('active');
        $(this).addClass('active');
    });

});

$(window).resize(function(){

    

});


