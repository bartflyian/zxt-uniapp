<template>
	<view class="answer-input">
		<view class="question">{{data.question}}</view>
		<view class="options" v-if="(data.type == 1 || data.type == 2) && data.options && data.options.length > 0">
			<view class="option" v-for="(answer,index) in data.options" :key="index" @click="selectOption(index)" 
				:class="{'selected':selectedOption[index],'correct':correctOption[index],'wrong':wrongOption[index]}">
				<view class="option-num">{{computedOptionNum(index)}}</view>
				<view class="option-answer">{{answer}}</view>
			</view>
		</view>
		<view class="jieda-answer" v-if="status == 'notdeal' && (data.type == 3 || data.type == 4)">
			<view class="answer-upload answer-by-input" :class="{'inputing':inputType == 1,'unwrite':inputType == 2}" @click="changeInputType(1)">
				<text class="title" v-if="inputType != 1">直接填写答案</text>
				<input class="uni-input" ref="answerinput" :focus="inputType == 1?true:false" @input="onKeyInput" placeholder="输入答案" v-if="inputType == 1" @blur='resetInputType()' />
			</view>
			<view class="answer-upload answer-by-img" :class="{'unwrite':inputValue != ''}" v-if="inputType != 2" @click="changeInputType(2)">
				<text class="title">拍照上传答案</text>
			</view>
			<view class="answer-img" v-if="inputType == 2">
				返回图片
			</view>
		</view> 
		<view class="jieda-answer-noreview" v-if="status != 'notdeal' && (data.type == 3 || data.type == 4)"> 
			<text class="title">【填写答案】</text>
			<text class="answer">{{data.studentAnswer.answer == '' ? "未作答" : data.studentAnswer.answer}}</text>
		 </view>
		<view class="teacherword-anlysis" v-if="status == 'haveReview' && data.type != 5">
			<view class="ifcorrect-pic" :class="{'correct':data.ifCorrect,'wrong':!data.ifCorrect}"></view>
			<view class="line-block">
				<text class="title">【老师批改】:</text>
				<text class="content">错误</text>
			</view>
			<view class="line-block">
				<text class="title">【老师评语】:</text>
				<text class="content"> 
				看清楚题目 </text>
			</view>
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
</template>

