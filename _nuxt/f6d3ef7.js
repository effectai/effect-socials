(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{208:function(t,e,r){var content=r(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("75d1ccb7",content,!0,{sourceMap:!1})},209:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},210:function(t,e,r){"use strict";r(211),r(151),r(50);var o,l={start:function(){function t(t,e){return t+Math.random()*(e-t)}function e(t){return t/180*Math.PI}clearInterval(o),o=0;for(var r={x:0,y:0,vx:0,vy:0,radius:0,create:function(t,e,r,o){var l=Object.create(this);return l.x=t,l.y=e,l.vx=Math.cos(o)*r,l.vy=Math.sin(o)*r,l},getSpeed:function(){return Math.sqrt(this.vx*this.vx+this.vy*this.vy)},setSpeed:function(t){var e=this.getHeading();this.vx=Math.cos(e)*t,this.vy=Math.sin(e)*t},getHeading:function(){return Math.atan2(this.vy,this.vx)},setHeading:function(t){var e=this.getSpeed();this.vx=Math.cos(t)*e,this.vy=Math.sin(t)*e},update:function(){this.x+=this.vx,this.y+=this.vy}},canvas=document.getElementById("star-canvas"),l=canvas.getContext("2d"),n=canvas.width=canvas.clientWidth,c=canvas.height=canvas.clientHeight,h=[],d=[],v=[{speed:.05,scale:.2,count:320},{speed:.1,scale:.5,count:50},{speed:.3,scale:.75,count:30}],_=15,f=20,A=0;A<v.length;A+=1)for(var m=v[A],i=0;i<m.count;i+=1){var x=r.create(t(0,n),t(0,c),0,0);x.radius=2*m.scale,x.setSpeed(m.speed),x.setHeading(e(145)),h.push(x)}function y(t){setTimeout((function(){t.isDying=!0}),500)}function S(t){l.fillStyle="rgb(255, 221, 157)",l.beginPath(),l.arc(t.x,t.y,t.radius,0,2*Math.PI,!1),l.fill()}function D(p){var t,e,r,o,n=p.x,c=p.y,h=300*p.trailLengthDelta,d=(t=n,e=c,r=-h,o=p.getHeading(),{x:t+r*Math.cos(o),y:e+r*Math.sin(o)});l.fillStyle="rgba(255, 255, 255, "+p.opacity+")";l.beginPath(),l.moveTo(n-1,c+1),l.lineTo(n,c+5),l.lineTo(n+1,c+1),l.lineTo(n+5,c),l.lineTo(n+1,c-1),l.lineTo(n,c+1),l.lineTo(n,c-5),l.lineTo(n-1,c-1),l.lineTo(n-5,c),l.lineTo(n-1,c+1),l.lineTo(n-5,c),l.closePath(),l.fill(),l.fillStyle="rgba(255, 221, 157, "+p.opacity+")",l.beginPath(),l.moveTo(n-1,c-1),l.lineTo(d.x,d.y),l.lineTo(n+1,c+1),l.closePath(),l.fill()}!function t(){l.clearRect(0,0,n,c),l.fillStyle="transparent",l.fillRect(0,0,n,c),l.fill();for(var i=0;i<h.length;i+=1){var e=h[i];e.update(),S(e),e.x>n&&(e.x=0),e.x<0&&(e.x=n),e.y>c&&(e.y=0),e.y<0&&(e.y=c)}for(i=0;i<d.length;i+=1){var r=d[i];r.isSpawning&&(r.opacity+=.01,r.opacity>=1&&(r.isSpawning=!1,y(r))),r.isDying&&(r.opacity-=.01,r.opacity<=0&&(r.isDying=!1,r.isDead=!0)),r.trailLengthDelta+=.01,r.update(),r.opacity>0&&D(r)}for(i=d.length-1;i>=0;i--)d[i].isDead&&d.splice(i,1);requestAnimationFrame(t)}(),o=setInterval((function(){var o;(o=r.create(t(n/2,n),t(0,c/2),0,0)).setSpeed(t(_,f)),o.setHeading(e(145)),o.radius=3,o.opacity=0,o.trailLengthDelta=0,o.isSpawning=!0,o.isDying=!1,d.push(o)}),5e3)}};e.a=l},211:function(t,e,r){var o=r(2),l=r(212),n=r(103);o({target:"Array",proto:!0},{fill:l}),n("fill")},212:function(t,e,r){"use strict";var o=r(18),l=r(63),n=r(8);t.exports=function(t){for(var e=o(this),r=n(e.length),c=arguments.length,h=l(c>1?arguments[1]:void 0,r),d=c>2?arguments[2]:void 0,v=void 0===d?r:l(d,r);v>h;)e[h++]=t;return e}},213:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQflAQ0NIAWoYZKCAAABM0lEQVRIx6XUMUvDQBjG8f+dWRQKDg4OOgmWSkFwcC0OIujcycn6EcTFQdxF3MVB3FwcRMFZkIrgWNBRECwotCgI2ujjUAs9m2iu92xvcu/vjiRv4M/IalaLGqK/aEy3kqR7FfsDyuqkoYnkNTajNcxuGABLGg0DLNP+QM6posybdaIrdWfGt73ktMca9AXOHKDq217UlwNsJa9LfzDrGKee15RTt6ixZ57T9h/Xh/7Pk/JpwE6Gdkk6B1RRTXHXxbJG9JIRaEZaZb/nAHO/PqH0PFjWPF+Pm23LZBCQtwwEASvZpzE5UShwEAYcsREGNE0rDJDPL603nxyGAcumGgbUIQygDTz22XnHZRs4Trh5wSbXNFKbXzlhwcQAKKdTZ8LfVfI5iAFQgcLPUL1xY+o+wDfzfBpiVUoatQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMS0xM1QxMzozMjowNSswMDowMI3S6fgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDEtMTNUMTM6MzI6MDUrMDA6MDD8j1FEAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},214:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQflAQ0NFxq1bj9DAAACUUlEQVRIx6WUz0tUURiG33udUSvDGZVa5IDVQtA2LoJWkhhGQgQxi2lbhIFEVDRSu/wr6l+wsE0YgY0/SLARHcvdEERGM0a0cGpEEXlaeOfO3HOPONG3Ovc57/tyznfOuZK16GOGEmukuMEaJWboU/1FFyXM+sMZm9a1JtzR8RA7ptv1B5yqn9oDFv+BWnsQJRvqQZbowYYG2rxRMy2SRIylgH2VDkmihWZP2YZbMY9TBvIkecEue0zTZUSs0iHRxTR77DJBkjzwm6c0iDTh+khUIu5F7Nsb+WRRPhJfsFW/JNHOPPO0SxIDVt3niFqtbYlLkvNL/T6JWXVtrjIWXLYc2aK2LMp3IsFGaGEj1rMaCek2SEiim+8B/PjA474f0P2gtzLRTeFwuxFRtQcinhx6Sx949nPmRA9zjB5mlyRGmaOnHmGM5xQo8IzWeuQRYoFvl1l/v+9xjeiIaR9jC5jFf/NcDN9MSaKTOaBMutY+5Atf++xWIOCmz6d8dkmq/FAG/axBHG+0Flii94WjAZ/VBKz7cN1hf+Bk9dKnE86SR9E3n36tbuEoKwBsc7VmY1HGWGCBdG3LuMY2AMsckSRvwTTpujr01slXQyVnKzyW6NaQfuqVs1M9lIeVk2aYIUniJDmKjJMkyThFcpzw2j1c44pJopElYJMMk+SBHeISb0Ivb0oizg6QZ5IMm8AHouKeIVyWuGD9+5yXWDbYXVcp406tSLpsvaxXJOUMlnJ12kAbkjqtAQlJRYOdddVkoD1JEWtAxJutrSZXC/qfyvwFvUCcNaKRZwcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDEtMTNUMTM6MjM6MjYrMDA6MDDQU0DmAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAxLTEzVDEzOjIzOjI2KzAwOjAwoQ74WgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},215:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkDBIQJBcQ/EYwAAACdklEQVRIx5WUT0gUYRjGn9n8Q6ldCi+BEZYeJYyoQ0ousoEGRah5qJtGWiBIgWbQoW6BQay5SIdI6JBpUWKQLeihCAwiL1GHoCIoItBc0l2cXwdnxtmdb5b2OQzfvPO8z7x/vveVjOAQ0yyTIkmzCgftZHBhc6FQ90r+4EeG2nB2xGBrV3nWe5HOGH5TSgMVUpFBoDpgqfE7apckaUQxvVedJ0BUAzosW5P6GBAo9lhlmtA32ZIOSKqlxP1wHtvJeJ1m1snGlOvODEedczOP6XDdq0n76KMMmwTYxjOazHW/luNwjgGWnfMC3cTZzijz7t+DAvfJxSNaiPEaSPOZSYkqdnj8MZa55BcYJj+mfNxe5gH44vZYkibVFxLcT32VlCGiOkUkRbVbjbqn00psECxHN6Fuo8ALvZSlPerXgLZI+q7bFrkViBCnk6v8BmCJv/lSMJWwG7B5QCsNNBFjMUyAUi5yKtvbkvikvUZlW1OyJUmr6tJxWWrVWUlRK7lJilAW4u6r0GawvqdnK/bN/ipJxnlOKjSFHk5ma0asjOac813F9ErSogZDAlqzRqycghZJGlKDinVDK0oG9oPTRsrztFGihVk6jHfwBwu85SER9lNPPZeJYzFOhqFckXf/fZXn/FfZNW/19sEGJgzDtNNjJ1iiP1dgc4nYdDEYGOc7ecZZkljwBG5yK3ShRMMFWp0k0jTmpGNeaTGe0Jkt0csa8IYr4UWkjBnGSJDgF7BGiW+tW3Gm1aaU9gXCy3icFCectV6lY/pgpU3J9AYiuG5glXCECnM1Kr0O4FSlRoWBNt+at+kp0F2SOMhTllhhNk/jJEn/AFM/4HFrToX/AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTEyLTE4VDE2OjM2OjIzKzAwOjAwMyE6RAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0xMi0xOFQxNjozNjoyMyswMDowMEJ8gvgAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},216:function(t,e,r){"use strict";r(208)},217:function(t,e,r){var o=r(25),l=r(209),n=r(218);(e=o(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),e.push([t.i,"@import url(https://use.typekit.net/kej5qyk.css);"]);var c=l(n);e.push([t.i,".clouds[data-v-0059e677]{margin-top:-150px;padding-top:13%;position:relative;z-index:2}.clouds[data-v-0059e677],.clouds[data-v-0059e677]:after{background:url("+c+') no-repeat;background-size:100% auto;background-position:0 0}.clouds[data-v-0059e677]:after{content:"";margin-top:-1px;display:block;transform:scaleY(-1);padding-bottom:13%}.icon-circle[data-v-0059e677]{border-radius:100%;width:60px;height:60px;font-size:32px;display:flex;justify-content:center;align-items:center}.icon-circle.big[data-v-0059e677]{width:75px;height:75px}',""]),t.exports=e},218:function(t,e,r){t.exports=r.p+"img/clouds.ec9c9d9.png"},219:function(t,e,r){t.exports=r.p+"img/building.7b62a56.png"},220:function(t,e,r){t.exports=r.p+"img/tuning.885348b.png"},221:function(t,e,r){t.exports=r.p+"img/rocket.69e1f4a.png"},222:function(t,e,r){"use strict";r.r(e);r(216);var o=r(11),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"clouds"},[o("div",{staticClass:"has-background-white"},[o("div",{staticClass:"container"},[o("h1",{staticClass:"title has-text-centered is-size-1 mb-6 has-text-black"},[t._v("Why Effect Socials?")]),t._v(" "),o("div",{staticClass:"columns"},[o("div",{staticClass:"column"},[o("div",{staticClass:"media"},[o("div",{staticClass:"media-left"},[o("div",{staticClass:"icon-circle has-background-accent"},[o("img",{attrs:{src:r(213)}})])]),t._v(" "),t._m(0)])]),t._v(" "),o("div",{staticClass:"column"},[o("div",{staticClass:"media"},[o("div",{staticClass:"media-left"},[o("div",{staticClass:"icon-circle has-background-accent"},[o("img",{attrs:{src:r(214)}})])]),t._v(" "),t._m(1)])]),t._v(" "),o("div",{staticClass:"column"},[o("div",{staticClass:"media"},[o("div",{staticClass:"media-left"},[o("div",{staticClass:"icon-circle has-background-accent is-rounded"},[o("img",{attrs:{src:r(215)}})])]),t._v(" "),t._m(2)])])]),t._v(" "),t._m(3)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-content"},[e("h3",{staticClass:"subtitle has-text-weight-bold has-text-black"},[this._v("ENGAGEMENT RATE")]),this._v(" "),e("div",{staticClass:"has-text-justified has-text-dark"},[this._v("\n                The most effective way to have the social media algorithms work for you is to increase your engagement rate.\n                Quality engagement is rewarded 80% more than anything else.\n              ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-content"},[e("h3",{staticClass:"subtitle has-text-weight-bold has-text-black"},[this._v("FANS FOR YOUR BRAND")]),this._v(" "),e("div",{staticClass:"has-text-justified has-text-dark"},[e("b",[this._v("Real Humans!")]),this._v(" We never use bots. We have a network of thousands of people from all over the globe.\n                Our matching algorithm connects you with genuine fans who are rewarded for high quality engagement on your channels.\n              ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-content"},[e("h3",{staticClass:"subtitle has-text-weight-bold has-text-black"},[this._v("THE POWER OF AI")]),this._v(" "),e("div",{staticClass:"has-text-justified has-text-dark"},[this._v("\n                Our social media algorithms make sure to direct engagement where it will benefit you the most. Our AI system is proven to drive more organic traffic to your brand.\n              ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-6 has-text-centered"},[e("a",{staticClass:"button is-medium is-accent is-wide  has-text-weight-medium",attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLScBLihxn5gk94MoT-scoy1HNDT6YQXkH_hgeRPydgjFbCexlw/viewform",target:"_blank"}},[this._v("Request Demo")])])}],!1,null,"0059e677",null);e.default=component.exports},223:function(t,e,r){"use strict";r.r(e);var o=r(11),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mt-6"},[o("div",{ref:"how",staticClass:"container"},[o("h1",{staticClass:"title has-text-centered is-size-1 mb-6 has-text-accent"},[t._v("How it Works")]),t._v(" "),o("div",{staticClass:"columns"},[o("div",{staticClass:"column"},[o("div",{staticClass:"media"},[o("div",{staticClass:"media-left"},[o("div",{staticClass:"icon-circle big"},[o("img",{attrs:{src:r(219)}})])]),t._v(" "),t._m(0)])]),t._v(" "),o("div",{staticClass:"column"},[o("div",{staticClass:"media"},[o("div",{staticClass:"media-left"},[o("div",{staticClass:"icon-circle big"},[o("img",{attrs:{src:r(220)}})])]),t._v(" "),t._m(1)])]),t._v(" "),o("div",{staticClass:"column"},[o("div",{staticClass:"media"},[o("div",{staticClass:"media-left"},[o("div",{staticClass:"icon-circle big"},[o("img",{attrs:{src:r(221)}})])]),t._v(" "),t._m(2)])])]),t._v(" "),t._m(3)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-content"},[e("h3",{staticClass:"subtitle has-text-weight-bold"},[this._v("BUILDING THE ROCKET")]),this._v(" "),e("div",{staticClass:"has-text-justified"},[this._v("\n              Share your vision with us. Tell us where you are now and where you want to be in the future.\n              We want to know everything about your brand in order to find the best fans to help you grow to new heights.\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-content"},[e("h3",{staticClass:"subtitle has-text-weight-bold"},[this._v("MIXING THE ROCKET FUEL")]),this._v(" "),e("div",{staticClass:"has-text-justified"},[this._v("\n              Effect•ive will enhance and grow your social media presence across all your social media platforms. We are experts at connecting your social media accounts with passionate people who deliver top quality social content.\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-content"},[e("h3",{staticClass:"subtitle has-text-weight-bold"},[this._v("BLAST OFF!")]),this._v(" "),e("div",[this._v("\n              Our commitment is to help you create exponential growth across your social media engagement.\n              Resulting in exponential growth of your sales, SEO, brand trust, awareness and overall success!\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-6 has-text-centered"},[e("a",{staticClass:"button is-medium is-accent is-wide has-text-weight-medium",attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLScBLihxn5gk94MoT-scoy1HNDT6YQXkH_hgeRPydgjFbCexlw/viewform",target:"_blank"}},[this._v("Request Demo")])])}],!1,null,"6ea28101",null);e.default=component.exports},224:function(t,e,r){var content=r(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("38f98d2e",content,!0,{sourceMap:!1})},228:function(t,e,r){"use strict";r(224)},229:function(t,e,r){var o=r(25),l=r(209),n=r(230);(e=o(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),e.push([t.i,"@import url(https://use.typekit.net/kej5qyk.css);"]);var c=l(n);e.push([t.i,"#star-canvas{position:absolute;top:0;left:0;height:100%;width:100%}.banner{background-image:url("+c+");background-size:100% auto;min-height:700px;position:relative;z-index:1}.banner #title-big{font-size:80px;margin-top:50px;word-break:break-word}.rocket{transition:all 1.5s;left:calc(65% - 220px);top:175px;position:absolute;max-width:calc(100% - 1.5rem)}.rocket.land{transform:translate(-500px,700px) rotate(-30deg)}.media-left .icon-circle{margin-top:-10px}",""]),t.exports=e},230:function(t,e,r){t.exports=r.p+"img/socials-and-stars_bg.f252246.png"},236:function(t,e,r){"use strict";r.r(e);var o=r(11),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"375px",height:"450px",viewBox:"0 0 128.475 154.245","enable-background":"new 0 0 128.475 154.245","xml:space":"preserve"}},[r("g",{attrs:{id:"rocket"}},[r("g",[r("defs",[r("rect",{attrs:{id:"SVGID_1_",x:"-371.628",y:"-124.857",width:"750",height:"500"}})]),t._v(" "),r("clipPath",{attrs:{id:"SVGID_2_"}},[r("use",{attrs:{"xlink:href":"#SVGID_1_",overflow:"visible"}})]),t._v(" "),r("g",{attrs:{opacity:"0.2","clip-path":"url(#SVGID_2_)"}},[r("g",[r("defs",[r("rect",{attrs:{id:"SVGID_3_",x:"-0.012",y:"85.204",width:"59.808",height:"69.041"}})]),t._v(" "),r("clipPath",{attrs:{id:"SVGID_4_"}},[r("use",{attrs:{"xlink:href":"#SVGID_3_",overflow:"visible"}})]),t._v(" "),r("path",{attrs:{"clip-path":"url(#SVGID_4_)",fill:"#FFFFFF",d:"M54.003,88.857c-6.791-5.609-16.845-4.652-22.454,2.14\n\t\t\t\t\tc-14.588,17.658-11.826,39.357-31.562,63.25c19.736-23.893,41.567-25.277,56.155-42.936\n\t\t\t\t\tC61.751,104.521,60.794,94.468,54.003,88.857"}})])]),t._v(" "),r("g",{attrs:{opacity:"0.4","clip-path":"url(#SVGID_2_)"}},[r("g",[r("defs",[r("rect",{attrs:{id:"SVGID_5_",x:"17.841",y:"86.412",width:"40.039",height:"46.222"}})]),t._v(" "),r("clipPath",{attrs:{id:"SVGID_6_"}},[r("use",{attrs:{"xlink:href":"#SVGID_5_",overflow:"visible"}})]),t._v(" "),r("path",{attrs:{"clip-path":"url(#SVGID_6_)",fill:"#FFFFFF",d:"M54.003,88.857c-4.547-3.755-11.276-3.114-15.032,1.433\n\t\t\t\t\tc-9.766,11.821-7.917,26.349-21.13,42.342c13.213-15.993,27.828-16.92,37.594-28.742C59.19,99.343,58.549,92.613,54.003,88.857"}})])])]),t._v(" "),r("g",[r("defs",[r("path",{attrs:{id:"SVGID_7_",d:"M42.567,82.189c-0.661,0.792-0.555,1.971,0.237,2.632L59.65,98.88c0.792,0.661,1.971,0.555,2.632-0.238\n\t\t\t\tl2.607-3.123L45.174,79.065L42.567,82.189z"}})]),t._v(" "),r("clipPath",{attrs:{id:"SVGID_8_"}},[r("use",{attrs:{"xlink:href":"#SVGID_7_",overflow:"visible"}})]),t._v(" "),r("linearGradient",{attrs:{id:"SVGID_9_",gradientUnits:"userSpaceOnUse",x1:"-229.0889",y1:"351.3643",x2:"-228.0889",y2:"351.3643",gradientTransform:"matrix(3.858 -4.67 -4.67 -3.858 2575.9348 377.6495)"}},[r("stop",{staticStyle:{"stop-color":"#FFFFFF"},attrs:{offset:"0"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#F7F9FD"},attrs:{offset:"0.0491"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#CBDDF2"},attrs:{offset:"0.4709"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#B1CEEC"},attrs:{offset:"0.8022"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#A7C9EA"},attrs:{offset:"1"}})],1),t._v(" "),r("polygon",{attrs:{"clip-path":"url(#SVGID_8_)",fill:"url(#SVGID_9_)",points:"31.851,91.235 51.229,67.78 74.944,87.371 55.566,110.827\n\t\t\t"}})],1),t._v(" "),r("g",[r("defs",[r("path",{attrs:{id:"SVGID_10_",d:"M64.837,95.081l4.076,28.645c0.116,0.9,1.158,1.342,1.886,0.801l22.382-16.625\n\t\t\t\tc2.347-1.743,3.817-4.422,4.029-7.338l1.764-24.306L64.837,95.081z"}})]),t._v(" "),r("clipPath",{attrs:{id:"SVGID_11_"}},[r("use",{attrs:{"xlink:href":"#SVGID_10_",overflow:"visible"}})]),t._v(" "),r("linearGradient",{attrs:{id:"SVGID_12_",gradientUnits:"userSpaceOnUse",x1:"-209.9248",y1:"330.0703",x2:"-208.9248",y2:"330.0703",gradientTransform:"matrix(23.3669 19.3024 19.3024 -23.3669 -1396.8237 11854.8174)"}},[r("stop",{staticStyle:{"stop-color":"#F37321"},attrs:{offset:"0"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#F69332"},attrs:{offset:"0.3558"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#FDD662"},attrs:{offset:"1"}})],1),t._v(" "),r("polygon",{attrs:{"clip-path":"url(#SVGID_11_)",fill:"url(#SVGID_12_)",points:"78.683,59.496 122.941,96.055 85.128,141.829\n\t\t\t40.871,105.271 \t\t"}})],1),t._v(" "),r("g",[r("defs",[r("path",{attrs:{id:"SVGID_13_",d:"M34.292,48.232c-2.828,0.739-5.194,2.674-6.48,5.3L15.542,78.565c-0.4,0.816,0.225,1.76,1.131,1.709\n\t\t\t\tl28.908-1.208L57.872,42.07L34.292,48.232z"}})]),t._v(" "),r("clipPath",{attrs:{id:"SVGID_14_"}},[r("use",{attrs:{"xlink:href":"#SVGID_13_",overflow:"visible"}})]),t._v(" "),r("linearGradient",{attrs:{id:"SVGID_15_",gradientUnits:"userSpaceOnUse",x1:"-209.9331",y1:"339.1455",x2:"-208.9328",y2:"339.1455",gradientTransform:"matrix(23.3111 19.2585 -19.2585 23.3111 11452.5557 -3809.2119)"}},[r("stop",{staticStyle:{"stop-color":"#FDD662"},attrs:{offset:"0"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#F69332"},attrs:{offset:"0.6442"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#F37321"},attrs:{offset:"1"}})],1),t._v(" "),r("polygon",{attrs:{"clip-path":"url(#SVGID_14_)",fill:"url(#SVGID_15_)",points:"-3.643,64.807 40.538,101.306 76.656,57.588 32.475,21.089\n\t\t\t\t\t"}})],1),t._v(" "),r("g",[r("defs",[r("path",{attrs:{id:"SVGID_16_",d:"M42.386,74.758c-0.118,1.095,0.242,2.111,1.004,2.745l23.266,19.428c0.76,0.635,1.823,0.811,2.878,0.496\n\t\t\t\tc34.064-10.131,64.03-66.646,58.214-97.426c-0.086,0-0.175-0.001-0.261-0.001C96.164-0.001,46.246,39.509,42.386,74.758"}})]),t._v(" "),r("clipPath",{attrs:{id:"SVGID_17_"}},[r("use",{attrs:{"xlink:href":"#SVGID_16_",overflow:"visible"}})]),t._v(" "),r("linearGradient",{attrs:{id:"SVGID_18_",gradientUnits:"userSpaceOnUse",x1:"-206.3091",y1:"332.8096",x2:"-205.3091",y2:"332.8096",gradientTransform:"matrix(8.6987 91.327 91.327 -8.6987 -28516.252 21740.5391)"}},[r("stop",{staticStyle:{"stop-color":"#FFFFFF"},attrs:{offset:"0"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#F8FAFD"},attrs:{offset:"0.2216"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#EBF1FA"},attrs:{offset:"0.4411"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#D6E4F5"},attrs:{offset:"0.6599"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#BAD4EE"},attrs:{offset:"0.8768"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#A7C9EA"},attrs:{offset:"1"}})],1),t._v(" "),r("polygon",{attrs:{"clip-path":"url(#SVGID_17_)",fill:"url(#SVGID_18_)",points:"132.743,-8.619 142.79,96.862 43.088,106.358 33.042,0.878\n\t\t\t\t\t"}})],1),t._v(" "),r("g",[r("defs",[r("path",{attrs:{id:"SVGID_19_",d:"M89.506,13.312c0.033-0.02,0.066-0.041,0.1-0.062c-0.424-0.337-0.666-0.52-0.695-0.52\n\t\t\t\tS89.069,12.914,89.506,13.312 M89.606,13.25c4.731,3.768,31.92,26.738,31.92,26.738c5.735-14.421,8.32-28.879,6.222-39.987\n\t\t\t\tc-0.086,0-0.172,0-0.258,0C116.256,0,102.639,5.103,89.606,13.25"}})]),t._v(" "),r("clipPath",{attrs:{id:"SVGID_20_"}},[r("use",{attrs:{"xlink:href":"#SVGID_19_",overflow:"visible"}})]),t._v(" "),r("linearGradient",{attrs:{id:"SVGID_21_",gradientUnits:"userSpaceOnUse",x1:"-205.9521",y1:"330.3506",x2:"-204.9521",y2:"330.3506",gradientTransform:"matrix(3.7377 39.2416 39.2416 -3.7377 -12086.0605 9318.3486)"}},[r("stop",{staticStyle:{"stop-color":"#FDD662"},attrs:{offset:"0"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#F69332"},attrs:{offset:"0.6442"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#F37321"},attrs:{offset:"1"}})],1),t._v(" "),r("polygon",{attrs:{"clip-path":"url(#SVGID_20_)",fill:"url(#SVGID_21_)",points:"129.478,-3.867 133.622,39.628 89.25,43.855 85.107,0.359\n\t\t\t"}})],1),t._v(" "),r("g",[r("defs",[r("path",{attrs:{id:"SVGID_22_",d:"M85.798,32.689c-7.491,1.858-12.056,9.436-10.198,16.925c1.857,7.491,9.436,12.057,16.926,10.2\n\t\t\t\tc7.489-1.858,12.056-9.436,10.197-16.927c-1.576-6.36-7.279-10.612-13.551-10.612C88.059,32.275,86.927,32.409,85.798,32.689"}})]),t._v(" "),r("clipPath",{attrs:{id:"SVGID_23_"}},[r("use",{attrs:{"xlink:href":"#SVGID_22_",overflow:"visible"}})]),t._v(" "),r("linearGradient",{attrs:{id:"SVGID_24_",gradientUnits:"userSpaceOnUse",x1:"-205.6641",y1:"328.6104",x2:"-204.6641",y2:"328.6104",gradientTransform:"matrix(2.5073 27.8371 27.8371 -2.5073 -8544.0469 6581.3467)"}},[r("stop",{staticStyle:{"stop-color":"#FCC819"},attrs:{offset:"0"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#FAB22B"},attrs:{offset:"0.2646"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#F8A034"},attrs:{offset:"0.5431"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#F79638"},attrs:{offset:"0.7964"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#F79239"},attrs:{offset:"1"}})],1),t._v(" "),r("polygon",{attrs:{"clip-path":"url(#SVGID_23_)",fill:"url(#SVGID_24_)",points:"104.333,29.52 107.208,61.435 73.991,64.426 71.116,32.512\n\t\t\t\t\t"}})],1),t._v(" "),r("g",[r("defs",[r("path",{attrs:{id:"SVGID_25_",d:"M79.466,40.411c-3.225,5.353-1.5,12.309,3.854,15.535c5.354,3.226,12.309,1.502,15.536-3.854\n\t\t\t\tc3.226-5.354,1.501-12.309-3.854-15.535c-1.828-1.102-3.842-1.626-5.831-1.626C85.335,34.931,81.592,36.884,79.466,40.411"}})]),t._v(" "),r("clipPath",{attrs:{id:"SVGID_26_"}},[r("use",{attrs:{"xlink:href":"#SVGID_25_",overflow:"visible"}})]),t._v(" "),r("linearGradient",{attrs:{id:"SVGID_27_",gradientUnits:"userSpaceOnUse",x1:"-205.4873",y1:"327.1943",x2:"-204.4877",y2:"327.1943",gradientTransform:"matrix(2.1458 22.5368 22.5368 -2.1458 -6844.9609 5368.1133)"}},[r("stop",{staticStyle:{"stop-color":"#3D5EAB"},attrs:{offset:"0"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#3C5CAA"},attrs:{offset:"0.353"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#3856A6"},attrs:{offset:"0.6929"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#334CA0"},attrs:{offset:"1"}})],1),t._v(" "),r("polygon",{attrs:{"clip-path":"url(#SVGID_26_)",fill:"url(#SVGID_27_)",points:"101.85,32.493 104.37,58.954 76.474,61.61 73.955,35.149\n\t\t\t"}})],1),t._v(" "),r("g",[r("defs",[r("path",{attrs:{id:"SVGID_28_",d:"M83.321,55.946c5.353,3.226,12.309,1.502,15.536-3.854c1.362-2.262,1.833-4.809,1.527-7.24\n\t\t\t\tc-0.186,0.245-0.362,0.497-0.525,0.751c-0.76,1.179-1.446,2.476-2.611,3.257c-1.079,0.722-2.504,0.899-3.726,0.461\n\t\t\t\tc-1.75-0.629-2.958-2.37-4.751-2.857c-1.106-0.3-2.253-0.076-3.401,0.148c-1.118,0.219-2.239,0.438-3.324,0.17\n\t\t\t\tc-1.039-0.256-1.929-0.939-2.641-1.739c-0.504-0.564-0.933-1.221-1.1-1.956C76.901,47.899,78.824,53.237,83.321,55.946"}})]),t._v(" "),r("clipPath",{attrs:{id:"SVGID_29_"}},[r("use",{attrs:{"xlink:href":"#SVGID_28_",overflow:"visible"}})]),t._v(" "),r("linearGradient",{attrs:{id:"SVGID_30_",gradientUnits:"userSpaceOnUse",x1:"-204.9849",y1:"323.7207",x2:"-203.9849",y2:"323.7207",gradientTransform:"matrix(1.469 15.4283 15.4283 -1.469 -4605.4165 3680.2759)"}},[r("stop",{staticStyle:{"stop-color":"#334CA0"},attrs:{offset:"0"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#3550A2"},attrs:{offset:"0.3468"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#3B5AA9"},attrs:{offset:"0.8371"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#3D5EAB"},attrs:{offset:"1"}})],1),t._v(" "),r("polygon",{attrs:{"clip-path":"url(#SVGID_29_)",fill:"url(#SVGID_30_)",points:"100.476,40.842 102.208,59.028 77.114,61.417 75.383,43.231\n\t\t\t\t\t"}})],1),t._v(" "),r("g",[r("defs",[r("rect",{attrs:{id:"SVGID_31_",x:"-371.628",y:"-124.857",width:"750",height:"500"}})]),t._v(" "),r("clipPath",{attrs:{id:"SVGID_32_"}},[r("use",{attrs:{"xlink:href":"#SVGID_31_",overflow:"visible"}})]),t._v(" "),r("g",{attrs:{opacity:"0.4","clip-path":"url(#SVGID_32_)"}},[r("g",[r("defs",[r("rect",{attrs:{id:"SVGID_33_",x:"84.072",y:"36.812",width:"11.705",height:"4.071"}})]),t._v(" "),r("clipPath",{attrs:{id:"SVGID_34_"}},[r("use",{attrs:{"xlink:href":"#SVGID_33_",overflow:"visible"}})]),t._v(" "),r("path",{attrs:{"clip-path":"url(#SVGID_34_)",fill:"#FFFFFF",d:"M95.432,39.208c-0.188-0.152-0.382-0.298-0.583-0.438\n\t\t\t\t\tc-0.206-0.143-0.458-0.196-0.706-0.15c-0.246,0.045-0.463,0.184-0.605,0.391c-0.279,0.404-0.205,0.945,0.171,1.259l0.07,0.053\n\t\t\t\t\tc0.158,0.109,0.313,0.226,0.46,0.346c0.196,0.16,0.441,0.235,0.693,0.208c0.25-0.025,0.476-0.146,0.635-0.341\n\t\t\t\t\tC95.89,40.137,95.833,39.544,95.432,39.208"}}),t._v(" "),r("path",{attrs:{"clip-path":"url(#SVGID_34_)",fill:"#FFFFFF",d:"M92.553,37.721c-0.116-0.224-0.313-0.388-0.551-0.465\n\t\t\t\t\tc-2.47-0.788-5.185-0.517-7.449,0.743c-0.452,0.254-0.616,0.829-0.363,1.285c0.057,0.101,0.131,0.189,0.218,0.263\n\t\t\t\t\tc0.298,0.248,0.725,0.288,1.063,0.101c1.838-1.024,3.955-1.235,5.958-0.595c0.24,0.076,0.496,0.055,0.719-0.061\n\t\t\t\t\tc0.226-0.115,0.39-0.311,0.466-0.549C92.691,38.201,92.669,37.946,92.553,37.721"}})])]),t._v(" "),r("g",{attrs:{"clip-path":"url(#SVGID_32_)"}},[r("g",[r("defs",[r("rect",{attrs:{id:"SVGID_35_",x:"43.47",y:"3.31",width:"79.556",height:"82.742"}})]),t._v(" "),r("clipPath",{attrs:{id:"SVGID_36_"}},[r("use",{attrs:{"xlink:href":"#SVGID_35_",overflow:"visible"}})]),t._v(" "),r("path",{attrs:{"clip-path":"url(#SVGID_36_)",fill:"#FFFFFF",d:"M45.96,70.971c-0.895,2.175-1.729,4.385-2.489,6.637l10.222,8.444\n\t\t\t\t\tc0.059-0.434,0.123-0.872,0.192-1.313c0.18-1.108,0.396-2.228,0.63-3.349c0.48-2.243,1.073-4.484,1.724-6.718\n\t\t\t\t\tc1.346-4.456,3.009-8.855,4.976-13.136c3.947-8.553,9.049-16.672,15.21-24.004c3.091-3.651,6.36-7.196,9.934-10.439l1.321-1.241\n\t\t\t\t\tl1.373-1.181l2.757-2.364l2.862-2.242l1.436-1.124l1.481-1.059c7.88-5.7,16.444-10.562,25.437-14.573\n\t\t\t\t\tc-9.362,3.04-18.486,6.997-27.133,11.953l-1.628,0.921l-1.586,0.99L89.5,19.162L86.41,21.29l-1.547,1.07l-1.499,1.134\n\t\t\t\t\tc-4.053,2.966-7.852,6.289-11.505,9.783c-7.289,7.014-13.664,15.075-18.926,23.889C50.308,61.579,47.977,66.189,45.96,70.971"}})])])]),t._v(" "),r("g",[r("defs",[r("path",{attrs:{id:"SVGID_37_",d:"M61.903,73.299c-2.584,2.129-4.939,4.519-7.03,7.134L37.92,101.539c-1.358,1.7-1.108,4.176,0.562,5.571\n\t\t\t\tc1.672,1.394,4.151,1.197,5.581-0.444l17.723-20.463c2.199-2.524,4.131-5.27,5.763-8.193l6.653-11.913l-1.768-1.476\n\t\t\t\tL61.903,73.299z"}})]),t._v(" "),r("clipPath",{attrs:{id:"SVGID_38_"}},[r("use",{attrs:{"xlink:href":"#SVGID_37_",overflow:"visible"}})]),t._v(" "),r("linearGradient",{attrs:{id:"SVGID_39_",gradientUnits:"userSpaceOnUse",x1:"-205.9648",y1:"330.4385",x2:"-204.9653",y2:"330.4385",gradientTransform:"matrix(3.818 40.0819 40.0819 -3.818 -12404.7539 9583.5195)"}},[r("stop",{staticStyle:{"stop-color":"#FDD662"},attrs:{offset:"0"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#F69332"},attrs:{offset:"0.6442"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"#F37321"},attrs:{offset:"1"}})],1),t._v(" "),r("polygon",{attrs:{"clip-path":"url(#SVGID_38_)",fill:"url(#SVGID_39_)",points:"73.863,61.068 78.344,108.109 36.9,112.058 32.419,65.016\n\t\t\t"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},237:function(t,e,r){"use strict";r.r(e);r(50);var o=r(210),l={data:function(){return{fly:!1}},mounted:function(){var t=this;o.a.start(),setTimeout((function(){t.fly=!0}),500),window.addEventListener("resize",this.onResize)},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{onResize:function(t){o.a.start()},scrollToElement:function(t){var e=this.$refs[t];e&&e.scrollIntoView({behavior:"smooth"})}}},n=(r(228),r(11)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"homepage"},[o("div",{staticClass:"banner py-6"},[o("canvas",{attrs:{id:"star-canvas",width:"100%",height:"100%"}}),t._v(" "),o("Rocket",{staticClass:"rocket",class:{land:!t.fly}}),t._v(" "),o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("img",{staticClass:"mt-6",attrs:{src:r(152)}}),t._v(" "),o("br"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),o("br"),o("br"),t._v(" "),o("button",{staticClass:"button is-medium is-accent is-rounded is-wide is-uppercase has-text-weight-medium",on:{click:function(e){return e.preventDefault(),t.scrollToElement("why")}}},[t._v("Learn More")])]),t._v(" "),o("div",{ref:"why"},[o("Why")],1),t._v(" "),o("div",{ref:"how"},[o("How")],1)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"is-size-6 has-text-weight-light is-flex is-align-items-center"},[e("span",{},[this._v("AN ")]),this._v(" "),e("span",{staticClass:"mx-2 has-text-weight-normal is-size-4"},[this._v(" EFFECT.AI ")]),this._v(" "),e("span",[this._v("COMPANY")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"is-size-3 has-text-weight-light"},[e("b",[this._v("I")]),this._v("nnovative")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"is-size-3 has-text-weight-light"},[e("b",[this._v("V")]),this._v("iral")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"is-size-3 has-text-weight-light"},[e("b",[this._v("E")]),this._v("ngagement")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"is-size-5 has-text-weight-light"},[this._v("Grow your brand with "),e("b",[this._v("Effective")]),this._v(" social media engagement")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Rocket:r(236).default,Why:r(222).default,How:r(223).default})}}]);