(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1073:function(t,e,n){"use strict";n.r(e);n(52),n(40);var r=n(7),o=n(591),c=n(288),l=n(394),f={data:function(){return{loading:!1,batch:null,repetitions:1,step:1,account:null,effectsdk:null,efxAvailable:null,campaigns:{like:null,retweet:null,follow:null},type:null,successMessage:null,errorMessage:null}},components:{Login:o.default,TaskForm:c.default},created:function(){this.getCampaigns()},computed:{},methods:{setSuccessMessage:function(t){this.successMessage=t},setErrorMessage:function(t){var e=this;this.errorMessage=t,setTimeout((function(){return e.errorMessage=null}),5e3)},nextStep:function(){this.successMessage=null,this.step+=1},previousStep:function(){this.errorMessage=null,this.successMessage=null,this.step-=1},getCampaigns:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.effectsdk=new l.EffectClient("mainnet"),e.next=4,t.effectsdk.force.getCampaign("14");case 4:return t.campaigns.like=e.sent,e.next=7,t.effectsdk.force.getCampaign("15");case 7:t.campaigns.follow=e.sent,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),t.setErrorMessage(e.t0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()},setAccount:function(t,e){this.effectsdk=e,this.account=t},setBatch:function(t,e){this.batch=t,this.repetitions=e}}},d=n(8),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section pt-6"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-three-fifths is-offset-one-fifth"},[1===t.step?n("div",{attrs:{id:"step-1"}},[t._m(0),t._v(" "),n("div",{staticClass:"control"},[n("div",{staticClass:"buttons is-centered px-6 mx-6"},[n("button",{staticClass:"button is-link is-light mt-3 is-fullwidth is-large",on:{click:function(e){e.preventDefault(),t.type="like",t.nextStep()}}},[n("span",[n("font-awesome-icon",{staticClass:"mx-2 is-small",attrs:{icon:"fa-solid fa-heart"}})],1),t._v(" "),n("span",[t._v(" Likes")])]),t._v(" "),n("br"),n("br"),n("br"),t._v(" "),n("button",{staticClass:"button is-link is-light mt-3 is-fullwidth is-large has-tooltip-arrow has-tooltip-top has-tooltip-info",attrs:{"data-tooltip":"Coming Soon!",disabled:""},on:{click:function(e){e.preventDefault(),t.type="follow",t.nextStep()}}},[n("span",[n("font-awesome-icon",{staticClass:"mx-2 is-small",attrs:{icon:"fa-solid fa-user-group"}})],1),t._v(" "),n("span",[t._v(" Follows")])]),t._v(" "),n("br"),n("br"),n("br"),t._v(" "),n("button",{staticClass:"button is-link is-light mt-3 is-fullwidth is-large has-tooltip-arrow has-tooltip-top has-tooltip-info",attrs:{"data-tooltip":"Coming Soon!",disabled:""},on:{click:function(e){e.preventDefault(),t.type="retweet",t.nextStep()}}},[n("span",[n("font-awesome-icon",{staticClass:"mx-2 is-small",attrs:{icon:"fa-solid fa-retweet"}})],1),t._v(" "),n("span",[t._v(" Retweets")])]),t._v(" "),n("br"),n("br"),n("br"),t._v(" "),n("button",{staticClass:"button is-link is-light mt-3 is-fullwidth is-large has-tooltip-arrow has-tooltip-top has-tooltip-info",attrs:{"data-tooltip":"Coming Soon!",disabled:""},on:{click:function(e){e.preventDefault(),t.type="reply",t.nextStep()}}},[n("span",[n("font-awesome-icon",{staticClass:"mx-2 is-small",attrs:{icon:"fa-solid fa-reply"}})],1),t._v(" "),n("span",[t._v(" Replies")])])])])]):t._e(),t._v(" "),2===t.step?n("task-form",{attrs:{campaign:t.campaigns[t.type]},on:{error:t.setErrorMessage,setBatch:t.setBatch,previousStep:function(e){return t.previousStep()},nextStep:function(e){return t.nextStep()}}}):t._e(),t._v(" "),3===t.step?n("login",{attrs:{repetitions:t.repetitions,batch:t.batch,campaign:t.campaigns[t.type]},on:{previousStep:function(e){return t.previousStep()},error:t.setErrorMessage,success:t.setSuccessMessage,account:t.setAccount}}):t._e(),t._v(" "),t.successMessage?n("article",{staticClass:"message is-success mt-5"},[n("div",{staticClass:"message-body"},[t._v("\n          "+t._s(t.successMessage)+"\n        ")])]):t._e(),t._v(" "),t.errorMessage?n("article",{staticClass:"message is-danger mt-5"},[n("div",{staticClass:"message-body"},[t._v("\n          "+t._s(t.errorMessage)+"\n        ")])]):t._e()],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"title"},[this._v("1. Select "),e("a",{attrs:{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer"}},[this._v("Twitter")]),this._v(" engagement")])}],!1,null,"69c6086c",null);e.default=component.exports;installComponents(component,{Login:n(591).default})},288:function(t,e,n){"use strict";n.r(e);n(59),n(60),n(53),n(54),n(115),n(32),n(169),n(116),n(165),n(79),n(310),n(16),n(355),n(166),n(38),n(58),n(356),n(55),n(39),n(75),n(117),n(56),n(57),n(52),n(167);var r=n(19),o=n(419),c=n(1),l=n(308);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=c.a.extend({props:["campaign"],data:function(){return{step:1,repetitions:1,tempCounter:0,newTask:{id:null,link:null},tasks:[],file:{name:null,content:null},error:null,loading:!1,page:1,perPage:10,type:null,placeholders:["link"],placeholderError:null,likeCampaign:{id:Number("14"),title:"Like"},followCampaign:{id:Number("14"),title:"Follow",parameter:"username"},retweetCampaign:{id:Number("14"),title:"Follow",parameter:"username"},replyCampaign:{id:Number("14"),title:"Follow",parameter:"username"}}},computed:{paginatedTasks:function(){var t=(this.page-1)*this.perPage;return this.tasks?this.tasks.slice(t,t+this.perPage):[]}},components:{Pagination:l.default},mounted:function(){this.getPlaceholders(this.campaign.info.template),this.$nextTick((function(){})),this.newTask=this.getEmptyTask(this.placeholders)},created:function(){},methods:{setPage:function(t){this.page=t},dragover:function(t){t.preventDefault(),t.currentTarget.classList.add("dragover")},dragleave:function(t){t.currentTarget.classList.remove("dragover")},onChange:function(){this.filelist=Object(o.a)(this.$refs.file.files)},createTask:function(){var t=this;for(var e in this.newTask)if(Object.hasOwnProperty.call(this.newTask,e)){var element=this.newTask[e];if(null===element||""===element)return this.placeholderError="Please fill in all the placeholders",void setTimeout((function(){return t.placeholderError=null}),5e3)}if(this.campaign.id===this.likeCampaign.id){var n;try{this.newTask.tweet_id.includes("https://")||this.newTask.tweet_id.includes("http://")?(console.debug("protocol already included  "),n=new URL(this.newTask.tweet_id)):(console.debug("add protocol to tweet_id"),n=new URL("https://".concat(this.newTask.tweet_id)))}catch(e){return console.error(e),this.placeholderError="Please enter a valid twitter.com url",void setTimeout((function(){return t.placeholderError=null}),5e3)}if("twitter.com"!==n.hostname||!n.pathname.includes("/status/")||0===n.pathname.split("/")[3].length)return this.placeholderError="Please enter a valid tweet url: https://twitter.com/username/status/123456789",void setTimeout((function(){return t.placeholderError=null}),5e3);this.tasks.push({id:this.newTask.id,tweet_id:"".concat(n.hostname).concat(n.pathname)})}this.newTask.id=this.tempCounter++,this.newTask=this.getEmptyTask(this.placeholders),this.$nextTick((function(){t.$refs["placeholder-0"][0].focus()}))},drop:function(t){t.preventDefault(),this.uploadFile(t.dataTransfer.files?t.dataTransfer.files:null,!0),t.currentTarget.classList.remove("dragover")},uploadFile:function(t,e){var n=this;this.file={name:null,content:null},this.error=null;var r=e?t[0]:t.target.files[0];if(r){this.file.name=r.name;var o=new FileReader;o.onload=function(t){n.file.content=n.csvToJson(t.target.result),n.file.content.forEach((function(element){n.newTask=element,n.createTask();var t=!1;n.placeholders.forEach((function(e){element[e]&&(t=!0)})),t||n.$emit("error","Placeholder not found in CSV")}))},o.readAsText(r)}else this.$emit("error","Could not find file"),this.file=null},csvToJson:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"',c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",",l=new RegExp("\\s*(".concat(n,")?(.*?)\\1\\s*(?:").concat(c,"|$)"),"gs"),f=function(t){return Object(o.a)(t.matchAll(l)).map((function(t){return t[2]})).filter((function(t,i,a){return i<a.length-1}))},v=t.split("\n"),h=e||f(v.splice(0,1)[0]);return v.map((function(line){return f(line).reduce((function(t,e,i){return d(d({},t),{},Object(r.a)({},h[i]||"extra_".concat(i),e.length>0?Number(e)||e:null))}),{})}))},getPlaceholders:function(template){var t=function(t,e,n){n||(n=1);for(var r,o=[];r=e.exec(t);)o.push(r[n]);return o}(template,/\$\{\s?(\w+)\s?\|?\s?(\w*)\s?\}/g),e=Object(o.a)(new Set(t));this.placeholders=e},generateCsvData:function(t){var link=this.$refs.csvfiledownload,e="data:text/csv;charset=utf-8,";e+=[Object.values(t).join(","),t.map((function(t){return t+"-value-task-1"})),t.map((function(t){return t+"-value-task-2"})),t.map((function(t){return t+"-value-task-3"}))].join("\n").replace(/(^\[)|(\]$)/gm,""),link.href=encodeURI(e)},getEmptyTask:function(t){var e={};return t.forEach((function(t){e[t]=""})),e},nextStep:function(){this.$emit("nextStep"),this.$emit("setBatch",this.tasks,this.repetitions)},cancel:function(){this.$emit("previousStep")},placeHolderTitle:function(t){switch(t){case"tweet_id":return"Link to Tweet";case"twitter_handle":return"Twitter Handle";case"tweet_instructions":return"Tweet Instructions";default:return t}}}}),h=(n(360),n(8)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"step-2"}},[n("h2",{staticClass:"title"},[t._v("2. Add your Tweets")]),t._v(" "),n("div",{staticClass:"field"},[n("div",{staticClass:"box"},[n("div",{staticClass:"p-2",staticStyle:{background:"#fff","border-radius":"8px"}},[n("table",{staticClass:"table mx-auto"},[n("thead",[n("tr",t._l(t.placeholders,(function(e){return n("th",{key:e,staticClass:"task-placeholder-value"},[t._v("\n                  "+t._s(t.placeHolderTitle(e))+"\n                ")])})),0)]),t._v(" "),n("tbody",[t._l(t.paginatedTasks,(function(e,r){return n("tr",{key:e.id},[t._l(t.placeholders,(function(r){return n("td",{key:r,staticClass:"task-placeholder-value has-text-left"},[n("a",{attrs:{href:e[r],target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e[r]))])])})),t._v(" "),n("td",[n("button",{staticClass:"button is-danger is-outlined is-small is-rounded",on:{click:function(e){return e.preventDefault(),t.tasks.splice(r,1)}}},[n("font-awesome-icon",{staticClass:"icon is-small",attrs:{icon:"fa-solid fa-trash-can"}})],1)])],2)})),t._v(" "),n("tr",t._l(t.placeholders,(function(e,r){return n("td",{key:e,staticClass:"task-placeholder-value"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask[e],expression:"newTask[placeholder]"}],ref:"placeholder-"+r,refInFor:!0,staticClass:"input is-info task-placeholder-value",attrs:{type:"url",pattern:"https?://.+",placeholder:t.campaign.id===t.likeCampaign.id?"https://twitter.com/username/status/12345":"username",required:""},domProps:{value:t.newTask[e]},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.createTask(e))},input:function(n){n.target.composing||t.$set(t.newTask,e,n.target.value)}}})])})),0)],2)]),t._v(" "),t.tasks?n("pagination",{attrs:{items:t.tasks.length,page:t.page,"per-page":t.perPage},on:{setPage:t.setPage}}):t._e()],1),t._v(" "),n("div",{staticClass:"control has-text-centered mt-5"},[n("button",{staticClass:"button is-primary is-wide",on:{click:function(e){return e.preventDefault(),t.createTask(e)}}},[t._v("\n            Add Task\n          ")]),t._v(" "),t.placeholderError?n("div",{staticClass:"notification is-danger is-light mt-5"},[t._v("\n            "+t._s(t.placeholderError)+"\n          ")]):t._e()])]),t._v(" "),t.tasks.length>0?n("div",{staticClass:"box is-centered"},[t.campaign&&t.campaign.info?n("div",{staticClass:" is-6 py-0 px-2 batch-info"},[n("div",{staticClass:"box"},[n("span",[t._v("\n                Amount: \n              ")]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.repetitions))])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.repetitions,expression:"repetitions"}],staticClass:"slider is-fullwidth is-info",attrs:{step:"1",min:"1",max:"20",type:"range"},domProps:{value:t.repetitions},on:{__r:function(e){t.repetitions=e.target.value}}}),t._v("\n              Total Cost\n              "),n("strong",[t._v(t._s(parseFloat(t.campaign.info.reward*t.tasks.length*t.repetitions).toFixed(4))+" EFX")])])]):t._e()]):t._e()]),t._v(" "),n("form",[n("div",{staticClass:"field is-grouped is-justify-content-center mt-6"},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-outlined is-primary is-wide",on:{click:t.cancel}},[t._v("\n            Back\n          ")]),t._v(" "),n("button",{staticClass:"button button is-primary is-wide mr-4",class:{"is-loading":t.loading},attrs:{type:"submit",disabled:!t.tasks.length},on:{click:t.nextStep}},[t._v("\n            Next step\n          ")])])])])])])}),[],!1,null,"7ee401a0",null);e.default=component.exports;installComponents(component,{Pagination:n(308).default,Form:n(288).default})},293:function(t,e,n){var content=n(361);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("0fc0e89b",content,!0,{sourceMap:!1})},308:function(t,e,n){"use strict";n.r(e);var r={props:["page","perPage","items"],computed:{maxPage:function(){return Math.ceil(this.items/this.perPage)}},watch:{items:function(){this.$emit("setPage",1)}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items&&t.items>t.perPage?n("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[n("span",{staticStyle:{"padding-left":"0.5em"}},[t._v(t._s((t.page-1)*t.perPage+1)+"-"+t._s(Math.min(t.page*t.perPage,t.items))+" of\n    "+t._s(t.items))]),t._v(" "),n("a",{staticClass:"pagination-previous",attrs:{disabled:1===t.page},on:{click:function(e){return t.$emit("setPage",t.page-1)}}},[t._v("Previous")]),t._v(" "),n("a",{staticClass:"pagination-next",attrs:{disabled:!t.maxPage||t.page===t.maxPage},on:{click:function(e){return t.$emit("setPage",t.page+1)}}},[t._v("Next page")]),t._v(" "),n("ul",{staticClass:"pagination-list has-margin-top-mobile"},[t.page>2?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",1)}}},[t._v("1")])]):t._e(),t._v(" "),t.page>3?n("li",[n("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]):t._e(),t._v(" "),t.page>1?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.page-1)}}},[t._v(t._s(t.page-1))])]):t._e(),t._v(" "),n("li",[n("a",{staticClass:"pagination-link is-current",attrs:{"aria-current":"page"}},[t._v(t._s(t.page))])]),t._v(" "),t.page<t.maxPage?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.page+1)}}},[t._v("\n        "+t._s(t.page+1))])]):t._e(),t._v(" "),t.maxPage>t.page+2?n("li",[n("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]):t._e(),t._v(" "),t.maxPage>t.page+1?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.maxPage)}}},[t._v(t._s(t.maxPage))])]):t._e()])]):t._e()}),[],!1,null,null,null);e.default=component.exports},360:function(t,e,n){"use strict";n(293)},361:function(t,e,n){(e=n(27)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),e.push([t.i,"@import url(https://use.typekit.net/kej5qyk.css);"]),e.push([t.i,".is-boxed .file-cta[data-v-7ee401a0]{background:#fff;border:none;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23A9B1BD' stroke-width='4' stroke-dasharray='6,14' stroke-dashoffset='10' stroke-linecap='square'/%3E%3C/svg%3E\")}.dragover[data-v-7ee401a0]{background-color:#e7f3ff!important}table[data-v-7ee401a0]{background:transparent;border-spacing:10px;width:100%;text-align:center;border-radius:8px}table td[data-v-7ee401a0]{border-top:1px solid #e8eeff}table th[data-v-7ee401a0]{border:none}div.box[data-v-7ee401a0]{background:#f7f9fb;padding:2rem;border-radius:8px;box-shadow:none}.button.is-wide[data-v-7ee401a0]{min-width:220px}.batch-info[data-v-7ee401a0]{padding-right:0}.batch-info .box[data-v-7ee401a0]{width:100%;height:auto;padding:1rem;background:#fff}.batch-info .box button[data-v-7ee401a0]{font-size:.9rem}",""]),t.exports=e},425:function(t,e,n){t.exports=n.p+"img/BSC-logo.818410e.svg"},426:function(t,e,n){t.exports=n.p+"img/EOS-logo.1bad77a.svg"},429:function(t,e){},431:function(t,e){},432:function(t,e){},436:function(t,e){},437:function(t,e){},444:function(t,e){},445:function(t,e){},455:function(t,e){},456:function(t,e){},461:function(t,e){},469:function(t,e){},470:function(t,e){},475:function(t,e){},477:function(t,e){},504:function(t,e){},506:function(t,e){},507:function(t,e){},511:function(t,e){},517:function(t,e){},520:function(t,e){},522:function(t,e){},533:function(t,e){},534:function(t,e){},538:function(t,e){},542:function(t,e){},557:function(t,e){},591:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("Buy "),e("i",[this._v("EFX")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("img",{attrs:{src:n(425),alt:"",srcset:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("img",{attrs:{src:n(426),alt:"",srcset:""}})])}],o=(n(53),n(54),n(32),n(310),n(602),n(16),n(166),n(38),n(58),n(55),n(118),n(75),n(56),n(40),n(7)),c=n(1),l=n(362),f=n.n(l),d=n(394),v=n(1006),h=n(1068),m=c.a.extend({props:["batch","campaign","repetitions"],data:function(){return{createdBatchId:null,loading:!1,efxAvailable:null,account:null,client:null,campaignid:null,batchidentification:null,connectAccount:{providerName:null,provider:null,account:null},connectResponse:null,message:null,accountConnected:!1,paymentLoading:!1}},components:{},created:function(){},computed:{ethereumConnected:function(){return!0},batchCost:function(){return this.batch.length*this.repetitions*this.campaign.info.reward},efxLoading:function(){return null===this.vefxAvailable||null===this.efxAvailable||null===this.efxPending},vefxAvailable:function(){var t=this,e=0;if(this.account){var n=this.account.vAccountRows;n&&(this.getAccountBalance(),n.forEach((function(n){n.balance.contract===t.client.config.efxTokenContract&&(e=parseFloat(n.balance.quantity))})))}return e}},methods:{extractTwitterId:function(t){if(""!=t&&t.includes("/status/")){var e=new RegExp(/[/status/][0-9]+/g);return{tweet_id:t.match(e)[0].replace("/","")}}return"Invalid URL"},uploadBatch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,content,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.paymentLoading=!0,e.prev=1,t.account.address||!(t.batchCost>t.vefxAvailable)){e.next=7;break}return n=t.batchCost-t.vefxAvailable,console.log("trying to deposit..",n),e.next=7,t.client.account.deposit(parseFloat(n).toFixed(4));case 7:return t.loading=!0,r=t.batch.map((function(e){return t.extractTwitterId(e.tweet_id)})),console.log("sanitized batch",r),content={tasks:r},e.next=13,t.client.force.createBatch(t.campaign.id,content,Number(t.repetitions),"efxtaskproxy");case 13:return o=e.sent,e.next=16,t.client.force.getBatchId(o.id,t.campaign.id);case 16:t.createdBatchId=e.sent,e.next=23;break;case 19:e.prev=19,e.t0=e.catch(1),t.$emit("error",e.t0),console.error(e.t0);case 23:t.loading=!1,t.paymentLoading=!1;case 25:case"end":return e.stop()}}),e,null,[[1,19]])})))()},previousStep:function(){this.$emit("previousStep")},login:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.generateClient(),e.next=4,t.connectMetamask();case 4:return e.next=6,t.connectEffectAccount();case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),t.$emit("error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},loginEOS:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.generateClient(),e.next=4,t.connectAnchor();case 4:return e.next=6,t.connectEffectAccount();case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),t.$emit("error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},generateClient:function(){console.log("Creating SDK...");try{this.client=new d.EffectClient("mainnet"),console.log(this.client)}catch(t){console.error(t)}},connectAnchor:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=new h.a,r=new v.a({transport:n,chainId:t.client.config.eosChainId,rpc:t.client.config.eosNodeUrl}),e.next=5,r.login("hackathon-boilerplate");case 5:o=e.sent,c=o.session,l=c.makeSignatureProvider(),f={accountName:c.auth.actor.toString(),permission:c.auth.permission.toString()},console.log("Logged in as",f),t.connectAccount.provider=l,t.connectAccount.account=f,t.connectAccount.providerName="anchor",e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),t.$emit("error",e.t0.message),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))()},connectMetamask:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Connecting to metamask wallet."),!window.ethereum){e.next=20;break}return e.prev=2,console.log("Connecting to metamask wallet."),e.next=6,ethereum.request({method:"eth_requestAccounts"});case 6:return e.sent,e.next=9,ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x38"}]});case 9:t.connectAccount.provider=new f.a(window.ethereum),t.connectAccount.account=null,t.connectAccount.providerName="metamask",e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),t.$emit("error",e.t0),console.error("Is this it????",e.t0);case 18:e.next=21;break;case 20:t.$emit("error","Metamask not installed");case 21:case"end":return e.stop()}}),e,null,[[2,14]])})))()},connectEffectAccount:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Connecting to account with wallet."),e.prev=1,!t.connectAccount.provider){e.next=8;break}return e.next=5,t.client.connectAccount(t.connectAccount.provider,t.connectAccount.account);case 5:t.connectResponse=e.sent,e.next=10;break;case 8:return t.$emit("error","Login failed, try again."),e.abrupt("return");case 10:t.accountConnected=!0,t.account=t.connectResponse,t.$emit("account",t.connectResponse,t.client),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(1),t.accountConnected=!1,t.$emit("error","Login failed, try again."),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[1,15]])})))()},getAccountBalance:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.accountConnected){e.next=8;break}if(t.account.address){e.next=8;break}return e.next=4,t.client.api.rpc.get_currency_balance(t.client.config.efxTokenContract,t.account.accountName,t.client.config.efxSymbol);case 4:n=e.sent[0],t.efxAvailable=n?parseFloat(n.replace(" ".concat(t.client.config.efxSymbol),"")):0,e.next=8;break;case 8:case"end":return e.stop()}}),e)})))()},getBscEFXBalance:function(address){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],type:"function"}],r=t.client.config.bscEfxTokenContract,o=new t.client.config.web3.eth.Contract(n,r),e.prev=3,e.next=6,o.methods.balanceOf(address).call();case 6:return c=e.sent,e.abrupt("return",t.client.config.web3.utils.fromWei(c.toString()));case 10:e.prev=10,e.t0=e.catch(3),console.error("Could not retrieve balance",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))()}}}),_=n(8),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[t.accountConnected?r("h2",{staticClass:"title"},[t._v("4. Submit to Effect Network")]):r("h2",{staticClass:"title"},[t._v("3. Connect your wallet")]),t._v(" "),t.accountConnected?r("div",{staticClass:"box media"},[r("figure",{staticClass:"media-left"},[r("p",{staticClass:"image is-128x128"},["metamask"===t.connectAccount.providerName?r("img",{attrs:{src:n(425),alt:"",srcset:""}}):r("img",{attrs:{src:n(426),alt:"",srcset:""}})])]),t._v(" "),r("div",{staticClass:"media-content"},[r("div",{staticClass:"content"},[r("p",{staticClass:"subtitle"},[t._v("Connected")]),t._v(" "),r("p",[r("strong",[t._v(t._s(t.connectResponse.accountName))])]),t._v(" "),r("hr"),t._v(" "),r("p",{staticClass:"subtitle"},[t._v("Balance")]),t._v(" "),r("p",[t._v("\n                  vEFX: "),r("span",{class:{"has-text-danger":null===t.efxAvailable&&t.batchCost>t.vefxAvailable}},[t._v(t._s(t.vefxAvailable)+" "),r("i",[t._v(t._s(t.client.config.efxSymbol))])]),r("br"),t._v(" "),null!==t.efxAvailable?r("span",[t._v("\n                      EFX: "),r("span",[t._v("  "+t._s(t.efxAvailable)+" "),r("i",[t._v(t._s(t.client.config.efxSymbol))])]),r("br"),t._v("\n                      Total: "),r("span",{class:{"has-text-danger":t.batchCost>t.vefxAvailable+t.efxAvailable}},[t._v(t._s(t.vefxAvailable+t.efxAvailable)+" "),r("i",[t._v(t._s(t.client.config.efxSymbol))])])]):t._e()]),t._v(" "),r("p"),t._v(" "),r("hr"),t._v(" "),r("p",{staticClass:"subtitle"},[t._v("Order")]),t._v(" "),r("table",{staticClass:"table is-narrow is-centered"},[r("thead"),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Tasks")]),t._v(" "),r("td",[t._v(t._s(t.batch.length)+" ×")])]),t._v(" "),r("tr",[r("td",[t._v("Amount")]),t._v(" "),r("td",[t._v(t._s(t.repetitions)+" ×")])]),t._v(" "),r("tr",[r("td",[t._v("Cost per Task")]),t._v(" "),r("td",[r("strong",[t._v(t._s(t.campaign.info.reward))]),t._v(" "),r("i",[t._v(t._s(t.client.config.efxSymbol))])])])]),t._v(" "),r("tfoot",[r("tr",[r("td",[t._v("Total Cost")]),t._v(" "),r("td",[r("strong",[t._v(t._s(t.batchCost))]),t._v(" "),r("i",[t._v(t._s(t.client.config.efxSymbol))])])])])]),t._v(" "),t.batchCost>t.vefxAvailable+(t.efxAvailable?t.efxAvailable:0)?r("p",{staticClass:"notification is-warning"},[t._v("\n                  You do not have enough EFX to complete this order.\n                  "),r("br"),r("br"),t._v(" "),r("a",{staticClass:"button is-fullwidth is-primary is-light",attrs:{href:"https://effect.network/token-page",target:"_blank",rel:"noopener noreferrer"}},[t._m(0),t._v("\n                        \n                      "),r("span",[r("font-awesome-icon",{staticClass:"mx-2 is-small",attrs:{icon:"fa-solid fa-arrow-up-right-from-square"}})],1)])]):t._e()])])]):t._e(),t._v(" "),t.accountConnected?t._e():r("div",{staticClass:"buttons px-6",attrs:{id:"connect-buttons"}},[r("button",{staticClass:"button is-large is-fullwidth is-light  px-6 mx-6",attrs:{id:"btn-login"},on:{click:function(e){return t.login()}}},[t._m(1),t._v(" "),r("span",[t._v("Connect with BSC")])]),t._v(" "),r("button",{staticClass:"button is-large is-fullwidth is-light  px-6 mx-6",attrs:{id:"btn-login-eos"},on:{click:function(e){return t.loginEOS()}}},[t._m(2),t._v(" "),r("span",[t._v("Connect with EOS")])])]),t._v(" "),t.accountConnected&&!t.createdBatchId?r("div",[t.paymentLoading?r("p",{staticClass:"notification is-warning"},[t._v("\n          Please be patient when posting...it can take up to a minute for transaction to complete.\n          "),r("br"),t._v("\n          Also note that you will need to sign multiple transactions if you are using Metamask.\n      ")]):t._e(),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.uploadBatch(e)}}},[r("div",{staticClass:"field is-grouped is-justify-content-center mt-6"},[r("div",{staticClass:"control"},[r("button",{staticClass:"button is-outlined is-primary is-wide",on:{click:t.previousStep}},[t._v("\n                  Back\n              ")]),t._v(" "),r("button",{staticClass:"button button is-primary is-wide mr-4",class:{"is-loading":t.loading},attrs:{type:"submit",disabled:t.batchCost>t.vefxAvailable+(t.efxAvailable?t.efxAvailable:0)}},[t._v("\n                  Post tasks\n              ")])])])])]):t._e(),t._v(" "),t.createdBatchId?r("div",{staticClass:"notification is-success"},[r("p",{staticClass:"mx-6 px-6"},[t._v("\n          Success! Your batch has been successfuly posted to Effect Force. "),r("br"),t._v("\n          Take a look at "),r("a",{attrs:{href:"https://testnet.effect.network/campaigns/"+t.campaign.id+"/"+t.createdBatchId,target:"_blank",rel:"noopener noreferrer"}},[t._v("https://app.effect.network")])]),r("hr"),t._v(" "),r("a",{staticClass:"mx-6 px-6",attrs:{href:"/batch/"+t.createdBatchId}},[t._v("\n              Go to batch results >\n          ")]),t._v(" "),r("p")]):t._e()])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{Form:n(288).default})}}]);