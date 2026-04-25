class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
      `
      
      <footer> 
        <div id="location-block">
            <div id="address">
                <div class="footer-title" >мы находимся по адресу:</div>
                <div>
                    <div>ул. Песочная, 34</div>
                    <div>г. Витебск, Республика Беларусь</div>
                </div> 
                <div id="transport-block">
                    <div class="footer-title">как добраться</div>
                    <div id="transport">
                        <div>от остановки "Железнодорожный вокзал"</div>
                        <div>троллейбус 4 7 11</div>
                        <div>автобус 3 22 25 10 </div>         
                    </div>       
                </div>
                <div class="footer-title-docs">
                    <a><div>документы</div><div class="arrow-footer"><custom-icon name="arrow-right"></custom-icon></div></a>    
                </div>
            </div> 

            <div id="location">
                <iframe id="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1915.2333409539053!2d30.17281157711517!3d55.190106839416714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c573ea55ebd59f%3A0xc3d7acc7f27f2999!2zUGVzb2NobmF5YSAxLCDQktC40YLQtdCx0YHQuiwg0JLQuNGC0LXQsdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1sru!2sby!4v1774977851400!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div id="social-documents-block">
            <div id="social">
                <div class="footer-title">мы в социальных сетях</div>
                <div id="social-icons">
                    <div class="social-icons" id="inst"><custom-icon name="inst"></custom-icon></div>
                    <div class="social-icons"><custom-icon name="telegram"></custom-icon></div>
                    <div class="social-icons" id="vk"><custom-icon name="vkontakte"></custom-icon></div>
                    <div class="social-icons" id="facebook"><custom-icon name="facebook"></custom-icon></div>
                </div>
                <form class="footer-mail-form">
                    <label class="footer-title">подпишитесь на новости</label>
                    <div class="mail-message">
                        <input id="subscribe-field" type="text" id="mail-field-footer" placeholder="введите e-mail">
                        <input class="header-buttons" id="footer-mail-button" type="submit" value="подписаться">
                    </div> 
                </form>     
                <form class="footer-mail-form" id="message-form">
                    <label class="footer-title">напишите нам на почту</label>
                    <div class="mail-message" id="text-message">
                        <textarea id="mail-text" type="text" id="mail-field-footer" placeholder="введите сообщение"></textarea>
                        <input class="header-buttons" id="footer-mail-button" type="submit" value="отправить">
                    </div> 
                </form>         
            </div>
        </div>
    </footer>`
    ;
  }
}

customElements.define('custom-footer', CustomFooter);