<template>
	<view class="course-detail">
		<view class="course-ad">
			<img src="../../../../static/test/ad1.jpg" alt="">
		</view>
		<view class="course-tab">
			<text class="tab-title">章节</text>
		</view>
		<view class="vedio-list">
			<view class="list-li" v-for="(item,index) in videoData" :key='index'>
				<text class="video-title">{{item.title}}</text>
			</view>
		</view>
		<view class="booking-btn">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				videoData: [
					{'title': '绝对值'},
					{'title': '相反数'},
					{'title': '有理数'},
				]
			};
		}
	}
</script>

<style lang="scss">
	.course-detail{
		.course-ad{
			width: 100%;
			img{
				width: 100%;
				height: 320rpx;
			}
		}
		.course-tab{
			border-top: 1px solid #F8F6FC;
			box-shadow: 0px 5px 8px 2px rgba(0,0,0,0.1);
			.tab-title{
				font-size: 13px;
				border-bottom: 2px solid #FF794A;
				margin: 0 32rpx;
				height: 25px;
				width: 40px;
				display: inline-block;
				text-align: center;
			}	
		}
		.vedio-list{
			padding: 20rpx 40rpx;
			.list-li{ 
				overflow: hidden;
				height: 120rpx;
				line-height: 120rpx;
				.video-title{
					font-size: 13px;
					&::before {
						margin-top: 40rpx;
						margin-right: 20rpx;
						content: '';
						width: 50rpx;
						height: 50rpx; 
						float: left;
						background: url(../../../../static/icon/video-fill.png);
						background-size: 50rpx 50rpx;
					}
				}
			} 
		} 
		.booking-btn{
			width: 88rpx;
			height: 88rpx;
			border-radius: 50%;
			background:linear-gradient(90deg,rgba(249,212,35,1) 0%,rgba(255,121,74,1) 100%);
			position: fixed;
			bottom: 80rpx;
			right: 44rpx; 
			&::before {
				content: '';
				position: absolute;
				width: 50rpx;
				height: 50rpx; 
				top: 18rpx;
				left: 20rpx;
				background: url(../../../../static/icon/add.png);
				background-size: 50rpx 50rpx;
			}
			&::after {
				content: '订阅';
				position: absolute;
				width: 50rpx;
				height: 50rpx; 
				bottom: -60rpx;
				left: 20rpx;  
				font-size: 12px;
				color: rgba(255,121,74,1);
			}
		}
	}

</style>
