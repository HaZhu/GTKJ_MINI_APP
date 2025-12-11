<template>
  <view class="container">
    <uni-nav-bar color="#ffffff" backgroundColor="#1e60ff" fixed statusBar left-icon="left" title="称重表详情" @clickLeft="goBack" />
    <view class="content">
      <view class="row"><text class="label">车牌号：</text><text class="value strong">新A22962D</text></view>
      <view class="row"><text class="label">识别车号：</text><text class="value strong">新A22962D</text></view>
      <view class="row"><text class="label">重量：</text><text class="value strong">18.60吨</text></view>
      <view class="row"><text class="label">磅房名称：</text><text class="value">老石旦煤矿南磅</text></view>
      <view class="row"><text class="label">称重类型：</text><text class="value">第一次称重</text></view>
      <view class="row"><text class="label">异常状态：</text><text class="value">正常</text></view>
      <view class="row"><text class="label">称重时间：</text><text class="value">2025-12-05 10:58:50</text></view>
      <view class="row"><text class="label">销售计划编号：</text><text class="value strong">DX2025-02203</text></view>
      <view class="row"><text class="label">供货单位：</text><text class="value">海南煤炭加工有限公司（老石旦洗煤厂）</text></view>
      <view class="row"><text class="label">收货单位：</text><text class="value">国能宁夏能源煤炭有限公司（大武口）</text></view>
      <view class="row"><text class="label">物流公司：</text><text class="value">天津渤海物流有限公司</text></view>
      <view class="row"><text class="label">准备查询二维码：</text><text class="value">(14.80吨) (1/6)</text></view>
      <image class="photo" src="https://img.ooeli.site/truck-demo.jpg" mode="widthFix" />
      <view class="btn-wrap">
        <view class="base_btn" @click="viewMore">查看更多</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goBack() {
      uni.navigateBack();
    },
    viewMore() {
      uni.showToast({ title: '更多图片', icon: 'none' });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background: #f5f5f5;
}
.content {
  padding: 12px;
}
.row {
  color: rgba(0,0,0,0.6);
  font-size: 12px;
  line-height: 22px;
  margin-bottom: 4px;
}
.label { color: rgba(0,0,0,0.6); }
.value { color: #000; }
.strong { font-weight: bold; }
.photo {
  width: 100%;
  margin: 12px 0;
  border-radius: 6px;
}
.btn-wrap {
  display: flex;
  justify-content: center;
}
</style>
