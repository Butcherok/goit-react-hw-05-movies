"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[297],{6297:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,o,i,a=e(5861),s=e(3433),u=e(9439),c=e(4687),p=e.n(c),l=e(2791),f=e(1087),x=e(7689),d=e(1544),h=e(184),g=function(n){var t=n.movies,e=(0,x.TH)();return(0,h.jsx)(d.Gy,{children:t.map((function(n){var t=n.id,r=n.title;return(0,h.jsx)(d.so,{children:(0,h.jsx)(d.sk,{to:"".concat(t),state:{from:e},children:r})},t)}))})},m=e(168),b=e(4934),Z=b.Z.form(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  gap: 24px;\n  padding: 24px 48px;\n"]))),w=b.Z.input(o||(o=(0,m.Z)(["\n  padding: 12px;\n  border-radius: 10px;\n  font-size: 18px;\n  min-width: 250px;\n"]))),v=b.Z.button(i||(i=(0,m.Z)(["\n  padding: 12px;\n  border-radius: 10px;\n  color: #212121;\n  background-color: lightblue;\n  font-size: 18px;\n  border: none;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    scale: 1.05;\n    color: tomato;\n    transition: all 0.3s ease-in-out;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n  }\n"]))),y=function(n){var t=n.setSearchParams,e=(0,l.useState)(""),r=(0,u.Z)(e,2),o=r[0],i=r[1];return(0,h.jsxs)(Z,{onSubmit:function(n){n.preventDefault(),o.trim()&&(t({query:o.trim().toLowerCase()}),i(""))},children:[(0,h.jsx)(w,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:o,onChange:function(n){var t=n.currentTarget.value;i(t)}}),(0,h.jsx)(v,{type:"submit",children:(0,h.jsx)("span",{children:"Search"})})]})},j=e(3585),k=e(3026),E=e(9014),S=function(){var n=(0,l.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],o=(0,l.useState)(j.Q.IDLE),i=(0,u.Z)(o,2),c=i[0],x=i[1],m=(0,f.lr)(),b=(0,u.Z)(m,2),Z=b[0],w=b[1],v=(0,l.useMemo)((function(){return Object.fromEntries((0,s.Z)(Z))}),[Z]).query;function S(n){return n.map((function(n){return{id:n.id,title:n.title}}))}return(0,l.useEffect)((function(){if(v){var n=new AbortController;return v&&function(){t.apply(this,arguments)}(),function(){n.abort()}}function t(){return(t=(0,a.Z)(p().mark((function t(){var e,o;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,x(j.Q.PENDING),t.next=4,(0,k.v)({controller:n,fetchParams:"search/movie",query:v});case 4:if(e=t.sent,0!==(o=e.results).length){t.next=9;break}return x(j.Q.RESOLVED),t.abrupt("return",E.Am.error("Nothing found!"));case 9:r(S(o)),x(j.Q.RESOLVED),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),"canceled"!==t.t0.message&&(x(j.Q.ERROR),E.Am.error(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}}),[v]),(0,h.jsxs)(d.tz,{children:[(0,h.jsx)(y,{setSearchParams:w}),c===j.Q.RESOLVED&&!!e.length&&(0,h.jsx)(g,{movies:e})]})}},1544:function(n,t,e){e.d(t,{Gy:function(){return h},i4:function(){return b},qu:function(){return x},r7:function(){return Z},sk:function(){return m},so:function(){return g},tz:function(){return d}});var r,o,i,a,s,u,c,p=e(168),l=e(4934),f=e(1087),x=l.Z.h1(r||(r=(0,p.Z)(["\n  padding: 24px 48px;\n"]))),d=l.Z.main(o||(o=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n  padding-right: 24px;\n  padding-left: 24px;\n  width: 100%;\n  color: #212121;\n  border: 2px solid lightblue;\n  background-color: #fff;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),h=l.Z.ul(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n  padding: 0 12px;\n  width: 100%;\n"]))),g=l.Z.li(a||(a=(0,p.Z)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  width: 97%;\n  padding: 20px 12px;\n  border: 1px solid lightblue;\n  border-radius: 5px;\n  &:nth-of-type(2n) {\n    background-color: lightblue;\n  }\n  &:nth-of-type(2n-1) {\n    background-color: #cbf0fd;\n  }\n  font-size: 22px;\n  font-weight: 500;\n  "]))),m=(0,l.Z)(f.rU)(s||(s=(0,p.Z)(["\n  color: #212121;\n  list-style: none;\n  text-decoration: none;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    color: tomato;\n    transition: all 0.3s ease-in-out;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n  }\n"]))),b=l.Z.div(u||(u=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  gap: 24px;\n  margin: 50px 0;\n  padding: 40px 0;\n\n  font-size: 28px;\n  font-weight: 700;\n"]))),Z=l.Z.p(c||(c=(0,p.Z)(["\n  color: tomato;\n  font-size: 28px;\n  font-weight: 700;\n"])))}}]);
//# sourceMappingURL=297.a8d9d81d.chunk.js.map