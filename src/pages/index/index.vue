<template>
  <view class="page">
    <!-- 头部用户信息 -->
    <view class="header">
      <view class="user">
        <image src="/static/logo.png" mode="scaleToFill" />
        <text>用户名</text>
      </view>
      <view class="user">
        <image src="/static/logo.png" mode="scaleToFill" />
        <text>用户名</text>
      </view>
    </view>

    <!-- 出图 -->
    <view class="pic">
      <view class="pic-1">
        <image src="/static/logo.png" mode="scaleToFill" />
      </view>
      <view class="pic-1">
        <image src="/static/logo.png" mode="scaleToFill" />
      </view>
    </view>

    <!-- 底部tool -->
    <view class="tool-bar">
      <view class="left-box">
        <view class="tool-item">
          <text>设计我家效果</text>
        </view>
      </view>
      <view class="right-box">
        <view class="tool-item">
          <!-- <image src="/static/logo.png" mode="scaleToFill" /> -->
          <text>按住说话</text>
        </view>
        <view class="tool-item">
          <text>快捷修图</text>
        </view>
        <view class="tool-item">
          <text>暂停</text>
        </view>
      </view>
      >
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {},
})
export default class Index extends Vue {
  mounted() {
    console.log('mounted')
  }
}
</script>

<style lang="less" scoped>
.page {
  min-height: 100vh;
  background-color: rgb(25, 24, 24);
  .header {
    display: flex;
    justify-content: space-between;
    padding: 20rpx;
    .user {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      image {
        // border-radius: 50%;
        width: 90%;
      }
      text {
        margin-top: 10rpx;
        font-size: 24rpx;
        color: white;
      }
    }
  }

  .pic {
    margin-top: 88rpx;
    display: flex;
    justify-content: space-between;
    padding: 20rpx;
    .pic-1 {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      image {
        width: 90%;
      }
    }
  }

  .tool-bar {
    display: flex;
    justify-content: space-between;
    // float: left;
    position: absolute;
    bottom: 44rpx;
    width: 100%;
    padding: 0 20rpx;

    .left-box,
    .right-box {
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: end;
    }
  }
}

.tool-item {
  background-color: black;
  border-radius: 44rpx;
  overflow: hidden;
  //   display: inline-flex;
  //   flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20rpx;
  height: 88rpx;
  line-height: 88rpx;
  image {
    width: 40rpx;
    height: 100%;
  }
  text {
    font-size: 24rpx;
    color: white;
    line-height: 88rpx;
    height: 88rpx;
    text-align: center;
  }
}
</style>
