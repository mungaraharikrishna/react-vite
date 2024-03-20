import{r as f,_ as m}from"./index-CUFek_dc.js";import{A as p}from"./button-Ds-1z0iU.js";var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M608 112c-167.9 0-304 136.1-304 304 0 70.3 23.9 135 63.9 186.5l-41.1 41.1-62.3-62.3a8.15 8.15 0 00-11.4 0l-39.8 39.8a8.15 8.15 0 000 11.4l62.3 62.3-44.9 44.9-62.3-62.3a8.15 8.15 0 00-11.4 0l-39.8 39.8a8.15 8.15 0 000 11.4l62.3 62.3-65.3 65.3a8.03 8.03 0 000 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6A304.06 304.06 0 00608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644c-60.9 0-118.2-23.7-161.2-66.8-43.1-43-66.8-100.3-66.8-161.2 0-60.9 23.7-118.2 66.8-161.2 43-43.1 100.3-66.8 161.2-66.8 60.9 0 118.2 23.7 161.2 66.8 43.1 43 66.8 100.3 66.8 161.2 0 60.9-23.7 118.2-66.8 161.2z"}}]},name:"key",theme:"outlined"};const U=y;var k=function(t,n){return f.createElement(p,m({},t,{ref:n,icon:U}))};const J=f.forwardRef(k);var x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};const j=x;var w=function(t,n){return f.createElement(p,m({},t,{ref:n,icon:j}))};const T=f.forwardRef(w);/*! js-cookie v3.0.5 | MIT */function u(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)e[c]=n[c]}return e}var I={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function g(e,t){function n(o,s,r){if(!(typeof document>"u")){r=u({},t,r),typeof r.expires=="number"&&(r.expires=new Date(Date.now()+r.expires*864e5)),r.expires&&(r.expires=r.expires.toUTCString()),o=encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var a in r)r[a]&&(i+="; "+a,r[a]!==!0&&(i+="="+r[a].split(";")[0]));return document.cookie=o+"="+e.write(s,o)+i}}function c(o){if(!(typeof document>"u"||arguments.length&&!o)){for(var s=document.cookie?document.cookie.split("; "):[],r={},i=0;i<s.length;i++){var a=s[i].split("="),O=a.slice(1).join("=");try{var d=decodeURIComponent(a[0]);if(r[d]=e.read(O,d),o===d)break}catch{}}return o?r[o]:r}}return Object.create({set:n,get:c,remove:function(o,s){n(o,"",u({},s,{expires:-1}))},withAttributes:function(o){return g(this.converter,u({},this.attributes,o))},withConverter:function(o){return g(u({},this.converter,o),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var l=g(I,{path:"/"});const A=e=>{Object.entries(e).forEach(([t,n])=>{l.set(`${t}`,`${n}`,{path:"/"})})},E=e=>l.get(e),h=()=>l.get("access_token"),K=()=>l.get("x_subdomain"),$=()=>l.get("username"),v=()=>{const e=S();e&&e.length&&e.forEach(t=>{l.remove(`${t}`,{path:"/"})})},C=()=>localStorage.getItem("roles")??null,R=()=>{const e=C();return e?e.includes("admin"):!1},B=()=>{v(),localStorage.clear()},S=()=>{const e=document.cookie.split(";"),t=[];return e.forEach(n=>{const c=n.split("=")[0].trim();t.push(c)}),t},b=()=>!!h(),z=e=>{Object.entries(e).forEach(([t,n])=>{typeof n=="object"?localStorage.setItem(`${t}`,JSON.stringify(n)):localStorage.setItem(`${t}`,`${n}`)})},M=()=>{const e=localStorage.getItem("menu"),t=e?JSON.parse(e):{},n=[];return Object.entries(t).forEach(([c,o])=>{const s={key:c.toLowerCase().trim().replace(/ /gi,""),label:o,imgKey:c.trim().replace(/ /gi,"")};n.unshift(s)}),n},L={setCookies:A,getJWTToken:h,getSubdomain:K,getUsername:$,removeFromCookie:v,getCookieByName:E,isAdminUser:R,getRoles:C,clearSession:B,getAllCookieKeys:S,isAuthenticated:b,setLocalStorage:z,getMenus:M};export{J as K,T as U,L as a};
