/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _script = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	// Main library
	// import {
	//   Polymer
	// } from "./polymer";


	// Extend Polymer.Element base class

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AppPoly2 = function (_Polymer$Element) {
	  _inherits(AppPoly2, _Polymer$Element);

	  _createClass(AppPoly2, null, [{
	    key: 'is',
	    get: function get() {
	      return 'app-poly2';
	    }
	  }, {
	    key: 'config',
	    get: function get() {
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
	          }
	        }
	      };
	    }
	  }]);

	  function AppPoly2() {
	    _classCallCheck(this, AppPoly2);

	    var _this = _possibleConstructorReturn(this, (AppPoly2.__proto__ || Object.getPrototypeOf(AppPoly2)).call(this));

	    console.info("CONSTRUCTOR here [old 'connected()']------");
	    return _this;
	  }

	  _createClass(AppPoly2, [{
	    key: 'connectedCallback',
	    value: function connectedCallback() {
	      console.info("connectedCallback() [old 'attached()'] here --------");

	      this.set('head', this.head.concat(' There are some console logs to read.'));
	      this.set('groupedItems', ['one', 'two', 'three']);
	      this.set('groupTitle', "This items are awesome!");
	      this.set('groupActions', true);
	      _get(AppPoly2.prototype.__proto__ || Object.getPrototypeOf(AppPoly2.prototype), 'connectedCallback', this).call(this);
	    }
	  }, {
	    key: 'disconnectedCallback',
	    value: function disconnectedCallback() {
	      console.info("disconnectedCallback() [old 'detached()'] here --------");
	    }
	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback() {
	      console.info("attributeChangedCallback() [old 'attributeChanged()'] here --------");
	    }

	    // Methds

	  }, {
	    key: 'removeElement',
	    value: function removeElement() {
	      this.remove();
	    }
	  }]);

	  return AppPoly2;
	}(Polymer.Element);

	// Register custom element definition using standard platform API


	customElements.define(AppPoly2.is, AppPoly2);

/***/ }
/******/ ]);