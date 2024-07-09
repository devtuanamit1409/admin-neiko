"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[8775],{8775:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var a=n(5043),i=n(6213),o=n(9252),r=n(6946),s=n(5865),d=n(8903),c=n(2788),l=n(3404),m=n(2110),u=n(6591),p=n(6494),h=n(579);const x=()=>{const[e,t]=(0,a.useState)({title:"",firstBanner:"",subTitle:"",secondBanner:"",description:"",subDescription:""}),[n,x]=(0,a.useState)(null),[A,g]=(0,a.useState)(null),[f,b]=(0,a.useState)(null),[v,y]=(0,a.useState)(null);(0,a.useEffect)((()=>{j()}),[]);const j=async()=>{try{const e=await i.A.get("https://demo-sigma.site/api/info");t(e.data),e.data.firstBanner&&b("https://demo-sigma.site/".concat(e.data.firstBanner)),e.data.secondBanner&&y("https://demo-sigma.site/".concat(e.data.secondBanner))}catch(e){console.error(e.message)}},C=n=>{const{name:a,value:i}=n.target;t({...e,[a]:i})},S=e=>{const{name:t,files:n}=e.target,a=n[0];"firstBanner"===t?(x(a),b(URL.createObjectURL(a))):"secondBanner"===t&&(g(a),y(URL.createObjectURL(a)))};return(0,h.jsx)(o.A,{maxWidth:"md",children:(0,h.jsxs)(r.A,{sx:{my:4},children:[(0,h.jsx)(s.A,{variant:"h4",component:"h1",gutterBottom:!0,children:"Update Info"}),(0,h.jsx)("form",{onSubmit:async a=>{a.preventDefault();const o=new FormData;o.append("title",e.title),o.append("subTitle",e.subTitle),o.append("description",e.description),o.append("subDescription",e.subDescription),n&&o.append("firstBanner",n),A&&o.append("secondBanner",A);try{const e=await i.A.put("https://demo-sigma.site/api/info",o,{headers:{"Content-Type":"multipart/form-data"}});t(e.data),alert("Info updated successfully!")}catch(r){console.error(r.message),alert("Failed to update info")}},children:(0,h.jsxs)(d.Ay,{container:!0,spacing:2,children:[(0,h.jsx)(d.Ay,{item:!0,xs:12,children:(0,h.jsx)(c.A,{fullWidth:!0,label:"Title",name:"title",value:e.title,onChange:C,required:!0})}),(0,h.jsx)(d.Ay,{item:!0,xs:12,children:(0,h.jsx)(c.A,{fullWidth:!0,label:"Sub Title",name:"subTitle",value:e.subTitle,onChange:C,required:!0})}),(0,h.jsx)(d.Ay,{item:!0,xs:12,children:(0,h.jsx)(c.A,{fullWidth:!0,label:"Description",name:"description",value:e.description,onChange:C,multiline:!0,rows:4,required:!0})}),(0,h.jsx)(d.Ay,{item:!0,xs:12,children:(0,h.jsx)(c.A,{fullWidth:!0,label:"Sub Description",name:"subDescription",value:e.subDescription,onChange:C,multiline:!0,rows:2,required:!0})}),(0,h.jsxs)(d.Ay,{item:!0,xs:12,children:[(0,h.jsxs)(l.A,{variant:"contained",component:"label",children:["Upload First Banner",(0,h.jsx)("input",{type:"file",name:"firstBanner",hidden:!0,onChange:S})]}),f&&(0,h.jsxs)(m.A,{sx:{mt:2},children:[(0,h.jsx)(u.A,{component:"img",height:"200",image:f,alt:"First Banner"}),(0,h.jsx)(p.A,{children:(0,h.jsx)(s.A,{variant:"body2",color:"text.secondary",children:"First Banner Preview"})})]})]}),(0,h.jsxs)(d.Ay,{item:!0,xs:12,children:[(0,h.jsxs)(l.A,{variant:"contained",component:"label",children:["Upload Second Banner",(0,h.jsx)("input",{type:"file",name:"secondBanner",hidden:!0,onChange:S})]}),v&&(0,h.jsxs)(m.A,{sx:{mt:2},children:[(0,h.jsx)(u.A,{component:"img",height:"200",image:v,alt:"Second Banner"}),(0,h.jsx)(p.A,{children:(0,h.jsx)(s.A,{variant:"body2",color:"text.secondary",children:"Second Banner Preview"})})]})]}),(0,h.jsx)(d.Ay,{item:!0,xs:12,children:(0,h.jsx)(l.A,{variant:"contained",color:"primary",type:"submit",children:"Update Info"})})]})})]})})}},6494:(e,t,n)=>{n.d(t,{A:()=>A});var a=n(8168),i=n(8587),o=n(5043),r=n(8795),s=n(8606),d=n(4535),c=n(2876),l=n(7056),m=n(2400);function u(e){return(0,m.Ay)("MuiCardContent",e)}(0,l.A)("MuiCardContent",["root"]);var p=n(579);const h=["className","component"],x=(0,d.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),A=o.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiCardContent"}),{className:o,component:d="div"}=n,l=(0,i.A)(n,h),m=(0,a.A)({},n,{component:d}),A=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},u,t)})(m);return(0,p.jsx)(x,(0,a.A)({as:d,className:(0,r.A)(A.root,o),ownerState:m,ref:t},l))}))},6591:(e,t,n)=>{n.d(t,{A:()=>f});var a=n(8587),i=n(8168),o=n(5043),r=n(8795),s=n(8606),d=n(2876),c=n(4535),l=n(7056),m=n(2400);function u(e){return(0,m.Ay)("MuiCardMedia",e)}(0,l.A)("MuiCardMedia",["root","media","img"]);var p=n(579);const h=["children","className","component","image","src","style"],x=(0,c.Ay)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{isMediaComponent:a,isImageComponent:i}=n;return[t.root,a&&t.media,i&&t.img]}})((e=>{let{ownerState:t}=e;return(0,i.A)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),A=["video","audio","picture","iframe","img"],g=["picture","img"],f=o.forwardRef((function(e,t){const n=(0,d.A)({props:e,name:"MuiCardMedia"}),{children:o,className:c,component:l="div",image:m,src:f,style:b}=n,v=(0,a.A)(n,h),y=-1!==A.indexOf(l),j=!y&&m?(0,i.A)({backgroundImage:'url("'.concat(m,'")')},b):b,C=(0,i.A)({},n,{component:l,isMediaComponent:y,isImageComponent:-1!==g.indexOf(l)}),S=(e=>{const{classes:t,isMediaComponent:n,isImageComponent:a}=e,i={root:["root",n&&"media",a&&"img"]};return(0,s.A)(i,u,t)})(C);return(0,p.jsx)(x,(0,i.A)({className:(0,r.A)(S.root,c),as:l,role:!y&&m?"img":void 0,ref:t,style:j,ownerState:C,src:y?m||f:void 0},v,{children:o}))}))},9252:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(8587),i=n(8168),o=n(5043),r=n(8387),s=n(2400),d=n(8606),c=n(410),l=n(2900),m=n(9644),u=n(7322),p=n(579);const h=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,u.A)(),A=(0,m.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t["maxWidth".concat((0,c.A)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),g=e=>(0,l.A)({props:e,name:"MuiContainer",defaultTheme:x});var f=n(6803),b=n(4535),v=n(2876);const y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=A,useThemeProps:n=g,componentName:l="MuiContainer"}=e,m=t((e=>{let{theme:t,ownerState:n}=e;return(0,i.A)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}})}),(e=>{let{theme:t,ownerState:n}=e;return n.fixed&&Object.keys(t.breakpoints.values).reduce(((e,n)=>{const a=n,i=t.breakpoints.values[a];return 0!==i&&(e[t.breakpoints.up(a)]={maxWidth:"".concat(i).concat(t.breakpoints.unit)}),e}),{})}),(e=>{let{theme:t,ownerState:n}=e;return(0,i.A)({},"xs"===n.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},n.maxWidth&&"xs"!==n.maxWidth&&{[t.breakpoints.up(n.maxWidth)]:{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}})})),u=o.forwardRef((function(e,t){const o=n(e),{className:u,component:x="div",disableGutters:A=!1,fixed:g=!1,maxWidth:f="lg"}=o,b=(0,a.A)(o,h),v=(0,i.A)({},o,{component:x,disableGutters:A,fixed:g,maxWidth:f}),y=((e,t)=>{const{classes:n,fixed:a,disableGutters:i,maxWidth:o}=e,r={root:["root",o&&"maxWidth".concat((0,c.A)(String(o))),a&&"fixed",i&&"disableGutters"]};return(0,d.A)(r,(e=>(0,s.Ay)(t,e)),n)})(v,l);return(0,p.jsx)(m,(0,i.A)({as:x,ownerState:v,className:(0,r.A)(y.root,u),ref:t},b))}));return u}({createStyledComponent:(0,b.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t["maxWidth".concat((0,f.A)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,v.A)({props:e,name:"MuiContainer"})}),j=y},9644:(e,t,n)=>{n.d(t,{A:()=>a});const a=(0,n(920).Ay)()}}]);
//# sourceMappingURL=8775.0ffcb14a.chunk.js.map