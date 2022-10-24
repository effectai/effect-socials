(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1094:function(t,e,n){"use strict";n.r(e);n(32),n(87),n(16),n(41),n(55),n(54),n(173),n(43);var r=n(7),c=n(19),o=n(401),l=n(1074),d=n(44);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=n(1068),h={components:{Tweet:l.Tweet,Timeline:l.Timeline},data:function(){return{loading:!0,effectsdk:null,id:parseInt(this.$route.params.id),tasks:null,results:null,timer:null,batch:null,batchIpfs:null,campaign:null,transaction:null}},mounted:function(){var t=this;this.effectsdk=new o.EffectClient("mainnet"),this.transaction=this.transactionByBatchId(this.id),this.getBatch(),this.getResults(),this.timer=setInterval((function(){t.getResults()}),3e4)},computed:v(v({},Object(d.c)({transactionByBatchId:"transaction/transactionByBatchId"})),{},{batchPercentageDone:function(){return this.batch?Math.round(this.batch.tasks_done/(this.batch.num_tasks*this.batch.repetitions)*100):0}}),methods:{getBatch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.effectsdk.force.getBatchById(t.id);case 3:return t.batch=e.sent,e.next=6,t.effectsdk.force.getIpfsContent(t.batch.content.field_1);case 6:return t.batchIpfs=e.sent,e.next=9,t.effectsdk.force.getCampaign(t.batch.campaign_id);case 9:t.campaign=e.sent,t.loading=!1,console.log("getBatch",t.batch,t.batchIpfs,t.campaign);case 12:case"end":return e.stop()}}),e)})))()},getResults:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getting results..."),n=0,t.results&&(n=t.results.length),e.next=5,t.effectsdk.force.getSubmissionsOfBatch(t.id);case 5:t.results=e.sent,console.log("results",t.results),t.results.length!==n&&(console.log("results changed"),t.getBatch());case 8:case"end":return e.stop()}}),e)})))()},downloadTaskResults:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all(t.results.map(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var sub,n,r,c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for((sub={}).data=JSON.parse(e.data),n=0,r=Object.keys(sub.data);n<r.length;n++)c=r[n],e[c]=sub.data[c];return delete e.content,delete e.batch_id,delete e.id,delete e.leaf_hash,delete e.paid,o={link_id:null,account_id:null},e=Object.assign(o,e),t.abrupt("return",e);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 3:return n=e.sent,e.next=6,_(n,(function(e,n){if(e)return console.error(e);var r="task_results_".concat(t.id,".csv"),c=new Blob([n],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(c,r);else{var link=document.createElement("a");if(void 0!==link.download){var o=URL.createObjectURL(c);link.setAttribute("href",o),link.setAttribute("download",r),link.style.visibility="hidden",document.body.appendChild(link),link.click(),document.body.removeChild(link)}}}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},beforeDestroy:function(){clearInterval(this.timer)}},m=n(8),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section pt-6"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-three-fifths is-offset-one-fifth"},[n("h2",{staticClass:"title"},[t._v("Order")]),t._v(" "),n("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/batch"}},[t._v("Dashboard")])],1),t._v(" "),n("li",{staticClass:"is-active"},[n("nuxt-link",{attrs:{to:"#","aria-current":"page"}},[t._v("Order")])],1)])]),t._v(" "),t.loading?n("div",{staticClass:"loading-text"},[t._v("\n        Loading\n      ")]):n("div",[t.batch&&t.campaign?n("div",[n("br"),t._v(" "),n("div",{staticClass:"box media"},[n("figure",{staticClass:"media-left"},[n("p",{staticClass:"image is-128x128 is-square"},[n("img",{attrs:{src:t.campaign.info.image}})])]),t._v(" "),n("div",{staticClass:"media-content"},[n("div",{staticClass:"content"},[n("p",{staticClass:"subtitle"},[n("a",{attrs:{href:"https://app.effect.network/campaigns/"+t.batch.campaign_id,target:"_blank",rel:"noopener noreferrer"}},[n("span",{staticClass:"icon-text"},[n("span",[t._v(t._s(t.campaign.info.title))]),t._v(" "),n("span",[n("font-awesome-icon",{staticClass:"mx-1 icon is-small",attrs:{icon:"fa-solid fa-arrow-up-right-from-square"}})],1)])])]),t._v(" "),n("hr"),t._v(" "),n("p",{staticClass:"subtitle has-text-black"},[t._v("Order")]),t._v(" "),n("div",{staticClass:"px-6"},[n("p",[t._v("Status: "+t._s(t.batchPercentageDone)+"%")]),t._v(" "),n("progress",{staticClass:"progress is-info",domProps:{value:t.batchPercentageDone}})]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"px-6 is-centered table-container"},[n("table",{staticClass:"table is-narrow is-centered px-6"},[n("thead"),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Order-ID")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://app.effect.network/campaigns/"+t.batch.campaign_id+"/"+t.id,target:"_blank",rel:"noopener noreferrer"}},[n("span",{staticClass:"icon-text"},[n("span",[t._v(t._s(t.id))]),t._v(" "),n("span",[n("font-awesome-icon",{staticClass:"mx-1 icon is-small",attrs:{icon:"fa-solid fa-arrow-up-right-from-square"}})],1)])])])]),t._v(" "),n("tr",[n("td",[t._v("BlockExplorer")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://bloks.io/transaction/"+t.transaction.eos.transaction.transaction_id,target:"_blank",rel:"noopener noreferrer"}},[n("span",{staticClass:"icon-text"},[n("span",[t._v("BlockExplorer")]),t._v(" "),n("span",[n("font-awesome-icon",{staticClass:"mx-1 icon is-small",attrs:{icon:"fa-solid fa-arrow-up-right-from-square"}})],1)])])])]),t._v(" "),n("tr",[n("td",[t._v("Tasks")]),t._v(" "),n("td",[t._v(t._s(t.batch.num_tasks)+" ×")])]),t._v(" "),n("tr",[n("td",[t._v("Amount")]),t._v(" "),n("td",[t._v(t._s(t.batch.repetitions)+" ×")])]),t._v(" "),n("tr",[n("td",[t._v("Cost per Task")]),t._v(" "),n("td",[n("strong",[t._v(t._s(t.campaign.info.reward)+" EFX")])])])]),t._v(" "),n("tfoot",[n("tr",[n("td",[t._v("Total Cost")]),t._v(" "),n("td",[n("strong",[t._v(t._s(t.campaign.info.reward*t.batch.num_tasks*t.batch.repetitions)+" EFX")])])]),t._v(" "),n("tr",{staticClass:"is-size-7"},[n("td",[n("span",[t._v("Network Fee")]),t._v(" "),n("span",{staticClass:"icon is-small",attrs:{"data-tooltip":"10% of the transaction is sent to the Effect Network DAO. Already included."}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-circle-info"}})],1)]),t._v(" "),n("td",[t._v(t._s(t.campaign.info.reward*t.batch.num_tasks*t.batch.repetitions*.1)+" "),n("i",[t._v("EFX")])])])])])]),t._v(" "),n("hr"),t._v(" "),n("p",{staticClass:"subtitle has-text-black"},[t._v("Links")]),t._v(" "),n("div",{staticClass:"px-6"},[14===t.campaign.id||16===t.campaign.id||17===t.campaign.id?n("vsa-list",t._l(t.batchIpfs.tasks,(function(e){return n("vsa-item",{key:e.id},[n("vsa-heading",[n("span",{staticClass:"icon-text"},[n("span",[t._v(t._s(e.id)+": "+t._s(e.tweet_id.tweet_id))])])]),t._v(" "),n("vsa-content",[n("Tweet",{attrs:{id:e.tweet_id.tweet_id,options:{cards:"hidden"}}},[n("div",{staticClass:"spinner"})])],1)],1)})),1):15===t.campaign.id?n("vsa-list",t._l(t.batchIpfs.tasks,(function(e,r){return n("vsa-item",{key:r},[n("vsa-heading",[n("span",{staticClass:"icon-text"},[n("span",[t._v(t._s(e.twitter_handle))])])]),t._v(" "),n("vsa-content",[n("Timeline",{attrs:{id:e.twitter_handle,sourceType:"profile",options:{tweetLimit:"1"}}})],1)],1)})),1):n("vsa-list",t._l(t.batchIpfs.tasks,(function(e,r){return n("vsa-item",{key:r},[n("vsa-heading",[n("span",{staticClass:"icon-text"},[n("span",[t._v(t._s(r))])])]),t._v(" "),n("vsa-content",[t._v("\n                        "+t._s(e)+"\n                      ")])],1)})),1)],1),t._v(" "),n("hr"),t._v(" "),n("p",{staticClass:"subtitle has-text-black"},[t._v("Results ("+t._s(t.batch.tasks_done)+"/"+t._s(t.batch.num_tasks*t.batch.repetitions)+")")]),t._v(" "),t.results&&t.results.length>0?n("div",{staticClass:"table-container"},[n("table",{staticClass:"table",staticStyle:{width:"100%"}},[t._m(0),t._v(" "),n("tbody",t._l(t.results,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.data))]),t._v(" "),n("td",[t._v(t._s(e.submitted_on))])])})),0)]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"buttons is-centered"},[n("button",{staticClass:"button is-primary mx-auto is-centered",on:{click:function(e){return e.preventDefault(),t.downloadTaskResults()}}},[t._v("\n                      Download results\n                    ")])])]):n("div",{staticClass:"has-text-centered"},[n("br"),t._v(" "),t._m(1)])])])])]):n("div",[n("p",[t._v("No batch found")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("ID")]),this._v(" "),e("th",[this._v("Result")]),this._v(" "),e("th",[this._v("Submitted on")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n                    No results yet.\n                    "),e("br"),this._v("\n                    Please wait while someone starts working on your order.\n                  ")])}],!1,null,"14df9904",null);e.default=component.exports},445:function(t,e){},447:function(t,e){},448:function(t,e){},452:function(t,e){},453:function(t,e){},460:function(t,e){},461:function(t,e){},471:function(t,e){},472:function(t,e){},478:function(t,e){},486:function(t,e){},487:function(t,e){},492:function(t,e){},494:function(t,e){},521:function(t,e){},523:function(t,e){},524:function(t,e){},528:function(t,e){},534:function(t,e){},537:function(t,e){},539:function(t,e){},550:function(t,e){},551:function(t,e){},555:function(t,e){},559:function(t,e){},574:function(t,e){}}]);