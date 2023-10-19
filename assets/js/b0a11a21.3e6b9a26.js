"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[376],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,h=u["".concat(l,".").concat(g)]||u[g]||p[g]||i;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3},a="Biopotential Recording Module",s={unversionedId:"Implantables/BP-Module",id:"Implantables/BP-Module",title:"Biopotential Recording Module",description:"The thing that takes in signals",source:"@site/docs/Implantables/BP-Module.md",sourceDirName:"Implantables",slug:"/Implantables/BP-Module",permalink:"/Implantables/BP-Module",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Pulse Generator Module",permalink:"/Implantables/PG-Module"},next:{title:"Electrodes",permalink:"/Implantables/Electrodes"}},l={},c=[{value:"Product Description",id:"product-description",level:2},{value:"Coming soon...",id:"coming-soon",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"biopotential-recording-module"},"Biopotential Recording Module"),(0,o.kt)("p",null,"The thing that takes in signals"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(3330).Z,width:"2446",height:"1116"}),")"),(0,o.kt)("h2",{id:"product-description"},"Product Description"),(0,o.kt)("p",null,"Myoelectric signals (MES) from muscles under voluntary control are recorded by the\nbiopotential recording module (BP). The BP is designed to record myoelectric signals\nand process those signals for the purposes of neuroprosthetic control. The BP can record\nMES from two different muscles and process the signals independently for different control\nneeds. The recording electrodes can be either an epimysial\nor intramuscular design and consist of two metal contacts separated by 1cm for differential\nrecording."),(0,o.kt)("p",null,"The fundamental principles of the myoelectric signal processing in the BP is similar to the\nprocessing in our current generation of implanted devices, the IST-12, which have\ndemonstrated excellent functional utility ","[Kilgore et al., 2008]",".  The purpose of the signal\nprocessing is to generate a usable control signal (or signals) from the biopotential signal\nobtained from the muscle.  The processed signal can either be used as a direct proportional\ncontrol signal, such as the signal used to control grasp opening or closing, or it can be used\nas a logic signal, such as the signal used to switch between grasp patterns.  Without\nappropriate processing, MES tends to fluctuate too rapidly for practical use as a\nneuroprosthetic control. Thus, the primary goal of the signal processing is to produce a\nsmoothly varying and stable signal without significant delay between the generation of the\nMES and the resultant change in the processed signal.  "),(0,o.kt)("p",null,"An important aspect of MES acquisition in neuroprosthetics is the need to account for the\nstimulus artifact. Electrical stimulation of nearby muscles produces large artifacts on the\nMES recording that can completely distort the signal during and immediately after the\nstimulus is delivered. The BP can use multiple signal processing methods to maximize the\nsignal quality during electrical stimulation, including lowering the signal gain during\nstimulation and blanking the stimulus artifact."),(0,o.kt)("p",null,"The module is sized small enough so that it can be located in the extremities, near the\nmuscles to be recorded from. This has the advantage of reducing the lead length, improving the signal quality and minimizing the range of electrode lead lengths that need to be\nbrought into surgery. "),(0,o.kt)("p",null,"The BP is connected to the NNP network through a single network cable.  The BP gains\npower from the network, receives data from the network that to determine signal\nprocessing parameters and other administrative functions, and places two channels of\nprocessed myoelectric data on the network for use by any other module connected to the\nnetwork. The BP has four total network connections, allowing a single BP to branch from\na single network input to network output to three additional remote modules.\nThe BP has internal processing based on the AVR-core processor (Atmel AT90CAN128).",(0,o.kt)("br",{parentName:"p"}),"\n","The processing, network interface and powering is identical to the PG module.\nComputational processing in the BP is used to identify relevant network data and perform\nthe signal processing on the recorded myoelectric signal.  "),(0,o.kt)("h2",{id:"coming-soon"},"Coming soon..."),(0,o.kt)("p",null,"Specifications, drawings, and test data are on their way"))}p.isMDXComponent=!0},3330:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-e1c55012077a6c504fb6ed9a88e02fb2.png"}}]);