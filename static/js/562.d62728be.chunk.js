"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[562],{562:function(e,r,t){t.r(r);var n=t(861),a=t(439),u=t(687),c=t.n(u),i=t(791),o=t(73),s=t(689),f=t(87),l=t(86),d=t(651),p=t(184);r.default=function(){var e=(0,s.TH)(),r=(0,i.useState)([]),t=(0,a.Z)(r,2),u=t[0],h=t[1],v=(0,i.useState)(d.Q.IDLE),m=(0,a.Z)(v,2),E=m[0],b=m[1];function k(e){return e.map((function(e){return{id:e.id,title:e.title}}))}return(0,i.useEffect)((function(){var e=new AbortController;function r(){return(r=(0,n.Z)(c().mark((function r(){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,b(d.Q.PENDING),r.next=4,(0,l.v)({fetchParams:"trending/movie/day",controller:e});case 4:if(t=r.sent,0!==(n=t.results).length){r.next=9;break}return b(d.Q.RESOLVED),r.abrupt("return",o.Am.error("Nothing found!"));case 9:h(k(n)),b(d.Q.RESOLVED),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),"canceled"!==r.t0.message&&(b(d.Q.ERROR),o.Am.error(r.t0.message));case 16:case"end":return r.stop()}}),r,null,[[0,13]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){e.abort()}}),[]),(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{children:"Trending today"}),E===d.Q.RESOLVED&&(0,p.jsx)("ul",{children:u.map((function(r){var t=r.id,n=r.title;return(0,p.jsx)("li",{children:(0,p.jsx)(f.rU,{to:"movies/".concat(t),state:{from:e},children:n})},t)}))})]})}},86:function(e,r,t){t.d(r,{v:function(){return i}});var n=t(861),a=t(687),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n,a,i,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.fetchParams,n=r.query,a=void 0===n?null:n,i=r.controller,e.next=3,(0,c.Z)(t,{signal:i.signal,params:{api_key:"fd0a5f8c566fdaa6a63aeafeb4fed4c5",query:a}});case 3:return o=e.sent,e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},651:function(e,r,t){t.d(r,{Q:function(){return n}});var n={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",ERROR:"error"}}}]);
//# sourceMappingURL=562.d62728be.chunk.js.map