(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{289:function(t,e,n){var content=n(295);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("2f3fcffa",content,!0,{sourceMap:!1})},290:function(t,e,n){var content=n(297);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("f0f029ce",content,!0,{sourceMap:!1})},292:function(t,e,n){"use strict";n(184),n(26),n(11),n(7),n(16),n(36),n(5);var r=n(3),o=n(302),c=n.n(o),l=n(111),d=n(110);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"/aluno/certificados"},{id:4,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/contribua"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:7,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"},{id:8,label:"Apoie a new school",icon:"mdi-volume-high",link:"/construindo"},{id:8,label:"Ranking",icon:"mdi-trophy",link:"/aluno/ranking"}]}},methods:v(v({},Object(l.b)("user",["clearInfoUser"])),{},{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var t=this;this.logoutSocial().then((function(){$nuxt._router.push("/login"),localStorage.clear(),t.clearInfoUser()}))},pushAdminOnlyOptions:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos",this.menu.push({id:9,label:"Dashboard",icon:"mdi-chart-bar",link:"/admin/dashboard"}))},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.pushAdminOnlyOptions())},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}},components:{Avatar:c.a}},h=(n(294),n(35)),y=n(42),x=n.n(y),w=n(280),k=n(279),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-page"},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[n("avatar",{attrs:{username:t._f("simplifyName")(t.user.name),size:90}})],1)])]),t._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v(t._s(t.user.type))]),t._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:t.logout}},[t._v("Sair")])],1)]),t._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(e){return t.closeMenu()}}},[t._v("mdi-close-circle")])],1)]),t._v(" "),n("section",{staticClass:"menu-list"},t._l(t.menu,(function(e){return n("router-link",{key:e.id,staticClass:"item-menu",attrs:{tag:"div",to:e.link},nativeOn:{click:function(e){return t.closeMenu()}}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("p",{staticClass:"text-menu"},[t._v(t._s(e.label))])])})),1)])}),[],!1,null,"09cba8c5",null),_=component.exports;x()(component,{VBtn:w.a,VIcon:k.a});var O={components:{SideMenu:_},data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Início",icon:"mdi-home-outline",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account-outline",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school-outline",link:"/aluno/certificados",class:""}]}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].link="/admin/certificados")}}},j=(n(296),n(916)),C=Object(h.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:t.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),t._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[t._l(t.menu,(function(e){return n("v-btn",{key:e.id,staticClass:"btn-fixed menu__bottom",class:e.class,attrs:{to:e.link},on:{click:function(e){t.viewMenu=!1}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:t.setViewMenu}},[n("span",[t._v("Outros")]),t._v(" "),n("v-icon",[t._v("mdi-apps")])],1)],2)],1):t._e()}),[],!1,null,"7d2ee64a",null);e.a=C.exports;x()(C,{VBottomNavigation:j.a,VBtn:w.a,VIcon:k.a})},294:function(t,e,n){"use strict";var r=n(289);n.n(r).a},295:function(t,e,n){(e=n(24)(!1)).push([t.i,".container-page[data-v-09cba8c5]{z-index:2}#btnLogout[data-v-09cba8c5]{margin-top:5px}.mdi-close-circle[data-v-09cba8c5]:before{color:var(--primary)}.container-page>main[data-v-09cba8c5]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-09cba8c5],.container-page>main[data-v-09cba8c5]{display:-webkit-box;display:flex}#avatar[data-v-09cba8c5]{margin-right:1rem}.text-menu[data-v-09cba8c5]{text-transform:uppercase}.mdi-library-books[data-v-09cba8c5]:before{content:url(https://api.iconify.design/mdi-library-books.svg?color=rgb%28105%2C0%2C204%29&height=24);vertical-align:-.125em}h1[data-v-09cba8c5]{font-size:1rem;font-weight:500;color:#000;text-transform:capitalize}.container-page[data-v-09cba8c5]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-09cba8c5]{margin-left:0}#close-btn[data-v-09cba8c5]{cursor:pointer;font-size:30px}#flex-info-user[data-v-09cba8c5]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-09cba8c5]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-09cba8c5]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-09cba8c5]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-09cba8c5]{width:100%}.item-menu[data-v-09cba8c5]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:var(--primary)!important;cursor:pointer}.item-menu[data-v-09cba8c5],.item-menu div[data-v-09cba8c5]{display:-webkit-box;display:flex}.item-menu div[data-v-09cba8c5]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-09cba8c5]:hover{background-color:#e8d1ff}.col-flex-center[data-v-09cba8c5]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-09cba8c5]{margin-bottom:0!important}h4[data-v-09cba8c5]{font-weight:600}@media(max-width:320px){.item-menu[data-v-09cba8c5]{height:42px}}",""]),t.exports=e},296:function(t,e,n){"use strict";var r=n(290);n.n(r).a},297:function(t,e,n){(e=n(24)(!1)).push([t.i,"[data-v-7d2ee64a] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-7d2ee64a]{margin-right:0!important;padding-top:5px}#page[data-v-7d2ee64a]{margin-bottom:5rem!important}.btn-fixed[data-v-7d2ee64a]{height:100%!important}.intro-transition[data-v-7d2ee64a]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:var(--primary)}.mdi-library[data-v-7d2ee64a]:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28112%2C112%2C112%29&height=24);vertical-align:-.125em}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content .mdi-library:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28102%2C0%2C204%29&height=24);vertical-align:-.125em}span[data-v-7d2ee64a]{font-size:8px;font-weight:400;color:#737373;margin-top:5px}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content span{color:var(--primary)}@media (max-width:375px){.v-btn[data-v-7d2ee64a]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-7d2ee64a]{font-size:.65rem!important}}.remove-certificates[data-v-7d2ee64a]{display:none}",""]),t.exports=e},306:function(t,e,n){"use strict";var strong=n(320),r=n(310);t.exports=n(321)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=strong.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return strong.def(r(this,"Map"),0===t?0:t,e)}},strong,!0)},307:function(t,e,n){"use strict";n(298);var r=n(301);e.a=Object(r.a)("flex")},308:function(t,e,n){"use strict";n(298);var r=n(301);e.a=Object(r.a)("layout")},310:function(t,e,n){var r=n(28);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},320:function(t,e,n){"use strict";var r=n(39).f,o=n(88),c=n(187),l=n(56),d=n(185),f=n(186),v=n(137),m=n(190),h=n(138),y=n(29),x=n(133).fastKey,w=n(310),k=y?"_s":"size",_=function(t,e){var n,r=x(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,v){var m=t((function(t,r){d(t,m,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[k]=0,null!=r&&f(r,n,t[v],t)}));return c(m.prototype,{clear:function(){for(var t=w(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[k]=0},delete:function(t){var n=w(this,e),r=_(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[k]--}return!!r},forEach:function(t){w(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!_(w(this,e),t)}}),y&&r(m.prototype,"size",{get:function(){return w(this,e)[k]}}),m},def:function(t,e,n){var r,o,c=_(t,e);return c?c.v=n:(t._l=c={i:o=x(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[k]++,"F"!==o&&(t._i[o]=c)),t},getEntry:_,setStrong:function(t,e,n){v(t,e,(function(t,n){this._t=w(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?m(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,m(1))}),n?"entries":"values",!n,!0),h(e)}}},321:function(t,e,n){"use strict";var r=n(21),o=n(13),c=n(41),l=n(187),meta=n(133),d=n(186),f=n(185),v=n(28),m=n(30),h=n(136),y=n(87),x=n(139);t.exports=function(t,e,n,w,k,_){var O=r[t],j=O,C=k?"set":"add",S=j&&j.prototype,P={},M=function(t){var e=S[t];c(S,t,"delete"==t?function(a){return!(_&&!v(a))&&e.call(this,0===a?0:a)}:"has"==t?function(a){return!(_&&!v(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return _&&!v(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof j&&(_||S.forEach&&!m((function(){(new j).entries().next()})))){var E=new j,D=E[C](_?{}:-0,1)!=E,N=m((function(){E.has(1)})),z=h((function(t){new j(t)})),V=!_&&m((function(){for(var t=new j,e=5;e--;)t[C](e,e);return!t.has(-0)}));z||((j=e((function(e,n){f(e,j,t);var r=x(new O,e,j);return null!=n&&d(n,k,r[C],r),r}))).prototype=S,S.constructor=j),(N||V)&&(M("delete"),M("has"),k&&M("get")),(V||D)&&M(C),_&&S.clear&&delete S.clear}else j=w.getConstructor(e,t,k,C),l(j.prototype,n),meta.NEED=!0;return y(j,t),P[t]=j,o(o.G+o.W+o.F*(j!=O),P),_||w.setStrong(j,t,k),j}},350:function(t,e,n){"use strict";n(26),n(11);var r=n(3),o=(n(47),n(306),n(38),n(7),n(5),n(16),n(37),n(40),n(315),n(1)),c=n(303),l=n(6);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=["start","end","center"];function h(t,e){return v.reduce((function(n,r){return n[t+Object(l.w)(r)]=e(),n}),{})}var y=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},x=h("align",(function(){return{type:String,default:null,validator:y}})),w=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},k=h("justify",(function(){return{type:String,default:null,validator:w}})),_=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},O=h("alignContent",(function(){return{type:String,default:null,validator:_}})),j={align:Object.keys(x),justify:Object.keys(k),alignContent:Object.keys(O)},C={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,n){var r=C[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var P=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},x),{},{justify:{type:String,default:null,validator:w}},k),{},{alignContent:{type:String,default:null,validator:_}},O),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var f=P.get(l);return f||function(){var t,e;for(e in f=[],j)j[e].forEach((function(t){var r=n[t],o=S(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),P.set(l,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},377:function(t,e,n){"use strict";n(26),n(11),n(72),n(37),n(40);var r=n(3),o=(n(47),n(306),n(38),n(7),n(5),n(16),n(55),n(315),n(1)),c=n(303),l=n(6);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=v.reduce((function(t,e){return t["offset"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),y=v.reduce((function(t,e){return t["order"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(m),offset:Object.keys(h),order:Object.keys(y)};function w(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var k=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in n)l+=String(n[d]);var f=k.get(l);return f||function(){var t,e;for(e in f=[],x)x[e].forEach((function(t){var r=n[t],o=w(e,t,r);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),k.set(l,f)}(),t(n.tag,Object(c.a)(data,{class:f}),o)}})},582:function(t,e,n){var content=n(774);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("4fce5d92",content,!0,{sourceMap:!1})},583:function(t,e){},772:function(t,e,n){t.exports=n.p+"img/e174f7b.svg"},773:function(t,e,n){"use strict";var r=n(582);n.n(r).a},774:function(t,e,n){(e=n(24)(!1)).push([t.i,"*[data-v-2c598328]{max-width:600px;margin:0 auto;color:var(--primary)}.container[data-v-2c598328]{position:absolute;top:0;left:0;padding:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.container[data-v-2c598328],.initial-text[data-v-2c598328]{width:100%;display:-webkit-box;display:flex}.initial-text[data-v-2c598328]{font-style:normal!important;font-size:16px;font-weight:700;line-height:22px;text-align:center;color:#656565;margin-bottom:-39px}.img[data-v-2c598328]{width:90%;margin:15% 5%}.end-text[data-v-2c598328]{font-style:normal;text-decoration:underline;font-weight:700;font-size:18px;line-height:22px;-webkit-box-pack:center;justify-content:center;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;text-align:center;color:var(--primary);margin:8px auto}@media (max-width:340px){.img[data-v-2c598328]{margin:3% 5%}.atribute-data span[data-v-2c598328]{margin-left:20%}}",""]),t.exports=e},775:function(t,e,n){"use strict";var r=n(583),o=n.n(r);e.default=o.a},899:function(t,e,n){"use strict";n.r(e);var r={components:{NavigationBar:n(292).a}},o=(n(773),n(35)),c=n(775),l=n(42),d=n.n(l),f=n(377),v=n(883),m=n(307),h=n(308),y=n(350),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{staticClass:"container"},[e("v-flex",{ref:"flex",attrs:{xs10:"",sm8:"",md6:""}},[e("v-container",[e("v-col",{staticClass:"initial-text",attrs:{cols:"12"}},[e("v-row",[e("p",[this._v("Salve salve, estamos terminando de criar a New School.")])])],1),this._v(" "),e("v-col",{staticClass:"initial-text",attrs:{cols:"12"}},[e("v-row",[e("p",[this._v("\n            Então relaxa que logo logo vem novidade ai, Tamo Together wow!\n          ")])])],1),this._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-row",[e("img",{staticClass:"img",attrs:{src:n(772),alt:""}})])],1),this._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-row",[e("router-link",{staticClass:"end-text",attrs:{to:"/contribua"}},[this._v("Quer ajudar a gente?")])],1)],1)],1)],1),this._v(" "),e("navigation-bar")],1)}),[],!1,null,"2c598328",null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports;d()(component,{VCol:f.a,VContainer:v.a,VFlex:m.a,VLayout:h.a,VRow:y.a})}}]);