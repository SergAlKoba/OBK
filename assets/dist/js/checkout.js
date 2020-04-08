$(document).ready(function(){

    jcf.replaceAll();

    $('.tabs li').on('click', function(){
        var tabs = $(this).data('tab');
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tabs-content').removeClass('active');
        $('.' + tabs).addClass('active');
    });

});

$(window).resize(function(){

    

});


