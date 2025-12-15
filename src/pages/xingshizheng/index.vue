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
	          src="/static/has.png"
	        />
	        <view class="section_3"></view>
	        <image
	          class="image_6"
	          src="/static/has.png"
	        />
	      </view>
	      <view class="flex-row justify-center relative mt-16">
	        <text class="font pos_3">身份认证</text>
	        <text class="font">驾驶证认证</text>
	        <text class="font pos_4">行驶证认证</text>
	      </view>
	    </view>
	    <view class="flex-col section_4">
	      <view class="flex-col">
	        <view class="flex-row justify-between group_3">
	          <text class="font_2">驾驶证号</text>
	          <text class="font_2">33010680989080890</text>
	        </view>
	        <view class="flex-row justify-between group_4">
	          <text class="font_2">驾驶证有效期至</text>
	          <text class="font_2">183777778999</text>
	        </view>
	      </view>
	    </view>
	    <view class="flex-col section_5">
	      <view class="flex-col items-start group_5">
	        <text class="font_4 text_5">上传驾驶证</text>
	        <text class="font text_6 mt-10">请上传本人驾驶证主页</text>
	      </view>
	      <view class="flex-col justify-start items-start text-wrapper">
	        <text class="font text_7">驾驶证仅用于认证审核使用，该信息会严格保密。</text>
	      </view>
	      <view class="grid">
	        <view class="flex-col grid-item">
	          <view class="flex-col justify-start items-center self-stretch section_6">
	            <view class="flex-col justify-start section_7">
	              <view class="flex-row section_8" @tap="chooseDriver">
	                <template v-if="driverImg">
	                  <image class="preview" :src="driverImg" mode="aspectFill" />
	                </template>
	                <template v-else>
	                  <image
	                    class="image_7"
	                    src="/static/sf_3.png"
	                  />
	                  <image
	                    class="image_8 ml-3"
	                    src="/static/sf_2.png"
	                  />
	                  <image
	                    class="image_9 ml-3"
	                    src="/static/sf_1.png"
	                  />
	                </template>
	              </view>
	            </view>
	          </view>
	          <text class="self-center font_5 mt-10">驾驶证</text>
	        </view>
	      </view>
	    </view>
	    <view class="flex-col justify-start items-center text-wrapper_2" @click="nextTo"><text class="font_4 text_8">下一步</text></view>
	  </view>
	</template>

	<script>
		export default {
		  components: {},
		  props: {},
		  data() {
		    return {
		      driverImg: '',
		      vehicleImg: ''
		    };
		  },
		
		  methods: {
			nextTo() {
				uni.navigateTo({
					url: '/pages/xingshizheng/index'
				})
			},
		    chooseDriver() {
		      uni.chooseImage({
		        count: 1,
		        sizeType: ['compressed'],
		        sourceType: ['album', 'camera'],
		        success: (res) => {
		          const path = (res.tempFilePaths && res.tempFilePaths[0]) || (res.tempFiles && res.tempFiles[0] && (res.tempFiles[0].path || res.tempFiles[0].tempFilePath));
		          if (path) this.driverImg = path;
		        }
		      });
		    },
		    chooseVehicle() {
		      uni.chooseImage({
		        count: 1,
		        sizeType: ['compressed'],
		        sourceType: ['album', 'camera'],
		        success: (res) => {
		          const path = (res.tempFilePaths && res.tempFilePaths[0]) || (res.tempFiles && res.tempFiles[0] && (res.tempFiles[0].path || res.tempFiles[0].tempFilePath));
		          if (path) this.vehicleImg = path;
		        }
		      });
		    }
		  },
		};
	</script>

	<style lang="scss" scoped>
	.ml-3 {
	  margin-left: 3rpx;
	}
	.page {
	  padding-bottom: 48rpx;
	  background-color: #f5f5f5;
	  width: 100%;
	  overflow-y: hidden;
	  height: 100vh;
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
		   .section_33 {
	        background-color: #aab1bb;
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
	    .text_3 {
	      color: #aab1bb;
	    }
	    .pos_4 {
	      position: absolute;
	      right: 0;
	      top: 50%;
	      transform: translateY(-50%);
	    }
	  }
	  .section_4 {
	    margin-top: 19rpx;
	    background-color: #ffffff;
	    border-top: solid 1rpx #e5e5e5;
	    border-bottom: solid 1rpx #e5e5e5;
	    .group_3 {
	      padding: 28rpx 30rpx;
	      border-bottom: solid 1rpx #e5e5e5;
	      .text_4 {
	        color: #060d2b;
	      }
	    }
	    .group_4 {
	      padding: 29rpx 30rpx;
	    }
	    .font_2 {
	      font-size: 30rpx;
	      font-family: 'PingFang SC';
	      line-height: 42rpx;
	      color: #3a3d4b;
	    }
	    .font_3 {
	      font-size: 30rpx;
	      font-family: 'PingFang SC';
	      line-height: 42rpx;
	      color: #aab1bb;
	    }
	  }
	  .section_5 {
	    margin-top: 20rpx;
	    padding-bottom: 17.5rpx;
	    background-color: #ffffff;
	    .group_5 {
	      padding: 34rpx 30rpx 24rpx;
	      .text_5 {
	        color: #060d2b;
	      }
	      .text_6 {
	        color: #777d86;
	      }
	    }
	    .text-wrapper {
	      margin: 0 30rpx;
	      padding: 14rpx 0 15rpx;
	      background-color: #e840421a;
	      border-radius: 8rpx;
	      border: solid 1rpx #e84042;
	      .text_7 {
	        margin-left: 19rpx;
	        color: #e84042;
	      }
	    }
	    .grid {
	      margin-top: 12.5rpx;
	      padding: 0 14rpx;
	      display: flex;
		  height: 300rpx;
		  align-items: center;
		  justify-content: center;
	      row-gap: 0;
	      column-gap: 0;
	      .grid-item {
	        padding: 17.5rpx 14rpx 17.5rpx 16rpx;
	        .section_6 {
	          padding: 20rpx 0;
	          background-color: #f5f5f5;
	          border-radius: 8rpx;
	          .section_7 {
	            padding: 10rpx 0;
	            background-image: url('/static/sf_bg.png');
	            background-position: 0% 0%;
	            background-size: 100% 100%;
	            background-repeat: no-repeat;
	            width: 270rpx;
	            .section_8 {
	              margin: 0 10rpx;
	              height: 150rpx;
	              display: flex;
	              align-items: center;
	              justify-content: center;
	              overflow: hidden;
	              background-color: #ffffff;
	              .image_9 {
	                width: 64rpx;
	                height: 64rpx;
	              }
	            }
	            .section_9 {
	              margin: 0 10rpx;
	              height: 150rpx;
	              display: flex;
	              align-items: center;
	              justify-content: center;
	              overflow: hidden;
	              background-color: #ffffff;
	              .image_10 {
	                width: 56rpx;
	                height: 64rpx;
	              }
	              .image_11 {
	                margin-left: 8rpx;
	              }
	              .image_12 {
	                margin-left: 3rpx;
	              }
	            }
	            .image_8 {
	              box-shadow: 0rpx 4rpx 10rpx 0rpx #1e60ff4d;
	              border-radius: 50%;
	              width: 64rpx;
	              height: 64rpx;
	            }
	            .image_7 {
	              width: 60rpx;
	              height: 64rpx;
	            }
	            .preview {
	              width: 100%;
	              height: 100%;
	              border-radius: 6rpx;
	            }
	          }
	        }
	        .font_5 {
	          font-size: 24rpx;
	          font-family: 'PingFang SC';
	          line-height: 33rpx;
	          font-weight: 600;
	          color: #3a3d4b;
	        }
	      }
	    }
	  }
	  .font {
	    font-size: 24rpx;
	    font-family: 'PingFang SC';
	    line-height: 33rpx;
	    color: #1e60ff;
	  }
	   .text_32 {
	      color: #aab1bb;
	    }
	  .font_4 {
	    font-size: 30rpx;
	    font-family: 'PingFang SC';
	    line-height: 42rpx;
	    font-weight: 500;
	  }
	}
</style>