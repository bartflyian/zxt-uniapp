<template> 
	<view class="subquestion-box">
		<view class="subquestion-title">
			<text class="test-num">第{{currentNum}}题</text>
			<text class="test-current">{{currentNum}}<text class="test-totalnum">/{{data.subquestion.length}}</text></text>
		</view>
		<swiper class="swiper" style="height: 100%;overflow-y: scroll;" :indicator-dots="indicatorDots" :interval="interval" @change="swiperChange">
			<swiper-item v-for="(test,index) in data.subquestion" :key="index">
				<view class="test-content">
					<Answerinput :data="test" @changeAnswer="changeAnswer" :status='status'></Answerinput>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import Answerinput from "../homework_answer_input/index"
	export default {
		data() {
			return { 
				indicatorDots: false,
				interval: 2000,
				testNum: 0,
				currentNum: 1,
				subTestData: [],
				update: false
			};
		},
		components: {
			Answerinput, 
		},
		props:['data','status'],
		mounted () {
			this.subTestData = this.data;
			this.subTestData.subquestion.forEach(item => {
				item.answer = '';
				item.answerPic = '';
			})
		},
		methods:{ 
			swiperChange (e) {  //滑动swiper
				this.currentNum = e.detail.current + 1; 
			}, 
			computedOptionNum (index) {  //返回大写选项号
				return String.fromCharCode(64 + parseInt(index+1));
			},
			changeAnswer (data) {   
				this.subTestData.subquestion.forEach(item => {
					if (item.id == data.id) { 
						if(data.type == 1) {
							item.answer = data.value;
							item.answerPic = '';
						}else if(data.type == 2){
							item.answerPic = data.value;
							item.answer = '';
						}
						this.update = !this.update;
					}
				});
			}
		},
		watch:{
			update () { //监听子题内容 
				console.log(this.subTestData)
				this.$emit('changeSubAnswer',this.subTestData);
			}
		}
	}
</script>

<style lang="scss">
	.subquestion-box{ 
		height: 1200rpx;
		margin-top: 60rpx;
		.subquestion-title{
			overflow: hidden;
			height: 100rpx;
			background: rgba(245,246,248,1);
			line-height: 100rpx;
			padding: 0 32rpx;
			font-size:16px;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(50,54,67,1);
			.test-num{
				float: left;
			}
			.test-current{
				float: right;
				.test-totalnum {
					color: #878C9E;
					font-size: 12px;
				}
			}	
		}

		.test-content{
			padding: 0 32rpx;
			.question{  
				line-height:36px;
			}
			.options{
				margin-top: 20rpx;
				.option {
					display: flex; 
					.option-num{
						flex-basis: 72rpx; 
						height:72rpx;
						background:rgba(255,255,255,1);
						border:2px solid rgba(229,233,239,1);
						border-radius:50%;
						text-align: center;
						line-height: 68rpx;
						margin: 0 32rpx 40rpx 0;
					}
					.option-answer{
						flex: 1;
						line-height: 20px;
						margin-top: 6px;
					}
				} 
			}
			.jieda-answer{
				margin: 80rpx auto;
				
			} 
		} 
	}
</style>
