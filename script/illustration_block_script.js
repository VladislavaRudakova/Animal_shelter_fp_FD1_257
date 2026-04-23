 
const buttonTakePet=document.getElementById('take-pet');
const buttonHelp=document.getElementById('help');
const buttonClinic=document.getElementById('clinic');
const buttonEvents=document.getElementById('events');
const buttonSchool=document.getElementById('school');

const sprite = document.querySelector('illustration-sprite');
const symbols = document.querySelectorAll('symbol') 
 

//-----------------------------------------------------------------------


const wrapper = document.getElementById('wrapper');
const infoBlock1=document.getElementById('illustrated-menu');
const illustrationContainers = Array.from(document.querySelectorAll('.illustration-container'));
const illustratedButtons=document.querySelectorAll('.illustration');

const hiddenTextTakePet = document.getElementById('take-pet-text'); //текст в широкой версии
const hiddenTextShelterHelp = document.getElementById('help-text');
const hiddenTextClinic = document.getElementById('clinic-text');
const hiddenTextEvents = document.getElementById('events-text');
const hiddenTextSchool = document.getElementById('school-text');

const hiddenTitleTakePet = document.getElementById('take-pet-title'); // заголовки в широкой версии
const hiddenTitleHelp = document.getElementById('help-title');
const hiddenTitleClinic = document.getElementById('clinic-title');
const hiddenTitleEvents = document.getElementById('events-title');
const hiddenTitleSchool = document.getElementById('school-title');

const hiddenRef = document.getElementById('hidden-ref'); //ссылки в широкой версии
const hiddenText = document.getElementById('hidden-text');
const hiddenTitle = document.getElementById('hidden-title');
const hiddenTextContainer = document.getElementById('hidden-info-block-container');


const textContentTakePet = `взяв питомца из приюта, вы не только поможете нам дать место тем, 
кто еще находится на улице, но и обретете верного и преданного друга`

const textContentHelp = `вы можете помочь нашим подопечным переводом средств на лечение, корма, игрушки, 
поучаствовать в отлове животных и передержкой до устройства в семью, а также информационно
 - поделиться профилями наших питомцев в социальных сетях`

const textContentClinic = `Наш проект действует на базе ветеринарной клиники с опытными докторами,
куда вы можете записать своего питомца. Большая часть вырученных средств идет на нужды приюта`

const textContentEvents = `У нас часто проходят благотворительные ярмарки, выставки, концерты и другие мероприятия, 
где вы можете поучаствовать. `

const textContentSchool = `Наш проект действует на базе ветеринарной клиники с опытными докторами,
куда вы можете записать своего питомца. Большая часть вырученных средств идет на нужды приюта`



//-----------------------------------------------------------------------small

const smallVersionTextTakePet = document.getElementById('take-pet-small-version'); //контейнер для текста в узкой версии
const smallVersionTextHelp = document.getElementById('help-small-version');
const smallVersionTextClinic = document.getElementById('clinic-small-version');
const smallVersionTextEvents = document.getElementById('events-small-version');
const smallVersionTextSchool = document.getElementById('school-small-version');

const smallVersionTitleTakePet = document.getElementById('school-small-version');
const smallVersionTitleHelp = document.getElementById('school-small-version');
const smallVersionTitleClinic = document.getElementById('school-small-version');
const smallVersionTitleEvents = document.getElementById('school-small-version');
const smallVersionTitleSchool = document.getElementById('school-small-version');

const smallVersionRefTakePet = document.getElementById('school-small-version');





