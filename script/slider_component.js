class CustomSlider extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
      `<div class="pets-slider-container" id="main-page-slider">
        <button class="slider-buttons" id="slider-button-left"><div><custom-icon name="arrow-left"></custom-icon></div></button>
        <div id="pets-slider">
            <div class="pets-for-adoption" id="slider-content"> 
              
            </div>
        </div>
        <button class="slider-buttons" id="slider-button-right"><div><custom-icon name="arrow-right"></custom-icon></div></button>
    </div>`
    ;
  }
}

customElements.define('custom-slider', CustomSlider);