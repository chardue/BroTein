document.querySelectorAll('.hamburger').forEach(hamburger => {
  hamburger.addEventListener('click', () => {
    const navLinks = hamburger.parentElement.querySelector('ul');
    navLinks.classList.toggle('active');
  });
});