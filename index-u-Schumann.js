!function(t,r){for(var e in r)t[e]=r[e]}(exports,function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}([function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(1);Object.prototype.sniff=function(t,r,e){void 0===r&&(r=function(){return!1}),void 0===e&&(e=function(){return!0});for(var o=this,i=0,u=Array.isArray(t)?t:t.split(n.Separator.Expression);i<u.length;i++){var f=u[i];if(void 0===o[f])return r(o);o=o[f]}return e(o)},Object.prototype.pave=function(t,r,e){void 0===r&&(r=function(){}),void 0===e&&(e=function(){});var o=Array.isArray(t)?t:t.split(n.Separator.Expression),i=o.pop(),u=this,f=function(t){if(void 0===t[i]){var n=e();return t[i]=void 0===n?{}:n,!0}var o=r(t[i]);return t[i]=void 0===o?t[i]:o,!1};return o.length>0?u.sniff(o,(function(){for(var t=0,r=o;t<r.length;t++){var e=r[t];u[e]=void 0===u[e]?{}:u[e],u=u[e]}return f(u)}),(function(t){return f(t)})):f(u)},Object.prototype.is_empty=function(){for(var t in this)if(this.hasOwnProperty(t))return!1;return!0},Object.prototype.is_Object=function(){return this===Object(this)},Object.prototype.has_Function=function(t){return"function"==typeof this[t]}},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Separator={Expression:"."}}]));
//# sourceMappingURL=index.js.map