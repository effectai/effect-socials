(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1091:function(t,e,n){"use strict";n.r(e);var r=n(370).a,o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section pt-6"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-three-fifths is-offset-one-fifth"},[1===t.step?n("div",{attrs:{id:"step-1"}},[t._m(0),t._v(" "),n("div",{staticClass:"control"},[n("div",{staticClass:"buttons is-centered px-6 mx-6"},[n("button",{staticClass:"button is-link is-light mt-3 is-fullwidth is-large",on:{click:function(e){e.preventDefault(),t.type="like",t.nextStep()}}},[n("span",[n("font-awesome-icon",{staticClass:"mx-2 icon is-small",attrs:{icon:"fa-solid fa-heart"}})],1),t._v(" "),n("span",[t._v(" Twitter Likes")])]),t._v(" "),n("br"),n("br"),n("br"),t._v(" "),n("button",{staticClass:"button is-link is-light mt-3 is-fullwidth is-large has-tooltip-arrow has-tooltip-top has-tooltip-info",on:{click:function(e){e.preventDefault(),t.type="retweet",t.nextStep()}}},[n("span",[n("font-awesome-icon",{staticClass:"mx-2 icon is-small",attrs:{icon:"fa-solid fa-user-group"}})],1),t._v(" "),n("span",[t._v(" Twitter Retweets")])]),t._v(" "),n("br"),n("br"),n("br"),t._v(" "),n("button",{staticClass:"button is-link is-light mt-3 is-fullwidth is-large",on:{click:function(e){e.preventDefault(),t.type="follow",t.nextStep()}}},[n("span",[n("font-awesome-icon",{staticClass:"mx-2 icon is-small",attrs:{icon:"fa-solid fa-retweet"}})],1),t._v(" "),n("span",[t._v(" Twitter Follows")])]),t._v(" "),n("br"),n("br"),n("br"),t._v(" "),n("button",{staticClass:"button is-link is-light mt-3 is-fullwidth is-large",on:{click:function(e){e.preventDefault(),t.type="instagram",t.nextStep()}}},[n("span",[n("font-awesome-icon",{staticClass:"mx-2 icon is-small",attrs:{icon:"fa-solid fa-heart"}})],1),t._v(" "),n("span",[t._v(" Instagram Likes")])])])])]):t._e(),t._v(" "),2===t.step?n("task-form",{attrs:{campaign:t.campaigns[t.type]},on:{error:t.setErrorMessage,setBatch:t.setBatch,previousStep:function(e){return t.previousStep()},nextStep:function(e){return t.nextStep()}}}):t._e(),t._v(" "),3===t.step?n("login",{attrs:{repetitions:t.repetitions,batch:t.batch,campaign:t.campaigns[t.type]},on:{previousStep:function(e){return t.previousStep()},error:t.setErrorMessage,success:t.setSuccessMessage,account:t.setAccount}}):t._e(),t._v(" "),t.successMessage?n("article",{staticClass:"message is-success mt-5"},[n("div",{staticClass:"message-body"},[t._v("\n          "+t._s(t.successMessage)+"\n        ")])]):t._e(),t._v(" "),t.errorMessage?n("article",{staticClass:"message is-danger mt-5"},[n("div",{staticClass:"message-body"},[t._v("\n          "+t._s(t.errorMessage)+"\n        ")])]):t._e()],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"title"},[this._v("1. Select "),e("a",{attrs:{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer"}},[this._v("Twitter")]),this._v(" engagement")])}],!1,null,"2fb81bd6",null);e.default=component.exports;installComponents(component,{Login:n(610).default})},269:function(t,e,n){"use strict";n.r(e);var r={props:["page","perPage","items"],computed:{maxPage:function(){return Math.ceil(this.items/this.perPage)}},watch:{items:function(){this.$emit("setPage",1)}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items&&t.items>t.perPage?n("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[n("span",{staticStyle:{"padding-left":"0.5em"}},[t._v(t._s((t.page-1)*t.perPage+1)+"-"+t._s(Math.min(t.page*t.perPage,t.items))+" of\n    "+t._s(t.items))]),t._v(" "),n("a",{staticClass:"pagination-previous",attrs:{disabled:1===t.page},on:{click:function(e){return t.$emit("setPage",t.page-1)}}},[t._v("Previous")]),t._v(" "),n("a",{staticClass:"pagination-next",attrs:{disabled:!t.maxPage||t.page===t.maxPage},on:{click:function(e){return t.$emit("setPage",t.page+1)}}},[t._v("Next page")]),t._v(" "),n("ul",{staticClass:"pagination-list has-margin-top-mobile"},[t.page>2?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",1)}}},[t._v("1")])]):t._e(),t._v(" "),t.page>3?n("li",[n("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]):t._e(),t._v(" "),t.page>1?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.page-1)}}},[t._v(t._s(t.page-1))])]):t._e(),t._v(" "),n("li",[n("a",{staticClass:"pagination-link is-current",attrs:{"aria-current":"page"}},[t._v(t._s(t.page))])]),t._v(" "),t.page<t.maxPage?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.page+1)}}},[t._v("\n        "+t._s(t.page+1))])]):t._e(),t._v(" "),t.maxPage>t.page+2?n("li",[n("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]):t._e(),t._v(" "),t.maxPage>t.page+1?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.maxPage)}}},[t._v(t._s(t.maxPage))])]):t._e()])]):t._e()}),[],!1,null,null,null);e.default=component.exports},270:function(t,e,n){"use strict";(function(t){n(61),n(62),n(56),n(42),n(120),n(32),n(172),n(116),n(114),n(83),n(319),n(16),n(363),n(170),n(34),n(59),n(364),n(57),n(40),n(60),n(80),n(58),n(55),n(54),n(169);var r=n(19),o=n(434),c=n(1),l=n(269);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({props:["campaign"],data:function(){return{step:1,repetitions:1,tempCounter:0,newTask:{id:null,link:null},tasks:[],file:{name:null,content:null},error:null,loading:!1,page:1,perPage:10,type:null,placeholders:["link"],placeholderError:null,likeCampaign:{id:Number("14"),title:"Like"},followCampaign:{id:Number("14"),title:"Follow",parameter:"username"},retweetCampaign:{id:Number("14"),title:"Follow",parameter:"username"},replyCampaign:{id:Number("14"),title:"Follow",parameter:"username"},InstagramCampaign:{id:Number("14"),title:"instagram",parameter:"link"}}},computed:{paginatedTasks:function(){var t=(this.page-1)*this.perPage;return this.tasks?this.tasks.slice(t,t+this.perPage):[]}},components:{Pagination:l.default},mounted:function(){this.getPlaceholders(this.campaign.info.template),this.$nextTick((function(){})),this.newTask=this.getEmptyTask(this.placeholders)},created:function(){},methods:{setPage:function(t){this.page=t},dragover:function(t){t.preventDefault(),t.currentTarget.classList.add("dragover")},dragleave:function(t){t.currentTarget.classList.remove("dragover")},onChange:function(){this.filelist=Object(o.a)(this.$refs.file.files)},createTask:function(){var e,n=this;for(var r in this.newTask)if(Object.hasOwnProperty.call(this.newTask,r)){var element=this.newTask[r];if(null===element||""===element)return this.placeholderError="Please fill in all the placeholders",void setTimeout((function(){return n.placeholderError=null}),5e3)}if(console.log(this.campaign.id,parseInt("15")),this.campaign.id===parseInt(t.env.NUXT_ENV_CAMPAIGN_INSTAGRAM_ID)){try{e=this.newTask.instagramLink.includes("https://")||this.newTask.instagramLink.includes("http://")?new URL(this.newTask.instagramLink):new URL("https://".concat(this.newTask.instagramLink))}catch(t){console.error(t),this.placeholderError="Please fill in all the placeholders",setTimeout((function(){return n.placeholderError=null}),5e3)}if(console.log(e,!e.pathname.includes("/p/"),!e.pathname.includes("/reel/")),"www.instagram.com"!==e.hostname)return this.placeholderError="Please enter a valid instagram link.",void setTimeout((function(){return n.placeholderError=null}),1e4);if(!e.pathname.includes("/p/")&&!e.pathname.includes("/reel/"))return this.placeholderError="Please enter a valid instagram link: https://www.instagram.com/reel/Chg66lVlP2J/ or https://www.instagram.com/p/Chg66lVlP2J/",void setTimeout((function(){return n.placeholderError=null}),1e4);this.newTask.instagramLink="https://www.instagram.com".concat(e.pathname),this.tasks.push(this.newTask)}else if(this.campaign.id===parseInt("15")){try{e=this.newTask.twitter_handle.includes("https://")||this.newTask.twitter_handle.includes("http://")?new URL(this.newTask.twitter_handle):new URL("https://".concat(this.newTask.twitter_handle))}catch(t){console.error(t),this.placeholderError="Please fill in all the placeholders",setTimeout((function(){return n.placeholderError=null}),5e3)}if("twitter.com"!==e.hostname)return this.placeholderError="Please enter a valid twitter handle: https://twitter.com/username",void setTimeout((function(){return n.placeholderError=null}),1e4);this.newTask.twitter_handle="https://www.twitter.com".concat(e.pathname),this.tasks.push(this.newTask)}else{try{e=this.newTask.tweet_id.includes("https://")||this.newTask.tweet_id.includes("http://")?new URL(this.newTask.tweet_id):new URL("https://".concat(this.newTask.tweet_id))}catch(t){return console.error(t),this.placeholderError="Please enter a valid twitter.com url",void setTimeout((function(){return n.placeholderError=null}),5e3)}if("twitter.com"!==e.hostname||!e.pathname.includes("/status/")||0===e.pathname.split("/")[3].length)return this.placeholderError="Please enter a valid tweet url: https://twitter.com/username/status/123456789",void setTimeout((function(){return n.placeholderError=null}),5e3);this.newTask.tweet_id="".concat(e.hostname).concat(e.pathname),this.tasks.push(this.newTask)}this.newTask.id=this.tempCounter++,this.newTask=this.getEmptyTask(this.placeholders),this.$nextTick((function(){n.$refs["placeholder-0"][0].focus()}))},drop:function(t){t.preventDefault(),this.uploadFile(t.dataTransfer.files?t.dataTransfer.files:null,!0),t.currentTarget.classList.remove("dragover")},uploadFile:function(t,e){var n=this;this.file={name:null,content:null},this.error=null;var r=e?t[0]:t.target.files[0];if(r){this.file.name=r.name;var o=new FileReader;o.onload=function(t){n.file.content=n.csvToJson(t.target.result),n.file.content.forEach((function(element){n.newTask=element,n.createTask();var t=!1;n.placeholders.forEach((function(e){element[e]&&(t=!0)})),t||n.$emit("error","Placeholder not found in CSV")}))},o.readAsText(r)}else this.$emit("error","Could not find file"),this.file=null},csvToJson:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"',c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",",l=new RegExp("\\s*(".concat(n,")?(.*?)\\1\\s*(?:").concat(c,"|$)"),"gs"),f=function(t){return Object(o.a)(t.matchAll(l)).map((function(t){return t[2]})).filter((function(t,i,a){return i<a.length-1}))},h=t.split("\n"),m=e||f(h.splice(0,1)[0]);return h.map((function(line){return f(line).reduce((function(t,e,i){return d(d({},t),{},Object(r.a)({},m[i]||"extra_".concat(i),e.length>0?Number(e)||e:null))}),{})}))},getPlaceholders:function(template){var t=function(t,e,n){n||(n=1);for(var r,o=[];r=e.exec(t);)o.push(r[n]);return o}(template,/\$\{\s?(\w+)\s?\|?\s?(\w*)\s?\}/g),e=Object(o.a)(new Set(t));this.placeholders=e},generateCsvData:function(t){var link=this.$refs.csvfiledownload,e="data:text/csv;charset=utf-8,";e+=[Object.values(t).join(","),t.map((function(t){return t+"-value-task-1"})),t.map((function(t){return t+"-value-task-2"})),t.map((function(t){return t+"-value-task-3"}))].join("\n").replace(/(^\[)|(\]$)/gm,""),link.href=encodeURI(e)},getEmptyTask:function(t){var e={};return t.forEach((function(t){e[t]=""})),e},nextStep:function(){this.$emit("nextStep"),this.$emit("setBatch",this.tasks,this.repetitions)},cancel:function(){this.$emit("previousStep")},placeHolderTitle:function(t){switch(t){case"tweet_id":return"Link to Tweet";case"twitter_handle":return"Twitter Handle";case"tweet_instructions":return"Tweet Instructions";default:return t}}}})}).call(this,n(166))},296:function(t,e,n){"use strict";n.r(e);var r=n(270).a,o=(n(368),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"step-2"}},[n("h2",{staticClass:"title"},[t._v("2. Add Links")]),t._v(" "),n("div",{staticClass:"field"},[n("div",{staticClass:"box"},[n("div",{staticClass:"p-2",staticStyle:{background:"#fff","border-radius":"8px"}},[n("table",{staticClass:"table mx-auto"},[n("thead",[n("tr",t._l(t.placeholders,(function(e){return n("th",{key:e,staticClass:"task-placeholder-value has-text-left"},[t._v("\n                  "+t._s(t.placeHolderTitle(e))+"\n                ")])})),0)]),t._v(" "),n("tbody",[t._l(t.paginatedTasks,(function(e,r){return n("tr",{key:e.id},[t._l(t.placeholders,(function(r){return n("td",{key:r,staticClass:"task-placeholder-value has-text-left"},["tweet_id"===r?n("a",{attrs:{href:e[r],target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e[r]))]):n("span",[t._v(t._s(e[r]))])])})),t._v(" "),n("td",[n("button",{staticClass:"button is-danger is-outlined is-small is-rounded",on:{click:function(e){return e.preventDefault(),t.tasks.splice(r,1)}}},[n("font-awesome-icon",{staticClass:"icon is-small",attrs:{icon:"fa-solid fa-trash-can"}})],1)])],2)})),t._v(" "),n("tr",t._l(t.placeholders,(function(e,r){return n("td",{key:e,staticClass:"task-placeholder-value"},[n("input","tweet_id"===e?{directives:[{name:"model",rawName:"v-model",value:t.newTask[e],expression:"newTask[placeholder]"}],ref:"placeholder-"+r,refInFor:!0,staticClass:"input is-info task-placeholder-value",attrs:{type:"url",pattern:"https?://.+",placeholder:"https://twitter.com/username/status/12345",required:""},domProps:{value:t.newTask[e]},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.createTask(e))},input:function(n){n.target.composing||t.$set(t.newTask,e,n.target.value)}}}:{directives:[{name:"model",rawName:"v-model",value:t.newTask[e],expression:"newTask[placeholder]"}],ref:"placeholder-"+r,refInFor:!0,staticClass:"input is-info task-placeholder-value",attrs:{placeholder:t.placeHolderTitle(e),required:""},domProps:{value:t.newTask[e]},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.createTask(e))},input:function(n){n.target.composing||t.$set(t.newTask,e,n.target.value)}}})])})),0)],2)]),t._v(" "),t.tasks?n("pagination",{attrs:{items:t.tasks.length,page:t.page,"per-page":t.perPage},on:{setPage:t.setPage}}):t._e()],1),t._v(" "),n("div",{staticClass:"control has-text-centered mt-5"},[n("button",{staticClass:"button is-primary is-wide",on:{click:function(e){return e.preventDefault(),t.createTask(e)}}},[t._v("\n            Add Task\n          ")]),t._v(" "),t.placeholderError?n("div",{staticClass:"notification is-danger is-light mt-5"},[t._v("\n            "+t._s(t.placeholderError)+"\n          ")]):t._e()])]),t._v(" "),0===t.tasks.length?n("div",{staticClass:"box is-centered"},[t.campaign&&t.campaign.info?n("div",{staticClass:" is-6 py-0 px-2 batch-info"},[n("div",{staticClass:"box"},[n("span",[t._v("\n                Amount: \n              ")]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.repetitions))])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.repetitions,expression:"repetitions"}],staticClass:"slider is-fullwidth is-info",attrs:{step:"1",min:"1",max:"20",type:"range"},domProps:{value:t.repetitions},on:{__r:function(e){t.repetitions=e.target.value}}}),t._v("\n              Total Cost\n              "),n("strong",[t._v(t._s(parseFloat(t.campaign.info.reward*t.tasks.length*t.repetitions).toFixed(4))+" EFX")])])]):t._e()]):t._e()]),t._v(" "),n("form",[n("div",{staticClass:"field is-grouped is-justify-content-center mt-6"},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-outlined is-primary is-wide",on:{click:t.cancel}},[t._v("\n            Back\n          ")]),t._v(" "),n("button",{staticClass:"button button is-primary is-wide mr-4",class:{"is-loading":t.loading},attrs:{type:"submit",disabled:!t.tasks.length},on:{click:t.nextStep}},[t._v("\n            Next step\n          ")])])])])])])}),[],!1,null,"0b47888e",null);e.default=component.exports;installComponents(component,{Pagination:n(269).default,Form:n(296).default})},301:function(t,e,n){var content=n(369);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("4bd94086",content,!0,{sourceMap:!1})},368:function(t,e,n){"use strict";n(301)},369:function(t,e,n){(e=n(27)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),e.push([t.i,"@import url(https://use.typekit.net/kej5qyk.css);"]),e.push([t.i,".is-boxed .file-cta[data-v-0b47888e]{background:#fff;border:none;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23A9B1BD' stroke-width='4' stroke-dasharray='6,14' stroke-dashoffset='10' stroke-linecap='square'/%3E%3C/svg%3E\")}.dragover[data-v-0b47888e]{background-color:#e7f3ff!important}table[data-v-0b47888e]{background:transparent;border-spacing:10px;width:100%;text-align:center;border-radius:8px}table td[data-v-0b47888e]{border-top:1px solid #e8eeff}table th[data-v-0b47888e]{border:none}div.box[data-v-0b47888e]{background:#f7f9fb;padding:2rem;border-radius:8px;box-shadow:none}.button.is-wide[data-v-0b47888e]{min-width:220px}.batch-info[data-v-0b47888e]{padding-right:0}.batch-info .box[data-v-0b47888e]{width:100%;height:auto;padding:1rem;background:#fff}.batch-info .box button[data-v-0b47888e]{font-size:.9rem}",""]),t.exports=e},370:function(t,e,n){"use strict";(function(t){n(54),n(44);var r=n(7),o=n(610),c=n(296),l=n(404);e.a={data:function(){return{loading:!1,batch:null,repetitions:1,step:1,account:null,effectsdk:null,efxAvailable:null,campaigns:{like:null,retweet:null,follow:null,reply:null,instagram:null},type:null,successMessage:null,errorMessage:null}},components:{Login:o.default,TaskForm:c.default},created:function(){this.getCampaigns()},computed:{},methods:{setSuccessMessage:function(t){this.successMessage=t},setErrorMessage:function(t){var e=this;this.errorMessage=t,setTimeout((function(){return e.errorMessage=null}),5e3)},nextStep:function(){this.successMessage=null,this.step+=1},previousStep:function(){this.errorMessage=null,this.successMessage=null,this.step-=1},getCampaigns:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e.effectsdk=new l.EffectClient("mainnet"),n.next=4,e.effectsdk.force.getCampaign(parseInt("16"));case 4:return e.campaigns.retweet=n.sent,n.next=7,e.effectsdk.force.getCampaign(parseInt("14"));case 7:return e.campaigns.like=n.sent,n.next=10,e.effectsdk.force.getCampaign(parseInt("15"));case 10:return e.campaigns.follow=n.sent,n.next=13,e.effectsdk.force.getCampaign(parseInt(t.env.NUXT_ENV_CAMPAIGN_INSTAGRAM_ID));case 13:e.campaigns.instagram=n.sent,n.next=20;break;case 16:n.prev=16,n.t0=n.catch(0),e.setErrorMessage(n.t0),console.error(n.t0);case 20:case"end":return n.stop()}}),n,null,[[0,16]])})))()},setAccount:function(t,e){this.effectsdk=e,this.account=t},setBatch:function(t,e){this.batch=t,this.repetitions=e}}}}).call(this,n(166))},371:function(t,e,n){"use strict";(function(t){n(620),n(623),n(56),n(42),n(32),n(319),n(624),n(16),n(170),n(34),n(59),n(57),n(40),n(124),n(60),n(80),n(58),n(55),n(169),n(44);var r=n(7),o=n(19),c=n(51),l=n(1),f=n(372),d=n.n(f),h=n(404),m=n(1020),v=n(1082);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=l.a.extend({props:["batch","campaign","repetitions"],data:function(){return{createdBatchId:null,loading:!1,efxAvailable:null,account:null,client:null,campaignid:null,batchidentification:null,connectAccount:{providerName:null,provider:null,account:null},connectResponse:null,message:null,accountConnected:!1,paymentLoading:!1}},components:{},created:function(){},computed:{ethereumConnected:function(){return!0},batchCost:function(){return this.batch.length*this.repetitions*this.campaign.info.reward},efxLoading:function(){return null===this.vefxAvailable||null===this.efxAvailable||null===this.efxPending},vefxAvailable:function(){var t=this,e=0;if(this.account){var n=this.account.vAccountRows;n&&(this.getAccountBalance(),n.forEach((function(n){n.balance.contract===t.client.config.efxTokenContract&&(e=parseFloat(n.balance.quantity))})))}return e}},methods:w(w({},Object(c.b)({addTransaction:"transaction/addTransaction"})),{},{extractTwitterId:function(t){if(""!=t&&t.includes("/status/")){var e=new RegExp(/[/status/][0-9]+/g);return{tweet_id:t.match(e)[0].replace("/","")}}return"Invalid URL"},extractTwitterHandle:function(t){try{return{twitter_handle:new URL(t).pathname.split("/").pop()}}catch(t){console.error(t)}},extractInstagramID:function(t){try{return{instagram_id:new URL(t).pathname.split("/")[2]}}catch(t){return console.error(t),"Invalid URL"}},uploadBatch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,content,l,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.paymentLoading=!0,n.prev=1,e.account.address||!(e.batchCost>e.vefxAvailable)){n.next=7;break}return r=e.batchCost-e.vefxAvailable,console.log("trying to deposit..",r),n.next=7,e.client.account.deposit(parseFloat(r).toFixed(4));case 7:return e.loading=!0,c=e.campaign.id===parseInt(t.env.NUXT_ENV_CAMPAIGN_INSTAGRAM_ID)?e.batch.map((function(t){return e.extractInstagramID(t.instagramLink)})):e.campaign.id===parseInt("15")?e.batch.map((function(t){return e.extractTwitterHandle(t.twitter_handle)})):e.batch.map((function(t){return e.extractTwitterId(t.tweet_id)})),console.log("sanitized batch",c),content={tasks:c},n.next=13,e.client.force.createBatch(e.campaign.id,content,Number(e.repetitions),"efxtaskproxy");case 13:return l=n.sent,n.next=16,e.client.force.getBatchId(l.id,e.campaign.id);case 16:e.createdBatchId=n.sent,f=Object(o.a)({type:e.type,campaign:{id:e.campaign.id,title:e.campaign.info.title,description:e.campaign.info.description,image:e.campaign.info.image,reward:e.campaign.info.reward},batch:e.batch,repetitions:e.repetitions,account:e.account,date:new Date,batchId:e.createdBatchId,eos:l,totalCost:e.batchCost},"batchId",e.createdBatchId),e.addTransaction(f),n.next=25;break;case 21:n.prev=21,n.t0=n.catch(1),e.$emit("error",n.t0),console.error(n.t0);case 25:e.loading=!1,e.paymentLoading=!1;case 27:case"end":return n.stop()}}),n,null,[[1,21]])})))()},previousStep:function(){this.$emit("previousStep")},login:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.generateClient(),e.next=4,t.connectMetamask();case 4:return e.next=6,t.connectEffectAccount();case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),t.$emit("error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},loginEOS:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.generateClient(),e.next=4,t.connectAnchor();case 4:return e.next=6,t.connectEffectAccount();case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),t.$emit("error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},generateClient:function(){console.log("Creating SDK...");try{this.client=new h.EffectClient("mainnet"),console.log(this.client)}catch(t){console.error(t)}},connectAnchor:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=new v.a,r=new m.a({transport:n,chainId:t.client.config.eosChainId,rpc:t.client.config.eosNodeUrl}),e.next=5,r.login("hackathon-boilerplate");case 5:o=e.sent,c=o.session,l=c.makeSignatureProvider(),f={accountName:c.auth.actor.toString(),permission:c.auth.permission.toString()},console.log("Logged in as",f),t.connectAccount.provider=l,t.connectAccount.account=f,t.connectAccount.providerName="anchor",e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),t.$emit("error",e.t0.message),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))()},connectMetamask:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Connecting to metamask wallet."),!window.ethereum){e.next=20;break}return e.prev=2,console.log("Connecting to metamask wallet."),e.next=6,ethereum.request({method:"eth_requestAccounts"});case 6:return e.sent,e.next=9,ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x38"}]});case 9:t.connectAccount.provider=new d.a(window.ethereum),t.connectAccount.account=null,t.connectAccount.providerName="metamask",e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),t.$emit("error",e.t0),console.error("Is this it????",e.t0);case 18:e.next=21;break;case 20:t.$emit("error","Metamask not installed");case 21:case"end":return e.stop()}}),e,null,[[2,14]])})))()},connectEffectAccount:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Connecting to account with wallet."),e.prev=1,!t.connectAccount.provider){e.next=8;break}return e.next=5,t.client.connectAccount(t.connectAccount.provider,t.connectAccount.account);case 5:t.connectResponse=e.sent,e.next=10;break;case 8:return t.$emit("error","Login failed, try again."),e.abrupt("return");case 10:t.accountConnected=!0,t.account=t.connectResponse,t.$emit("account",t.connectResponse,t.client),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(1),t.accountConnected=!1,t.$emit("error","Login failed, try again."),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[1,15]])})))()},getAccountBalance:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.accountConnected){e.next=8;break}if(t.account.address){e.next=8;break}return e.next=4,t.client.api.rpc.get_currency_balance(t.client.config.efxTokenContract,t.account.accountName,t.client.config.efxSymbol);case 4:n=e.sent[0],t.efxAvailable=n?parseFloat(n.replace(" ".concat(t.client.config.efxSymbol),"")):0,e.next=8;break;case 8:case"end":return e.stop()}}),e)})))()},getBscEFXBalance:function(address){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],type:"function"}],r=t.client.config.bscEfxTokenContract,o=new t.client.config.web3.eth.Contract(n,r),e.prev=3,e.next=6,o.methods.balanceOf(address).call();case 6:return c=e.sent,e.abrupt("return",t.client.config.web3.utils.fromWei(c.toString()));case 10:e.prev=10,e.t0=e.catch(3),console.error("Could not retrieve balance",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))()}})})}).call(this,n(166))},440:function(t,e,n){t.exports=n.p+"img/BSC-logo.818410e.svg"},441:function(t,e,n){t.exports=n.p+"img/EOS-logo.1bad77a.svg"},445:function(t,e){},447:function(t,e){},448:function(t,e){},452:function(t,e){},453:function(t,e){},460:function(t,e){},461:function(t,e){},471:function(t,e){},472:function(t,e){},478:function(t,e){},486:function(t,e){},487:function(t,e){},492:function(t,e){},494:function(t,e){},521:function(t,e){},523:function(t,e){},524:function(t,e){},528:function(t,e){},534:function(t,e){},537:function(t,e){},539:function(t,e){},550:function(t,e){},551:function(t,e){},555:function(t,e){},559:function(t,e){},574:function(t,e){},610:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("Buy "),e("i",[this._v("EFX")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("img",{attrs:{src:n(440),alt:"",srcset:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("img",{attrs:{src:n(441),alt:"",srcset:""}})])}],o=n(371).a,c=n(8),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[t.accountConnected?r("h2",{staticClass:"title"},[t._v("4. Submit to Effect Network")]):r("h2",{staticClass:"title"},[t._v("3. Connect your wallet")]),t._v(" "),t.accountConnected?r("div",{staticClass:"box media"},[r("figure",{staticClass:"media-left"},[r("p",{staticClass:"image is-128x128"},["metamask"===t.connectAccount.providerName?r("img",{attrs:{src:n(440),alt:"",srcset:""}}):r("img",{attrs:{src:n(441),alt:"",srcset:""}})])]),t._v(" "),r("div",{staticClass:"media-content"},[r("div",{staticClass:"content"},[r("p",{staticClass:"subtitle"},[t._v("Connected")]),t._v(" "),r("p",[r("strong",[t._v(t._s(t.connectResponse.accountName))])]),t._v(" "),r("hr"),t._v(" "),r("p",{staticClass:"subtitle"},[t._v("Balance")]),t._v(" "),r("p",[t._v("\n                  vEFX: "),r("span",{class:{"has-text-danger":null===t.efxAvailable&&t.batchCost>t.vefxAvailable}},[t._v(t._s(t.vefxAvailable)+" "),r("i",[t._v(t._s(t.client.config.efxSymbol))])]),r("br"),t._v(" "),null!==t.efxAvailable?r("span",[t._v("\n                      EFX: "),r("span",[t._v("  "+t._s(t.efxAvailable)+" "),r("i",[t._v(t._s(t.client.config.efxSymbol))])]),r("br"),t._v("\n                      Total: "),r("span",{class:{"has-text-danger":t.batchCost>t.vefxAvailable+t.efxAvailable}},[t._v(t._s(t.vefxAvailable+t.efxAvailable)+" "),r("i",[t._v(t._s(t.client.config.efxSymbol))])])]):t._e()]),t._v(" "),r("p"),t._v(" "),r("hr"),t._v(" "),r("p",{staticClass:"subtitle"},[t._v("Order")]),t._v(" "),r("table",{staticClass:"table is-narrow is-centered"},[r("thead"),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Tasks")]),t._v(" "),r("td",[t._v(t._s(t.batch.length)+" ×")])]),t._v(" "),r("tr",[r("td",[t._v("Amount")]),t._v(" "),r("td",[t._v(t._s(t.repetitions)+" ×")])]),t._v(" "),r("tr",[r("td",[t._v("Cost per Task")]),t._v(" "),r("td",[r("strong",[t._v(t._s(t.campaign.info.reward))]),t._v(" "),r("i",[t._v(t._s(t.client.config.efxSymbol))])])])]),t._v(" "),r("tfoot",[r("tr",[r("td",[t._v("Total Cost")]),t._v(" "),r("td",[r("strong",[t._v(t._s(t.batchCost))]),t._v(" "),r("i",[t._v(t._s(t.client.config.efxSymbol))])])])])]),t._v(" "),t.batchCost>t.vefxAvailable+(t.efxAvailable?t.efxAvailable:0)?r("p",{staticClass:"notification is-warning"},[t._v("\n                  You do not have enough EFX to complete this order.\n                  "),r("br"),r("br"),t._v(" "),r("a",{staticClass:"button is-fullwidth is-primary is-light",attrs:{href:"https://effect.network/token-page",target:"_blank",rel:"noopener noreferrer"}},[t._m(0),t._v("\n                        \n                      "),r("span",[r("font-awesome-icon",{staticClass:"mx-2 icon is-small",attrs:{icon:"fa-solid fa-arrow-up-right-from-square"}})],1)])]):t._e()])])]):t._e(),t._v(" "),t.accountConnected?t._e():r("div",{staticClass:"buttons px-6",attrs:{id:"connect-buttons"}},[r("button",{staticClass:"button is-large is-fullwidth is-light  px-6 mx-6",attrs:{id:"btn-login"},on:{click:function(e){return t.login()}}},[t._m(1),t._v(" "),r("span",[t._v("Connect with BSC")])]),t._v(" "),r("button",{staticClass:"button is-large is-fullwidth is-light  px-6 mx-6",attrs:{id:"btn-login-eos"},on:{click:function(e){return t.loginEOS()}}},[t._m(2),t._v(" "),r("span",[t._v("Connect with EOS")])])]),t._v(" "),t.accountConnected&&!t.createdBatchId?r("div",[t.paymentLoading?r("p",{staticClass:"notification is-warning"},[t._v("\n          Please be patient when posting...it can take up to a minute for transaction to complete.\n          "),r("br"),t._v("\n          Also note that you will need to sign multiple transactions if you are using Metamask.\n      ")]):t._e(),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.uploadBatch(e)}}},[r("div",{staticClass:"field is-grouped is-justify-content-center mt-6"},[r("div",{staticClass:"control"},[r("button",{staticClass:"button is-outlined is-primary is-wide",on:{click:t.previousStep}},[t._v("\n                  Back\n              ")]),t._v(" "),r("button",{staticClass:"button button is-primary is-wide mr-4",class:{"is-loading":t.loading},attrs:{type:"submit",disabled:t.batchCost>t.vefxAvailable+(t.efxAvailable?t.efxAvailable:0)}},[t._v("\n                  Post tasks\n              ")])])])])]):t._e(),t._v(" "),t.createdBatchId?r("div",{staticClass:"notification is-success"},[r("p",{staticClass:"mx-6 px-6 has-text-centered"},[r("strong",[t._v("Success!")]),r("br"),t._v(" \n          Your order has been successfuly posted to: "),r("br"),t._v(" "),r("a",{attrs:{href:"https://app.effect.network/campaigns/"+t.campaign.id+"/"+t.createdBatchId,target:"_blank",rel:"noopener noreferrer"}},[t._v("Effect Force "),r("font-awesome-icon",{staticClass:"icon mx-2 is-small",attrs:{icon:"fa-solid fa-arrow-up-right-from-square"}})],1),t._v(" "),r("br")]),r("hr"),t._v(" "),r("div",{staticClass:"buttons is-centered"},[r("a",{staticClass:"mx-6 px-6 button is-centered ",attrs:{href:"/batch/"+t.createdBatchId,target:"",rel:"noopener noreferrer"}},[t._v("\n                  Go to results\n              ")])]),t._v(" "),r("p")]):t._e()])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{Form:n(296).default})}}]);