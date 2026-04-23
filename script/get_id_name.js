
/*функции передачи данных (id и name) при переходе на другую страницу 
для получения и вывода информации о питомце */

function getPetInfo(petPhotoButtons) { 
        
    petPhotoButtons.forEach(pet =>{
        
        pet.addEventListener('click', (el)=> { // добавляем событие на контейнер с фото в слайдере
           const id= pet.querySelector('input').value;
           const name=pet.querySelector('.pet-caption').firstElementChild.textContent; 
           const petData={petId:id, petName:name};
           console.log(id+'ID'+name+'NAME')
           localStorage.setItem('petData', JSON.stringify(petData));
            window.location.href = 'animal_shelter_pet_info.html';          
        })
    })
    
}


if (window.location.href.includes('animal_shelter_all_pets')) { // получаем фото из разных контейнеров в зависимости от страницы

    console.log('window.location.href'+'LOCATION');
    const petsForAdoption = document.getElementById('pets-for-adoption');
    const petPhotoButtons = petsForAdoption.querySelectorAll('.pet');
    getPetInfo(petPhotoButtons);

}  else {

const petPhotoButtons = sliderContent.querySelectorAll('.pet');

   getPetInfo(petPhotoButtons);

}


