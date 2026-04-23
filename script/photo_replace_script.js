const photoContainerPetInfo = document.getElementById('main-photo-cont');
const infoContainerParentSecondary = document.querySelector('.info');
const textInfo = document.getElementById('pet-info-text');
const mainInfoParentPrimary = document.querySelector('.main-info-block');

const mediaQueryPhotoReplace = window.matchMedia('(max-width: 1000px)');

console.log(photoContainerPetInfo+' PHOTOCONTAINER')
console.log(infoContainerParentSecondary+' CONTAINER SMALL VERSION')
console.log(textInfo+' INSERT BEFORE THIS')
console.log(mainInfoParentPrimary+' PRIMARY')

function replaceElement(mediaQuery, childToInsert, parent1, child1, parent2, child2) {

    if (mediaQuery.matches) {
      
       parent1.insertBefore(childToInsert, child1);
    } else {
        if (parent1.contains(childToInsert)) {
            parent2.insertBefore(childToInsert, child2);
        }
    }
}


function replaceElement(mediaQuery) {

    if (mediaQuery.matches) {
      
       infoContainerParentSecondary.insertBefore(photoContainerPetInfo, textInfo);
    } else {
        if (infoContainerParentSecondary.contains(photoContainerPetInfo)) {
            mainInfoParentPrimary.insertBefore(photoContainerPetInfo, infoContainerParentSecondary);
        }
    }
}

mediaQueryPhotoReplace.addEventListener('change', replaceElement);
replaceElement(mediaQueryPhotoReplace);
