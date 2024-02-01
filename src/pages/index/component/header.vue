<template>
  <view class="content">
    <view style="height: 40rpx"></view>
    <view class="title" v-if="showTip">
      都说看物品就能推断出主人的性格，Ta的家，又将由什么性格统治呢？让我们一起揭晓格式气质魅力的Ta，适合怎样的家居搭配
      <image
        class="close"
        @click="onCloseTips"
        src="https://pic.to8to.com/te/osf/b1eaa52e97fc40e384d8f899cf7eb424.png"
        mode="scaleToFill"
      />
    </view>
    <view class="main">
      <view class="upload">
        <view class="wrap">
          <view v-if="actionType === 1" class="action-upload" @click="$emit('upload')">
            <view class="a-u-content">
              <image
                class="a-u-img"
                src="https://pic.to8to.com/te/osf/f149602c75504ca5907da212f214a2d9.png"
                mode="scaleToFill"
              />
              <view class="a-u-txt">上传一张照片</view>
              <view class="a-u-txt">生成Ta的家</view>
            </view>
          </view>
          <view v-if="actionType === 2">点击上传 你心目中Ta的照片</view>
          <view v-if="actionType === 3">
            <view class="action-failed">点击重新上传</view>
          </view>
          <view v-if="actionType === 4">点击上传 你心目中Ta的照片</view>
        </view>
        <view class="tip-txt">上传一张照片，生成Ta的家</view>
      </view>
      <view class="result">
        <view class="wrap">
          <AnimateCompare style="width: 100%; height: 100%" :before="before" :after="after" />
        </view>
        <view class="tip-txt">生成结果示范</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
enum ActionType {
  Upload = 1,
  Auditing = 2,
  UploadFailed = 3,
  UploadSuccess = 4,
}

import { Component, Vue } from 'vue-property-decorator'
import AnimateCompare from './animate-compare.vue'
@Component({
  components: { AnimateCompare },
})
export default class Header extends Vue {
  [x: string]: any
  actionType: ActionType = ActionType.Upload
  imgW = 171
  before: string = 'https://img.yzcdn.cn/vant/cat.jpeg'
  after: string = 'https://pic-file-bucket.oss-cn-beijing.aliyuncs.com/24d683b5-d0dd-48a2-b697-b51bf6478370.png'

  showTip = true

  created() {}
  mounted() {}
  updated() {}
  destroyed() {}
  init() {}
  onCloseTips() {
    this.showTip = false
  }

  onUpload() {}
}
</script>

<style lang="less" scoped>
.content {
  margin-bottom: 25rpx;
  position: relative;
  .title {
    position: relative;
    font-family: MiSans-Regular;
    font-size: 26rpx;
    color: #8a8897;
    letter-spacing: 0;
    text-align: justify;
    font-weight: 400;

    display: block;

    padding: 32rpx;
    padding-right: 76rpx;
    margin: 32rpx;

    background: rgba(0, 0, 0, 0.1);
    border: 1rpx solid rgba(132, 130, 146, 1);
    border-radius: 32rpx;

    .close {
      position: absolute;
      width: 32rpx;
      height: 32rpx;
      top: 20rpx;
      right: 20rpx;
    }
  }

  .main {
    display: flex;
    justify-content: space-between;
    margin: 14rpx 22rpx 0 22rpx;
    gap: 20rpx;

    .upload,
    .result {
      flex: 1;
      .wrap {
        border-radius: 40rpx;
        width: 100%;
        height: 444rpx;
        // background: #f5f5f5;
        background: #191c23;

        font-family: MiSans-Medium;
        font-size: 28rpx;
        color: #ffffff;
        letter-spacing: 0;
        text-align: center;
        font-weight: 500;

        display: flex;
        justify-content: center;
        align-items: center;

        .action-upload {
          width: 100%;
          height: 100%;
          border-radius: 40rpx;
          padding: 4rpx;
          background-image: linear-gradient(180deg, #ff7e65 0%, #ff6bb3 100%);
          .a-u-content {
            width: 100%;
            height: 100%;
            border-radius: 40rpx;
            background-color: #1e0748;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .a-u-img {
              width: 160rpx;
              height: 160rpx;
            }
            .a-u-txt {
              font-family: MiSans-Medium;
              font-size: 28rpx;
              color: #ffffff;
              letter-spacing: 0;
              text-align: center;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}

.tip-txt {
  font-family: MiSans-Regular;
  font-size: 24rpx;
  color: #8a8897;
  letter-spacing: 0;
  text-align: center;
  font-weight: 400;
  display: block;
  margin-top: 28rpx;
}
</style>
