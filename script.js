// Current footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Animated hero titles
const phrases = ['AI & Data Science Student', 'Machine Learning Enthusiast', 'Data Explorer', 'UI/UX Design Learner'];
const typed = document.getElementById('typed');
let phrase = 0, letter = 0, deleting = false;
function typeText() {
  const value = phrases[phrase];
  typed.textContent = value.slice(0, letter);
  if (!deleting && letter < value.length) letter++;
  else if (!deleting) { deleting = true; return setTimeout(typeText, 1300); }
  else if (letter > 0) letter--;
  else { deleting = false; phrase = (phrase + 1) % phrases.length; }
  setTimeout(typeText, deleting ? 45 : 85);
}
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) typeText();

// Responsive navigation
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(opened));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Scroll reveal and skill animations
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.1});
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
}
