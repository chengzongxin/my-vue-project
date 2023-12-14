<template>
  <div class="page">
    <nav-bar
      ref="navBar"
      :list="navList"
      :active-index="activeIndex"
      widget-uid="compare_tab"
      @on-click-item="handleClickNavItem"
    />
    <swiper class="content-swiper" ref="contentSwiper" @change="syncSwipers" :current="activeIndex">
      <swiper-item v-for="(value, key) in imageList" :key="key">
        <scroll-view scroll-y class="swiper-item">
          <template v-for="(url, index) in value">
            <div :class="key + '-' + (index + 1)" :key="url">
              <image :src="url" mode="widthFix" />
            </div>
          </template>
          <service-scope v-if="key === 'part3'" />
        </scroll-view>
      </swiper-item>
    </swiper>
    <footer-btn @click="handleClick" :loading="submitLoading">{{ navList[activeIndex].btnText }}</footer-btn>
    <!-- <tu-modal v-model="visible">
      <div class="add-wx-modal">
        <i></i>
        <div class="ht">领取成功</div>
        <p class="p">{{ modalText }}</p>
        <div class="flow-path" v-if="activeIndex !== 2"></div>
        <tu-button @click="handleAddWX" class="add-wx-btn" :border-radius="20" :font-size="32">点击加微信</tu-button>
      </div>
    </tu-modal> -->
  </div>
</template>

<script>
// import { default as AppUtil, commonLogin } from '@to8to/app-js-api'
// import widgetReportMixin from '@/mixins/widgetReportMixin'
// import { submitClueInfo } from '@/utils/landingUtils'
// import { Url } from '@/utils/toolkit/url'
// import { loginExecute, routerJump } from '@/utils/utils'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
import NavBar from './components/nav-bar.vue'
import FooterBtn from './components/footer-btn.vue'
// import OILink from 'components/OILink'
import { compareNavList } from './data.js'
import ServiceScope from './components/service-scope.vue'

const query = {}
const curTab = query.tab ? Number(query.tab) : 0
// const appUtil = new AppUtil()
// appUtil.use({ commonLogin })

// const pageUrl = 'https://napp.to8to.com/muwf/pages/service/compare.html'
// const oichannel = appUtil.oichannel || ''

const getPtag = (activeIndex) => {
  const { ptag } = compareNavList[activeIndex]
  return ptag[0]
}

export default {
  // mixins: [widgetReportMixin],
  components: {
    NavBar,
    FooterBtn,
    ServiceScope,
  },
  data() {
    return {
      navList: Object.freeze(compareNavList),
      imageList: {
        part1: [
          'https://pic.to8to.com/te/osf/a16e5fd064ef4582b59a93fbd80fd075.png',
          'https://pic.to8to.com/te/osf/c385bef1191346cb9f1cb21d19110237.png',
          'https://pic.to8to.com/te/osf/44c2fbed523b4679a27be50261b91fc2.png',
        ],
        part2: [
          'https://pic.to8to.com/te/osf/228ea991c48846e19bca86a39c8b4d4c.png',
          'https://pic.to8to.com/te/osf/b81fe7918e1c408797e239d8ab7c21a8.png',
          'https://pic.to8to.com/te/osf/2365fc09090243d09e38965da700d7db.png',
        ],
        part3: [
          'https://pic.to8to.com/te/osf/2f7e4ab4808f49309d87cb0107400e8f.png',
          'https://pic.to8to.com/te/osf/ac717dfcfed849b99e48b0de0b441d30.png',
        ],
      },
      activeIndex: curTab,
      contentSwiperOptions: {
        autoHeight: true,
        initialSlide: curTab,
      },
      visible: false,
      submitLoading: false,
    }
  },
  computed: {
    // contentSwiper() {
    //   return this.$refs.contentSwiper.swiper
    // },
    modalText() {
      return compareNavList[this.activeIndex].modalText
    },
  },
  created() {},
  mounted() {
    // this.syncSwipers()
    // this.oilink = new OILink({
    //   pageUrl: `${pageUrl}?tab=${this.activeIndex}&oichannel=${oichannel}`,
    //   autoOpenApp: false,
    //   oichannel, // 如果url上没有oichannel，可以设置默认的oichannel
    // })
  },
  methods: {
    syncSwipers(e) {
      // console.log('syncSwipers', e)
      // this.contentSwiper.on('slideChange', () => {
      // const currentIndex = this.contentSwiper.realIndex
      const currentIndex = e.detail.current
      this.activeIndex = currentIndex
      this.$refs.navBar.setActiveIndex(currentIndex)
      // this.$refs.navBar.moveAnchor(currentIndex)
      // })
    },
    handleClickNavItem(index) {
      console.log(index)
      this.activeIndex = index
      // this.contentSwiper.slideTo(index, 300)
    },
    handleClick() {
      const { tab, btnText } = compareNavList[this.activeIndex]
      // this.widgetReport(
      //   {
      //     widget_uid: 'take_free_btn',
      //     widget_title: btnText,
      //     widget_subtitle: tab,
      //   },
      //   'webWidgetClick'
      // )
      // if (!appUtil.isApp) {
      //   this.oilink.openAppPage(`${pageUrl}?tab=${this.activeIndex}&oichannel=${oichannel}`)
      //   return
      // }

      // login wx
      // loginExecute(appUtil, async () => {
      //   this.submitLoading = true
      //   const [err, res] = await submitClueInfo({
      //     ptag: getPtag(this.activeIndex),
      //     uid: appUtil.uid,
      //     to8toToken: appUtil.to8to_token,
      //   })
      //   this.submitLoading = false
      //   if (err) {
      //     this.$TuToast({
      //       position: 'middle',
      //       message: err.message || '提交失败，请稍后再试',
      //       duration: 3000,
      //     })
      //     return
      //   }
      //   this.visible = true
      //   this.phoneId = res.phoneId
      //   this.clueId = res.clueId
      // })
    },
    handleAddWX() {
      const { tab, valuePointId, incWechatCode } = compareNavList[this.activeIndex]
      this.widgetReport(
        {
          widget_uid: 'add_wechat_btn',
          widget_title: '点击加微信',
          widget_subtitle: tab,
        },
        'webWidgetClick'
      )
      const addWxPath = Url.stringObj(
        {
          valuePointId,
          incWechatCode,
          cityId: query.cityid || query.cityId || '',
          ptag: getPtag(this.activeIndex),
          clueId: this.clueId,
          phoneId: this.phoneId,
          to8to_from: query.channel || query.to8to_from || '',
          clueUrl: window.location.origin + window.location.pathname || '', // 着陆页链接
        },
        '/subsidiary/vAddWechat'
      )
      routerJump(addWxPath, appUtil)
    },
  },
}
</script>

