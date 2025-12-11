<template>
  <view class="container">
    <uni-nav-bar color="#ffffff" backgroundColor="#1e60ff" fixed statusBar left-icon="left" title="磅单详情" @clickLeft="goBack" />
    <view class="content">
      <view class="row"><text class="label">驾驶员姓名：</text><text class="value">李显广</text></view>
      <view class="row"><text class="label">车牌号：</text><text class="value strong">新A22962D</text></view>
      <view class="row"><text class="label">手机电话：</text><text class="value strong">18995203555</text></view>
      <view class="row"><text class="label">供货单位：</text><text class="value">海南煤炭加工有限公司（老石旦洗煤厂）</text></view>
      <view class="row"><text class="label">收货单位：</text><text class="value">国能宁夏能源煤炭销售有限公司（大武口）</text></view>
      <view class="row"><text class="label">物流公司：</text><text class="value">天津渤达物流有限公司</text></view>
      <view class="row"><text class="label">产品分类：</text><text class="value">混煤</text></view>
      <view class="row"><text class="label">产品规格：</text><text class="value strong">海混3200</text></view>
      <view class="row"><text class="label">销售计划编号：</text><text class="value strong">DX2025-02203</text></view>
      <view class="row"><text class="label">计划类型：</text><text class="value">地销</text></view>
      <view class="row"><text class="label">一次称重时间：</text><text class="value strong">2025-12-05 10:58:50</text></view>
      <view class="row"><text class="label">二次称重时间：</text><text class="value strong">2025-12-05 11:28:51</text></view>
      <view class="row"><text class="label">磅单生成时间：</text><text class="value strong">2025-12-05 11:28:51</text></view>
      <view class="row"><text class="label">质管站：</text><text class="value">老石旦质量管理站</text></view>
      <view class="row"><text class="label">毛重：</text><text class="value strong">66.45吨</text></view>
      <view class="row"><text class="label">皮重：</text><text class="value strong">18.60吨</text></view>
      <view class="row"><text class="label">净重：</text><text class="value strong">47.85吨</text></view>
      <view class="row"><text class="label">扣吨：</text><text class="value">0.00吨</text></view>
      <view class="row"><text class="label">涨亏：</text><text class="value">0.00吨</text></view>
      <view class="row"><text class="label">状态：</text><text class="value ok">正常</text></view>
      <view class="row"><text class="label">磅单：</text></view>
      <image class="bill-img" :src="billImg" mode="widthFix" @click="preview(billImg)" />
      <view class="hint">点击查看图片，长按保存图片</view>
      <view class="row"><text class="label">磅单二维码：</text></view>
      <image class="qrcode" :src="qrcodeImg" mode="widthFix" @click="preview(qrcodeImg)" />
    </view>
  </view>
</template>

<script>
export default {
  data(){
    return {
      billImg: 'https://img.ooeli.site/bill-demo.png',
      qrcodeImg: 'https://img.ooeli.site/qrcode-demo.png'
    }
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    preview(url){
      uni.previewImage({
        current: url,
        urls: [url]
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.container { min-height: 100vh; background: #f5f5f5; }
.content { padding: 12px; }
.row { color: rgba(0,0,0,0.6); font-size: 12px; line-height: 22px; margin-bottom: 4px; }
.label { color: rgba(0,0,0,0.6); }
.value { color: #000; }
.strong { font-weight: bold; }
.ok { color: #0a9f3a; font-weight: bold; }
.bill-img { width: 100%; margin: 12px 0 4px; border-radius: 6px; background: #fff; }
.hint { text-align: center; color: #1e60ff; font-size: 12px; margin-bottom: 8px; }
.qrcode { width: 80%; margin: 8px auto 20px; display: block; background: #fff; padding: 12px; border-radius: 6px; }
</style>
