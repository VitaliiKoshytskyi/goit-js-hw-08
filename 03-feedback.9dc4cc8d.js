var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,f=u||a||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return f.Date.now()};function m(e,t,n){var r,o,i,u,a,f,c=0,m=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function S(e){return c=e,a=setTimeout(j,t),m?y(e):u}function T(e){var n=e-f;return void 0===f||n>=t||n<0||g&&e-c>=i}function j(){var e=d();if(T(e))return O(e);a=setTimeout(j,function(e){var n=t-(e-f);return g?s(n,i-(e-c)):n}(e))}function O(e){return a=void 0,b&&r?y(e):(r=o=void 0,u)}function h(){var e=d(),n=T(e);if(r=arguments,o=this,f=e,n){if(void 0===a)return S(f);if(g)return a=setTimeout(j,t),y(f)}return void 0===a&&(a=setTimeout(j,t)),u}return t=p(t)||0,v(n)&&(m=!!n.leading,i=(g="maxWait"in n)?l(p(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=f=o=a=void 0},h.flush=function(){return void 0===a?u:O(d())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var u="function"==typeof e.valueOf?e.valueOf():e;e=v(u)?u+"":u}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var a=r.test(e);return a||o.test(e)?i(e.slice(2),a?2:8):n.test(e)?NaN:+e}const g=document.querySelector(".feedback-form"),b=document.querySelector("input"),y=document.querySelector("textarea"),S=T();function T(){const e=localStorage.getItem("feedback-form-state");return null===e?void 0:JSON.parse(e)}T(),function(){if(void 0===S)return;b.value=S.email,y.value=S.message}();g.addEventListener("input",(e=>{const t={email:e.currentTarget.elements.email.value,message:e.currentTarget.elements.message.value},n=JSON.stringify(t);localStorage.setItem("feedback-form-state",n)})),g.addEventListener("submit",(e=>{e.preventDefault(),console.log(localStorage.getItem("feedback-form-state")),e.currentTarget.reset(),localStorage.clear()}));
//# sourceMappingURL=03-feedback.9dc4cc8d.js.map
