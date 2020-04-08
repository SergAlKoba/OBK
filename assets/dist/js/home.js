$(document).ready(function(){

    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-right-open-1"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-left-open-1"></i></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                  arrows: false
                }
            }
        ]
    });

    if( $(window).width() >= 768 ) {
        $('.catalog-items').addClass('desc')
    }else{
        $('.catalog-items').addClass('mobile');
    }

    
    if( $(window).width() >= 768 ) {

        $('.catalog-item .img').matchHeight({
            byRow: false
        });

    }

    $('.slick-slide .brands-item').matchHeight({
        byRow: false
    });

    $('.brands-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-right-open-1"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-left-open-1"></i></button>',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    nextArrow: '<button class="slick-arrow next"><i class="icon-right-open-1"></i></button>',
                    prevArrow: '<button class="slick-arrow prev"><i class="icon-left-open-1"></i></button>',
                }
            },
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

});

$(window).resize(function(){



});


