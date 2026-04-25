const dropdown = document.getElementById('pet-search');
const mainArrowButton = document.getElementById('main-arrow-button');
const closeButton = document.getElementById('close-button')

const colorChoiceButton = document.getElementById('color-choice-button');
const characterChoiceButton = document.getElementById('character-choice-button');
//const subDropdownColor = document.getElementById('pet-color');
//const subDropdownCharacter = document.getElementById('pet-character');

const subDropdownColor = document.getElementById('color-select-cont');
const subDropdownCharacter = document.getElementById('character-select-cont');

mainArrowButton.onclick=function() {
    dropdown.classList.toggle('is-open');
}

colorChoiceButton.onclick=function() {
    subDropdownColor.classList.toggle('cont-is-open');
    
}

characterChoiceButton.onclick=function() {
    subDropdownCharacter.classList.toggle('cont-is-open');
    
}

window.addEventListener('click', (event) => {  
  if (subDropdownColor.classList.contains('cont-is-open') && !subDropdownColor.contains(event.target) && !colorChoiceButton.contains(event.target)) {
    subDropdownColor.classList.remove('cont-is-open');
  }

  if (subDropdownCharacter.classList.contains('cont-is-open') && !subDropdownCharacter.contains(event.target) && !characterChoiceButton.contains(event.target)) {
    subDropdownCharacter.classList.remove('cont-is-open');
  }
});