<script>
	export default {
		data() {
			return {
				inputType: 0, //解答题答案输入方式
				inputValue: '', //输入答案内容
				uploadImg: '',   //上传的图片
				optionStr: '',   //选择题答案
				selectedOption: [], //已选选项
				correctOption: [], //正确选项
				wrongOption: [],	//选错的选项
			};
		},
		props:["data","status"],
		mounted () { 
			this.data.options && this.data.options.length > 0 && this.data.options.forEach(item => {
				this.selectedOption.push(false);
				this.correctOption.push(false);
				this.wrongOption.push(false);
			});
			if(this.status == 'notdeal') {
				
			}else if(this.status == 'noReview') {
				if(this.data.type == 1 || this.data.type == 2){
					let studentAnswer = this.data.studentAnswer.answer; 
					studentAnswer != '' && studentAnswer.split('').forEach(item => {
						let optIndex = this.computedOptionIndex(item);
						this.selectedOption[optIndex] = true;
					});
				}
			}else if(this.status == 'haveReview') {
				if(this.data.type == 1 || this.data.type == 2){
					let studentAnswer = this.data.studentAnswer.answer; 
					let correctAnswer = this.data.correctAnswer;
					let correctArr = correctAnswer.split('');
					correctArr.forEach(item => {
						this.correctOption[this.computedOptionIndex(item)] = true;
					});
					//选错的选项 
					studentAnswer != '' && studentAnswer.split('').forEach(item => {
						let optIndex = this.computedOptionIndex(item);
						(this.correctOption[optIndex] == true) ? (this.wrongOption[optIndex] = false) : (this.wrongOption[optIndex] = true);
					});
				}
			}
		},
		methods:{
			changeInputType(type) {  //修改答案输入方式
				if(this.inputValue == '' || this.uploadImg == ''){
					this.inputType = type; 
				} 
			},
			onKeyInput(event) {  //绑定输入内容
				this.inputValue = event.target.value;
			},
			resetInputType() {	//重设答案输入状态  
				if(this.inputValue == '') {
					this.inputType = 0;
				}
			},
			selectOption(index) { //选择选项 
				if(this.status != 'notdeal') {
					return;
				}
				if(this.data.type == 1) {
					this.selectedOption.forEach((item,optIndex) => {
						if(index != optIndex){
							this.$set(this.selectedOption,optIndex,false);
						} 
					})
				}
				this.selectedOption[index] ? (this.$set(this.selectedOption,index,false)) : (this.$set(this.selectedOption,index,true)); 
				
				let answer = '';
				this.selectedOption.forEach((item,index) => {
					if(item) {
						let optStr = this.computedOptionNum(index);
						answer += optStr;
					}
				})
				this.optionStr = answer;
			},
			computedOptionNum(index) {  //返回大写选项号
				return String.fromCharCode(64 + parseInt(index+1));
			},
			computedOptionIndex(word){	//放回字母对应序号
				return word.toUpperCase().charCodeAt()-65;
			}
		},
		watch: {
			optionStr () {
				this.$emit('changeAnswer',{
					'type': 1,
					'id': this.data.id,
					'value': this.optionStr
				})
			},
			inputValue () {
				this.$emit('changeAnswer',{
					'type': 1,
					'id': this.data.id,
					'value': this.inputValue
				})
			},
			uploadImg () {
				this.$emit('changeAnswer',{
					'type': 2,
					'id': this.data.id,
					'value': this.uploadImg
				})
			}
		}
	}
</script>

<style lang="scss">
	.answer-input{
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
			.selected{
				.option-num{
					background: #FF9600;
					color: #fff;
					border: 0;
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
		.jieda-answer{
			margin: 80rpx auto 0 auto; 
		} 
		.answer-upload{
			margin-bottom: 60rpx;
			width:686rpx;
			height:100rpx;
			line-height: 100rpx;
			background:rgba(255,245,235,1);
			border:2px solid rgba(255,195,140,1);
			border-radius:20rpx;
			text-align: center;
			.title{
				font-size:16px; 
				color:rgba(255,120,0,1);
			}
		}
		.uni-input{
			margin-top: 24rpx;
		}
		.answer-by-input{
			
		}
		.inputing{
			background:rgba(250,250,251,1);
			border:2px solid rgba(229,233,239,1);
		}
		.unwrite{
			background:rgba(229,233,239,1);
			border:2px solid rgba(229,233,239,1); 
			.title{
				color: #BEC3CD;
			} 
		}
		
		.jieda-answer-noreview{
			margin: 80rpx auto 20rpx auto; 
			.title{
				display: block;
				width: 100%;
				color: #FF7800;
				margin-left: -12rpx;
			}
			.answer{
				display: block;
				margin-top: 30rpx;
				color: #323643;
			}
		}
		.teacherword-anlysis{
			font-size:13px;
			font-family:PingFang SC;
			font-weight:bold;
			color: #323643;
			line-height:26px;
			margin-left: -12rpx;
			position: relative;
			.line-block{
				.title{
					color: #FF7800;
					margin-right: 10rpx;
				}
				.content{
				
				}
			} 
			.ifcorrect-pic{
				position: absolute;
				right: 32rpx;
				top: 0rpx;
				width: 142rpx;
				height: 136rpx;
				&.correct{
					background: url(../../static/icon/icon-hdzq.png);
					background-size: 142rpx 136rpx;
				}
				&.wrong{
					background: url(../../static/icon/icon-hdcw.png);
					background-size: 142rpx 136rpx;
				}
			}
		}
	}
</style>