function showInfo(buttonId, targetItem) { //показать текст в зависимости от раздела
  if (targetItem.id === buttonId) {
    switch (buttonId) {
      case 'take-pet':
        hiddenText.textContent=textContentTakePet;
        hiddenTitle.textContent='забрать домой';
        hiddenRef.textContent='забрать домой';
        console.log(hiddenText + 'HIDDEN');       
        break;
        case 'help':
        hiddenText.textContent=hiddenTextShelterHelp.textContent;
        hiddenTitle.textContent='помочь приюту'
        hiddenRef.textContent='помочь';
        break;
        case 'clinic':
        hiddenText.textContent=hiddenTextClinic.textContent;
        hiddenTitle.textContent='ветеринарная клиника'
        hiddenRef.textContent='записаться';
        break;
        case 'events':
        hiddenText.textContent=hiddenTextEvents.textContent;
        hiddenTitle.textContent='события'
        hiddenRef.textContent='подробнее';
        break;
        case 'school':
        hiddenText.textContent=hiddenTextSchool.textContent;
        hiddenTitle.textContent='обучение питомцев'
        hiddenRef.textContent='записаться';
        break;
    }
     hiddenTextContainer.classList.add('visible');
  }  
}


function findText(id, textContainer, title, reference) {
console.log('SWITCH START');
console.log('ID'+textContentTakePet);
  switch (id) {
   
      case 'take-pet':
        textContainer.textContent=textContentTakePet;
        title.textContent='взять питомца';
        reference.textContent='заполнить анкету';
        console.log(textContainer.textContent);       
        break;
        case 'help':
        textContainer.textContent=textContentHelp;
        title.textContent ='помочь проекту'
        reference.textContent='помочь';
        break;
        case 'clinic':
        textContainer.textContent=textContentClinic;
        title.textContent='ветеринарная клиника'
        reference.textContent='записаться';
        break;
        case 'events':
        textContainer.textContent=textContentEvents;
        title.textContent='события'
        reference.textContent='подробнее';
        break;
        case 'school':
        textContainer.textContent=hiddenTextSchool.textContent;
        title.textContent='обучение питомцев'
        reference.textContent='записаться';
        break;
    }

}



//-----------------------------------------------------------------------


let mobileController;
let desktopController;

function handleLayoutChange() {
  const isSmall = window.innerWidth <= 700;

  if (isSmall) {
    
    if (desktopController) { // переход к узкой версии
      desktopController.abort();
      desktopController = null;
      console.log('СБРОС СТИЛЕЙ!');
      updateLayout(null); // Сбрасываем десктопные стили
    }

    if (!mobileController) {
        mobileController = new AbortController();
        console.log('MOBILE!');
      
        illustrationContainers.forEach(el => {
          el.addEventListener('click', () => {

          const textContainer = el.querySelector('.small-version-text');
          const title = el.querySelector('.small-version-title');
          const ref = el.querySelector('.small-version-ref');          

        if (el.classList.contains('checked-small')) {
          el.classList.remove('checked-small');
          textContainer.classList.add('hidden-small-version-text');
          el.querySelector('.image').classList.remove('illustration-cheked');
          el.querySelector('.illustration-caption').classList.remove('hidden-caption');
          title.classList.add('hidden-small-version-text');
          ref.classList.add('hidden-small-version-text');
      
        return; 
    }

   
    illustrationContainers.forEach(container => {
      
      container.classList.remove('checked-small');
      container.querySelector('.small-version-text').classList.add('hidden-small-version-text');
      container.querySelector('.small-version-ref').classList.add('hidden-small-version-text');
      container.querySelector('.small-version-title').classList.add('hidden-small-version-text');
      container.querySelector('.image').classList.remove('illustration-cheked');
      container.querySelector('.illustration-caption').classList.remove('hidden-caption');
        
    });

          el.classList.add('checked-small');
          el.querySelector('.image').classList.add('illustration-cheked');// замена цвета иллюстрации
          el.querySelector('.illustration-caption').classList.add('hidden-caption');
           textContainer.classList.remove('hidden-small-version-text');
           title.classList.remove('hidden-small-version-text');
           ref.classList.remove('hidden-small-version-text');

          findText(el.querySelector('.illustration').id, textContainer, title, ref);
        }, { signal: mobileController.signal });
      });
    }

  } else {

    // переход к десктопной версии

    if (mobileController) { 
      mobileController.abort();
      mobileController = null; 

      illustrationContainers.forEach(el => {  //сброс стилей
        el.classList.remove('checked-small');
        el.querySelector('.small-version-text').classList.add('hidden-small-version-text');
        el.querySelector('.image').classList.remove('illustration-cheked');// замена цвета иллюстрации
        el.querySelector('.small-version-title').classList.add('hidden-small-version-text');
        el.querySelector('.small-version-ref').classList.add('hidden-small-version-text');
        el.querySelector('.illustration-caption').classList.remove('hidden-caption');

      
      });
    }

    if (!desktopController) { // десктопная версия
      desktopController = new AbortController();
      console.log('DESCTOP!!');

     
      illustratedButtons.forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          updateLayout(item);
        }, { signal: desktopController.signal });
      });

     
      if (window.wrapper) { 
        wrapper.addEventListener('click', () => {
          updateLayout(null);
        }, { signal: desktopController.signal });
      }
    }
  }
}


