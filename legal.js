// === Mobile menu toggle ===
const mobileButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileButton && mobileMenu) {
  mobileButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');

    // Change hamburger icon to X when open
    mobileButton.textContent = mobileMenu.classList.contains('show') ? '✖' : '☰';
  });
}

// === Smooth scrolling for internal links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });

      // Close mobile menu if open
      if (mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show');
        mobileButton.textContent = '☰';
      }
    }
  });
});
