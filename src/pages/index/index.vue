<template>
  <view class="page">
    <scroll-view class="scroll-view" scroll-y @scroll="onScroll">
      <view>
        <Header @upload="showUploadTips = true" ref="header" />
        <Tab class="tab" />
        <List ref="list" />
        <Feed />
        <UploadTips v-if="showUploadTips" @close="showUploadTips = false" @upload="onUploadBtnClick" />
        <UploadSheet v-if="showUploadSheet" @cancel="showUploadSheet = false" @photo="photo" @camera="camera" />
      </view>
    </scroll-view>
    <button class="float-btn" plain v-if="isScrollToTop" @click="onClickFloatBtn">
      <image
        class="float-btn-icon"
        src="https://pic.to8to.com/te/osf/af519eb5413a43d3af5f6565a069ac9d.png"
        mode="scaleToFill"
      />
    </button>
    <FloatHeader
      @upload="showUploadTips = true"
      ref="floatHeader"
      v-show="showFloatHeader"
      @close="showFloatHeader = false"
    />
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './component/header.vue'
import Tab from './component/tab.vue'
import List from './component/list.vue'
import UploadTips from './component/upload-tips.vue'
import UploadSheet from './component/upload-sheet.vue'
import FloatHeader from './component/float-header.vue'

@Component({
  components: { Header, Tab, List, UploadTips, UploadSheet, FloatHeader },
})
export default class Index extends Vue {
  showUploadTips = false
  showUploadSheet = false
  isScrollToTop = false
  showFloatHeader = false

  chooseImg = 'https://pic-file-bucket.oss-cn-beijing.aliyuncs.com/24d683b5-d0dd-48a2-b697-b51bf6478370.png'

  headers() {
    const header: any = this.$refs.header
    const floatHeader: any = this.$refs.floatHeader
    return [header, floatHeader]
  }

  mounted() {
    // this.photo()
  }

  onUploadBtnClick() {
    this.showUploadTips = false
    this.showUploadSheet = true
  }

  onScroll(e: any) {
    const list: any = this.$refs.list
    list.scroll(e)
    uni
      .createSelectorQuery()
      .in(this)
      .select('.tab')
      .boundingClientRect((rect: any) => {
        // console.log(rect)
        this.isScrollToTop = rect.top <= 0
      })
      .exec()
  }

  photo() {
    console.log('photo')
    this.headers().forEach((item: any) => {
      item.onUpload(this.chooseImg)
    })
  }

  camera() {
    console.log('camera')
    const header: any = this.$refs.header
    const floatHeader: any = this.$refs.floatHeader
  }

  onClickFloatBtn() {
    console.log('onClickFLoatBtn')
    this.showFloatHeader = true
  }
}
</script>

<style lang="less" scoped>
.page {
  position: relative;
  background-image: linear-gradient(0deg, #261033 0%, #1e0748 55%, #1f062a 100%);
  .scroll-view {
    height: 100vh;
    width: 100%;
    position: relative;
  }
  .float-btn {
    position: absolute;
    bottom: 232rpx;
    right: 40rpx;
    z-index: 1001;
    background-color: transparent;
    border: none;
    &-icon {
      width: 120rpx;
      height: 120rpx;
    }
  }
}
</style>
