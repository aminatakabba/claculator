(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){},,function(t,n,e){},function(t,n,e){"use strict";e.r(n);var o=e(1),c=e.n(o),a=e(4),r=e.n(a),l=(e(9),e(10),e(2)),s=(e(11),e(0));var i=function(t){var n=t.content,e=t.onButtonClick;return t.type,Object(s.jsx)("div",{className:"number",children:Object(s.jsx)("div",{className:"number__container",onClick:e(n),children:Object(s.jsx)("h1",{className:"number__containerH1",children:n})})})};e(13);var u=function(){var t=Object(o.useState)("0"),n=Object(l.a)(t,2),e=n[0],c=n[1],a=Object(o.useState)(null),r=Object(l.a)(a,2),u=r[0],j=r[1],b=Object(o.useState)(null),p=Object(l.a)(b,2),x=p[0],O=p[1],d=function(t){return function(){var n=parseFloat(e);if("AC"===t)return c("0"),j(null),void O(null);if("\xb1"!==t)if("."!==t){if("+"===t)return null!==x?"+"===x?j(u+parseFloat(e)):"-"===x?j(u-parseFloat(e)):"/"===x?j(u/parseFloat(e)):"x"===x&&j(u*parseFloat(e)):j(parseFloat(e)),c("0"),void O("+");if("-"===t)return null!==x?"+"===x?j(u+parseFloat(e)):"-"===x?j(u-parseFloat(e)):"/"===x?j(u/parseFloat(e)):"x"===x&&j(u*parseFloat(e)):j(parseFloat(e)),c("0"),void O("-");if("/"===t)return null!==x?"+"===x?j(u+parseFloat(e)):"-"===x?j(u-parseFloat(e)):"/"===x?j(u/parseFloat(e)):"x"===x&&j(u*parseFloat(e)):j(parseFloat(e)),c("0"),void O("/");if("x"===t)return null!==x?"+"===x?j(u+parseFloat(e)):"-"===x?j(u-parseFloat(e)):"/"===x?j(u/parseFloat(e)):"x"===x&&j(u*parseFloat(e)):j(parseFloat(e)),c("0"),void O("x");if("="===t){if(!x)return;return"+"===x?c((u+parseFloat(e)).toString()):"-"===x?c((u-parseFloat(e)).toString()):"/"===x?c((u/parseFloat(e)).toString()):"x"===x&&c((u*parseFloat(e)).toString()),j(null),void O(null)}"."===e[e.length-1]?c(e+t):c((n+t).toString())}else{if(e.includes("."))return;c(e+".")}else c((-1*n).toString())}};return Object(s.jsx)("div",{className:"calculator",children:Object(s.jsxs)("div",{className:"calculator__container",children:[Object(s.jsx)("div",{className:"calculator__containerInput",children:e}),Object(s.jsxs)("div",{className:"calculator__containerNumbers",children:[Object(s.jsx)(i,{onButtonClick:d,content:"1"}),Object(s.jsx)(i,{onButtonClick:d,content:"2"}),Object(s.jsx)(i,{onButtonClick:d,content:"3"}),Object(s.jsx)(i,{onButtonClick:d,content:"4"}),Object(s.jsx)(i,{onButtonClick:d,content:"5"}),Object(s.jsx)(i,{onButtonClick:d,content:"6"}),Object(s.jsx)(i,{onButtonClick:d,content:"7"}),Object(s.jsx)(i,{onButtonClick:d,content:"8"}),Object(s.jsx)(i,{onButtonClick:d,content:"9"}),Object(s.jsx)(i,{onButtonClick:d,content:"0"}),Object(s.jsx)(i,{onButtonClick:d,content:"."}),Object(s.jsx)(i,{onButtonClick:d,content:"\xb1"})]}),Object(s.jsx)("div",{children:Object(s.jsx)("br",{})}),Object(s.jsxs)("div",{className:"calculator__containerOperators",children:[Object(s.jsx)(i,{onButtonClick:d,content:"+",type:"operator"}),Object(s.jsx)(i,{onButtonClick:d,content:"-",type:"operator"}),Object(s.jsx)(i,{onButtonClick:d,content:"/",type:"operator"}),Object(s.jsx)(i,{onButtonClick:d,content:"x",type:"operator"}),Object(s.jsx)(i,{onButtonClick:d,content:"=",type:"operator"}),Object(s.jsx)(i,{onButtonClick:d,content:"AC",type:"function"})]})]})})};var j=function(){return Object(s.jsx)("div",{className:"app",children:Object(s.jsx)(u,{})})},b=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,15)).then((function(n){var e=n.getCLS,o=n.getFID,c=n.getFCP,a=n.getLCP,r=n.getTTFB;e(t),o(t),c(t),a(t),r(t)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(j,{})}),document.getElementById("root")),b()}],[[14,1,2]]]);
//# sourceMappingURL=main.92e3afea.chunk.js.map