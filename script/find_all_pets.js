/*функции вывода всех питомцев (в контейнер слайдера и на странице просмотра всех сразу) */



function showAllPets(petsContainer) {
    var content = '';
    let declention='';
pets.forEach(pet=> {
   content+=`<a href="animal_shelter_pet_info.html" class="pet">
                <div class="pet-photo" style="background-image: url(${pet.avatarBackPhoto})">
                    <img class="pet-photo" src="${pet.avatarPhoto}">
                </div>
                <input type="hidden" name="id" value="${pet.id}">
                <div class="pet-caption"><div>${pet.name}</div><div><div class="age-number">${pet.age.toString()}</div> ${getAgeDeclention(pet.age, declention)} </div></div>
            </a>`    
})
petsContainer.innerHTML=content;

}




if (window.location.href.includes('animal_shelter_all_pets')) { // вывод в разные контейнеры в зависимости от страницы
    const petsForAdoption = document.getElementById('pets-for-adoption');

    showAllPets(petsForAdoption);
    } else {
    const petsContainer = document.getElementById('slider-content');

   showAllPets(petsContainer);

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




