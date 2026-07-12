// 1. Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// 2. Appointment Form
const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! Your appointment request has been submitted.');
        this.reset();
    });
}

// 3. Booking Form (Choose ONE approach: Formspree, EmailJS, or Local)
// Here is a structure using Formspree as an example:
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show confirmation message
        const message = document.getElementById('confirmation-message');
        if (message) message.style.display = 'block';
        this.style.display = 'none';

        // Optional: Send data to Formspree
        const formData = new FormData(this);
        fetch("https://formspree.io/f/YOUR_ID", {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        }).catch(error => console.error('Error:', error));
    });
}
