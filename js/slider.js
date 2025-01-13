// slider.js

const swiper = new Swiper('.swiper-container', {
   slidesPerView: 3,
   spaceBetween: 20,
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   loop: true,
   breakpoints: {
     1120: {
       slidesPerView: 3,
       spaceBetween: 20,
     },
     868: {
       slidesPerView: 2,
       spaceBetween: 15,
     },
     220: {
       slidesPerView: 1,
       spaceBetween: 10,
     },
   },
 });
 