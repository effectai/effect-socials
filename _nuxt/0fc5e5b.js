(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1084:function(t,e,n){"use strict";n.r(e);var r={layout:"empty",data:function(){return{methodLoginValue:"",isAuthorised:!1}},mounted:function(){this.isAuthorised=this.$passwordProtect.isAuthorised()},methods:{loginUser:function(){this.$passwordProtect.authorise(this.methodLoginValue),this.isAuthorised=this.$passwordProtect.isAuthorised(),this.$router.push("/")},removeAuthorisation:function(){this.$passwordProtect.removeAuthorisation(),this.isAuthorised=this.$passwordProtect.isAuthorised()}}},o=(n(615),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.isAuthorised?n("div",[n("h1",[t._v("Looks like you're already logged in")]),t._v(" "),n("p",[t._v("Either logout or go to the password protected area")]),t._v(" "),n("a",{staticClass:"button",on:{click:t.removeAuthorisation}},[t._v("Log out")]),t._v(" "),n("a",{staticClass:"button",attrs:{href:"/"}},[t._v("Go to password protected area")])]):n("div",[n("h1",[t._v("Log in")]),t._v(" "),n("p",[t._v("Enter in your password, you can do so by filling in the form below.")]),t._v(" "),n("div",{staticClass:"section"},[n("form",{on:{submit:t.loginUser}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.methodLoginValue,expression:"methodLoginValue"}],attrs:{type:"password",placeholder:"Curiosity killed the cat"},domProps:{value:t.methodLoginValue},on:{input:function(e){e.target.composing||(t.methodLoginValue=e.target.value)}}}),t._v(" "),n("button",{staticClass:"button",attrs:{type:"submit"}},[t._v("Login")])])])])])}),[],!1,null,"3c24074d",null);e.default=component.exports;installComponents(component,{Form:n(295).default})},269:function(t,e,n){"use strict";n.r(e);var r={props:["page","perPage","items"],computed:{maxPage:function(){return Math.ceil(this.items/this.perPage)}},watch:{items:function(){this.$emit("setPage",1)}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items&&t.items>t.perPage?n("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[n("span",{staticStyle:{"padding-left":"0.5em"}},[t._v(t._s((t.page-1)*t.perPage+1)+"-"+t._s(Math.min(t.page*t.perPage,t.items))+" of\n    "+t._s(t.items))]),t._v(" "),n("a",{staticClass:"pagination-previous",attrs:{disabled:1===t.page},on:{click:function(e){return t.$emit("setPage",t.page-1)}}},[t._v("Previous")]),t._v(" "),n("a",{staticClass:"pagination-next",attrs:{disabled:!t.maxPage||t.page===t.maxPage},on:{click:function(e){return t.$emit("setPage",t.page+1)}}},[t._v("Next page")]),t._v(" "),n("ul",{staticClass:"pagination-list has-margin-top-mobile"},[t.page>2?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",1)}}},[t._v("1")])]):t._e(),t._v(" "),t.page>3?n("li",[n("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]):t._e(),t._v(" "),t.page>1?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.page-1)}}},[t._v(t._s(t.page-1))])]):t._e(),t._v(" "),n("li",[n("a",{staticClass:"pagination-link is-current",attrs:{"aria-current":"page"}},[t._v(t._s(t.page))])]),t._v(" "),t.page<t.maxPage?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.page+1)}}},[t._v("\n        "+t._s(t.page+1))])]):t._e(),t._v(" "),t.maxPage>t.page+2?n("li",[n("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]):t._e(),t._v(" "),t.maxPage>t.page+1?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.maxPage)}}},[t._v(t._s(t.maxPage))])]):t._e()])]):t._e()}),[],!1,null,null,null);e.default=component.exports},295:function(t,e,n){"use strict";n.r(e);n(61),n(62),n(55),n(41),n(120),n(32),n(172),n(116),n(114),n(82),n(318),n(16),n(362),n(169),n(34),n(59),n(363),n(56),n(42),n(60),n(83),n(57),n(58),n(54),n(170);var r=n(19),o=n(431),l=n(1),c=n(269);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=l.a.extend({props:["campaign"],data:function(){return{step:1,repetitions:1,tempCounter:0,newTask:{id:null,link:null},tasks:[],file:{name:null,content:null},error:null,loading:!1,page:1,perPage:10,type:null,placeholders:["link"],placeholderError:null,likeCampaign:{id:Number("14"),title:"Like"},followCampaign:{id:Number("14"),title:"Follow",parameter:"username"},retweetCampaign:{id:Number("14"),title:"Follow",parameter:"username"},replyCampaign:{id:Number("14"),title:"Follow",parameter:"username"}}},computed:{paginatedTasks:function(){var t=(this.page-1)*this.perPage;return this.tasks?this.tasks.slice(t,t+this.perPage):[]}},components:{Pagination:c.default},mounted:function(){this.getPlaceholders(this.campaign.info.template),this.$nextTick((function(){})),this.newTask=this.getEmptyTask(this.placeholders)},created:function(){},methods:{setPage:function(t){this.page=t},dragover:function(t){t.preventDefault(),t.currentTarget.classList.add("dragover")},dragleave:function(t){t.currentTarget.classList.remove("dragover")},onChange:function(){this.filelist=Object(o.a)(this.$refs.file.files)},createTask:function(){var t,e=this;for(var n in this.newTask)if(Object.hasOwnProperty.call(this.newTask,n)){var element=this.newTask[n];if(null===element||""===element)return this.placeholderError="Please fill in all the placeholders",void setTimeout((function(){return e.placeholderError=null}),5e3)}try{this.newTask.tweet_id.includes("https://")||this.newTask.tweet_id.includes("http://")?(console.debug("protocol already included  "),t=new URL(this.newTask.tweet_id)):(console.debug("add protocol to tweet_id"),t=new URL("https://".concat(this.newTask.tweet_id)))}catch(t){return console.error(t),this.placeholderError="Please enter a valid twitter.com url",void setTimeout((function(){return e.placeholderError=null}),5e3)}if("twitter.com"!==t.hostname||!t.pathname.includes("/status/")||0===t.pathname.split("/")[3].length)return this.placeholderError="Please enter a valid tweet url: https://twitter.com/username/status/123456789",void setTimeout((function(){return e.placeholderError=null}),5e3);this.newTask.tweet_id="".concat(t.hostname).concat(t.pathname),this.tasks.push(this.newTask),this.newTask.id=this.tempCounter++,this.newTask=this.getEmptyTask(this.placeholders),this.$nextTick((function(){e.$refs["placeholder-0"][0].focus()}))},drop:function(t){t.preventDefault(),this.uploadFile(t.dataTransfer.files?t.dataTransfer.files:null,!0),t.currentTarget.classList.remove("dragover")},uploadFile:function(t,e){var n=this;this.file={name:null,content:null},this.error=null;var r=e?t[0]:t.target.files[0];if(r){this.file.name=r.name;var o=new FileReader;o.onload=function(t){n.file.content=n.csvToJson(t.target.result),n.file.content.forEach((function(element){n.newTask=element,n.createTask();var t=!1;n.placeholders.forEach((function(e){element[e]&&(t=!0)})),t||n.$emit("error","Placeholder not found in CSV")}))},o.readAsText(r)}else this.$emit("error","Could not find file"),this.file=null},csvToJson:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"',l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",",c=new RegExp("\\s*(".concat(n,")?(.*?)\\1\\s*(?:").concat(l,"|$)"),"gs"),d=function(t){return Object(o.a)(t.matchAll(c)).map((function(t){return t[2]})).filter((function(t,i,a){return i<a.length-1}))},v=t.split("\n"),h=e||d(v.splice(0,1)[0]);return v.map((function(line){return d(line).reduce((function(t,e,i){return f(f({},t),{},Object(r.a)({},h[i]||"extra_".concat(i),e.length>0?Number(e)||e:null))}),{})}))},getPlaceholders:function(template){var t=function(t,e,n){n||(n=1);for(var r,o=[];r=e.exec(t);)o.push(r[n]);return o}(template,/\$\{\s?(\w+)\s?\|?\s?(\w*)\s?\}/g),e=Object(o.a)(new Set(t));this.placeholders=e},generateCsvData:function(t){var link=this.$refs.csvfiledownload,e="data:text/csv;charset=utf-8,";e+=[Object.values(t).join(","),t.map((function(t){return t+"-value-task-1"})),t.map((function(t){return t+"-value-task-2"})),t.map((function(t){return t+"-value-task-3"}))].join("\n").replace(/(^\[)|(\]$)/gm,""),link.href=encodeURI(e)},getEmptyTask:function(t){var e={};return t.forEach((function(t){e[t]=""})),e},nextStep:function(){this.$emit("nextStep"),this.$emit("setBatch",this.tasks,this.repetitions)},cancel:function(){this.$emit("previousStep")},placeHolderTitle:function(t){switch(t){case"tweet_id":return"Link to Tweet";case"twitter_handle":return"Twitter Handle";case"tweet_instructions":return"Tweet Instructions";default:return t}}}}),h=(n(367),n(8)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"step-2"}},[n("h2",{staticClass:"title"},[t._v("2. Add your Tweets")]),t._v(" "),n("div",{staticClass:"field"},[n("div",{staticClass:"box"},[n("div",{staticClass:"p-2",staticStyle:{background:"#fff","border-radius":"8px"}},[n("table",{staticClass:"table mx-auto"},[n("thead",[n("tr",t._l(t.placeholders,(function(e){return n("th",{key:e,staticClass:"task-placeholder-value has-text-left"},[t._v("\n                  "+t._s(t.placeHolderTitle(e))+"\n                ")])})),0)]),t._v(" "),n("tbody",[t._l(t.paginatedTasks,(function(e,r){return n("tr",{key:e.id},[t._l(t.placeholders,(function(r){return n("td",{key:r,staticClass:"task-placeholder-value has-text-left"},["tweet_id"===r?n("a",{attrs:{href:e[r],target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e[r]))]):n("span",[t._v(t._s(e[r]))])])})),t._v(" "),n("td",[n("button",{staticClass:"button is-danger is-outlined is-small is-rounded",on:{click:function(e){return e.preventDefault(),t.tasks.splice(r,1)}}},[n("font-awesome-icon",{staticClass:"icon is-small",attrs:{icon:"fa-solid fa-trash-can"}})],1)])],2)})),t._v(" "),n("tr",t._l(t.placeholders,(function(e,r){return n("td",{key:e,staticClass:"task-placeholder-value"},[n("input","tweet_id"===e?{directives:[{name:"model",rawName:"v-model",value:t.newTask[e],expression:"newTask[placeholder]"}],ref:"placeholder-"+r,refInFor:!0,staticClass:"input is-info task-placeholder-value",attrs:{type:"url",pattern:"https?://.+",placeholder:"https://twitter.com/username/status/12345",required:""},domProps:{value:t.newTask[e]},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.createTask(e))},input:function(n){n.target.composing||t.$set(t.newTask,e,n.target.value)}}}:{directives:[{name:"model",rawName:"v-model",value:t.newTask[e],expression:"newTask[placeholder]"}],ref:"placeholder-"+r,refInFor:!0,staticClass:"input is-info task-placeholder-value",attrs:{placeholder:t.placeHolderTitle(e),required:""},domProps:{value:t.newTask[e]},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.createTask(e))},input:function(n){n.target.composing||t.$set(t.newTask,e,n.target.value)}}})])})),0)],2)]),t._v(" "),t.tasks?n("pagination",{attrs:{items:t.tasks.length,page:t.page,"per-page":t.perPage},on:{setPage:t.setPage}}):t._e()],1),t._v(" "),n("div",{staticClass:"control has-text-centered mt-5"},[n("button",{staticClass:"button is-primary is-wide",on:{click:function(e){return e.preventDefault(),t.createTask(e)}}},[t._v("\n            Add Task\n          ")]),t._v(" "),t.placeholderError?n("div",{staticClass:"notification is-danger is-light mt-5"},[t._v("\n            "+t._s(t.placeholderError)+"\n          ")]):t._e()])]),t._v(" "),0===t.tasks.length?n("div",{staticClass:"box is-centered"},[t.campaign&&t.campaign.info?n("div",{staticClass:" is-6 py-0 px-2 batch-info"},[n("div",{staticClass:"box"},[n("span",[t._v("\n                Amount: \n              ")]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.repetitions))])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.repetitions,expression:"repetitions"}],staticClass:"slider is-fullwidth is-info",attrs:{step:"1",min:"1",max:"20",type:"range"},domProps:{value:t.repetitions},on:{__r:function(e){t.repetitions=e.target.value}}}),t._v("\n              Total Cost\n              "),n("strong",[t._v(t._s(parseFloat(t.campaign.info.reward*t.tasks.length*t.repetitions).toFixed(4))+" EFX")])])]):t._e()]):t._e()]),t._v(" "),n("form",[n("div",{staticClass:"field is-grouped is-justify-content-center mt-6"},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-outlined is-primary is-wide",on:{click:t.cancel}},[t._v("\n            Back\n          ")]),t._v(" "),n("button",{staticClass:"button button is-primary is-wide mr-4",class:{"is-loading":t.loading},attrs:{type:"submit",disabled:!t.tasks.length},on:{click:t.nextStep}},[t._v("\n            Next step\n          ")])])])])])])}),[],!1,null,"408d86cf",null);e.default=component.exports;installComponents(component,{Pagination:n(269).default,Form:n(295).default})},299:function(t,e,n){var r=n(79),o=n(9),l=n(12),c=n(21).f,d=n(115),f=n(365),v=d("meta"),h=0,m=Object.isExtensible||function(){return!0},k=function(t){c(t,v,{value:{objectID:"O"+ ++h,weakData:{}}})},meta=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!l(t,v)){if(!m(t))return"F";if(!e)return"E";k(t)}return t[v].objectID},getWeakData:function(t,e){if(!l(t,v)){if(!m(t))return!0;if(!e)return!1;k(t)}return t[v].weakData},onFreeze:function(t){return f&&meta.REQUIRED&&m(t)&&!l(t,v)&&k(t),t}};r[v]=!0},300:function(t,e,n){var content=n(368);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("5feb8682",content,!0,{sourceMap:!1})},318:function(t,e,n){"use strict";var r=n(13),o=n(4),l=n(76),c=n(15),d=n(12),f=n(33),v=n(168),h=n(78),m=n(5),k=n(75),w=n(113).f,_=n(40).f,x=n(21).f,y=n(360).trim,C=o.Number,T=C.prototype,E="Number"==f(k(T)),P=function(t){var e,n,r,o,l,c,d,code,f=h(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=y(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(l("Number",!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var O,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(E?m((function(){T.valueOf.call(n)})):"Number"!=f(n))?v(new C(P(e)),n,N):P(e)},j=r?w(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;j.length>I;I++)d(C,O=j[I])&&!d(N,O)&&x(N,O,_(C,O));N.prototype=T,T.constructor=N,c(o,"Number",N)}},360:function(t,e,n){var r=n(17),o="["+n(361)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},361:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},362:function(t,e,n){var r=n(2),o=n(173).values;r({target:"Object",stat:!0},{values:function(t){return o(t)}})},363:function(t,e,n){"use strict";var r=n(364),o=n(366);t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},364:function(t,e,n){"use strict";var r=n(2),o=n(4),l=n(76),c=n(15),d=n(299),f=n(167),v=n(77),h=n(9),m=n(5),k=n(171),w=n(43),_=n(168);t.exports=function(t,e,n){var x=-1!==t.indexOf("Map"),y=-1!==t.indexOf("Weak"),C=x?"set":"add",T=o[t],E=T&&T.prototype,P=T,O={},N=function(t){var e=E[t];c(E,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(y&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return y&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!h(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(l(t,"function"!=typeof T||!(y||E.forEach&&!m((function(){(new T).entries().next()})))))P=n.getConstructor(e,t,x,C),d.REQUIRED=!0;else if(l(t,!0)){var j=new P,I=j[C](y?{}:-0,1)!=j,A=m((function(){j.has(1)})),$=k((function(t){new T(t)})),S=!y&&m((function(){for(var t=new T,e=5;e--;)t[C](e,e);return!t.has(-0)}));$||((P=e((function(e,n){v(e,P,t);var r=_(new T,e,P);return null!=n&&f(n,r[C],{that:r,AS_ENTRIES:x}),r}))).prototype=E,E.constructor=P),(A||S)&&(N("delete"),N("has"),x&&N("get")),(S||I)&&N(C),y&&E.clear&&delete E.clear}return O[t]=P,r({global:!0,forced:P!=T},O),w(P,t),y||n.setStrong(P,t,x),P}},365:function(t,e,n){var r=n(5);t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},366:function(t,e,n){"use strict";var r=n(21).f,o=n(75),l=n(118),c=n(45),d=n(77),f=n(167),v=n(117),h=n(119),m=n(13),k=n(299).fastKey,w=n(29),_=w.set,x=w.getterFor;t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){d(t,h,e),_(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),m||(t.size=0),null!=r&&f(r,t[v],{that:t,AS_ENTRIES:n})})),w=x(e),y=function(t,e,n){var r,o,l=w(t),c=C(t,e);return c?c.value=n:(l.last=c={index:o=k(e,!0),key:e,value:n,previous:r=l.last,next:void 0,removed:!1},l.first||(l.first=c),r&&(r.next=c),m?l.size++:t.size++,"F"!==o&&(l.index[o]=c)),t},C=function(t,e){var n,r=w(t),o=k(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return l(h.prototype,{clear:function(){for(var t=w(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,m?t.size=0:this.size=0},delete:function(t){var e=w(this),n=C(this,t);if(n){var r=n.next,o=n.previous;delete e.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),e.first==n&&(e.first=r),e.last==n&&(e.last=o),m?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=w(this),r=c(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!C(this,t)}}),l(h.prototype,n?{get:function(t){var e=C(this,t);return e&&e.value},set:function(t,e){return y(this,0===t?0:t,e)}}:{add:function(t){return y(this,t=0===t?0:t,t)}}),m&&r(h.prototype,"size",{get:function(){return w(this).size}}),h},setStrong:function(t,e,n){var r=e+" Iterator",o=x(e),l=x(r);v(t,e,(function(t,e){_(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=l(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),h(e)}}},367:function(t,e,n){"use strict";n(300)},368:function(t,e,n){(e=n(27)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),e.push([t.i,"@import url(https://use.typekit.net/kej5qyk.css);"]),e.push([t.i,".is-boxed .file-cta[data-v-408d86cf]{background:#fff;border:none;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23A9B1BD' stroke-width='4' stroke-dasharray='6,14' stroke-dashoffset='10' stroke-linecap='square'/%3E%3C/svg%3E\")}.dragover[data-v-408d86cf]{background-color:#e7f3ff!important}table[data-v-408d86cf]{background:transparent;border-spacing:10px;width:100%;text-align:center;border-radius:8px}table td[data-v-408d86cf]{border-top:1px solid #e8eeff}table th[data-v-408d86cf]{border:none}div.box[data-v-408d86cf]{background:#f7f9fb;padding:2rem;border-radius:8px;box-shadow:none}.button.is-wide[data-v-408d86cf]{min-width:220px}.batch-info[data-v-408d86cf]{padding-right:0}.batch-info .box[data-v-408d86cf]{width:100%;height:auto;padding:1rem;background:#fff}.batch-info .box button[data-v-408d86cf]{font-size:.9rem}",""]),t.exports=e},431:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(106);var o=n(125);function l(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},436:function(t,e,n){var content=n(616);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("3405dfe0",content,!0,{sourceMap:!1})},615:function(t,e,n){"use strict";n(436)},616:function(t,e,n){(e=n(27)(!1)).push([t.i,"form[data-v-3c24074d]{margin:20px 0;font-family:sans-serif;display:flex}input[data-v-3c24074d]{border:1px solid #ccc;padding:5px;font-size:16px;border-radius:3px;height:40px;vertical-align:top;width:300px}form+p[data-v-3c24074d]{margin-top:10px}input+button[data-v-3c24074d]{margin-left:10px}.section[data-v-3c24074d]{padding:10px 0;border-top:1px solid #ccc}.section[data-v-3c24074d],p+.button--pink[data-v-3c24074d]{margin-top:10px}",""]),t.exports=e}}]);