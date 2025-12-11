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
			<input type="number" maxlength="11" v-model="phone" class="uni-input" name="" placeholder="请输入手机号" />
		</view>
		<view class="uni-form-item uni-column column-with-btn">
			<input type="text" class="uni-input" maxlength="4" name="" placeholder="请输入图片验证码" v-model="captchaImg" />
			<Captcha class="img-captcha" ref="captcha" @change="onCaptchaChange"></Captcha>
		</view>
		<view class="uni-form-item uni-column column-with-btn">
			<input type="number" maxlength="6" v-model="code" class="uni-input" name="" placeholder="请输入验证码" />
			<button :class="{active : !disableCodeBtn}" :disabled="disableCodeBtn" @tap="sendCode">{{codeBtn.text}}</button>
		</view>
		<view class="uni-form-item uni-column">
			<input type="text" @input="maskPwd" class="uni-input" name="" placeholder="请输入密码" />
		</view>
		<button type="primary" @click="handleRegister">注册</button>
		<view class="links">已有账号？<view class="link-highlight" @tap="gotoLogin">点此登陆</view></view>
	</view>
</template>

<script>
	import { AppRegisterForCode, AppRegister } from '@/api/index';
	import Captcha from "@/components/captcha/captcha.vue"
	import { isValidMobile } from '@/utils/index';
	export default {
		components: { Captcha },
		data() {
			return {
				captchaImg: '',
				rightCode: '',
				seconds: 60,
				phone: '',
				code: '',
				password: '',
				codeBtn: {
					text: '获取验证码',
					waitingCode: false,
					count: this.seconds
				}
			}
		},
		onLoad() {

		},
		methods: {
			onCaptchaChange(code) {
				this.rightCode = code
			},
			async handleRegister(){
				if(this.phone.length < 11 || this.code.length < 6 || this.password.length < 6){
					uni.showToast({ title: "请填写完整信息", icon: "error" });
					return;
				}
				const res = await AppRegisterForCode({
					mobile: this.phone,
					code: this.code,
					password: this.password
				})
			},
			async sendCode() {
				if (!isValidMobile(this.phone)) {
					uni.showToast({ title: "手机号格式错误", icon: "error" });
					return;
				}
				this.codeBtn.waitingCode = true;
				this.codeBtn.count = this.seconds;
				this.codeBtn.text = this.codeBtn.count + 's';
				AppRegister({ mobile: this.phone })
				let countdown = setInterval( () => {
					this.codeBtn.count--;
					this.codeBtn.text = this.codeBtn.count + 's';
					if( this.codeBtn.count < 0 ){
						clearInterval(countdown);
						this.codeBtn.text = '重新发送';
						this.codeBtn.waitingCode = false;
					}
				},1000);
			},
			gotoLogin() {
				uni.navigateTo({
					url: 'login'
				})
			},
			maskPwd(e){
				const len = (e && e.detail && typeof e.detail.value === 'string') ? e.detail.value.length : 0;
				this.password = e.detail.value;
				return '*'.repeat(len);
			}
		},
		computed: {
			disableCodeBtn (){
				return this.codeBtn.waitingCode || this.captchaImg.length < 4 || this.captchaImg.toLowerCase() !== this.rightCode.toLowerCase();
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
			margin: 120rpx auto 0;
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
		    margin: 0 0 40upx;
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
	.column-with-btn{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		button{
			font-size: 24upx;
			margin: 0;
			width: 180upx;
			text-align: center;
			&:after{
				border: none
			}
			&.active{
				background-color: $color-primary;
				color: $uni-text-color-inverse;
			}
		}
	}
	.img-captcha{
		width: 150upx;
		height: 60upx;
	}
	button[type="primary"]{
		background-color: $color-primary;
		border-radius: 0;
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
