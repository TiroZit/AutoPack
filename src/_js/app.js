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
      document.querySelector('.burger').classList.remove('active')
      document.querySelector('.menu').classList.remove('open');
      document.body.classList.remove('lock');
      const blockID = anchor.getAttribute('href');
      document.querySelector(''+blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
}

// Отправка формы
const btnContacts = document.getElementById('btn-contacts');
const formContacts = document.getElementById('form-contacts');
async function sendComment(e){
    // Отменяем поведение по умолчанию - отправка формы
    e.preventDefault();
    // Собрать данные с формы
    const data = new FormData(formContacts);
    // Отправляем запрос на сервер
    const responce = await fetch('contacts.php', {
        method: 'POST', // Метод отправки запрос
        body: data // Данные с формы
    });
    if(responce.ok){
      let t = btnContacts.textContent;
        navigator.clipboard.writeText(t).then(()=>{
          btnContacts.innerHTML = "Заявка отправлена!",
          setTimeout(()=>btnContacts.innerHTML = t + `<svg class="arrow" style="width: 20px; height: 14px; fill: currentColor; stroke: undefined;"> 
          <use xlink:href="img/icons/icons.svg#arrow"></use>
        </svg>`, 3000)
          }
        )
    } else console.log(responce.status);
}
btnContacts.addEventListener('click', sendComment)

// FOCUS-VISIBLE
import focusVisible from "focus-visible";

// Подсказки
import tippy from 'tippy.js';
