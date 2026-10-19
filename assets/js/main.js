/* ==========================
   Main JS - Navegación y animaciones
   ========================== */

// Toggle menú móvil
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (!hamburger || !navMenu) return;

  function setOpen(open) {
    hamburger.classList.toggle('active', open);
    navMenu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }

  hamburger.addEventListener('click', () => {
    setOpen(hamburger.getAttribute('aria-expanded') !== 'true');
  });
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navMenu.classList.contains('open')) {
      setOpen(false);
      hamburger.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.navbar-fixed')) setOpen(false);
  });
  const desktop = window.matchMedia('(min-width: 1024px)');
  desktop.addEventListener('change', () => setOpen(false));
}

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar-fixed');
  if (!navbar) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Reveal animations con Intersection Observer
function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach(el => observer.observe(el));
}

// Marcar link activo según la URL
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href.split('/').pop() === currentPath) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

// Mostrar notificación toast
function showToast(message, duration = 3500) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => toast.classList.add('show'), 50);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

// Año dinámico en footer
function setCurrentYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// Smooth scroll para anclas
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Inicialización general
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initNavbarScroll();
  initRevealAnimations();
  highlightActiveNav();
  setCurrentYear();
  initSmoothScroll();
});
