<template>
	<view class="btn">
		<slot>提交</slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.btn{ 
		margin: 0 auto;
		width: 90%;
		height:100rpx;
		background:linear-gradient(90deg,rgba(249,212,35,1) 0%,rgba(255,121,74,1) 100%);
		border-radius:50rpx;
		font-size:16px;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
		text-align: center;
		line-height: 100rpx;  
	}
</style>
