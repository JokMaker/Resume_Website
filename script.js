// Smooth scrolling for navigation
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Parallax effect for background images
  window.addEventListener('scroll', function() {
    const parallaxSections = document.querySelectorAll('[data-parallax="scroll"]');
    parallaxSections.forEach(section => {
      let scrollPosition = window.pageYOffset;
      section.style.backgroundPositionY = (scrollPosition * 0.3) + 'px'; // Adjusted intensity
    });
  });
  
  // Responsive Navbar (Hamburger menu)
  const navMenu = document.querySelector('.navbar-menu');
  const hamburger = document.querySelector('.hamburger');
  
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
  
  // Contact Form Validation (If no form is present, this section can be skipped)
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
  
    if (name === "" || email === "") {
      alert("Please fill in all fields.");
    } else {
      alert("Thank you for reaching out, " + name + "!");
      // Add additional form submission logic here, such as sending data to a server
    }
  });
  