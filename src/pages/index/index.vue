<template>
  <view class="page">
    <!-- <scroll-view scroll-y scroll="onScroll"> -->
    <Header @upload="showUploadTips = true" />
    <Tab />
    <List />
    <Feed />
    <UploadTips v-if="showUploadTips" @close="showUploadTips = false" @upload="onUploadBtnClick" />
    <UploadSheet v-if="showUploadSheet" @cancel="showUploadSheet = false" @photo="photo" @camera="camera" />
    <!-- </scroll-view> -->
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './component/header.vue'
import Tab from './component/tab.vue'
import List from './component/list.vue'
import UploadTips from './component/upload-tips.vue'
import UploadSheet from './component/upload-sheet.vue'

@Component({
  components: { Header, Tab, List, UploadTips, UploadSheet },
})
export default class Index extends Vue {
  showUploadTips = false
  showUploadSheet = false

  onUploadBtnClick() {
    this.showUploadTips = false
    this.showUploadSheet = true
  }

  onScroll(e: any) {
    console.log('onScroll:', e)
  }

  photo() {
    console.log('photo')
  }

  camera() {
    console.log('camera')
  }
}
</script>

<style lang="less" scoped>
.page {
  // background-color: #000;
  background-image: linear-gradient(0deg, #0c1b33 0%, #11244b 53%, #1f0a29 100%);
  position: relative;
  min-height: 100vh;
}
</style>
