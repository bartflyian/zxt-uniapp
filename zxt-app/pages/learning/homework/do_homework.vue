<template>
	<view class="do-homework">
		<view class='homework-head'>
			<text class='close-btn' @click="showBackTipBox()"></text>
			<text class='page-prv'><text class="now-current">{{currentNum+1}}</text><text class="allnum">/{{testNum}}</text></text>
			<text class='homework-btn' @click="answerCardShow = true;"></text>
		</view>
		<view class="homework-content">
			<swiper class="swiper" style="height: 100%;" :current="currentNum" :indicator-dots="indicatorDots" :interval="interval" @change="swiperChange">
				<swiper-item v-for="(test,index) in testData" :key="index">
					<view class="swiper-item">
						<view class="test-content">
							<Answerinput :data="test" @changeAnswer="changeAnswer" :status="'notdeal'"></Answerinput> 
						</view>
						<Subquestionswiper :data="test" v-if="test.subquestion.length > 0" @changeSubAnswer="changeSubAnswer" :status="'notdeal'"></Subquestionswiper>
					</view>
				</swiper-item> 
			</swiper>
		</view>
		<view class="answer-card" v-show="answerCardShow">
			<view class="card-bg" @click="answerCardShow = false"></view>
			<view class="card-content">
				<view class="card-header">
					<text class="title">答题卡</text> 
					<text class="close-btn" @click="answerCardShow = false"></text>
				</view>
				<view class="option-box">
					<view class="opt-li" v-for="(item,index) in testData" :key="index">
						<view class="opt" @click="slideToTest(index)" :class="{'done': (answerData[index].done)}">{{index+1 > 9 ? index+1 : ('0'+(index+1))}}</view>
					</view>
				</view>
				<text class="not-deal-tip">你还有题目没完成哦！确认提交吗？</text>
				<Button class="upload-homework">提交作业</Button>
			</view> 
		</view>
		<view class="back-tip-box" v-if="backTipBoxShow">
			<view class="tip-bg" @click="backTipBoxShow = false"></view>
			<view class="tip-content">
				<view @click="backTipBoxShow = false"><Button class="btn">继续做题</Button></view>
				<view @click="saveHomework"><Button class="btn">保存作业</Button></view>
				<view @click="back()"><Button class="btn">退出作业</Button></view>
			</view>
		</view>
	</view>
</template>

<script>
	import Answerinput from "../../../components/homework_answer_input/index"
	import Subquestionswiper from "../../../components/homework_subquestion_swiper/index"
	import Button from "../../../components/button/button.vue"
	export default {
		data() {
			return {
				indicatorDots: false,
				interval: 2000,
				testNum: 0,
				currentNum: 0,
				testData: [], //题目数据
				answerData: [], //答案数据
				updated: false, //是否发生修改
				answerCardShow: false, //是否显示答题卡
				backTipBoxShow: false, //是否显示退出提示
			};
		},
		components: {
			Answerinput,
			Subquestionswiper,
			Button
		},
		mounted () {
			let _this = this;
			setTimeout(function(){
				_this.testData = [
					{
						'id':1,
						'type':1,
						'question':'1、不等式x＞1在数轴上表示正确的是（    ）',
						'options':['选项一','选项二','选项三','选项四'],
						'subquestion':[]
					},
					{'id':2,'type':4,'question':'2、a + b =（    ）','subquestion':[]},
					{'id':3,'type':3,'question':'3、根据两直线平行内错角相等可得到，故正确 =（    ）','subquestion':[]},
					{
						'id':4,
						'type':5,'question':'4、a - c =（    ）',
						'subquestion':[
							{
								'id':5,
								'type':2,
								'question':'1、不等式x＞1在数轴上表示正确的是（    ）',
								'options':['选项一','选项二','选项三','选项四'],
								'subquestion':[]
							},
							{'id':6,'type':4,'question':'2、a + b =（    ）','subquestion':[]},
						]
					},
				]
				_this.testData.forEach((item,index) => {
					if(item.subquestion.length > 0){
						_this.answerData[index] = {
							'id': item.id,
							'subAnswerArr': [],
							'done': false
						}
						item.subquestion.forEach((subItem,subIndex) => {
							_this.answerData[index].subAnswerArr[subIndex] = {
								'id': subItem.id,
								'answer': '',
								'answerPic': '',
								'done': false
							}
						});
					}else {
						_this.answerData[index] = {
							'id': item.id,
							'answer': '',
							'answerPic': '',
							'done': false
						}
					}
				}); 
				_this.testNum = _this.testData.length; 
			},1000)
		},
		methods:{
			swiperChange(e) {  //滑动swiper
				this.currentNum = e.detail.current; 
			}, 
			changeAnswer (data) {  //更改题目答案 
				this.answerData.forEach(item => {
					if (item.id == data.id) {
						if(data.type == 1) {
							item.answer = data.value;
						}else{
							item.answerPic = data.value;
						}
						if(item.answer != "" || item.answerPic != "") {
							item.done = true;
						}else{
							item.done = false;
						}
					}
				});
				this.updated = !this.updated;
			},
			changeSubAnswer (data) { //更改子题目答案   
				this.answerData.forEach(item => {
					if (item.id == data.id) {
						item.subAnswerArr = data.subquestion;
						
						let done = true;
						item.subAnswerArr.forEach(subItem => {
							if(subItem.answer == "" && subItem.answerPic == ""){
								done = false;
							}
						});
						item.done = done;
					} 
				})
				this.updated = !this.updated;
			},
			slideToTest (index) {  //滑动到对应题目
				this.currentNum = index;
				this.answerCardShow = false;
			},
			showBackTipBox () { //弹出返回提示框
				this.backTipBoxShow = true;
			},
			saveHomework () {   //保存作业状态
				this.backTipBoxShow = false;
			},
			back(){ //返回上一级
				uni.navigateBack();
			}
		},
		watch: {
			updated () {
				console.log(this.answerData)
			}
		}
	}
