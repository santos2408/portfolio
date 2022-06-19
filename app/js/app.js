const menu = document.querySelector('[data-js="menu"]')
const menuOpen = document.querySelector('[data-js="open-menu"]')
const menuClose = document.querySelector('[data-js="close-menu"]')

menuOpen.addEventListener('click', () => {
  menu.classList.add('show-menu')
})

menuClose.addEventListener('click', () => {
  menu.classList.remove('show-menu')
})

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });