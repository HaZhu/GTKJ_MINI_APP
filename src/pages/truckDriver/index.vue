<template>
  <view class="container">
    <uni-nav-bar color="#ffffff" backgroundColor="#1e60ff" fixed statusBar>
      <view class="title">抢单列表</view>
    </uni-nav-bar>

    <!-- 公共头部组件 -->
    <view class="header-section" :style="{ top: 44 + statusBarHeight + 'px' }">
      <!-- 搜索栏 -->
      <uni-search-bar
        v-if="active === 0 || active === 1 || active === 3"
        radius="100"
        v-model="fuzzyvalue"
        cancelButton="none"
        placeholder="搜索"
        @confirm="handleSearch"
        @clear="handleClear"
      />

      <!-- 车牌号提示 -->
      <view v-if="active === 0" class="plate-notice">
        <view class="plate"
          >当前车牌号：<text style="font-weight: bold">{{ carNumber }}</text></view
        >
        <view class="tip">（注：当前车牌号必须与实际车辆车牌号一致）</view>
      </view>

      <!-- 状态标签页 -->
      <view v-if="active === 1" class="tabs">
        <text
          v-for="(t, i) in tabs"
          :key="t"
          :class="['tab', { active: statusIndex === i }]"
          @click="statusIndex = i"
          >{{ t }}</text
        >
      </view>

      <!-- 日期选择器 -->
      <view v-if="active === 1 || active === 2 || active === 3" class="bar">
        <view class="daterangewrap">
          <uni-datetime-picker
            :border="false"
            v-model="range"
            :clear-icon="false"
            type="daterange"
            rangeSeparator="至"
          />
        </view>
        <view class="date">{{ date }} <text class="date_icon">▼</text></view>
      </view>

      <!-- 汇总信息 -->
      <view v-if="active === 3" class="summary">
        <view class="summary_wrap">
          <view class="item">毛重：<text class="bold">66.45吨</text></view>
          <view class="item">皮重：<text class="bold">18.60吨</text></view>
        </view>
        <view class="summary_wrap">
          <view class="item">净重：<text class="bold">47.85吨</text></view>
          <view class="item">车数：<text class="bold">1辆</text></view>
        </view>
      </view>

      <!-- 分页器 -->
      <view
        class="pager"
        v-if="active === 0 || active === 1 || active === 2 || active === 3"
      >
        <text class="prev" :class="{ active: page > 1 }" @click="prev">上一页</text>
        <text class="center"
          >第{{ page }}/{{ totalPage }}页, 共{{ total }}条</text
        >
        <text class="next" :class="{ active: page < totalPage }" @click="next">下一页</text>
      </view> 
    </view>
    <!-- 内容区域 -->
    <view class="content">
      <HomePage v-show="active === 0" :listData="homeList" />
      <RecordsPage v-show="active === 1" :listData="recordsList" />
      <WeightPage v-show="active === 2" :listData="weightList" />
      <BillPage v-show="active === 3" :listData="billList" />
      <ProfilePage v-show="active === 4" />
    </view>
    <view style="height: 80px" />
    <foo-bar :active="active" @toIndex="switchTab" />
  </view>
</template>

