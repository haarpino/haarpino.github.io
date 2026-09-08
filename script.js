const navLinks = document.querySelectorAll('[data-nav]');
const sections = document.querySelectorAll('[data-page]');

function setActiveNav() {
  const currentPage = window.location.hash.replace('#', '') || 'home';
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.dataset.nav === currentPage);
  });
}

function showPageFromHash() {
  const currentPage = window.location.hash.replace('#', '') || 'home';
  if (!['home', 'about', 'contact'].includes(currentPage)) return;
  sections.forEach((section) => {
    section.hidden = currentPage !== 'home' && section.dataset.page === 'home';
    if (currentPage !== 'home') section.hidden = section.dataset.page !== currentPage;
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setActiveNav();
}

window.addEventListener('hashchange', showPageFromHash);
setActiveNav();
