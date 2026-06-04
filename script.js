window.addEventListener('scroll', () => {
  const header = document.querySelector('.main-header');
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add('shadow-lg');
  } else {
    header.classList.remove('shadow-lg');
  }
});
