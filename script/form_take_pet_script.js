const formContainers = document.querySelectorAll('.form-container');
const formTakePet = document.getElementById('form-take-pet');
const formButtonNext = document.getElementById('next');
const formButtonPrev = document.getElementById('previous');
const buttonFirstCard = document.getElementById('start')
const buttonLastCard = document.getElementById('finish')
const buttonsBlock = document.getElementById('form-buttons')
const mainFormBlock = document.getElementById('form-main-block')

let index=0;


function updateForm(index) {
  formContainers.forEach((cont, i) => {
    cont.classList.toggle('active', i === index);

  });}


  if (index>0) {
    buttonsBlock.classList.add('button-active');
    
  } else {
    buttonsBlock.classList.remove('button-active');
  }


  buttonFirstCard.addEventListener('click', () => {
    console.log('FIRST')
  if (index < formContainers.length - 1) {
    
    index++;
   updateForm(index);
  }
 
    buttonsBlock.classList.add('button-active');
    
  
  console.log(index+'INDEX')
});

 formButtonNext.addEventListener('click', () => {

  console.log('FIRST')
    if (index < formContainers.length - 1) {
      index++;
      updateForm(index);
    }
    if (index===formContainers.length - 1) {
    buttonsBlock.classList.remove('button-active');
    
  } 

});

formButtonPrev.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateForm(index);
  }
  if (index===0) {
    buttonsBlock.classList.remove('button-active');
  }
});

buttonLastCard.addEventListener('click', () => {
    console.log(index+'INDEX')
  if (index===formContainers.length - 1) {
    index--;
    updateForm(index);
  }
 if (index>0) {
    buttonsBlock.classList.add('button-active');
    
  } 
    console.log(index+'INDEX')
});


updateForm(index);



//----------------------------------------------------
var cardLargest=null;

let h =0;

formContainers.forEach(el=>{

  console.log('CARDLARGEST')
  if (el.scrollHeight>h){
    h=el.scrollHeight;
    cardLargest=el;
  }

})

console.log(cardLargest.height+' CARDLARGEST')
const resizeObserver3 = new ResizeObserver(() => {


   
        mainFormBlock.style.height=`${cardLargest.height+100}px`;
   console.log(cardLargest.height+' CARDLARGEST')
      
});

resizeObserver3.observe(cardLargest)