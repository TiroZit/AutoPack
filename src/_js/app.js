import * as Functions from './modules/functions.js';
Functions.isWebp();

import * as Burger from './modules/burger.js';
Burger.burger();

// import * as Dynamic from './modules/dynamic-responsive.js';
// Dynamic.dynamic();


//Tabbis https://github.com/jenstornell/tabbis.js
// import * as Tabs from './modules/tabbis.es6.js';
// Tabs.Tabs();

// import * as Modal from './modules/modal.js';
// Modal.Modal();

// SWIPER
import Swiper, { Autoplay, Lazy, Navigation, Pagination } from 'swiper';
//import 'swiper/css';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';
Swiper.use([Navigation, Pagination, Autoplay, Lazy]);
const sliderAbout = new Swiper('.about-slider', {
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
const sliderServices = new Swiper('.services-slider', {
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

// LAZY-LOADING
// import lazyLoad from "vanilla-lazyload";
// lazy-loading.lazy();

// NOUISLIDER
// import * as noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css';

// AOS - ANIMATE 
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init();

// SIMPLEBAR https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
// import 'simplebar';
// import 'simplebar/dist/simplebar.css';

// CHOICES https://github.com/Choices-js/Choices
// import 'choices.js/public/assets/scripts/choices.min.js';
// import 'choices.js/public/assets/styles/choices.min.css';

// FANCYBOX https://fancyapps.com/docs/ui/fancybox
// import * as fancyboxjs from "@fancyapps/ui/dist/fancybox.esm.js";
// import * as fancyboxcss from "@fancyapps/ui/dist/fancybox.css";

// Accordion https://github.com/michu2k/Accordion
// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// FOCUS-VISIBLE
import focusVisible from "focus-visible";