const menu = document.querySelector('[data-js="menu"]')
const menuOpen = document.querySelector('[data-js="open-menu"]')
const menuClose = document.querySelector('[data-js="close-menu"]')

menuOpen.addEventListener('click', () => {
  menu.classList.add('show-menu')
})

menuClose.addEventListener('click', () => {
  menu.classList.remove('show-menu')
})

// CLOSE MENU WHEN CLICKED ON LINK OR OUTSIDE
const menuList = document.querySelector('[data-js="menu-list"]')

menu.addEventListener('click', event => {
  const clickedElement = event.target

  if (clickedElement.tagName === 'A') {
    menu.classList.remove('show-menu')
  }
})

window.addEventListener('click', event => {
  console.log(event)
  console.log(event.target)
})

// CHANGE THEME OF WEBSITE

const themeButton = document.querySelector('[data-js="theme-button"]')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => 
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'

const getCurrentIcon = () => 
  document.body.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})