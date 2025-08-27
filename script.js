


   // Hamburger menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});


    // contact.js

(function() {
  emailjs.init("d8Key2RFkO3xRGytO"); // Replace with your Public Key
})();

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('status');

  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      emailjs.sendForm("service_cdn3yjf", "template_zkzpm0k", this)
        .then(() => {
          status.innerText = "✅ Message sent successfully!";
        }, (error) => {
          status.innerText = "❌ Failed to send message. Try again.";
          console.error("EmailJS Error:", error);
        });
    });
  }
});


// typed.js initialization
var typed = new Typed("#typing", {
  strings: [
    "Hello World! 🌎",
    "Welcome to Typed.js 🚀",
    "Let's make it type 🎉"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1000,
  loop: true
});