const buttons= document.getElementById('main-buttons-block');
const contentBlock= document.getElementById('circle');
const subContentBlock= document.getElementById('text-buttons-block');  
const mediaQuery = window.matchMedia('(max-width: 700px)');





const buttonPrevPage= document.getElementById('previous-page');
const buttonPrevPageNewCont= document.querySelector('.circle');
const customHeader= document.getElementById('start-page-header');
const mediaQueryPrevButton = window.matchMedia('(max-width: 1000px)');







function replaceButtons(e) {  // функция для переноса блока с кпопками в узкой версии 

    if (e.matches) {
       contentBlock.appendChild(buttons);
    } else {
        if (contentBlock.contains(buttons)) {
            subContentBlock.appendChild(buttons);

        }
    }

}

mediaQuery.addEventListener('change', replaceButtons);
replaceButtons(mediaQuery);



function replaceButtons1(mediaQuery, element, block1, block2) {  // функция для переноса блока с кпопками в узкой версии 

    if (mediaQuery.matches) {
       block1.appendChild(element);
    } else {
        if (block1.contains(element)) {
            block2.appendChild(element);

        }
    }

}


mediaQueryPrevButton.addEventListener('change',()=>{ 
    replaceButtons1(mediaQueryPrevButton, buttonPrevPage, buttonPrevPageNewCont, customHeader);
});

replaceButtons1(mediaQueryPrevButton, buttonPrevPage, buttonPrevPageNewCont, customHeader);