(this["webpackJsonpgithub-emojis"]=this["webpackJsonpgithub-emojis"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),i=c.n(a),r=c(2),o=(c(9),c(0));var j=function(){var e=Object(n.useState)({}),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(r.a)(a,2),j=i[0],u=i[1],b=Object(n.useState)("1f999"),l=Object(r.a)(b,2),h=l[0],d=l[1];Object(n.useEffect)((function(){0===Object.keys(c).length&&fetch("https://api.github.com/emojis").then((function(e){return e.json()})).then((function(e){return s(e)}))})),console.log(j);var p=new RegExp(j,"g"),O=Object.keys(c).map((function(e){if(j.length>0&&!p.test(e))return"";var t="emoji";return e===h&&(t+=" clicked"),Object(o.jsx)("div",{className:t,onClick:function(){navigator.clipboard.writeText(":".concat(e,":")),d(e)},children:Object(o.jsx)("img",{src:c[e],alt:e})},e)}));return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{className:"topbar",children:Object(o.jsx)("div",{className:"search",children:Object(o.jsx)("input",{type:"text",onChange:function(e){return u(e.target.value.toLowerCase())},placeholder:"search"})})}),Object(o.jsx)("div",{className:"emojiWrapper",children:O})]})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.e2405bf4.chunk.js.map