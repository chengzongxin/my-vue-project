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
  imgW = 167

  mounted() {
    this.$nextTick(() => {
      uni
        .createSelectorQuery()
        .in(this)
        .selectAll('.after')
        .boundingClientRect((rect: any) => {
          if (rect[0].width) this.imgW = rect[0].width
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
        // animation: beforeAni 3s cubic-bezier(0.87, 0.05, 0.39, 0.99) infinite alternate;
        animation-name: anim1, anim2; /* 指定所有动画的名称 */
        animation-duration: 3s; /* 设置动画持续时间 */
        animation-timing-function: cubic-bezier(1, 0.16, 0.16, 1); /* 设置动画速度曲线 */
        animation-delay: 0s; /* 设置第一个动画开始前的延迟时间 */
        animation-iteration-count: infinite; /* 无限次重复播放动画 */
        animation-direction: alternate; /* 正向播放动画 */
        @keyframes anim1 {
          0% {
            right: 90%;
          }
          100% {
            right: 5%;
          }
        }

        @keyframes anim2 {
          0% {
            right: 5%;
          }
          100% {
            right: 90%;
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
