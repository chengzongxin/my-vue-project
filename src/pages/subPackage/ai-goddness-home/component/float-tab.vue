<template>
  <view class="content">
    <view class="btn" :class="{ active: active === 0 }">首页</view>
    <view class="btn" :class="{ active: active === 1 }">我的</view>
  </view>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  components: {},
})
export default class FloatTab extends Vue {
  @Prop({ type: Number, default: 0 }) readonly active!: number
}
</script>

<style lang="less" scoped>
.content {
  position: fixed;
  width: 338rpx;
  height: 100rpx;
  border-radius: 50rpx;
  left: 50%;
  bottom: 88rpx;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 8;
  background-color: #0d0d0d;
  .btn {
    width: 144rpx;
    height: 100rpx;
    line-height: 100rpx;
    font-family: MiSans-Medium;
    font-size: 28rpx;
    color: #ffffff;
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
    opacity: 0.5;
    transition: all 0.3s;
  }
  .active {
    opacity: 1;
    position: relative;
    &::before {
      position: absolute;
      display: block;
      width: 144rpx;
      height: 100rpx;
      content: '';
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-image: url('https://pic.to8to.com/te/osf/5ca400d8f0b34b57aacbda1162b6057b.png');
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}
</style>
