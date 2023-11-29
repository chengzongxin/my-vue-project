<template>
  <view class="wrap" @click="$emit('click')">
    <image class="img" src="https://pic.to8to.com/te/osf/526d388d4f864837ac1dfadbe8dae8b7.png" />
    <text class="txt">我家装修进度</text>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class FloatBtn extends Vue {
  name: string = 'floatBtn'
}
</script>

<style scoped lang="less">
.wrap {
  background-image: linear-gradient(270deg, #7ed8b6 0%, #22c787 100%);
  box-shadow: 0px 10rpx 30rpx 0px rgba(34, 199, 135, 0.3);
  border-radius: 50rpx;
  height: 100rpx;
  width: 310rpx;
  position: fixed;
  bottom: 68rpx;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;
  .img {
    width: 48rpx;
    height: 48rpx;
  }
  .txt {
    margin-left: 10rpx;
    font-family: MiSans-Normal;
    font-size: 28rpx;
    color: #ffffff;
    letter-spacing: 0;
    text-align: center;
    font-weight: 400;
  }
}
</style>
