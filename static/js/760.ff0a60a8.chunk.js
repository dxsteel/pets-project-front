"use strict";(self.webpackChunkpets_project_front=self.webpackChunkpets_project_front||[]).push([[760],{5854:function(n,e,r){r.d(e,{II:function(){return g},W2:function(){return f},fG:function(){return Z},rU:function(){return j},xv:function(){return x},y:function(){return b},zx:function(){return w}});var t,o,i,s,a,l,c,u=r(168),d=r(9202),p=r(918),m=r(5705),h=r(1087),f=d.Z.div(t||(t=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),x=d.Z.h1(o||(o=(0,u.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  color: ",";\n  line-height: 1.4;\n  letter-spacing: 0.04em;\n  margin-top: 42px;\n  margin-bottom: 40px;\n"])),p.Z.colors.primaryBtnText),g=(0,d.Z)(m.gN)(i||(i=(0,u.Z)(["\n  width: 280px;\n  height: 40px;\n  border: 1px solid rgba(245, 146, 86, 0.5);\n  border-radius: 40px;\n  background: #fdf7f2;\n  font-size: 14px;\n  line-height: 19px;\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.04em;\n  color: rgba(17, 17, 17, 0.6);\n  :hover {\n    border: 1px solid rgba(245, 146, 86, 0.5);\n  }\n"]))),w=d.Z.button(s||(s=(0,u.Z)(["\n  cursor: pointer;\n  border-color: #f59256;\n  border-radius: 40px;\n  width: 280px;\n  height: 44px;\n  padding: 10px 28px;\n  color: white;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.4;\n  letter-spacing: 0.04em;\n  background: ",";\n  margin-top: 40px;\n  :hover {\n    background-color: #995024;\n  }\n"])),p.Z.colors.accent),b=d.Z.p(a||(a=(0,u.Z)(["\n  color: red;\n  text-align: center;\n  margin-top: 10px;\n"]))),Z=d.Z.p(l||(l=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.34;\n  color: ",";\n  letter-spacing: 0.04em;\n  margin-top: 40px;\n"])),p.Z.colors.greyText),j=(0,d.Z)(h.rU)(c||(c=(0,u.Z)(["\n  text-decoration-line: underline;\n  color: blue;\n  margin-left: 5px;\n"])))},2760:function(n,e,r){r.r(e),r.d(e,{default:function(){return h}});var t=r(4165),o=r(5861),i=r(885),s=r(5705),a=r(5854),l=r(1705),c=r(3357),u=r(3329),d={email:"",password:""},p=function(n){var e=n.name;return(0,u.jsx)(s.Bc,{name:e,render:function(n){return(0,u.jsx)(a.y,{children:n})}})},m=function(){var n=(0,c.YA)(),e=(0,i.Z)(n,2),r=e[0],m=e[1],h=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e,o){var i,s;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),console.log(o),i=e.email,s=e.password,r({email:i,password:s}).unwrap().then((function(n){console.log("User successfully registered")})).catch((function(){return console.log("Handle errors")})),console.log(m),n.next=7,new Promise((function(n){return setTimeout(n,1e3)}));case 7:o.resetForm();case 8:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}();return(0,u.jsxs)(a.W2,{children:[(0,u.jsx)(a.xv,{children:"Login"}),(0,u.jsx)(s.J9,{initialValues:d,validationSchema:l.dm,onSubmit:h,children:function(n){var e=n.isSubmitting;return(0,u.jsxs)(s.l0,{autoComplete:"off",children:[(0,u.jsxs)("label",{htmlFor:"email",children:[(0,u.jsx)(a.II,{type:"email",name:"email",id:"email",placeholder:"Email"}),(0,u.jsx)(p,{name:"email"})]}),(0,u.jsxs)("label",{htmlFor:"password",children:[(0,u.jsx)(a.II,{type:"password",name:"password",id:"password",placeholder:"Password"}),(0,u.jsx)(p,{name:"password"})]}),(0,u.jsx)(a.zx,{disabled:e,type:"submit",children:"Login"})]})}}),(0,u.jsxs)(a.fG,{children:["Don't have an account? ",(0,u.jsx)(a.rU,{to:"/register",children:"Register"})]})]})},h=function(){return(0,u.jsx)(m,{})}},1705:function(n,e,r){r.d(e,{BZ:function(){return s},dm:function(){return i},yT:function(){return a}});var t=r(2797),o=/^(?!.* ).{7,32}$/,i=t.Ry().shape({email:t.Z_().email("Please enter a valid email").required(),password:t.Z_().min(7,"Password must be at least 7 characters long").max(32,"Password must be at most 32 characters").matches(o,{message:"Please enter password without spaces"}).required()}),s=t.Ry().shape({email:t.Z_().email("Please enter a valid email").required(),password:t.Z_().min(7,"Password must be at least 7 characters long").max(32,"Password must be at most 32 characters").matches(o,{message:"Please enter password without spaces"}).required(),confirmPassword:t.Z_().oneOf([t.iH("password"),null],"Passwords must match").required()}),a=t.Ry().shape({name:t.Z_().required(),location:t.IX().of(t.Z_()).nullable(),phone:t.Rx().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").min(8).required("A phone number is required")})}}]);
//# sourceMappingURL=760.ff0a60a8.chunk.js.map