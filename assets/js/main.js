const btnNav = document.querySelector('#btnNav');
const headerMobile = document.querySelector('.header__mobile');
const overlay = document.querySelector('#overlayMobile');

btnNav.addEventListener('click', (e) => {
  e.preventDefault();
  isClassActive(headerMobile)
    ? hideNavMobile(headerMobile, btnNav)
    : showNavMobile(headerMobile, btnNav);
});

const isClassActive = (element) => {
  return element.classList.contains('active');
};

const showNavMobile = (element, button) => {
  element.classList.add('active');
  overlay.classList.add('active');
  changeOverflowBody('hidden');
  changeElementNav('fa-times-circle', button);
};

const hideNavMobile = (element, button) => {
  element.classList.remove('active');
  overlay.classList.remove('active');
  changeOverflowBody('visible');
  changeElementNav('fa-bars', button);
};

const changeOverflowBody = (overflow) => {
  document.querySelector('body').style.overflow = overflow;
};

const changeElementNav = (icon, button) => {
  button.innerHTML = '';
  let element = document.createElement('li');
  element.classList.add('fas', icon);
  button.appendChild(element);
};
