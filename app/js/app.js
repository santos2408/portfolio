const menu = document.querySelector('[data-js="menu"]')
const menuOpen = document.querySelector('[data-js="open-menu"]')
const menuClose = document.querySelector('[data-js="close-menu"]')

menuOpen.addEventListener('click', () => {
  menu.classList.add('show-menu')
})

menuClose.addEventListener('click', () => {
  menu.classList.remove('show-menu')
})