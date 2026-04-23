class LeftMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
      `<div class="left-buttons-block">
    
    <div id="menu">    
        <button id="menu-button">
          <div id="menu-img"><custom-icon name="menu"></custom-icon></div>
          <div id="close-img"><custom-icon name="close"></custom-icon></div>
        </button>
        <div id=menu-list>
        
          <ul id="left-menu">          
              <li><a>о проекте</a></li>
              <li><a href="animal_shelter_all_pets.html">наши питомцы</a></li>
              <li><a>помощь проекту</a></li>
              <li><a>школа</a></li>
          </ul> 
        </div> 
      </div>
    </div>`
    ;
  }
}

customElements.define('left-menu', LeftMenu);