<style lang="less" scoped>
// @charset "UTF-8";
// @import '_public/css/global.css';
// @import '_public/css/common.less';

// body {
//   background-color: #f7f8fc;
// }
.page {
  width: 100%;
  min-height: 100vh;
  padding-bottom: 311rpx;
  // .backgroundMixin('~@/assets/service/list-head.png', 100% 625rpx);
  background-image: url('https://pic.to8to.com/te/osf/555b8bead242439fb3d2d7b6fbe83f71.png');
  background-repeat: no-repeat;
  background-size: 100% 625rpx;
}
.nav-bar {
  /deep/ .nav {
    display: flex;
    li {
      flex: 1;
      text-align: center;
    }
  }
}
.content-swiper {
  // padding-top: 88px;
  // min-height: 100vh;
  // height: calc(100% - 51px - 121px);
  // height: 100%;
  // height: calc(100%);
  height: 100vh;

  .swiper-item {
    margin-top: 51px;
    width: 100%;
    height: calc(100% - 51px - 121px);
  }
}
.part1-1 {
  width: 100%;
  height: 304rpx;

  image {
    margin-top: 45rpx;
    margin-left: 59rpx;
    width: 558rpx;
  }
}
.part2-1 {
  width: 100%;
  height: 304rpx;

  image {
    margin-top: 45rpx;
    margin-left: 59rpx;
    width: 611rpx;
    height: 193rpx;
  }
}
.part3-1 {
  width: 100%;
  height: 304rpx;

  image {
    margin-top: 45rpx;
    margin-left: 59rpx;
    width: 557rpx;
    height: 193rpx;
  }
}
.part1-2,
.part1-3,
.part2-2,
.part2-3,
.part3-2,
.part3-3 {
  width: 710rpx;
  margin: auto;

  image {
    width: 100%;
  }
}
.add-wx-modal {
  width: 634rpx;
  background: #ffffff;
  border-radius: 30rpx;
  padding: 0 66rpx 64rpx;
  text-align: center;
  i {
    display: inline-block;
    width: 105rpx;
    height: 105rpx;
    // .backgroundMixin('~@/assets/common/submit-success-2.png');
    margin-top: -50rpx;
    margin-bottom: 30rpx;
  }
  .ht {
    font-size: 42rpx;
    font-weight: bold;
    color: #20c684;
  }
  .p {
    font-size: 26rpx;
    font-weight: 500;
    color: #333333;
    line-height: 45rpx;
    margin: 33rpx 0 60rpx;
  }
  .flow-path {
    width: 463rpx;
    height: 98rpx;
    // .backgroundMixin('~@/assets/service/flow-path.png');
    margin: 0 auto 60rpx;
  }
  .add-wx-btn {
    /deep/ span {
      font-weight: bold;
    }
  }
}
</style>
