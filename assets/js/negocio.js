const btnNavCategory = document.querySelector('#btnCategory');
const sidebarCategory = document.querySelector('.sidebar__category');

btnNavCategory.addEventListener('click', (e) => {
  e.preventDefault();
  isClassActive(sidebarCategory)
    ? hideNavMobile(sidebarCategory, btnNavCategory)
    : showNavMobile(sidebarCategory, btnNavCategory);
});
