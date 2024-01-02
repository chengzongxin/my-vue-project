<template>
  <view class="content">{{ title }}</view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Header extends Vue {
  title: string = 'header'
  title2: string = 'header2'
  title3: string = 'header3'
  created() {}
  mounted() {}
  updated() {}
  destroyed() {}
  init() {
    this.title = 'header init finish'
  }
}
</script>

<style lang="less" scoped>
.content {
}
</style>
