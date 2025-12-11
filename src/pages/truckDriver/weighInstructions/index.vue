<template>
  <view class="container">
    <uni-nav-bar color="#ffffff" backgroundColor="#1e60ff" fixed statusBar left-icon="left" title="过磅说明" @clickLeft="goBack" />
    <scroll-view class="content" scroll-y>
      <view class="section">
        <view class="h2">一、如何过磅？</view>
        <view class="p">车辆上磅后，停靠在前方蓝色磅头扫码箱边上，按照提示扫码，自动播报后，前方道闸打开闸，驶出磅台，完成一次自动称重。在进场时，需到岗到磅房办理人工手续。</view>
      </view>
      <view class="section">
        <view class="h2">二、车辆为何一定要停靠蓝色磅头？</view>
        <view class="p">蓝色磅头带有监控设备、原因车辆在旁自动识别车牌号，距离蓝色磅头太远，车号识别会出错，系统异常导致过磅。尤其是凌晨，绝对不能停在磅头后。</view>
      </view>
      <view class="section">
        <view class="h2">三、需要返回煤场增加或者减少运载货物如何办？</view>
        <view class="p">按照LED提示操作，系统会自动记录上一次过磅与二次过磅，以最后一次数据为准。</view>
      </view>
      <view class="section">
        <view class="h2">四、车辆为何需要弹性停止靠在磅石？</view>
        <view class="p">自动称重时，车辆要缓慢、悬停稳定不要踩刹车直到提示“称重自动”，称动画符等系统设定提醒为准，无法自动则要按提示，避免超时、排队；否则车辆下磅后需到磅房人工补录。</view>
      </view>
      <view class="section">
        <view class="h2">五、后车如何等待？</view>
        <view class="p">前车过磅时，后车在道闸后面三米外等待，等前车离开，道闸完全抬起后，再起步上磅。很多车辆会靠得太近，一起上磅导致磅重干扰、道闸撞杆，造成个人或设备经济损失。抢几秒钟的通过并不能缩短流程，反而可能给自己带来经济损失。</view>
      </view>
      <view class="section">
        <view class="h2">六、在磅台上为何要遵守LED操作提示？</view>
        <view class="p">站外计量主要是程序自动运行，严格遵守步骤能顺利完成过磅。程序不会也不知道驾驶员在想什么，有驾驶员犯规时，希望理解自动开闸，这不是不可能的，道闸不开闸只代表程序还未完成流程，而非你的想法。</view>
      </view>
      <view class="section">
        <view class="h2">七、发生二维码扫描错误如何办？</view>
        <view class="p">系统提示扫描二维码错误，请在手机App重新选择正确的二维码重新扫描，连续多次扫描错误，系统会自动识别，车辆下磅后工作人员处理。</view>
      </view>
      <view class="section">
        <view class="h2">八、发生重量错误该如何办？</view>
        <view class="p">轮轴在车辆停靠是否准确，车辆要缓停靠在磅石上，轮子不能与地规碰撞。如果发现称重不准，不能在磅台重复称重，在过坡时查看车号等信息是否准确并联系磅房人员，避免重复称重造成系统异常。</view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  methods: {
    goBack(){ uni.navigateBack(); }
  }
}
</script>

<style lang="scss" scoped>
.container { min-height: 100vh; background: #f5f5f5; }
.section { margin-bottom: 16px; padding: 12px; }
.h2 { font-size: 16px; font-weight: bold; color: #000; margin-bottom: 6px; }
.p { font-size: 13px; line-height: 22px; color: rgba(0,0,0,0.8); }
</style>
