<template>
	<view class="learn-page">
		<!-- 头部切换tab -->
		<view class="head-tab">
			<view class="tab" v-for='(tab,index) in headTabArr' :key='tab' :class="{'current':index == currentIndex}" @click="currentThis(index)">
				<text class="tab-title">{{tab}}</text>
			</view>
			<view class="wrong-topic-tools" v-if="currentIndex == 2">
				<text class="icon scan-icon" @click="scan"></text>
				<text class="icon delete-icon" @click="showDelete"></text>
				<text class="icon download-icon" @click="showDownload"></text>
			</view>
		</view>
		<!-- tab内容 -->
		<view class="tab-content">
			<Course v-if="currentIndex == 0"></Course>
			<Homework v-if="currentIndex == 1" :ifLoadMore="loadMoreHomeWork"></Homework>
			<Worntopic v-if="currentIndex == 2" :ifLoadMore="loadMoreWrongTest" :selectShow='wrongSelectShow' :selectType="selectType"
			@selectHide="selectHide"></Worntopic>
		</view>
	</view>
</template>

<script>
	import Course from './course/course.vue'
	import Homework from './homework/homework.vue'
	import Worntopic from './worngtopic/worngtopic.vue'
	export default {
	
		data() {
			return {
				headTabArr: ['订阅','作业','错题本'],
				currentIndex: 0,
				loadMoreHomeWork: true,
				loadMoreWrongTest: true,
				wrongSelectShow: false,
				selectType: 'delete',
			};
		},
		components:{
			Course,
			Homework,
			Worntopic
		},
		onShow: function () {
			let localCurrent = uni.getStorageSync('learnPage_current');
			this.currentThis( localCurrent == "" ? 0 : localCurrent);
		},
		onReachBottom () {
			if(this.currentIndex == 1) {
				this.loadMoreHomeWork = !this.loadMoreHomeWork;
			}else if(this.currentIndex == 2) {
				this.loadMoreWrongTest = !this.loadMoreWrongTest;
			}
		},
		methods: { 
			currentThis (index) {	//切换到此
				this.currentIndex = index;
			},
			scan () {	//调用扫描接口
				// 只允许通过相机扫码
				uni.scanCode({
				    onlyFromCamera: true,
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
				    }
				});
			},
			showDelete () {	 //显示删除选择页面
				this.wrongSelectShow = !this.wrongSelectShow;
				this.selectType = 'delete';
			},
			showDownload () {	//显示下载选择页面
				this.wrongSelectShow = !this.wrongSelectShow;
				this.selectType = 'download';
			},
			selectHide () {	//取消选择
				this.wrongSelectShow = false;
			}
		}
	}
</script>

<style lang="scss">
	.learn-page{
		height: 100%;
		.head-tab{ 
			overflow: hidden;
			position: fixed;
			z-index: 998;
			top: 88rpx;
			left: 0;
			background: #fff;
			width: 100%;
			padding: 20rpx 32rpx 0 32rpx;
			overflow:hidden;
			.tab{
				float: left;
				font-size: 14px; 
				min-width: 90rpx; 
				height: 58rpx;
				color: #878C9E;
				font-weight: 500;
				&.current{
					font-weight: bold;
					border-bottom: 2px solid #FF794A;
					color: #323643;
				}
			}
			.wrong-topic-tools{
				float: right;
				overflow: hidden;
				.icon {
					display: block;
					float:left;
					width: 40rpx;
					height: 40rpx; 
					margin-left: 60rpx;
				}
				.scan-icon{ 
					background: url(../../static/icon/scaning.png); 
					background-size: 40rpx 40rpx; 
				}
				.delete-icon{
					background: url(../../static/icon/delete.png); 
					background-size: 40rpx 40rpx; 
				}
				.download-icon{
					background: url(../../static/icon/download.png); 
					background-size: 40rpx 40rpx; 
				}
			}
		}
		.tab-content{
			height: 100%;
			padding-top: 88rpx;
		}
	}
</style>
