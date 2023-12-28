<template>
  <div class="footer">
    <button class="btn" :font-size="32" border-radius="16" @click="handleClick" :loading="loading">
      <slot></slot>
    </button>
    <p class="first-phone-tips">允许土巴兔装修顾问稍后来电了解装修需求</p>
  </div>
</template>
<script>
// import { TuButton } from '@to8to/tu-view-mobile';
// import widgetReportMixins from '@/mixins/widgetReportMixin'

export default {
  // mixins: [widgetReportMixins],
  props: {
    loading: Boolean,
  },
  components: {
    // TuButton
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>
<style lang="less" scoped>
.footer {
  background: #ffffff;
  box-shadow: 0rpx 0rpx 59rpx 0rpx rgba(199, 200, 205, 0.6);
  border-radius: 30rpx 30rpx 0rpx 0rpx;
  padding: 42rpx 65rpx 46rpx;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  .btn {
    background-color: #23c67d;
    color: #ffffff;
  }
  .first-phone-tips {
    width: 100%;
    padding-top: 20rpx;
    font-size: 22rpx;
    color: #a7a7a7;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  .first-phone-tips:before {
    content: '';
    margin-right: 6rpx;
    width: 32rpx;
    height: 32rpx;
    // background: url('~@/assets/common/comp-i1.png') no-repeat;
    background-size: cover;
  }
}
</style>
