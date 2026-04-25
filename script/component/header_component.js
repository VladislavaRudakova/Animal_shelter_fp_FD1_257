class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
      `<header>
        <a href="index.html">
          <div class=logo-sign-block>
            <div class="sign"><custom-illustration name="logo-sign"></custom-illustration></div>      
            <div class="logo"><img src="images/CAT&DOG.svg" alt=""></div>
          </div>
        </a>              
        <div class="header-fields">
            <form id="subscribe">
              <span class="form-caption">подписаться на новости</span>
              <input class="search" type="text" placeholder="введите e-mail">
              <input class="header-buttons" type="submit" value="подписаться">
            </form>
            <form id="main-search">
              <input class="search" type="text" placeholder="поиск">
              <button class="header-buttons" id="main-search-button" type="submit"><div><custom-icon name="search"></custom-icon><div></button>
            </form>
        </div>
        <left-menu></left-menu> 
    </header>
  <a href="javascript:history.back()" id="previous-page"><button class="slider-buttons previous-page"><div><custom-icon name="arrow-left"></custom-icon></div></button></a>
    <header class="sub-header">
      <button class="sub-header-buttons"><a href="#title-take-friend">как забрать питомца?</a></button>
      <button class="sub-header-buttons"><a>ветеринарная клиника</a></button>
      <button class="sub-header-buttons"><a>размещение питомца</a></button>
    </header>`
    ;
  }
}

customElements.define('custom-header', CustomHeader);