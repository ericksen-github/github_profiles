!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);({newCall:async function(){try{const e=await fetch("https://api.github.com/users/ericksen-github",{mode:"cors"});(e=>{const n=`\n    <div class = "card">\n        <div id = "imgContainer">\n          <img src="${e.avatar_url}" alt = "${e.name}"\n        </div>\n        <div id = "infoContainer">\n          <h2>${e.name}</h2>\n          <p>${e.bio}</p>\n          <ul>\n            <li>${e.public_repos}<p>Repos</p></li>\n            <li>${e.followers}<p>Followers</p></li>\n            <li>${e.following}<p>Following</p></li>\n          </ul>\n        </div>\n    </div>`;console.log(e),document.getElementById("main").innerHTML=n})(await e.json())}catch(e){alert("There was an error with your search.")}}}).newCall()}]);