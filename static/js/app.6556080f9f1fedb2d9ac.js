webpackJsonp([0],{"+p9J":function(t,e,i){"use strict";e.a={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},"07PK":function(t,e,i){"use strict";e.a={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},"224U":function(t,e){},"2Xaf":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},n=[],a={render:s,staticRenderFns:n};e.a=a},"7oBO":function(t,e,i){"use strict";var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX")),e.a={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},"8Q7q":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},n=[],a={render:s,staticRenderFns:n};e.a=a},M93x:function(t,e,i){"use strict";function s(t){i("eKhU")}var n=i("xJD8"),a=i("baP9"),r=i("VU/8"),o=s,l=r(n.a,a.a,o,null,null);e.a=l.exports},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("+p9J"),n=i("2Xaf"),a=i("VU/8"),r=a(s.a,n.a,null,null,null);e.default=r.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n=i("M93x"),a=i("YaEn"),r=i("F3EI"),o=i.n(r);s.a.use(o.a),i("v2ns"),s.a.config.productionTip=!1,new s.a({el:"#app",router:a.a,template:"<App/>",components:{App:n.a}})},OEG3:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",[t._v(t._s(t.msg))]),t._v(" "),i("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),i("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),i("br"),t._v(" "),i("li",[i("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),i("li",[i("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),i("li",[i("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],a={render:s,staticRenderFns:n};e.a=a},YaEn:function(t,e,i){"use strict";var s=i("7+uW"),n=i("/ocq"),a=i("gORT");s.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Hello",component:a.a}]})},baP9:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"app",attrs:{id:"app"}},[s("div",{staticClass:"mobile"},[s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption,"not-next-tick":t.notNextTick}},[s("swiper-slide",[s("div",{staticClass:"m_headerWapper"},[t._v("\n          yehyehyeh is an agency bringing together sustainability, creativity and innovation to instigate valued-based change. It offers consultancy, strategies, creative solutions, product initiatives and communication services for forward-looking brands, clients and institutions\n        ")]),t._v(" "),s("video",{attrs:{src:i("mIZP"),autoplay:"",loop:""}},[t._v("\n          您的浏览器不支持 video 标签。\n        ")])]),t._v(" "),s("swiper-slide",[s("div",{staticClass:"t_m_con"},[t._v("Create, Innovate, Sustain")]),t._v(" "),s("div",{staticClass:"projectTitle"},[t._v("PROJECTS")]),t._v(" "),s("ul",{staticClass:"project"},[s("li",[t._v("Eyes Wide Open")]),t._v(" "),s("li",[t._v("Be Active In")]),t._v(" "),s("li",[t._v("Sustain issue")]),t._v(" "),s("li",[t._v("NOWNESS-Hometown")]),t._v(" "),s("li",[t._v("NOWNESS-Utopian Workshop")]),t._v(" "),s("li",[t._v("After Us")]),t._v(" "),s("li",[t._v("Group Think issue")]),t._v(" "),s("li",[t._v("Energy issue")]),t._v(" "),s("li",[t._v("Countryside issue")])]),t._v(" "),s("div",{staticClass:"mail"},[s("a",{attrs:{href:"mailto:wonder@yehyehyeh.com"}},[t._v("\n            wonder@yehyehyeh.com\n          ")])]),t._v(" "),s("div",{staticClass:"copyright"},[t._v("\n          yehyehyeh©ALL RIGHTS RESERVED\n        ")])])],1)],1),t._v(" "),s("video",{staticClass:"bgmov",attrs:{src:i("mIZP"),autoplay:"",loop:""}},[t._v("\n    您的浏览器不支持 video 标签。\n  ")]),t._v(" "),s("div",{staticClass:"m_headerWapper"},[t._v("\n    yehyehyeh is an agency bringing together sustainability, creativity and innovation to instigate valued-based change. It offers consultancy, strategies, creative solutions, product initiatives and communication services for forward-looking brands, clients and institutions\n  ")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"t_m_con"},[t._v("Create, Innovate, Sustain")]),t._v(" "),s("div",{staticClass:"projectTitle"},[t._v("PROJECTS")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"copyright"},[t._v("\n    yehyehyeh©ALL RIGHTS RESERVED\n  ")])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"headerWapper"},[i("div",{staticClass:"top t_l_con"},[t._v("\n      yehyehyeh is an agency bringing together sustainability, creativity and innovation to instigate valued-based change. It offers consultancy, \n    ")]),t._v(" "),i("div",{staticClass:"top t_r_con"},[t._v("\n      strategies, creative solutions, product initiatives and communication services for forward-looking brands, clients and institutions\n    ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"project"},[i("li",[t._v("Eyes Wide Open")]),t._v(" "),i("li",[t._v("Be Active In")]),t._v(" "),i("li",[t._v("Sustain issue")]),t._v(" "),i("li",[t._v("NOWNESS-Hometown")]),t._v(" "),i("li",[t._v("NOWNESS-Utopian Workshop")]),t._v(" "),i("li",[t._v("After Us")]),t._v(" "),i("li",[t._v("Group Think issue")]),t._v(" "),i("li",[t._v("Energy issue")]),t._v(" "),i("li",[t._v("Countryside issue")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mail"},[i("a",{attrs:{href:"mailto:wonder@yehyehyeh.com"}},[t._v("\n      wonder@yehyehyeh.com\n    ")])])}],a={render:s,staticRenderFns:n};e.a=a},eKhU:function(t,e){},gORT:function(t,e,i){"use strict";function s(t){i("224U")}var n=i("07PK"),a=i("OEG3"),r=i("VU/8"),o=s,l=r(n.a,a.a,o,"data-v-1beaa0eb",null);e.a=l.exports},mIZP:function(t,e,i){t.exports=i.p+"static/media/m2mb.7be1b37.mp4"},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7oBO"),n=i("8Q7q"),a=i("VU/8"),r=a(s.a,n.a,null,null,null);e.default=r.exports},v2ns:function(t,e){},xJD8:function(t,e,i){"use strict";e.a={name:"app",data:function(){return{notNextTick:!0,swiperOption:{direction:"vertical",grabCursor:!0,setWrapperSize:!0,autoHeight:!0,paginationClickable:!0,mousewheelControl:!0,observeParents:!0}}}}}},["NHnr"]);
//# sourceMappingURL=app.6556080f9f1fedb2d9ac.js.map