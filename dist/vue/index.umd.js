!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("vue"),require("vue-hooks")):"function"==typeof define&&define.amd?define(["exports","vue","vue-hooks"],e):e(((t="undefined"!=typeof globalThis?globalThis:t||self).LowCodeBuilder=t.LowCodeBuilder||{},t.LowCodeBuilder.Vue={}),t.vue,t.vueHooks)}(this,function(t,T,c){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){t=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return("string"===e?String:Number)(t);if("object"!==r(n=n.call(t,e||"default")))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"===r(t)?t:String(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,o(r.key),r)}}function a(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(){return(e="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}(t,e);if(r)return(r=Object.getOwnPropertyDescriptor(r,e)).get?r.get.call(arguments.length<3?t:n):r.value}).apply(this,arguments)}function n(t,e){return(n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&n(t,e)}function p(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return l(t)}function y(t,e,n){(e=o(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}var v=function(){function t(){i(this,t),y(this,"map",new Map)}return a(t,[{key:"addListener",value:function(t,e){var n=this.map.get(t);(n=Array.isArray(n)?n:[]).push(e),this.map.set(t,n)}},{key:"fire",value:function(t){for(var e=arguments.length,n=new Array(1<e?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];t=this.map.get(t);Array.isArray(t)&&t.forEach(function(t){"function"==typeof t&&t.apply(void 0,n)})}},{key:"removeListener",value:function(t,e){var n=this.map.get(t);Array.isArray(n)&&(n=n.filter(function(t){return t!==e}),this.map.set(t,n))}},{key:"clear",value:function(){this.map.clear()}}]),t}();function d(t,e,n){"string"==typeof e&&n&&(t[e]=n)}function h(t,e){var n,r,o=e.toLocaleLowerCase();for(r in t)if(o===r.toLocaleLowerCase()){n=t[r];break}return n}var b=function(){function n(t,e){i(this,n),y(this,"creator",void 0),y(this,"renderer",void 0),y(this,"components",{}),this.creator=t.creator,this.renderer=t.renderer,this.create(e)}return a(n,[{key:"create",value:function(t){var n=this;Array.isArray(t)&&t.forEach(function(t){var e=n.creator(t);d(n.components,t,e)})}},{key:"get",value:function(t){return void 0===t?this.components:h(this.components,t)}},{key:"register",value:function(t,e){var n=this.components,r=t,t=e;if(t)d(n,r,t);else if(0<Object.keys(r).length)for(var o in r)d(n,o,r[o])}}]),n}();function m(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){y(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function g(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=f(n);return p(this,r?(t=f(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}var j=function(){function n(t,e){i(this,n),y(this,"__data",{id:"",props:{},component:{},eventUtil:new v}),this.__data.id=t,this.__data.props=e}return a(n,[{key:"getState",value:function(t){var e=null==(e=this.__data)||null==(e=e.component)?void 0:e.getState;if("function"==typeof e)return e(t)}},{key:"setState",value:function(t,e){var n=null==(n=this.__data.component)?void 0:n.setState;"function"==typeof n&&n(t,e)}},{key:"setListener",value:function(t){this.__data.component=t}},{key:"fireEvent",value:function(t,e){this.__data.eventUtil.fire(t,e)}},{key:"addEventListener",value:function(t,e){this.__data.eventUtil.addListener(t,e)}},{key:"removeEventListener",value:function(t,e){this.__data.eventUtil.removeListener(t,e)}}]),n}(),w=function(){s(e,j);var t=g(e);function e(){return i(this,e),t.apply(this,arguments)}return a(e)}(),k=function(){function n(t,e){i(this,n),y(this,"modelMap",new Map),y(this,"config",void 0),y(this,"componentBuilder",void 0),this.config=t,this.componentBuilder=e}return a(n,[{key:"get",value:function(t){return this.modelMap.get(t)}},{key:"init",value:function(){if("object"===r(this.config))return this.install([this.config])}},{key:"getComponent",value:function(t){return this.componentBuilder.get(t)}},{key:"install",value:function(t){var u=this;if(Array.isArray(t))return t.map(function(t){var t=t||{},e=t.id,n=t.props,r=t.componentType,o=t.children,t=t.component,i=u.modelMap.get(e)||new w(e,n),r=(u.modelMap.set(e,i),u.getComponent(r));return u.componentBuilder.renderer(r,O(O({},n),{},{id:e,key:e,model:i,component:t}),function(){return u.install(o)})})}}]),n}();function P(){return(P=Object.assign?Object.assign.bind():function(t){for(var e,n=1;n<arguments.length;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)}var S=["attrs","props","domProps"],A=["class","style","directives"],_=["on","nativeOn"],E=function(t){return t.reduce(function(t,e){for(var n in e)if(t[n])if(-1!==S.indexOf(n))t[n]=P({},t[n],e[n]);else if(-1!==A.indexOf(n)){var r=t[n]instanceof Array?t[n]:[t[n]],o=e[n]instanceof Array?e[n]:[e[n]];t[n]=[].concat(r,o)}else if(-1!==_.indexOf(n))for(var i in e[n]){var u,c;t[n][i]?(u=t[n][i]instanceof Array?t[n][i]:[t[n][i]],c=e[n][i]instanceof Array?e[n][i]:[e[n][i]],t[n][i]=[].concat(u,c)):t[n][i]=e[n][i]}else if("hook"===n)for(var a in e[n])t[n][a]=t[n][a]?function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}}(t[n][a],e[n][a]):e[n][a];else t[n]=e[n];else t[n]=e[n];return t},{})};function C(t,e){if(null==t)return{};var n,r=function(t,e){if(null==t)return{};for(var n,r={},o=Object.keys(t),i=0;i<o.length;i++)n=o[i],0<=e.indexOf(n)||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(t),i=0;i<o.length;i++)n=o[i],0<=e.indexOf(n)||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n]);return r}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function R(t,e){var n;if(t)return"string"==typeof t?L(t,e):"Map"===(n="Object"===(n=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(t,e):void 0}function H(t){return function(t){if(Array.isArray(t))return L(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||R(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,e)||R(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var N=["component"],U=["component"];function x(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(t){y(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function q(o,i,u){return c.withHooks(function(e){var t=function(t){var n=c.createRef({}),e=I(c.useState({value:"",visible:!0,disabled:!1,readonly:!1}),2),r=e[0],o=e[1];return n.current.state=r,n.current.props=t,n.current.setState=function(e,n){console.log("【low-code-builder】setState:",e,n),o(function(t){return t[e]=n,t})},n.current.getState=function(t){var e=null==(e=n.current)?void 0:e.state,e=void 0===t?e:null==e?void 0:e[t];return console.log("【low-code-builder】getState:",t,e),e},c.useEffect(function(){var t=n.current.props;return t.model.setListener(n.current),function(){t.model.setListener(null)}},[]),{state:r}}.bind(this)(i).state,n=[],r=("function"==typeof u?(r=u(),Array.isArray(r)&&(n=r)):Array.isArray(u)&&(n=u),n.map(function(t){return e(t)})),n=B(B({},i),{},{state:t,children:r});return e(o,E([{},{props:n},{attrs:{state:t}}]))})}function D(t,e){return c.withHooks(function(t,e){var n=e.children;return t($,E([{},{props:e}]),[n])},{name:t})}var $=c.withHooks(function(t,e){var n,r=e.state,o=e.visible;return(void 0===o||o)&&null!=r&&r.visible?(o=B(B({},null==e?void 0:e.attributes),null==r?void 0:r.attributes),n="".concat(null==e?void 0:e.id).concat(null!=e&&e.className?" ".concat(null==e?void 0:e.className," "):"").concat(null!=r&&r.className?" ".concat(null==r?void 0:r.className):""),r=B(B({},null==e?void 0:e.style),null==r?void 0:r.style),t("div",B(B({},o),{},{class:n,style:r,props:e}),H(this.$slots.default||[]))):null});var F=c.withHooks(function(t,e){var n=e.component,e=C(e,N);return t("span",E([{},{props:e}]),[n])});var M=c.withHooks(function(t,e){var n=e.component,r=C(e,U);return"string"==typeof n?t(F,E([{},{props:e}])):t(c.withHooks(n),E([{},{props:r}]))});function V(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=f(n);return p(this,r?(t=f(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}var W=function(){s(o,k);var r=V(o);function o(t,e){i(this,o);var n=new b({creator:D,renderer:q},["Wrapper","Container","Header","Content","Footer"]);return n.register({Component:M}),y(l(t=r.call(this,t,n)),"components",{}),t.components=Object.assign({},e),t}return a(o,[{key:"setComponents",value:function(t){this.components=Object.assign({},t)}},{key:"getComponent",value:function(t){return h(this.components,t)||e(f(o.prototype),"getComponent",this).call(this,t)}}]),o}();t.Component=M,t.createModelComponent=D,t.default=W,Object.defineProperty(t,"__esModule",{value:!0})});
