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
      this._fetchElements(this.sourceLink).then((res) => {
        console.log(" <random-content> connectedCallback fetchElements() res:", res);
        let items = this._randomizeArray(res);
        this.set('items', items);
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
  shuffle() {
    let newItems = this._randomizeArray(this.items);
    this.set('items', newItems);
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

  // Privates
  _randomizeArray(arrayOfObjs) {
    let array = JSON.parse(JSON.stringify(arrayOfObjs));
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  _fetchElements(link) {
    // fetch API new ES2015
    return fetch(link).then((res) => {
      console.log(" <random-content> fetch() res:", res)
      return res.json()
    }).catch((err) => {
      console.warn(" <random-content> error in fetch(): ", err)
    })
  }
}

// Register custom element definition using standard platform API
customElements.define(RandomContent.is, RandomContent);
