<template>
  <view class="content">
    <view class="wrap">
      <view v-for="item in list">
        <view class="card">
          <image
            class="img"
            src="https://pic-file-bucket.oss-cn-beijing.aliyuncs.com/24d683b5-d0dd-48a2-b697-b51bf6478370.png"
            mode="scaleToFill"
          />
          <text class="l-txt">@女神9527</text>
          <text class="r-txt">12.5万</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class List extends Vue {
  list: any[] = []

  mounted() {
    this.list = [
      1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2,
      3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2,
    ]
    console.log(this.list)
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
        position: absolute;
        font-family: Arial;
        font-size: 24rpx;
        font-weight: normal;
        line-height: 48rpx;
        letter-spacing: 0px;
        color: #ffffff;
        text-shadow: 0rpx 8rpx 20rpx rgba(0, 0, 0, 0.3);

        bottom: 11rpx;
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
