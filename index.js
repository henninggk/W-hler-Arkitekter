


const alleDiver = document.querySelectorAll('div');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  rootMargin: '200px 0px 0px 0px' // Legger til en offset på 200px fra toppen
});

alleDiver.forEach(div => {
  observer.observe(div);
});


let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
let navbarHeight = navbar.offsetHeight;
let isNavbarVisible = true;

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let scrollDirection;

  if (scrollTop > lastScrollTop) {
    // Scroll down
    scrollDirection = 'down';
  } else {
    // Scroll up
    scrollDirection = 'up';
  }

  if (scrollDirection === 'down' && isNavbarVisible) {
    // Scroll down and navbar is visible
    navbar.style.transform = `translateY(-${navbarHeight}px)`;
    isNavbarVisible = false;
  } else if (scrollDirection === 'up' && !isNavbarVisible) {
    // Scroll up and navbar is hidden
    navbar.style.transform = 'translateY(0)';
    isNavbarVisible = true;
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


const cursor = document.querySelector('.custom-cursor');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let speed = 0.1; // Adjust speed as needed

function updateCursor() {
  const dx = mouseX - cursorX;
  const dy = mouseY - cursorY;
  cursorX += dx * speed;
  cursorY += dy * speed;
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

  requestAnimationFrame(updateCursor);
}

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

updateCursor();




