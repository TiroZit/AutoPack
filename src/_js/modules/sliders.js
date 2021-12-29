export function sliderMain(){
  const sliderMain = new Swiper('.swiper', {
    grabCursor: true,
    loop: true,// Ьесконечный прокрут
    speed: 500,
    slidesPerView: 'auto',// Кол-во слайдов
    spaceBetween: 0,// Отступ между слайдами
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
    breakpoints: {
      // when window width is >= 640px
      1400: {
        slidesPerView: 2,
      }
    }
  });
}