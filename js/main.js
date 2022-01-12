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

var swiper = new Swiper(".main-service", {
    slidesPerView: 2,
        autoplay: {
        delay: 2500,
        },
        pagination: {
            el: ".main-service .swiper-pagination",
            clickable: true,
        },
});

var swiper = new Swiper(".more-service", {
    slidesPerView: 2,
        autoplay: {
        delay: 2500,
        },
        pagination: {
            el: ".more-service .swiper-pagination",
            clickable: true,
        },
});




var swiper = new Swiper(".testi", {
    slidesPerView: 1,
    autoplay: {
        delay: 3500,
        },
        pagination: {
            el: ".testimonials .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            567: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            1199: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1399: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
          },
});

var swiper = new Swiper(".articals", {
    slidesPerView: 3,
    autoplay: {
        delay: 4000,
        },
        pagination: {
            el: ".artical .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            567: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            1199: {
              slidesPerView: 3,
            },
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
                slidesPerView: 2,
                spaceBetween: 10,
            },
            567: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            1199: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          },
});

let menu = document.querySelector(".menu-btn");
let nav = document.querySelector(".list ul");
let close = document.querySelector(".close-btn")

menu.onclick = function () {
    nav.classList.add("open");
};

close.onclick = function () {
    this.parentElement.classList.remove("open");
};

document.onkeyup = function (e) {
    if (e.key === "Escape") {
        nav.classList.remove("open");
    }
};


$(document).ready(function() {

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
        $('.footer .link .title i').toggleClass('fa-chevron-down fa-chevron-up');
        $('.footer .link .go').toggleClass('footerOpen');
    });

    $('.footer .center').click (function () {
        $('.footer .center .title i').toggleClass('fa-chevron-down fa-chevron-up');
        $('.footer .center .sub').toggleClass('footerOpen');
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