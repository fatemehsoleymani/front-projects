const navbar = document.querySelector('.nav-links');
const textBox = document.querySelector('.text-box');
const overlay = document.querySelector('.overlay');

function opneSidebar() {
  navbar.classList.add('show');
  textBox.classList.add('hide-text-box');
  overlay.style.display = 'block'; 
}

function closeSidebar() {
  navbar.classList.remove('show');
  textBox.classList.remove('hide-text-box');
  overlay.style.display = 'none'; 
}