(this.webpackJsonpmunny=this.webpackJsonpmunny||[]).push([[0],{38:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),r=a(16),s=a.n(r),l=a(13),o=a(10),i=a(4),u=a(5),j=(a(38),a(26)),d=a(27),b=a(1),h=function(){return Object(b.jsxs)("nav",{className:"navbar",children:[Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)(j.a,{className:"navbar__logo"})}),Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)(d.a,{className:"navbar__logo"})})]})},p=(a(41),function(e){var t=e.onClick,a=e.text;e.textStyle,e.buttonStyle;return Object(b.jsx)("button",{className:"risk-button",onClick:t,children:a})}),f=(a(42),{1:{level:1,bonds:80,largeCap:20,midCap:0,foreign:0,smallCap:0},2:{level:2,bonds:70,largeCap:15,midCap:15,foreign:0,smallCap:0},3:{level:3,bonds:60,largeCap:15,midCap:15,foreign:10,smallCap:0},4:{level:4,bonds:50,largeCap:20,midCap:20,foreign:10,smallCap:0},5:{level:5,bonds:40,largeCap:20,midCap:20,foreign:20,smallCap:0},6:{level:6,bonds:35,largeCap:25,midCap:5,foreign:30,smallCap:5},7:{level:7,bonds:20,largeCap:25,midCap:25,foreign:25,smallCap:5},8:{level:8,bonds:10,largeCap:20,midCap:40,foreign:20,smallCap:10},9:{level:9,bonds:5,largeCap:15,midCap:40,foreign:25,smallCap:15},10:{level:10,bonds:0,largeCap:5,midCap:25,foreign:30,smallCap:40}}),m=a(28),g=a.n(m),O=(a(45),a(46),function(e){var t=Object(c.useState)(null),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(c.useRef)();return Object(c.useEffect)((function(){var t=s.current.getContext("2d");r(new g.a(t,{type:"doughnut",data:{labels:e.labels,datasets:[{label:"# of Votes",data:e.data,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{legend:{labels:{fontColor:"white"}},events:[],plugins:{labels:[{render:"label",fontColor:"white"},{render:"percentage",position:"outside"}]}}}))}),[]),Object(c.useEffect)((function(){if(n){var t=n;t.data.datasets.forEach((function(t){t.data=e.data})),t.update(),r(t)}}),[e.data]),Object(b.jsx)("div",{className:"chart",children:Object(b.jsx)("canvas",{id:"myChart",width:"200",height:"200",ref:s})})}),v=(a(47),a(14)),x=function(e){var t=e.options,a=e.onClick,n=e.defaultSelected,r=Object(c.useState)(!1),s=Object(u.a)(r,2),l=s[0],o=s[1],i=Object(c.useState)(n||"Select Level"),j=Object(u.a)(i,2),d=j[0],h=j[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"select-menu ".concat(l?"toggle":""),onClick:function(){return o(!l)},children:[Object(b.jsxs)("div",{className:"select-menu__selected",children:[Object(b.jsx)("p",{children:d}),l?Object(b.jsx)(v.b,{}):Object(b.jsx)(v.a,{})]}),Object(b.jsx)("ul",{className:"select-list",children:t.map((function(e,t){return Object(b.jsx)("li",{className:"select-list__item",onClick:function(){a(e),h(e)},children:e},t)}))})]})})},C=(a(48),function(e){var t=e.title,a=e.children,n=e.selected,r=e.titleClasses,s=e.bodyClasses,l=Object(c.useState)(n?"toggle":""),o=Object(u.a)(l,2),i=o[0],j=o[1];Object(c.useEffect)((function(){n&&""===i&&j("toggle")}),[n]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"drop-display ".concat(i),children:[Object(b.jsxs)("div",{className:"drop-display__title ".concat(r),onClick:function(){j("toggle"===i?"":"toggle")},children:[Object(b.jsx)("p",{children:t}),i?Object(b.jsx)(v.b,{}):Object(b.jsx)(v.a,{})]}),Object(b.jsx)("div",{className:"drop-display-info ".concat(s),children:a})]})})}),y=(a(49),function(e){var t=e.category,a=e.percentage,c=e.style;return Object(b.jsxs)("li",{className:"risk-level-sheet__row ".concat(c||""),children:[Object(b.jsx)("p",{children:t}),Object(b.jsx)("p",{children:a})]})}),N=(a(50),function(e){var t=e.icon,a=e.title,c=e.text;return Object(b.jsxs)("div",{className:"home-page-box",children:[Object(b.jsx)("div",{className:"home-page-box__icon",children:t}),Object(b.jsx)("h1",{className:"home-page-box__title",children:a}),Object(b.jsx)("p",{className:"home-page-box__text",children:c})]})}),k=function(e){var t=Object(c.useRef)(null),a=Object(c.useState)(!1),n=Object(u.a)(a,2),r=n[0],s=n[1],l=[1,2,3,4,5,6,7,8,9,10],i="level"in e.state.risk?["Bonds","Large Cap","Mid Cap","Foreign","Small Cap"]:["Select Level","Select Level","Select Level","Select Level","Select Level"],j="level"in e.state.risk?[e.state.risk.bonds,e.state.risk.largeCap,e.state.risk.midCap,e.state.risk.foreign,e.state.risk.smallCap]:[20,20,20,20,20];return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)("div",{className:"home-page",children:[Object(b.jsxs)("div",{className:"hero",children:[Object(b.jsx)("p",{className:"hero-main",children:"Money works. Not you."}),Object(b.jsx)("p",{className:"hero-other",children:"Start by getting an investment portfolio recommendation today!"}),Object(b.jsx)(p,{text:"Get Started",onClick:function(){return t.current.scrollIntoView({behavior:"smooth"})}})]}),Object(b.jsxs)("div",{className:"home-page-second",children:[Object(b.jsx)(N,{icon:"1",title:"Risk Level",text:"Pick the level of risk that you want to invest with. Don't worry, we have all of the information you need."}),Object(b.jsx)(N,{icon:"2",title:"Examine Choice",text:"There is a guide on each risk level. You can either look at a chart or a simple display."}),Object(b.jsx)(N,{icon:"3",title:"Enter Amounts",text:"Provide the amount of money you have allocated for each category of your portfolio."}),Object(b.jsx)(N,{icon:"4",title:"We Recommend",text:"Based off of your inputs, our special code provides you with all of the knowledge you need."})]}),Object(b.jsxs)("div",{className:"home-page-third",ref:t,children:[Object(b.jsx)("p",{className:"home-page__header",children:"Please Select A Risk Level For Your Investment Portfolio. 1 is low, 10 is high."}),Object(b.jsx)(x,{options:l,onClick:function(t){return e.setRiskLevel(t)}}),Object(b.jsx)(p,{text:r?" Sheet":"Doughnut",onClick:function(){return s(!r)}}),"level"in e.risk?Object(b.jsx)(o.b,{to:"/calculator",children:Object(b.jsx)(p,{text:"Continue"})}):null]}),Object(b.jsx)("div",{className:"home-page__info",children:r?Object(b.jsx)(O,{data:j,labels:i}):Object(b.jsx)("div",{className:"grid-container",children:l.map((function(t){return Object(b.jsx)(C,{title:"Risk Level ".concat(t),selected:t===e.state.risk.level,children:Object(b.jsxs)("ul",{className:"risk-level-sheet",children:[Object(b.jsx)(y,{category:"Category",percentage:"Percentage",style:"risk-level-sheet-row--header"}),Object(b.jsx)(y,{category:"Bonds",percentage:f[t].bonds}),Object(b.jsx)(y,{category:"Large Cap",percentage:f[t].largeCap}),Object(b.jsx)(y,{category:"Mid Cap",percentage:f[t].midCap}),Object(b.jsx)(y,{category:"Foreign",percentage:f[t].foreign}),Object(b.jsx)(y,{category:"Small Cap",percentage:f[t].smallCap})]})},t)}))})})]})]})},_="RECEIVE_RISK_LEVEL",w=Object(l.b)((function(e){return{state:e,risk:e.risk}}),(function(e){return{setRiskLevel:function(t){return e(function(e){return{type:_,payload:f[e]}}(t))}}}))(k),S="RECEIVE_NEW_AMOUNTS",E="REMOVE_NEW_AMOUNTS",F="RECEIVE_DIFFERENCES",T="RECEIVE_INPUTS",L={bonds:"Bonds",midCap:"Mid Cap",largeCap:"Large Cap",foreign:"Foreign",smallCap:"Small Cap"},R=function(e){var t=0;for(var a in e)t+=parseFloat(e[a]);return t.toFixed(2)},I=function(e,t){return(e*(t/100)).toFixed(2)},M=function(e,t){return(e-t).toFixed(2)},A=function(e){return e<0},V="RECEIVE_TRANSFERS",P=function(e){return function(t,a){var c=a().risk,n=R(e),r={bonds:I(n,c.bonds),midCap:I(n,c.midCap),largeCap:I(n,c.largeCap),foreign:I(n,c.foreign),smallCap:I(n,c.smallCap)},s={bonds:M(e.bonds,r.bonds),midCap:M(e.midCap,r.midCap),largeCap:M(e.largeCap,r.largeCap),foreign:M(e.foreign,r.foreign),smallCap:M(e.smallCap,r.smallCap)},l=function(e){var t={bonds:"Bonds",midCap:"Mid Cap",largeCap:"Large Cap",foreign:"Foreign",smallCap:"Small Cap"},a=[],c=[];for(var n in e)c.push({cat:n,val:e[n]});c.sort((function(e,t){return e.val-t.val}));for(var r=0,s=c.length-1;r<s;){var l=parseFloat(c[r].val)+parseFloat(c[s].val);l>0?(c[s].val=l,a.push("Transfer $".concat(Math.abs(c[r].val).toFixed(2)," from ").concat(t[c[s].cat]," to ").concat(t[c[r].cat])),r++):l<0?(c[r].val=l,a.push("Transfer $".concat(Math.abs(c[s].val).toFixed(2)," from ").concat(t[c[s].cat]," to ").concat(t[c[r].cat])),s--):(0!==Math.abs(c[s].val)&&a.push("Transfer $".concat(Math.abs(c[s].val).toFixed(2)," from ").concat(t[c[s].cat]," to ").concat(t[c[r].cat])),r++,s--)}return a}(s);t(function(e){return{type:T,inputs:e}}(e)),t(function(e){return{type:S,newAmounts:e}}(r)),t(function(e){return{type:F,differences:e}}(s)),t(function(e){return{type:V,transfers:e}}(l))}},B=(a(51),a(52),function(e){var t=e.label,a=e.onChange,c=e.value;return Object(b.jsxs)("label",{className:"current-amounts__label",children:[t,": $",Object(b.jsx)("input",{className:"current-amounts__input",onChange:a,value:c,type:"number"})]})}),D=function(e){var t=e.risk,a=e.calculator,n=e.handleInputs,r=Object(c.useState)(a.inputs.bonds||0),s=Object(u.a)(r,2),l=s[0],o=s[1],j=Object(c.useState)(a.inputs.midCap||0),d=Object(u.a)(j,2),f=d[0],m=d[1],g=Object(c.useState)(a.inputs.largeCap||0),O=Object(u.a)(g,2),v=O[0],x=O[1],N=Object(c.useState)(a.inputs.foreign||0),k=Object(u.a)(N,2),_=k[0],w=k[1],S=Object(c.useState)(a.inputs.smallCap||0),E=Object(u.a)(S,2),F=E[0],T=E[1],I=Object(c.useState)(""),M=Object(u.a)(I,2),V=M[0],P=M[1],D={bonds:l,midCap:f,largeCap:v,foreign:_,smallCap:F};return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),t.level?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)("div",{className:"calculator-page",children:[Object(b.jsx)("h1",{children:"Calculator Page"}),Object(b.jsxs)("div",{className:"calculator-slot",children:[Object(b.jsx)("p",{className:"calculator-slot__text",children:"This is the risk level you chose in the previous step. Your results with be based off of the percentages that correspond with the risk level."}),Object(b.jsx)(C,{title:"Risk Level ".concat(t.level),selected:!0,children:Object(b.jsxs)("ul",{className:"risk-level-sheet",children:[Object(b.jsx)(y,{category:"Category",percentage:"Percentage",style:"risk-level-sheet-row--header"}),Object.keys(L).map((function(e,a){return Object(b.jsx)(y,{category:L[e],percentage:t[e]},a)}))]})})]}),Object(b.jsxs)("div",{className:"calculator-slot",children:[Object(b.jsx)("p",{className:"calculator-slot__text",children:"Enter the amount of money in DOLLARS, not percentage, that you have allocated towards each category."}),Object(b.jsx)(C,{title:"Current Amounts",selected:!0,children:Object(b.jsxs)("div",{className:"current-amounts",children:[Object(b.jsx)(B,{label:"Bonds",onChange:function(e){return o(e.currentTarget.value)},value:l}),Object(b.jsx)(B,{label:"Mid Cap",onChange:function(e){return m(e.currentTarget.value)},value:f}),Object(b.jsx)(B,{label:"Large Cap",onChange:function(e){return x(e.currentTarget.value)},value:v}),Object(b.jsx)(B,{label:"Foreign",onChange:function(e){return w(e.currentTarget.value)},value:_}),Object(b.jsx)(B,{label:"Small Cap",onChange:function(e){return T(e.currentTarget.value)},value:F}),Object(b.jsx)("p",{className:"error-message",children:V})]})})]}),"level"in t&&Object.keys(a.inputs).length>0&&Object.keys(a.differences).length>0?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"calculator-slot",children:[Object(b.jsx)("p",{className:"calculator-slot__text",children:"This is the grand total of all of the money you have for your portfolio."}),Object(b.jsx)(C,{title:"Total",selected:!0,children:Object(b.jsx)("p",{className:"calculator-page__info",children:R(a.inputs)})})]}),Object(b.jsxs)("div",{className:"calculator-slot",children:[Object(b.jsx)("p",{className:"calculator-slot__text",children:"These new amounts are what we recommend you have in each category."}),Object(b.jsx)(C,{title:"New Amounts",selected:!0,children:Object(b.jsx)("div",{className:"calculator-page__info",children:Object.keys(L).map((function(e,t){return Object(b.jsxs)("div",{children:[L[e],": ",Object(b.jsx)("p",{className:"calculator-blue",children:a.newAmounts[e]})]},t)}))})})]}),Object(b.jsxs)("div",{className:"calculator-slot",children:[Object(b.jsx)("p",{className:"calculator-slot__text",children:"Differences are the comparison between the amount of money you have allocated towards each category vs the amount of money we recommend from the new amounts given above."}),Object(b.jsx)(C,{title:"Differences",selected:!0,children:Object(b.jsx)("div",{className:"calculator-page__info",children:Object.keys(L).map((function(e,t){return Object(b.jsxs)("div",{children:[L[e],": ",Object(b.jsx)("p",{className:A(a.differences[e])?"calculator-red":"calculator-green",children:a.differences[e]})]},t)}))})})]}),Object(b.jsxs)("div",{className:"calculator-slot",children:[Object(b.jsx)("p",{className:"calculator-slot__text",children:"These are the transfers we recommend you make so your categories match our recommended amounts perfectly. This is minimum number of transfers you would have to make to match our recommendations."}),Object(b.jsx)(C,{title:"Recommended Transfers",selected:!0,children:Object(b.jsx)("div",{className:"calculator-page__info",children:a.transfers.map((function(e,t){return Object(b.jsx)("p",{className:"calculator-transfers",children:e},t)}))})})]})]}):null,Object(b.jsx)(p,{onClick:function(){!function(){for(var e in D){if(""===D[e])return!1;var t=parseFloat(1*D[e]);if(isNaN(t)||A(t))return!1}return P(""),!0}()?P("Inputs must be 0 or a positive number"):n(D)},text:"Calculate"})]})]}):Object(b.jsx)(i.a,{to:"/"})},z=Object(l.b)((function(e){return{risk:e.risk,calculator:e.calculator}}),(function(e){return{handleInputs:function(t){return e(P(t))}}}))(D),W=function(){return Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{exact:!0,path:"/home",component:w}),Object(b.jsx)(i.b,{exact:!0,path:"/calculator",component:z}),Object(b.jsx)(i.b,{path:"*",component:w})]})},$=function(e){var t=e.store;return Object(b.jsx)(l.a,{store:t,children:Object(b.jsx)(o.a,{children:Object(b.jsx)(W,{})})})},U=a(11),Y=a(29),J=a(23),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case T:return Object(J.a)(Object(J.a)({},e),t.inputs);default:return e}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case F:return t.differences;default:return e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case S:return t.newAmounts;case E:return{};default:return e}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case V:return t.transfers;default:return e}},Q=Object(U.c)({inputs:G,differences:K,newAmounts:q,transfers:H}),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case _:return t.payload;default:return e}},Z=Object(U.c)({risk:X,calculator:Q}),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(U.d)(Z,e,Object(U.a)(Y.a))},te=(a(53),ee());s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)($,{store:te})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.e4db4010.chunk.js.map