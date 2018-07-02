// $('.multiple-items').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
// });

// $(window).scroll(function(){
//
//     var sticky = $('.header'),
//         scroll = $(window).scrollTop();
//
//     if (scroll >= 150) {
//         sticky.addClass('sticky');
//     }
//     else {
//         sticky.removeClass('sticky');
//     }
// });

$(window).scroll(function(event){
    var lastScrollTop = 150;
    var header = $('.header');
    var st = $(this).scrollTop();
    if (st >= lastScrollTop){
        header.addClass('fade-out');

    } else {
        header.removeClass('fade-out');
        // $('.spacer').addClass('fade-out');

    }
    lastScrollTop = st;
});