const leftMenu = document.getElementById('left-menu');
const menuButton = document.getElementById('menu-button');

const icon = document.getElementById('menu-img')

menuButton.addEventListener('click',(event)=> {
    event.stopPropagation();
    toggleMenu();
    
});



window.addEventListener('click', (event) => {  
  if (!leftMenu.classList.contains('hidden') && !leftMenu.contains(event.target) && !menuButton.contains(event.target)) {
    closeMenu();
  }
});

function toggleMenu() {
    menuButton.classList.toggle('is-active');
    leftMenu.classList.toggle('is-open');
}

function closeMenu() {
    leftMenu.classList.remove('is-open');
    menuButton.classList.remove('is-active');
}