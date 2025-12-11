<template>
	<view class="flex-col page">
	
	  <view class="flex-col section_2">
	    <view class="flex-row justify-evenly items-center group_2">
	      <image
	        class="image_6"
	        src="/static/has.png"
	      />
	      <view class="section_3"></view>
	      <image
	        class="image_6"
	        src="/static/no.png"
	      />
	      <view class="section_4"></view>
	      <image
	        class="image_6"
	        src="/static/no.png"
	      />
	    </view>
	    <view class="flex-row justify-center relative mt-16">
	      <text class="font pos_3">填写资料</text>
	      <text class="font_2">法人认证</text>
	      <text class="font_2 pos_4">联系人认证</text>
	    </view>
	  </view>
	  <view class="flex-col section_5">
	    <view class="flex-col">
	      <view class="flex-row justify-between group_3">
	        <text class="font_3">公司名称</text>
	        <text class="font_4">国泰科技有限公司</text>
	      </view>
	      <view class="flex-col">
	        <view class="flex-row justify-between group_1">
	          <text class="font_3">统一社会信用代码</text>
	          <text class="font_4">91330110MA27YR372M</text>
	        </view>
	        <view class="flex-row justify-between group_1">
	          <view class="flex-row self-center">
	            <text class="self-start font_3 text_3">客户投诉热线</text>
	          </view>
	          <text class="self-start font_5 text_4">1234567890</text>
	        </view>
	      </view>
	    </view>
	  </view>
	  <view class="flex-col section_6">
	    <view class="flex-col items-start group_8">
	      <text class="font_6">图像资料</text>
	      <text class="font_7 mt-10">证照需拍摄原件或复印件盖章，且在有效期内</text>
	    </view>
	    <view class="flex-row equal-division mt-25">
	       <view class="flex-col group_9 equal-division-item ml-2">
	        <view class="flex-col justify-start items-center self-stretch section_7" @tap="chooseLicense">
	          <view class="flex-col justify-start items-center image-wrapper_2">
	            <template v-if="licenseImg">
	              <image class="preview" :src="licenseImg" mode="aspectFill" />
	            </template>
	            <template v-else>
	              <image
	                class="image_9"
	                src="/static/sf_2.png"
	              />
	            </template>
	          </view>
	        </view>
	        <text class="self-center font_8 mt-10">营业执照</text>
	      </view>
	      <view class="flex-col group_9 equal-division-item ml-2">
	        <view class="flex-col justify-start items-center self-stretch section_7" @tap="chooseOffice">
	          <view class="flex-col justify-start items-center image-wrapper_2">
	            <template v-if="officeImg">
	              <image class="preview" :src="officeImg" mode="aspectFill" />
	            </template>
	            <template v-else>
	              <image
	                class="image_9"
	                src="/static/sf_2.png"
	              />
	            </template>
	          </view>
	        </view>
	        <text class="self-center font_8 mt-10">办公场地照片</text>
	      </view>
	    </view>
	  </view>
	  
	  <view class="flex-col justify-start items-center text-wrapper_2" @click="nextPage"><text class="font_3 text_8">提交认证</text></view>
	</view>
</template>

<script>
	export default {
	  components: {},
	  props: {},
	  data() {
	    return {
	      licenseImg: '',
	      officeImg: ''
	    };
	  },
	
	  methods: {
	    chooseLicense() {
	      uni.chooseImage({
	        count: 1,
	        sizeType: ['compressed'],
	        sourceType: ['album', 'camera'],
	        success: (res) => {
	          const path = (res.tempFilePaths && res.tempFilePaths[0]) || (res.tempFiles && res.tempFiles[0] && (res.tempFiles[0].path || res.tempFiles[0].tempFilePath));
	          if (path) this.licenseImg = path;
	        }
	      });
	    },
	    chooseOffice() {
	      uni.chooseImage({
	        count: 1,
	        sizeType: ['compressed'],
	        sourceType: ['album', 'camera'],
	        success: (res) => {
	          const path = (res.tempFilePaths && res.tempFilePaths[0]) || (res.tempFiles && res.tempFiles[0] && (res.tempFiles[0].path || res.tempFiles[0].tempFilePath));
	          if (path) this.officeImg = path;
	        }
	      });
	    },
		
	    nextPage() {
	      uni.showToast({
	        title: '认证提交成功',
				icon: 'none',
					duration: 2000
	      });
	    }
	  },
	};
