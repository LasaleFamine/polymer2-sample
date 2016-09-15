
// Extend Polymer.Element base class
class AppPoly2 extends Polymer.Element {
  static get is() { return 'app-poly2'; }
  static get config() {
   return {
     properties: {
       name: {
         type: String,
         value: "This is a Polymer 2.0 application."
       }
     }
    }
  }
  constructor() {
    super();
    console.info("CONSTRUCTOR here [old 'connected()']------")
  }
  connectedCallback() {
    console.info("connectedCallback() [old 'attached()'] here --------")
    this.set('name', this.name.concat(' There are some console logs to read.'))
    super.connectedCallback();
  }

  disconnectedCallback() {
    console.info("disconnectedCallback() [old 'detached()'] here --------")
  }

  attributeChangedCallback() {
    console.info("attributeChangedCallback() [old 'attributeChanged()'] here --------")
  }


  // Methds
  removeElement() {
    this.remove()
  }
}

// Register custom element definition using standard platform API
customElements.define(AppPoly2.is, AppPoly2);
