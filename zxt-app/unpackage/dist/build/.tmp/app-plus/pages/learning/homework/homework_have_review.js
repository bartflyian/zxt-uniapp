(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/learning/homework/homework_have_review"],{1959:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{inputType:0,inputValue:"",uploadImg:"",optionStr:"",selectedOption:[],correctOption:[],wrongOption:[]}},props:["data","status"],mounted:function(){var t=this;if(this.data.options&&this.data.options.length>0&&this.data.options.forEach(function(e){t.selectedOption.push(!1),t.correctOption.push(!1),t.wrongOption.push(!1)}),"notdeal"==this.status);else if("noReview"==this.status){if(1==this.data.type||2==this.data.type){var e=this.data.studentAnswer.answer;""!=e&&e.split("").forEach(function(e){var n=t.computedOptionIndex(e);t.selectedOption[n]=!0})}}else if("haveReview"==this.status&&(1==this.data.type||2==this.data.type)){var n=this.data.studentAnswer.answer,i=this.data.correctAnswer,o=i.split("");o.forEach(function(e){t.correctOption[t.computedOptionIndex(e)]=!0}),""!=n&&n.split("").forEach(function(e){var n=t.computedOptionIndex(e);1==t.correctOption[n]?t.wrongOption[n]=!1:t.wrongOption[n]=!0})}},methods:{changeInputType:function(t){""!=this.inputValue&&""!=this.uploadImg||(this.inputType=t)},onKeyInput:function(t){this.inputValue=t.target.value},resetInputType:function(){""==this.inputValue&&(this.inputType=0)},selectOption:function(t){var e=this;if("notdeal"==this.status){1==this.data.type&&this.selectedOption.forEach(function(n,i){t!=i&&e.$set(e.selectedOption,i,!1)}),this.selectedOption[t]?this.$set(this.selectedOption,t,!1):this.$set(this.selectedOption,t,!0);var n="";this.selectedOption.forEach(function(t,i){if(t){var o=e.computedOptionNum(i);n+=o}}),this.optionStr=n}},computedOptionNum:function(t){return String.fromCharCode(64+parseInt(t+1))},computedOptionIndex:function(t){return t.toUpperCase().charCodeAt()-65}},watch:{optionStr:function(){this.$emit("changeAnswer",{type:1,id:this.data.id,value:this.optionStr})},inputValue:function(){this.$emit("changeAnswer",{type:1,id:this.data.id,value:this.inputValue})},uploadImg:function(){this.$emit("changeAnswer",{type:2,id:this.data.id,value:this.uploadImg})}}};e.default=i},5808:function(t,e,n){},"79be":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.answerCardShow=!0},t.e1=function(e){t.answerCardShow=!1},t.e2=function(e){t.answerCardShow=!1})},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"816f":function(t,e,n){"use strict";n.r(e);var i=n("f7b8"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=o.a},"84bd":function(t,e,n){"use strict";var i=n("b0bc"),o=n.n(i);o.a},b0bc:function(t,e,n){},c2be:function(t,e,n){"use strict";n.r(e);var i=n("ed52"),o=n("de65");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("84bd");var r=n("2877"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports},caa1:function(t,e,n){"use strict";(function(t){n("687b"),n("921b");i(n("66fd"));var e=i(n("ed0d"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},de65:function(t,e,n){"use strict";n.r(e);var i=n("1959"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=o.a},e7e6:function(t,e,n){"use strict";var i=n("5808"),o=n.n(i);o.a},ed0d:function(t,e,n){"use strict";n.r(e);var i=n("79be"),o=n("816f");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("e7e6");var r=n("2877"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports},ed52:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.data.options,function(e,n){var i=t.computedOptionNum(n);return{$orig:t.__get_orig(e),m0:i}}));t.$mp.data=Object.assign({},{$root:{l0:n}})},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},f7b8:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("c2be"));function o(t){return t&&t.__esModule?t:{default:t}}var u=function(){return Promise.all([n.e("common/vendor"),n.e("components/homework_subquestion_swiper/index")]).then(n.bind(null,"b942"))},r=function(){return n.e("components/button/button").then(n.bind(null,"ebe9"))},s={data:function(){return{indicatorDots:!1,interval:2e3,testNum:0,currentNum:0,testData:[],answerData:[],updated:!1,answerCardShow:!1,backTipBoxShow:!1}},components:{Answerinput:i.default,Subquestionswiper:u,Button:r},mounted:function(){var t=this;setTimeout(function(){t.testData=[{id:1,type:1,question:"1、不等式x＞1在数轴上表示正确的是（    ）",options:["选项一","选项二","选项三","选项四"],subquestion:[],studentAnswer:{answer:"A"},correctAnswer:"A",ifCorrect:!0},{id:2,type:4,question:"2、a + b =（    ）",subquestion:[],studentAnswer:{answer:"a+b"},correctAnswer:"a-b",ifCorrect:!1},{id:3,type:3,question:"3、根据两直线平行内错角相等可得到，故正确 =（    ）",subquestion:[],studentAnswer:{answer:"33332"},correctAnswer:"33332",ifCorrect:!0},{id:4,type:5,question:"4、a - c =（    ）",ifCorrect:!1,subquestion:[{id:5,type:2,question:"1、不等式x＞1在数轴上表示正确的是（    ）",options:["选项一","选项二","选项三","选项四"],subquestion:[],studentAnswer:{answer:"BC"},correctAnswer:"AD",ifCorrect:!1},{id:6,type:4,question:"2、a - b =（    ）",subquestion:[],studentAnswer:{answer:"a-b"},correctAnswer:"a-b",ifCorrect:!0}]}],t.testData.forEach(function(e,n){if(e.subquestion.length>0){var i=!0;e.subquestion.forEach(function(t){""==t.studentAnswer.answer&&(i=!1)}),t.answerData[n]={id:e.id,subAnswerArr:[],done:i}}else t.answerData[n]={id:e.id,answer:e.studentAnswer.answer,answerPic:"",done:""!=e.studentAnswer.answer}}),t.testNum=t.testData.length},1e3)},methods:{swiperChange:function(t){this.currentNum=t.detail.current},slideToTest:function(t){this.currentNum=t,this.answerCardShow=!1},back:function(){t.navigateBack()}},watch:{}};e.default=s}).call(this,n("6e42")["default"])}},[["caa1","common/runtime","common/vendor"]]]);