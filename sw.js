if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/arco-vendor-CcJkdcY0.js",revision:null},{url:"assets/en-US-DhsMXklw.js",revision:null},{url:"assets/es-ES-BADP7bBs.js",revision:null},{url:"assets/highlight-vendor-BWBNT22h.js",revision:null},{url:"assets/index-C7i8j7zw.css",revision:null},{url:"assets/index-DK9AT-LB.js",revision:null},{url:"assets/react-vendor-BDVpE3bb.js",revision:null},{url:"assets/zh-CN-CvA0HYk9.js",revision:null},{url:"index.html",revision:"a3106f5804f407f9a5d1c17bd09fa3b5"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"styles/loading.css",revision:"83707a709e3e73526a7e0a9095c59d3b"},{url:"manifest.webmanifest",revision:"6017208229886bea6bc7bb00b9adcccf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
