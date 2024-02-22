<template>
  <view class="content">
    <view class="wrap">
      <view class="list-item" v-for="(item, index) in list">
        <view class="card">
          <!-- <image
              class="img"
              src="https://pic-file-bucket.oss-cn-beijing.aliyuncs.com/24d683b5-d0dd-48a2-b697-b51bf6478370.png"
              mode="scaleToFill"
            /> -->
          <AnimateCompare
            style="width: 100%; height: 100%"
            :before="before"
            :after="after"
            :play="aniIndex.find((i) => i === index) === index"
          />
          <!-- <text class="l-txt">@女神9527</text> -->
          <text class="r-txt">12.5万</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AnimateCompare from './animate-compare.vue'
@Component({
  components: { AnimateCompare },
})
export default class List extends Vue {
  list: any[] = []
  itemTop: any = null
  aniIndex: number[] = [0, 1]
  navBarInfo = {
    navBarHeight: 86,
    navBarRight: 7,
    navBarTop: 48,
    navCapsuleHeight: 32,
    navCapsuleWidth: 101,
  }
  before: string = 'https://img.yzcdn.cn/vant/cat.jpeg'
  after: string = 'https://pic-file-bucket.oss-cn-beijing.aliyuncs.com/24d683b5-d0dd-48a2-b697-b51bf6478370.png'

  oobserver: any = null
  timeout: number = 0

  mounted() {
    this.list = [
      1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2,
      3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2,
    ]

    setTimeout(() => {
      uni
        .createSelectorQuery()
        .in(this)
        .selectAll('.list-item')
        .boundingClientRect((rect: any) => {
          if (rect) this.itemTop = rect
        })
        .exec()
    }, 1000)
  }

  scroll(e: any) {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.scrollend(e)
    }, 200)
  }

  // 滚动结束
  scrollend(e: any) {
    if (this.itemTop) {
      const { scrollTop } = e.detail
      const screenH = uni.getSystemInfoSync().windowHeight
      for (let i = 0; i < this.itemTop.length; i++) {
        const { top, height } = this.itemTop[i]
        const contain = scrollTop < top && scrollTop + screenH > top + height
        if (contain) {
          if (this.aniIndex.indexOf(i) === -1) {
            this.aniIndex.push(i)
          }
        } else {
          this.aniIndex = this.aniIndex.filter((item) => item !== i)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  background: rgba(0, 0, 0, 0.25);
  .wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    padding: 10px;
    // background-color: #333;
    .card {
      scroll-snap-align: start;
      height: 444rpx;
      background-color: #444;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      border-radius: 20px;
      overflow: hidden;
      position: relative;

      .img {
        width: 100%;
        height: 100%;
      }
      .l-txt,
      .r-txt {
        display: block;
        position: absolute;
        bottom: 20;
        right: 20;
        z-index: 3;
        font-family: Arial;
        font-size: 24rpx;
        font-weight: normal;
        line-height: 48rpx;
        letter-spacing: 0px;
        color: #ffffff;
        text-shadow: 0rpx 8rpx 20rpx rgba(0, 0, 0, 0.3);

        bottom: 11rpx;
        padding-left: 44rpx;
        &::before {
          position: absolute;
          display: block;
          width: 32rpx;
          height: 32rpx;
          content: '';
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          background-image: url('https://pic.to8to.com/te/osf/c325a23a7b8d4b50b1d52dddc95e0e73.png');
          background-repeat: no-repeat;
          background-size: contain;
        }
      }
      .l-txt {
        left: 14rpx;
      }
      .r-txt {
        right: 14rpx;
      }
    }
  }
}

.card {
  color: white;
}
</style>
