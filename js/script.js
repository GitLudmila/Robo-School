// Плавные якоря героя
const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href');
    
    document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth' ,
        // behavior: 'smooth или auto' ,
        block: 'center',
        // block: 'start, center, end или nearest',
    });
  })
};

// // Сллайдер от свайпера на тренерах
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     slidesPerView: 4,
//     spaceBetween: 10,
//     direction: 'horizontal',
//     keyboard: {
//         enabled: true,
//         onlyInViewport: false,
//       },
//     mousewheel: {
//         invert: true,
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//       draggable: true,
//     },

// // // If we need pagination
//     // pagination: {
//     //   el: '.swiper-pagination',
//     // },
  

//     // Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 320px
//     1020: {
//         slidesPerView: 2.5,
//         spaceBetween: 20
//       },
//     // when window width is >= 320px
//     1440: {
//       slidesPerView: 3.2,
//       spaceBetween: 20
//     },
//     // when window width is >= 1840px
//     1840: {
//       slidesPerView: 3.8,
//       spaceBetween: 30
//     },
//     // when window width is >= 1920px
//     1920: {
//       slidesPerView: 4,
//       spaceBetween: 30
//     }
//   }
//   });


// Модальные окна в слайдере
let buttons = document.querySelectorAll('#open'),
    spans = document.querySelectorAll('#close'),
    modal = document.querySelectorAll('.modal');

// console.log(modal[1]);
// console.log(modal.item(1));

// (A) DISABLE SCROLL
function noflow () {
    document.body.style.overflow = "hidden";
    document.body.style.userSelect = "none";
};

  // (B) ENABLE SCROLL
function haveflow () {
    document.body.style.overflow = "auto";
    document.body.style.userSelect = "auto";
};

// Открытие модалки
buttons[0].addEventListener('click', () => {
    noflow();
    modal[0].style.display = 'block';
    overlay[0].classList.add('show');
});
buttons[1].addEventListener('click', () => {
    noflow();
    modal[1].style.display = 'block';
    overlay[1].classList.add('show');
});
buttons[2].addEventListener('click', () => {
    noflow();
    modal[2].style.display = 'block';
    overlay[2].classList.add('show');
});
buttons[3].addEventListener('click', () => {
    noflow();
    modal[3].style.display = 'block';
    overlay[3].classList.add('show');
});
buttons[4].addEventListener('click', () => {
    noflow();
    modal[4].style.display = 'block';
    overlay[4].classList.add('show');
});
// Закрытие модалки
spans[0].addEventListener('click', () => {
    haveflow();
    modal[0].style.display = 'none';
    overlay[0].classList.remove('show');
});
spans[1].addEventListener('click', () => {
    haveflow();
    modal[1].style.display = 'none';
    overlay[1].classList.remove('show');
});
spans[2].addEventListener('click', () => {
    haveflow();
    modal[2].style.display = 'none';
    overlay[2].classList.remove('show');
});
spans[3].addEventListener('click', () => {
    haveflow();
    modal[3].style.display = 'none';
    overlay[3].classList.remove('show');
});
spans[4].addEventListener('click', () => {
    haveflow();
    modal[4].style.display = 'none';
    overlay[4].classList.remove('show');
});

// Нажатие клавиш возле модалки
// moves = modal.addEventListener('keyup', (e) => {
//     console.log(e.target);
//     if(e.code === "ArrowUp") {
//         console.log(`Success onkeyup ${e}`);
//     } else if(e.code === "ArrowDown") {
//         console.log(`Success onkeyup ${e}`);
//     }
//     // 
//     if(e.code === "ArrowLeft") {
//         console.log(`Success onkeyup ${e}`);
//     } else if(e.code === "ArrowRight") {
//         console.log(`Success onkeyup ${e}`);
//     }
// });



// What if I already scrolled the page?
// if you get the document.documentElement.scrollTop property via javascript just before the layer opening, 
// you could dynamically assign that value as top property of the body element: 
// with this approach the page will keep its current scroll position, no matter if you're on top or if you have already scrolled.
//     Css
// .noscroll {
//   position: fixed;
//   top: var(--st, 0);
//   inline-size: 100%;
//   overflow-y:scroll;
// }
//     JS
// const b = document.body;
// b.style.setProperty('--st', -(document.documentElement.scrollTop) + "px");
// b.classList.add('noscroll');




// document.addEventListener('keyup', (e) => {
//     console.log(e.code);
//     if(e.code === "ArrowUp") {
//         console.log(`Success onkeyup ${e}`);
//     } else if(e.code === "ArrowDown") {
//         console.log(`Success onkeyup ${e}`);
//     }
//     // 
//     if(e.code === "ArrowLeft") {
//         console.log(`Success onkeyup ${e}`);
//     } else if(e.code === "ArrowRight") {
//         console.log(`Success onkeyup ${e}`);
//     }
// });
    // document.addEventListener('keyup', function(event){
    //     console.log('Key: ', event.key);
    // });
// buttons[0].addEventListener('click', () => {
//     for (var i = 0; i < modal.length; i++) {
//         console.log('why me');
//         modal[i].style.display = 'block';
//         overlay[i].classList.add('show');
//     };
// });

// span[0].addEventListener('click', () => {
//     for (var i = 0; i < modal.length; i++) {
//         modal[i].style.display = 'none';
//         overlay[i].classList.remove('show');
//     };
// });  
    // for (var i = 0; i < modal.length; i++) {};

// Табы в модалке
const showTab = (elTabBtn) => {
    const elTab = elTabBtn.closest('.tab');
    if (elTabBtn.classList.contains('tab-btn-active')) {
        return;
    }
    const targetId = elTabBtn.dataset.targetId;
    const elTabPane = elTab.querySelector(`.tabs__block[data-id="${targetId}"]`);
    // console.log(targetId);
    // console.log(elTabPane);
    if (elTabPane) {
      const elTabBtnActive = elTab.querySelector('.tab-btn-active');
      elTabBtnActive.classList.remove('tab-btn-active');
      elTabBtnActive.style.color = "#141024";
      const elTabPaneShow = elTab.querySelector('.tabs__block--show');
      elTabPaneShow.classList.remove('tabs__block--show');
      elTabBtn.classList.add('tab-btn-active');
      elTabBtn.style.color = "#D52027";
      elTabPane.classList.add('tabs__block--show');
    }
}
  
document.addEventListener('click', (e) => {
    if (e.target && !e.target.closest('.tabs__item')) {
      return;
    }
    const elTabBtn = e.target.closest('.tabs__item');
    showTab(elTabBtn);
});

// console.log();\