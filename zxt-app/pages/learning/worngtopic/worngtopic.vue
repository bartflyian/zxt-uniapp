<template>
	<view class="wrong-topic">
		<view class="select-tab">
			<view class="selecter subject-select" @click="selectTab(1)"><text class="nav-title" :class="{'current':selectTabType == 1}">数学<text class="arrow"></text></text></view>
			<view class="selecter edition-select" @click="selectTab(2)"><text class="nav-title" :class="{'current':selectTabType == 2}">八年级上<text class="arrow"></text></text></view>
			<view class="selecter time-select" @click="selectTab(3)"><text class="nav-title" :class="{'current':selectTabType == 3}">选择时间<text class="arrow"></text></text></view>
			<view class="tab-main-content" v-show="selectTabShow">
				<view class="tab-bg" @click="closeSelectTab"></view>
				<view class="tab subject-tab" v-show="selectTabType == 1">
					<view class='btn' :class="{'is-select':subjectSelect == index}" v-for="(item,index) in subjectSelectData" :key="index" @click="subjectSelect = index">
						<text class="subject-btn">{{item}}</text>
					</view> 
				</view>
				<view class="tab edition-tab" v-show="selectTabType == 2">章节</view>
				<view class="tab time-tab" v-show="selectTabType == 3">
					<view class='btn' :class="{'is-select':timeSelect == index}" v-for="(item,index) in timeData" :key="index" @click="timeSelect = index">
						<text class="subject-btn">{{item}}</text>
					</view> 
				</view>
			</view>
		</view>
		<view class="wrong-test-box">
			<Wrongtest v-for="(test,index) in wrongTestData" :key="index" :data="test" :selectShow="selectShow" :chooseAll="chooseAll" :cancelSelect="cancelSelect"
			 @chooseConfirm="chooseConfirm" @chooseCancel="chooseCancel"></Wrongtest>
		</view>
		<view class="choose-tab" v-if="selectShow">
			<view class="choose-all" @click="chooseAllTest"><view class="choose-icon" :class="{'is-select':chooseAll}"></view><text>全选</text></view> 
			<view class="done-btn">{{selectType=="delete" ? "删除已选中错题" : "下载已选中错题"}}</view>
			<view class="cancel-btn" @click="selectHide">取消</view>
		</view>
	</view>
</template>

<script>
	import Wrongtest from "../../../components/wrong_test/wrong_test.vue"
	export default {
		data() {
			return {
				wrongTestData: [
					{
						'id':1,
						'type':1,
						'question':'1、不等式x＞1在数轴上表示正确的是（    ）',
						'options':['选项一','选项二','选项三','选项四'],
						'subquestion':[],
						'studentAnswer': {
							'answer': 'A',
						},
						'choosed': false
					},
					{
						'id':2,'type':4,'question':'2、a + b =（    ）','subquestion':[],
						'studentAnswer': {
							'answer': 'a+b',
						},
						'choosed': false
					},
					{
						'id':3,'type':3,'question':'3、根据两直线平行内错角相等可得到，故正确 =（    ）','subquestion':[],
						'studentAnswer': {
							'answer': '33332',
						},
						'choosed': false
					}
				], 
				chooseAll: false, //是否全选
				choosedList: [],	//已选题目列表
				cancelSelect: false, //点击了取消全选
				selectTabType: 0,  //筛选条件
				selectTabShow: false, //显示筛选条件tab
				subjectSelectData:["数学"],	//学科数组
				subjectSelect:"",		//筛选学科
				timeData:["本周","本月","本学期"],			//时间段数组
				timeSelect:"", 			//筛选时间
			};
		},
		components: {
			Wrongtest
		},
		props:["ifLoadMore","selectShow","selectType"],
		methods:{
			selectTab (type) { //选择筛选条件 
				if(type != this.selectTabType){
					this.selectTabShow = true;
					this.selectTabType = type;
				}else{
					this.closeSelectTab();
				}  
			},
			closeSelectTab () { //关闭选择框
				this.selectTabShow = false;
				this.selectTabType = 0;
			},
			loadMore () {  //加载更多 
				uni.showLoading({
				    title: '加载中'
				});
				console.log('加载更多')
				setTimeout(function(){
					 uni.hideLoading();
				},1000)
			}, 
			chooseAllTest () {  //全选
				this.chooseAll = !this.chooseAll;
				if(!this.chooseAll){
					this.cancelSelect = !this.cancelSelect;
				}
			},
			chooseConfirm (id) { //题目确认选择
				this.choosedList.push(id);
			},
			chooseCancel (id) {//题目取消选择
				this.choosedList.forEach((item,index) => {
					if(item == id){
						this.choosedList.splice(index,1);
					}
				}); 
			},
			selectHide() {
				this.choosedList = [];
				this.chooseAll = false;
				this.cancelSelect = true;
				this.$emit("selectHide");
			}
		},
		watch:{
			ifLoadMore() { 
				!this.selectShow && this.loadMore();
			},
			selectShow () { 
				if(this.selectShow) {
					uni.hideTabBar({});
				} else{
					uni.showTabBar({});
				}
			},
			choosedList () {
				if(this.choosedList.length == this.wrongTestData.length){
					this.chooseAll = true;
				}else{
					this.chooseAll = false; 
				}
			}
		}
	}
