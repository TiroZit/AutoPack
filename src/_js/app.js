import * as Functions from './modules/functions.js';
Functions.isWebp();

import * as Burger from './modules/burger.js';
Burger.burger();

// SWIPER 
// https://swiperjs.com/swiper-api
import './modules/sliders.js';

const anchors = document.querySelectorAll('a[href*="#"]');
if(anchors){
  for (let anchor of anchors){
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector(''+blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
}

// FOCUS-VISIBLE
import focusVisible from "focus-visible";