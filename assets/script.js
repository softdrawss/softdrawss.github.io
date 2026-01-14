let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

const sr = ScrollReveal({
  distance: '60px',
  duration: 0,
  reset: true,
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.read-more-btn').forEach(function(button) {
    button.addEventListener('click', function() {
      const row = button.closest('.row');
      const content = row.querySelectorAll('.row-content p');
      
      content.forEach(paragraph => paragraph.classList.toggle('expanded'));
      
      const allExpanded = Array.from(content).every(p => p.classList.contains('expanded'));
      button.textContent = allExpanded ? 'Read Less' : 'Read More';
      
      if (allExpanded) {
        row.style.height = 'auto';
      } else {
        row.style.height = '';
      }
    });
  });
});

sr.reveal('.home-text', { delay: 200, origin: 'top' });
sr.reveal('.home-img', { delay: 400, origin: 'top' });
sr.reveal('.about, .cta, .resume, .contact, .footer', { delay: 200, origin: 'top' });