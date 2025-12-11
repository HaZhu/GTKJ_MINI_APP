<template>
  <view>
    <uni-card isShadow>
      <view style="display: flex; align-items: center">
       <View class="iconfont icon-sijitouxiang"></View>
        <view class="wrap_right">
          <view class="userName">张三</view>
          <view class="subtitle">手机号：13800000000</view>
          <view class="subtitle">车型：新A22962D</view>
          <view class="subtitle">车牌号：新A22962D</view>
        </view>
      </view>
    </uni-card>
    <uni-list>
      <uni-list-item thumbSize="sm" thumb="https://img.ooeli.site/chexiang.png"  title="车型认证" showArrow clickable @click="toVehicleAuth"></uni-list-item>
      <uni-list-item thumbSize="sm" thumb="https://img.ooeli.site/shezhi.png" title="设置密码" showArrow clickable @click="toSetPassword"></uni-list-item>
      <uni-list-item thumbSize="sm" thumb="https://img.ooeli.site/shiyongshuoming.png" title="过磅说明" showArrow clickable @click="toWeighInstructions"></uni-list-item>
      <uni-list-item thumbSize="sm" thumb="https://img.ooeli.site/tuichudenglu.png" title="退出登录" showArrow></uni-list-item>
    </uni-list>
  </view>
</template>

<script>
export default {
  data() {
    return {
      index: 4,
    };
  },
  methods: {
    toVehicleAuth(){
      uni.navigateTo({
        url: '/pages/truckDriver/vehicleAuth/index'
      })
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
    color: #000;
    margin-bottom: 10rpx;
  } 
  .subtitle{
    font-size: 12px;
    line-height: 20px;
    color: rgba(0,0,0,0.6);
  }
  ::v-deep .uni-list-item{
    height: 120px;
  } 
</style>
