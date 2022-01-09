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