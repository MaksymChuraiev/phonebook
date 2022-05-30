"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[218],{8861:function(n,e,t){t.d(e,{W:function(){return i}});var r,a=t(168),i=t(2499).Z.section(r||(r=(0,a.Z)(["\n  margin: 0 auto;\n  width: 1280px;\n"])))},5218:function(n,e,t){t.r(e),t.d(e,{default:function(){return un}});var r,a,i,o,s,c,d,u,l,p,m,h,x,f,Z,g,b,j,C,v=t(2791),w=t(9434),y=t(9652),k=t(168),A=t(2499),z=A.Z.label(r||(r=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 10px;\n  margin-top: 10px;\n  border: solid 1px #000;\n  padding: 10px;\n"]))),F=A.Z.input(a||(a=(0,k.Z)([""]))),P=t(3329),I=function(){var n=(0,w.I0)();return(0,P.jsxs)(z,{children:["Find contacts by name",(0,P.jsx)(F,{type:"text",name:"filter",onChange:function(e){console.log(e.target.value),n((0,y.K)(e.target.value))}})]})},S=t(1413),q=t(5861),E=t(7757),L=t.n(E),N=t(5290),U=t(6140),B=t(4024),M=A.Z.h1(i||(i=(0,k.Z)(["\n  margin-bottom: 20px;\n"]))),J=A.Z.form(o||(o=(0,k.Z)(["\n  border: solid 1px #000;\n  padding: 10px;\n"]))),W=A.Z.label(s||(s=(0,k.Z)(["\n  position: relative;\n  font-size: 10px;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n"]))),$=A.Z.input(c||(c=(0,k.Z)([""]))),D=A.Z.button(d||(d=(0,k.Z)(["\n  cursor: pointer;\n  margin-top: 10px;\n  padding: 3px;\n"]))),K=function(){var n=(0,w.I0)(),e=(0,w.v9)(B.lP.getContacts),t=(0,N.cI)(),r=t.register,a=t.handleSubmit,i=t.resetField,o=function(){var t=(0,q.Z)(L().mark((function t(r){return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(r),!e.some((function(n){return n.name.toLowerCase()===r.name.toLowerCase()}))){t.next=3;break}return t.abrupt("return",U.Am.error("".concat(r.name," is already in contacts.")));case 3:n(B.UP.addContacts(r)),i("name"),i("number"),U.Am.success("".concat(r.name," was created!"));case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(M,{children:"Phonebook"}),(0,P.jsxs)(J,{onSubmit:a(o),children:[(0,P.jsxs)(W,{children:["Name",(0,P.jsx)($,(0,S.Z)((0,S.Z)({},r("name")),{},{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,autoComplete:"off"}))]}),(0,P.jsxs)(W,{children:["Number",(0,P.jsx)($,(0,S.Z)((0,S.Z)({},r("number")),{},{pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,autoComplete:"off"}))]}),(0,P.jsx)(D,{type:"submit",children:"Add contact"})]})]})},V=t(2982),G=(A.Z.h2(u||(u=(0,k.Z)(["\n  margin-top: 20px;\n"]))),A.Z.ul(l||(l=(0,k.Z)(["\n  list-style-type: none;\n  margin-top: 20px;\n"])))),H=t(885),O=t(1856),Q=t(1110),R=A.Z.li(p||(p=(0,k.Z)(["\n  :not(:last-child) {\n    margin-bottom: 10px;\n  }\n  padding-bottom: 2px;\n  border-bottom: 1px solid #000;\n"]))),T=A.Z.div(m||(m=(0,k.Z)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),X=A.Z.p(h||(h=(0,k.Z)(["\n  font-weight: 700;\n"]))),Y=A.Z.p(x||(x=(0,k.Z)([""]))),_=A.Z.button(f||(f=(0,k.Z)(["\n  margin-top: 5px;\n  cursor: pointer;\n  height: 20px;\n  width: 60px;\n  margin-left: 5px;\n"]))),nn=A.Z.form(Z||(Z=(0,k.Z)([""]))),en=A.Z.div(g||(g=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),tn=A.Z.input(b||(b=(0,k.Z)(["\n  width: 200px;\n  font-size: 15px;\n  font-weight: 700;\n  /* border: none; */\n  background-color: lightgray;\n"]))),rn=A.Z.input(j||(j=(0,k.Z)(["\n  width: 95px;\n  font-size: 15px;\n  /* border: none; */\n  background-color: lightgray;\n"]))),an=A.Z.button(C||(C=(0,k.Z)(["\n  margin-top: 5px;\n  cursor: pointer;\n  height: 20px;\n  width: 60px;\n  margin-left: 5px;\n"]))),on=function(n){var e=n.id,t=n.name,r=n.number,a=(0,v.useState)(!1),i=(0,H.Z)(a,2),o=i[0],s=i[1],c=(0,v.useState)(!1),d=(0,H.Z)(c,2),u=d[0],l=d[1],p=(0,w.I0)(),m=(0,N.cI)({defaultValues:{name:t,number:r}}),h=m.register,x=m.handleSubmit,f=m.resetField,Z=function(){s(!o)},g=function(){l(!u)},b=function(){var n=(0,q.Z)(L().mark((function n(t){return L().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:p(B.UP.removeContacts((0,S.Z)({id:e},t))),U.Am.success("".concat(t.name," has been changed!")),Z(),g(),f("name"),f("number");case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(R,{children:[!u&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(T,{onClick:function(){return Z()},children:[(0,P.jsx)(X,{children:t}),(0,P.jsx)(Y,{children:r})]}),(0,P.jsx)(O.M,{children:o&&(0,P.jsxs)(Q.E.div,{initial:{height:0},animate:{height:"auto"},exit:{height:0},style:{overflow:"hidden"},transition:{duration:.5},children:[(0,P.jsx)(_,{onClick:function(){return function(n){p(B.UP.deleteContacts(n)),U.Am.success("".concat(t,"has been deleted!"))}(e)},children:"Delete"}),(0,P.jsx)(_,{onClick:function(){return g()},children:"Edit"})]})})]}),u&&(0,P.jsxs)(nn,{onSubmit:x(b),children:[(0,P.jsxs)(en,{children:[(0,P.jsx)(tn,(0,S.Z)((0,S.Z)({},h("name")),{},{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,autoComplete:"off"})),(0,P.jsx)(rn,(0,S.Z)((0,S.Z)({},h("number")),{},{pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,autoComplete:"off"}))]}),(0,P.jsx)(an,{onClick:function(){Z(),g()},children:"Back"}),(0,P.jsx)(an,{type:"submit",children:"Edit"})]})]})})},sn=t(8070),cn=function(){var n=(0,w.I0)(),e=(0,w.v9)(B.lP.getContacts),t=(0,w.v9)(B.lP.getFilter),r=(0,w.v9)(B.lP.isFetching);(0,v.useEffect)((function(){n(B.UP.fetchContacts())}),[n]);return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(G,{children:[r&&(0,P.jsx)(sn.a,{}),e&&function(){var n=t.toLowerCase().trim();return(0,V.Z)(e).sort((function(n,e){return n.name.localeCompare(e.name)})).filter((function(e){return e.name.toLowerCase().includes(n)}))}().map((function(n){var e=n.name,t=n.number,r=n.id;return(0,P.jsx)(on,{id:r,name:e,number:t},r)}))]})})},dn=t(8861),un=function(){return(0,P.jsxs)(dn.W,{children:[(0,P.jsx)(K,{}),(0,P.jsx)(I,{}),(0,P.jsx)(cn,{})]})}}}]);
//# sourceMappingURL=218.36c8c573.chunk.js.map