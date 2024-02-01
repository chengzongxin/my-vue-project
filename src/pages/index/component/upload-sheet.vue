<template>
  <view class="content" @click="$emit('cancel')" :class="showModal ? 'active' : ''">
    <view class="wrap">
      <button class="btn b1" @click="$emit('photo')">从手机相册选择</button>
      <button class="btn b1" @click="$emit('camera')">拍摄</button>
      <button class="btn b2" @click="$emit('cancel')">取消</button>
    </view>
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

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  transition: transform 0.3s;

  transform: translateY(100%);

  &.active {
    transform: translateY(0%);
  }

  .wrap {
    background: #1c192e;
    width: 100%;
    padding: 52rpx 0rpx 88rpx 0rpx;
    background: #1c192e;
    border-radius: 48rpx 48rpx 0rpx 0rpx;
    overflow: hidden;

    .btn {
      font-family: MiSans-Regular;
      font-size: 28rpx;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      font-weight: 400;
      width: 670rpx;
      height: 100rpx;
      line-height: 100rpx;

      //   &:not(:last-child) {
      margin-top: 32rpx;
      //   }
    }
    .b1 {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 50rpx;
    }

    .b2 {
      background: transparent;
    }
  }
}
</style>
