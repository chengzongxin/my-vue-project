<template>
  <view class="content" :class="showModal ? 'active' : ''">
    <text class="title">上传形象建议</text>
    <image
      class="close"
      @click="$emit('close')"
      src="https://pic.to8to.com/te/osf/b1eaa52e97fc40e384d8f899cf7eb424.png"
      mode="scaleToFill"
    />
    <image class="img" src="https://pic.to8to.com/te/osf/12e10b1d163f45529bfcd746ccc0fc73.png" mode="aspectFill" />
    <view style="height: 20rpx"></view>
    <image class="img" src="https://pic.to8to.com/te/osf/bffdae4340ac48a1b5ae26d34a82f003.png" mode="aspectFill" />
    <text class="tips">您将上传照片使用AIGC服务，请确保您已获得权利人的同意，除本服务外，不得用于其他用途。</text>
    <button class="btn" @click="$emit('upload')">上传图片</button>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {},
})
export default class UploadTips extends Vue {
  showModal: boolean = false

  mounted() {
    this.$nextTick(() => {
      this.showModal = true
    })
  }
}
</script>

<style lang="less" scoped>
.content {
  position: relative;
  background: #1c192e;
  border-radius: 48rpx 48rpx 0rpx 0rpx;
  padding-top: 42rpx;
  padding-bottom: 88rpx;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s;

  transform: translateY(100%);

  &.active {
    transform: translateY(0%);
  }

  .title {
    display: block;
    font-family: MiSans-Demibold;
    font-size: 32rpx;
    color: rgba(255, 255, 255, 0.75);
    letter-spacing: 0;
    text-align: center;
    font-weight: 600;
    margin-bottom: 40rpx;
  }
  .close {
    position: absolute;
    width: 48rpx;
    height: 48rpx;
    top: 32rpx;
    right: 32rpx;
  }
  .img {
    border-radius: 48rpx;
    overflow: hidden;
    width: 686rpx;
    height: 396rpx;
  }
  .tips {
    display: block;
    margin: 40rpx;
    margin-bottom: 60rpx;
    font-family: MiSans-Regular;
    font-size: 26rpx;
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 0;
    text-align: justify;
    font-weight: 400;
  }
  .btn {
    background-image: linear-gradient(270deg, #3fd3ff 0%, #3994ff 100%);
    box-shadow: 0rpx 10rpx 30rpx 0rpx rgba(58, 142, 240, 0.5);
    border-radius: 64rpx;
    // padding: 28rpx 106rpx;
    width: 338rpx;
    height: 100rpx;

    font-family: MiSans-Medium;
    font-size: 32rpx;
    color: #ffffff;
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
    line-height: 100rpx;
  }
}
</style>
