const mediaQueryEqualizeCont = window.matchMedia('(max-width: 1000px)');
const articlesBlock =document.querySelector('.articles');
const petInfoBlock = document.querySelector('.pet-info');


const resizeObserver1 = new ResizeObserver(() => {

    if(window.innerWidth>=1000) {
    console.log('EQUALIZE  '+infoContainerParentSecondary.scrollHeight)
        photoContainerPetInfo.style.height=`${infoContainerParentSecondary.scrollHeight}px`;
    } else {
        photoContainerPetInfo.style.height=500+'px';
    }
      
});

const resizeObserver2 = new ResizeObserver(() => {
    if(window.innerWidth>1600) {
        console.log('EQUALIZE  '+infoContainerParentSecondary.scrollHeight)
        articlesBlock.style.height=`${petInfoBlock.scrollHeight}px`;
    } 
});

resizeObserver1.observe(infoContainerParentSecondary);
resizeObserver2.observe(petInfoBlock)




