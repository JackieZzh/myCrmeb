(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4938e4b2"],{"419c":function(t,e,s){},"8fe9":function(t,e,s){"use strict";var o=s("419c"),r=s.n(o);r.a},adbf:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.domStatus,expression:"domStatus"}],class:[t.posterImageStatus?"noscroll product-con":"product-con"],nativeOn:{scroll:function(e){return t.onScroll(e)}}},[s("div",{ref:"header",staticClass:"header acea-row row-center-wrapper",style:"opacity:"+t.opacity},t._l(t.navList,function(e,o){return s("div",{key:o,staticClass:"item",class:t.navActive===o?"on":"",on:{click:function(e){return t.asideTap(o)}}},[t._v("\n      "+t._s(e)+"\n    ")])}),0),s("div",{attrs:{id:"title0"}},[s("ProductConSwiper",{attrs:{imgUrls:t.imgUrls}}),s("div",{staticClass:"nav acea-row row-between-wrapper"},[s("div",{staticClass:"money"},[t._v("\n        ￥"),s("span",{staticClass:"num",domProps:{textContent:t._s(t.storeInfo.price)}}),s("span",{staticClass:"y-money",domProps:{textContent:t._s("￥"+t.storeInfo.ot_price)}})]),"1"===t.$route.params.status?s("div",{staticClass:"acea-row row-middle"},[s("div",{staticClass:"times"},[s("div",[t._v("距秒杀结束仅剩")]),s("CountDown",{attrs:{"is-day":!1,"tip-text":"","day-text":"","hour-text":" : ","minute-text":" : ","second-text":"",datatime:t.datatime}})],1)]):t._e()]),s("div",{staticClass:"wrapperRush"},[s("div",{staticClass:"introduce acea-row row-between"},[s("div",{staticClass:"infor",domProps:{textContent:t._s(t.storeInfo.title)}}),s("div",{staticClass:"iconfont icon-fenxiang",on:{click:t.setPosterImageStatus}})]),s("div",{staticClass:"label acea-row row-middle"},[s("div",{staticClass:"stock"},[t._v("\n          累计销售："+t._s(t.storeInfo.total?t.storeInfo.total:0)+" 件\n        ")]),s("div",[t._v("\n          限量: "+t._s(t.storeInfo.quota_show?t.storeInfo.quota_show:0)+" 件\n        ")])])]),t.attr.productAttr.length?s("div",{staticClass:"attribute acea-row row-between-wrapper",on:{click:t.selecAttrTap}},[s("div",[t._v("\n        "+t._s(t.attrTxt)+"："),s("span",{staticClass:"atterTxt"},[t._v(t._s(t.attrValue))])]),s("div",{staticClass:"iconfont icon-jiantou"})]):t._e()],1),s("div",{staticClass:"userEvaluation",attrs:{id:"title1"}},[s("div",{staticClass:"title acea-row row-between-wrapper"},[s("div",{domProps:{textContent:t._s("用户评价("+t.replyCount+")")}}),s("div",{staticClass:"praise",on:{click:t.goReply}},[s("span",{staticClass:"font-color-red",domProps:{textContent:t._s(t.replyChance+"%")}}),t._v("好评率"),s("span",{staticClass:"iconfont icon-jiantou"})])]),0!==t.reply.length?s("UserEvaluation",{attrs:{reply:t.reply}}):t._e()],1),s("div",{staticClass:"product-intro",attrs:{id:"title2"}},[s("div",{staticClass:"title"},[t._v("产品介绍")]),s("div",{staticClass:"conter",domProps:{innerHTML:t._s(t.storeInfo.description)}})]),s("div",{staticStyle:{height:"1.2rem"}}),s("div",{staticClass:"footerRush acea-row row-between-wrapper"},[s("div",{staticClass:"customerSer acea-row row-center-wrapper row-column",on:{click:function(e){return t.$router.push({path:"/customer/list"})}}},[s("div",{staticClass:"iconfont icon-kefu"}),s("div",[t._v("客服")])]),s("div",{staticClass:"item acea-row row-center-wrapper row-column",on:{click:t.setCollect}},[s("div",{staticClass:"iconfont",class:t.storeInfo.userCollect?"icon-shoucang1":"icon-shoucang"}),s("div",[t._v("收藏")])]),"1"===t.$route.params.status&&t.attr.productSelect.quota>0&&t.attr.productSelect.product_stock>0?s("div",{staticClass:"bnt acea-row"},[s("div",{staticClass:"joinCart",on:{click:t.openAlone}},[t._v("原价购买")]),s("div",{staticClass:"buy",on:{click:t.tapBuy}},[t._v("立即抢购")])]):t._e(),"1"===t.$route.params.status&&(t.attr.productSelect.quota<=0||t.attr.productSelect.product_stock<=0)?s("div",{staticClass:"bnt acea-row"},[s("div",{staticClass:"joinCart",on:{click:t.openAlone}},[t._v("原价购买")]),s("div",{staticClass:"buy bg-color-hui"},[t._v("已售罄")])]):t._e(),"2"===t.$route.params.status?s("div",{staticClass:"bnt acea-row"},[s("div",{staticClass:"joinCart",on:{click:t.openAlone}},[t._v("原价购买")]),s("div",{staticClass:"buy bg-color-hui"},[t._v("未开始")])]):t._e(),"0"===t.$route.params.status?s("div",{staticClass:"bnt acea-row"},[s("div",{staticClass:"joinCart",on:{click:t.openAlone}},[t._v("原价购买")]),s("div",{staticClass:"buy bg-color-hui"},[t._v("已结束")])]):t._e()]),s("ProductWindow",{attrs:{attr:t.attr},on:{changeFun:t.changeFun}}),s("StorePoster",{attrs:{posterImageStatus:t.posterImageStatus,posterData:t.posterData},on:{setPosterImageStatus:t.setPosterImageStatus}})],1)},r=[],a=(s("55dd"),s("28a5"),s("7618")),i=(s("5df3"),s("1c4c"),s("7f7f"),s("c5f8")),c=s("5608"),n=s("c6da"),u=s("cbd6"),l=s("edc3"),d=s("ca41"),h=s("73f5"),p=s("e876"),m=s("ed08"),f=s("74f9"),v=s("c24f"),S=s("f7fe"),_=s.n(S),$="SeckillDetails",w={name:"SeckillDetails",components:{ProductConSwiper:i["a"],CountDown:c["a"],ProductWindow:n["a"],StorePoster:u["a"],UserEvaluation:l["a"]},props:{},data:function(){return{domStatus:!1,posterData:{image:"",title:"",price:"",code:""},posterImageStatus:!1,action:"",imgUrls:[],storeInfo:[],replyCount:0,replyChance:0,reply:[],cartNum:1,attr:{cartAttr:!1,productSelect:{image:"",store_name:"",price:"",quota:0,unique:"",cart_num:1,quota_show:0,product_stock:0},productAttr:[]},datatime:0,attrTxt:"请选择",isOpen:!1,attrValue:"",cart_num:1,productValue:[],navList:[],lock:!1,navActive:0,opacity:0,storeSelfMention:!0,storeItems:{},activity:[]}},watch:{$route:function(t){var e=this;t.name===$&&e.mountedStart()}},mounted:function(){document.addEventListener("scroll",this.onScroll,!1),window.addEventListener("scroll",this.handleScroll),this.mountedStart()},methods:{goReply:function(){var t=this;t.$router.push({path:"/evaluate_list/"+t.storeInfo.product_id})},setCollect:function(){var t=this,e=t.storeInfo.product_id,s="product";t.storeInfo.userCollect?Object(v["n"])(e,s).then(function(){t.storeInfo.userCollect=!t.storeInfo.userCollect}):Object(v["m"])(e,s).then(function(){t.storeInfo.userCollect=!t.storeInfo.userCollect})},selecAttrTap:function(){"1"===this.$route.params.status&&(this.attr.cartAttr=!0,this.isOpen=!0)},openAlone:function(){this.$router.push({path:"/detail/"+this.storeInfo.product_id})},mountedStart:function(){var t=this,e=t.$route.params.id,s=t.$route.params.status;t.datatime=parseInt(t.$route.params.time),Object(d["s"])(e,t.datatime,s).then(function(e){t.$set(t,"storeInfo",e.data.storeInfo),t.$set(t,"imgUrls",e.data.storeInfo.images),t.$set(t,"replyCount",e.data.replyCount),t.$set(t,"replyChance",e.data.replyChance),e.data.reply&&t.$set(t,"reply",Array.from(e.data.reply)||[]),t.posterData.image=t.storeInfo.image_base,t.attr.productAttr=e.data.productAttr,t.productValue=e.data.productValue;var s=["商品","评价","详情"];t.navList=s,t.updateTitle(),t.storeInfo.title.length>30?t.posterData.title=t.storeInfo.title.substring(0,30)+"...":t.posterData.title=t.storeInfo.title,t.posterData.price=t.storeInfo.price,t.posterData.code=t.storeInfo.code_base,t.setProductSelect(),t.domStatus=!0,t.getImageBase64(),t.setShare(),t.DefaultSelect()}).catch(function(e){t.$dialog.error(e.msg),t.$router.go(-1)})},setShare:function(){Object(m["d"])()&&Object(f["openShareAll"])({desc:this.storeInfo.info,title:this.storeInfo.title,link:location.href,imgUrl:this.storeInfo.image})},getImageBase64:function(){var t=this;Object(p["m"])(this.posterData.image,t.posterData.code).then(function(e){t.posterData.image=e.data.image,t.posterData.code=e.data.code})},updateTitle:function(){document.title=this.storeInfo.title||this.$route.meta.title},setPosterImageStatus:function(){var t=document.body||document.documentElement;t.scrollTop=0,this.posterImageStatus=!this.posterImageStatus},changeFun:function(t){"object"!==Object(a["a"])(t)&&(t={});var e=t.action||"",s=void 0===t.value?"":t.value;this[e]&&this[e](s)},changeattr:function(t){var e=this;e.attr.cartAttr=t},ChangeAttr:function(t){var e=this.productValue[t];this.$set(this.attr.productSelect,"num",this.storeInfo.num),e?(this.$set(this.attr.productSelect,"image",e.image),this.$set(this.attr.productSelect,"price",e.price),this.$set(this.attr.productSelect,"quota",e.quota),this.$set(this.attr.productSelect,"unique",e.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"product_stock",e.product_stock),this.$set(this.attr.productSelect,"quota_show",e.quota_show),this.$set(this,"attrValue",t),this.$set(this,"attrTxt","已选择")):(this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"quota",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"quota_show",0),this.$set(this.attr.productSelect,"product_stock",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},ChangeCartNum:function(t){var e=this.productValue[this.attrValue];if(void 0!==e||this.attr.productAttr.length||(e=this.attr.productSelect),void 0!==e){var s=e.quota||0,o=this.storeInfo.num||0,r=this.attr.productSelect,a=r.product_stock||0;if(t){r.cart_num++;var i=[];i.push(o),i.push(s),i.push(a);var c=Math.min.apply(null,i);r.cart_num>=c&&(this.$set(this.attr.productSelect,"cart_num",c||1),this.$set(this,"cart_num",c||1))}else r.cart_num--,r.cart_num<1&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1))}},DefaultSelect:function(){var t=this.attr.productAttr,e=[];for(var s in this.productValue)if(this.productValue[s].quota>0){e=this.attr.productAttr.length?s.split(","):[];break}for(var o=0;o<t.length;o++)this.$set(t[o],"index",e[o]);this.$set(this.attr.productSelect,"num",this.storeInfo.num);var r=this.productValue[e.sort().join(",")];r&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.title),this.$set(this.attr.productSelect,"image",r.image),this.$set(this.attr.productSelect,"price",r.price),this.$set(this.attr.productSelect,"quota",r.quota),this.$set(this.attr.productSelect,"unique",r.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"product_stock",r.product_stock),this.$set(this.attr.productSelect,"quota_show",r.quota_show),this.$set(this,"attrValue",e.sort().join(",")),this.$set(this,"attrTxt","已选择")):!r&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.title),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"quota",this.storeInfo.quota||0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"quota_show",this.storeInfo.quota_show||0),this.$set(this.attr.productSelect,"product_stock",this.storeInfo.product_stock||0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择")):r||t.length||(this.$set(this.attr.productSelect,"store_name",this.storeInfo.title),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"quota",this.storeInfo.quota),this.$set(this.attr.productSelect,"quota_show",this.storeInfo.quota_show),this.$set(this.attr.productSelect,"product_stock",this.storeInfo.product_stock),this.$set(this.attr.productSelect,"unique",this.storeInfo.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},setProductSelect:function(){var t=this,e=t.attr;e.productSelect.image=t.storeInfo.image,e.productSelect.store_name=t.storeInfo.title,e.productSelect.price=t.storeInfo.price,e.productSelect.quota=0,e.productSelect.product_stock=0,e.cartAttr=!1,t.$set(e.productSelect,"num",t.storeInfo.num),t.$set(t,"attr",e)},tapBuy:function(){var t=this,e=this;if(0==e.attr.cartAttr)e.attr.cartAttr=!this.attr.attrcartAttr;else{var s={};s.productId=e.storeInfo.product_id,s.cartNum=e.attr.productSelect.cart_num,s.uniqueId=e.attr.productSelect.unique,s.secKillId=e.storeInfo.id,s.new=1,Object(h["m"])(s).then(function(t){e.$router.push({path:"/order/submit/"+t.data.cartId})}).catch(function(e){t.$dialog.error(e.msg)})}},handleScroll:function(){var t=document.body.scrollTop||document.documentElement.scrollTop,e=t/350;e=e>1?1:e,this.opacity=e},asideTap:function(t){var e=this;this.$nextTick(function(){var s=t;e.navActive=s;var o=document.querySelector("#title"+s),r=o.offsetTop-e.$refs.header.offsetHeight-window.scrollY;e.lock=!0,window.scrollBy({top:r,left:0,behavior:"smooth"})})},onScroll:_()(function(){var t=this;if(this.lock)this.lock=!1;else{var e=this.$refs.header.offsetHeight,s=window,o=s.scrollY,r=[];r.push(document.querySelector("#title0")),r.push(document.querySelector("#title1")),r.push(document.querySelector("#title2")),r.reduce(function(s,r,a){if(document.querySelector("#title0")||document.querySelector("#title1")||document.querySelector("#title2"))return s||(o+e<r.offsetTop+r.offsetHeight&&(s=!0,t.navActive=a),s)},!1)}},500)},beforeDestroy:function(){document.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("scroll",this.handleScroll)}},C=w,I=(s("8fe9"),s("2877")),g=Object(I["a"])(C,o,r,!1,null,"243e1a1c",null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-4938e4b2.6d91791f.js.map