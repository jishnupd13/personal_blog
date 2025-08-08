// Scroll Reveal Animation
// Adds the 'active' class to elements when they come into view

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});

