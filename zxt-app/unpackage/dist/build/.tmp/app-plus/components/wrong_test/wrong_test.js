(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wrong_test/wrong_test"],{"03f6":function(t,e,n){},"2cc1":function(t,e,n){"use strict";var o=n("03f6"),c=n.n(o);c.a},"71db":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.data.options,function(e,n){var o=t.computedOptionNum(n);return{$orig:t.__get_orig(e),m0:o}}));t.$mp.data=Object.assign({},{$root:{l0:n}})},c=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return c})},"9d91":function(t,e,n){"use strict";n.r(e);var o=n("71db"),c=n("b8a9");for(var i in c)"default"!==i&&function(t){n.d(e,t,function(){return c[t]})}(i);n("2cc1");var r=n("2877"),u=Object(r["a"])(c["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},b8a9:function(t,e,n){"use strict";n.r(e);var o=n("d8f0"),c=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=c.a},d8f0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{isSelect:!1}},props:["data","selectShow","chooseAll","cancelSelect"],methods:{chooseThis:function(t){this.isSelect=!this.isSelect,this.isSelect?this.$emit("chooseConfirm",t):this.$emit("chooseCancel",t)},computedOptionNum:function(t){return String.fromCharCode(64+parseInt(t+1))},computedOptionIndex:function(t){return t.toUpperCase().charCodeAt()-65}},watch:{chooseAll:function(){this.chooseAll&&(this.isSelect=!0)},cancelSelect:function(){this.isSelect=!1}}};e.default=o}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wrong_test/wrong_test-create-component',
    {
        'components/wrong_test/wrong_test-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("9d91"))
        })
    },
    [['components/wrong_test/wrong_test-create-component']]
]);                
