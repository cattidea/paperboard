import{r as e,m as t,n,i as o,a,b as r,w as s,o as l,c as i,d as c,h as u,e as h,f as d,g as p,j as f,_ as m,F as v,k as g,l as w,p as b,q as y}from"./common-b6f5e491.js";const L=Symbol();function S(){return function(){const e=o(L);if(!e)throw new Error("useRouter() is called without provider.");return e}().route}function k(e,t,n=!1){const o=document.getElementById("app").offsetTop,a=e.classList.contains(".header-anchor")?e:document.querySelector(t);if(a){const e=a.offsetTop-o-15;!n||Math.abs(e-window.scrollY)>window.innerHeight?window.scrollTo(0,e):window.scrollTo({left:0,top:e,behavior:"smooth"})}}const E=a(($='{"title":"PaperBoard","description":"Notes for paper","base":"/","head":[],"themeConfig":{}}',r(JSON.parse($))));var $;function _(){return E}function C(e){const t=Array.from(document.querySelectorAll("meta"));let n=!0;const o=e=>{n?n=!1:(t.forEach(e=>document.head.removeChild(e)),t.length=0,e&&e.length&&e.forEach(e=>{const n=function([e,t,n]){const o=document.createElement(e);for(const e in t)o.setAttribute(e,t[e]);n&&(o.innerHTML=n);return o}(e);document.head.appendChild(n),t.push(n)}))};s(()=>{const t=e.value,n=E.value,a=t&&t.title;document.title=(a?a+" | ":"")+n.title,o([["meta",{name:"description",content:n.description}],...n.head,...t&&t.frontmatter.head||[]])})}const T=Symbol();const A="undefined"!=typeof window;function D(e){let t=e.replace(/\.html$/,"");if(t.endsWith("/")&&(t+="index"),A){const e="/";t=t.slice(e.length).replace(/\//g,"_")+".md";t=`${e}_assets/${t}.${__VP_HASH_MAP__[t]}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const q=new Set,B=()=>document.createElement("link");let I;const P=A&&(I=B())&&I.relList&&I.relList.supports&&I.relList.supports("prefetch")?e=>{const t=B();t.rel="prefetch",t.href=e,document.head.appendChild(t)}:e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};const N={setup(){const e=S();return function(){if(!A)return;if(!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const o=()=>{n&&n.disconnect(),n=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const t=e.target;n.unobserve(t);const{pathname:o}=t;if(!q.has(o)){q.add(o);const e=D(o);P(e)}}})}),t(()=>{document.querySelectorAll(".vitepress-content a").forEach(e=>{const{target:t,hostname:o,pathname:a}=e;"_blank"!==t&&o===location.hostname&&(a!==location.pathname?n.observe(e):q.add(a))})})};l(o),i(o),c(()=>{n&&n.disconnect()})}(),()=>e.contentComponent?u(e.contentComponent):null}};function j(e){return(_().value.base+e).replace(/\/+/g,"/")}const M=e=>((e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.html$/,"")).endsWith("/")&&(e+="index"),e);var O={setup(){const e=S();return{withBase:j,isActiveLink:t=>M(j(t))===M(e.path),navData:_().value.themeConfig.nav}}};const x={key:0,class:"nav-links"};function F(){let e=null,t=null;const n=decodeURIComponent,o=e=>e&&e.classList.remove("active"),a=n=>{if(o(t),o(e),t=document.querySelector(`.sidebar a[href="${n}"]`),t){t.classList.add("active");const n=t.closest(".sidebar > ul > li");n&&n!==t.parentElement?(e=n.querySelector("a"),e&&e.classList.add("active")):e=null}},r=()=>{const e=[].slice.call(document.querySelectorAll(".sidebar a")),t=[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(e=>e.hash===t.hash)),o=document.getElementById("app").offsetTop,r=window.scrollY,s=e=>e.parentElement.offsetTop-o-15;for(let e=0;e<t.length;e++){const o=t[e],l=t[e+1];if(0===e&&0===r||r>=s(o)&&(!l||r<s(l))){const e=n(o.hash);return history.replaceState(null,document.title,e),void a(e)}}},s=function(e,t){let n,o=!1;return()=>{n&&clearTimeout(n),o?n=setTimeout(e,t):(e(),o=!0,setTimeout(()=>{o=!1},t))}}(r,300);l(()=>{r(),window.addEventListener("scroll",s)}),i(()=>{a(n(location.hash))}),c(()=>{window.removeEventListener("scroll",s)})}O.render=function(e,t){return h(),d(v,null,[p("a",{class:"title","aria-label":e.$site.title+", back to home",href:e.$site.base},[e.$theme.logo?(h(),d("img",{key:0,class:"logo",src:e.withBase(e.$theme.logo),alt:"logo"},null,8,["src"])):f("",!0),p("span",null,m(e.$site.title),1)],8,["aria-label","href"]),e.navData?(h(),d("nav",x,[(h(!0),d(v,null,g(e.navData,({text:t,link:n,target:o,rel:a,ariaLabel:r})=>(h(),d("a",{class:["nav-link",{active:e.isActiveLink(n)}],href:e.withBase(n),target:o,rel:a,"aria-label":r},m(t),11,["href","target","rel","aria-label"]))),256))])):f("",!0)],64)};const H=e=>{const{item:{link:t,text:n,children:o}}=e;return u("li",[u("a",{href:t},n),o?u("ul",o.map(e=>u(H,{item:e}))):null])};var R={components:{SideBarItem:H},setup(){const e=function(){const e=o(T);if(!e)throw new Error("usePageData() is called without provider.");return e}(),t=_(),n=S();return F(),{items:w(()=>{const{headers:o,frontmatter:{sidebar:a,sidebarDepth:r=2}}=e.value;if("auto"===a)return W(o,r);if(Array.isArray(a))return[];if(!1===a)return[];{const{sidebar:e}=t.value.themeConfig;if("auto"===e)return W(o,r);if(Array.isArray(e))return[];if(!1===e)return[];if("object"==typeof e)return n.path,[]}})}}};function W(e,t){const n=[];let o=void 0;return e.forEach(({level:e,title:a,slug:r})=>{if(e-1>t)return;const s={text:a,link:"#"+r};2===e?(o=s,n.push(s)):o&&(o.children||(o.children=[])).push(s)}),n}const J={class:"sidebar"};R.render=function(e,t){const n=b("SideBarItem");return h(),d("div",J,[p("ul",null,[(h(!0),d(v,null,g(e.items,e=>(h(),d(n,{item:e},null,8,["item"]))),256))])])};const U={class:"content"};const Y={render:function(e,t){const n=b("Content");return h(),d("div",U,[p(n)])}};var G={components:{NavBar:O,SideBar:R,Page:Y}};const V={class:"theme"};G.render=function(e,t){const n=b("NavBar"),o=b("SideBar"),a=b("Page"),r=b("Debug");return h(),d(v,null,[p("div",V,[p("header",null,[p(n)]),p("aside",null,[p(o)]),p("main",null,[p(a)])]),p(r)],64)};const X=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];var z={setup:()=>({getMsg:()=>X[Math.floor(Math.random()*X.length)]})};const K={class:"theme"},Q=p("h1",null,"404",-1);z.render=function(e,t){return h(),d("div",K,[Q,p("blockquote",null,m(e.getMsg()),1),p("a",{href:e.$site.base,"aria-label":"go to home"}," Take me home. ",8,["href"])])};const Z={Layout:G,NotFound:z},ee=Z.NotFound||(()=>"404 Not Found");function te(){const o=a();A&&C(o);let s,l=A;const i=function(o,a){const r=e({path:"/",contentComponent:null}),s="undefined"!=typeof window;function l(e){e=e||(s?location.href:"/");const t=new URL(e,"http://a.com");return t.pathname.endsWith("/")||t.pathname.endsWith(".html")||(t.pathname+=".html",e=t.href),s&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",e)),i(e)}async function i(e,l=0){const i=new URL(e,"http://a.com"),c=r.path=i.pathname;try{let e=o(r);if("then"in e&&"function"==typeof e.then&&(e=await e),r.path===c){if(!e)throw new Error("Invalid route component: "+e);r.contentComponent=t(e),s&&n(()=>{if(i.hash&&!l){const e=document.querySelector(i.hash);if(e)return void k(e,i.hash)}window.scrollTo(0,l)})}}catch(e){e.message.match(/fetch/)||console.error(e),r.path===c&&(r.contentComponent=a?t(a):null)}}return s&&(window.addEventListener("click",e=>{const t=e.target.closest("a");if(t){const{href:n,protocol:o,hostname:a,pathname:r,hash:s,target:i}=t,c=window.location;"_blank"!==i&&o===c.protocol&&a===c.hostname&&(e.preventDefault(),r===c.pathname?s&&s!==c.hash&&(history.pushState(null,"",s),k(t,s,t.classList.contains("header-anchor"))):l(n))}},{capture:!0}),window.addEventListener("popstate",e=>{i(location.href,e.state&&e.state.scrollPosition||0)}),window.addEventListener("hashchange",e=>{e.preventDefault()})),{route:r,go:l}}(e=>{let t=D(e.path);if(l&&(s=t),(l||s===t)&&(t=t.replace(/\.js$/,".lean.js")),A)return l=!1,import(t).then(e=>(e.__pageData&&(o.value=r(JSON.parse(e.__pageData))),e.default));{const e=require(t);return o.value=JSON.parse(e.__pageData),e.default}},ee),c=y(Z.Layout);return c.provide(L,i),c.provide(T,o),c.component("Content",N),c.component("Debug",()=>null),Object.defineProperties(c.config.globalProperties,{$site:{get:()=>E.value},$page:{get:()=>o.value},$theme:{get:()=>E.value.themeConfig}}),Z.enhanceApp&&Z.enhanceApp({app:c,router:i,siteData:E}),{app:c,router:i}}if(A){const{app:e,router:t}=te();t.go().then(()=>{e.mount("#app")})}export{te as createApp};
