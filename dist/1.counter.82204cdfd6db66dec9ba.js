webpackJsonp([1],{109:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:l,payload:t}}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments[1],e=h[n.type];return e?e(t,n):t}Object.defineProperty(n,"__esModule",{value:!0}),n.actions=n.doubleAsync=n.COUNTER_DOUBLE_ASYNC=n.COUNTER_INCREMENT=void 0;var c,u=e(200),a=r(u),f=e(194),s=r(f);n.increment=o,n.default=i;var l=n.COUNTER_INCREMENT="COUNTER_INCREMENT",v=n.COUNTER_DOUBLE_ASYNC="COUNTER_DOUBLE_ASYNC",d=n.doubleAsync=function(){return function(t,n){return new s.default(function(e){setTimeout(function(){t({type:v,payload:n().counter}),e()},200)})}},h=(n.actions={increment:o,doubleAsync:d},c={},(0,a.default)(c,l,function(t,n){return t+n.payload}),(0,a.default)(c,v,function(t,n){return 2*t}),c),_=0},114:function(t,n,e){var r=e(42),o=e(11)("toStringTag"),i="Arguments"==r(function(){return arguments}()),c=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=c(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},183:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.Counter=void 0;var o=e(6),i=r(o),c=e(8),u=r(c),a=n.Counter=function(t){return i.default.createElement("div",{style:{margin:"0 auto"}},i.default.createElement("h2",null,"Counter: ",t.counter),i.default.createElement("button",{className:"btn btn-default",onClick:t.increment},"Increment")," ",i.default.createElement("button",{className:"btn btn-default",onClick:t.doubleAsync},"Double (Async)"))};a.propTypes={counter:u.default.number.isRequired,doubleAsync:u.default.func.isRequired,increment:u.default.func.isRequired},n.default=a},184:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(101),i=e(109),c=e(183),u=r(c),a={increment:function(){return(0,i.increment)(1)},doubleAsync:i.doubleAsync},f=function(t){return{counter:t.counter}};n.default=(0,o.connect)(f,a)(u.default)},194:function(t,n,e){t.exports={default:e(209),__esModule:!0}},200:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(112),i=r(o);n.default=function(t,n,e){return n in t?(0,i.default)(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},209:function(t,n,e){e(125),e(126),e(127),e(245),t.exports=e(9).Promise},214:function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},217:function(t,n,e){var r=e(43),o=e(221),i=e(219),c=e(20),u=e(124),a=e(238),f={},s={},n=t.exports=function(t,n,e,l,v){var d,h,_,p,y=v?function(){return t}:a(t),m=r(e,l,n?2:1),b=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(d=u(t.length);d>b;b++)if(p=n?m(c(h=t[b])[0],h[1]):m(t[b]),p===f||p===s)return p}else for(_=y.call(t);!(h=_.next()).done;)if(p=o(_,m,h.value,n),p===f||p===s)return p};n.BREAK=f,n.RETURN=s},219:function(t,n,e){var r=e(44),o=e(11)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},221:function(t,n,e){var r=e(20);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},223:function(t,n,e){var r=e(11)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:e=!0}},i[r]=function(){return c},t(i)}catch(t){}return e}},227:function(t,n,e){var r=e(12),o=e(73).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,a="process"==e(42)(c);t.exports=function(){var t,n,e,f=function(){var r,o;for(a&&(r=c.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(a)e=function(){c.nextTick(f)};else if(i){var s=!0,l=document.createTextNode("");new i(f).observe(l,{characterData:!0}),e=function(){l.data=s=!s}}else if(u&&u.resolve){var v=u.resolve();e=function(){v.then(f)}}else e=function(){o.call(r,f)};return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},232:function(t,n,e){var r=e(27);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},234:function(t,n,e){"use strict";var r=e(12),o=e(9),i=e(22),c=e(21),u=e(11)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];c&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},235:function(t,n,e){var r=e(20),o=e(65),i=e(11)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||void 0==(e=r(c)[i])?n:o(e)}},238:function(t,n,e){var r=e(114),o=e(11)("iterator"),i=e(44);t.exports=e(9).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},245:function(t,n,e){"use strict";var r,o,i,c=e(51),u=e(12),a=e(43),f=e(114),s=e(16),l=e(31),v=e(65),d=e(214),h=e(217),_=e(235),p=e(73).set,y=e(227)(),m="Promise",b=u.TypeError,E=u.process,x=u[m],E=u.process,w="process"==f(E),N=function(){},j=!!function(){try{var t=x.resolve(1),n=(t.constructor={})[e(11)("species")]=function(t){t(N,N)};return(w||"function"==typeof PromiseRejectionEvent)&&t.then(N)instanceof n}catch(t){}}(),T=function(t,n){return t===n||t===x&&n===i},A=function(t){var n;return!(!l(t)||"function"!=typeof(n=t.then))&&n},C=function(t){return T(x,t)?new R(t):new o(t)},R=o=function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw b("Bad Promise constructor");n=t,e=r}),this.resolve=v(n),this.reject=v(e)},O=function(t){try{t()}catch(t){return{error:t}}},g=function(t,n){if(!t._n){t._n=!0;var e=t._c;y(function(){for(var r=t._v,o=1==t._s,i=0,c=function(n){var e,i,c=o?n.ok:n.fail,u=n.resolve,a=n.reject,f=n.domain;try{c?(o||(2==t._h&&P(t),t._h=1),c===!0?e=r:(f&&f.enter(),e=c(r),f&&f.exit()),e===n.promise?a(b("Promise-chain cycle")):(i=A(e))?i.call(e,u,a):u(e)):a(r)}catch(t){a(t)}};e.length>i;)c(e[i++]);t._c=[],t._n=!1,n&&!t._h&&M(t)})}},M=function(t){p.call(u,function(){var n,e,r,o=t._v;if(U(t)&&(n=O(function(){w?E.emit("unhandledRejection",o,t):(e=u.onunhandledrejection)?e({promise:t,reason:o}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=w||U(t)?2:1),t._a=void 0,n)throw n.error})},U=function(t){if(1==t._h)return!1;for(var n,e=t._a||t._c,r=0;e.length>r;)if(n=e[r++],n.fail||!U(n.promise))return!1;return!0},P=function(t){p.call(u,function(){var n;w?E.emit("rejectionHandled",t):(n=u.onrejectionhandled)&&n({promise:t,reason:t._v})})},S=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),g(n,!0))},k=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw b("Promise can't be resolved itself");(n=A(t))?y(function(){var r={_w:e,_d:!1};try{n.call(t,a(k,r,1),a(S,r,1))}catch(t){S.call(r,t)}}):(e._v=t,e._s=1,g(e,!1))}catch(t){S.call({_w:e,_d:!1},t)}}};j||(x=function(t){d(this,x,m,"_h"),v(t),r.call(this);try{t(a(k,this,1),a(S,this,1))}catch(t){S.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(232)(x.prototype,{then:function(t,n){var e=C(_(this,x));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=w?E.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&g(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),R=function(){var t=new r;this.promise=t,this.resolve=a(k,t,1),this.reject=a(S,t,1)}),s(s.G+s.W+s.F*!j,{Promise:x}),e(54)(x,m),e(234)(m),i=e(9)[m],s(s.S+s.F*!j,m,{reject:function(t){var n=C(this),e=n.reject;return e(t),n.promise}}),s(s.S+s.F*(c||!j),m,{resolve:function(t){if(t instanceof x&&T(t.constructor,this))return t;var n=C(this),e=n.resolve;return e(t),n.promise}}),s(s.S+s.F*!(j&&e(223)(function(t){x.all(t).catch(N)})),m,{all:function(t){var n=this,e=C(n),r=e.resolve,o=e.reject,i=O(function(){var e=[],i=0,c=1;h(t,!1,function(t){var u=i++,a=!1;e.push(void 0),c++,n.resolve(t).then(function(t){a||(a=!0,e[u]=t,--c||r(e))},o)}),--c||r(e)});return i&&o(i.error),e.promise},race:function(t){var n=this,e=C(n),r=e.reject,o=O(function(){h(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o&&r(o.error),e.promise}})}});