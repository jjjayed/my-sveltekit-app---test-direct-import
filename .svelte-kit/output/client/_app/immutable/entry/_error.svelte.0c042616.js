import{S as A,i as B,s as D,k as S,q as p,a as x,l as k,m as I,r as u,h as a,c as y,b as v,E as m,u as L,L as z,I as F}from"../chunks/index.c9973389.js";import{p as G}from"../chunks/stores.69002488.js";function J(f){var j,w;let r,n,l,s,_=f[0].status+"",d,H,c=((j=f[0].error)==null?void 0:j.message)+"",E,b,o,q,h=((w=f[0].error)==null?void 0:w.code)+"",C;return{c(){r=S("h1"),n=p("+error.svelte routes folder"),l=x(),s=S("h2"),d=p(_),H=p(": "),E=p(c),b=x(),o=S("h3"),q=p("Code: "),C=p(h)},l(e){r=k(e,"H1",{});var t=I(r);n=u(t,"+error.svelte routes folder"),t.forEach(a),l=y(e),s=k(e,"H2",{});var $=I(s);d=u($,_),H=u($,": "),E=u($,c),$.forEach(a),b=y(e),o=k(e,"H3",{});var i=I(o);q=u(i,"Code: "),C=u(i,h),i.forEach(a)},m(e,t){v(e,r,t),m(r,n),v(e,l,t),v(e,s,t),m(s,d),m(s,H),m(s,E),v(e,b,t),v(e,o,t),m(o,q),m(o,C)},p(e,[t]){var $,i;t&1&&_!==(_=e[0].status+"")&&L(d,_),t&1&&c!==(c=(($=e[0].error)==null?void 0:$.message)+"")&&L(E,c),t&1&&h!==(h=((i=e[0].error)==null?void 0:i.code)+"")&&L(C,h)},i:z,o:z,d(e){e&&a(r),e&&a(l),e&&a(s),e&&a(b),e&&a(o)}}}function K(f,r,n){let l;return F(f,G,s=>n(0,l=s)),[l]}class O extends A{constructor(r){super(),B(this,r,K,J,D,{})}}export{O as default};