const btnNav = document.querySelector('#btnNav');
const headerMobile = document.querySelector('.header__mobile');
const overlay = document.querySelector('#overlayMobile');

btnNav.addEventListener('click', (e) => {
  e.preventDefault();
  isClassActive(headerMobile) ? hideHeaderMobile() : showHeaderMobile();
});

const isClassActive = (element) => {
  return element.classList.contains('active');
};

const showHeaderMobile = () => {
  headerMobile.classList.add('active');
  overlay.classList.add('active');
  changeOverflowBody('hidden');
  changeElementNav('fa-times-circle');
};

const hideHeaderMobile = () => {
  headerMobile.classList.remove('active');
  overlay.classList.remove('active');
  changeOverflowBody('visible');
  changeElementNav('fa-bars');
};

const changeOverflowBody = (overflow) => {
  document.querySelector('body').style.overflow = overflow;
};

const changeElementNav = (icon) => {
  btnNav.innerHTML = '';
  let element = document.createElement('li');
  element.classList.add('fas', icon);
  btnNav.appendChild(element);
};
