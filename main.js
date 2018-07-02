// $('.multiple-items').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
// });

$(window).scroll(function(){

    var sticky = $('.header'),
        scroll = $(window).scrollTop();

    if (scroll >= 50) {
        sticky.addClass('sticky');
    }
    else {
        sticky.removeClass('sticky');
    }
});

