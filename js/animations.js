/**
 * Berater Impex - High Performance Scroll & Entrance Animations
 * Using IntersectionObserver for fast, smooth (300-600ms), subtle animations
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initCounters();
  initHeaderScroll();
});

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    '.reveal-text, .reveal-fade, .reveal-scale, .reveal-card, [data-animate]'
  );

  if (!animatedElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        
        // Handle staggered children if parent has data-stagger
        if (el.hasAttribute('data-stagger-container')) {
          const children = el.querySelectorAll('.stagger-item');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('is-revealed');
            }, index * 90);
          });
        }
        
        el.classList.add('is-revealed');
        obs.unobserve(el);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));
}

function initCounters() {
  const counterElements = document.querySelectorAll('[data-counter]');
  if (!counterElements.length) return;

  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-counter'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1200; // ms
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out expo
          const easeProgress = 1 - Math.pow(2, -10 * progress);
          const currentVal = Math.floor(easeProgress * target);

          el.textContent = `${prefix}${currentVal}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = `${prefix}${target}${suffix}`;
          }
        }

        requestAnimationFrame(updateCounter);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  counterElements.forEach(el => counterObserver.observe(el));
}

function initHeaderScroll() {
  const header = document.querySelector('.header-nav');
  if (!header) return;

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });
}
