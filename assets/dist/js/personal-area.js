$(document).ready(function(){

    $('.personal-area-tabs li').on('click', function(){
        var dataTab = $(this).data('tab');
        $('.tabs-content').removeClass('active');
        $('.personal-area-tabs li').removeClass('active');
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
    });

    $('.my-orders-item a').on('click', function(){
        $(this).toggleClass('active');
        $(this).parent('.my-orders-item').next('.my-orders-content').toggleClass('active');
    });

    $('.order-archive-item a').on('click', function(){
        $(this).toggleClass('active');
        $(this).parent('.order-archive-item').next('.order-archive-content').toggleClass('active');
    });

});

$(window).resize(function(){

    

});


