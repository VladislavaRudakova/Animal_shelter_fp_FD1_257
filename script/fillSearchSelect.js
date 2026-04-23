/* функции для заполнения select существующими значениями из массива с данными (скрипт pets) 
на странице с поиском питомцев по особенностям*/

const petKind = document.getElementById('pet-kind');
const petAge = document.getElementById('pet-age');
const petColor = document.getElementById('pet-color');
const petCharacter = document.getElementById('pet-character');

const characters=new Set();
const ages=new Set();
const agesSearchRepresent=new Set();
const colors=new Set();

function getAllAges(pets){
pets.forEach(pet=> {


    ages.add(pet.age);
   console.log(pet.age + 'PET AGE');
     
   
})
}




function getAgesSearchRepresent(ages) { // определения строчного представляния возраста для select

ages.forEach(age=> { 
     console.log(age + 'AGE');     
       if(age<1){agesSearchRepresent.add('меньше 1 года')};
       if(age>=1&&age<=4){agesSearchRepresent.add('1-4 лет')};
       if(age>=5&&age<=8){agesSearchRepresent.add('5-8 лет')};
       if(age>8){agesSearchRepresent.add('больше 8 лет')};
       
    
})    
}

function getAllColors(pets){
pets.forEach(pet=> {

   //  console.log(pet.color + 'PET COLOR');
     pet.color.forEach(el=> {
        colors.add(el);
     })
   // console.log(colors + 'COLORS');
})
}


function getAllCharacters(pets){
pets.forEach(pet=> {

    // console.log(pet.character + 'PET CHARACTER');
     pet.character.forEach(el=> {
        characters.add(el);
     })
    //console.log(characters + 'CHARACTERS');
})
   
}

//--------------------------------------print

function printAllCharacters() {
    characters.forEach(el=>{
        console.log(el + 'CHARACTER');
    })
}

function printAllAges() {
    agesSearchRepresent.forEach(el=>{
        console.log(el + ' AGES REPRESENT');
    })
}

function printAllColors() {
    colors.forEach(el=>{
        console.log(el + 'COLORS');
    })
}

//--------------------------------------show for search

function showAgeForSearch(agesSearchRepresent, container) { // определение строчного представления возраста для заполнение select
var agesList='';
agesSearchRepresent.forEach(age=>{
    agesList+=`<option value>${age}</option>`
})
container.innerHTML=agesList;
}

function showColorForSearch(colors, container) { // вывод списка существующих цветов питомцев в select
var colorList='';
colors.forEach(color=>{
    colorList+=`<li><input type="checkbox" value="${color}"><div>${color}</div></li>`
})
container.innerHTML=colorList;
}

function showCharacterForSearch(character, container) {
var characterList='';
characters.forEach(character=>{
    characterList+=`<li><input type="checkbox" value="${character}"><div>${character}</div></li>`
})
container.innerHTML=characterList;
}



getAllCharacters(pets);
getAllColors(pets)
getAllAges(pets);
printAllCharacters();
getAgesSearchRepresent(ages);
//printAllAges();
//printAllColors();

showAgeForSearch(agesSearchRepresent, petAge);
showColorForSearch(colors, petColor);
showCharacterForSearch(characters, petCharacter)