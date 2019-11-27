<template>
	<view class='homework-box'>
		<view class='navTitle'>
			<view class='nav subject'><text class="title" @click="toggleNav(1)" :class="{'current':currentIndex == 1}">{{subjectSelect>-1?subjectSelectData[subjectSelect]:'选择科目'}}</text></view>
			<view class='nav process'><text class="title" @click="toggleNav(2)" :class="{'current':currentIndex == 2}">{{processSelect==1?'已完成':'待完成'}}</text></view>
		</view>
		<view class="select-box" v-show="currentIndex!=0">
			<view class="select-bg" @click="toggleNav(0)"></view>
			<view class="select-tab subject-select" v-show="currentIndex==1">
				<view class='btn' :class="{'is-select':subjectSelect == index}" v-for="(item,index) in subjectSelectData" :key="index" @click="subjectSelect = index">
					<text class="subject-btn">{{item}}</text>
				</view> 
			</view>
			<view class="select-tab process-select" v-show="currentIndex==2">
				<view class='btn' :class="{'is-select':processSelect == index}" v-for="(item,index) in processSelectData" :key="index" @click="processSelect = index">
					<text class="process-btn">{{item}}</text>
				</view> 
			</view>
		</view>
	
		<view class='homework-list'>
			<view class="homework-li" v-for="(item,index) in homeworkList" :key="index" @click="gotoDoHomework(item.type)">
				<text class="title">{{item.name}}</text><text class="if-review">{{item.status}}</text>
				<text class="time">开始时间: {{item.startTime}}&emsp;结束时间: {{item.endTime}}</text>
			</view> 
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 0,
				subjectSelectData: ['数学','语文','英语','物理','化学','生物'],
				processSelectData: ['待完成','已完成'],
				subjectSelect: -1,
				processSelect: -1,
				homeworkList: [
					{
						type:1,
						name: '数学第一章作业',
						status: '未提交',
						startTime: '2018-08-17',
						endTime:'2018-08-19'
						
					},
					{
						type:2,
						name: '数学第二章作业',
						status: '未批阅',
						startTime: '2018-08-17',
						endTime:'2018-08-19'
						
					},
					{
						type:3,
						name: '数学第三章作业',
						status: '已批阅',
						startTime: '2018-08-17',
						endTime:'2018-08-19'
						
					},
					{
						type:1,
						name: '数学第一章作业',
						status: '未提交',
						startTime: '2018-08-17',
						endTime:'2018-08-19'
						
					},
					{
						type:2,
						name: '数学第二章作业',
						status: '未批阅',
						startTime: '2018-08-17',
						endTime:'2018-08-19'
						
					},
					{
						type:3,
						name: '数学第三章作业',
						status: '已批阅',
						startTime: '2018-08-17',
						endTime:'2018-08-19'
						
					}
				]
			};
		},
		props: ['ifLoadMore'],
		mounted () { 
		},
		methods:{
			toggleNav (index) { //选择条件
				this.currentIndex = index;
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
			gotoDoHomework (type) { //跳转到做作业页面
				if(type == 1){
					uni.navigateTo({
						url: `/pages/learning/homework/do_homework`
					})
				}else if(type == 2){
					uni.navigateTo({
						url: `/pages/learning/homework/homework_no_review`
					})
				}else  if(type == 3){
					uni.navigateTo({
						url: `/pages/learning/homework/homework_have_review`
					})
				}
				
			}
		},
		watch: {
			ifLoadMore () {
				this.loadMore();
			}
		}
		
	}
</script>

<style lang="scss">
	$style-color: #FF7800;
	.homework-box{
		font-family:PingFang-SC-Bold;
		position: relative;
		height: 100%; 
		.navTitle{
			width: 100%;
			overflow: hidden;
			position: fixed;
			top: 166rpx;
			background: #fff;
			left: 0;
			z-index: 999;
			.nav{
				position: relative;
				width: 50%;
				float: left;
				text-align: center;
				font-size: 24rpx; 
				font-weight:bold;
				color:rgba(50,54,67,1);
				height: 88rpx;
				line-height: 88rpx; 
				.title{
					position: relative;
					&::before{
						content: '';
						position: absolute;
						top: 12rpx;
						right: -30rpx;
						width: 0;
						height: 0;
						border-width: 10rpx;
						border-style: solid;
						border-color: #BEC3CD transparent transparent transparent;
					}
					&.current{
						color: $style-color;
						&::before{
							transform: rotate(180deg);
							top: 0;
							border-color: $style-color transparent transparent transparent;
						}
					}
				}
			} 
		}
		.select-box{ 
			position: fixed;
			pointer-events: auto; 
			top: 254rpx;
			left: 0;
			width: 100%;
			height: 100%;
			overflow: hidden;
			z-index: 999;
			.select-bg {
				pointer-events: auto; 
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background:rgba(10, 10, 10, 0.5); 
			}
			.select-tab {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				background: #fff;
				z-index: 1000;
				display: flex;
				padding: 20rpx 32rpx;
				font-size: 12px;
				color: #323643;
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
		}
		.homework-list{
			width: 100%;  
			padding: 32rpx;   
			margin-top: 80rpx; 
			margin-bottom: 60rpx;
			.homework-li{
				width: 100%;
				border-radius:12px;
				height: 185rpx;
				box-shadow: 0 0 12px 0px rgba(128,128,128,0.2);
				position: relative;
				padding: 37rpx 33rpx;
				font-size: 12px;
				color: #878C9E;
				margin-bottom: 32rpx;
				.title{ 
					height:35rpx;
					font-size:18px;
					font-family:PingFang SC;
					font-weight:bold;
					color:rgba(50,54,67,1);
					line-height:42rpx;
					display: block;
				}
				.time{ 
					display: block;
					margin-top: 34rpx;
				}
				.if-review{
					float: right;
					margin-top: -36rpx;
					width: 120rpx;
					height: 44rpx; 
					line-height: 44rpx;
					font-size: 12px;
					color: #fff;
					background:linear-gradient(90deg,rgba(249,212,35,1) 0%,rgba(255,121,74,1) 100%);
					background: #c6cbd4;
					text-align: center;
					border-radius: 20px;
					.has-review{
						
					}
				} 
			}
		} 
	}
</style>
