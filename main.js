(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),l=n.n(o),d=n(645),i=n.n(d)()(l());i.push([e.id,"*{\n    font-family: Assistant;\n    margin:0;\n    padding:0;\n}\n#header{\npadding:12px;\nborder-bottom: 1px solid lightgray;\ntext-align:center;\n}\n#logo{\n    font-size:20px;\n    font-weight:800;\n}\n#credit{\n    font-size:14px;\n    font-weight: 200;\n}\n#nav{\n    display:flex;\n    justify-content: center;\n    gap:10px;\n    margin-top:10px;\n}\n.link{\n    font-size: 18px;\n}\n\n#content,#dreams,#four,#five,#three,#allGoals{\n    display:flex;\n    flex-flow: wrap;\n    gap:15px;\n    margin-left:50px;\n    margin-right:50px;\n    padding:50px;\n}\n#all{\n    font-weight: 800;\n}\n#dreams,#four,#five,#three,#allGoals{\n    display:none;\n}\n\n\n.card{\n    display:flex;\n    justify-content: center;\n    flex-basis: 25%;\n    flex-flow: column;\n    text-align: center;\n    gap:10px;\n    padding:10px;\n    padding-top:15px;\n    border:1px solid lightgray;\n    background-color: lightgoldenrodyellow;\n}\n#title{\n    font-size:20px;\n    font-weight: 800;\n}\n#desc{\n    font-size: 17px;\n    margin-top:-10px;\n}\n#dueDate{\n    font-size:15px;\n    font-weight: 200;\n}\n#btns{\n    display: flex;\n    justify-content: space-between;\n}\n.x{\n    text-align: left;\n    font-size:14px;\n    font-weight:200;\n    color:gray;\n    border:none;\n    background: transparent;;\n    transition: all .3s ease-out;\n  }\n  .x:hover{\n    color:black;\n    transition: all .3s ease-out;\n  }\n\n  .t{\n    text-align: right;\n    font-size:14px;\n    font-weight:200;\n    color:black;\n    border:none;\n    background: transparent;;\n    transition: all .3s ease-out;\n  }\n  .t:hover{\n    color:gray;\n    transition: all .3s ease-out;\n  }\n  #popUp{\n    position: absolute;\n    display:flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: center;\n    top: 50%;\n    left: 50%;\n    max-width:500px;\n    max-height: 500px;\n    transform: translate(-50%, -50%);\n    overflow-y:scroll;\n    border-radius: 5px;\n    padding: 25px;\n    text-align:center;\n    border: 1px solid lightgray;\n    background-color: lightyellow;\n    z-index: 7;\n\n  }\n#popTitle{\n    font-size:25px;\n    font-weight: 800;\n}\n#notes{\n    font-size: 18px;\n    font-weight:200;\n}\n#popDate{\n    font-size:15px;\n    font-weight: 200;\n}\n#exit{\n    margin-top:25px;\n}\n\n/* Button used to open the contact form - fixed at the bottom of the page */\n.open-button {\n    background-color: lightsteelblue;\n    color:black;\n    border: none;\n    opacity: 0.8;\n    padding:5px;\n    text-align:center;\n  }\n  \n  /* The popup form - hidden by default */\n  .form-popup {\n    display: none;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  \n  /* Add styles to the form container */\n  .form-container {\n    max-width: 300px;\n    border-radius: 5px;\n    padding: 25px;\n    text-align:center;\n    border: 1px solid lightgray;\n    background-color: aliceblue;\n  }\n  \n  /* Full-width input fields */\n  .form-container input{\n    font-size: 0.9rem;\n    width:90%;\n    padding: 15px;\n    margin:3px;\n    border:none;\n    border-bottom: 7px solid black;\n    background: none;\n  }\n  \n  /* When the inputs get focus, do something */\n  .form-container input[type=text]:focus {\n    font-weight: 700;\n    font-size:1rem;\n    outline: none;\n  }\n  textarea{\n    font-size: 0.9rem;\n    width:90%;\n    padding: 15px;\n    margin:3px;\n    border:none;\n    border-bottom: 7px solid black;\n    background: none;\n  }\n\n  textarea:focus{\n    font-weight: 700;\n    font-size:1rem;\n    outline: none;\n  }\n  \n  /* Set a style for the submit/login button */\n  .form-container .btn {\n    margin-top:10px;\n    background-color: lightsteelblue;\n    color: black;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    margin-bottom:10px;\n    opacity: 0.8;\n  }\n  \n  /* Add a red background color to the cancel button */\n  .form-container .cancel {\n    background-color: gray;\n  }\n  \n  /* Add some hover effects to buttons */\n  .form-container .btn:hover, .open-button:hover {\n    opacity: 1;\n  }\n  #buttons{\n    display:flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: lightsteelblue;\n  }",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,l,d){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&i[c[0]]||(void 0!==d&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=d),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),l&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=l):c[4]="".concat(l)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var d={},i=[],a=0;a<e.length;a++){var r=e[a],s=o.base?r[0]+o.base:r[0],c=d[s]||0,m="".concat(s," ").concat(c);d[s]=c+1;var u=n(m),y={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(-1!==u)t[u].references++,t[u].updater(y);else{var p=l(y,o);o.byIndex=a,t.splice(a,0,{identifier:m,updater:p,references:1})}i.push(m)}return i}function l(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,l){var d=o(e=e||[],l=l||{});return function(e){e=e||[];for(var i=0;i<d.length;i++){var a=n(d[i]);t[a].references--}for(var r=o(e,l),s=0;s<d.length;s++){var c=n(d[s]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}d=r}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var l=void 0!==n.layer;l&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,l&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var d=n.sourceMap;d&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var d=t[o]={id:o,exports:{}};return e[o](d,d.exports,n),d.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),l=n.n(o),d=n(569),i=n.n(d),a=n(565),r=n.n(a),s=n(216),c=n.n(s),m=n(589),u=n.n(m),y=n(426),p={};p.styleTagTransform=u(),p.setAttributes=r(),p.insert=i().bind(null,"head"),p.domAPI=l(),p.insertStyleElement=c(),t()(y.Z,p),y.Z&&y.Z.locals&&y.Z.locals;let g=document.getElementById("content"),f=[];function h(e,t,n,o,l,d){this.title=e,this.desc=t,this.dueDate=n,this.notes=o,this.category=l,this.email=d}function E(e){f.push(e),function(e){let t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),l=document.createElement("div"),d=document.createElement("div"),i=document.createElement("button"),a=document.createElement("button"),r=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div"),m=document.createElement("div"),u=document.createElement("button");a.setAttribute("type","checkbox"),n.id="title",t.classList.add("card"),o.id="desc",l.id="dueDate",d.id="btns",a.id="seeMore",r.id="popUp",s.id="popTitle",c.id="popDate",m.id="notes",u.id="exit",u.classList.add("x"),i.classList.add("x"),a.classList.add("t"),i.addEventListener("click",v),u.addEventListener("click",I),a.addEventListener("click",b);let y=0;for(let p=0;p<e.length;p++){r.dataset.num=y,t.id=y,u.dataset.number=y,i.dataset.number=y,a.dataset.number=y,i.innerHTML="It's not my goal anymore",a.innerHTML="See More",n.innerHTML=e[p].title,o.innerHTML=e[p].desc,l.innerHTML=`Due ${e[p].dueDate}`,s.innerHTML=e[p].title,c.innerHTML=`Due ${e[p].dueDate}`,m.innerHTML=e[p].notes,u.innerHTML="Close";let f=document.getElementById("content"),h=document.getElementById("dreams"),E=document.getElementById("three"),v=document.getElementById("four"),I=document.getElementById("five");"none"!=f.style.display?g.appendChild(t):"none"!=h.style.display?h.appendChild(t):"none"!=E.style.display?E.appendChild(t):"none"!=v.style.display?v.appendChild(t):"none"!=I.style.display&&I.appendChild(t),t.appendChild(l),t.appendChild(n),t.appendChild(o),t.appendChild(m),t.appendChild(d),d.appendChild(i),d.appendChild(a),document.getElementById("popups").appendChild(r),r.style.display="none",r.appendChild(c),r.appendChild(s),r.appendChild(m),r.appendChild(u),y++}}(f),function(e){let t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),l=document.createElement("div"),d=document.createElement("div"),i=document.createElement("button"),a=document.createElement("button"),r=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div"),m=document.createElement("div"),u=document.createElement("button");a.setAttribute("type","checkbox"),n.id="title",t.classList.add("card"),o.id="desc",l.id="dueDate",d.id="btns",a.id="seeMore",r.classList.add("popUp"),r.id="popUp",s.id="popTitle",c.id="popDate",m.id="notes",u.id="exit",u.classList.add("x"),i.classList.add("x"),a.classList.add("t"),i.addEventListener("click",v),u.addEventListener("click",I),a.addEventListener("click",b);let y=0;for(let e=0;e<f.length;e++)r.id=y,r.dataset.num=y,t.id=y,u.dataset.number=y,i.dataset.number=y,a.dataset.number=y,i.innerHTML="It's not my goal anymore",a.innerHTML="See More",n.innerHTML=f[e].title,o.innerHTML=f[e].desc,l.innerHTML=`Due ${f[e].dueDate}`,s.innerHTML=f[e].title,c.innerHTML=`Due ${f[e].dueDate}`,m.innerHTML=f[e].notes,u.innerHTML="Close",document.getElementById("allGoals").appendChild(t),t.appendChild(l),t.appendChild(n),t.appendChild(o),t.appendChild(d),d.appendChild(i),d.appendChild(a),y++}()}function v(e){f.splice(e,1);let t=e.target.getAttribute("data-number");document.getElementById(t).remove(),document.getElementById(t).remove()}function I(e){let t=e.target.getAttribute("data-number"),n=document.querySelectorAll("#popUp");Array.from(n)[t].style.display="none"}function b(e){let t=e.target.getAttribute("data-number"),n=document.querySelectorAll("#popUp");Array.from(n)[t].style.display="flex";const o=document.getElementById(t);o.lastChild,o.style.display="flex"}E(new h("I want to be a millionare","I want to obtain it in 1 year","24/0/22","Reaching the million-dollar mark is a laborious task and can only be accomplished by the serious individual who is willing to pay the price. Becoming a millionaire isn’t for those who just want to ‘settle’ in life. Nor will you become a millionaire if you’re looking for ‘get rich quick’ schemes. It requires high risk that can turn into high reward. Even though becoming a millionaire is easier than it’s ever been, not many people are willing or able to do it. Many people ‘play it safe’ or let their excuses hold them back. However, for those who believe they can achieve great financial wealth in their lives, keep reading. You might ask, “Why do I need to learn how to become a millionaire?” It’s simple. When most people think or talk about becoming millionaires, they’re actually looking to spend $1 million, not necessarily earn millions of dollars. However, if you really think about it, there are many more reasons for becoming a millionaire.","Goals","asd@gmail.com")),document.getElementById("addButton").addEventListener("click",(function(){document.getElementById("myForm").style.display="block"})),document.getElementById("closeButton").addEventListener("click",(function(){document.getElementById("myForm").style.display="none"})),document.getElementById("newProject").addEventListener("click",(function(){document.getElementById("myProject").style.display="block"})),document.getElementById("closeButtons").addEventListener("click",(function(){document.getElementById("myProject").style.display="none"})),document.getElementById("submit").addEventListener("click",(function(e){e.preventDefault();let t=document.getElementById("formTitle"),n=document.getElementById("formDesc"),o=document.getElementById("formNote"),l=document.getElementById("formDate");E(new h(t.value,n.value,l.value,o.value,"")),t.value="",n.value="",o.value="",l.value="",document.getElementById("myForm").style.display="none"})),document.getElementById("all").addEventListener("click",x),document.getElementById("10").addEventListener("click",x),document.getElementById("11").addEventListener("click",x),document.getElementById("12")&&document.getElementById("12").addEventListener("click",x),document.getElementById("13")&&document.getElementById("13").addEventListener("click",x),document.getElementById("14")&&document.getElementById("14").addEventListener("click",x);let B=12;function x(e){let t=event.srcElement.id;document.getElementById(t),console.log(t),"10"===t&&(document.getElementById("dreams").style.display="none",document.getElementById("three").style.display="none",document.getElementById("four").style.display="none",document.getElementById("five").style.display="none",document.getElementById("content").style.display="flex",document.getElementById("allGoals").style.display="none",document.getElementById("10").style.fontWeight=800,document.getElementById("11").style.fontWeight=200,document.getElementById("all").style.fontWeight=200,document.getElementById("12").style.fontWeight=200,document.getElementById("13").style.fontWeight=200,document.getElementById("14").style.fontWeight=200),"11"===t&&(document.getElementById("dreams").style.display="flex",document.getElementById("three").style.display="none",document.getElementById("four").style.display="none",document.getElementById("five").style.display="none",document.getElementById("content").style.display="none",document.getElementById("allGoals").style.display="none",document.getElementById("all").style.fontWeight=200,document.getElementById("10").style.fontWeight=200,document.getElementById("11").style.fontWeight=800,document.getElementById("12").style.fontWeight=200,document.getElementById("13").style.fontWeight=200,document.getElementById("14").style.fontWeight=200),"all"===t&&(document.getElementById("all").style.fontWeight=800,document.getElementById("dreams").style.display="none",document.getElementById("three").style.display="none",document.getElementById("four").style.display="none",document.getElementById("five").style.display="none",document.getElementById("content").style.display="none",document.getElementById("allGoals").style.display="flex",document.getElementById("10").style.fontWeight=200,document.getElementById("11").style.fontWeight=200,document.getElementById("12").style.fontWeight=200,document.getElementById("13").style.fontWeight=200,document.getElementById("14").style.fontWeight=200),"12"===t&&(document.getElementById("dreams").style.display="none",document.getElementById("three").style.display="flex",document.getElementById("four").style.display="none",document.getElementById("five").style.display="none",document.getElementById("content").style.display="none",document.getElementById("allGoals").style.display="none",document.getElementById("10").style.fontWeight=200,document.getElementById("11").style.fontWeight=200,document.getElementById("12").style.fontWeight=800,document.getElementById("13").style.fontWeight=200,document.getElementById("all").style.fontWeight=200,document.getElementById("14").style.fontWeight=200),"13"===t&&(document.getElementById("dreams").style.display="none",document.getElementById("three").style.display="none",document.getElementById("four").style.display="flex",document.getElementById("five").style.display="none",document.getElementById("content").style.display="none",document.getElementById("allGoals").style.display="none",document.getElementById("10").style.fontWeight=200,document.getElementById("11").style.fontWeight=200,document.getElementById("12").style.fontWeight=200,document.getElementById("13").style.fontWeight=800,document.getElementById("all").style.fontWeight=200,document.getElementById("14").style.fontWeight=200),"14"===t&&(document.getElementById("dreams").style.display="none",document.getElementById("three").style.display="none",document.getElementById("four").style.display="none",document.getElementById("five").style.display="flex",document.getElementById("content").style.display="none",document.getElementById("allGoals").style.display="none",document.getElementById("10").style.fontWeight=200,document.getElementById("11").style.fontWeight=200,document.getElementById("12").style.fontWeight=200,document.getElementById("13").style.fontWeight=200,document.getElementById("all").style.fontWeight=200,document.getElementById("14").style.fontWeight=800)}document.getElementById("submits").addEventListener("click",(function(e){if(e.preventDefault(),B<15){let e=document.getElementById("projectName"),t=document.createElement("div"),n=document.getElementById("nav");t.innerHTML=e.value,t.classList.add("link"),n.appendChild(t),e.value="",t.addEventListener("click",x),t.id=B,B++,e.value="",document.getElementById("myProject").style.display="none"}15===B&&(document.getElementById("myProject").style.display="none")}))})()})();