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
// import WarnSunBtn from '@chengzongxin/test-com/lib/warn-sun-btn.umd.min.js'
// import OssUploader, { BIZ_ID_TYPE, DEFAULT_APPNAME } from '@to8to/oss-uploader/index.mp'
// import TestCom from '@chengzongxin/test-com'
// import TestCom from '@chengzongxin/test-com/lib/test-com.umd.min.js'
// import TestCom from '@chengzongxin/test-com'

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
