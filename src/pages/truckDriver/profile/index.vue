<template>
  <view>
    <uni-card isShadow>
      <view style="display: flex; align-items: center">
       <View class="iconfont icon-sijitouxiang"></View>
        <view class="wrap_right">
          <view class="userName">{{userInfo.username || '未知用户'}}</view>
          <view class="subtitle">手机号：{{userInfo.drivertel}}</view>
          <view class="subtitle">车型：{{userInfo.vehiclemodelid ? userInfo.vehiclemodelid : ''}}</view>
          <view class="subtitle">车牌号：{{userInfo.licenseno ? serInfo.licenseno : ''}}</view>
        </view>
      </view>
    </uni-card>
    <uni-list>
      <uni-list-item thumbSize="sm"   title="车型认证" showArrow clickable @click="toVehicleAuth"></uni-list-item>
      <uni-list-item thumbSize="sm" title="设置密码" showArrow clickable @click="toSetPassword"></uni-list-item>
      <uni-list-item thumbSize="sm" title="过磅说明" showArrow clickable @click="toWeighInstructions"></uni-list-item>
      <uni-list-item thumbSize="sm"  title="退出登录" showArrow @click="unLogin"></uni-list-item>
    </uni-list>
  </view>
</template>

<script>
export default {
  data() {
    return {
      index: 4,
      userInfo: {},
    };
  },
  mounted() {
    const usreInfo =  uni.getStorageSync('userInfo');
    if(usreInfo){
      let _userinfo = JSON.parse(usreInfo);
      this.userInfo = _userinfo;
    }
  },
  methods: {
    toVehicleAuth(){
      if(this.userInfo.auditstatus === 0){
        uni.navigateTo({
          url: '/pages/shengfenrenzheng/index'
        })
        return
      }
      if(this.userInfo.auditstatus === 1){
				uni.showToast({ title: '车辆认证中，请耐心等待审核', icon: "none" });
        return
      }
      if(this.userInfo.auditstatus === 2){
				uni.navigateTo({
          url: '/pages/truckDriver/vehicleAuth/index'
        })
        return
      }
       if(this.userInfo.auditstatus === 3){
				uni.navigateTo({
          url: '/pages/shengfenrenzheng/index?status=3'
        })
        return
      }
     
    },
    toWeighInstructions(){
      uni.navigateTo({
        url: '/pages/truckDriver/weighInstructions/index'
      })
    },
    toSetPassword(){
      uni.navigateTo({
        url: '/pages/truckDriver/setPassword/index'
      })
    },
    unLogin() {
      uni.removeStorageSync('userInfo');
      uni.reLaunch({
        url: '/pages/login/index'
      });
    }
  },
};
</script>

<style lang="scss" scoped>
  .icon-sijitouxiang{
    font-size: 100rpx;
    margin-right: 40rpx;
  }
  .userName{
    font-size: 32rpx;
    font-weight: bold;
    color: #000;
    margin-bottom: 10rpx;
  } 
  .subtitle{
    font-size: 12px;
    line-height: 20px;
    font-weight: bold;
    color: rgba(0,0,0,0.6);
  }
  ::v-deep .uni-list-item{
    height: 120px;
    font-weight: bold;
  } 
</style>
