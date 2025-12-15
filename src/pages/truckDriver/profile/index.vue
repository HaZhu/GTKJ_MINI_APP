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
      <uni-list-item thumbSize="sm"  title="退出登录" showArrow></uni-list-item>
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
    console.log()
    if(usreInfo){
      let _userinfo = JSON.parse(usreInfo);
      this.userInfo = _userinfo;
    }
  },
  methods: {
    toVehicleAuth(){
       uni.navigateTo({
          url: '/pages/shengfenrenzheng/index'
        })
      // if(this.userInfo.auditstatus === 0){
      //   uni.navigateTo({
      //     url: '/pages/shengfenrenzheng/index'
      //   })
      //   return
      // }
      // uni.navigateTo({
      //   url: '/pages/truckDriver/vehicleAuth/index'
      // })
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
