!function(t){var e={};function n(r){if(e[r])return e[r].exports;var u=e[r]={i:r,l:!1,exports:{}};return t[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)n.d(r,u,function(e){return t[e]}.bind(null,u));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){$j(document).ready(function(){$j.fn.calcRadius=function(){return $j(this).each(function(){var t=$j(this).hasClass("bubble--less-rounded")||$j(this).hasClass("bubble--picto")?$j(this).height()/4:$j(this).height()/2,e=parseInt($j(this).children().css("padding-left"))+parseInt($j(this).children().css("paddingBottom"))+15;t=Math.min(e,t),$j(this).css({borderRadius:t})})},$j(".bubble").calcRadius(),$j(window).resize($j.debounce(function(t){$j(".bubble").calcRadius()},200))})},function(t,e){$j(document).ready(function(){$j.debounce=function(t,e,n){var r,u,i=function(e,n){r=null,n&&(u=t.apply(e,n))},o=function(t,e){return e=null==e?t.length-1:+e,function(){for(var n=Math.max(arguments.length-e,0),r=Array(n),u=0;u<n;u++)r[u]=arguments[u+e];switch(e){case 0:return t.call(this,r);case 1:return t.call(this,arguments[0],r);case 2:return t.call(this,arguments[0],arguments[1],r)}var i=Array(e+1);for(u=0;u<e;u++)i[u]=arguments[u];return i[e]=r,t.apply(this,i)}},c=o(function(t,e,n){return setTimeout(function(){return t.apply(null,n)},e)}),l=o(function(o){if(r&&clearTimeout(r),n){var l=!r;r=setTimeout(i,e),l&&(u=t.apply(this,o))}else r=c(i,e,this,o);return u});return l.cancel=function(){clearTimeout(r),r=null},l}})},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(3),n(1),n(0)}]);
//# sourceMappingURL=bubbles.js.map