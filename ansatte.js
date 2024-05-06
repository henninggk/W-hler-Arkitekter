const ansatte = document.querySelectorAll('.ansatt');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

ansatte.forEach(ansatt => {
  observer.observe(ansatt);
});