</script>

<style lang="scss">
	.do-homework{
		display: flex;
		flex-direction: column;
		height: 100%;
		font-family:PingFang SC;
		font-size: 13px;
		font-weight:bold;
		color:rgba(51,51,51,1);
		.homework-head{
			flex-basis: 88rpx;
			height: 88rpx;
			line-height: 88rpx;
			.close-btn{
				position: absolute;
				display: block;
				margin: 32rpx;
				width: 24rpx;
				height: 24rpx;
				background: url(../../../static/icon/icon-guanbi.png);
				background-size: 24rpx 24rpx;
			}
			.page-prv{
				float: left;
				width: 100%;
				text-align: center;
				font-size: 18px;
				color: #323643;
				.allnum{
					font-size: 12px;
					color: #878C9E;
				}
			}
			.homework-btn{
				position: absolute;
				top: 28rpx;
				right: 32rpx;
				display: block; 
				width: 32rpx;
				height: 32rpx;
				background: url(../../../static/icon/icon-datika.png);
				background-size: 32rpx 32rpx;
			}
		}
		.homework-content{
			flex: 1; 
			padding: 40rpx 0;
			.test-content{
				padding: 0 32rpx; 
			} 
		}
		
		//答题卡 start
		.answer-card{
			width: 100%;
			height: 100%; 
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999; 
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(50,54,67,1);
			.card-bg{
				pointer-events: auto;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background:rgba(10, 10, 10, 0.5); 
			}
			.card-content{
				background:rgba(255,255,255,1);
				border-radius:30rpx 30rpx 0px 0px;
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 800rpx;
				.card-header{
					.title{
						display: block;
						width: 100%;
						text-align: center;
						font-size:18px;
						margin-top: 36rpx;
					}
					.close-btn{
						position: absolute;
						top: 42rpx;
						right: 40rpx;
						display: block; 
						width: 24rpx;
						height: 24rpx;
						background: url(../../../static/icon/icon-guanbi.png);
						background-size: 24rpx 24rpx; 
					}
				}
				.option-box{
					padding: 0 32rpx;
					overflow: hidden;
					margin-top: 40rpx;
					.opt-li{
						float: left;
						width: 20%; 
						margin-top: 60rpx;
						.opt{
							width:80rpx;
							height:80rpx;
							background:rgba(198,203,212,1);
							border-radius:50%;
							margin: 0 auto;
							line-height: 80rpx;
							text-align: center;
							color: #fff;
							font-size: 13px;
							&.done{
								background:rgba(255,150,0,1);
							}
						}
					}  
				}
				.not-deal-tip{
					display: block;
					font-size: 16px;
					width: 100%;
					margin-top: 120rpx;
					text-align: center;
				}
				.upload-homework{  
					position: absolute;
					bottom: 32rpx;
					left: 5%;
				}
			}  
		} 
		.back-tip-box{
			width: 100%;
			height: 100%; 
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999; 
			font-family:PingFang SC;
			font-weight:bold;
			.tip-bg{
				pointer-events: auto;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background:rgba(10, 10, 10, 0.5); 
			}
			.tip-content{
				position: absolute;
				background: #fff;
				z-index: 1000;
				width: 90%;
				padding: 100rpx 32rpx 40rpx 32rpx;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				border-radius: 30rpx;
				.btn{
					margin-bottom: 60rpx;
				}
			}
		} 
	}
	
</style>
