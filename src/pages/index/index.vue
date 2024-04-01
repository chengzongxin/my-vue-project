<template>
  <view class="page">
    hahahahah

    <p>----------------</p>
    <test-com type="success">hhhh</test-com>
    <p>----------------</p>
    <test-com type="primary">hhhh</test-com>
    <p>----------------</p>
    <test-com type="test">hhhh</test-com>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    // TestCom,
  },
})
export default class Index extends Vue {}
</script>

<style lang="less" scoped>
.page {
}
</style>
