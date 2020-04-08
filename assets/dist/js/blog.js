$(document).ready(function(){

    $('.blog-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-right-open-1"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-left-open-1"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    nextArrow: '<button class="slick-arrow next"><i class="icon-right-open-1"></i></button>',
                    prevArrow: '<button class="slick-arrow prev"><i class="icon-left-open-1"></i></button>',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: '<button class="slick-arrow next"><i class="icon-right-open-1"></i></button>',
                    prevArrow: '<button class="slick-arrow prev"><i class="icon-left-open-1"></i></button>',
                }
            }
        ]
    });

    $('.blog-slider-item .title').matchHeight({
        byRow: false
    });


});

$(window).resize(function(){

    

});


