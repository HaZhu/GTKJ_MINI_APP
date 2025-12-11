<template>
	<view class="flex-col justify-start relative page">
	  <view class="flex-col justify-start items-center image-wrapper">
	    <image
	      class="image"
	      src="/static/logo.png"
	    />
	  </view>
	  <text class="text">国泰科技</text>
	  <view class="group_2 ">
		<view v-if="!hasRead" @click="hasRead = true" class="noread"></view>
		<image
			v-if="hasRead"
			@click="hasRead = false"
			class="image_4 "
			src="/static/hasread.png"
		/>
	    <text class="font_3">我已阅读并同意</text>
	    <text class="font_4">《国泰科技隐私保护协议》</text>
	  </view>
	  <view   @click="goToNext" class="flex-col justify-start items-center text-wrapper"><text class="font_2 text_7">一键登录</text></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hasRead: false
			}
		},
		onLoad() {

		},
		methods: {
			goToNext() {
				if (!this.hasRead) {
					uni.showToast({
						title: '请先阅读并同意隐私保护协议',
						icon: 'none'
					});
					return;
				}
				// 跳转到下一个页面的逻辑
				uni.navigateTo({
					url: '/pages/Identitychose/index'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ml-21 {
	  margin-left: 21rpx;
	}
	.page {
	  background-color: #ffffff;
	  background-image: linear-gradient(180deg, #e4f0fe 0%, #ffffff 59.49%, #ffffff 100%);
	  width: 100%;
	  height: 100vh;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  .image-wrapper {
	    filter: drop-shadow(0rpx 10rpx 15rpx #94b9e366);
	    border-radius: 50%;
	    width: 220rpx;
		height: 220rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #ffffff;
	    .image {
	      width: 50%;
	      height: 50%;
	    }
	  }
	  .text {
	    color: #181f32;
	    font-size: 44rpx;
	    font-family: 'PingFang SC';
	    font-weight: 500;
	    line-height: 62rpx;
		text-align: center;
		margin: 60rpx 0;
	    width: 396rpx;
	  }
	  .font {
	    font-size: 28rpx;
	    font-family: 'PingFang SC';
	    line-height: 40rpx;
	  }
	  .noread{
		background-color: #ffffff;
		border-radius: 4rpx;
		width: 28rpx;
		height: 28rpx;
		border: solid 2rpx #dddddd;
		margin-right: 10rpx;
	  }
	  .image_4 {
	    width: 28rpx;
	    height: 28rpx;
		margin-right: 10rpx;
	  }
	  .group_2 {
	    line-height: 36rpx;
	    text-align: left;
	    width: 650rpx;
		position: relative;
		display: flex;
		margin-top: 300rpx;
		margin-bottom: 40rpx;
		justify-content: center;
		align-items:center;
		flex-wrap: wrap;
	    .font_3 {
	      font-size: 24rpx;
	      font-family: 'PingFang SC';
	      line-height: 36rpx;
	      color: #727a86;
	    }
	    .font_4 {
	      font-size: 24rpx;
	      font-family: 'PingFang SC';
	      line-height: 36rpx;
	      color: #1e60ff;
	    }
	  }
	  .text-wrapper {
	    padding: 29rpx 0;
	    background-color: #1e60ff;
	    border-radius: 50rpx;
	    width: 650rpx;
	    .text_7 {
	      color: #ffffff;
	    }
	  }
	  .font_2 {
	    font-size: 30rpx;
	    font-family: 'PingFang SC';
	    line-height: 42rpx;
	    font-weight: 500;
	  }
	}
</style>
