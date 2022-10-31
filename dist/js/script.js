const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElement = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('menu_active');
})

closeElement.addEventListener('click', () => {
  menu.classList.remove('menu_active');
})

const counters = document.querySelectorAll('.ability__ratings-counter'),
      lines = document.querySelectorAll('.ability__ratings-line-completion');

counters.forEach( (item, i) => {
  lines[i].style.width = item.innerHTML;
})
