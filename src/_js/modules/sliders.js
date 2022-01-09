// export function sliderMain(){
//   const sliderAbout = new Swiper('.about-slider', {
//     grabCursor: true,
//     loop: true,// Ьесконечный прокрут
//     speed: 500,
//     slidesPerView: 'auto',// Кол-во слайдов
//     spaceBetween: 0,// Отступ между слайдами
//     preloadImages: false,// Принудительно загрузить все слайды
//     lazy: {
//       loadPrevNext: true,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     breakpoints: {
//       // when window width is >= 640px
//       1400: {
//         slidesPerView: 2,
//       }
//     }
//   });
// }

import Swiper, { Autoplay, Lazy, Navigation, Pagination } from 'swiper';

// Инициализация слайдеров
// https://swiperjs.com/swiper-api#using-js-modules
function initSliders(){
  if(document.querySelector('.swiper')){
    new Swiper('.about-slider', {
      modules: [Pagination, Lazy, Autoplay],
      grabCursor: true,
      loop: true,// Ьесконечный прокрут
      speed: 500,
      slidesPerView: '1',// Кол-во слайдов
      preloadImages: false,// Принудительно загрузить все слайды
      lazy: {
        loadPrevNext: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
    });
    new Swiper('.services-slider', {
      modules: [Navigation, Pagination, Lazy, Autoplay],
      grabCursor: true,
      loop: true,// Ьесконечный прокрут
      speed: 500,
      slidesPerView: '1',// Кол-во слайдов
      preloadImages: false,// Принудительно загрузить все слайды
      lazy: {
        loadPrevNext: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
  }
}

window.addEventListener('load', function(e){
  // Запуск инициализации слайдеров
  initSliders();
});