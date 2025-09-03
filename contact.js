// Mobile menu toggle
const mobileButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  
  if (mobileMenu.classList.contains('show')) {
    mobileButton.textContent = '✖';
  } else {
    mobileButton.textContent = '☰';
  }
});

// Smooth scrolling for anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });

      if (mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show');
        mobileButton.textContent = '☰';
      }
    }
  });
});
