if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>n(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-dff6d9f4"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-build-manifest.js",revision:"ycU89XwfEDCl7WhkuCp4M"},{url:"/_next/server/middleware-react-loadable-manifest.js",revision:"ycU89XwfEDCl7WhkuCp4M"},{url:"/_next/static/chunks/2.dc6791b5ac1f998c.js",revision:"ycU89XwfEDCl7WhkuCp4M"},{url:"/_next/static/chunks/31.a25517673c89b881.js",revision:"ycU89XwfEDCl7WhkuCp4M"},{url:"/_next/static/chunks/361.b4b28ea0b48c3fea.js",revision:"ycU89XwfEDCl7WhkuCp4M"},{url:"/_next/static/chunks/framework-31cad5f2d0b970ba.js",revision:"ycU89XwfEDCl7WhkuCp4M"},{url:"/_next/static/chunks/main-7a1580fb7c7db29d.js",revision:"ycU89XwfEDCl7WhkuCp4M"},{url:"/_next/static/chunks/pages/404-50cf7fab5bd2229f.js",revision:"ycU89XwfEDCl7WhkuCp4M"},{url:"/_next/static/chunks/pages/_app-14078e594545788f.js",revision:"ycU89XwfEDCl7WhkuCp4M"},{url:"/_next/static/chunks/pages/_error-d380118a98171fd0.js",revision:"ycU89XwfEDCl7WhkuCp4M"},{url:"/_next/static/chunks/pages/error-e340a6a975ed2621.js",revision:"ycU89XwfEDCl7WhkuCp4M"},{url:"/_next/static/chunks/pages/index-0dc83a2e36c7fb76.js",revision:"ycU89XwfEDCl7WhkuCp4M"},{url:"/_next/static/chunks/pages/sitemap-dynamic.xml-450124d407282b75.js",revision:"ycU89XwfEDCl7WhkuCp4M"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"ycU89XwfEDCl7WhkuCp4M"},{url:"/_next/static/chunks/webpack-c7c31c4281ef16a6.js",revision:"ycU89XwfEDCl7WhkuCp4M"},{url:"/_next/static/ycU89XwfEDCl7WhkuCp4M/_buildManifest.js",revision:"ycU89XwfEDCl7WhkuCp4M"},{url:"/_next/static/ycU89XwfEDCl7WhkuCp4M/_middlewareManifest.js",revision:"ycU89XwfEDCl7WhkuCp4M"},{url:"/_next/static/ycU89XwfEDCl7WhkuCp4M/_ssgManifest.js",revision:"ycU89XwfEDCl7WhkuCp4M"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/robots.txt",revision:"c808b1ee376ae888316a49650e79d11d"},{url:"/static/example.svg",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
