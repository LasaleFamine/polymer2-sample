'use strict';


// Extend Polymer.Element base class
class GroupItems extends Polymer.Element {
  static get is() { return 'group-items'; }
  static get config() {
   return {
     properties: {
       title: {
         type: String,
         value: "<group-items>"
       },
       actions: {
         type: Boolean,
         value: false
       },
       items: {
         type: Array,
         value: []
       }
     }
    }
  }
  constructor() {
    super();
  }


  connectedCallback() {
    console.log("  connectedCallback() <group-items> this.items:", this.items);
    console.log("  connectedCallback() <group-items> this.actions:", this.actions);
    console.log("  connectedCallback() <group-items> this.title:", this.title);
    super.connectedCallback();
  }

  // Lifecycle
  disconnectedCallback() {  }

  attributeChangedCallback() { }
  // -----------

  // Methods
  removeItems() {
    this.set('items', new Array())
  }
  // -----------

}

// Register custom element definition using standard platform API
customElements.define(GroupItems.is, GroupItems);
