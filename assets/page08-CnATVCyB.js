import{r as S,j as e,R as r,S as b,a as P,p as M,b as $}from"./index-m1yIT_lq.js";function A(s){for(let n=s.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[s[n],s[i]]=[s[i],s[n]]}return s}const f=M;f.reverse();const u=f.slice(350,400);function E(){const[s,n]=S.useState(()=>u.map(o=>o.imgs?o.imgs.map(a=>({src:a.src.replace(/\\/g,"/"),width:a.width,height:a.height})):[])),i=(o,a,c)=>{var d=o[a];return o.splice(a,1),o.splice(c,0,d),o};return e.jsx("div",{children:u.map((o,a)=>{const{user:c,mesg:d,avatar:v,time:p,imgs:k}=o,l=s[a]||[],m=l.filter(h=>h.width>h.height).length;l.length-m;const w=m/l.length,N=l.length>0;let t=["妈妈","舅舅","舅妈","天天","爽爽","婆婆"];t=A([...t]);const g=l.length===1?r:b;return e.jsxs("div",{children:[e.jsx("h3",{className:`time ${N?"":"no-page-break"}`,children:`${p}`}),e.jsxs("div",{className:"postline",children:[e.jsx("div",{className:"logo01_box",children:e.jsx("img",{src:`${v}`})}),e.jsxs("div",{className:"textwrap",children:[e.jsx("div",{className:"user",children:`${c}`}),e.jsx("div",{className:"mesg",children:`${d}`})]})]}),e.jsx(g,{gallery:g===r?void 0:r,rowConstraints:g===r?{singleRowMaxHeight:850}:m>=3||w>=1/3?{maxPhotos:3,minPhotos:1}:{maxPhotos:5,minPhotos:2,singleRowMaxHeight:300},spacing:10,padding:10,photos:l,movePhoto:(h,x)=>{const R=i(l,h,x),j=[...s];j[a]=R,n(j)}}),e.jsxs("div",{className:"likes-bar",children:[e.jsx("span",{children:"♡ "}),t.slice(0,t.length-2).map((h,x)=>e.jsxs(P.Fragment,{children:[e.jsx("a",{href:"#",children:h}),e.jsx("span",{className:"separator",children:","})]},x)),t.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"#",children:t[t.length-2]}),e.jsx("span",{className:"separator",children:","}),e.jsx("a",{href:"#",children:t[t.length-1]})]}),t.length===1&&e.jsx("a",{href:"#",children:t[0]})]})]},p)})})}$.createRoot(document.getElementById("root")).render(e.jsxs(P.StrictMode,{children:[e.jsx("header",{}),e.jsx("main",{children:e.jsx(E,{})})]}));document.querySelectorAll("img").forEach(s=>{s.setAttribute("loading","eager")});
