(function(r,c){typeof exports=="object"&&typeof module<"u"?module.exports=c():typeof define=="function"&&define.amd?define(c):(r=typeof globalThis<"u"?globalThis:r||self,r.masquesDirectives=c())})(this,function(){"use strict";var U=Object.defineProperty;var J=(r,c,a)=>c in r?U(r,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[c]=a;var O=(r,c,a)=>(J(r,typeof c!="symbol"?c+"":c,a),a);const c=Object.freeze(Object.defineProperty({__proto__:null,default:{mounted(e,t){const o=`.${t.arg}`,l=Array.from(document.querySelectorAll(o));document.addEventListener("click",s=>{l.some(n=>n.contains(s.target))||e.contains(s.target)||(t.value||function(){e.style.display="none"})()},!1)},unmounted(){document.removeEventListener("click",()=>{})}}},Symbol.toStringTag,{value:"Module"})),j=Object.freeze(Object.defineProperty({__proto__:null,default:{beforeMount(e,t){e.targetContent=t.value,e.addEventListener("click",()=>{if(!e.targetContent)return console.warn("没有需要复制的目标内容");const o=document.createElement("textarea");o.readOnly=!0,o.style.position="fixed",o.style.top="-99999px",o.value=e.targetContent,document.body.appendChild(o),o.select();const l=document.execCommand("Copy"),s=t.arg;l&&s?s(e.targetContent):console.log("复制内容："+e.targetContent),document.body.removeChild(o)})},updated(e,t){e.targetContent=t.value},unmounted(e){e.removeEventListener("click",()=>{})}}},Symbol.toStringTag,{value:"Module"})),w=Object.freeze(Object.defineProperty({__proto__:null,default:{mounted(e,t){let o=null,l;t.arg===void 0?l=1e3:l=parseInt(t.arg),e.addEventListener("click",()=>{o&&clearTimeout(o),o||t.value(),o=setTimeout(()=>{o=null},l)})}}},Symbol.toStringTag,{value:"Module"})),E={mounted(e,t){e.style.cursor="move",e.style.position="fixed";const o=t.arg||null;let l=window.innerWidth-M(),s=window.innerHeight;if(o){const n=document.getElementById(o);if(n===null)return;const{width:d,height:i}=n.getBoundingClientRect();l=d,s=i,["fixed","absolute","relative"].includes(T(n,"position"))||(n.style.position="relative"),e.style.position="absolute"}e.addEventListener("mousedown",n=>{const{width:d,height:i}=e.getBoundingClientRect(),u=e.offsetLeft,f=e.offsetTop,X=n.clientX,q=n.clientY,b=u,h=l-u-d,x=f,S=s-f-i;document.onmousemove=v=>{const _=v.clientX-X,m=v.clientY-q;return _<0&&_<=-b?e.style.left=u-b+"px":_>0&&_>=h?e.style.left=u+h+"px":e.style.left=u+_+"px",m<0&&m<=-x?e.style.top=f-x+"px":m>0&&m>=S?e.style.top=f+S+"px":e.style.top=f+m+"px",t==null||t.value(v),!1},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})}};function T(e,t){return e.currentStyle?e.currentStyle[t]:window.getComputedStyle(e,null)[t]}function M(){const e=document.createElement("DIV");e.style.cssText="position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;";const t=document.body.appendChild(e).clientWidth;e.style.overflowY="scroll";const o=e.clientWidth;return document.body.removeChild(e),document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)?t-o:0}const L=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),C=Object.freeze(Object.defineProperty({__proto__:null,default:{mounted(e,t){e.style.position="fixed";const o=t.arg||"top";e.style[o]=t.value+"px"},updated(e,t){const o=t.arg||"top";e.style[o]=t.value+"px"}}},Symbol.toStringTag,{value:"Module"})),k=Object.freeze(Object.defineProperty({__proto__:null,default:{mounted(e){e.focus()}}},Symbol.toStringTag,{value:"Module"})),I={mounted(e,t){e.addEventListener("scroll",()=>{var n;const o=e.clientHeight,l=Math.round(e.scrollTop),s=e.scrollHeight;P(o,l,s)&&((n=t.value)==null||n.call(t))})},unmounted(e){e.removeEventListener("scroll",()=>{})}};function P(e,t,o){return[e+t,e+t+1,e+t-1].indexOf(o)!==-1}const z=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),H=Object.freeze(Object.defineProperty({__proto__:null,default:{beforeMount(e,t){e.$data_src=t.value},mounted(e){const t=new IntersectionObserver(o=>{const l=e.$data_src;o[0].isIntersecting&&l&&(e.src=l)});e.$io=t,t.observe(e)},updated(e,t){e.$data_src=t.value},unmounted(e){e.$io.disconnect()}}},Symbol.toStringTag,{value:"Module"})),A=Object.freeze(Object.defineProperty({__proto__:null,default:{mounted(e,t){if(typeof t.value!="function")throw"callback must be a function";let o=null,l;t.arg?l=parseInt(t.arg):l=1500;const s=i=>{i.type!=="click"&&o===null&&(o=setTimeout(u=>{d(u)},l))},n=()=>{o!==null&&(clearTimeout(o),o=null)},d=i=>{t.value(i)};e.addEventListener("mousedown",s),e.addEventListener("touchstart",s),e.addEventListener("click",n),e.addEventListener("mouseout",n),e.addEventListener("touchend",n),e.addEventListener("touchcancel",n)}}},Symbol.toStringTag,{value:"Module"})),W={async beforeMount(e,t){g(e,t)},async updated(e,t){g(e,t)}};async function g(e,t){if(t.value===e.src)return;const o=t.value;o&&!await $(e.src)&&e.setAttribute("src",o)}function $(e){return new Promise(t=>{let o=new Image;o.src=e,o.onload=()=>{o&&o.complete&&(t(!0),o=null)},o.onerror=()=>{t(!1),o=null}})}const D=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),R={mounted(e,t){Y(t.value.text,e,t.value.font,t.value.textColor)}};function Y(e,t,o,l){const s=document.createElement("canvas");t.appendChild(s),s.width=200,s.height=150,s.style.display="none";const n=s.getContext("2d");n&&(n.rotate(-20*Math.PI/180),n.font=o||"16px Microsoft JhengHei",n.fillStyle=l||"rgba(180, 180, 180, 0.3)",n.textAlign="left",n.textBaseline="Middle",n.fillText(e,s.width/10,s.height/2),t.style.backgroundImage="url("+s.toDataURL("image/png")+")")}const y=Object.assign({"./directive/clickoutside.ts":c,"./directive/copy.ts":j,"./directive/debounce.ts":w,"./directive/draggable.ts":L,"./directive/fixed.ts":C,"./directive/focus.ts":k,"./directive/infinite-scroll.ts":z,"./directive/lazy-img.ts":H,"./directive/longpress.ts":A,"./directive/real-img.ts":D,"./directive/waterMarker.ts":Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}))}),p={};Object.keys(y).forEach(e=>{const t=e.split("/")[2].slice(0,-3);p[t]=y[e].default});class B{constructor(t){O(this,"options");this.options=t}install(t){Object.keys(p).forEach(o=>{t.directive(o,p[o])})}}return B});