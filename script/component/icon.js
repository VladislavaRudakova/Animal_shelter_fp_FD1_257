class Icon extends HTMLElement {
  static get observedAttributes() { return ['name']; }

  connectedCallback() { this.render(); }

  attributeChangedCallback() { this.render(); }

  render() {
    const name = this.getAttribute('name') || 'arrow-left';
   

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
      }
    </style>
      <svg>
        <use href="#${name}"></use>
      </svg>
    `;
  }
}
customElements.define('custom-icon', Icon);