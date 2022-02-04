(this.webpackJsonpcriando_um_hook_de_carrinho_de_compras=this.webpackJsonpcriando_um_hook_de_carrinho_de_compras||[]).push([[0],{76:function(n,t,e){"use strict";e.r(t);var r,c=e(0),a=e.n(c),o=e(23),i=e.n(o),d=e(14),s=e(13),u=e(3),b=e(12),l=e.n(b),p=e(20),x=e(10),j=e(25),h=e(11),f=e(8),m=e(9),g=e(17),O=m.b.ul(r||(r=Object(f.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));\n  gap: 1rem;\n  list-style: none;\n\n  li {\n    display: flex;\n    flex-direction: column;\n    background: #fff;\n    border-radius: 4px;\n    padding: 1rem;\n\n    img {\n      align-self: center;\n      max-width: 250px;\n    }\n\n    @media (max-width: 720px) {\n      img {\n        align-self: center;\n        max-width: 200px;\n      }\n    }\n\n    > strong {\n      font-size: 16px;\n      line-height: 20px;\n      color: #333;\n      margin-top: 5px;\n    }\n\n    > span {\n      font-size: 21px;\n      font-weight: bold;\n      margin: 5px 0 20px;\n    }\n\n    button {\n      background: #7159c1;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      overflow: hidden;\n      margin-top: auto;\n\n      display: flex;\n      align-items: center;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n\n      div {\n        display: flex;\n        align-items: center;\n        padding: 12px;\n        background: rgba(0, 0, 0, 0.1);\n\n        svg {\n          margin-right: 5px;\n        }\n      }\n\n      span {\n        flex: 1;\n        text-align: center;\n        font-weight: bold;\n      }\n    }\n  }\n"])),Object(g.a)(.06,"#7159c1")),v=e(44),y=e.n(v).a.create({baseURL:"http://localhost:3333"}),k=new Intl.NumberFormat("pt-br",{style:"currency",currency:"BRL"}).format,w=e(26),z=e(1),F=Object(c.createContext)({});function C(n){var t,e=n.children,r=Object(c.useState)((function(){var n=localStorage.getItem("@RocketShoes:cart");return n?JSON.parse(n):[]})),a=Object(j.a)(r,2),o=a[0],i=a[1],d=Object(c.useRef)();Object(c.useEffect)((function(){d.current=o}));var u=null!==(t=d.current)&&void 0!==t?t:o;Object(c.useEffect)((function(){u!==o&&localStorage.setItem("@RocketShoes:cart",JSON.stringify(o))}),[o,u]);var b=function(){var n=Object(p.a)(l.a.mark((function n(t){var e,r,c,a,d,u,b;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=Object(w.a)(o),r=e.find((function(n){return n.id===t})),n.next=5,y.get("/stock/".concat(t));case 5:if(c=n.sent.data.amount,a=r?r.amount:0,!((d=a+1)>c)){n.next=11;break}return s.b.error("Quantidade solicitada fora de estoque"),n.abrupt("return");case 11:if(!r){n.next=15;break}r.amount=d,n.next=22;break;case 15:return n.next=17,y.get("/products/".concat(t));case 17:return n.next=19,n.sent.data;case 19:u=n.sent,b=Object(x.a)(Object(x.a)({},u),{},{amount:1}),e.push(b);case 22:i(e),n.next=28;break;case 25:n.prev=25,n.t0=n.catch(0),s.b.error("Erro na adi\xe7\xe3o do produto");case 28:case"end":return n.stop()}}),n,null,[[0,25]])})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=Object(p.a)(l.a.mark((function n(t){var e,r,c,a,d,u;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.productId,r=t.amount,n.prev=1,!(r<=0)){n.next=4;break}return n.abrupt("return");case 4:return n.next=6,y.get("/stock/".concat(e));case 6:if(c=n.sent,a=c.data.amount,!(r>a)){n.next=11;break}return s.b.error("Quantidade solicitade fora de estoque"),n.abrupt("return");case 11:if(d=Object(w.a)(o),!(u=d.find((function(n){return n.id===e})))){n.next=18;break}u.amount=r,i(d),n.next=19;break;case 18:throw Error();case 19:n.next=24;break;case 21:n.prev=21,n.t0=n.catch(1),s.b.error("Erro na altera\xe7\xe3o de quantidade do produto");case 24:case"end":return n.stop()}}),n,null,[[1,21]])})));return function(t){return n.apply(this,arguments)}}();return Object(z.jsx)(F.Provider,{value:{cart:o,addProduct:b,removeProduct:function(n){try{var t=Object(w.a)(o),e=t.findIndex((function(t){return t.id===n}));if(!(e>=0))throw Error();t.splice(e,1),i(t)}catch(r){s.b.error("Erro na remo\xe7\xe3o do produto")}},updateProductAmount:h},children:e})}function I(){return Object(c.useContext)(F)}var _,R,S,P,T,E,A=function(){var n=Object(c.useState)([]),t=Object(j.a)(n,2),e=t[0],r=t[1],a=I(),o=a.addProduct,i=a.cart.reduce((function(n,t){var e=Object(x.a)({},n);return e[t.id]=t.amount,e}),{});return Object(c.useEffect)((function(){function n(){return(n=Object(p.a)(l.a.mark((function n(){var t,e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.get("/products");case 2:t=n.sent.data,e=t.map((function(n){return Object(x.a)(Object(x.a)({},n),{},{priceFormatted:k(n.price)})})),r(e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),Object(z.jsx)(O,{children:e.map((function(n){return Object(z.jsxs)("li",{children:[Object(z.jsx)("img",{src:n.image,alt:n.title}),Object(z.jsx)("strong",{children:n.title}),Object(z.jsx)("span",{children:n.priceFormatted}),Object(z.jsxs)("button",{type:"button","data-testid":"add-product-button",onClick:function(){return t=n.id,void o(t);var t},children:[Object(z.jsxs)("div",{"data-testid":"cart-product-quantity",children:[Object(z.jsx)(h.b,{size:16,color:"#FFF"}),i[n.id]||0]}),Object(z.jsx)("span",{children:"ADICIONAR AO CARRINHO"})]})]},n.id)}))})},L=m.b.div(_||(_=Object(f.a)(["\n  padding: 30px;\n  background: #fff;\n  border-radius: 4px;\n\n  footer {\n    margin-top: 30px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    button {\n      background: #7159c1;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      padding: 12px 20px;\n      font-weight: bold;\n      text-transform: uppercase;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n    }\n  }\n  @media (max-width: 720px) {\n    footer {\n      flex-direction: column;\n\n      button {\n        order: 1;\n        margin-top: 1rem;\n        width: 100%;\n      }\n    }\n  }\n"])),Object(g.a)(.06,"#7159c1")),N=m.b.table(R||(R=Object(f.a)(["\n  width: 100%;\n\n  thead th {\n    color: #999;\n    text-align: left;\n    padding: 12px;\n  }\n\n  tbody td {\n    padding: 12px;\n    border-bottom: 1px solid #eee;\n  }\n\n  img {\n    height: 100px;\n  }\n\n  strong {\n    color: #333;\n    display: block;\n  }\n\n  span {\n    display: block;\n    margin-top: 5px;\n    font-size: 18px;\n    font-weight: bold;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n\n    input {\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      color: #666;\n      padding: 6px;\n      width: 50px;\n    }\n  }\n\n  button {\n    background: none;\n    border: 0;\n    padding: 6px;\n\n    svg {\n      color: #7159c1;\n      transition: color 0.2s;\n    }\n\n    &:hover {\n      svg {\n        color: ",";\n      }\n    }\n\n    &:disabled {\n      svg {\n        color: ",";\n        cursor: not-allowed;\n      }\n    }\n  }\n\n  @media (max-width: 720px) {\n    display: flex;\n\n    thead,\n    tbody,\n    th,\n    td,\n    tr {\n      display: block;\n    }\n\n    thead {\n      position: absolute;\n      top: -9999px;\n      left: -9999px;\n      width: 0;\n    }\n\n    tbody {\n      width: 100%;\n\n      tr {\n        display: grid;\n        place-items: center;\n        border-bottom: 1px solid #333;\n\n        td {\n          padding: 0 0 0.75rem;\n          border: 0;\n          text-align: center;\n\n          strong {\n            font-size: 1.25rem;\n          }\n\n          img {\n            height: auto;\n            width: 100%;\n          }\n        }\n      }\n    }\n  }\n"])),Object(g.a)(.06,"#7159c1"),Object(g.b)(.25,"#7159c1")),q=m.b.div(S||(S=Object(f.a)(["\n  display: flex;\n  align-items: baseline;\n\n  span {\n    color: #999;\n    font-weight: bold;\n  }\n\n  strong {\n    font-size: 28px;\n    margin-left: 5px;\n  }\n"]))),B=function(){var n=I(),t=n.cart,e=n.removeProduct,r=n.updateProductAmount,c=t.map((function(n){return Object(x.a)(Object(x.a)({},n),{},{priceFormatted:k(n.price),subTotal:k(n.price*n.amount)})})),a=k(t.reduce((function(n,t){return n+=t.price*t.amount}),0));return Object(z.jsxs)(L,{children:[Object(z.jsxs)(N,{children:[Object(z.jsx)("thead",{children:Object(z.jsxs)("tr",{children:[Object(z.jsx)("th",{"aria-label":"product image"}),Object(z.jsx)("th",{children:"PRODUTO"}),Object(z.jsx)("th",{children:"QTD"}),Object(z.jsx)("th",{children:"SUBTOTAL"}),Object(z.jsx)("th",{"aria-label":"delete icon"})]})}),Object(z.jsx)("tbody",{children:c.map((function(n){return Object(z.jsxs)("tr",{"data-testid":"product",children:[Object(z.jsx)("td",{children:Object(z.jsx)("img",{src:n.image,alt:n.title})}),Object(z.jsxs)("td",{children:[Object(z.jsx)("strong",{children:n.title}),Object(z.jsx)("span",{children:k(n.price)})]}),Object(z.jsx)("td",{children:Object(z.jsxs)("div",{children:[Object(z.jsx)("button",{type:"button","data-testid":"decrement-product",disabled:n.amount<=1,onClick:function(){return function(n){r({productId:n.id,amount:n.amount-1})}(n)},children:Object(z.jsx)(h.d,{size:20})}),Object(z.jsx)("input",{type:"text","data-testid":"product-amount",readOnly:!0,value:n.amount}),Object(z.jsx)("button",{type:"button","data-testid":"increment-product",onClick:function(){return function(n){r({productId:n.id,amount:n.amount+1})}(n)},children:Object(z.jsx)(h.a,{size:20})})]})}),Object(z.jsx)("td",{children:Object(z.jsx)("strong",{children:n.subTotal})}),Object(z.jsx)("td",{children:Object(z.jsx)("button",{type:"button","data-testid":"remove-product",onClick:function(){return t=n.id,void e(t);var t},children:Object(z.jsx)(h.c,{size:20})})})]},n.id)}))})]}),Object(z.jsxs)("footer",{children:[Object(z.jsx)("button",{type:"button",children:"Finalizar pedido"}),Object(z.jsxs)(q,{children:[Object(z.jsx)("span",{children:"TOTAL"}),Object(z.jsx)("strong",{children:a})]})]})]})},D=function(){return Object(z.jsxs)(u.c,{children:[Object(z.jsx)(u.a,{path:"/",exact:!0,component:A}),Object(z.jsx)(u.a,{path:"/cart",component:B})]})},J=(e(75),e.p+"static/media/background.72f221ea.svg"),Q=Object(m.a)(P||(P=Object(f.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  @media (max-width: 1080px) {\n    html {\n      font-size: 93.75%;\n    }\n  }\n\n  @media (max-width: 720px) {\n    html {\n      font-size: 87.5%;\n    }\n  }\n\n  body {\n    background: #191920 url(",") no-repeat center top;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 14px Roboto, sans-serif;\n  }\n\n  #root {\n    max-width: 1020px;\n    margin: 0 auto;\n    padding: 0 20px 50px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"])),J),U=e.p+"static/media/logo.a865163d.svg",M=m.b.header(T||(T=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 2rem 0;\n\n  a {\n    transition: opacity 0.2s;\n\n    &:hover {\n      opacity: 0.7;\n    }\n\n    @media (max-width: 480px) {\n      img {\n        max-width: 45vw;\n      }\n    }\n  }\n"]))),H=Object(m.b)(d.b)(E||(E=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n\n  div {\n    text-align: right;\n    margin-right: 10px;\n\n    strong {\n      display: block;\n      color: #fff;\n    }\n\n    span {\n      font-size: 12px;\n      color: #999;\n    }\n\n    @media (max-width: 480px) {\n      margin-right: 6px;\n\n      strong {\n        display: none;\n      }\n\n      span {\n        font-size: 10px;\n      }\n    }\n  }\n"]))),G=function(){var n=I().cart.length;return Object(z.jsxs)(M,{children:[Object(z.jsx)(d.b,{to:"/",children:Object(z.jsx)("img",{src:U,alt:"Rocketshoes"})}),Object(z.jsxs)(H,{to:"/cart",children:[Object(z.jsxs)("div",{children:[Object(z.jsx)("strong",{children:"Meu carrinho"}),Object(z.jsx)("span",{"data-testid":"cart-size",children:"".concat(n,1===n?" item":" itens")})]}),Object(z.jsx)(h.e,{size:36,color:"#FFF"})]})]})},K=function(){return Object(z.jsx)(d.a,{children:Object(z.jsxs)(C,{children:[Object(z.jsx)(Q,{}),Object(z.jsx)(G,{}),Object(z.jsx)(D,{}),Object(z.jsx)(s.a,{autoClose:3e3})]})})},V=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,77)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),r(n),c(n),a(n),o(n)}))};i.a.render(Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(K,{})}),document.getElementById("root")),V()}},[[76,1,2]]]);
//# sourceMappingURL=main.d1176dff.chunk.js.map