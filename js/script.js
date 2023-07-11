// Mobile Menu
const button = document.getElementsByClassName('js-menu-button')[0];

button.onclick = function() {
  this.classList.toggle('is-active');
  document.getElementsByClassName('js-menu')[0].classList.toggle("open");
}

// Header scroll
window.addEventListener('scroll', function() {
  let scroll = window.pageYOffset || document.documentElement.scrollTop;

  const header = document.querySelector('.js-header');

  if (scroll >= 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Initialise AOS
AOS.init();
