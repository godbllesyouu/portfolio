// Theme toggle with localStorage
(function() {
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.classList.add('dark');
  }
  function toggle() {
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  }
  document.getElementById('theme-toggle')?.addEventListener('click', toggle);
  document.getElementById('theme-toggle-m')?.addEventListener('click', toggle);
})();

// Mobile menu
document.getElementById('menuBtn')?.addEventListener('click', () => {
  document.getElementById('mobileMenu')?.classList.toggle('hidden');
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Copy phone
function copy(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Copied: ' + text);
  }).catch(() => {});
}
document.getElementById('copyPhone')?.addEventListener('click', () => copy('077-05-02-59'));
document.getElementById('copyPhone2')?.addEventListener('click', () => copy('077-05-02-59'));

// Year
document.getElementById('year').textContent = new Date().getFullYear();
