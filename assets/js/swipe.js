import Swiper from 'swiper/bundle';

var swiper = new Swiper(".team-swiper", {
    navigation: {
      nextEl: ".swiper-button-nexts",
      prevEl: ".swiper-button-prevs",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      250: {
        slidesPerView: 1.2,
        spaceBetween: 80
      },
      // when window width is &gt;= 320px
      300: {
        slidesPerView: 1.2,
        spaceBetween: 0
      },
      // when window width is &gt;= 480px
      400: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      // when window width is &gt;= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      840: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1150: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });