(this["webpackJsonpreact-unsplash2v"]=this["webpackJsonpreact-unsplash2v"]||[]).push([[0],{25:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(13),r=n.n(s),o=(n(25),n(24)),i=n.n(o),l=n(34),u=n(12),j=n(35),h=n.n(j),p=n(91),d=n(88),b=n(3);var g=function(e){var t=e.setPhotoOpened,n=e.photo;return Object(b.jsxs)("div",{className:"overlay",children:[Object(b.jsx)("img",{className:"photoUrl",src:n,alt:"photourl"}),Object(b.jsx)("img",{className:"removeBtn",onClick:function(){return t(!1)},src:"img/btn-remove.svg",alt:"photoOpen"})]})},O=n(90);var m=function(){var e=c.a.useState(""),t=Object(u.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),r=Object(u.a)(s,2),o=r[0],j=r[1],m=c.a.useState([]),v=Object(u.a)(m,2),f=v[0],x=v[1],y=c.a.useState(),S=Object(u.a)(y,2),k=S[0],C=S[1],N=c.a.useState(!1),w=Object(u.a)(N,2),q=w[0],z=w[1],B=c.a.useState(),I=Object(u.a)(B,2),P=I[0],E=I[1],T=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,h.a.get("https://api.unsplash.com/search/photos?page=".concat(k,"&query=").concat(n,"&client_id=gLSSdfKNMYT6TQr4WU_bBzmf0r5FwHqRkgCqTd9I6Co&orientation=squarish&order_by=popular"));case 3:return t=e.sent,e.next=6,t.data;case 6:a=e.sent,console.log(f.length),x(a.results),console.log(a.total),j(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(e,t){C(t),T(n,t)};return c.a.useEffect((function(){T()}),[]),o?Object(b.jsx)("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(b.jsx)(d.a,{size:130})}):Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{onClick:function(){a(""),x([])},children:"Unsplash Photo Search"}),q&&Object(b.jsx)(g,{setPhotoOpened:z,photo:P}),Object(b.jsxs)("div",{className:"searchBlock",children:[Object(b.jsx)("input",{type:"text",value:n,placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&T()},onChange:function(e){return a(e.target.value)}}),Object(b.jsx)(O.a,{onClick:T,variant:"contained",children:"Send"})]}),f.length>0?Object(b.jsx)("div",{className:"pagination",children:Object(b.jsx)(p.a,{count:10,variant:"outlined",color:"primary",size:"large",onChange:U,page:k})}):null,Object(b.jsx)("div",{className:"gallery",children:f.map((function(e,t){return Object(b.jsx)("img",{onClick:function(){return function(e){E(e),z(!0)}(e.urls.regular)},className:"item",src:e.urls.small,alt:"galleryImg"},t)}))}),f.length>0?Object(b.jsx)("div",{className:"pagination",children:Object(b.jsx)(p.a,{count:10,variant:"outlined",color:"primary",size:"large",onChange:U,page:k})}):null]})};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.973aaf2b.chunk.js.map