// Mobile menu toggle
const mobileButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  mobileButton.textContent = mobileMenu.classList.contains('show') ? '✖' : '☰';
});

// Smooth scroll
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


  function orderNow(product, price) {
    let phone = "917807752097"; // your WhatsApp number
    let message = `Hello, I want to order *${product}* for $${price}.`;
    let url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
