// =============================================
// L'Arte della Pasta — main.js
// =============================================

// 1. Mobile nav hamburger
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => navMobile.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!navMobile.contains(e.target) && e.target !== navToggle) {
      navMobile.classList.remove('open');
    }
  });
}

// 2. Dish card carousel scroll (prev/next buttons)
const track   = document.getElementById('cardsTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (track && prevBtn && nextBtn) {
  const scrollAmount = 240;

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
}

// 3. Sticky navbar shadow on scroll
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 8
      ? '0 4px 24px rgba(0,0,0,0.1)'
      : '0 2px 16px rgba(0,0,0,0.06)';
  });
}

// 4. Cart button click feedback
document.querySelectorAll('.cart-icon-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    btn.style.background = '#27ae60';
    btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`;
    setTimeout(() => {
      btn.style.background = '';
      btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`;
    }, 1400);
  });
});