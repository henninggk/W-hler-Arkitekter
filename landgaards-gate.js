window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var triggerDiv = document.querySelector('.image-3');
  var container = document.querySelector('.image-section-top');
  var fadeElement = container.querySelector('.image-1');

  var triggerDivOffset = triggerDiv.offsetTop;
  var triggerDivHeight = triggerDiv.offsetHeight;

  var fadeOutStart = triggerDivOffset - window.innerHeight; // Start fade-out-effekten når trigger-diven er helt utenfor synlighet
  var fadeOutEnd = triggerDivOffset + triggerDivHeight; // Avslutt fade-out-effekten når trigger-diven er helt utenfor synlighet

  if (scrollPosition >= fadeOutStart && scrollPosition <= fadeOutEnd) {
    var opacity = 1 - (scrollPosition - fadeOutStart) / (fadeOutEnd - fadeOutStart);
    fadeElement.style.opacity = Math.max(0.5, opacity);
  } else {
    fadeElement.style.opacity = 1; // Tilbakestill til normalen når "image-3" er skrollet ut av viewporten
  }
});

