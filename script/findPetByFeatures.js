
/*функции поиска питомца по особенностям (не закончено) */


//const petKind = document.getElementById('pet-kind');
//const petAge = document.getElementById('pet-age');
//const petColor = document.getElementById('pet-color');
//const petCharacter = document.getElementById('pet-character');
const searchForm = document.getElementById('pet-search-form')
const checkboxListColor = petColor.querySelectorAll('input');
const checkboxListCharacter = petCharacter.querySelectorAll('input');
const checkedValuesColor =[];
const checkedValuesCharacter =[];

//-----------------------------------------------------получение массива выбранных значений
function findChecked (checkboxList, checkedValues) {
checkboxList.forEach(element => {
    if(element.checked) {
        checkedValues.push(element.value);
        console.log(element.value + ' CHECKED');
    }    
});
return checkedValues;
}
//----------------------------------------------------------------------
function printChekedValues(checkedValues) {//вывод в консоль массива выбранных значений
    console.log('PRINTING'+ checkedValues);
    checkedValues.forEach(el=>{
console.log(el + ' CHECKED!');
    })        
}


//----------------------------------------------------------------------
//var result={};

searchForm.addEventListener('submit', (event) => { 
    event.preventDefault();

  
    const data = new FormData(searchForm);
    const result = Object.fromEntries(data.entries()); //сбор данных из формы в объект

     
    result.color = findChecked (checkboxListColor, checkedValuesColor); //добавление списков, не являющихся стандартными полями, вручную
    result.character = findChecked (checkboxListCharacter, checkedValuesCharacter);

    console.log(result);
    printChekedValues(result.character);
    printChekedValues(result.color);
}); 

//-------------------------------------------------------находим условие в зависимости от строчного указания возраста


function findAge(age, pet, petsFound) {
    switch(age) {
        case 'меньше 1':
            if(pet.age<1){petsFound.push(pet)};
            break;
        case '1-4':
            if(pet.age>=1&&pet.age<=4){petsFound.push(pet)};
            break;
        case '5-8':
            if(pet.age>=5&&pet.age<=8){petsFound.push(pet)};
             break;
        case 'больше 8':
            if(pet.age>8){petsFound.push(pet)};
             break;
    }
}

//----------------------------------------------------------------------

var petsFound = [];

function findPetByFeatures (formData, pets, petsFound) {
pets.forEach(pet=>{
if(formData.kind===pet.kind&&formData.sex===pet.sex) {
    
    findAge(formData.age, pet, petsFound);
}

})    

}


const findPetButton = document.getElementById('find-pet');
const petsForAdoption = document.getElementById('pets-for-adoption');



    

