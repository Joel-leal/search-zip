(this["webpackJsonpsearch-zip"]=this["webpackJsonpsearch-zip"]||[]).push([[0],{10:function(e,c,n){},12:function(e,c,n){"use strict";n.r(c);var t=n(1),a=n.n(t),o=n(5),r=n.n(o),i=(n(10),n(2)),s=(n(4),n(0));var l=function(e){var c=e.onClose,n=void 0===c?function(){}:c,a=e.zip,o=void 0===a?"":a,r=e.id,l=void 0===r?"modal":r,d=Object(t.useState)(""),u=Object(i.a)(d,2),j=u[0],b=u[1],h=Object(t.useState)({cep:"carregando...",logradouro:"carregando...",complemento:"carregando...",bairro:"carregando...",localidade:"carregando...",uf:"carregando...",ibge:"carregando...",gia:"carregando...",ddd:"carregando...",siafi:"carregando..."}),g=Object(i.a)(h,2),f=g[0],O=g[1];return Object(t.useEffect)((function(){fetch("https://viacep.com.br/ws/".concat(o,"/json/")).then((function(e){return e.json()})).then((function(e){return O(e)})).catch((function(e){return b("".concat(o," n\xe3o encontrado"))}))}),[o]),Object(s.jsx)("div",{id:l,className:"container",onClick:function(e){(e.target.id=l)&&n()},children:Object(s.jsxs)("div",{className:"modal",onClick:function(e){e.stopPropagation()},children:[Object(s.jsxs)("div",{className:"info",children:[Object(s.jsxs)("label",{className:"logradouro",children:["Logradouro: ",f.logradouro]}),Object(s.jsxs)("label",{className:"bairro",children:["Bairro: ",f.bairro]}),Object(s.jsxs)("label",{className:"cidade",children:["Cidade: ",f.localidade]}),Object(s.jsxs)("label",{className:"uf",children:["UF: ",f.uf]})]}),Object(s.jsx)("iframe",{width:"600",height:"500",title:"busca",style:{border:"none"},loading:"lazy",allowFullScreen:!0,src:"https://www.google.com/maps/embed/v1/place?q=".concat(o,"&key=AIzaSyDaMzkE0Xlo_PeFAgEb0CYvV461AMf5J1k")}),Object(s.jsx)("p",{children:j}),Object(s.jsx)("button",{className:"close",onClick:n,children:"X"})]})})};var d=function(){var e=Object(t.useState)(!1),c=Object(i.a)(e,2),n=c[0],a=c[1],o=Object(t.useState)(""),r=Object(i.a)(o,2),d=r[0],u=r[1],j=8===d.length;return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Localizando"}),Object(s.jsx)("div",{children:"Digite o CEP"}),Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"text",name:"name",value:d,onChange:function(e){return u(e.target.value)}}),Object(s.jsxs)("button",{onClick:function(){return a(!0)},disabled:!j,children:[" ","Pesquisar"," "]})]}),n?Object(s.jsx)(l,{zip:d,onClose:function(){return a(!1)}}):null]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(c){var n=c.getCLS,t=c.getFID,a=c.getFCP,o=c.getLCP,r=c.getTTFB;n(e),t(e),a(e),o(e),r(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),u()},4:function(e,c,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.e4855127.chunk.js.map