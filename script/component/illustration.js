class Illustration extends HTMLElement {
  static get observedAttributes() { return ['name']; }

  connectedCallback() { this.render(); }

  attributeChangedCallback() { this.render(); }

  render() {
    const name = this.getAttribute('name') || 'take-pet';
   

    this.innerHTML = `
    
    <style>
      :host {
        display: inline-block;
        width: var(--icon-size, 50px);
        height: var(--icon-size, 50px);
      }
      svg {
        display: block;
        width: 100%; 
        height: 100%;
        fill: currentColor!important;
                              
      }
      
    </style>
      <svg>
        <use href="#${name}"></use>
      </svg>
    `;
  }
}
customElements.define('custom-illustration', Illustration);