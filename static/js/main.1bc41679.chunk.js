(this.webpackJsonpnps_calculator_v2=this.webpackJsonpnps_calculator_v2||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),r=n.n(s),i=(n(12),n(3)),u=(n(13),n(0));function l(e){var t=e.amount,n=e.setAmount;return Object(u.jsxs)("div",{className:"amount",children:[Object(u.jsx)("p",{children:" Amount: $ "})," ",Object(u.jsx)("input",{onChange:function(e){try{var t=e.target.value.match(/[0-9]|,|\./g).join("");n(t)}catch(c){n("")}},type:"text",value:t||"",className:"input mediumInput"})]})}var o=n(2);function j(e){var t=e.clientObject,n=e.setClientObject,c=e.id;return Object(u.jsx)("span",{onClick:function(e){e.preventDefault();var c=parseFloat(e.target.id),a=t.filter((function(e){return e.id!==c}));n(a)},id:c,className:"close",children:"\xd7"})}function b(e){var t=e.clientObject,n=e.setClientObject,c=e.id;return Object(u.jsxs)("div",{className:"client",children:[1===t.length?"":Object(u.jsx)(j,{clientObject:t,setClientObject:n,id:c}),Object(u.jsxs)("div",{className:"flexGroup spaceBottom",children:[Object(u.jsx)("p",{children:" Client Name: "})," ",Object(u.jsx)("input",{onChange:function(e){n((function(e){return Object(o.a)(e)}),t[t.findIndex((function(e){return e.id===c}))].name=e.target.value)},type:"text",id:c,className:"input longInput"})]})," ",Object(u.jsxs)("div",{className:"flexGroup",children:[Object(u.jsxs)("div",{className:"flexGroup",children:[Object(u.jsx)("p",{children:" Share: "})," ",Object(u.jsx)("input",{onChange:function(e){n((function(e){return Object(o.a)(e)}),t[t.findIndex((function(e){return e.id===c}))].pubShare=e.target.value/100)},className:"input shortInput",type:"number"}),Object(u.jsx)("p",{children:" % "})," "]})," ",Object(u.jsxs)("div",{className:"flexGroup ",children:[Object(u.jsx)("p",{className:"leftMargin",children:" Sync Rate: "})," ",Object(u.jsx)("input",{onChange:function(e){n((function(e){return Object(o.a)(e)}),t[t.findIndex((function(e){return e.id===c}))].syncRate=e.target.value/100)},className:"input shortInput",type:"number"}),Object(u.jsx)("p",{children:" % "})," "]})," "]})," "]})}function d(e){var t=e.clientObject,n=e.setClientObject;return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{children:t.map((function(e){return Object(u.jsx)(b,{id:e.id,clientObject:t,setClientObject:n},e.id)}))})})}var O=n.p+"static/media/clipboard.765bca30.svg",p=n.p+"static/media/clipboardDark.6734aad3.svg";function m(e){var t=e.npsResult,n=e.clientObject,c=e.amount,a=e.rounded,s=e.convertAmount,r=e.copyFade,i=e.setCopyFade,l=e.darkMode,o=""===c?0:s(c);return Object(u.jsxs)("div",{className:"result",children:[Object(u.jsxs)("p",{children:["Client(s):"," ",n.map((function(e){return 0===n.indexOf(e)?e.name:" / ".concat(e.name)}))]}),Object(u.jsxs)("p",{children:["Rate:"," ",n.map((function(e){return 0===n.indexOf(e)?"($".concat(a(o*e.pubShare).toLocaleString()," less ").concat(a(100*e.syncRate),"%)"):" + ($".concat(a(o*e.pubShare).toLocaleString()," less ").concat(a(100*e.syncRate),"%)")}))," "]}),Object(u.jsxs)("p",{className:""!==t?"npsResult":"",children:["NPS = ",""===t?t:"$".concat(t)]}),Object(u.jsx)("img",{src:l?p:O,alt:"Clipboard",className:"clip",onClick:function(){i("copiedFade"),setTimeout((function(){i("")}),1500);var e=n.map((function(e){return 0===n.indexOf(e)?e.name:" / ".concat(e.name)})),c=n.map((function(e){return 0===n.indexOf(e)?"($".concat(a(o*e.pubShare).toLocaleString()," less ").concat(a(100*e.syncRate),"%)"):" + ($".concat(a(o*e.pubShare).toLocaleString()," less ").concat(a(100*e.syncRate),"%)")})),s=e.join(""),r=c.join("");return navigator.clipboard.writeText("Client(s): ".concat(s,"\nRate: ").concat(r,"\nNPS = ").concat(t))}}),Object(u.jsx)("p",{className:"copied ".concat(r),children:"copied"})]})}function f(e){var t=e.setAmount,n=e.setClientObject,c=e.setNpsResult;return Object(u.jsx)("div",{className:"center",children:Object(u.jsx)("button",{onClick:function(){t(""),n([{name:"",pubShare:0,syncRate:0,id:(new Date).valueOf()}]),c("")},className:"btn btnReset",children:"Reset"})})}function h(e){var t=e.clientObject,n=e.setClientObject;return Object(u.jsx)("div",{className:"center",children:Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),n([].concat(Object(o.a)(t),[{name:"",pubShare:0,syncRate:0,id:(new Date).valueOf()}]))},className:"btn btnClient",children:"Add Client"})})}var x=function(){var e=Object(c.useState)([{name:"",pubShare:0,syncRate:0,id:(new Date).valueOf()}]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],j=r[1],b=Object(c.useState)(""),O=Object(i.a)(b,2),p=O[0],x=O[1],v=Object(c.useState)(""),C=Object(i.a)(v,2),y=C[0],N=C[1],g=Object(c.useState)(!1),S=Object(i.a)(g,2),R=S[0],k=S[1],F=function(e){var t=parseFloat(e);return Math.round(100*(t+Number.EPSILON))/100},I=function(e){var t=e.replaceAll(",","");return parseFloat(t)};return Object(c.useEffect)((function(){var e=function(e,t){return e+t},t=n.map((function(e){return e.pubShare})).reduce(e),c=n.every((function(e){return 0!==e.syncRate&&e.syncRate>0&&e.syncRate<=1}));if(""!==o&&1===t&&c){var a=I(o),s=n.map((function(e){return a*e.pubShare*(1-e.syncRate)})).reduce(e),r=F(s).toLocaleString();x(r)}else x("")}),[o,n]),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"center",children:Object(u.jsx)("h1",{onClick:function(){R?(document.body.style.backgroundColor="white",document.querySelector(".result").style.color="black",k(!1)):(document.body.style.backgroundColor="#101010",document.querySelector(".result").style.color="white",k(!0))},className:"title",children:"NPS Calculator"})}),Object(u.jsx)(l,{amount:o,setAmount:j}),Object(u.jsx)(d,{clientObject:n,setClientObject:a}),Object(u.jsx)(h,{clientObject:n,setClientObject:a}),Object(u.jsx)("p",{className:"resultTitle",children:"Result:"}),Object(u.jsx)(m,{npsResult:p,clientObject:n,amount:o,rounded:F,convertAmount:I,copyFade:y,setCopyFade:N,darkMode:R}),Object(u.jsx)(f,{setAmount:j,setClientObject:a,setNpsResult:x})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.1bc41679.chunk.js.map