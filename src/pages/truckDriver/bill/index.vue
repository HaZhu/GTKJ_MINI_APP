<template>
  <view>
    <view v-for="(item, i) in 1" :key="i">
      <uni-card :is-shadow="false">
        <view class="ok">正常</view>
        <view class="card-title">
           磅单编号：GTHNLSD-20251205-006
        </view>
        <view class="row">驾驶员名字：李显广</view>
        <view class="row">车牌号：新A22962D</view>
        <view class="row">手机号码：18995203555</view>
        <view class="row">供货单位：海南煤炭加工有限公司（老石旦洗煤厂）</view>
        <view class="row">收货单位：国能宁夏能源煤炭有限公司（大武口）</view>
        <view class="row">产品分类：混煤 规格：海混3200</view>
        <view class="row">销售计划编号：DX2025-02203</view>
        <view class="row">一次称重时间：2025-12-05 10:58:50</view>
        <view class="row">二次称重时间：2025-12-05 11:28:51</view>
        <view class="row">磅单生成时间：2025-12-05 11:28:51</view>
        <view class="row">质管站：老石旦质量管理站</view>
        <view class="row">毛重：66.45吨 皮重：18.60吨 净重：47.85吨</view>
        <view class="row">扣吨：0.00吨 涨亏：0.00吨</view>
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
        url: '/pages/truckDriver/billDetail/index'
      })
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
