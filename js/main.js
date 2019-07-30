const hamburgerButton = document.querySelector('.hamburger-btn');
const mobileNav = document.querySelector('.mobile');

hamburgerButton.addEventListener('click', openMobile);
mobileNav.addEventListener('click', closeMobile);

function openMobile() {
  mobileNav.classList.add('open');
}
function closeMobile() {
  mobileNav.classList.remove('open');
}
