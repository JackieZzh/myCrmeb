(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-146ed97a"],{"5f10":function(t,n,s){t.exports=s.p+"h5/img/noCoupon.e524084b.png"},b701:function(t,n,s){"use strict";s.r(n);var i=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{ref:"container"},[t.couponsList.length>0?s("div",{staticClass:"coupon-list"},t._l(t.couponsList,function(n,i){return s("div",{key:i,staticClass:"item acea-row row-center-wrapper"},[s("div",{staticClass:"money",class:n.is_use?"moneyGray":""},[t._v("\n        ￥"),s("span",{staticClass:"num"},[t._v(t._s(n.coupon_price))])]),s("div",{staticClass:"text"},[s("div",{staticClass:"condition line1"},[t._v("\n          购物满"+t._s(n.use_min_price)+"元可用\n        ")]),s("div",{staticClass:"data acea-row row-between-wrapper"},[0!==n.end_time?s("div",[t._v("\n            "+t._s(n.start_time)+"-"+t._s(n.end_time)+"\n          ")]):s("div",[t._v("不限时")]),!0===n.is_use?s("div",{staticClass:"bnt gray"},[t._v("已领取")]):2===n.is_use?s("div",{staticClass:"bnt gray"},[t._v("已领完")]):s("div",{staticClass:"bnt bg-color-green",on:{click:function(s){return t.getCoupon(n.id,i)}}},[t._v("\n            立即领取\n          ")])])])])}),0):t._e(),s("Loading",{attrs:{loaded:t.loadend,loading:t.loading}}),0===t.couponsList.length&&t.page>1?s("div",{staticClass:"noCommodity"},[t._m(0)]):t._e()],1)},e=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"noPictrue"},[i("img",{staticClass:"image",attrs:{src:s("5f10")}})])}],o=s("c24f"),a=s("3a5e"),c={name:"getCoupon",components:{Loading:a["a"]},props:{},data:function(){return{page:1,limit:10,couponsList:[],loading:!1,loadend:!1}},mounted:function(){var t=this;this.getUseCoupons(),this.$scroll(this.$refs.container,function(){!t.loading&&t.getUseCoupons()})},methods:{getCoupon:function(t,n){var s=this,i=s.couponsList;Object(o["p"])(t).then(function(){i[n].is_use=!0,s.$dialog.toast({mes:"领取成功"})}).catch(function(t){s.$dialog.toast({mes:t.msg})})},getUseCoupons:function(){var t=this;if(!t.loading&&!t.loadend){t.loading=!0;var n={page:t.page,limit:t.limit};Object(o["o"])(n).then(function(n){t.loading=!1,t.couponsList.push.apply(t.couponsList,n.data),t.loadend=n.data.length<t.limit,t.page=t.page+1})}}}},l=c,u=s("2877"),d=Object(u["a"])(l,i,e,!1,null,null,null);n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-146ed97a.b44de6f2.js.map