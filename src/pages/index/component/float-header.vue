<template>
  <view class="content" @click="$emit('cancel')" :class="showModal ? 'active' : ''">
    <view class="wrap">
      <view class="title">10秒创作Ta家</view>
      <view class="subtitle">
        都说看物品就能推断出主人的性格，Ta的家，又将由什么性格统治呢？让我们一起揭晓格式气质魅力的Ta，适合怎样的家居搭配.
      </view>
      <image
        class="close"
        @click="$emit('close')"
        src="https://pic.to8to.com/te/osf/b1eaa52e97fc40e384d8f899cf7eb424.png"
        mode="scaleToFill"
      />
      <Header ref="header" @upload="$emit('upload')" :isShowTip="false" />
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './header.vue'
@Component({
  components: { Header },
})
export default class FloatHeader extends Vue {
  showModal: boolean = false

  mounted() {
    this.$nextTick(() => {
      this.showModal = true
    })
  }

  onUpload(e: any) {
    const header: any = this.$refs.header
    header.onUpload(e)
  }
}
</script>

<style lang="less" scoped>
.content {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1002;

  background-color: rgba(0, 0, 0, 0.5);

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
    position: relative;

    .title {
      font-family: MiSans-Demibold;
      font-size: 32rpx;
      color: #8a8897;
      letter-spacing: 0;
      text-align: center;
      font-weight: 600;
    }
    .subtitle {
      font-family: MiSans-Regular;
      font-size: 26rpx;
      color: rgba(255, 255, 255, 0.5);
      letter-spacing: 0;
      text-align: justify;
      font-weight: 400;
      padding: 60rpx 40rpx;
    }
    .close {
      position: absolute;
      width: 48rpx;
      height: 48rpx;
      top: 32rpx;
      right: 32rpx;
    }
  }
}
</style>
