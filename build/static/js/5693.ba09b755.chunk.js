"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[5693],{5693:(e,a,n)=>{n.r(a),n.d(a,{default:()=>C});var t=n(1135),r=n(5043),o=n(3216),i=n(5475),s=n(4535),c=n(6946),l=n(6240),d=n(2110),u=n(8903),m=n(2788),h=n(1962),p=n(2812),x=n(899),g=n(2754),A=n(3288),b=n(579);const v=(0,s.Ay)(c.A)((()=>({display:"flex",alignItems:"center"}))),f=(0,s.Ay)(v)((()=>({justifyContent:"center"}))),k=(0,s.Ay)(f)((()=>({height:"100%",padding:"32px",background:"rgba(0, 0, 0, 0.01)"}))),y=(0,s.Ay)(f)((()=>({background:"#1A2038",minHeight:"100vh !important","& .card":{maxWidth:800,minHeight:400,margin:"1rem",display:"flex",borderRadius:12,alignItems:"center"}}))),j={email:"",password:"",username:"",remember:!0},w=x.Ik().shape({password:x.Yj().min(6,"Password must be 6 character length").required("Password is required!"),email:x.Yj().email("Invalid Email address").required("Email is required!")});function C(){const e=(0,l.A)(),{register:a}=(0,g.A)(),n=(0,o.Zp)(),[s,x]=(0,r.useState)(!1);return(0,b.jsx)(y,{children:(0,b.jsx)(d.A,{className:"card",children:(0,b.jsxs)(u.Ay,{container:!0,children:[(0,b.jsx)(u.Ay,{item:!0,sm:6,xs:12,children:(0,b.jsx)(k,{children:(0,b.jsx)("img",{width:"100%",alt:"Register",src:"/assets/images/illustrations/posting_photo.svg"})})}),(0,b.jsx)(u.Ay,{item:!0,sm:6,xs:12,children:(0,b.jsx)(c.A,{p:4,height:"100%",children:(0,b.jsx)(t.l1,{onSubmit:e=>{x(!0);try{a(e.email,e.username,e.password),n("/"),x(!1)}catch(t){console.log(t),x(!1)}},initialValues:j,validationSchema:w,children:a=>{let{values:n,errors:t,touched:r,handleChange:o,handleBlur:c,handleSubmit:l}=a;return(0,b.jsxs)("form",{onSubmit:l,children:[(0,b.jsx)(m.A,{fullWidth:!0,size:"small",type:"text",name:"username",label:"Username",variant:"outlined",onBlur:c,value:n.username,onChange:o,helperText:r.username&&t.username,error:Boolean(t.username&&r.username),sx:{mb:3}}),(0,b.jsx)(m.A,{fullWidth:!0,size:"small",type:"email",name:"email",label:"Email",variant:"outlined",onBlur:c,value:n.email,onChange:o,helperText:r.email&&t.email,error:Boolean(t.email&&r.email),sx:{mb:3}}),(0,b.jsx)(m.A,{fullWidth:!0,size:"small",name:"password",type:"password",label:"Password",variant:"outlined",onBlur:c,value:n.password,onChange:o,helperText:r.password&&t.password,error:Boolean(t.password&&r.password),sx:{mb:2}}),(0,b.jsxs)(v,{gap:1,alignItems:"center",children:[(0,b.jsx)(h.A,{size:"small",name:"remember",onChange:o,checked:n.remember,sx:{padding:0}}),(0,b.jsx)(A.fz,{fontSize:13,children:"I have read and agree to the terms of service."})]}),(0,b.jsx)(p.A,{type:"submit",color:"primary",loading:s,variant:"contained",sx:{mb:2,mt:3},children:"Register"}),(0,b.jsxs)(A.fz,{children:["Already have an account?",(0,b.jsx)(i.k2,{to:"/session/signin",style:{color:e.palette.primary.main,marginLeft:5},children:"Login"})]})]})}})})})]})})})}},1962:(e,a,n)=>{n.d(a,{A:()=>S});var t=n(8587),r=n(8168),o=n(5043),i=n(8795),s=n(8606),c=n(3650),l=n(3064),d=n(6734),u=n(579);const m=(0,d.A)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,d.A)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=(0,d.A)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var x=n(6803),g=n(2876),A=n(4535),b=n(7056),v=n(2400);function f(e){return(0,v.Ay)("MuiCheckbox",e)}const k=(0,b.A)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),y=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],j=(0,A.Ay)(l.A,{shouldForwardProp:e=>(0,A.ep)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:n}=e;return[a.root,n.indeterminate&&a.indeterminate,"default"!==n.color&&a["color".concat((0,x.A)(n.color))]]}})((e=>{let{theme:a,ownerState:n}=e;return(0,r.A)({color:(a.vars||a).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:a.vars?"rgba(".concat("default"===n.color?a.vars.palette.action.activeChannel:a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,c.X4)("default"===n.color?a.palette.action.active:a.palette[n.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&{["&.".concat(k.checked,", &.").concat(k.indeterminate)]:{color:(a.vars||a).palette[n.color].main},["&.".concat(k.disabled)]:{color:(a.vars||a).palette.action.disabled}})})),w=(0,u.jsx)(h,{}),C=(0,u.jsx)(m,{}),z=(0,u.jsx)(p,{}),S=o.forwardRef((function(e,a){var n,c;const l=(0,g.A)({props:e,name:"MuiCheckbox"}),{checkedIcon:d=w,color:m="primary",icon:h=C,indeterminate:p=!1,indeterminateIcon:A=z,inputProps:b,size:v="medium",className:k}=l,S=(0,t.A)(l,y),B=p?A:h,I=p?A:d,R=(0,r.A)({},l,{color:m,indeterminate:p,size:v}),P=(e=>{const{classes:a,indeterminate:n,color:t}=e,o={root:["root",n&&"indeterminate","color".concat((0,x.A)(t))]},i=(0,s.A)(o,f,a);return(0,r.A)({},a,i)})(R);return(0,u.jsx)(j,(0,r.A)({type:"checkbox",inputProps:(0,r.A)({"data-indeterminate":p},b),icon:o.cloneElement(B,{fontSize:null!=(n=B.props.fontSize)?n:v}),checkedIcon:o.cloneElement(I,{fontSize:null!=(c=I.props.fontSize)?c:v}),ownerState:R,ref:a,className:(0,i.A)(P.root,k)},S,{classes:P}))}))},3064:(e,a,n)=>{n.d(a,{A:()=>f});var t=n(8587),r=n(8168),o=n(5043),i=n(8795),s=n(8606),c=n(6803),l=n(4535),d=n(4516),u=n(5213),m=n(5429),h=n(7056),p=n(2400);function x(e){return(0,p.Ay)("PrivateSwitchBase",e)}(0,h.A)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var g=n(579);const A=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],b=(0,l.Ay)(m.A)((e=>{let{ownerState:a}=e;return(0,r.A)({padding:9,borderRadius:"50%"},"start"===a.edge&&{marginLeft:"small"===a.size?-3:-12},"end"===a.edge&&{marginRight:"small"===a.size?-3:-12})})),v=(0,l.Ay)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),f=o.forwardRef((function(e,a){const{autoFocus:n,checked:o,checkedIcon:l,className:m,defaultChecked:h,disabled:p,disableFocusRipple:f=!1,edge:k=!1,icon:y,id:j,inputProps:w,inputRef:C,name:z,onBlur:S,onChange:B,onFocus:I,readOnly:R,required:P=!1,tabIndex:F,type:N,value:q}=e,E=(0,t.A)(e,A),[H,M]=(0,d.A)({controlled:o,default:Boolean(h),name:"SwitchBase",state:"checked"}),O=(0,u.A)();let L=p;O&&"undefined"===typeof L&&(L=O.disabled);const V="checkbox"===N||"radio"===N,W=(0,r.A)({},e,{checked:H,disabled:L,disableFocusRipple:f,edge:k}),T=(e=>{const{classes:a,checked:n,disabled:t,edge:r}=e,o={root:["root",n&&"checked",t&&"disabled",r&&"edge".concat((0,c.A)(r))],input:["input"]};return(0,s.A)(o,x,a)})(W);return(0,g.jsxs)(b,(0,r.A)({component:"span",className:(0,i.A)(T.root,m),centerRipple:!0,focusRipple:!f,disabled:L,tabIndex:null,role:void 0,onFocus:e=>{I&&I(e),O&&O.onFocus&&O.onFocus(e)},onBlur:e=>{S&&S(e),O&&O.onBlur&&O.onBlur(e)},ownerState:W,ref:a},E,{children:[(0,g.jsx)(v,(0,r.A)({autoFocus:n,checked:o,defaultChecked:h,className:T.input,disabled:L,id:V?j:void 0,name:z,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const a=e.target.checked;M(a),B&&B(e,a)},readOnly:R,ref:C,required:P,ownerState:W,tabIndex:F,type:N},"checkbox"===N&&void 0===q?{}:{value:q},w)),H?l:y]}))}))}}]);
//# sourceMappingURL=5693.ba09b755.chunk.js.map