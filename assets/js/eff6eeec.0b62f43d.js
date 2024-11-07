"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8392],{9127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"Implantables/PG-Module","title":"Pulse Generator Module","description":"4-channel IPG module","source":"@site/docs/Implantables/PG-Module.md","sourceDirName":"Implantables","slug":"/Implantables/PG-Module","permalink":"/Implantables/PG-Module","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Power Module","permalink":"/Implantables/Power-Module"},"next":{"title":"Biopotential Recording Module","permalink":"/Implantables/BP-Module"}}');var i=t(4848),a=t(8453);const s={sidebar_position:2},r="Pulse Generator Module",l={},d=[{value:"Component Overview",id:"component-overview",level:2},{value:"Technical Description",id:"technical-description",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Mechanical Design Files and Drawings",id:"mechanical-design-files-and-drawings",level:3},{value:"Coming soon...",id:"coming-soon",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"pulse-generator-module",children:"Pulse Generator Module"})}),"\n",(0,i.jsx)(n.p,{children:"4-channel IPG module"}),"\n",(0,i.jsx)(n.p,{children:"Quick links:"}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udd17"," ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://github.com/COSMIIC-Inc/Implantables-PulseGenerator-Hardware",children:"Implantables-PulseGenerator-Hardware on COSMIIC GitHub"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"component-overview",children:"Component Overview"}),"\n",(0,i.jsx)(n.p,{children:"The four-channel pulse generator module (PG) is a remote module utilized for electrical stimulation of nerve and muscle tissue. The PG can deliver stimulation to four independent monopolar electrodes, using the metal case of the PG as the common return electrode. The PG is small enough to be located in the extremities, including the upper arm and forearm, thus minimizing electrode lead length and simplifying surgical lead routing. The PG is connected to the NNP network through a single network cable. The PG gains power from the network, receives data from the network that is utilized to determine the stimulation parameters that should be delivered, and places data on the network regarding its status. The PG has four total network connections, allowing a single PG to branch from a single network input to three network outputs."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"pulse",src:t(3276).A+"",width:"2446",height:"1116"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"technical-description",children:"Technical Description"}),"\n",(0,i.jsx)(n.p,{children:"The PG has internal processing based on the AVR-core processor (Atmel AT90CAN128). Computational processing is used to identify relevant network data (typically control signal levels from the sensor module) and convert that data into the appropriate stimulus levels to each electrode based on pre-programmed patterns. These patterns are customized to provide the desired coordinated functional responses from each muscle and nerve. The PG combines three levels of failsafe mechanisms to assure that potentially damaging stimulation is not delivered: 1) hardware limits on total charge per pulse, 2) software limits on stimulation parameters, and 3) failsafe magnetic switches in both the PG and the power module."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,i.jsx)(n.h3,{id:"mechanical-design-files-and-drawings",children:"Mechanical Design Files and Drawings"}),"\n",(0,i.jsx)(n.p,{children:"All files and drawings for the design of the Biopotential Recording Module are available on the COSMIIC GitHub here:"}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udd17"," ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://github.com/COSMIIC-Inc/Implantables-PulseGenerator-Hardware/tree/main/Mechanical%20Design%20CAD%20Files",children:'Implantables-PulseGenerator-Hardware/"Mechanical Design CAD Files" on COSMIIC GitHub'})})]}),"\n",(0,i.jsx)(n.h2,{id:"coming-soon",children:"Coming soon..."}),"\n",(0,i.jsx)(n.p,{children:"Information on the module firmware, fabrication process, manufacturing partners, and how to obtain Pulse Generator Modules will be uploaded soon."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},3276:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/pg-c3678866177f08624977eef085118983.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(6540);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);