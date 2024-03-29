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
    slidesPerView: 3,
    spaceBetween: 0,
        autoplay: {
        delay: 2500,
        },
        pagination: {
            el: ".main-service .swiper-pagination",
            clickable: true,
        },
});

var swiper = new Swiper(".more-service", {
    slidesPerView: 3,
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
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
        },
        pagination: {
            el: ".partners .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            567: {
              slidesPerView: 3,
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

var swiper = new Swiper(".news", {
    slidesPerView: 1,
        autoplay: {
        delay: 2500,
        },
        pagination: {
            el: ".news .swiper-pagination",
            clickable: true,
        },
});


//for navbar in mobile
let menu = document.querySelector(".icon");
let nav = document.querySelector(".list ul");
let upperlogo = document.querySelector('.upper-logo')
let close = document.querySelector(".close-btn")
let modal = document.createElement("div")
modal.className = "popup"
let overflow = document.createElement("div")
overflow.className = "overflow"

menu.onclick = function () {
    nav.classList.add("open");
    upperlogo.classList.add("open");
    close.classList.add("open");
    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";
};

modal.onclick = function () {
    nav.classList.remove("open");
    upperlogo.classList.remove("open");
    modal.remove('.popup');
    document.body.style.overflow = "auto";
}

close.onclick = function () {
    this.parentElement.classList.remove("open");
    upperlogo.classList.remove("open");
    modal.remove('.popup');
    document.body.style.overflow = "auto";
    close.classList.remove("open");
};

document.onkeyup = function (e) {
    if (e.key === "Escape") {
        nav.classList.remove("open");
    }
};


$(document).ready(function() {

    // $('.icon').click (function (){
    //     $('.popup').fadeIn();
    // })

    // $('.close-btn').click (function (){
    //     $('.popup').fadeOut();
    // })

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
    if($(window).width() < 767) {
        $('.footer .link .title').click (function () {
            $('.footer .link .title i').toggleClass('fa-chevron-down fa-chevron-up');
            $('.footer .link .go').slideToggle();
        });
    
        $('.footer .center .title').click (function () {
            $('.footer .center .title i').toggleClass('fa-chevron-down fa-chevron-up');
            $('.footer .center .sub').slideToggle();
        });
    } 

    //for button
    // $('.btn').hover(function () {
    //     $(this).find('span').animate({
    //         width: '100%'
    //     },300);
    //   }, function() {
    //     $(this).find('span').animate({
    //         width: 0
    //     },300);
    //   });

      $('.say').select2();
      $(".say").select2({
        dir: "rtl"
      });
})