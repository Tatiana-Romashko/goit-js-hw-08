function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var o,i,r,u,a,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function h(e){return l=e,a=setTimeout(S,t),c?y(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function S(){var e=g();if(j(e))return w(e);a=setTimeout(S,function(e){var n=t-(e-f);return s?m(n,r-(e-l)):n}(e))}function w(e){return a=void 0,v&&o?y(e):(o=i=void 0,u)}function O(){var e=g(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===a)return h(f);if(s)return a=setTimeout(S,t),y(f)}return void 0===a&&(a=setTimeout(S,t)),u}return t=b(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=f=i=a=void 0},O.flush=function(){return void 0===a?u:w(g())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),h=document.querySelector('[name="email"]'),j=document.querySelector('[name="message"]');let S={};!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);if(!t)return;t.email&&(h.value=t.email);t.message&&(j.value=t.message);S=t,console.log("on load",S)}(),y.addEventListener("input",e(t)((function(){S={email:h.value,message:j.value},localStorage.setItem("feedback-form-state",JSON.stringify(S)),console.log("just input",S)}),500)),y.addEventListener("submit",(function(e){if(e.preventDefault(),0===h.value.length||0===j.value.length)return e.target.reset(),alert("All the fields should be filled");console.log("on submit",S),e.target.reset(),localStorage.clear()}));
//# sourceMappingURL=03-feedback.2b99bcc9.js.map
