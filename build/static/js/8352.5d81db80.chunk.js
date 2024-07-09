"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[8352],{4605:(e,r,o)=>{o.d(r,{A:()=>y});var t=o(8587),a=o(8168),l=o(5043),n=o(8795),s=o(8606),i=o(5213),c=o(5865),d=o(6803),u=o(4535),p=o(2876),m=o(7056),b=o(2400);function f(e){return(0,b.Ay)("MuiFormControlLabel",e)}const A=(0,m.A)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]);var h=o(4827),g=o(579);const v=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],w=(0,u.Ay)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[{["& .".concat(A.label)]:r.label},r.root,r["labelPlacement".concat((0,d.A)(o.labelPlacement))]]}})((e=>{let{theme:r,ownerState:o}=e;return(0,a.A)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,["&.".concat(A.disabled)]:{cursor:"default"}},"start"===o.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===o.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===o.labelPlacement&&{flexDirection:"column",marginLeft:16},{["& .".concat(A.label)]:{["&.".concat(A.disabled)]:{color:(r.vars||r).palette.text.disabled}}})})),k=(0,u.Ay)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,r)=>r.asterisk})((e=>{let{theme:r}=e;return{["&.".concat(A.error)]:{color:(r.vars||r).palette.error.main}}})),y=l.forwardRef((function(e,r){var o,u;const m=(0,p.A)({props:e,name:"MuiFormControlLabel"}),{className:b,componentsProps:A={},control:y,disabled:x,disableTypography:F,label:P,labelPlacement:R="end",required:C,slotProps:S={}}=m,N=(0,t.A)(m,v),q=(0,i.A)(),B=null!=(o=null!=x?x:y.props.disabled)?o:null==q?void 0:q.disabled,L=null!=C?C:y.props.required,M={disabled:B,required:L};["checked","name","onChange","value","inputRef"].forEach((e=>{"undefined"===typeof y.props[e]&&"undefined"!==typeof m[e]&&(M[e]=m[e])}));const I=(0,h.A)({props:m,muiFormControl:q,states:["error"]}),j=(0,a.A)({},m,{disabled:B,labelPlacement:R,required:L,error:I.error}),D=(e=>{const{classes:r,disabled:o,labelPlacement:t,error:a,required:l}=e,n={root:["root",o&&"disabled","labelPlacement".concat((0,d.A)(t)),a&&"error",l&&"required"],label:["label",o&&"disabled"],asterisk:["asterisk",a&&"error"]};return(0,s.A)(n,f,r)})(j),E=null!=(u=S.typography)?u:A.typography;let G=P;return null==G||G.type===c.A||F||(G=(0,g.jsx)(c.A,(0,a.A)({component:"span"},E,{className:(0,n.A)(D.label,null==E?void 0:E.className),children:G}))),(0,g.jsxs)(w,(0,a.A)({className:(0,n.A)(D.root,b),ownerState:j,ref:r},N,{children:[l.cloneElement(y,M),G,L&&(0,g.jsxs)(k,{ownerState:j,"aria-hidden":!0,className:D.asterisk,children:["\u2009","*"]})]}))}))},9413:(e,r,o)=>{o.d(r,{A:()=>g});var t=o(8587),a=o(8168),l=o(5043),n=o(8795),s=o(8606),i=o(4535),c=o(2876),d=o(7056),u=o(2400);function p(e){return(0,u.Ay)("MuiFormGroup",e)}(0,d.A)("MuiFormGroup",["root","row","error"]);var m=o(5213),b=o(4827),f=o(579);const A=["className","row"],h=(0,i.Ay)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,o.row&&r.row]}})((e=>{let{ownerState:r}=e;return(0,a.A)({display:"flex",flexDirection:"column",flexWrap:"wrap"},r.row&&{flexDirection:"row"})})),g=l.forwardRef((function(e,r){const o=(0,c.A)({props:e,name:"MuiFormGroup"}),{className:l,row:i=!1}=o,d=(0,t.A)(o,A),u=(0,m.A)(),g=(0,b.A)({props:o,muiFormControl:u,states:["error"]}),v=(0,a.A)({},o,{row:i,error:g.error}),w=(e=>{const{classes:r,row:o,error:t}=e,a={root:["root",o&&"row",t&&"error"]};return(0,s.A)(a,p,r)})(v);return(0,f.jsx)(h,(0,a.A)({className:(0,n.A)(w.root,l),ownerState:v,ref:r},d))}))},3064:(e,r,o)=>{o.d(r,{A:()=>w});var t=o(8587),a=o(8168),l=o(5043),n=o(8795),s=o(8606),i=o(6803),c=o(4535),d=o(4516),u=o(5213),p=o(5429),m=o(7056),b=o(2400);function f(e){return(0,b.Ay)("PrivateSwitchBase",e)}(0,m.A)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var A=o(579);const h=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],g=(0,c.Ay)(p.A)((e=>{let{ownerState:r}=e;return(0,a.A)({padding:9,borderRadius:"50%"},"start"===r.edge&&{marginLeft:"small"===r.size?-3:-12},"end"===r.edge&&{marginRight:"small"===r.size?-3:-12})})),v=(0,c.Ay)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),w=l.forwardRef((function(e,r){const{autoFocus:o,checked:l,checkedIcon:c,className:p,defaultChecked:m,disabled:b,disableFocusRipple:w=!1,edge:k=!1,icon:y,id:x,inputProps:F,inputRef:P,name:R,onBlur:C,onChange:S,onFocus:N,readOnly:q,required:B=!1,tabIndex:L,type:M,value:I}=e,j=(0,t.A)(e,h),[D,E]=(0,d.A)({controlled:l,default:Boolean(m),name:"SwitchBase",state:"checked"}),G=(0,u.A)();let T=b;G&&"undefined"===typeof T&&(T=G.disabled);const z="checkbox"===M||"radio"===M,O=(0,a.A)({},e,{checked:D,disabled:T,disableFocusRipple:w,edge:k}),W=(e=>{const{classes:r,checked:o,disabled:t,edge:a}=e,l={root:["root",o&&"checked",t&&"disabled",a&&"edge".concat((0,i.A)(a))],input:["input"]};return(0,s.A)(l,f,r)})(O);return(0,A.jsxs)(g,(0,a.A)({component:"span",className:(0,n.A)(W.root,p),centerRipple:!0,focusRipple:!w,disabled:T,tabIndex:null,role:void 0,onFocus:e=>{N&&N(e),G&&G.onFocus&&G.onFocus(e)},onBlur:e=>{C&&C(e),G&&G.onBlur&&G.onBlur(e)},ownerState:O,ref:r},j,{children:[(0,A.jsx)(v,(0,a.A)({autoFocus:o,checked:l,defaultChecked:m,className:W.input,disabled:T,id:z?x:void 0,name:R,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const r=e.target.checked;E(r),S&&S(e,r)},readOnly:q,ref:P,required:B,ownerState:O,tabIndex:L,type:M},"checkbox"===M&&void 0===I?{}:{value:I},F)),D?c:y]}))}))}}]);
//# sourceMappingURL=8352.5d81db80.chunk.js.map