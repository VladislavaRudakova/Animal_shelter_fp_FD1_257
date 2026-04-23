const shareButton = document.querySelector('.share-button');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('modal-close');


shareButton.addEventListener('click',()=>{
   
    modal.classList.add('modal-open');
});

closeButton.addEventListener('click',()=>{
    modal.classList.remove('modal-open');
});