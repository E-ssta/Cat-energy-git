const navElement = document.querySelector('.main-nav');
const buttonElement = document.querySelector('.main-nav__toggle');

navElement.classList.add('main-nav--closed');

buttonElement.addEventListener('click', () => {
  if (navElement.classList.contains('main-nav--closed')) {
    navElement.classList.add('main-nav--opened');
    navElement.classList.remove('main-nav--closed');
  } else {
    navElement.classList.add('main-nav--closed');
    navElement.classList.remove('main-nav--opened');
  }
});
