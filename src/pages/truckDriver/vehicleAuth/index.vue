<template>
  <view class="container">
    <uni-nav-bar color="#ffffff" backgroundColor="#1e60ff" fixed statusBar left-icon="left" title="车辆认证" @clickLeft="goBack" />
    <view class="content">
      <view class="title">车主认证已通过</view>
      <view class="subtitle">快去抢单吧！</view>

      <view class="card">
        <view class="row">
          <view class="left">
            <view class="label">实名认证</view>
            <view class="desc">李显广 6402********001X</view>
          </view>
          <view class="right ok">已认证</view>
        </view>
        <view class="divider" />
        <view class="row">
          <view class="left">
            <view class="label">驾驶证信息</view>
            <view class="desc">有效期至 2025-11-26</view>
          </view>
          <view class="right ok">已认证</view>
        </view>
      </view>

      <view class="card">
        <view class="row">
          <view class="left">
            <view class="label">车辆信息</view>
            <view class="desc">新A22962D 重型半挂牵引车</view>
          </view>
          <view class="right ok">已认证</view>
        </view>
        <view class="action-line">
          <text class="link" @click="changeCar">更换车辆</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goBack() { uni.navigateBack(); },
    changeCar(){
      uni.showToast({ title: '更换车辆功能待接入', icon: 'none' })
    }
  }
}
</script>

<style lang="scss" scoped>
.container { min-height: 100vh; background: #f5f5f5; }
.content { padding: 16px; }
.title { font-size: 18px; font-weight: bold; color: #000; margin-top: 8px; }
.subtitle { color: rgba(0,0,0,0.6); font-size: 12px; margin: 6px 0 14px; }
.card { background: #fff; border-radius: 6px; padding: 12px; margin-bottom: 12px; }
.row { display: flex; align-items: center; justify-content: space-between; }
.left { display: flex; flex-direction: column; }
.label { color: #000; font-weight: bold; font-size: 14px; }
.desc { color: rgba(0,0,0,0.6); font-size: 12px; margin-top: 4px; }
.right { font-size: 12px; }
.ok { color: #0a9f3a; font-weight: bold; }
.divider { height: 1px; background: #eee; margin: 12px 0; }
.action-line { display: flex; justify-content: flex-end; margin-top: 6px; }
.link { color: #1e60ff; font-size: 12px; }
</style>
