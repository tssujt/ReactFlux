if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const t=s=>i(s,r),u={module:{uri:r},exports:o,require:t};e[r]=Promise.all(n.map((s=>u[s]||t(s)))).then((s=>(l(...s),o)))}}define(["./workbox-e1498109"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/arco-CaqkI0o-.js",revision:null},{url:"assets/de-DE-BXKlRn8p.js",revision:null},{url:"assets/en-US-Corc11vP.js",revision:null},{url:"assets/es-ES-CFcdBS6F.js",revision:null},{url:"assets/fr-FR-Br4FF3oh.js",revision:null},{url:"assets/highlight-8p_zN4fE.js",revision:null},{url:"assets/hls-BRcxkiAL.js",revision:null},{url:"assets/index-C4PCniAr.js",revision:null},{url:"assets/index-zTYkVEeH.css",revision:null},{url:"assets/plyr.min-CQtZMqEo.js",revision:null},{url:"assets/react-DGKyJaiJ.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"assets/zh-CN-nqwm5OHp.js",revision:null},{url:"index.html",revision:"430b905021db4e7779d9378e873a0b2d"},{url:"styles/loading.css",revision:"83707a709e3e73526a7e0a9095c59d3b"},{url:"manifest.webmanifest",revision:"6017208229886bea6bc7bb00b9adcccf"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
