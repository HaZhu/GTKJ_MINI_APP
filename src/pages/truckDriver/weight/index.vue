<template>
  <view>
    <view v-for="(item, i) in 5" :key="i">
      <uni-card :is-shadow="false">
        <view class="row">车牌号：新A22962D</view>
        <view class="row">识别号：新A22962D</view>
        <view class="row">重量：<text class="bold">66.45吨</text></view>
        <view class="row">磅房名称：老石旦煤矿北磅</view>
        <view class="row">称量类型：第二次称重</view>
        <view class="row">异常状态：正常</view>
        <view class="row">称重时间：2025-12-05 11:28:51</view>
        <view class="row">销售计划编号：DX2025-02203</view>
        <view class="row">供货单位：海南煤炭加工有限公司（老石旦洗煤厂）</view>
        <view class="row">收货单位：国能宁夏能源煤炭有限公司（大武口）</view>
        <view class="actions">
          <view class="base_btn" @click="goDetail">详情</view>
        </view>
      </uni-card>
    </view>
  </view>
</template>

<script>
export default {
  props:{
    listData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {

    };
  },
  methods: {
    goDetail(){
      uni.navigateTo({
        url: '/pages/truckDriver/weightDetail/index'
      })
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
