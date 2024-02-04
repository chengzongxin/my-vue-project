<template>
  <view class="content">
    <view style="height: 40rpx"></view>
    <view class="title" v-if="showTip && isShowTip">
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
          <view v-if="actionType === 2" class="action-audit">
            <image class="action-audit-img" :src="chooseImg" mode="scaleToFill" />
            <view class="action-audit-mask">
              <view class="action-audit-mask-ani"></view>
            </view>
          </view>
          <view v-if="actionType === 3" class="action-failed" @click="$emit('upload')">
            <image class="action-failed-img" :src="chooseImg" mode="scaleToFill" />
            <view class="action-failed-mask">
              <view class="action-failed-mask-icon"></view>
              <view class="action-failed-mask-txt">点击重新上传</view>
            </view>
          </view>
          <view v-if="actionType === 4" class="action-suc">
            <image class="action-suc-img" :src="chooseImg" mode="scaleToFill" />
          </view>
        </view>
        <view class="tip-txt" :style="{ color: actionType === 3 ? '#FD6343;' : '#8A8897;' }">{{ uploadTxt }}</view>
      </view>
      <view class="result">
        <view class="wrap">
          <AnimateCompare style="width: 100%; height: 100%" :before="before" :after="after" />
        </view>
        <view class="tip-txt">生成结果示范</view>
      </view>
    </view>
    <button class="btn" :class="{ disabled: btnDisable }" v-if="btnShow" @click="onClickBtn" :disabled="btnDisable">
      生成Ta的家
    </button>
  </view>
</template>

<script lang="ts">
enum ActionType {
  Upload = 1,
  Auditing = 2,
  UploadFailed = 3,
  UploadSuccess = 4,
}

import { Component, Prop, Vue } from 'vue-property-decorator'
import AnimateCompare from './animate-compare.vue'
@Component({
  components: { AnimateCompare },
})
export default class Header extends Vue {
  [x: string]: any

  @Prop({ default: true }) isShowTip!: boolean

  actionType: ActionType = ActionType.Upload
  imgW = 171
  before: string = 'https://img.yzcdn.cn/vant/cat.jpeg'
  after: string = 'https://pic-file-bucket.oss-cn-beijing.aliyuncs.com/24d683b5-d0dd-48a2-b697-b51bf6478370.png'

  showTip = true
  chooseImg = ''

  get uploadTxt() {
    let uploadTxt = ''
    switch (this.actionType) {
      case ActionType.Upload:
        uploadTxt = '上传一张照片，生成Ta的家'
        break
      case ActionType.Auditing:
        uploadTxt = '审核中，请稍等片刻'
        break
      case ActionType.UploadFailed:
        uploadTxt = '未识别到人脸，请重新上传'
        break
      case ActionType.UploadSuccess:
        uploadTxt = '上传成功'
        break

      default:
        break
    }
    return uploadTxt
  }

  get btnDisable() {
    return this.actionType !== ActionType.UploadSuccess
  }

  get btnShow() {
    return this.actionType !== ActionType.Upload
  }

  created() {}
  mounted() {
    this.showTip = !uni.getStorageSync('isNotShowTips')
  }
  updated() {}
  destroyed() {}
  init() {}
  onCloseTips() {
    this.showTip = false
    uni.setStorageSync('isNotShowTips', 1)
  }

  onUpload(img: string) {
    this.chooseImg = img
    if (this.actionType == ActionType.UploadFailed) {
      this.actionType = ActionType.UploadSuccess
      return
    }
    this.actionType = ActionType.UploadFailed
  }

  onClickBtn() {
    console.log('onlickbtn')
  }
}
</script>

<style lang="less" scoped>
.content {
  margin-bottom: 60rpx;
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

        // 等待上传
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

        // 审核中
        .action-audit {
          width: 100%;
          height: 100%;
          border-radius: 40rpx;
          overflow: hidden;
          position: relative;
          &-img {
            width: 100%;
            height: 100%;
          }
          &-mask {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            @keyframes rotate {
              from {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
              }
              to {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
              }
            }

            &-ani {
              width: 64rpx;
              height: 64rpx;
              background: url('https://pic.to8to.com/te/osf/af2aa5b4864a4147bf0eabb516b3d66c.png') no-repeat;
              background-size: contain;
              animation: rotate 1s linear infinite;
              vertical-align: middle;
            }
          }
        }

        // 审核失败
        .action-failed {
          width: 100%;
          height: 100%;
          border-radius: 40rpx;
          overflow: hidden;
          position: relative;
          &-img {
            width: 100%;
            height: 100%;
          }
          &-mask {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            &-icon {
              width: 64rpx;
              height: 64rpx;
              background: url('https://pic.to8to.com/te/osf/1386bfb03db44e3a98c5d6e33cc450e5.png') no-repeat;
              background-size: contain;
              vertical-align: middle;
            }
            &-txt {
              margin-top: 20rpx;
              font-family: MiSans-Medium;
              font-size: 28rpx;
              color: #ffffff;
              letter-spacing: 0;
              text-align: center;
              font-weight: 500;
            }
          }
        }

        // 上传成功
        .action-suc {
          width: 100%;
          height: 100%;
          border-radius: 40rpx;
          overflow: hidden;
          position: relative;
          &-img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .btn {
    margin: 40rpx;
    margin-bottom: 0rpx;
    background-image: linear-gradient(270deg, #fe46a0 4%, #ff5b3b 100%);
    box-shadow: 0rpx 10rpx 30rpx 0rpx rgba(255, 74, 145, 0.3);
    border-radius: 64rpx;
    font-family: MiSans-Medium;
    font-size: 32rpx;
    color: #ffffff;
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
  }
  .disabled {
    opacity: 0.5;
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
