!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=(e=100)=>{document.querySelector(".calc-block").querySelectorAll("input").forEach(e=>{e.addEventListener("input",()=>{null!==e.value.match(/[^0-9]/g)&&(e.value=e.value.slice(0,-1))})});const t=e=>{const t=document.getElementById("total");(({timing:e,draw:t,duration:n,elseFunc:o})=>{const r=performance.now();requestAnimationFrame((function c(a){let s=(a-r)/n;s>1&&(s=1);const l=e(s);t(l),s<1?requestAnimationFrame(c):o()}))})({duration:1e3,timing:e=>e,draw:n=>{t.textContent=Math.trunc(e*n)},elseFunc:()=>{}})},n=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),s=document.getElementById("total");n.addEventListener("change",n=>{const l=n.target;(l.matches("select")||l.matches("input"))&&(()=>{let n=0,l=1,i=1;const u=+r.value,d=o.options[o.selectedIndex].value;c.value>1&&(l+=(c.value-1)/10),a.value&&a.value<5?i=2:a.value&&a.value<10&&(i=1.5),n=d&&u?Math.trunc(e*d*u*l*i):0;t(n),s.textContent=n})()})};var r=()=>{const e=({timing:e,draw:t,duration:n,elseFunc:o})=>{const r=performance.now();requestAnimationFrame((function c(a){let s=(a-r)/n;s>1&&(s=1);const l=e(s);t(l),s<1?requestAnimationFrame(c):o()}))},t=()=>{const t=document.querySelector(".popup-content");e({duration:500,timing:e=>e,draw:e=>{(e=>{t.style.left=42*e+"%"})(e)},elseFunc:()=>cancelAnimationFrame(e)})},n=e=>{if("#service-block"===e.getAttribute("href")||"#portfolio"===e.getAttribute("href")||"#calc"===e.getAttribute("href")||"#command"===e.getAttribute("href")||"#connect"===e.getAttribute("href")||"images/scroll.svg"===e.getAttribute("src")){let t;event.preventDefault(),t="images/scroll.svg"===e.getAttribute("src")?e.closest("a").getAttribute("href").substr(1):e.getAttribute("href").substr(1),document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}};document.addEventListener("click",e=>{const o=e.target;(e=>{const n=document.querySelector(".popup-content"),o=document.querySelector(".popup");"popup"!==e.classList[0]&&"popup-close"!==e.classList[0]||(o.style.display="none",n.style.left="0%"),"btn form-btn popup-btn"===e.classList.value&&(o.style.display="block",!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&screen.width>786&&t())})(o),(e=>{const t=document.querySelector("menu");(e.closest(".menu")||e.closest("menu")&&null!==e.closest("a")||"active-menu"===t.classList[0]&&"active-menu"!==e.classList[0])&&t.classList.toggle("active-menu")})(o),(e=>{const t=document.querySelectorAll(".service-tab"),n=document.querySelector(".service-header").querySelectorAll(".service-header-tab");if(e.closest(".service-header-tab"))for(let o=0;o<t.length;o++)e.closest(".service-header-tab")===n[o]?(n[o].classList.add("active"),t[o].classList.remove("d-none")):(n[o].classList.remove("active"),t[o].classList.add("d-none"))})(o),n(o)})};var c=()=>{const e=({timing:e,draw:t,duration:n,elseFunc:o})=>{const r=performance.now();requestAnimationFrame((function c(a){let s=(a-r)/n;s>1&&(s=1);const l=e(s);t(l),s<1?requestAnimationFrame(c):o()}))},t=t=>{const n=()=>{const t=document.querySelectorAll(".skDiv");e({duration:2300,timing:e=>e,draw:n=>{(n=>{if(0!==t.length)for(let e=0,o=0,r=1;e<12;e++,o+=.4,r-=.1)t[e].style.left=30*Math.cos(6.28*n-o)+"px",t[e].style.top=30*Math.sin(6.28*n-o)+"px",t[e].style.opacity=r;else cancelAnimationFrame(e)})(n)},elseFunc:()=>{cancelAnimationFrame(e),n()}})};(()=>{const e=document.createElement("div");e.style="\n            height: 100px;\n            width: 100px;\n            margin-top: 30px;\n            border-radius: 50%;\n            margin-left: 49%;\n            position: relative;",e.className="skWave",t.append(e);for(let t=0;t<12;t++){const n=document.createElement("div");n.className="skDiv "+(t+1),n.style="\n                margin: 10px;\n                background-color: #19B5FE;\n                height: 8px;\n                width: 8px;\n                border-radius: 50%;\n                display: inline-block;\n                position: absolute;\n                ",e.appendChild(n)}})(),n()},n=[document.getElementById("form1"),document.getElementById("form2"),document.getElementById("form3")],o=document.createElement("div");o.style.cssText="font-size: 2rem",o.className="statusMessage";n.forEach(e=>{e.addEventListener("submit",n=>{if(n.preventDefault(),(e=>{const t=e.querySelectorAll("input");for(let e=0;e<t.length;e++)if(t[e].classList.contains("ValError"))return!0})(e))return;const r=e.querySelectorAll("input");document.querySelector(".statusMessage")&&document.querySelector(".statusMessage").remove(),t(e);const c=new FormData(e);r.forEach(e=>{e.value=""});const a=()=>{document.querySelector(".skWave").remove()},s=(e,t)=>{o.textContent=t,e.appendChild(o)};(e=>fetch("./server.php",{method:"POST",body:e}))(c).then(t=>{if(200!==t.status)throw new Error("status network not 200");a(),s(e,"Спасибо, мы скоро с вами свяжемся")}).catch(t=>{a(),s(e,"Что то пошло не так"),console.error(t)})})})};var a=()=>{const e=document.querySelectorAll(".portfolio-item"),t=document.querySelector(".portfolio-content"),n=document.querySelector(".portfolio-dots");let o=0,r=0;e.forEach((e,t)=>{const o=document.createElement("li");0===t?o.setAttribute("class","dot dot-active"):o.setAttribute("class","dot"),n.append(o)});const c=document.querySelectorAll(".dot"),a=(e,t,n)=>{e[t].classList.remove(n)},s=(e,t,n)=>{e[t].classList.add(n)},l=()=>{a(e,o,"portfolio-item-active"),a(c,o,"dot-active"),o++,o>=e.length&&(o=0),s(e,o,"portfolio-item-active"),s(c,o,"dot-active")},i=(e=3e3)=>{r=setInterval(l,e)};t.addEventListener("click",t=>{t.preventDefault();const n=t.target;n.matches(".portfolio-btn, .dot")&&(a(e,o,"portfolio-item-active"),a(c,o,"dot-active"),n.matches("#arrow-right")?o++:n.matches("#arrow-left")?o--:n.matches(".dot")&&c.forEach((e,t)=>{e===n&&(o=t)}),o>=e.length&&(o=0),o<0&&(o=e.length-1),s(e,o,"portfolio-item-active"),s(c,o,"dot-active"))}),i(1500),t.addEventListener("mouseover",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(r)}),t.addEventListener("mouseout",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&i(1500)});(()=>{let e;document.querySelectorAll(".command__photo").forEach(t=>{t.addEventListener("mouseenter",()=>{e=event.target.src,event.target.src=event.target.dataset.img,event.target.dataset.img=e}),t.addEventListener("mouseleave",()=>{e=event.target.src,event.target.src=event.target.dataset.img,event.target.dataset.img=e})})})()};var s=()=>{const e=document.querySelectorAll('[name="user_name"]'),t=/[^а-яё ]/i,n=document.querySelector('[name="user_message"]'),o=document.querySelectorAll('[name="user_phone"]'),r=(e,t)=>{t.test(e.value)?(e.style.color="red",e.classList.add("ValError")):(e.style.color="black",e.classList.remove("ValError"))},c=(e,t)=>{e.forEach(e=>{e.addEventListener("input",()=>{r(e,t)})})};n.addEventListener("input",()=>{r(n,t)}),c(e,t),c(o,/[^0-9+]/)};(e=>{const t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds"),r=e=>e<10?"0"+e:e,c=setInterval(a,1e3);function a(){const a=(()=>{const t=(new Date(e).getTime()-(new Date).getTime())/1e3,n=r(Math.floor(t%60)),o=r(Math.floor(t/60%60));return{timeRemaining:t,hours:r(Math.floor(t/60/60)%24),minutes:o,seconds:n}})();isNaN(+a.hours)?(t.textContent="00",n.textContent="00",o.textContent="00",clearInterval(c)):(t.textContent=a.hours,n.textContent=a.minutes,o.textContent=a.seconds)}a()})("30 july 2020"),r(),a(),o(100),s(),c()}]);