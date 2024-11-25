// Initialize Typed.js for Hero Section Text
document.addEventListener("DOMContentLoaded", function () {
    var options = {
      strings: ["A front-end web developer specializing in creating visually appealing websites.", "Incorporating UI/UX principles to deliver impressive user experiences."],
      typeSpeed: 60, // Speed of typing
      backSpeed: 30, // Speed of backspacing
      backDelay: 1000, // Delay before backspacing
      loop: true // Loop the animation
    };
    var typed = new Typed("#home h2", options);
  });

  
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

// Simple form validation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      alert('Please fill in all fields before submitting!');
    } else {
      alert('Thank you for reaching out to me! You shall be attended to soon.');
      // Reset form
      document.querySelector('form').reset();
    }
  });

  
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
      this.querySelector('p').style.display = 'block';
    });
    item.addEventListener('mouseleave', function () {
      this.querySelector('p').style.display = 'none';
    });
  });
  

  
  