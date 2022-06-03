"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[751],{8861:function(n,r,e){e.d(r,{W:function(){return i}});var t,o=e(168),i=e(2499).Z.section(t||(t=(0,o.Z)(["\n  margin: 0 auto;\n  width: 1280px;\n"])))},3246:function(n,r,e){e.d(r,{J1:function(){return h},OL:function(){return m},i5:function(){return w},l0:function(){return b},lX:function(){return c},vw:function(){return u},yt:function(){return g}});var t,o,i,a,s,p,l,d=e(168),f=e(2499),x=e(4373),u=f.Z.h2(t||(t=(0,d.Z)(["\n  position: relative;\n  color: #fff;\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  margin-top: 10px;\n  margin-left: 40px;\n  margin-bottom: 20px;\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 30px;\n    width: 80px;\n    height: 4px;\n    background: #fff;\n  }\n"]))),b=f.Z.form(o||(o=(0,d.Z)(["\n  width: 50%;\n  padding: 20px;\n  margin: 10px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  backdrop-filter: blur(5px);\n  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n"]))),c=f.Z.label(i||(i=(0,d.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n  position: relative;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  margin-top: 10px;\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 20px;\n    width: 20px;\n    height: 1px;\n    background: #fff;\n  }\n"]))),g=f.Z.input(a||(a=(0,d.Z)(["\n  width: 100%;\n  height: 60px;\n  border: none;\n  outline: none;\n  padding: 10px 20px;\n  margin-top: 10px;\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 1px;\n  border-radius: 10px;\n  backdrop-filter: blur(5px);\n  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n\n  &::placeholder {\n    color: rgba(255, 255, 255, 0.5);\n  }\n"]))),h=f.Z.p(s||(s=(0,d.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 10px;\n  font-size: 10px;\n  color: #ff359b;\n"]))),m=f.Z.button(p||(p=(0,d.Z)(["\n  cursor: pointer;\n  margin-top: 20px;\n  width: 80px;\n  height: 80px;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-size: 2em;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(4px);\n  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 50px;\n    height: 100%;\n    background: rgba(255, 255, 255, 0.5);\n    transform: skewX(45deg) translateX(150px);\n    transition: 0.5s;\n  }\n\n  &:hover::before {\n    transform: skewX(45deg) translateX(-150px);\n  }\n"]))),w=(0,f.Z)(x.DVR)(l||(l=(0,d.Z)([""])))},2751:function(n,r,e){e.r(r),e.d(r,{default:function(){return x}});var t=e(8861),o=e(1413),i=e(1134),a=e(9434),s=e(8859),p=e(6140),l=e(3246),d=e(3329),f=function(){var n=(0,a.I0)(),r=(0,i.cI)(),e=r.register,t=r.handleSubmit,f=r.resetField,x=r.formState.errors;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.vw,{children:"Registration"}),(0,d.jsxs)(l.l0,{onSubmit:t((function(r){n(s.r5.register(r)).unwrap().then((function(){return p.Am.success("Registration completed!")})).catch((function(){return p.Am.error("Registration failed!")})),f("name"),f("email"),f("password")})),children:[(0,d.jsxs)(l.lX,{children:["Name",(0,d.jsx)(l.yt,(0,o.Z)((0,o.Z)({},e("name")),{},{title:"Name may contain only letters, apostrophe, dash and spaces.",required:!0,autoComplete:"off"}))]}),(0,d.jsxs)(l.lX,{children:["Email",(0,d.jsx)(l.yt,(0,o.Z)((0,o.Z)({},e("email",{required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Enter a valid e-mail address"}})),{},{type:"email",required:!0,autoComplete:"off"})),x.email&&(0,d.jsx)(l.J1,{children:x.email.message})]}),(0,d.jsxs)(l.lX,{children:["Password",(0,d.jsx)(l.yt,(0,o.Z)((0,o.Z)({},e("password")),{},{type:"password",required:!0,autoComplete:"off"}))]}),(0,d.jsx)(l.OL,{type:"submit",children:(0,d.jsx)(l.i5,{})})]})]})},x=function(){return(0,d.jsx)(t.W,{children:(0,d.jsx)(f,{})})}}}]);
//# sourceMappingURL=751.345ec2f0.chunk.js.map