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

document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project-content .row");
  const btn = document.getElementById("show-more-projects");

  const INITIAL_VISIBLE = 6;
  const STEP = 3;
  let visibleCount = INITIAL_VISIBLE;

  function updateView() {
    projects.forEach((project, index) => {
      project.classList.toggle("visible", index < visibleCount);
    });

    if (visibleCount >= projects.length) {
      btn.textContent = "Show less";
    } else {
      btn.textContent = "Show more";
    }
  }

  // Initial state
  updateView();

  btn.addEventListener("click", () => {
    if (visibleCount >= projects.length) {
      visibleCount = INITIAL_VISIBLE;

      document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
      });
    } else {
      visibleCount = Math.min(visibleCount + STEP, projects.length);
    }

    updateView();
  });
});
