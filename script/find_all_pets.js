/*функции вывода всех питомцев (в контейнер слайдера и на странице просмотра всех сразу) */



function showAllPets(petsContainer, pets) {
    var content = '';
    let declention='';
pets.forEach(pet=> {
   content+=`<a href="animal_shelter_pet_info.html" class="pet">
                <div class="pet-photo" style="background-image: url(${pet.avatarBackPhoto})">
                    <img class="pet-photo" src="${pet.avatarPhoto}">
                </div>
                <input class="pet-id" type="hidden" name="id" value="${pet.id}">
                <div class="pet-caption name"><div class="highlight">${pet.name}</div><div><div class="age-number">${pet.age.toString()}</div> ${getAgeDeclention(pet.age, declention)} </div></div>
            </a>`    
})
petsContainer.innerHTML=content;

}







    
    


if (window.location.href.includes('animal_shelter_all_pets')) { // вывод в разные контейнеры в зависимости от страницы
    const petsForAdoption = document.getElementById('pets-for-adoption');
    showAllPets(petsForAdoption, pets);
    const photos1 = petsForAdoption.querySelectorAll('.pet');
    console.log(photos1+' PHOTOS FOUND')
   
    movePhoto1(photos1,'2', -150);
    movePhoto1(photos1,'7', -120);

    } else {
    const petsContainer = document.getElementById('slider-content');
const photos = petsContainer.querySelectorAll('.pet');
    showAllPets(petsContainer,pets);
     movePhoto1(photos,'2', -150);
    movePhoto1(photos,'7', -120);
}
    
    




function getAgeDeclention(number, declention) { // определение склонения "год" при выводе возраста
    
    if((number===1||number%10===1)&&(number!=11)&&(number%100!=11)){
        var declention='год';

    } else if (number%10>1&&number%10<5) {

        declention='года';
    } else {
        declention='лет';
    }
    console.log(declention+'DECLENTION!')
    return declention;

}







function movePhoto1(photos, id, amount) {
    photos.forEach(photo => {
        
        const idInput = photo.querySelector('input[name="id"]');
        console.log(photo+' PHOtO FOUND')
        console.log(idInput+' INPUT FOUND')
        const photoCont = photo.querySelector('.pet-photo');
        const img = photoCont.querySelector('img');

        if (idInput && idInput.value == id) {
            if (img) {
                img.style.left = `${amount}px`;
            }
        }
    });
}