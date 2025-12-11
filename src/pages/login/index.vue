<template>
	<view class="content">
		<view class="image-wrapper">
			<image
			class="image"
			src="/static/logo.png"
			/>
		</view>
	    <view class="title">国泰科技</view>
		<view class="uni-form-item uni-column">
			<input type="number" maxlength="11" class="uni-input" name="" placeholder="请输入手机号" />
		</view>
		<view class="uni-form-item uni-column">
			<input type="text" @input="maskPwd" class="uni-input" name="" placeholder="请输入密码" />
		</view>
		<button type="primary" @click="goTrucker">登陆</button>
		<view class="links"><view @tap="gotoForgetPassword">忘记密码？</view><view>|</view><view class="link-highlight" @tap="gotoRegistration">注册账号</view></view>
	</view>
</template>

<script>
	import { login } from '@/api/index';
	import dayjs from 'dayjs';
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			console.log(dayjs().format('YYYY-MM-DD'));
		},
		methods: {
			async login(){
				await login({
					phone: '1233',
					password: '1233'
				})
			},
			goTrucker(){
				this.login()
				// uni.navigateTo({url: '/pages/truckDriver/index'});
			},
			gotoRegistration () {
				uni.navigateTo({url: '/pages/login/registration/index'});
			},
			gotoForgetPassword () {
				uni.navigateTo({url: '/pages/login/forget-password/index'});
			},
			maskPwd(e){
				const len = (e && e.detail && typeof e.detail.value === 'string') ? e.detail.value.length : 0;
				return '*'.repeat(len);
			}
		}
	}
</script>

<style lang="scss" scoped>
	$color-primary: #1e60ff;
	
	.content{
		padding: 40upx;  
		.image-wrapper {
			filter: drop-shadow(0rpx 10rpx 15rpx #94b9e366);
			border-radius: 50%;
			width: 220rpx;
			margin: 280rpx auto 0;
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
		.title {
			width: 100%;
			margin: 80rpx 0 120rpx;
			color: #181f32;
			font-size: 44rpx;
			font-weight: 500;
			line-height: 62rpx;
			text-align: center;
		}
	}

	.logo{
	    text-align: center;
		image{
		    height: 200upx;
		    width: 200upx;
		    margin: 0 0 60upx;
		}
	}
	.uni-form-item{
		margin-bottom: 40upx;
		padding: 0;
		border-bottom: 1px solid #e3e3e3;
		.uni-input{
			font-size: 30upx;
			padding: 7px 0;
		}
	}
	button[type="primary"]{
		background-color: $color-primary;
		border-radius: 4upx;
		font-size: 34upx;
		margin-top: 60upx;
	}
	.links{
		text-align: center;
		margin-top: 40upx;
		font-size: 26upx;
		color: #999;
		view{
			display: inline-block;
			vertical-align: top;
			margin: 0 10upx;
		}
		.link-highlight{
			color: $color-primary
		}
	}
</style>
