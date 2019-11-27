<template>
	<view class="enter-panel">
		<view class="panel-header" :style="{'background': bgColor}">
			<text class="title">{{panelTitle}}</text>
			<text class="more">查看更多</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:["bgColor","panelTitle"]
	}
</script>

<style lang="scss">
	.enter-panel{
		width: 686rpx;
		height: 300rpx;
		margin: 40rpx auto;
		background: #fff;
		border-radius: 10px;
		.panel-header{
			border-radius: 10px;
			height: 100rpx;
			color: #fff;
			.title{
				font-size: 17px;
				float: left;
				margin: 26rpx 0rpx 0 40rpx;
			}
			.more{
				font-size: 13px;
				float: right;
				margin: 48rpx 40rpx 0 0;
			}
		}
	}

</style>
