<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>


<style lang="scss">
	/************************************************************
	** 请将全局样式拷贝到项目的全局 CSS 文件或者当前页面的顶部 **
	** 否则页面将无法正常显示                                  **
	************************************************************/
	@import '@/static/icon/iconfont.css';
	html {
	  font-size: 16px;
	}
	
	body {
	  margin: 0;
	  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
	    'Droid Sans', 'Helvetica Neue', 'Microsoft Yahei', sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	view,
	image,
	text {
	  box-sizing: border-box;
	  flex-shrink: 0;
	}
	
	#app {
	  width: 100vw;
	  height: 100vh;
	}
	.card-title {
	display: flex;
	font-weight: bold;
	font-size: 14px;
	line-height: 28px;
	color: #000;;
	}
	.ok {
	text-align: right;
	color: #0a9f3a;
	font-size: 13px;
	font-weight: bold;
	}
	.row {
	color: rgba(0,0,0,0.6);
	font-size: 13px;
	line-height: 26px;
	font-weight: bold;
	}
	.wait {
	text-align: right;
	color: rgba(0,0,0,0.6);
	font-size: 13px;
	font-weight: bold;
	}
	.bold {
	font-weight: bold;
	}
	.actions {
	display: flex;
	flex-direction: row-reverse;
	margin-top: 6px;
	}
	.g{
	color: #0a9f3a;
	}
	.base_btn{
		background-color: #1e60ff;
		color: #fff;
		border-radius: 4rpx;
		font-weight: bold;
		font-size: 28rpx;
		padding: 14rpx 34rpx;
	}
	.text-wrapper_2 {
	    margin: 40rpx 30rpx 0;
	    padding: 29rpx 0;
	    background-color: #1e60ff;
	    border-radius: 50rpx;
		position: fixed;
		bottom: 60rpx;
		left: 30rpx;
		right: 30rpx;
		z-index: 999;
	    .text_8 {
	      color: #ffffff;
	    }
	  }
	
	.flex-row {
	  display: flex;
	  flex-direction: row;
	}
	
	.flex-col {
	  display: flex;
	  flex-direction: column;
	}
	
	.justify-start {
	  justify-content: flex-start;
	}
	
	.justify-end {
	  justify-content: flex-end;
	}
	
	.justify-center {
	  justify-content: center;
	}
	
	.justify-between {
	  justify-content: space-between;
	}
	
	.justify-around {
	  justify-content: space-around;
	}
	
	.justify-evenly {
	  justify-content: space-evenly;
	}
	
	.items-start {
	  align-items: flex-start;
	}
	
	.items-end {
	  align-items: flex-end;
	}
	
	.items-center {
	  align-items: center;
	}
	
	.items-baseline {
	  align-items: baseline;
	}
	
	.items-stretch {
	  align-items: stretch;
	}
	
	.self-start {
	  align-self: flex-start;
	}
	
	.self-end {
	  align-self: flex-end;
	}
	
	.self-center {
	  align-self: center;
	}
	
	.self-baseline {
	  align-self: baseline;
	}
	
	.self-stretch {
	  align-self: stretch;
	}
	
	.flex-1 {
	  flex: 1 1 0%;
	}
	
	.flex-auto {
	  flex: 1 1 auto;
	}
	
	.grow {
	  flex-grow: 1;
	}
	
	.grow-0 {
	  flex-grow: 0;
	}
	
	.shrink {
	  flex-shrink: 1;
	}
	
	.shrink-0 {
	  flex-shrink: 0;
	}
	
	.relative {
	  position: relative;
	}
	
	.ml-2 {
	  margin-left: 2rpx;
	}
	
	.mt-2 {
	  margin-top: 2rpx;
	}
	
	.ml-4 {
	  margin-left: 4rpx;
	}
	
	.mt-4 {
	  margin-top: 4rpx;
	}
	
	.ml-6 {
	  margin-left: 6rpx;
	}
	
	.mt-6 {
	  margin-top: 6rpx;
	}
	
	.ml-8 {
	  margin-left: 8rpx;
	}
	
	.mt-8 {
	  margin-top: 8rpx;
	}
	
	.ml-10 {
	  margin-left: 10rpx;
	}
	
	.mt-10 {
	  margin-top: 10rpx;
	}
	
	.ml-12 {
	  margin-left: 12rpx;
	}
	
	.mt-12 {
	  margin-top: 12rpx;
	}
	
	.ml-14 {
	  margin-left: 14rpx;
	}
	
	.mt-14 {
	  margin-top: 14rpx;
	}
	
	.ml-16 {
	  margin-left: 16rpx;
	}
	
	.mt-16 {
	  margin-top: 16rpx;
	}
	
	.ml-18 {
	  margin-left: 18rpx;
	}
	
	.mt-18 {
	  margin-top: 18rpx;
	}
	
	.ml-20 {
	  margin-left: 20rpx;
	}
	
	.mt-20 {
	  margin-top: 20rpx;
	}
	
	.ml-22 {
	  margin-left: 22rpx;
	}
	
	.mt-22 {
	  margin-top: 22rpx;
	}
	
	.ml-24 {
	  margin-left: 24rpx;
	}
	
	.mt-24 {
	  margin-top: 24rpx;
	}
	
	.ml-26 {
	  margin-left: 26rpx;
	}
	
	.mt-26 {
	  margin-top: 26rpx;
	}
	
	.ml-28 {
	  margin-left: 28rpx;
	}
	
	.mt-28 {
	  margin-top: 28rpx;
	}
	
	.ml-30 {
	  margin-left: 30rpx;
	}
	
	.mt-30 {
	  margin-top: 30rpx;
	}
	
	.ml-32 {
	  margin-left: 32rpx;
	}
	
	.mt-32 {
	  margin-top: 32rpx;
	}
	
	.ml-34 {
	  margin-left: 34rpx;
	}
	
	.mt-34 {
	  margin-top: 34rpx;
	}
	
	.ml-36 {
	  margin-left: 36rpx;
	}
	
	.mt-36 {
	  margin-top: 36rpx;
	}
	
	.ml-38 {
	  margin-left: 38rpx;
	}
	
	.mt-38 {
	  margin-top: 38rpx;
	}
	
	.ml-40 {
	  margin-left: 40rpx;
	}
	
	.mt-40 {
	  margin-top: 40rpx;
	}
	
	.ml-42 {
	  margin-left: 42rpx;
	}
	
	.mt-42 {
	  margin-top: 42rpx;
	}
	
	.ml-44 {
	  margin-left: 44rpx;
	}
	
	.mt-44 {
	  margin-top: 44rpx;
	}
	
	.ml-46 {
	  margin-left: 46rpx;
	}
	
	.mt-46 {
	  margin-top: 46rpx;
	}
	
	.ml-48 {
	  margin-left: 48rpx;
	}
	
	.mt-48 {
	  margin-top: 48rpx;
	}
	
	.ml-50 {
	  margin-left: 50rpx;
	}
	
	.mt-50 {
	  margin-top: 50rpx;
	}
	
	.ml-52 {
	  margin-left: 52rpx;
	}
	
	.mt-52 {
	  margin-top: 52rpx;
	}
	
	.ml-54 {
	  margin-left: 54rpx;
	}
	
	.mt-54 {
	  margin-top: 54rpx;
	}
	
	.ml-56 {
	  margin-left: 56rpx;
	}
	
	.mt-56 {
	  margin-top: 56rpx;
	}
	
	.ml-58 {
	  margin-left: 58rpx;
	}
	
	.mt-58 {
	  margin-top: 58rpx;
	}
	
	.ml-60 {
	  margin-left: 60rpx;
	}
	
	.mt-60 {
	  margin-top: 60rpx;
	}
	
	.ml-62 {
	  margin-left: 62rpx;
	}
	
	.mt-62 {
	  margin-top: 62rpx;
	}
	
	.ml-64 {
	  margin-left: 64rpx;
	}
	
	.mt-64 {
	  margin-top: 64rpx;
	}
	
	.ml-66 {
	  margin-left: 66rpx;
	}
	
	.mt-66 {
	  margin-top: 66rpx;
	}
	
	.ml-68 {
	  margin-left: 68rpx;
	}
	
	.mt-68 {
	  margin-top: 68rpx;
	}
	
	.ml-70 {
	  margin-left: 70rpx;
	}
	
	.mt-70 {
	  margin-top: 70rpx;
	}
	
	.ml-72 {
	  margin-left: 72rpx;
	}
	
	.mt-72 {
	  margin-top: 72rpx;
	}
	
	.ml-74 {
	  margin-left: 74rpx;
	}
	
	.mt-74 {
	  margin-top: 74rpx;
	}
	
	.ml-76 {
	  margin-left: 76rpx;
	}
	
	.mt-76 {
	  margin-top: 76rpx;
	}
	
	.ml-78 {
	  margin-left: 78rpx;
	}
	
	.mt-78 {
	  margin-top: 78rpx;
	}
	
	.ml-80 {
	  margin-left: 80rpx;
	}
	
	.mt-80 {
	  margin-top: 80rpx;
	}
	
	.ml-82 {
	  margin-left: 82rpx;
	}
	
	.mt-82 {
	  margin-top: 82rpx;
	}
	
	.ml-84 {
	  margin-left: 84rpx;
	}
	
	.mt-84 {
	  margin-top: 84rpx;
	}
	
	.ml-86 {
	  margin-left: 86rpx;
	}
	
	.mt-86 {
	  margin-top: 86rpx;
	}
	
	.ml-88 {
	  margin-left: 88rpx;
	}
	
	.mt-88 {
	  margin-top: 88rpx;
	}
	
	.ml-90 {
	  margin-left: 90rpx;
	}
	
	.mt-90 {
	  margin-top: 90rpx;
	}
	
	.ml-92 {
	  margin-left: 92rpx;
	}
	
	.mt-92 {
	  margin-top: 92rpx;
	}
	
	.ml-94 {
	  margin-left: 94rpx;
	}
	
	.mt-94 {
	  margin-top: 94rpx;
	}
	
	.ml-96 {
	  margin-left: 96rpx;
	}
	
	.mt-96 {
	  margin-top: 96rpx;
	}
	
	.ml-98 {
	  margin-left: 98rpx;
	}
	
	.mt-98 {
	  margin-top: 98rpx;
	}
	
	.ml-100 {
	  margin-left: 100rpx;
	}
	
	.mt-100 {
	  margin-top: 100rpx;
	}
</style>

