const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 10,
    direction: 'horizontal',
    grabCursor: 'true',
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    mousewheel: {
        invert: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

// // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  

    // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.4,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.5,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3.5,
      spaceBetween: 40
    }
  }
  });
