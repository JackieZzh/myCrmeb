(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05ea8763"],{"78bb":function(n,t,r){},9642:function(n,t,r){"use strict";r.r(t);var i=function(){var n=this,t=n.$createElement,r=n._self._c||t;return!1===n.status?r("div",{staticClass:"poster-poster"},[n._m(0),r("div",{staticClass:"poster"},[r("img",{attrs:{src:n.image}})])]):n._e()},e=[function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"tip"},[r("span",{staticClass:"iconfont icon-shuoming"}),n._v("提示：长按图片保存至手机相册\n  ")])}],o=r("ca41"),u={name:"Poster",components:{},props:{},data:function(){return{status:!0,id:0,image:""}},mounted:function(){var n=this,t=n.$route.params.id,r=n.$route.params.type;n.id=t,2==r?n.getBargainPoster():n.getCombinationPoster()},methods:{getBargainPoster:function(){var n=this;Object(o["g"])({bargainId:n.id,from:"wechat"}).then((function(t){n.image=t.data.url,n.status=!1})).catch((function(t){n.$dialog.error(t.msg)}))},getCombinationPoster:function(){var n=this;Object(o["p"])({id:n.id,from:"wechat"}).then((function(t){n.image=t.data.url,n.status=!1})).catch((function(t){n.$dialog.error(t.msg)}))}}},a=u,c=(r("b8db"),r("623f")),s=Object(c["a"])(a,i,e,!1,null,"ff36e5c0",null);t["default"]=s.exports},b8db:function(n,t,r){"use strict";var i=r("78bb"),e=r.n(i);e.a},ca41:function(n,t,r){"use strict";r.d(t,"n",(function(){return e})),r.d(t,"m",(function(){return o})),r.d(t,"o",(function(){return u})),r.d(t,"q",(function(){return a})),r.d(t,"p",(function(){return c})),r.d(t,"r",(function(){return s})),r.d(t,"t",(function(){return f})),r.d(t,"s",(function(){return d})),r.d(t,"f",(function(){return g})),r.d(t,"a",(function(){return l})),r.d(t,"h",(function(){return p})),r.d(t,"i",(function(){return b})),r.d(t,"b",(function(){return m})),r.d(t,"e",(function(){return h})),r.d(t,"c",(function(){return v})),r.d(t,"j",(function(){return k})),r.d(t,"d",(function(){return w})),r.d(t,"g",(function(){return _})),r.d(t,"l",(function(){return C})),r.d(t,"k",(function(){return $}));var i=r("b775");function e(n){return i["a"].get("/combination/list",n,{login:!1})}function o(n){return i["a"].get("/combination/detail/"+n,{},{login:!1})}function u(n){return i["a"].get("/combination/pink/"+n)}function a(n){return i["a"].post("/combination/remove",n)}function c(n){return i["a"].post("/combination/poster",n)}function s(){return i["a"].get("/seckill/index",{},{login:!1})}function f(n,t){return i["a"].get("/seckill/list/"+n,t,{login:!1})}function d(n){return i["a"].get("/seckill/detail/"+n,{},{login:!1})}function g(n){return i["a"].get("/bargain/list",n,{login:!1})}function l(n){return i["a"].get("/bargain/detail/"+n)}function p(n){return i["a"].post("/bargain/share",n)}function b(n){return i["a"].post("/bargain/start",n)}function m(n){return i["a"].post("/bargain/help",n)}function h(n){return i["a"].post("/bargain/help/price",n)}function v(n){return i["a"].post("/bargain/help/count",n)}function k(n){return i["a"].post("/bargain/start/user",n)}function w(n){return i["a"].post("/bargain/help/list",n)}function _(n){return i["a"].post("/bargain/poster",n)}function C(n){return i["a"].get("/bargain/user/list",n)}function $(n){return i["a"].post("/bargain/user/cancel",n)}}}]);
//# sourceMappingURL=chunk-05ea8763.a12bfac1.js.map