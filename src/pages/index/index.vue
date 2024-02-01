<template>
  <view class="page">
    <!-- <scroll-view scroll-y scroll="onScroll"> -->
    <Header />
    <Tab />
    <List />
    <Feed />
    <!-- </scroll-view> -->
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './component/header.vue'
import Tab from './component/tab.vue'
import List from './component/list.vue'

@Component({
  components: { Header, Tab, List },
})
export default class Index extends Vue {
  onScroll(e: any) {
    console.log('onScroll:', e)
  }
}
</script>

<style lang="less" scoped>
.page {
  // background-color: #000;
  background-image: linear-gradient(0deg, #0c1b33 0%, #11244b 53%, #1f0a29 100%);
  position: relative;
}
</style>
