$(document).ready(function(){

    jcf.replaceAll();

    $('.product-for').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product-nav',
        nextArrow: '<button class="slick-arrow next"><i class="icon-right-open-1"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-left-open-1"></i></button>',
    });

    $('.product-nav').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product-for',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.goods-slider').slick({
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: '<button class="slick-arrow next"><i class="icon-right-open-1"></i></button>',
                    prevArrow: '<button class="slick-arrow prev"><i class="icon-left-open-1"></i></button>',
                }
            }
        ]
    });

    $('#responsiveTabsDemo').responsiveTabs({
        startCollapsed: 'accordion'
    });

    $('.nav-item').matchHeight({
        byRow: false
    });

    $('.for-item').matchHeight({
        byRow: false
    });

    $('.catalog-item .img').matchHeight({
        byRow: false
    });

});

$(window).resize(function(){

    

});


