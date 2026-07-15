// Wait for the whole page to load
window.onload = function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (mobileMenu) {
        mobileMenu.onclick = function() {
            // Toggle the 'active' class on the menu list
            if (navList.style.display === "block") {
                navList.style.setProperty("display", "none", "important");
                mobileMenu.classList.remove('open');
            } else {
                navList.style.setProperty("display", "block", "important");
                mobileMenu.classList.add('open');
            }
        };
    }

    // Ensure all social links open in new tabs
    const links = document.querySelectorAll('.social-icons a, .footer-contact-group a');
    links.forEach(link => {
        if (link.href.includes('http')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
};
