'use strict';


// Extend Polymer.Element base class
class RandomContent extends Polymer.Element {
  static get is() { return 'random-content'; }
  static get config() {
   return {
     properties: {
       title: {
         type: String,
         value: "<random-content>"
       },
       sourceLink: {
         type: String,
         value: ""
       },
       items: {
         type: Array,
         value: [],
         observer: "_itemsChanged"
       }
     }
    }
  }
  constructor() {
    super();
  }


  connectedCallback() {
    if(this.sourceLink) {
      this.fetchElements(this.sourceLink).then((res) => {
        console.log(" <random-content> connectedCallback fetchElements() res:", res);
        this.set('items', res);
      })
    }
    super.connectedCallback();

  }

  // Lifecycle
  attributeChangedCallback() {
    console.log(" <random-content> attributeChangedCallback() this.items", this.items)
  }
  // -----------

  // Methods
  fetchElements(link) {
    // fetch API new ES2015
    return fetch(link).then((res) => {
      console.log(" <random-content> fetch() res:", res)
      return res.json()
    }).catch((err) => {
      console.warn(" <random-content> error in fetch(): ", err)
    })
  }

  // -----------

  _dispatchReady(items) {
    const detail = items.length > 0 ? { 'bubble': true } : { 'bubble': false };
    const evt = new CustomEvent('random-content-ready', { 'detail':  detail });
    // Testing classic dispatchEvent
    this.dispatchEvent(evt);
  }

  _itemsChanged(items) {
    this._dispatchReady(items)
  }
}

// Register custom element definition using standard platform API
customElements.define(RandomContent.is, RandomContent);
