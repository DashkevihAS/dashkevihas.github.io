window.addEventListener('DOMContentLoaded', () => {
  const btnBurger = document.querySelector('.navigation__btn-burger');
  const menuBurger = document.querySelector('.navigation__list');
  const menuLinks = document.querySelectorAll('.navigation__item');

  const closeMenu = () => {
    btnBurger.classList.remove('navigation__btn-burger_close');
    menuBurger.classList.remove('navigation__list_open');
  };

  btnBurger.addEventListener('click', function () {
    this.classList.toggle('navigation__btn-burger_close');
    menuBurger.classList.toggle('navigation__list_open');
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
});
