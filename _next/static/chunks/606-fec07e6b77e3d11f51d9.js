(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{23646:function(e,t,r){var n=r(67228);e.exports=function(e){if(Array.isArray(e))return n(e)}},59713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},46860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,r){var n=r(23646),o=r(46860),s=r(60379),u=r(98206);e.exports=function(e){return n(e)||o(e)||s(e)||u()}},53671:function(e,t,r){var n=r(17854),o=r(19662),s=r(47908),u=r(68361),c=r(26244),a=n.TypeError,i=function(e){return function(t,r,n,i){o(r);var l=s(t),d=u(l),_=c(l),f=e?_-1:0,p=e?-1:1;if(n<2)for(;;){if(f in d){i=d[f],f+=p;break}if(f+=p,e?f<0:_<=f)throw a("Reduce of empty array with no initial value")}for(;e?f>=0:_>f;f+=p)f in d&&(i=r(i,d[f],f,l));return i}};e.exports={left:i(!1),right:i(!0)}},85827:function(e,t,r){"use strict";var n=r(82109),o=r(53671).left,s=r(9341),u=r(7392),c=r(35268);n({target:"Array",proto:!0,forced:!s("reduce")||!c&&u>79&&u<83},{reduce:function(e){var t=arguments.length;return o(this,e,t,t>1?arguments[1]:void 0)}})},65069:function(e,t,r){"use strict";var n=r(82109),o=r(1702),s=r(43157),u=o([].reverse),c=[1,2];n({target:"Array",proto:!0,forced:String(c)===String(c.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),u(this)}})},10075:function(e,t,r){"use strict";r(24812);var n=r(96156),o=r(85893),s=(r(67294),r(47166)),u=r.n(s),c=r(97085),a=r.n(c);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){return(0,o.jsx)("svg",l(l({},e),{},{children:(0,o.jsx)("path",{d:"M21.6983 0L20.3453 1.45968L26.346 7.96623H0V10.0338H26.346L20.3453 16.5403L21.6983 18L30 9L21.6983 0Z",fill:"currentColor"})}))};d.defaultProps={width:"30",height:"18",viewBox:"0 0 30 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var _=function(e){return(0,o.jsx)("svg",l(l({},e),{},{children:(0,o.jsx)("path",{d:"M8.30169 18L9.65473 16.5403L3.65397 10.0338L30 10.0338L30 7.96623L3.65397 7.96623L9.65473 1.45968L8.30169 -1.89693e-06L7.86805e-07 9L8.30169 18Z",fill:"currentColor"})}))};_.defaultProps={width:"30",height:"18",viewBox:"0 0 30 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var f=u().bind(a());t.Z=function(e){var t=e.className,r=e.onClick,n=e.type,s=void 0===n?"right":n,u=e.disabled,c=void 0!==u&&u,a=e.white,i=void 0!==a&&a,l=e.blue,p=void 0!==l&&l,m="left"===s?_:d;return(0,o.jsx)("button",{className:f("Arrow","Arrow_".concat(s),{Arrow_disabled:c},{Arrow_white:i},{Arrow_blue:p},t),onClick:r,children:(0,o.jsx)(m,{})})}},69957:function(e,t,r){"use strict";r(24812);var n=r(85893),o=(r(67294),r(47166)),s=r.n(o),u=r(94328),c=r.n(u),a=s().bind(c());t.Z=function(e){var t=e.theme,r=void 0===t?"wBorder":t,o=e.onClick,s=e.className,u=e.children,c=e.download;return c?(0,n.jsx)("a",{href:c,className:a("Button","Button_".concat(r),s),onClick:o,download:!0,target:"_blank",rel:"noreferrer",children:u}):(0,n.jsx)("button",{className:a("Button","Button_".concat(r),s),onClick:o,children:u})}},5563:function(e,t,r){"use strict";r(24812);var n=r(85893),o=(r(67294),r(47166)),s=r.n(o),u=r(99936),c=r.n(u),a=s().bind(c());t.Z=function(e){var t=e.level,r=void 0===t?1:t,o=e.className,s=e.children,u=e.noTransfrom,c=void 0!==u&&u,i="h1";switch(+r){case 2:i="h2";break;case 3:i="h3";break;case 4:i="h4";break;default:i="h1"}return(0,n.jsx)(i,{className:a("Heading","Heading_level-".concat(r),{Heading_notransform:c},o),children:s})}},82050:function(e,t,r){"use strict";r(24812),r(41539),r(88674);var n=r(85893),o=r(67294),s=r(30653),u=r(15027),c=r(5563),a=r(69957),i=r(47166),l=r.n(i),d=r(40863),_=r.n(d),f=l().bind(_());t.Z=function(e){var t=e.title,r=(0,o.useState)(!0),i=r[0],l=r[1],d=(0,o.useState)([{id:1,rewuefile:"",titleDescription:""}]),_=d[0],p=d[1];return(0,o.useEffect)((function(){fetch("/apiaboutUsRewueFileViewSet/?format=json").then((function(e){return e.json()})).then((function(e){return p(e)}))}),[]),(0,n.jsx)("div",{className:f("RequestProductsForm"),children:(0,n.jsx)(u.Z,{className:f("RequestProductsForm__container"),children:(0,n.jsxs)("div",{className:f("RequestProductsForm__contentWrap"),children:[(0,n.jsxs)("div",{className:f("RequestProductsForm__content"),children:[(0,n.jsx)("div",{className:f("RequestProductsForm__titleWrap"),children:(0,n.jsx)(c.Z,{className:f("RequestProductsForm__title"),level:"3",children:(0,s.ZP)(t)})}),(0,n.jsx)("div",{className:f("RequestProductsForm__content__description"),children:_[0].titleDescription}),(0,n.jsx)("div",{className:f("RequestProductsForm__content__button"),children:(0,n.jsx)("div",{className:f("RequestProductsForm__content__buttonWrap"),children:(0,n.jsx)("a",{href:_[0].rewuefile,download:!0,children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0430\u043d\u043a\u0435\u0442\u0443"})})})]}),(0,n.jsxs)("div",{className:f("RequestProductsForm__content"),children:[(0,n.jsxs)("form",{className:f("RequestProductsForm__form"),children:[(0,n.jsxs)("div",{className:f("RequestProductsForm__fields"),children:[(0,n.jsx)("input",{className:f("RequestProductsForm__input"),type:"email",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),(0,n.jsx)("input",{className:f("RequestProductsForm__input"),type:"email",placeholder:"E-mail/\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),(0,n.jsx)("input",{className:f("RequestProductsForm__input"),type:"text",placeholder:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),(0,n.jsx)("input",{className:f("RequestProductsForm__input"),type:"file"}),(0,n.jsx)("textarea",{className:f("RequestProductsForm__inputBig"),placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})]}),(0,n.jsxs)("div",{className:f("RequestProductsForm__checkboxWrap"),children:[(0,n.jsx)("input",{className:f("RequestProductsForm__checkbox"),type:"checkbox",checked:i,onChange:function(){l(!i)}}),(0,n.jsx)("div",{className:f("RequestProductsForm__checkboxText"),children:"\u0414\u0430\u044e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0441\u0432\u043e\u0438\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c \u0441 \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"})]})]}),(0,n.jsx)("div",{className:f("RequestProductsForm__buttonWrap"),children:(0,n.jsx)(a.Z,{theme:"wBorder",className:f("RequestProductsForm__button"),children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})]})})})}},23398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r(67294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},76393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(s.AmpStateContext))};var n,o=(n=r(67294))&&n.__esModule?n:{default:n},s=r(23398);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,s=e.hasQuery,u=void 0!==s&&s;return r||o&&u}},92775:function(e,t,r){"use strict";r(92222),r(57327),r(82772),r(66992),r(21249),r(85827),r(65069),r(47042),r(5212),r(69070),r(38880),r(41539),r(70189),r(78783),r(23157),r(4129),r(88921),r(96248),r(13599),r(11477),r(64362),r(15389),r(90401),r(45164),r(91238),r(54837),r(87485),r(56767),r(76651),r(61437),r(35285),r(39865),r(78206),r(33948);var n=r(59713);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=_,t.default=void 0;var s,u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=n?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(67294)),c=(s=r(73244))&&s.__esModule?s:{default:s},a=r(23398),i=r(41165),l=r(76393);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function _(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[u.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=u.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(_(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var s=!0,u=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){u=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?s=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?s=!1:t.add(o.type);break;case"meta":for(var a=0,i=p.length;a<i;a++){var l=p[a];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?s=!1:r.add(l);else{var d=o.props[l],_=n[l]||new Set;"name"===l&&u||!_.has(d)?(_.add(d),n[l]=_):s=!1}}}return s}}()).reverse().map((function(e,r){var s=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,u.default.cloneElement(e,c)}return u.default.cloneElement(e,{key:s})}))}var h=function(e){var t=e.children,r=(0,u.useContext)(a.AmpStateContext),n=(0,u.useContext)(i.HeadManagerContext);return u.default.createElement(c.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,l.isInAmpMode)(r)},t)};t.default=h},73244:function(e,t,r){"use strict";var n=r(319),o=r(34575),s=r(93913),u=(r(81506),r(2205)),c=r(78585),a=r(29754);function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(t){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}t.__esModule=!0,t.default=void 0;var l=r(67294),d=function(e){u(r,e);var t=i(r);function r(e){var s;return o(this,r),(s=t.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(n(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=d},97085:function(e){e.exports={Arrow:"styles_Arrow__1qcSu",Arrow_disabled:"styles_Arrow_disabled__2lel5",Arrow_white:"styles_Arrow_white__s62dv",Arrow_blue:"styles_Arrow_blue__2rF_U"}},94328:function(e){e.exports={Button:"styles_Button__JVxxi",Button_noBorder:"styles_Button_noBorder__aDEJg"}},99936:function(e){e.exports={Heading:"styles_Heading__1jcMq",Heading_notransform:"styles_Heading_notransform__jggwP","Heading_level-1":"styles_Heading_level-1__grV3t","Heading_level-2":"styles_Heading_level-2__I6U-q","Heading_level-3":"styles_Heading_level-3__UYMsw","Heading_level-4":"styles_Heading_level-4__2w4dT"}},40863:function(e){e.exports={RequestProductsForm:"styles_RequestProductsForm__3VZp6",RequestProductsForm__form:"styles_RequestProductsForm__form__2rEJX",RequestProductsForm__container:"styles_RequestProductsForm__container__3Ibv5",RequestProductsForm__contentWrap:"styles_RequestProductsForm__contentWrap__2c-qr",RequestProductsForm__content:"styles_RequestProductsForm__content__1pkzs",RequestProductsForm__content__description:"styles_RequestProductsForm__content__description__3NY7M",RequestProductsForm__content__button:"styles_RequestProductsForm__content__button__1a0b0",RequestProductsForm__content__buttonWrap:"styles_RequestProductsForm__content__buttonWrap__3fjYB",RequestProductsForm__titleWrap:"styles_RequestProductsForm__titleWrap__1wT4A",RequestProductsForm__title:"styles_RequestProductsForm__title__2wR7_",RequestProductsForm__fields:"styles_RequestProductsForm__fields__39Zh5",RequestProductsForm__input:"styles_RequestProductsForm__input__i5r6K",RequestProductsForm__inputBig:"styles_RequestProductsForm__inputBig__10-_k",RequestProductsForm__checkboxWrap:"styles_RequestProductsForm__checkboxWrap__1JBqW",RequestProductsForm__checkboxText:"styles_RequestProductsForm__checkboxText__3-FNr",RequestProductsForm__buttonWrap:"styles_RequestProductsForm__buttonWrap__1Ylme",RequestProductsForm__button:"styles_RequestProductsForm__button__31cUS"}},9008:function(e,t,r){e.exports=r(92775)},50247:function(){}}]);