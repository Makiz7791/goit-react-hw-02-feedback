(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{26:function(n,t,e){"use strict";e.r(t);var c,a,i,r,o,d,s,l,b=e(0),u=e(10),j=e.n(u),h=(e(22),e(7)),p=e(4),O=e(11),x=e(12),g=e(17),m=e(16),f=e(2),k=e(3),v=k.b.div(c||(c=Object(f.a)(["\n  outline: 1px solid yellow;\n  width: 100vw;\n  padding: 0 15px;\n  @media screen and (min-width: 480px) {\n    width: 480px;\n    margin: 0 auto;\n  }\n  @media screen and (min-width: 768px) {\n    width: 660px;\n  }\n  @media screen and (min-width: 1024px) {\n    width: 920px;\n  } ;\n"]))),w=e(1),y=function(n){var t=n.children;return Object(w.jsx)(v,{children:t})},F=k.b.div(a||(a=Object(f.a)(["\n  padding-top: 30px;\n  padding-bottom: 30px;\n"]))),C=k.b.h3(i||(i=Object(f.a)(["\n  margin-bottom: 10px;\n  font-weight: 700;\n"]))),B=function(n){var t=n.title,e=n.children;return Object(w.jsxs)(F,{children:[t&&Object(w.jsx)(C,{className:"title",children:t}),e]})},P=k.b.ul(r||(r=Object(f.a)(["\n  display: flex;\n  align-items: center;\n"]))),T=k.b.li(o||(o=Object(f.a)(["\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),A=k.b.button(d||(d=Object(f.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  background-color: #111111;\n  transition: background-color 250ms linear;\n\n  &:hover,\n  &:focus {\n    background-color: #332233;\n  }\n"]))),J=function(n){var t=n.data,e=n.onBtnClick;return Object(w.jsx)(P,{children:Object.keys(t).map((function(n){return Object(w.jsx)(T,{children:Object(w.jsx)(A,{type:"button",name:n,onClick:function(n){e(n.currentTarget.name)},children:n})},n)}))})},L=k.b.li(s||(s=Object(f.a)(["\n  margin-bottom: 10px;\n"]))),N=function(n){var t=n.data;return Object(w.jsx)("ul",{children:Object.keys(t).map((function(n){return Object(w.jsxs)(L,{children:[n,": ",t[n]]},n)}))})},E=function(n){Object(g.a)(e,n);var t=Object(m.a)(e);function e(){var n;Object(O.a)(this,e);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(n=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},n.onLeaveFeedback=function(t){n.setState((function(n){return Object(p.a)({},t,n[t]+=1)}))},n.countTotalFeedbacks=function(n){return Object.values(n).reduce((function(n,t){return n+t}),0)},n.countPositiveFeedbacks=function(n,t){return"".concat(Math.round(n/t*100),"%")},n}return Object(x.a)(e,[{key:"render",value:function(){var n=this.state.good,t=this.countTotalFeedbacks(this.state),e=this.countPositiveFeedbacks(n,t),c=Object(h.a)(Object(h.a)({},this.state),{},{total:t,positive:e});return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(y,{children:[Object(w.jsx)(B,{title:"Please rate the product",children:Object(w.jsx)(J,{data:this.state,onBtnClick:this.onLeaveFeedback})}),Object(w.jsx)(B,{title:"Rating statistics",children:t?Object(w.jsx)(N,{data:c}):Object(w.jsx)("p",{children:"No stats yet"})})]})})}}]),e}(b.Component),H=Object(k.a)(l||(l=Object(f.a)(["\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #dddddd;\n  background-color: #332222;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nbutton,\nul,\nol,\nli {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nul {\n  padding-left: 0;\n  list-style: none;\n}\n\nbutton {\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  color: inherit;\n\n}\n\nimg,\na {\n  display: block;\n}\n\n.link {\n  text-decoration: none;\n  color: inherit;\n}\n\n.list {\n  list-style: none;\n}\n"])));j.a.render(Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(H,{}),Object(w.jsx)(E,{})]}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.4c422f00.chunk.js.map