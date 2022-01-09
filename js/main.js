//for swiper
var swiper = new Swiper(".side-main", {
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
});

var swiper = new Swiper(".testimonial", {
    slidesPerView: 1,
    autoplay: {
        delay: 3500,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
});

var swiper = new Swiper(".articals", {
    slidesPerView: 1,
    autoplay: {
        delay: 4000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
});

var swiper = new Swiper(".partner", {
    slidesPerView: 6,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
        },
        pagination: {
            el: ".partners .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            567: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            1199: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          },
});

$(document).ready(function() {
    //for active menu
    $('.list li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //for show-popup
    $('.show-popup').click(function (){
        $('.popup').fadeIn();
    });
    $('.popup').click(function (){
        $(this).fadeOut();
    });
    $('.popup .inner').click(function(e) {
        e.stopPropagation();
    });
    $('.close').click(function (){
        $('.popup').fadeOut();
    });


    //for active menu in popup
    $('.inner li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //for ask and answer
    $('.one').click (function () {
        if($(this).next('.answer-content').hasClass('active')){
            $(this).next('.answer-content').removeClass('active').slideUp();
            $(this).children('.icon').removeClass('.fas fa-chevron-circle-up').addClass('.fas fa-chevron-circle-down');
        }
        else {
        $('.box .answer-content').removeClass('active').slideUp();
        $('.box .one .icon').removeClass('.fas fa-chevron-circle-up').addClass('.fas fa-chevron-circle-down');
        $(this).next('.answer-content').addClass('active').slideDown();
        $(this).children('.icon').removeClass('.fas fa-chevron-circle-down').addClass('.fas fa-chevron-circle-up');
        }
    });

    //for footer 
    $('.footer .link').click (function () {
        $('.footer .link .title i').toggleClass('fa-angle-double-down fa-angle-double-up');
        $('.footer .link .go').slideToggle();
    });

    $('.footer .center').click (function () {
        $('.footer .center .title i').toggleClass('fa-angle-double-down fa-angle-double-up');
        $('.footer .center .sub').slideToggle();
    });

    //for button
    $('.btn').hover(function () {
        $(this).find('span').animate({
            width: '100%'
        },300);
      }, function() {
        $(this).find('span').animate({
            width: 0
        },300);
      });
})