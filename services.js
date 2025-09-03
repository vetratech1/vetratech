// Mobile menu toggle
const mobileButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    
    // Optional: change hamburger icon to X when menu is open
    if (mobileMenu.classList.contains('show')) {
        mobileButton.textContent = '✖'; // X icon
    } else {
        mobileButton.textContent = '☰'; // Hamburger icon
    }
});

// Smooth scrolling for anchor links
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
                mobileButton.textContent = '☰'; // Reset hamburger
            }
        }
    });
});
