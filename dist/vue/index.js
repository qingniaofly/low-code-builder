"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("vue");var vueHooks=require("vue-hooks");function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);r=r.call(e,t||"default");if("object"!==_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _get(){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=_superPropBase(e,t);if(n)return(n=Object.getOwnPropertyDescriptor(n,t)).get?n.get.call(arguments.length<3?e:r):n.value}).apply(this,arguments)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var EventUtil=function(){function e(){_classCallCheck(this,e),_defineProperty(this,"map",new Map)}return _createClass(e,[{key:"addListener",value:function(e,t){var r=this.map.get(e);(r=Array.isArray(r)?r:[]).push(t),this.map.set(e,r)}},{key:"fire",value:function(e){for(var t=arguments.length,r=new Array(1<t?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];e=this.map.get(e);Array.isArray(e)&&e.forEach(function(e){"function"==typeof e&&e.apply(void 0,r)})}},{key:"removeListener",value:function(e,t){var r=this.map.get(e);Array.isArray(r)&&(r=r.filter(function(e){return e!==t}),this.map.set(e,r))}},{key:"clear",value:function(){this.map.clear()}}]),e}();function addComponent(e,t,r){"string"==typeof t&&r&&(e[t]=r)}function getComponent(e,t){var r,n,o=t.toLocaleLowerCase();for(n in e)if(o===n.toLocaleLowerCase()){r=e[n];break}return r}function registerComponent(e,t,r){if(r)addComponent(e,t,r);else if(0<Object.keys(t).length)for(var n in t)addComponent(e,n,t[n])}var ComponentBuilder=function(){function r(e,t){_classCallCheck(this,r),_defineProperty(this,"creator",void 0),_defineProperty(this,"renderer",void 0),_defineProperty(this,"components",{}),this.creator=e.creator,this.renderer=e.renderer,this.create(t)}return _createClass(r,[{key:"create",value:function(e){var r=this;Array.isArray(e)&&e.forEach(function(e){var t=r.creator(e);addComponent(r.components,e,t)})}},{key:"get",value:function(e){return void 0===e?this.components:getComponent(this.components,e)}},{key:"register",value:function(e,t){registerComponent(this.components,e,t)}}]),r}();function ownKeys$1(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function _objectSpread$1(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys$1(Object(r),!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys$1(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _createSuper$1(r){var n=_isNativeReflectConstruct$1();return function(){var e,t=_getPrototypeOf(r);return _possibleConstructorReturn(this,n?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _isNativeReflectConstruct$1(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var BaseModel=function(){function r(e,t){_classCallCheck(this,r),_defineProperty(this,"__data",{id:"",props:{},component:{},eventUtil:new EventUtil}),this.__data.id=e,this.__data.props=t}return _createClass(r,[{key:"getState",value:function(e){var t=null==(t=this.__data)||null==(t=t.component)?void 0:t.getState;if("function"==typeof t)return t(e)}},{key:"setState",value:function(e,t){var r=null==(r=this.__data.component)?void 0:r.setState;"function"==typeof r&&r(e,t)}},{key:"setListener",value:function(e){this.__data.component=e}},{key:"fireEvent",value:function(e,t){this.__data.eventUtil.fire(e,t)}},{key:"addEventListener",value:function(e,t){this.__data.eventUtil.addListener(e,t)}},{key:"removeEventListener",value:function(e,t){this.__data.eventUtil.removeListener(e,t)}}]),r}(),ViewModel=function(){_inherits(t,BaseModel);var e=_createSuper$1(t);function t(){return _classCallCheck(this,t),e.apply(this,arguments)}return _createClass(t)}(),Model=function(){function r(e,t){_classCallCheck(this,r),_defineProperty(this,"modelMap",new Map),_defineProperty(this,"config",void 0),_defineProperty(this,"componentBuilder",void 0),this.config=e,this.componentBuilder=t}return _createClass(r,[{key:"get",value:function(e){return this.modelMap.get(e)}},{key:"init",value:function(){if("object"===_typeof(this.config))return this.install([this.config])}},{key:"getComponent",value:function(e){return this.componentBuilder.get(e)}},{key:"install",value:function(e){var a=this;if(Array.isArray(e))return e.map(function(e){var e=e||{},t=e.id,r=e.props,n=e.componentType,o=e.children,e=e.component,i=a.modelMap.get(t)||new ViewModel(t,r),n=(a.modelMap.set(t,i),a.getComponent(n));return a.componentBuilder.renderer(n,_objectSpread$1(_objectSpread$1({},r),{},{id:t,key:t,model:i,component:e}),function(){return a.install(o)})})}}]),r}();function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t,r=1;r<arguments.length;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(e){return e.reduce(function(e,t){for(var r in t)if(e[r])if(-1!==normalMerge.indexOf(r))e[r]=_extends({},e[r],t[r]);else if(-1!==toArrayMerge.indexOf(r)){var n=e[r]instanceof Array?e[r]:[e[r]],o=t[r]instanceof Array?t[r]:[t[r]];e[r]=[].concat(n,o)}else if(-1!==functionalMerge.indexOf(r))for(var i in t[r]){var a,c;e[r][i]?(a=e[r][i]instanceof Array?e[r][i]:[e[r][i]],c=t[r][i]instanceof Array?t[r][i]:[t[r][i]],e[r][i]=[].concat(a,c)):e[r][i]=t[r][i]}else if("hook"===r)for(var u in t[r])e[r][u]=e[r][u]?mergeFn(e[r][u],t[r][u]):t[r][u];else e[r]=t[r];else e[r]=t[r];return e},{})},mergeFn=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}},helper=mergeJsxProps;function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};for(var r,n={},o=Object.keys(e),i=0;i<o.length;i++)r=o[i],0<=t.indexOf(r)||(n[r]=e[r]);return n}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(e),i=0;i<o.length;i++)r=o[i],0<=t.indexOf(r)||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r]);return n}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _unsupportedIterableToArray(e,t){var r;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(r="Object"===(r=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function useCallback(e,t){return e}var _excluded=["component"],_excluded2=["component"];function ownKeys(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(r),!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function useModelComponent(e){var r=vueHooks.createRef({}),t=_slicedToArray(vueHooks.useState({value:"",visible:!0,disabled:!1,readonly:!1}),2),n=t[0],o=t[1];return r.current.state=n,r.current.props=e,r.current.setState=useCallback(function(t,r){console.log("【low-code-builder】setState:",t,r),o(function(e){return e[t]=r,e})}),r.current.getState=useCallback(function(e){var t=null==(t=r.current)?void 0:t.state,t=void 0===e?t:null==t?void 0:t[e];return console.log("【low-code-builder】getState:",e,t),t}),vueHooks.useEffect(function(){var e=r.current.props;return e.model.setListener(r.current),function(){e.model.setListener(null)}},[]),{state:n}}function renderModelComponent(o,i,a){return vueHooks.withHooks(function(t){var e=useModelComponent.bind(this)(i).state,r=[],n=("function"==typeof a?(n=a(),Array.isArray(n)&&(r=n)):Array.isArray(a)&&(r=a),r.map(function(e){return t(e)})),r=_objectSpread(_objectSpread({},i),{},{state:e,children:n});return t(o,helper([{},{props:r},{attrs:{state:e}}]))})}function createModelComponent(e,t){return vueHooks.withHooks(function(e,t){var r=t.children;return e(WithBasePropSlot,helper([{},{props:t}]),[r])},{name:e})}function withBasePropSlot(e,t){var r,n=t.state,o=t.visible;return(void 0===o||o)&&null!=n&&n.visible?(o=_objectSpread(_objectSpread({},null==t?void 0:t.attributes),null==n?void 0:n.attributes),r="".concat(null==t?void 0:t.id).concat(null!=t&&t.className?" ".concat(null==t?void 0:t.className," "):"").concat(null!=n&&n.className?" ".concat(null==n?void 0:n.className):""),n=_objectSpread(_objectSpread({},null==t?void 0:t.style),null==n?void 0:n.style),e("div",_objectSpread(_objectSpread({},o),{},{class:r,style:n,props:t}),_toConsumableArray(this.$slots.default||[]))):null}var WithBasePropSlot=vueHooks.withHooks(withBasePropSlot);function text(e,t){var r=t.component,t=_objectWithoutProperties(t,_excluded);return e("span",helper([{},{props:t}]),[r])}var Text=vueHooks.withHooks(text);function component(e,t){var r=t.component,n=_objectWithoutProperties(t,_excluded2);return"string"==typeof r?e(Text,helper([{},{props:t}])):e(vueHooks.withHooks(r),helper([{},{props:n}]))}var Component=vueHooks.withHooks(component);function _createSuper(r){var n=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(r);return _possibleConstructorReturn(this,n?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var VueModel=function(){_inherits(o,Model);var n=_createSuper(o);function o(e,t){_classCallCheck(this,o);var r=new ComponentBuilder({creator:createModelComponent,renderer:renderModelComponent},["Wrapper","Container","Header","Content","Footer"]);return r.register({Component:Component}),_defineProperty(_assertThisInitialized(e=n.call(this,e,r)),"components",{}),e.components=Object.assign({},t),e}return _createClass(o,[{key:"setComponents",value:function(e){this.components=Object.assign({},e)}},{key:"getComponent",value:function(e){return getComponent(this.components,e)||_get(_getPrototypeOf(o.prototype),"getComponent",this).call(this,e)}}]),o}();exports.Component=Component,exports.createModelComponent=createModelComponent,exports.default=VueModel;
