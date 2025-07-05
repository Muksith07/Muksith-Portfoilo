/*let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100; // adjust for header height if needed
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`header .navbar a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
};

// Optional: Add active class on click
navlinks.forEach(link => {
    link.addEventListener('click', () => {
        navlinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});*/

  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

//ReadMore
function toggleReadMore(btn) {
      const moreText = document.querySelector(".more-text");

      if (moreText.style.display === "inline") {
        moreText.style.display = "none";
        btn.textContent = "Read More";
      } else {
        moreText.style.display = "inline";
        btn.textContent = "Read Less";
      }
    }

// JAVASCRIPT//
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navlinks = document.querySelectorAll('header .navbar a');
    const navbar = document.querySelector('.navbar');
    const menu = document.querySelector('#menu-icon');

    window.onscroll = () => {
        let top = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navlinks.forEach(link => {
                    link.classList.remove('active');
                });
                const activeLink = document.querySelector(`header .navbar a[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });

        navbar.classList.remove('active');
        menu.classList.remove('fa-xmark');
    };
});




// Scroll to top
const scrollButton = document.querySelector('.button');
scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// EmailJS init
window.onload = function() { 
emailjs.init("aCg_LrZZ48GaOQlyM");

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7fc4jrp', 'template_evk51ke', contactForm, 'aCg_LrZZ48GaOQlyM')
        .then(() => {
            contactMessage.textContent = 'Message Sent Successfully ✔️';
            contactMessage.style.color = 'green';
            setTimeout(() => contactMessage.textContent = '', 5000);
            contactForm.reset();
        })
        .catch((error) => {
            contactMessage.textContent = 'Message failed to send ❌';
            contactMessage.style.color = 'red';
            console.error('EmailJS error:', error);
        });
};

contactForm.addEventListener('submit', sendEmail);
};