window.addEventListener('resize', handleLayoutChange); // отслеживаем ресайз


handleLayoutChange();





//-------------------------------------------------------------desctop




function updateLayout(targetItem = null) { //функция для плавного перемещения иллюстрированных кнопок при нажатии

 //if (window.innerWidth>700) {
 
  const firstRects = illustrationContainers.map(el => el.getBoundingClientRect());//замер первоначальных координат
  //console.log(firstRects.values) 
  
  
  illustrationContainers.forEach(el => el.style.transition = 'none');

  if (targetItem) {
   
    infoBlock1.classList.add('active');
    var buttonId = null;

    illustratedButtons.forEach(el => {
     const container = el.closest('.illustration-container');
     //const caption = el.nextElementSibling;
     const caption = container.querySelector('.illustration-caption');
     console.log(caption+ caption.textContent+'CAPTION FOUND')
     const picture = el.querySelector('.image');

      if (el === targetItem) { // выбранный элемент

      container.style.order = "-1"; //перемещение  вперед
      caption.classList.add('hidden-caption'); //скрытия подписи
      picture.classList.add('illustration-cheked'); //замена цвета и фона
      container.classList.add('animated'); //плавная анимация
      el.classList.add('cheked2'); //чтобы не реагировал на события
      buttonId = el.id;
              

      } else { //все элементы, кроме выбранного
        container.classList.add('hidden1');      
        container.classList.add('animated1');        
      }
      container.classList.remove('animated1');

      showInfo(buttonId,targetItem);
      console.log('SHOWInfo')
    
    });
  } else  { //сброс, возвращаем все обратно (если null)
    console.log('ВОЗВРАЩЕНИЕ ПЕРВОНАЧАЛЬНЫХ НАСТРОЕК!!!!!!!!')
    infoBlock1.classList.remove('active'); //удаление класса, выравнивающего элементы к началу

    illustrationContainers.forEach(el => {
      const caption = el.querySelector('.illustration-caption');//названия
      const illustration = el.querySelector('.illustration');//контейнер с иллюстрацией
      const picture = illustration.querySelector('.image');//иллюстрация
      el.style.order = "0"; //возвращение на первоначальное место
      
      el.classList.remove('hidden1');
      caption.classList.remove('hidden-caption'); //включить видимость названий

      illustration.classList.remove('cheked2');//??
     picture.classList.remove('illustration-cheked');//возвраящаем иллюстрации первоначальный цвет
    
      el.classList.remove('animated'); //удаление класса с анимацией 
      
      el.classList.add('animated1'); 
     hiddenTextContainer.classList.remove('visible');//прячем текст     
      
    });
  }


  const lastRects = illustrationContainers.map(el => el.getBoundingClientRect());


  illustrationContainers.forEach((el, i) => {
    const dx = firstRects[i].left - lastRects[i].left;
    const dy = firstRects[i].top - lastRects[i].top;   

    el.style.transform = `translate(${dx}px, ${-dy}px)`;


    requestAnimationFrame(() => {
     
       requestAnimationFrame(() => {
            el.style.transition = ''; 
            el.style.transform = '';
        });
    });
  });
  //}//size!!!!
}



