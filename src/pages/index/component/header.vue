<template>
  <view class="content">
    <text class="title">
      都说看物品就能推断出主人的性格，Ta的家，又将由什么性格统治呢？让我们一起揭晓格式气质魅力的Ta，适合怎样的家居搭配
    </text>
    <view class="main">
      <view class="upload">
        <view class="wrap">
          <view v-if="actionType === 1">
            <view class="action-upload">
              点击上传
              <br />
              你心目中Ta的照片
            </view>
          </view>
          <view v-if="actionType === 2">点击上传 你心目中Ta的照片</view>
          <view v-if="actionType === 3">
            <view class="action-failed">点击重新上传</view>
          </view>
          <view v-if="actionType === 4">点击上传 你心目中Ta的照片</view>
        </view>
        <view class="tip-txt">上传一张照片，生成Ta的家</view>
      </view>
      <view class="result">
        <view class="wrap"></view>
        <view class="tip-txt">生成结果示范</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
enum ActionType {
  Upload = 1,
  Auditing = 2,
  UploadFailed = 3,
  UploadSuccess = 4,
}

import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Header extends Vue {
  [x: string]: any
  actionType: ActionType = ActionType.Upload
  created() {}
  mounted() {}
  updated() {}
  destroyed() {}
  init() {}
}
</script>

<style lang="less" scoped>
.content {
  margin-bottom: 25rpx;
  .title {
    font-family: Alibaba PuHuiTi 2;
    font-size: 12px;
    font-weight: normal;
    line-height: 21px;
    letter-spacing: -0.3px;
    font-feature-settings: 'kern' on;
    // color: #3b3b3b;
    color: #c7c7c7;

    display: block;
    padding: 28rpx 44rpx 0rpx 44rpx;
  }

  .main {
    display: flex;
    justify-content: space-between;
    margin: 14rpx 22rpx 0 22rpx;
    gap: 20rpx;

    .upload,
    .result {
      flex: 1;
      .wrap {
        border-radius: 40rpx;
        width: 100%;
        height: 444rpx;
        // background: #f5f5f5;
        background: #191c23;

        font-family: MiSans-Medium;
        font-size: 28rpx;
        color: #ffffff;
        letter-spacing: 0;
        text-align: center;
        font-weight: 500;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}

.tip-txt {
  font-family: Alibaba PuHuiTi 2;
  font-size: 12px;
  font-weight: normal;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.3px;
  font-feature-settings: 'kern' on;
  // color: #3b3b3b;
  color: #b8b8b8;
  display: block;
  margin-top: 28rpx;
}
</style>
