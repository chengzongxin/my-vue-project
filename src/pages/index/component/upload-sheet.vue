<template>
  <view class="content" :class="showModal ? 'active' : ''">
    <button class="btn1">从手机相册选择</button>
    <button class="btn2">拍摄</button>
    <button class="btn3">取消</button>
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

  .btn1,
  .btn2,
  .btn3 {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50rpx;
    font-family: MiSans-Regular;
    font-size: 28px;
    color: #ffffff;
    letter-spacing: 0;
    text-align: center;
    font-weight: 400;
  }
}
</style>
