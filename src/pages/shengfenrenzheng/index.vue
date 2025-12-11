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
	        src="/static/no.png"
	      />
	    </view>
	    <view class="flex-row justify-center relative mt-16">
	      <text class="font pos_3">填写资料</text>
	      <text class="font text_3">身份认证</text>
	      <text class="font text_32 pos_4">驾驶证认证</text>
	    </view>
	  </view>
	  <view class="flex-col section_4">
	    <view class="flex-row justify-between group_3">
	      <text class="font_2">联系人姓名</text>
	      <text class="font_2 text_3">六月的风</text>
	    </view>
	    <view class="flex-row justify-between group_4">
	      <text class="font_2">联系人身份证号</text>
	      <text class="font_2 text_3">33010619293993211</text>
	    </view>
	  </view>
	  <view class="flex-col section_5">
	    <view class="flex-col items-start group_5">
	      <text class="font_3 text_5">联系人身份证</text>
	      <text class="font text_6 mt-10">证照需拍摄身份证原件，并由联系人本人完成，需在有效期内</text>
	    </view>
	    <view class="flex-col justify-start items-start text-wrapper">
	      <text class="font text_7">身份信息仅用于认证审核使用，该信息将予以严格保密。</text>
	    </view>
	    <view class="flex-row equal-division group_6">
	      <view class="flex-col group_7 equal-division-item">
	        <view class="flex-col justify-start items-center self-stretch section_6">
	          <view class="flex-col justify-start section_7">
	            <view class="flex-row section_8 view" @tap="chooseFront">
	              <template v-if="idFront">
	                <image class="preview" :src="idFront" mode="aspectFill" />
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
	        <text class="self-center font_4 mt-10">身份证人像面</text>
	      </view>
	      <view class="flex-col group_7 equal-division-item ml-2">
	        <view class="flex-col justify-start items-center self-stretch section_6">
	          <view class="flex-col justify-start section_7">
	            <view class="flex-row section_8 view_2" @tap="chooseBack">
	              <template v-if="idBack">
	                <image class="preview" :src="idBack" mode="aspectFill" />
	              </template>
	              <template v-else>
	                <image
	                  class="image_1"
	                  src="/static/sf_4.png"
	                />
	                <image
	                  class="image_8 image_10"
	                  src="/static/sf_2.png"
	                />
	                <image
	                  class="image_7 image_12"
	                  src="/static/sf_3.png"
	                />
	              </template>
	            </view>
	          </view>
	        </view>
	        <text class="self-center font_4 mt-10">身份证国徽面</text>
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
	      idFront: '',
	      idBack: ''
	    };
	  },

	  methods: {
	    nextPage() {
			uni.showToast({
			  title: '认证提交成功',
			  	icon: 'none',
					duration: 2000
			})
	    },
	    chooseFront() {
	      uni.chooseImage({
	        count: 1,
	        sizeType: ['compressed'],
	        sourceType: ['album', 'camera'],
	        success: (res) => {
	          const path = (res.tempFilePaths && res.tempFilePaths[0]) || (res.tempFiles && res.tempFiles[0] && (res.tempFiles[0].path || res.tempFiles[0].tempFilePath));
	          if (path) this.idFront = path;
	        }
	      });
	    },
	    chooseBack() {
	      uni.chooseImage({
	        count: 1,
	        sizeType: ['compressed'],
	        sourceType: ['album', 'camera'],
	        success: (res) => {
	          const path = (res.tempFilePaths && res.tempFilePaths[0]) || (res.tempFiles && res.tempFiles[0] && (res.tempFiles[0].path || res.tempFiles[0].tempFilePath));
	          if (path) this.idBack = path;
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
	  padding-bottom: 412rpx;
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
		
	    .text_32 {
	      color: #aab1bb;
	    }
		
	    .pos_3 {
	      position: absolute;
	      left: 0;
	      top: 50%;
	      transform: translateY(-50%);
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
	      .text_3 {
	        color: #060d2b;
	      }
	    }
	    .group_4 {
	      padding: 29rpx 30rpx;
	      .text_4 {
	        color: #aab1bb;
	      }
	    }
	    .font_2 {
	      font-size: 30rpx;
	      font-family: 'PingFang SC';
	      line-height: 42rpx;
	      color: #3a3d4b;
	    }
	  }
	  .section_5 {
	    margin-top: 20rpx;
	    padding-bottom: 35rpx;
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
	    .equal-division {
	      margin-top: 30rpx;
	      .group_7 {
	        flex: 1 1 360rpx;
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
	              height: 190rpx;
	              display: flex;
	              align-items: center;
	              justify-content: center;
	              overflow: hidden;
	              .image_7 {
	                width: 60rpx;
	                height: 64rpx;
	              }
	              .image_8 {
	                box-shadow: 0rpx 4rpx 10rpx 0rpx #1e60ff4d;
	                border-radius: 50%;
	                width: 64rpx;
	                height: 64rpx;
	              }
	              .image_9 {
	                width: 64rpx;
	                height: 64rpx;
	              }
	              .image_1 {
	                width: 56rpx;
	                height: 64rpx;
	              }
	              .image_10 {
	                margin-left: 8rpx;
	              }
	              .image_12 {
	                margin-left: 3rpx;
	              }
	              .preview {
	                width: 100%;
	                height: 100%;
	                border-radius: 6rpx;
	              }
	            }
	            .view {
	              padding: 0;
	              height: 150rpx;
	              background-color: #ffffff;
	            }
	            .view_2 {
	              padding: 0;
	              height: 150rpx;
	              background-color: #ffffff;
	            }
	          }
	        }
	        .font_4 {
	          font-size: 24rpx;
	          font-family: 'PingFang SC';
	          line-height: 33rpx;
	          font-weight: 600;
	          color: #3a3d4b;
	        }
	      }
	      .equal-division-item {
	        padding-left: 16rpx;
	        padding-right: 14rpx;
	      }
	    }
	    .group_6 {
	      padding: 0 14rpx;
	    }
	  }
	  .font {
	    font-size: 24rpx;
	    font-family: 'PingFang SC';
	    line-height: 33rpx;
	    color: #1e60ff;
	  }
	
	  .font_3 {
	    font-size: 30rpx;
	    font-family: 'PingFang SC';
	    line-height: 42rpx;
	    font-weight: 500;
	  }
	}
</style>