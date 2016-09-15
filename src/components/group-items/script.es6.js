'use strict';


// Extend Polymer.Element base class
class GroupItems extends Polymer.Element {
  static get is() { return 'group-items'; }
  static get config() {
   return {
     properties: {
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
  }

  disconnectedCallback() {
  }

  attributeChangedCallback() {
  }

}

// Register custom element definition using standard platform API
customElements.define(GroupItems.is, GroupItems);
