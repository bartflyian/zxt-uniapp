<template>
	<view class="course">
		<view class="subscribe">
			<view class="subs-li" v-for="(sub,index) in subscribeData" :key="index" @click="gotoSubscribeDetail()">
				<view class="course-img">
					<img src="../../../static/test/img-kec.png" alt="">
				</view>
				<view class="course-title">
					<text>{{sub.name}}</text>
					<view class="course-status">
						<text class="all-num">共{{sub.classNum}}节</text>
						<text class="have-learn">已学<text class="num">{{sub.haveLearn}}</text>节</text>
					</view>
				</view> 
				<view class="curse-more"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				subscribeData: [
					{
						subject: '语文',
						name: '千古涛声 长江',
						classNum: 3,
						haveLearn: 0,
						subImg: ''
					},
					{
						subject: '英语',
						name: 'hellow world',
						classNum: 4,
						haveLearn: 0,
						subImg: ''
					},
					{
						subject: '数学',
						name: '有理数',
						classNum: 3,
						haveLearn: 0,
						subImg: ''
					},
				]
			};
		},
		methods:{
			gotoSubscribeDetail () { //跳转到订阅课程详情
				uni.navigateTo({
					url: `/pages/learning/course/course_detail/course_detail`
				})
			}
		}
	}
</script>

<style lang="scss">
	.course{ 
		.subscribe{
			padding: 30rpx 32rpx;
			.subs-li{
				display: flex;
				margin-bottom: 32rpx;
				.course-img{
					img{
						width: 318rpx;
						height: 182rpx;
					}
				}
				.course-title{
					font-size: 13px; 
					margin: 30rpx 0 0 31rpx;
				}
				.course-status{
					margin-top: 50rpx;
					.all-num{
						background: #C6CBD4;
						font-size: 12px;
						color: #fff;
						border-radius: 50px;
						padding: 3px 8px;
					}
					.have-learn{
						font-size: 12px;
						margin-left: 20rpx;
						color: #C6CBD4;
						.num{
							color: #FF794A;
						}
					}
				}
			}
		} 
	}
</style>
