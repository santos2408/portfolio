const menu = document.querySelector('[data-js="menu"]')
const menuOpen = document.querySelector('[data-js="open-menu"]')
const menuClose = document.querySelector('[data-js="close-menu"]')

menuOpen.addEventListener('click', () => {
  menu.classList.add('show-menu')
})

menuClose.addEventListener('click', () => {
  menu.classList.remove('show-menu')
})

const swiper = new Swiper('.projects__list', {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});