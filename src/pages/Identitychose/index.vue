<template>
  <view class="page">
    <view class="header">
      <text class="title">请选择您的身份</text>
      <text class="subtitle">不同身份将进入相应认证流程,认证后不可修改</text>
    </view>
    <view class="wrap">
      <view class="grid">
        <view
          class="card"
          v-for="item in roles"
          :key="item.key"
          @tap="choose(item)"
        >
          <image class="icon" :src="item.icon" mode="aspectFit"></image>
          <text class="card-title">{{ item.title }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Png1 from "@/static/jsy_icon.png";
import Png2 from "@/static/chezhu_icon.png";
import Png3 from "@/static/gys_icon.png";
import Png4 from "@/static/hy_icon.png";

export default {
  data() {
    return {
      roles: [
        {
          key: "driver",
          title: "驾驶员",
          desc: "上传本人身份证与驾驶证",
          icon: Png1,
          target: "/pages/shengfenrenzheng/index",
        },
        {
          key: "owner",
          title: "车主",
          desc: "车辆与证件认证",
          icon: Png2,
          target: "/pages/jiashizheng/index",
        },
        {
          key: "logistics",
          title: "物流公司",
          desc: "企业资质与资料",
          icon: Png3,
          target: "/pages/qiyerenzheng/index",
        },
        {
          key: "shipper",
          title: "收发货单位",
          desc: "单位基本信息与证明",
          icon: Png4,
          target: "/pages/qiyerenzheng/index",
        },
      ],
    };
  },
  methods: {
    choose(item) {
      if (item.target) {
        uni.navigateTo({ url: item.target });
      } else {
        uni.showToast({ title: "即将开放", icon: "none" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #f5f5f5;
  padding: 40rpx 30rpx;
  box-sizing: border-box;
}
.header {
  margin-bottom: 30rpx;
}
.title {
  display: block;
  font-size: 36rpx;
  line-height: 50rpx;
  font-weight: 600;
  color: #060d2b;
}
.subtitle {
  display: block;
  margin-top: 8rpx;
  font-size: 26rpx;
  line-height: 36rpx;
  color: #777d86;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 100rpx;
  margin-top: 100rpx;
  margin-bottom: 50rpx;
}
.card {
  background: #ffffff;
  width: 240rpx;
  height: 240rpx;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.icon {
  width: 88rpx;
  height: 88rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 44rpx;
  margin-bottom: 18rpx;
}
.card-title {
  font-size: 30rpx;
  line-height: 42rpx;
  font-weight: 600;
  color: #3a3d4b;
}


.wrap {
  display: flex;
  flex-direction: column;
  gap: 100rpx;
  justify-content: center;
  align-items: center;
}
</style>
