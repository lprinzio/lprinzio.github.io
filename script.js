const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');
const menuLinks = document.querySelectorAll('.main-nav a');
const year = document.querySelector('#anno');
const menuLabel = menuButton?.querySelector('.sr-only');
const isEnglish = document.documentElement.lang === 'en';
const openMenuLabel = isEnglish ? 'Open menu' : 'Apri il menu';
const closeMenuLabel = isEnglish ? 'Close menu' : 'Chiudi il menu';

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuButton && menu) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    if (menuLabel) menuLabel.textContent = openMenuLabel;
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    if (menuLabel) menuLabel.textContent = isOpen ? openMenuLabel : closeMenuLabel;
    menu.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  menuLinks.forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) closeMenu();
  });
}
