const sliderButtonLeft = document.getElementById('slider-button-left');
const sliderButtonRight = document.getElementById('slider-button-right');
const sliderContainer = document.getElementById('main-page-slider');
const sliderContent = document.getElementById('slider-content');
const photo = sliderContent.querySelector('.pet');
let offset = 0;
let photoWhidth = 372;
let photoQuantity = 4;


const mediaQuery0 = window.matchMedia('(min-width: 1701px)');
const mediaQuery1 = window.matchMedia('(max-width: 1700px)');
const mediaQuery2 = window.matchMedia('(max-width: 1520px)');
const mediaQuery3 = window.matchMedia('(max-width: 1450px)');
const mediaQuery4 = window.matchMedia('(max-width: 1200px)');
const mediaQuery5 = window.matchMedia('(max-width: 1150px)');
const mediaQuery6 = window.matchMedia('(max-width: 1080px)');
const mediaQuery7 = window.matchMedia('(max-width: 870px)');
const mediaQuery8 = window.matchMedia('(max-width: 550px)');
const mediaQuery9 = window.matchMedia('(max-width: 510px)');



const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        // получение ширины элемента

              
        let currentWidth = entry.contentRect.width; 
        
         if (window.innerWidth <= 450) {
            photoWhidth = currentWidth + 52;
        } else {
            photoWhidth = currentWidth + 92;
        }
        
        
        findPhotoQuantity(); 
    }
});

// наблюдение за фото
if (photo) {
    resizeObserver.observe(photo);
}



function findPhotoQuantity(){
       
    if (mediaQuery9.matches) {
        
        photoQuantity=1;
    }  else if (mediaQuery8.matches) {
       
        photoQuantity=1;
    } else if (mediaQuery7.matches) {
       
        photoQuantity=1;
    } else if (mediaQuery6.matches) {
       
        photoQuantity=2;
    }
    else if (mediaQuery5.matches) {
       
        photoQuantity=2;

    } else if (mediaQuery3.matches) {
      
        photoQuantity=3;
    }  else if (mediaQuery2.matches) {
      
       photoQuantity=4;
    }  else if (mediaQuery1.matches) {
      
       photoQuantity=4;
    } else if (mediaQuery0.matches) {
      
       photoQuantity=4;
    } 
    offset=0;
    sliderContent.style.transform=`translateX(${-offset}px)`;
}

//findSliderParametres();

//window.addEventListener('resize', findSliderParametres);

sliderButtonRight.addEventListener('click', ()=>{
 
    console.log(photoWhidth+'PHOTOWIDTH')
    console.log(photoQuantity+'QUANTITY!!!!')
    console.log(offset+'OFFSET')
    if ((offset >= (photoWhidth*(document.querySelectorAll('.pet').length-photoQuantity))) ){
        console.log(document.querySelectorAll('.pet').length+'LENGTH')
        offset=0;
        console.log(offset+'OFFSET')
    } else {
        offset +=photoWhidth;
    }
sliderContent.style.transform=`translateX(${-offset}px)`;
});