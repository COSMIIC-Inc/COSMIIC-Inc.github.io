"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6386],{5187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(4848),i=n(8453);const s={sidebar_position:3},r="Biopotential Recording Module",a={id:"Implantables/BP-Module",title:"Biopotential Recording Module",description:"The thing that takes in signals",source:"@site/docs/Implantables/BP-Module.md",sourceDirName:"Implantables",slug:"/Implantables/BP-Module",permalink:"/Implantables/BP-Module",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Pulse Generator Module",permalink:"/Implantables/PG-Module"},next:{title:"Electrodes",permalink:"/Implantables/Electrodes"}},l={},c=[{value:"Product Description",id:"product-description",level:2},{value:"Coming soon...",id:"coming-soon",level:2}];function d(e){const t={h1:"h1",h2:"h2",hr:"hr",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"biopotential-recording-module",children:"Biopotential Recording Module"}),"\n",(0,o.jsx)(t.p,{children:"The thing that takes in signals"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"product-description",children:"Product Description"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"image",src:n(8065).A+"",width:"2446",height:"1116"})}),"\n",(0,o.jsx)(t.p,{children:"Myoelectric signals (MES) from muscles under voluntary control are recorded by the biopotential recording module (BP). The BP is designed to record myoelectric signals and process those signals for the purposes of neuroprosthetic control. The BP can record MES from two different muscles and process the signals independently for different control needs. The recording electrodes can be either an epimysial or intramuscular design and consist of two metal contacts separated by 1cm for differential recording."}),"\n",(0,o.jsx)(t.p,{children:"The fundamental principles of the myoelectric signal processing in the BP is similar to the processing in our current generation of implanted devices, the IST-12, which have demonstrated excellent functional utility [Kilgore et al., 2008].  The purpose of the signal  processing is to generate a usable control signal (or signals) from the biopotential signal  obtained from the muscle.  The processed signal can either be used as a direct proportional control signal, such as the signal used to control grasp opening or closing, or it can be used as a logic signal, such as the signal used to switch between grasp patterns.  Without appropriate processing, MES tends to fluctuate too rapidly for practical use as a neuroprosthetic control. Thus, the primary goal of the signal processing is to produce a smoothly varying and stable signal without significant delay between the generation of the MES and the resultant change in the processed signal."}),"\n",(0,o.jsx)(t.p,{children:"An important aspect of MES acquisition in neuroprosthetics is the need to account for the stimulus artifact. Electrical stimulation of nearby muscles produces large artifacts on the MES recording that can completely distort the signal during and immediately after the stimulus is delivered. The BP can use multiple signal processing methods to maximize the signal quality during electrical stimulation, including lowering the signal gain during stimulation and blanking the stimulus artifact."}),"\n",(0,o.jsx)(t.p,{children:"The module is sized small enough so that it can be located in the extremities, near the muscles to be recorded from. This has the advantage of reducing the lead length, improving the signal quality and minimizing the range of electrode lead lengths that need to be brought into surgery."}),"\n",(0,o.jsx)(t.p,{children:"The BP is connected to the NNP network through a single network cable.  The BP gains power from the network, receives data from the network that to determine signal processing parameters and other administrative functions, and places two channels of processed myoelectric data on the network for use by any other module connected to the network. The BP has four total network connections, allowing a single BP to branch from a single network input to network output to three additional remote modules.The BP has internal processing based on the AVR-core processor (Atmel AT90CAN128).  The processing, network interface and powering is identical to the PG module. Computational processing in the BP is used to identify relevant network data and perform the signal processing on the recorded myoelectric signal."}),"\n",(0,o.jsx)(t.h2,{id:"coming-soon",children:"Coming soon..."}),"\n",(0,o.jsx)(t.p,{children:"Specifications, drawings, and test data are on their way"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8065:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/bp-e1c55012077a6c504fb6ed9a88e02fb2.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(6540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);