const buttons= document.getElementById('main-buttons-block');
const contentBlock= document.getElementById('circle');
const subContentBlock= document.getElementById('text-buttons-block');  
const mediaQuery = window.matchMedia('(max-width: 700px)');






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



