'use strict';

// Main library
// import {
//   Polymer
// } from "./polymer";


// Extend Polymer.Element base class
class AppPoly2 extends Polymer.Element {
  static get is() { return 'app-poly2'; }
  static get config() {
   return {
     properties: {
       head: {
         type: String,
         value: "This is a Polymer 2.0 application."
       },
       groupedItems: {
         type: Array,
         value: []
       },
       groupTitle: {
         type: String,
         value: ''
       },
       groupActions: {
         type: Boolean,
         value: false
       },
       random: {
         type: Object,
         value: {
           randomTitle: '',
           randomSource: '',
           ready: false
         }
       }
     }
    }
  }
  constructor() {
    super();
    console.info("CONSTRUCTOR here [old 'connected()']------");
  }
  connectedCallback() {
    console.info("connectedCallback() [old 'attached()'] here --------");

    this.set('head', this.head.concat(' There are some console logs to read.'));
    this.set('groupedItems', ['one', 'two', 'three']);
    this.set('groupTitle', "This items are awesome!");
    this.set('groupActions', true);

    this.set('random.randomTitle', "Random content here")
    this.set('random.randomSource', "http://localhost:8080/fakedata/fakeposts.json");
    super.connectedCallback();
  }

  disconnectedCallback() {
    console.info("disconnectedCallback() [old 'detached()'] here --------");
  }

  attributeChangedCallback() {
    console.info("attributeChangedCallback() [old 'attributeChanged()'] here --------");
  }


  // Methds
  removeElement() {
    this.remove()
  }

  // Listeners
  _onRandomContentReady(evt) {
    //console.log(evt.detail)
    if(evt.detail.bubble) {
      this.set('random.ready', true);
    }
  }
}

// Register custom element definition using standard platform API
customElements.define(AppPoly2.is, AppPoly2);