</script>

<style lang="scss" scoped>
	.mt-25 {
	  margin-top: 25rpx;
	}
	.page {
	  background-color: #f5f5f5;
	  width: 100%;
	  overflow-y: auto;
	  overflow-x: hidden;
	  height: 100%;
	  .section_2 {
	    padding: 40rpx 16rpx 35rpx 28rpx;
	    background-color: #ffffff;
	    .group_2 {
	      padding: 0 32rpx;
	      .image_6 {
	        border-radius: 50%;
	        width: 32rpx;
	        height: 32rpx;
	      }
	      .section_3 {
	        background-color: #1e60ff;
	        width: 267rpx;
	        height: 2rpx;
	      }
	      .section_4 {
	        background-color: #d6dde8;
	        width: 267rpx;
	        height: 2rpx;
	      }
	    }
	    .pos_3 {
	      position: absolute;
	      left: 0;
	      top: 50%;
	      transform: translateY(-50%);
	    }
	    .font_2 {
	      font-size: 24rpx;
	      font-family: 'PingFang SC';
	      line-height: 33rpx;
	      color: #aab1bb;
	    }
	    .pos_4 {
	      position: absolute;
	      right: 0;
	      top: 50%;
	      transform: translateY(-50%);
	    }
	  }
	  .section_5 {
	    margin-top: 19rpx;
	    background-color: #ffffff;
	    border-top: solid 1rpx #e5e5e5;
	    .group_3 {
	      padding: 28rpx 30rpx;
	      border-bottom: solid 1rpx #e5e5e5;
	    }
	    .group_1 {
	      padding: 28rpx 29rpx 28rpx 30rpx;
	      border-bottom: solid 1rpx #e5e5e5;
	    }
	    .font_3 {
	      font-size: 30rpx;
	      font-family: 'PingFang SC';
	      line-height: 42rpx;
	      color: #3a3d4b;
	    }
	    .font_4 {
	      font-size: 30rpx;
	      font-family: 'PingFang SC';
	      line-height: 42rpx;
	      color: #060d2b;
	    }
	    .group_4 {
	      padding: 25rpx 30rpx 9rpx;
	      border-bottom: solid 1rpx #e5e5e5;
	      .text_3 {
	        margin-top: 3rpx;
	      }
	      .text-wrapper {
	        padding: 12rpx 0;
	        background-color: #000000cc;
	        border-radius: 32rpx;
	        height: 64rpx;
	        .text_5 {
	          margin: 0 22rpx;
	          color: #ffffff;
	          font-size: 28rpx;
	          font-family: 'PingFang SC';
	          line-height: 40rpx;
	        }
	      }
	      .text_4 {
	        margin-top: 3rpx;
	      }
	    }
	    .font_5 {
	      font-size: 30rpx;
	      font-family: 'PingFang SC';
	      line-height: 42rpx;
	      color: #aab1bb;
	    }
	    .group_5 {
	      padding: 0 30rpx 33rpx;
	      .group_6 {
	        padding: 28rpx 0;
	        border-bottom: solid 1rpx #e5e5e5;
	        .image_7 {
	          width: 13rpx;
	          height: 24rpx;
	        }
	      }
	      .text_6 {
	        line-height: 50rpx;
	        text-align: left;
	      }
	    }
	  }
	  .section_6 {
	    margin-top: 20rpx;
	    padding: 34rpx 0 35rpx;
	    background-color: #ffffff;
	    .equal-division {
	      padding: 0 14rpx;
	      .group_9 {
	        flex: 1 1 360rpx;
	        .image-wrapper {
	          height: 150rpx;
	          border-radius: 8rpx;
	          background-image: url('/static/cd_bg.png');
	          background-size: 100% 100%;
	          background-repeat: no-repeat;
	          display: flex;
	          align-items: center;
	          justify-content: center;
	          overflow: hidden;
	          .image_8 {
	            width: 44rpx;
	            height: 44rpx;
	          }
	        }
	      }
	      .equal-division-item {
	        padding-left: 16rpx;
	        padding-right: 14rpx;
	      }
	    }
	  }
	  .group_8 {
	    padding: 0 30rpx;
	    .font_7 {
	      font-size: 24rpx;
	      font-family: 'PingFang SC';
	      line-height: 33rpx;
	      color: #777d86;
	    }
	  }
	  .section_7 {
	    padding: 20rpx 0;
	    background-color: #f5f5f5;
	    border-radius: 8rpx;
	    .image-wrapper_2 {
	      height: 150rpx;
	      background-image: url('/static/cd_bg.png');
	      background-position: 0% 0%;
	      background-size: 100% 100%;
	      background-repeat: no-repeat;
	      width: 270rpx;
	      display: flex;
	      align-items: center;
	      justify-content: center;
	      overflow: hidden;
	    }
	    .section_9 {
	      padding: 10rpx 0;
	      background-image: url('/static/sf_bg.png');
	      background-position: 0% 0%;
	      background-size: 100% 100%;
	      background-repeat: no-repeat;
	      width: 270rpx;
	      .section_10 {
	        margin: 0 10rpx;
	        padding: 0 47rpx 14rpx 48rpx;
	        background-color: #ffffff;
	        .group_10 {
	          padding: 14rpx 0 9rpx;
	          height: 104rpx;
	          .group_12 {
	            margin-top: -12rpx;
	          }
	          .text_11 {
	            margin-left: 10rpx;
	          }
	        }
	        .section_13 {
	          background-color: #1e60ff1a;
	          border-radius: 4rpx;
	          width: 31rpx;
	          height: 8rpx;
	          border-left: solid 107rpx #1e60ff1a;
	        }
	        .group_11 {
	          padding: 15rpx 0 9rpx;
	          height: 104rpx;
	          .group_15 {
	            margin-top: -13rpx;
	          }
	          .text_1 {
	            margin-left: 10rpx;
	          }
	        }
	        .font_9 {
	          font-size: 24rpx;
	          font-family: 'zihunzhengkuchaojihei';
	          line-height: 29rpx;
	          font-weight: 700;
	          color: #1e60ff1a;
	        }
	        .group_16 {
	          margin-top: 25rpx;
	          width: 31rpx;
	          .section_11 {
	            background-color: #1e60ff1a;
	            border-radius: 4rpx;
	            height: 8rpx;
	          }
	        }
	        .group_13 {
	          padding: 25rpx 0 31rpx;
	          width: 110rpx;
	          .section_12 {
	            margin-left: 3rpx;
	            background-color: #1e60ff1a;
	            border-radius: 4rpx;
	            width: 107rpx;
	            height: 8rpx;
	          }
	          .group_14 {
	            padding: 49rpx 0 7rpx;
	            width: 110rpx;
	            .pos_6 {
	              position: absolute;
	              left: 0;
	              bottom: 0;
	            }
	            .pos_8 {
	              position: absolute;
	              left: 0;
	              bottom: 0;
	            }
	            .pos_10 {
	              position: absolute;
	              left: 0;
	              bottom: 0;
	            }
	            .pos_12 {
	              position: absolute;
	              left: 0;
	              bottom: 0;
	            }
	          }
	          .pos_5 {
	            position: absolute;
	            left: 0;
	            right: 0;
	            top: 0;
	            bottom: 0;
	          }
	          .pos_7 {
	            position: absolute;
	            left: 0;
	            right: 0;
	            top: 0;
	            bottom: 0;
	          }
	          .pos_9 {
	            position: absolute;
	            left: 0;
	            right: 0;
	            top: 0;
	            bottom: 0;
	          }
	          .pos_11 {
	            position: absolute;
	            left: 0;
	            right: 0;
	            top: 0;
	            bottom: 0;
	          }
	        }
	      }
	    }
	    .image_9 {
	      box-shadow: 0rpx 4rpx 10rpx 0rpx #1e60ff4d;
	      border-radius: 50%;
	      width: 64rpx;
	      height: 64rpx;
	    }
	    .preview {
	      width: 100%;
	      height: 100%;
	      border-radius: 6rpx;
	    }
	  }
	  .font_8 {
	    font-size: 24rpx;
	    font-family: 'PingFang SC';
	    line-height: 33rpx;
	    font-weight: 600;
	    color: #3a3d4b;
	  }
	
	  .font {
	    font-size: 24rpx;
	    font-family: 'PingFang SC';
	    line-height: 33rpx;
	    color: #1e60ff;
	  }
	  .font_6 {
	    font-size: 30rpx;
	    font-family: 'PingFang SC';
	    line-height: 42rpx;
	    font-weight: 500;
	    color: #060d2b;
	  }
	}
</style>