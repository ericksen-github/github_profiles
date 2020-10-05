!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);const r=(()=>{const e=e=>{null==e.name&&(e.name=e.login),null==e.bio&&(e.bio="")},n=()=>{document.getElementById("main").innerHTML='\n      <div class = "card">\n        <p>User not found. Check the spelling or try a different user.</p>\n      </div>\n    '};const t=e=>{const n=document.getElementById("repoContainer");e.forEach(e=>{const t=document.createElement("a");t.classList.add("repoLink"),t.innerHTML=e.name,t.href=e.html_url,t.target="_blank",n.appendChild(t)})};return{createCard:r=>{if("Not Found"==r.message)return void n();e(r);const o=`\n      <div class = "card">\n          <div id = "imgContainer">\n            <a href  = ${r.html_url} >\n              <img src="${r.avatar_url}" alt = "${r.name}" />\n            </a>\n          </div>\n          <div id = "infoContainer">\n            <a id = "nameLink" href  = ${r.html_url} >\n              <h2>${r.name}</h2>\n            </a>\n            <p id = "bio">${r.bio}</p>\n\n            <ul>\n              <li>${r.public_repos}<p>Repos</p></li>\n              <li>${r.followers}<p>Followers</p></li>\n              <li>${r.following}<p>Following</p></li>\n            </ul>\n\n            <div id = "repoContainer"></div>\n          </div>\n      </div>`;document.getElementById("main").innerHTML=o,async function(e){const n=await fetch("https://api.github.com/users/"+e+"/repos");t(await n.json())}(r.login)}}})(),o={newCall:async function(e){try{const n=await fetch("https://api.github.com/users/"+e,{mode:"cors"});r.createCard(await n.json())}catch(e){alert("There was an error with your search.")}}},i=document.getElementById("form"),l=document.getElementById("search");l.value="",i.addEventListener("submit",e=>{e.preventDefault();const n=l.value;o.newCall(n)}),document.getElementById("tutorial").addEventListener("click",()=>{(()=>{const e=document.getElementById("body"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("h2"),o=document.createElement("p"),i=document.createElement("div");n.id="card",t.id="innerCard",r.innerHTML="How it works",t.appendChild(r),o.innerHTML="This project allows you to look up and retrieve basic info from a ",o.innerHTML+="GitHub profile using the GitHub API. After searching, click ",o.innerHTML+="on the name or image to link directly to that profile. Click ",o.innerHTML+="on the links to be taken to that specific repository. ",t.appendChild(o),i.id="closeButton",i.innerHTML="Close",i.addEventListener("click",()=>{document.getElementById("card").remove(),document.getElementById("overlay").style.display="none"}),t.appendChild(i),n.appendChild(t),e.appendChild(n),document.getElementById("overlay").style.display="block"})()})}]);