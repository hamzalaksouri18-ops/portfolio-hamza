// Smooth scroll, year, and card reveal
document.addEventListener('DOMContentLoaded', function () {
  const arrow = document.getElementById('arrow');
  const work = document.getElementById('work');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  arrow && arrow.addEventListener('click', () => {
    work.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // reveal on scroll simple: fade in cards
  const cards = document.querySelectorAll('.project-card');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.transform = 'translateY(0)';
        e.target.style.opacity = 1;
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  cards.forEach(c => {
    c.style.transform = 'translateY(14px)';
    c.style.opacity = 0;
    c.style.transition = 'transform .6s cubic-bezier(.2,.9,.2,1), opacity .6s ease';
    obs.observe(c);
  });

  // ---- POPUP / MODAL ----
  const projectImages = document.querySelectorAll('.project-card img');

  projectImages.forEach(img => {
    img.addEventListener('click', () => {
      const title = img.dataset.title;
      const desc = img.dataset.desc;
      openModal(title, desc);
    });
  });
});

// Modal functions
function openModal(title, desc) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-desc").innerText = desc;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}