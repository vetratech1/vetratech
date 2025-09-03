const mobileButton = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileButton.addEventListener('click', () => {
  // Toggle dropdown visibility
  if (mobileMenu.style.display === "flex") {
    mobileMenu.style.display = "none";
    mobileButton.textContent = "☰";
  } else {
    mobileMenu.style.display = "flex";
    mobileButton.textContent = "✖";
  }
});
 // FAQ toggle function
        function toggleFAQ(id) {
            const content = document.getElementById(`faq-content-${id}`);
            const icon = document.getElementById(`faq-icon-${id}`);
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.classList.add('transform', 'rotate-180');
            } else {
                content.classList.add('hidden');
                icon.classList.remove('transform', 'rotate-180');
            }
        }
