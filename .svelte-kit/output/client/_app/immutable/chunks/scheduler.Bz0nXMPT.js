function S(){}function C(t,n){for(const e in n)t[e]=n[e];return t}function P(t){return t()}function J(){return Object.create(null)}function B(t){t.forEach(P)}function K(t){return typeof t=="function"}function Q(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function R(t){return Object.keys(t).length===0}function D(t,...n){if(t==null){for(const i of n)i(void 0);return S}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function V(t,n,e){t.$$.on_destroy.push(D(n,e))}function X(t,n,e,i){if(t){const l=w(t,n,e,i);return t[0](l)}}function w(t,n,e,i){return t[1]&&i?C(e.ctx.slice(),t[1](i(n))):e.ctx}function Y(t,n,e,i){if(t[2]&&i){const l=t[2](i(e));if(n.dirty===void 0)return l;if(typeof l=="object"){const s=[],c=Math.max(n.dirty.length,l.length);for(let u=0;u<c;u+=1)s[u]=n.dirty[u]|l[u];return s}return n.dirty|l}return n.dirty}function Z(t,n,e,i,l,s){if(l){const c=w(n,e,i,s);t.p(c,l)}}function $(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let m=!1;function tt(){m=!0}function nt(){m=!1}function L(t,n,e,i){for(;t<n;){const l=t+(n-t>>1);e(l)<=i?t=l+1:n=l}return t}function M(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<n.length;a++){const o=n[a];o.claim_order!==void 0&&r.push(o)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let l=0;for(let r=0;r<n.length;r++){const a=n[r].claim_order,o=(l>0&&n[e[l]].claim_order<=a?l+1:L(1,l,j=>n[e[j]].claim_order,a))-1;i[r]=e[o]+1;const k=o+1;e[k]=r,l=Math.max(k,l)}const s=[],c=[];let u=n.length-1;for(let r=e[l]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);u>=r;u--)c.push(n[u]);u--}for(;u>=0;u--)c.push(n[u]);s.reverse(),c.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<c.length;r++){for(;a<s.length&&c[r].claim_order>=s[a].claim_order;)a++;const o=a<s.length?s[a]:null;t.insertBefore(c[r],o)}}function O(t,n){if(m){for(M(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function et(t,n,e){m&&!e?O(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function it(t){t.parentNode&&t.parentNode.removeChild(t)}function lt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function T(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function ct(){return x(" ")}function rt(){return x("")}function ut(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function st(t){return function(n){return n.preventDefault(),t.call(this,n)}}function at(t){return function(n){n.target===this&&t.call(this,n)}}function ot(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function ft(t){return t.dataset.svelteH}function _t(t){return Array.from(t.childNodes)}function q(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function N(t,n,e,i,l=!1){q(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(n(u)){const r=e(u);return r===void 0?t.splice(c,1):t[c]=r,l||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(n(u)){const r=e(u);return r===void 0?t.splice(c,1):t[c]=r,l?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function H(t,n,e,i){return N(t,l=>l.nodeName===n,l=>{const s=[];for(let c=0;c<l.attributes.length;c++){const u=l.attributes[c];e[u.name]||s.push(u.name)}s.forEach(c=>l.removeAttribute(c))},()=>i(n))}function dt(t,n,e){return H(t,n,e,T)}function I(t,n){return N(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>x(n),!0)}function ht(t){return I(t," ")}function mt(t,n){n=""+n,t.data!==n&&(t.data=n)}function pt(t,n){t.value=n??""}function bt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function yt(t,n,e){t.classList.toggle(n,!!e)}function z(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function gt(t,n){return new t(n)}let h;function p(t){h=t}function v(){if(!h)throw new Error("Function called outside component initialization");return h}function xt(t){v().$$.on_mount.push(t)}function vt(t){v().$$.after_update.push(t)}function kt(){const t=v();return(n,e,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[n];if(l){const s=z(n,e,{cancelable:i});return l.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}const d=[],E=[];let _=[];const y=[],A=Promise.resolve();let g=!1;function F(){g||(g=!0,A.then(W))}function Et(){return F(),A}function U(t){_.push(t)}function wt(t){y.push(t)}const b=new Set;let f=0;function W(){if(f!==0)return;const t=h;do{try{for(;f<d.length;){const n=d[f];f++,p(n),G(n.$$)}}catch(n){throw d.length=0,f=0,n}for(p(null),d.length=0,f=0;E.length;)E.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];b.has(e)||(b.add(e),e())}_.length=0}while(d.length);for(;y.length;)y.pop()();g=!1,b.clear(),p(t)}function G(t){if(t.fragment!==null){t.update(),B(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(U)}}function Nt(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{$ as A,Y as B,J as C,W as D,K as E,R as F,U as G,Nt as H,h as I,p as J,P as K,d as L,F as M,tt as N,nt as O,lt as P,ut as Q,yt as R,at as S,st as T,kt as U,wt as V,pt as W,ct as a,_t as b,dt as c,I as d,T as e,it as f,ht as g,O as h,et as i,mt as j,V as k,ft as l,rt as m,S as n,vt as o,xt as p,ot as q,B as r,Q as s,x as t,bt as u,E as v,gt as w,Et as x,X as y,Z as z};
