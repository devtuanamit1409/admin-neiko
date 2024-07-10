"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[3013],{9347:(e,o,r)=>{r.d(o,{A:()=>x});var t=r(8587),a=r(8168),n=r(5043),i=r(8795),l=r(8606),s=r(4535),c=r(2876),d=r(7056),p=r(2400);function u(e){return(0,p.Ay)("MuiDialogActions",e)}(0,d.A)("MuiDialogActions",["root","spacing"]);var m=r(579);const A=["className","disableSpacing"],h=(0,s.Ay)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,!r.disableSpacing&&o.spacing]}})((e=>{let{ownerState:o}=e;return(0,a.A)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),x=n.forwardRef((function(e,o){const r=(0,c.A)({props:e,name:"MuiDialogActions"}),{className:n,disableSpacing:s=!1}=r,d=(0,t.A)(r,A),p=(0,a.A)({},r,{disableSpacing:s}),x=(e=>{const{classes:o,disableSpacing:r}=e,t={root:["root",!r&&"spacing"]};return(0,l.A)(t,u,o)})(p);return(0,m.jsx)(h,(0,a.A)({className:(0,i.A)(x.root,n),ownerState:p,ref:o},d))}))},5316:(e,o,r)=>{r.d(o,{A:()=>g});var t=r(8587),a=r(8168),n=r(5043),i=r(8795),l=r(8606),s=r(4535),c=r(2876),d=r(7056),p=r(2400);function u(e){return(0,p.Ay)("MuiDialogContent",e)}(0,d.A)("MuiDialogContent",["root","dividers"]);var m=r(7034),A=r(579);const h=["className","dividers"],x=(0,s.Ay)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.dividers&&o.dividers]}})((e=>{let{theme:o,ownerState:r}=e;return(0,a.A)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},r.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((o.vars||o).palette.divider),borderBottom:"1px solid ".concat((o.vars||o).palette.divider)}:{[".".concat(m.A.root," + &")]:{paddingTop:0}})})),g=n.forwardRef((function(e,o){const r=(0,c.A)({props:e,name:"MuiDialogContent"}),{className:n,dividers:s=!1}=r,d=(0,t.A)(r,h),p=(0,a.A)({},r,{dividers:s}),m=(e=>{const{classes:o,dividers:r}=e,t={root:["root",r&&"dividers"]};return(0,l.A)(t,u,o)})(p);return(0,A.jsx)(x,(0,a.A)({className:(0,i.A)(m.root,n),ownerState:p,ref:o},d))}))},7034:(e,o,r)=>{r.d(o,{A:()=>i,t:()=>n});var t=r(7056),a=r(2400);function n(e){return(0,a.Ay)("MuiDialogTitle",e)}const i=(0,t.A)("MuiDialogTitle",["root"])},3462:(e,o,r)=>{r.d(o,{A:()=>k});var t=r(8587),a=r(8168),n=r(5043),i=r(8795),l=r(8606),s=r(992),c=r(6803),d=r(4982),p=r(6258),u=r(3336),m=r(2876),A=r(4535),h=r(3436),x=r(2563),g=r(2220),f=r(6240),v=r(579);const b=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],S=(0,A.Ay)(g.A,{name:"MuiDialog",slot:"Backdrop",overrides:(e,o)=>o.backdrop})({zIndex:-1}),W=(0,A.Ay)(d.A,{name:"MuiDialog",slot:"Root",overridesResolver:(e,o)=>o.root})({"@media print":{position:"absolute !important"}}),w=(0,A.Ay)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.container,o["scroll".concat((0,c.A)(r.scroll))]]}})((e=>{let{ownerState:o}=e;return(0,a.A)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===o.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===o.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),y=(0,A.Ay)(u.A,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.paper,o["scrollPaper".concat((0,c.A)(r.scroll))],o["paperWidth".concat((0,c.A)(String(r.maxWidth)))],r.fullWidth&&o.paperFullWidth,r.fullScreen&&o.paperFullScreen]}})((e=>{let{theme:o,ownerState:r}=e;return(0,a.A)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===r.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===r.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!r.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===r.maxWidth&&{maxWidth:"px"===o.breakpoints.unit?Math.max(o.breakpoints.values.xs,444):"max(".concat(o.breakpoints.values.xs).concat(o.breakpoints.unit,", 444px)"),["&.".concat(h.A.paperScrollBody)]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},r.maxWidth&&"xs"!==r.maxWidth&&{maxWidth:"".concat(o.breakpoints.values[r.maxWidth]).concat(o.breakpoints.unit),["&.".concat(h.A.paperScrollBody)]:{[o.breakpoints.down(o.breakpoints.values[r.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},r.fullWidth&&{width:"calc(100% - 64px)"},r.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,["&.".concat(h.A.paperScrollBody)]:{margin:0,maxWidth:"100%"}})})),k=n.forwardRef((function(e,o){const r=(0,m.A)({props:e,name:"MuiDialog"}),d=(0,f.A)(),A={enter:d.transitions.duration.enteringScreen,exit:d.transitions.duration.leavingScreen},{"aria-describedby":g,"aria-labelledby":k,BackdropComponent:D,BackdropProps:C,children:M,className:P,disableEscapeKeyDown:B=!1,fullScreen:R=!1,fullWidth:N=!1,maxWidth:T="sm",onBackdropClick:j,onClose:F,open:E,PaperComponent:I=u.A,PaperProps:K={},scroll:Y="paper",TransitionComponent:X=p.A,transitionDuration:H=A,TransitionProps:L}=r,_=(0,t.A)(r,b),z=(0,a.A)({},r,{disableEscapeKeyDown:B,fullScreen:R,fullWidth:N,maxWidth:T,scroll:Y}),O=(e=>{const{classes:o,scroll:r,maxWidth:t,fullWidth:a,fullScreen:n}=e,i={root:["root"],container:["container","scroll".concat((0,c.A)(r))],paper:["paper","paperScroll".concat((0,c.A)(r)),"paperWidth".concat((0,c.A)(String(t))),a&&"paperFullWidth",n&&"paperFullScreen"]};return(0,l.A)(i,h.f,o)})(z),q=n.useRef(),G=(0,s.A)(k),J=n.useMemo((()=>({titleId:G})),[G]);return(0,v.jsx)(W,(0,a.A)({className:(0,i.A)(O.root,P),closeAfterTransition:!0,components:{Backdrop:S},componentsProps:{backdrop:(0,a.A)({transitionDuration:H,as:D},C)},disableEscapeKeyDown:B,onClose:F,open:E,ref:o,onClick:e=>{q.current&&(q.current=null,j&&j(e),F&&F(e,"backdropClick"))},ownerState:z},_,{children:(0,v.jsx)(X,(0,a.A)({appear:!0,in:E,timeout:H,role:"presentation"},L,{children:(0,v.jsx)(w,{className:(0,i.A)(O.container),onMouseDown:e=>{q.current=e.target===e.currentTarget},ownerState:z,children:(0,v.jsx)(y,(0,a.A)({as:I,elevation:24,role:"dialog","aria-describedby":g,"aria-labelledby":G},K,{className:(0,i.A)(O.paper,K.className),ownerState:z,children:(0,v.jsx)(x.A.Provider,{value:J,children:M})}))})}))}))}))},2563:(e,o,r)=>{r.d(o,{A:()=>t});const t=r(5043).createContext({})},3436:(e,o,r)=>{r.d(o,{A:()=>i,f:()=>n});var t=r(7056),a=r(2400);function n(e){return(0,a.Ay)("MuiDialog",e)}const i=(0,t.A)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"])}}]);
//# sourceMappingURL=3013.e655a803.chunk.js.map