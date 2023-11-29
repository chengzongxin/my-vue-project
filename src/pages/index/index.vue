<template>
  <view class="page">
    <!-- 用户信息卡片 -->
    <view class="user-info">
      <view class="info flex">
        <text class="name ellipsis">我家的装修信息</text>
      </view>
      <view class="property flex">
        <view class="address flex">
          <view class="icon icon-1"></view>
          {{ '——' }}
        </view>
        <view class="address flex">
          <view class="icon icon-2"></view>
          {{ '——' }}
        </view>
        <view class="address flex">
          <view class="icon icon-3"></view>
          {{ '——' }}
        </view>
      </view>
    </view>

    <!-- 装修保障 -->
    <view class="guarantee">
      <view class="guarantee-body">
        <view class="guarantee-content">
          <view class="guarantee-item">
            <view class="img">
              <image src="https://pic.to8to.com/te/osf/cc9e4c3151bc4e43b9f91a3a47502df2.png" />
            </view>
            <text>先装修后支付</text>
          </view>
          <view class="guarantee-item">
            <view class="img">
              <image src="https://pic.to8to.com/te/osf/84af6ac435414f87a3ce8c4914588090.png" />
            </view>
            <text>第三方质检</text>
          </view>
          <view class="guarantee-item">
            <view class="img">
              <image src="https://pic.to8to.com/te/osf/84af6ac435414f87a3ce8c4914588090.png" />
            </view>
            <text>正品辅材</text>
          </view>
          <view class="guarantee-item">
            <view class="img">
              <image src="https://pic.to8to.com/te/osf/3c0d2d873c854b839019e5294266af33.png" />
            </view>
            <text>更多保障</text>
          </view>
        </view>

        <swiper class="recommend" :current="0" @change="onChangeSwiper">
          <swiper-item v-for="(item, index) in [1, 2]" :key="index">
            <view class="recommend-item" v-for="item in [1, 2]">
              <view class="recommend-item-w">
                <image src="https://pic.to8to.com/te/osf/92a7f60140744d9f8c1092ed787964ff.png" />
                <view class="recommend-content">
                  <text class="re-title">如何选靠谱装修公司？</text>
                  <text class="re-subtitle">31421人看过</text>
                </view>
              </view>
            </view>
          </swiper-item>
        </swiper>

        <view class="swiper-dotbox" :style="'width: ' + 2 * 20 + 'rpx;'">
          <view class="swiper-dot" :style="'left: ' + curIdx * 20 + 'rpx;'"></view>
        </view>
      </view>
    </view>

    <decProcessFloatBtn @click="onClickBtn" />
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import decProcessFloatBtn from './decProcessFloatBtn.vue'
@Component({
  components: {
    decProcessFloatBtn,
  },
})
export default class Index extends Vue {
  curIdx: number = 0

  onChangeSwiper(e: any) {
    console.log(e)

    this.curIdx = e.detail.current
  }

  onClickBtn() {
    console.log('onClickBtn')
  }
}
</script>

<style lang="less" scoped>
.page {
  position: relative;
  min-height: 100vh;
  background-image: url('https://pic.to8to.com/te/osf/809e8de81ed64f2d85c8efbb2552a016.png');
  background-size: 100% 362rpx;
  background-repeat: no-repeat;
  background-position: top center;
  background-color: #f5f8f6;
  padding-top: 20rpx;
  //   .safe-area-style(padding-bottom, 20rpx);
  .user-info {
    border-radius: 16rpx;
    padding: 40rpx;
    margin: 0 20rpx;
    background: #ffffff;
    // background-image: linear-gradient(171deg, rgba(34, 199, 135, 0.05) 0%, rgba(34, 199, 135, 0) 98%);
    .info {
      margin-bottom: 30rpx;
      .name {
        font-size: 32rpx;
        color: #333533;
        letter-spacing: 0;
        font-weight: 600;
      }
      .id {
        background: rgba(34, 199, 135, 0.15);
        border-radius: 8rpx;
        font-size: 20rpx;
        color: #22c787;
        letter-spacing: 0;
        font-weight: 400;
        padding: 7rpx 10rpx;
        margin-left: 20rpx;
        flex-shrink: 0;
      }
    }
    .property {
      .address {
        font-size: 24rpx;
        color: #333533;
        font-weight: 400;
        .icon {
          width: 28rpx;
          height: 28rpx;
          margin-right: 10rpx;
          flex-shrink: 0;
          &.icon-1 {
            background: url('https://pic.to8to.com/te/osf/e9bb1b68dfce482cb4ea0a8c5e898223.png') no-repeat;
            background-size: 100% 100%;
          }
          &.icon-2 {
            background: url('https://pic.to8to.com/te/osf/6b4398990962445bb54d478d04fc68ac.png') no-repeat;
            background-size: 100% 100%;
          }
          &.icon-3 {
            background: url('https://pic.to8to.com/te/osf/103060ea31e940d496f383fac7fd21b2.png') no-repeat;
            background-size: 100% 100%;
          }
        }
        &:not(:first-child)::before {
          content: '|';
          color: rgba(201, 203, 201, 1);
          width: 1rpx;
          height: 28rpx;
          margin: 0 20rpx 2rpx;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
    .no-data {
      text-align: center;
    }
  }

  .guarantee {
    margin: 0 20rpx;
    background-image: url('https://pic.to8to.com/te/osf/ac0a2796c29f46809b7cfd7458554635.png');
    background-size: 100% 104rpx;
    background-repeat: no-repeat;
    background-position: top center;
    min-height: 104rpx;
    margin-top: 20rpx;
    padding-top: 80rpx;

    .guarantee-body {
      border-radius: 24rpx;
      overflow: hidden;
      position: relative;
      .guarantee-content {
        display: flex;
        background: #ffffff;
        border-bottom: 1rpx solid rgba(236, 238, 236, 1);
        .guarantee-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .img {
            margin-top: 40rpx;
            width: 60rpx;
            height: 60rpx;
            border-radius: 50%;
            background: #f6f8f6;
            padding: 20rpx;
            image {
              width: 100%;
              height: 100%;
              // width: 60rpx;
              // height: 60rpx;
            }
          }
          text {
            margin-top: 16rpx;
            margin-bottom: 40rpx;
            font-family: MiSans-Regular;
            font-size: 24rpx;
            color: #333533;
            text-align: center;
            font-weight: 400;
          }
        }
      }
      .recommend {
        background-color: #fff;
        position: relative;
        // height: 50rpx;
        .recommend-item {
          height: 120rpx;
          .recommend-item-w {
            padding: 40rpx 32rpx;
            display: flex;
            align-items: flex-start;
            image {
              width: 48rpx;
              height: 48rpx;
              margin-right: 16rpx;
            }
            .recommend-content {
              display: flex;
              flex-direction: column;
              .re-title {
                font-family: MiSans-Medium;
                font-size: 28rpx;
                color: #333533;
                letter-spacing: 0;
                font-weight: 500;
              }
              .re-subtitle {
                margin-top: 10rpx;
                font-family: MiSans-Regular;
                font-size: 24rpx;
                color: #979997;
                letter-spacing: 0;
                font-weight: 400;
              }
            }
          }
        }
      }
      .swiper-dotbox {
        position: absolute;
        bottom: 12rpx;
        left: 50%;
        transform: translateX(-50%);
        height: 4rpx;
        background: #e9e9e9;
        border-radius: 3rpx;

        .swiper-dot {
          position: absolute;
          left: 0;
          width: 20rpx;
          height: 4rpx;
          opacity: 0.9;
          background: #22c787;
          border-radius: 3rpx;
        }
      }
    }
  }
}

.flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
