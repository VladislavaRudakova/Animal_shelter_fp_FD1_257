const petInfo = document.getElementById('pet-info-text');
const petNameCont = document.getElementById('pet-name');
const petSex = document.getElementById('pet-sex');
const petAge = document.getElementById('pet-age');
const petCharacter = document.getElementById('pet-character');
const characterValue = petCharacter.querySelector('.value');
const photoContainer = document.getElementById('main-photo-cont');
const pageTitle = document.getElementById('page-title-pet-info');
console.log('PETS LOADED'+pets)


var petDataString = localStorage.getItem('petData');
console.log(petDataString + 'PET DATA')

var petData='';
if(petDataString) {
 petData = JSON.parse(petDataString);
    
console.log(petDataString + 'PET DATA')
}

console.log(petData + 'PET DATA OBJECT')

console.log(petData.petId + petData.petName+'PET DATA PARAMETERS')

var petId=petData.petId;
var petName1 = petData.petName;
//localStorage.clear();


function showPetInfo(id, name, pets) {
    console.log ('SHOW PET INFO START!')
    console.log (id + name + 'ARGUMENTS!')
    let declention='';
    pets.forEach (pet=> {
        if(pet.id===id&&pet.name===name) {
        petNameCont.textContent=pet.name;
        pageTitle.textContent= `Cat&Dog ${pet.name}`

        petSex.innerHTML=`<div class="value feature-title">пол</div><div class="value" style="background-color:${colors.get(pet.sex)}">${pet.sex}</div>`
        console.log (pet.id + pet.name + 'PET FOUND!')
        petAge.innerHTML=`<div class="value feature-title">возраст</div><div class="value" style="background-color:${colors.get('age')}">${pet.age.toString()}&nbsp;${getAgeDeclention(pet.age, declention)}</div>`;
        var petCharacterValues='';
        pet.character.forEach(value=>{
        petCharacterValues+=`<div class="value" style="background-color:${colors.get(value)}">${value}</div>`;    
        })
        petCharacter.innerHTML='<div class="value feature-title">характер</div><div id=character-cont>'+ petCharacterValues+'</div>';
        petInfo.innerHTML=pet.textInfo;

        showPetPhoto(pet.accPhotos, pet);
        }
    })
}

function showPetPhoto(photos, pet) {
    var photoContent='';
    photos.forEach(photo=>{
    photoContent+=`<img src="${photo}" width="1280" height="853" alt="${pet.name}" title="${pet.name}">`;
})
    photoContainer.innerHTML=photoContent;
}


showPetInfo(petId, petName1, pets);



