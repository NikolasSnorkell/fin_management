import{s as Z,e as _,a as C,c as f,b as P,g as L,f as k,q as s,i as W,h as u,W as Q,Q as x,n as B,P as _e,r as fe,k as he,t as z,d as G,j as Y,l as F}from"../chunks/scheduler.Bz0nXMPT.js";import{S as ee,i as te,c as se,a as ae,m as re,t as ie,b as ne,d as ce}from"../chunks/index.B9e4esxZ.js";import{e as J,u as me,d as ge}from"../chunks/each.BluCadJt.js";import{w as we}from"../chunks/index.BJ3cgkgR.js";let K=ye([]);function ye(o){let e=1;const t=o,{subscribe:r,update:a}=we(t);return{subscribe:r,addItem:i=>{let l={id:e++,title:i.title,price:i.price,hashtags:i.hashtags};a(p=>[...p,l])},delItem:i=>{a(l=>l.filter(p=>p.id!=i))}}}function ue(o,e,t){const r=o.slice();return r[8]=e[t],r}function oe(o){let e,t=o[8]+"",r,a,i;return{c(){e=_("li"),r=z(t),this.h()},l(l){e=f(l,"LI",{class:!0});var p=P(e);r=G(p,t),p.forEach(k),this.h()},h(){s(e,"class","svelte-184416t")},m(l,p){W(l,e,p),u(e,r),a||(i=x(e,"click",o[4]),a=!0)},p(l,p){p&4&&t!==(t=l[8]+"")&&Y(r,t)},d(l){l&&k(e),a=!1,i()}}}function ke(o){let e,t,r,a,i,l,p,c,v,I,T=J(o[2]),d=[];for(let n=0;n<T.length;n+=1)d[n]=oe(ue(o,T,n));return{c(){e=_("div"),t=_("input"),r=C(),a=_("input"),i=C(),l=_("button"),p=C(),c=_("ul");for(let n=0;n<d.length;n+=1)d[n].c();this.h()},l(n){e=f(n,"DIV",{class:!0});var m=P(e);t=f(m,"INPUT",{type:!0,name:!0,id:!0,placeholder:!0,class:!0}),r=L(m),a=f(m,"INPUT",{type:!0,name:!0,id:!0,placeholder:!0,class:!0}),i=L(m),l=f(m,"BUTTON",{class:!0}),P(l).forEach(k),p=L(m),c=f(m,"UL",{id:!0,class:!0});var h=P(c);for(let g=0;g<d.length;g+=1)d[g].l(h);h.forEach(k),m.forEach(k),this.h()},h(){s(t,"type","text"),s(t,"name","purchase"),s(t,"id","input_purchase"),s(t,"placeholder","Add your purchases"),s(t,"class","svelte-184416t"),s(a,"type","text"),s(a,"name","purchase_price"),s(a,"id","input_price"),s(a,"placeholder","Price"),s(a,"class","svelte-184416t"),s(l,"class","svelte-184416t"),s(c,"id","maininput__suggest"),s(c,"class","svelte-184416t"),s(e,"class","main_input svelte-184416t")},m(n,m){W(n,e,m),u(e,t),Q(t,o[0]),u(e,r),u(e,a),Q(a,o[1]),u(e,i),u(e,l),u(e,p),u(e,c);for(let h=0;h<d.length;h+=1)d[h]&&d[h].m(c,null);v||(I=[x(t,"input",o[5]),x(a,"input",o[6]),x(l,"click",o[3])],v=!0)},p(n,[m]){if(m&1&&t.value!==n[0]&&Q(t,n[0]),m&2&&a.value!==n[1]&&Q(a,n[1]),m&20){T=J(n[2]);let h;for(h=0;h<T.length;h+=1){const g=ue(n,T,h);d[h]?d[h].p(g,m):(d[h]=oe(g),d[h].c(),d[h].m(c,null))}for(;h<d.length;h+=1)d[h].d(1);d.length=T.length}},i:B,o:B,d(n){n&&k(e),_e(d,n),v=!1,fe(I)}}}function be(o,e,t){let r,a;he(o,K,T=>t(7,a=T));let i="",l=null;function p(){!i||!l||(K.addItem({title:i,price:+l,hashtags:"#test"}),console.log(a),t(0,i=""),t(1,l=null))}function c(T){let d=T.target.innerHTML;if(d.includes(" - ")){let n=d.split(" - ");t(0,i=n[0]),t(1,l=n[1]),t(2,r=[])}}function v(){i=this.value,t(0,i)}function I(){l=this.value,t(1,l)}return o.$$.update=()=>{o.$$.dirty&1&&(i.length>2?t(2,r=["Молоко - 1.77","Творог - 1.77"]):i.length<2&&t(2,r=[]))},t(2,r=["Молоко - 1.77","Молоко - 1.77","Молоко - 1.77","Молоко - 1.77"]),[i,l,r,p,c,v,I]}class Ie extends ee{constructor(e){super(),te(this,e,be,ke,Z,{})}}function de(o,e,t){const r=o.slice();return r[5]=e[t],r}function pe(o){let e,t="Nothing here yet....";return{c(){e=_("p"),e.textContent=t,this.h()},l(r){e=f(r,"P",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-1rs164e"&&(e.textContent=t),this.h()},h(){s(e,"class","nothing_here svelte-cvvwpr")},m(r,a){W(r,e,a)},p:B,d(r){r&&k(e)}}}function ve(o,e){let t,r,a,i=e[5].title+"",l,p,c,v=e[5].price+"",I,T,d,n,m,h,g,N,S,M,$;function V(){return e[4](e[5])}return{key:o,first:null,c(){t=_("div"),r=_("div"),a=_("p"),l=z(i),p=C(),c=_("p"),I=z(v),T=C(),d=_("div"),n=_("input"),h=C(),g=_("button"),S=C(),this.h()},l(H){t=f(H,"DIV",{class:!0});var w=P(t);r=f(w,"DIV",{class:!0});var O=P(r);a=f(O,"P",{class:!0});var A=P(a);l=G(A,i),A.forEach(k),p=L(O),c=f(O,"P",{class:!0});var j=P(c);I=G(j,v),j.forEach(k),O.forEach(k),T=L(w),d=f(w,"DIV",{class:!0});var D=P(d);n=f(D,"INPUT",{type:!0,class:!0,placeholder:!0}),h=L(D),g=f(D,"BUTTON",{class:!0,id:!0}),P(g).forEach(k),D.forEach(k),S=L(w),w.forEach(k),this.h()},h(){s(a,"class","item_title"),s(c,"class","item_price"),s(r,"class","face svelte-cvvwpr"),s(n,"type","text"),s(n,"class","item_hashtags svelte-cvvwpr"),n.value=m=e[5].hashtags,s(n,"placeholder","(none)"),s(g,"class","item_delete svelte-cvvwpr"),s(g,"id",N="item_del_btn-"+e[5].id),s(d,"class","hovered svelte-cvvwpr"),s(t,"class","item svelte-cvvwpr"),this.first=t},m(H,w){W(H,t,w),u(t,r),u(r,a),u(a,l),u(r,p),u(r,c),u(c,I),u(t,T),u(t,d),u(d,n),u(d,h),u(d,g),u(t,S),M||($=x(g,"click",V),M=!0)},p(H,w){e=H,w&1&&i!==(i=e[5].title+"")&&Y(l,i),w&1&&v!==(v=e[5].price+"")&&Y(I,v),w&1&&m!==(m=e[5].hashtags)&&n.value!==m&&(n.value=m),w&1&&N!==(N="item_del_btn-"+e[5].id)&&s(g,"id",N)},d(H){H&&k(t),M=!1,$()}}}function Te(o){let e,t,r='<li class="svelte-cvvwpr"><input class="category_radio svelte-cvvwpr" type="radio" name="cat_options" id="cat_option1" value="Food"/> <label for="cat_option1" class="svelte-cvvwpr">Food</label></li> <li class="svelte-cvvwpr"><input class="category_radio svelte-cvvwpr" type="radio" name="cat_options" id="cat_option2" value="Others"/> <label for="cat_option2" class="svelte-cvvwpr">Others</label></li>',a,i,l=[],p=new Map,c,v,I,T='<input type="date" name="date" id="purchase_date" value="" class="svelte-cvvwpr"/>',d,n,m='<input type="text" id="purchase_market" placeholder="Market" class="svelte-cvvwpr"/>',h,g,N='<textarea id="commentary_area" placeholder="Comments here" class="svelte-cvvwpr"></textarea>',S,M,$,V,H,w,O="Add purchase",A,j,D=J(o[0]);const le=y=>y[5].id;for(let y=0;y<D.length;y+=1){let b=de(o,D,y),U=le(b);p.set(U,l[y]=ve(U,b))}let E=null;return D.length||(E=pe()),{c(){e=_("div"),t=_("ul"),t.innerHTML=r,a=C(),i=_("div");for(let y=0;y<l.length;y+=1)l[y].c();E&&E.c(),c=C(),v=_("div"),I=_("div"),I.innerHTML=T,d=C(),n=_("div"),n.innerHTML=m,h=C(),g=_("div"),g.innerHTML=N,S=C(),M=_("p"),$=z("Total: "),V=_("input"),H=C(),w=_("button"),w.textContent=O,this.h()},l(y){e=f(y,"DIV",{id:!0,class:!0});var b=P(e);t=f(b,"UL",{id:!0,class:!0,"data-svelte-h":!0}),F(t)!=="svelte-16qvx6d"&&(t.innerHTML=r),a=L(b),i=f(b,"DIV",{id:!0,class:!0});var U=P(i);for(let X=0;X<l.length;X+=1)l[X].l(U);E&&E.l(U),U.forEach(k),c=L(b),v=f(b,"DIV",{id:!0,class:!0});var q=P(v);I=f(q,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),F(I)!=="svelte-w5tb85"&&(I.innerHTML=T),d=L(q),n=f(q,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),F(n)!=="svelte-1vkgune"&&(n.innerHTML=m),h=L(q),g=f(q,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),F(g)!=="svelte-s4klr9"&&(g.innerHTML=N),S=L(q),M=f(q,"P",{id:!0,class:!0});var R=P(M);$=G(R,"Total: "),V=f(R,"INPUT",{type:!0,id:!0,class:!0}),R.forEach(k),H=L(q),w=f(q,"BUTTON",{type:!0,id:!0,class:!0,"data-svelte-h":!0}),F(w)!=="svelte-8pgwnf"&&(w.textContent=O),q.forEach(k),b.forEach(k),this.h()},h(){s(t,"id","add__category"),s(t,"class","svelte-cvvwpr"),s(i,"id","add__items"),s(i,"class","svelte-cvvwpr"),s(I,"id","date"),s(I,"class","svelte-cvvwpr"),s(n,"id","market"),s(n,"class","svelte-cvvwpr"),s(g,"id","commentary"),s(g,"class","svelte-cvvwpr"),s(V,"type","number"),s(V,"id","total_sum_input"),V.value=o[1],s(V,"class","svelte-cvvwpr"),s(M,"id","final_sum"),s(M,"class","svelte-cvvwpr"),s(w,"type","button"),s(w,"id","add_button"),s(w,"class","svelte-cvvwpr"),s(v,"id","add__others"),s(v,"class","svelte-cvvwpr"),s(e,"id","add__workspace"),s(e,"class","svelte-cvvwpr")},m(y,b){W(y,e,b),u(e,t),u(e,a),u(e,i);for(let U=0;U<l.length;U+=1)l[U]&&l[U].m(i,null);E&&E.m(i,null),u(e,c),u(e,v),u(v,I),u(v,d),u(v,n),u(v,h),u(v,g),u(v,S),u(v,M),u(M,$),u(M,V),u(v,H),u(v,w),A||(j=x(w,"click",o[3]),A=!0)},p(y,[b]){b&5&&(D=J(y[0]),l=me(l,b,le,1,y,D,p,i,ge,ve,null,de),!D.length&&E?E.p(y,b):D.length?E&&(E.d(1),E=null):(E=pe(),E.c(),E.m(i,null))),b&2&&V.value!==y[1]&&(V.value=y[1])},i:B,o:B,d(y){y&&k(e);for(let b=0;b<l.length;b+=1)l[b].d();E&&E.d(),A=!1,j()}}}function Ee(o,e,t){let r,a;he(o,K,c=>t(0,a=c));function i(c){K.delItem(c)}function l(){let c={};document.querySelectorAll(".category_radio").forEach(v=>{v.checked&&(c.category=v.value)}),c.items=a,c.date=document.querySelector("#purchase_date").value,c.marketplace=document.querySelector("#purchase_market").value,c.commentary=document.querySelector("#commentary_area").value,c.total_sum=document.querySelector("#total_sum_input").value,console.log(c)}const p=c=>i(c.id);return o.$$.update=()=>{o.$$.dirty&1&&t(1,r=a.reduce((c,v)=>c+v.price,0).toFixed(2))},[a,r,i,l,p]}class Pe extends ee{constructor(e){super(),te(this,e,Ee,Te,Z,{})}}function Ce(o){let e,t,r,a,i;return t=new Ie({}),a=new Pe({}),{c(){e=_("div"),se(t.$$.fragment),r=C(),se(a.$$.fragment),this.h()},l(l){e=f(l,"DIV",{id:!0,class:!0});var p=P(e);ae(t.$$.fragment,p),r=L(p),ae(a.$$.fragment,p),p.forEach(k),this.h()},h(){s(e,"id","add_container"),s(e,"class","svelte-1u6styh")},m(l,p){W(l,e,p),re(t,e,null),u(e,r),re(a,e,null),i=!0},p:B,i(l){i||(ie(t.$$.fragment,l),ie(a.$$.fragment,l),i=!0)},o(l){ne(t.$$.fragment,l),ne(a.$$.fragment,l),i=!1},d(l){l&&k(e),ce(t),ce(a)}}}class He extends ee{constructor(e){super(),te(this,e,null,Ce,Z,{})}}export{He as component};