</script>

<style lang="scss">
	$style-color: #FF7800;
	.wrong-topic{
		font-family:PingFang SC;
		font-weight:bold;
		.select-tab{
			width: 100%;
			height:88rpx;
			line-height:88rpx;
			background:rgba(255,255,255,1);
			display: flex;
			position: fixed;
			top: 166rpx;
			left: 0;
			padding: 0 32rpx;
			z-index: 1000;
			.selecter{
				flex: 1;
				text-align: center;
				color: #323643;
				font-size: 12px; 
				position: relative;
				.nav-title{
					position: relative;
					.arrow{
						position: absolute;
						top: 6px;
						right: -16px;
						width: 0;
						height: 0;
						border-width: 10rpx;
						border-style: solid;
						border-color: #BEC3CD transparent transparent transparent;
					}
					&.current{
						color: $style-color;
						.arrow{
							transform: rotate(180deg);
							top: 0;
							border-color: $style-color transparent transparent transparent;
						}
					}
				} 
			}
			.tab-main-content{
				position: fixed;
				pointer-events: auto; 
				top: 254rpx;
				left: 0;
				width: 100%;
				height: 100%;
				overflow: hidden;
				z-index: 999;
				border-top: 1px solid #E5E9EF;
				.tab-bg{
					pointer-events: auto;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background:rgba(10, 10, 10, 0.5); 
				}
				.tab{
					position: absolute;
					z-index: 1000;
					background: #fff;
					width: 100%;
					font-size: 12px;
					color: #323643;
					padding: 28rpx 32rpx;
					display: flex;
					flex-flow: row wrap;
					.btn{ 
						flex: 0 0 20%;
						text-align: center; 
						margin-bottom: 30rpx;
						.subject-btn,.process-btn{
							display: block;
							width: 120rpx;
							height: 60rpx;
							line-height: 60rpx; 
						}
						&.is-select{
							.subject-btn,.process-btn{
								color: #fff;
								background:linear-gradient(90deg,rgba(249,212,35,1) 0%,rgba(255,121,74,1) 100%);
								border-radius:30px;
							}
						}
					}
				}
				.subject-tab{ 
				}
				.edition-tab{ 
				}
				.time-tab{ 
				}
			} 
		}
		.wrong-test-box{
			margin: 110rpx 32rpx 120rpx 32rpx; 
		}
		.choose-tab{
			width: 100%;
			height: 98rpx;
			background: rgba(255,255,255,1);
			position: fixed;
			bottom: 0;
			left: 0;
			font-size: 14px;
			box-shadow: 0 0 12px 0px rgba(128,128,128,0.4);
			padding: 13rpx 32rpx;
			.choose-all{
				color: #878C9E;
				float: left;
				height: 72rpx;
				line-height: 72rpx;  
				display: block;
				.choose-icon{
					display: inline-block;
					vertical-align: middle;
					margin-right: 33rpx;
					width: 40rpx;
					height: 40rpx;
					background: url(../../../static/icon/nochoose.png);
					background-size: 40rpx 40rpx;
					&.is-select{
						background: url(../../../static/icon/haschoose.png) no-repeat;
						background-size: 40rpx 40rpx; 
					}
				}
			}
			.cancel-btn{ 
				color: #fff;
				float: right;
				width:150rpx;
				height:72rpx;
				line-height: 72rpx;
				background:rgba(198,203,212,1);
				border-radius:36rpx;
				text-align: center;
				margin-right: 32rpx;
			}
			.done-btn{ 
				width:280rpx;
				height:72rpx;
				line-height: 72rpx;
				float: right;
				color: #fff;
				background:linear-gradient(90deg,rgba(249,212,35,1) 0%,rgba(255,121,74,1) 100%);
				border-radius:36rpx;
				text-align: center;
			}
		}
	}
</style>
