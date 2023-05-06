!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e(((t="undefined"!=typeof globalThis?globalThis:t||self).LowCodeBuilder=t.LowCodeBuilder||{},t.LowCodeBuilder.React={}),t.React)}(this,function(t,a){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var l=e(a);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t){t=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return("string"===e?String:Number)(t);if("object"!==o(n=n.call(t,e||"default")))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"===o(t)?t:String(t)}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}function u(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function n(){return(n="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(r)return(r=Object.getOwnPropertyDescriptor(r,e)).get?r.get.call(arguments.length<3?t:n):r.value}).apply(this,arguments)}function p(t,e){return(p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function y(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}function d(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return f(t)}function h(t,e,n){return(e=c(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=function(){function t(){i(this,t),h(this,"map",new Map)}return u(t,[{key:"addListener",value:function(t,e){var n=this.map.get(t);(n=Array.isArray(n)?n:[]).push(e),this.map.set(t,n)}},{key:"fire",value:function(t){for(var e=arguments.length,n=new Array(1<e?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];t=this.map.get(t);Array.isArray(t)&&t.forEach(function(t){"function"==typeof t&&t.apply(void 0,n)})}},{key:"removeListener",value:function(t,e){var n=this.map.get(t);Array.isArray(n)&&(n=n.filter(function(t){return t!==e}),this.map.set(t,n))}},{key:"clear",value:function(){this.map.clear()}}]),t}();function m(t,e,n){"string"==typeof e&&n&&(t[e]=n)}function b(t,e){var n,r,o=null==e?void 0:e.toLowerCase();for(r in t)if(o===(null==r?void 0:r.toLowerCase())){n=t[r];break}return n}var g=function(){function n(t,e){i(this,n),h(this,"creator",void 0),h(this,"renderer",void 0),h(this,"components",{}),this.creator=t.creator,this.renderer=t.renderer,this.create(e)}return u(n,[{key:"create",value:function(t){var n=this;Array.isArray(t)&&t.forEach(function(t){var e=n.creator(t);m(n.components,t,e)})}},{key:"get",value:function(t){return void 0===t?this.components:b(this.components,t)}},{key:"register",value:function(t,e){var n=this.components,r=t,t=e;if(t)m(n,r,t);else if(0<Object.keys(r).length)for(var o in r)m(n,o,r[o])}}]),n}();function O(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(t){h(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function w(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=s(n);return d(this,r?(t=s(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}var k=function(){function n(t,e){i(this,n),h(this,"__data",{id:"",props:{},component:{},eventUtil:new v}),this.__data.id=t,this.__data.props=e}return u(n,[{key:"getState",value:function(t){var e=null==(e=this.__data)||null==(e=e.component)?void 0:e.getState;if("function"==typeof e)return e(t)}},{key:"setState",value:function(t,e){var n=null==(n=this.__data.component)?void 0:n.setState;"function"==typeof n&&n(t,e)}},{key:"setListener",value:function(t){this.__data.component=t}},{key:"fireEvent",value:function(t,e){this.__data.eventUtil.fire(t,e)}},{key:"addEventListener",value:function(t,e){this.__data.eventUtil.addListener(t,e)}},{key:"removeEventListener",value:function(t,e){this.__data.eventUtil.removeListener(t,e)}}]),n}(),P=function(){y(e,k);var t=w(e);function e(){return i(this,e),t.apply(this,arguments)}return u(e)}(),S=function(){function n(t,e){i(this,n),h(this,"modelMap",new Map),h(this,"config",void 0),h(this,"componentBuilder",void 0),this.config=t,this.componentBuilder=e}return u(n,[{key:"get",value:function(t){return this.modelMap.get(t)}},{key:"init",value:function(){if("object"===o(this.config))return this.install([this.config])}},{key:"getComponent",value:function(t){return this.componentBuilder.get(t)}},{key:"install",value:function(t){var u=this;if(Array.isArray(t))return t.map(function(t){var e,n=t||{},r=n.id,o=n.props,i=n.componentType,c=n.children,n=n.component;if(i)return e=u.modelMap.get(r)||new P(r,o),u.modelMap.set(r,e),i=u.getComponent(i),u.componentBuilder.renderer(i,j(j({},o),{},{id:r,key:r,modelMap:u.modelMap,model:e,component:n}),function(){return u.install(c)});throw new Error("componentType is required, config=".concat(JSON.stringify(t)))})}}]),n}();function E(){return(E=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n,r=arguments[e];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function _(t,e){if(null==t)return{};var n,r=function(t,e){if(null==t)return{};for(var n,r={},o=Object.keys(t),i=0;i<o.length;i++)n=o[i],0<=e.indexOf(n)||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(t),i=0;i<o.length;i++)n=o[i],0<=e.indexOf(n)||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n]);return r}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function R(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,c,u=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw o}}return u}}(t,e)||function(t,e){var n;if(t)return"string"==typeof t?C(t,e):"Map"===(n="Object"===(n=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(t,e):void 0}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var A=["props","state"],T=["model","component","modelMap"],N=["component"];function B(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=s(n);return d(this,r?(t=s(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function D(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(t){h(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function U(t,e,n){c=e,r=a.useRef({}),i=R(a.useState(L({value:"",visible:!0,disabled:!1,readonly:!1},c.state)),2),u=i[0],o=i[1],r.current.state=u,r.current.props=c,r.current.setState=a.useCallback(function(e,n){console.log("【low-code-builder】setState:",e,n),o(function(t){return L(L({},t),{},h({},e,n))})},[]),r.current.getState=a.useCallback(function(t){var e=null==(e=r.current)?void 0:e.state,e=void 0===t?e:null==e?void 0:e[t];return console.log("【low-code-builder】getState:",t,e),e},[]),a.useEffect(function(){var t=r.current,e=t.props,t=(t.state,_(t,A));return e.model.setListener(t),function(){e.model.setListener(null)}},[]);var r,o,i={state:u}.state,c=(e.model,e.component,e.modelMap,_(e,T)),u=e.$$isCustom?L(L({},e),{},{state:i}):c;return l.default.createElement(t,E({key:e.key},u),n())}function M(r,o){return function(){y(n,l["default"].Component);var e=B(n);function n(t){return i(this,n),h(f(t=e.call(this,t)),"displayName",r),t}return u(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=null==o?void 0:o.wrapper,e=t||l.default.Fragment;return l.default.createElement(e,t?this.props:null,l.default.createElement(F,this.props,this.props.children))}}]),n}()}function F(t){var e,n=t.state,r=t.children,o=t.visible;return(void 0===o||o)&&null!=n&&n.visible?(o=L(L({},t.attributes),n.attributes),e="".concat(t.id).concat(t.className?" ".concat(t.className," "):"").concat(n.className?" ".concat(n.className):""),t=L(L({},t.style),n.style),l.default.createElement("div",E({},o,{className:e,style:t}),r)):null}function x(t){return a.useCallback(function(t){var e=t.component,n=_(t,N),r=null;switch(o(e)){case"string":r=e;break;case"function":r=l.default.createElement(e,n);break;case"object":r=e;break;default:r=l.default.createElement(l.default.Fragment,null)}return r},[])(t)}var I=function(){y(n,l["default"].Component);var e=B(n);function n(t){return i(this,n),h(f(t=e.call(this,t)),"state",{hasError:!1}),t}return u(n,[{key:"componentDidCatch",value:function(t,e){console.error("【low-code-builder】ErrorBoundary componentDidCatch",t,e),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?l.default.createElement("h1",null,"【low-code-builder】Some Components went wrong. Please Open DevTools"):this.props.children}}]),n}();function W(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=s(n);return d(this,r?(t=s(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}var $=function(){y(o,S);var r=W(o);function o(t,e){i(this,o);var n=new g({creator:M,renderer:U},["Wrapper","Container","Header","Content","Footer"]);return n.register({Wrapper:M("Wrapper",{wrapper:I}),Component:x}),h(f(t=r.call(this,t,n)),"components",{}),t.components=Object.assign({},e),t}return u(o,[{key:"setComponents",value:function(t){this.components=Object.assign({},t)}},{key:"getComponent",value:function(t){return b(this.components,t)||n(s(o.prototype),"getComponent",this).call(this,t)||l.default.Fragment}}]),o}();t.Component=x,t.createModelComponent=M,t.default=$,Object.defineProperty(t,"__esModule",{value:!0})});
