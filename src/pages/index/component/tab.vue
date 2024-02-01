<template>
  <view class="content sticky">
    <scroll-view class="scroll-view_H" scroll-x>
      <block v-for="(item, index) in tabs" :key="index">
        <view class="tab-item">
          <text class="tab-item-content">{{ item }}</text>
        </view>
      </block>
    </scroll-view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Tab extends Vue {
  tabs: string[] = [
    '女神降临',
    '女神降临',
    '女神降临',
    '女神降临',
    '女神降临',
    '女神降临',
    '女神降临',
    '女神降临',
    '女神降临',
    '女神降临',
    '女神降临',
    '女神降临',
    '女神降临',
    '女神降临',
    '女神降临',
    '女神降临',
    '女神降临',
    '女神降临',
    '女神降临',
    '女神降临',
  ]
}
</script>

<style lang="less" scoped>
.content {
  // background: linear-gradient(90deg, #0d1e3a -3%, #10254f 50%, #0d1e39 103%, rgba(0, 0, 0, 0.9979) 103%);
  background: rgba(0, 0, 0, 0.25);
  border-radius: 48px 48px 0px 0px;
  padding: 20rpx 17rpx;
  z-index: 999;
  // display: flex;
  // gap: 13rpx;

  .tab-item {
    display: inline-block;
    border-radius: 60rpx;
    opacity: 1;
    // background: linear-gradient(90deg, #d7fbef 0%, #f2cbf6 100%);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 36rpx;
    box-shadow: 0rpx 8rpx 20rpx 0rpx rgba(0, 0, 0, 0.3);
    padding: 17rpx 30rpx;
    &:not(:last-child) {
      margin-right: 26rpx;
    }
    .tab-item-content {
      font-family: MiSans-Demibold;
      font-size: 28rpx;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      font-weight: 600;
    }
  }
}
.scroll-view_H {
  white-space: nowrap;
  width: 100%;
}
.sticky {
  position: sticky;
  top: 0;
}
</style>
