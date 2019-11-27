<template>
	<view class="wrong-test" :class="{'choosing':selectShow}">
		<view class="choose-area">
			<view class="choose-btn" @click="chooseThis(data.id)" v-show="selectShow" :class="{'is-select':isSelect}"></view>
		</view>
		<text class="time">2019.07.15</text>
		<text class="question">下列图形中，阴影部分的面积为2的有（    ）个</text>
		<view class="options" v-if="(data.type == 1 || data.type == 2) && data.options && data.options.length > 0">
			<view class="option" v-for="(answer,index) in data.options" :key="index">
				<!-- :class="{'selected':selectedOption[index],'correct':correctOption[index],'wrong':wrongOption[index]}" -->
				<view class="option-num">{{computedOptionNum(index)}}</view>
				<view class="option-answer">{{answer}}</view>
			</view>
		</view>
		<view class="teacherword-anlysis" v-show="!selectShow">
			<view class="line-block">
				<text class="answer-title">正确答案 :</text>
				<text class="correct content">12</text>
			</view>
			<view class="line-block">
				<text class="answer-title">您的答案 :</text>
				<text class="wrong content">12</text>
			</view>
			<view class="line-block">
				<text class="answer-result answer-title">回答:</text>
				<text class="content">错误</text>
			</view>
			<view class="anlysis"> 
				<view class="line-block">
					<text class="title">【文字解析】:</text>
					<text class="content">略</text>
				</view>
				<view class="line-block">
					<text class="title">【视频解析】:</text>
					<text class="content"></text>
				</view>
			</view> 
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSelect: false,	//是否选中
			};
		},
		props:["data","selectShow","chooseAll","cancelSelect"],
		methods:{
			chooseThis (id) { //选择题目
				this.isSelect = !this.isSelect;
				if(this.isSelect){
					this.$emit("chooseConfirm",id);
				}else{
					this.$emit("chooseCancel",id);
				}
			},
			computedOptionNum(index) {  //返回大写选项号
				return String.fromCharCode(64 + parseInt(index+1));
			},
			computedOptionIndex(word){	//放回字母对应序号
				return word.toUpperCase().charCodeAt()-65;
			}
		},
		watch: {
			chooseAll () { 
				if(this.chooseAll) {
					this.isSelect = true;
				}
			},
			cancelSelect () { 
				this.isSelect = false;
			}
		}
	}
</script>

<style lang="scss">
	.wrong-test{
		box-shadow: 0 0 12px 0px rgba(128,128,128,0.2);
		background:rgba(255,255,255,1);
		border-radius:20rpx; 
		font-family:PingFang SC;
		font-weight:bold;
		padding: 32rpx;
		font-size: 13px;
		margin-bottom: 33rpx;
		position: relative;
		&.choosing{
			transform: translate(99rpx, 0);
		}
		.choose-area{
			position: absolute;
			left: -100rpx;
			top: 0;
			width: 40rpx;
			height: 100%;
			display: flex;
			align-items: center;
			.choose-btn{ 
				width: 40rpx;
				height: 40rpx;
				background: url(../../static/icon/nochoose.png) no-repeat;
				background-size: 40rpx 40rpx; 
				&.is-select{
					background: url(../../static/icon/haschoose.png) no-repeat;
					background-size: 40rpx 40rpx; 
				}
			}
		} 
		.time{ 
			display: block;
			width: 100%;
			font-size:10px; 
			color:rgba(135,140,158,1);
			line-height:30rpx;
			margin-bottom: 61rpx;
		}
		.question{ 
			display: block;
			color:rgba(50,54,67,1);
			line-height:36rpx;
			margin-bottom: 60rpx;
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
			.correct {
				.option-num{
					background: #50C341;
					color: #fff;
					border: 0;
				}
			}
			.wrong {
				.option-num{
					background: #FF5A5A;
					color: #fff;
					border: 0;
				}
			}
		}
		
		.teacherword-anlysis{
			.line-block{
				display: block;
				margin-bottom: 28rpx;
				.correct{
					color:#50C341;
				}
				.wrong{
					color:#FF5A5A;
				}
				.answer-title{ 
					margin-right: 10rpx;
				}
				.title{
					margin-left: -16rpx;
					color: #FF7800;
					margin-right: 10rpx;
				}
			} 
			.anlysis{
				margin-top: 61rpx;
				.line-block{
					margin-bottom: 50rpx;
				}
			}
		}
	}
</style>
