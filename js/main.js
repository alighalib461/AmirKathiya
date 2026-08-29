/**
 * Berater Impex - Global Site Navigation, Call Modals & Toast System
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initCallModal();
  highlightActiveNav();
});

function initMobileMenu() {
  const toggleButtons = document.querySelectorAll('[data-mobile-menu-toggle]');
  const drawer = document.getElementById('mobileDrawer');
  const closeButton = document.getElementById('closeDrawerBtn');

  if (!drawer) return;

  function openDrawer() {
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleButtons.forEach(btn => btn.addEventListener('click', openDrawer));
  if (closeButton) closeButton.addEventListener('click', closeDrawer);

  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
  });
}

function initCallModal() {
  const callButtons = document.querySelectorAll('[data-action="call-now"]');
  const modal = document.getElementById('callModal');
  const closeBtn = document.getElementById('closeCallModal');

  if (!modal) return;

  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  callButtons.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

function highlightActiveNav() {
  let rawPath = window.location.pathname.replace(/\/$/, '');
  let currentSlug = rawPath.split('/').pop() || 'index';
  currentSlug = currentSlug.replace(/\.html$/, '');
  if (!currentSlug) currentSlug = 'index';

  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach(link => {
    const rawHref = link.getAttribute('href') || '';
    let linkSlug = rawHref.split('?')[0].split('#')[0].split('/').pop() || '';
    linkSlug = linkSlug.replace(/\.html$/, '');
    if (!linkSlug) linkSlug = 'index';

    if (linkSlug === currentSlug) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="material-symbols-outlined" style="color: #ffc658;">check_circle</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}
