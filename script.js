// ============ SCROLL FADE-IN ============
// Adds .visible class to elements with .fade-in when they enter the viewport

const fadeEls = document.querySelectorAll(
  '.hero-text, .hero-image-wrap, .about-label, .about-left, .about-right, .stat, .internship-inner'
);

fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once only
      }
    });
  },
  { threshold: 0.15 }
);

fadeEls.forEach(el => observer.observe(el));


// ============ APPLY BUTTON RIPPLE ============
const applyBtn = document.getElementById('apply-btn');

if (applyBtn) {
  applyBtn.addEventListener('click', function (e) {
    // Simple feedback: button text flicker
    const original = applyBtn.textContent;
    applyBtn.textContent = 'Opening mail...';
    applyBtn.style.pointerEvents = 'none';

    setTimeout(() => {
      applyBtn.textContent = original;
      applyBtn.style.pointerEvents = 'auto';
    }, 2000);
  });
}


// ============ ACTIVE NAV HIGHLIGHT ON SCROLL ============
const sections = document.querySelectorAll('section[id]');
const navBtn = document.querySelector('.nav-btn');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  // Highlight nav button when on apply section
  if (current === 'apply') {
    navBtn.style.background = '#d4541a';
  } else {
    navBtn.style.background = '#1a1208';
  }
});
