<template>
  <view>
    <view v-for="(item, i) in listData" :key="i">
      <uni-card :is-shadow="false">
        <view class="card-title">{{item.client_name}}</view>
        <view class="row">发货地址：{{item.startprovince}} {{item.startcity}} {{item.startarea}} {{item.startpoint}}</view>
        <view class="row">收货地址：{{item.endprovince}} {{item.endcity}} {{item.endarea}} {{item.endpoint}}</view>
        <view class="row">里程：<text class="bold">{{item.mileage}}公里</text></view>
        <view class="row">运价：<text class="bold">{{item.unit}}元/吨</text></view>
        <view class="row g">开始时间：{{item.starttime}}</view>
        <view class="row g">结束时间：{{item.endtime}}</view>
        <view class="row">产品分类：{{item.coaltype_name}}</view>
        <view class="row">品种规格： {{item.coal}}</view>
        <view class="row">派车计划编号：{{item.code}}</view>
        <view class="row">销售计划编号：{{item.code ? item.code.split('_')[0]: ''}}</view>
        <view class="row">计划类型：{{item.business_name}}</view>
        <view class="row">发货单位：{{item.vender_name}}</view>
        <view class="row">收货单位：{{item.client_name}}</view>
        <view class="row">物流公司：{{item.trustlogisticsname ? item.trustlogisticsname : ''}}</view>
        <view class="row">备注：{{item.mark}}</view>
        <view class="actions">
           <view class="base_btn">抢单</view>
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
  onLoad() {},
  methods: {
  
  },
};
</script>

<style lang="scss" scoped>

</style>
