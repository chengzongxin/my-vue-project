<template>
  <view class="content">
    <view class="animate-box" :class="{ ani: play }">
      <view class="imgbox before">
        <image :src="before" class="image" :style="'width: ' + 2 * imgW + 'rpx;'" mode="scaleToFill" />
      </view>
      <view class="imgbox after">
        <image :src="after" class="image" :style="'width: 100%'" mode="scaleToFill" />
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  components: {},
})
export default class AnimateCompare extends Vue {
  @Prop(String) readonly before!: string
  @Prop(String) readonly after!: string
  @Prop({ type: Boolean, default: true }) readonly play!: boolean
  imgW = 0

  mounted() {
    this.$nextTick(() => {
      uni
        .createSelectorQuery()
        .in(this)
        .selectAll('.after')
        .boundingClientRect((rect: any) => {
          if (rect) this.imgW = rect[0].width
        })
        .exec()
    })
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 32rpx;
  overflow: hidden;
  .animate-box {
    .imgbox {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      .image {
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
      }
    }

    .before {
      z-index: 2;
      right: 100%;
      .tag {
        left: 24rpx;
      }
    }
    .after {
      z-index: 1;
      .tag {
        right: 24rpx;
      }
    }
    &.ani {
      .before {
        animation: beforeAni 3s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate;
        @keyframes beforeAni {
          0% {
            right: 5%;
          }
          50% {
            right: 90%;
          }
          100% {
            right: 5%;
          }
        }

        &::after {
          content: '';
          width: 6rpx;
          height: 100%;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 5;
          background: #fff;
        }
      }
    }
  }
}
</style>