<script>
import fooBar from "@/components/fooBar/fooBar.vue";
import HomePage from "./home/index.vue";
import RecordsPage from "./records/index.vue";
import WeightPage from "./weight/index.vue";
import BillPage from "./bill/index.vue";
import ProfilePage from "./profile/index.vue";
import {GetOrderGrabbingList} from "@/api/truckDriver";
import {GetDriverMsg} from "@/api";
export default {
  components: {
    fooBar,
    HomePage,
    RecordsPage,
    WeightPage,
    BillPage,
    ProfilePage,
  },
  data() {
    return {
      active: 0,
      date: this.formatDate(new Date()),
      tabs: ["待审核", "待付款", "待完成", "已完成", "全部"],
      statusIndex: 4,

      fuzzyvalue: "",
      page: 1,
      totalPage: 0,
      total: 0,
      limit:3,

      statusBarHeight: 0,
      carNumber: "",
      homeList: [
        {
          title: "江西核工业建设有限公司",
          sendAddress: "内蒙古自治区乌海市乌达区黄白茨",
          receiveAddress: "内蒙古自治区乌海市海勃湾区煤炭加工中心",
          price: "8.00元/吨公里",
          distance: "10.00公里",
          startTime: "2025-12-05 00:00:00",
          endTime: "2025-12-05 23:59:59",
          product: "焦煤 规格：焦煤12#",
          planCode: "NX2025-00250_0433",
          saleCode: "NX2025-00250",
          planType: "内销",
          receiveUnit: "乌达煤炭加工公司",
          logisticsCompany: "江西核工业建设有限公司",
          remark: "—",
        },
      ],
      recordsList: [
        {
          time: "2025-12-05 16:38:15",
          state: "待审核",
          company: "江西核工业建设有限公司",
          sendAddress: "内蒙古自治区乌海市乌达区黄白茨",
          receiveAddress: "内蒙古自治区乌海市海勃湾区煤炭加工中心",
          price: "8.00元/吨公里",
          startTime: "2025-12-05 00:00:00",
          endTime: "2025-12-05 23:59:59",
          planCode: "NX2025-00250_0433",
          saleCode: "NX2025-00250",
          isWeighed: "是",
        },
      ],
      weightList: [
        {
          plateNumber: "新A22962D",
          identifyNumber: "新A22962D",
          weight: "66.45吨",
          poundName: "老石旦煤矿北磅",
          weighType: "第二次称重",
          abnormalStatus: "正常",
          weighTime: "2025-12-05 11:28:51",
          saleCode: "DX2025-02203",
          supplyUnit: "海南煤炭加工有限公司（老石旦洗煤厂）",
          receiveUnit: "国能宁夏能源煤炭有限公司（大武口）",
        },
      ],
      billList: [
        {
          billCode: "GTHNLSD-20251205-0061",
          status: "正常",
          driverName: "李显广",
          plateNumber: "新A22962D",
          phoneNumber: "18995203555",
          supplyUnit: "海南煤炭加工有限公司（老石旦洗煤厂）",
          receiveUnit: "国能宁夏能源煤炭有限公司（大武口）",
          product: "混煤 规格：海混3200",
          saleCode: "DX2025-02203",
          firstWeighTime: "2025-12-05 10:58:50",
          secondWeighTime: "2025-12-05 11:28:51",
          billGenerateTime: "2025-12-05 11:28:51",
          qualityStation: "老石旦质量管理站",
          grossWeight: "66.45吨",
          tareWeight: "18.60吨",
          netWeight: "47.85吨",
          deductionWeight: "0.00吨",
          profitLoss: "0.00吨",
        },
      ],
    };
  },
  onLoad(query) {
    const sys = uni.getSystemInfoSync && uni.getSystemInfoSync();
    this.statusBarHeight = sys && sys.statusBarHeight ? sys.statusBarHeight : 0;
  },
  onShow() {
    const pages = getCurrentPages()
    const current = pages[pages.length - 1]
    const query = current.options
    const map = { home: 0, records: 1, weight: 2, bill: 3, profile: 4 };
    if (query && query.tab && query.tab in map) this.active = map[query.tab];
    console.log(this.active)
    if(this.active === 0) this.getAutoOrderSettingList();
    const userInfo = uni.getStorageSync('userInfo');
    if(userInfo){
      let _userinfo = JSON.parse(userInfo);
      this.carNumber = _userinfo.carNumber;
    }
  },
  methods: {
    handleSearch() {
      this.page = 1; 
      this.updatePageData()
    },
    handleClear() {
      this.page = 1; 
      this.updatePageData()
    },
    switchTab(i) {
      this.active = i;
      this.updatePageData();
    },
    formatDate(d) {
      const y = d.getFullYear();
      const m = (d.getMonth() + 1 + "").padStart(2, "0");
      const day = (d.getDate() + "").padStart(2, "0");
      return `${y}-${m}-${day}`;
    },
    onDateChange(e) {
      this.date = e.detail.value;
    },
    prev() {
      if (this.page > 1) {
         this.page--;
         this.updatePageData()
      };
    },
    next() {
      if (this.page < this.totalPage){
         this.page++;
         this.updatePageData()
      }
    },
    updatePageData() {
      switch (this.active) {
        case 0:
          this.getAutoOrderSettingList();
          break;
        case 1:
          this.totalPage = 1;
          this.total = 6;
          break;
        case 2:
          this.totalPage = 1;
          this.total = 5;
          break;
        case 3:
          this.totalPage = 1;
          this.total = 1;
          break;
      }
    },
    async getAutoOrderSettingList() {
      const {data,statusCode} = await GetOrderGrabbingList({
        Limit:this.limit,
        Page:this.page,
        fuzzyvalue: this.fuzzyvalue
      })
      if(statusCode === 200){
        this.homeList = data.items;
        this.totalPage =  data.totalPage;
        this.total = data.totalRecord;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background: #f5f5f5;
}
::v-deep .uni-searchbar {
  padding-top: 20rpx;
}
.title {
  color: #ffffff;
  font-size: 32rpx;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-section {
  position: sticky;
  top: 44px;
  z-index: 100;
  background: #ffffff;
}
.content {
  min-height: calc(100vh - 160rpx - 44px);
}
.plate-notice {
  padding: 6px 12px;
  text-align: center;
  font-size: 26rpx;
  font-weight: bold;
}
.plate {
  color: #e53935;
}
.tip {
  color: #e53935;
}
.tabs {
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  background: #fff;
}
.tab {
  color: #666;
  font-size: 14px;
  padding: 6px 8px;
}
.tab.active {
  color: #1a73e8;
  font-weight: 700;
}
.bar {
  padding: 0px 12px;
  position: relative;
  height: 70rpx;
  display: flex;
  align-items: center;
}
.date {
  font-size: 28rpx;
  font-weight: bold;
}
.daterangewrap {
  position: absolute;
  height: 100%;
  width: 50%;
  top: 0;
  left: 0;
  z-index: 999;
}
::v-deep .uni-date-range {
  opacity: 0;
}
.date_icon {
  font-size: 18rpx;
  margin-left: 10rpx;
}
.summary {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0 20rpx;
}
.summary_wrap {
  display: flex;
  gap: 20rpx;
}
.summary_wrap .item {
  color: #000;
  font-size: 11px;
  font-weight: bold;
}
.pager {
  display: flex;
  justify-content: space-between;
  padding: 8px 12px 20px;
  width: 100%;
  font-size: 26rpx;
  .prev {
    color: rgba(0, 0, 0, 0.6);
    font-weight: bold;
    &.active{
      color: #1e60ff;
    }
  }
  .next {
    color: rgba(0, 0, 0, 0.6);
    font-weight: bold;
    &.active{
      color: #1e60ff;
    }
  }
  .center {
    color: #000;
    font-weight: bold;
  }
}
</style>
