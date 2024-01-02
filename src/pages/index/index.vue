<template>
  <view class="page">
    <button @click="update">点击</button>
    <!-- <Header ref="header" />
    <Body />
    <Footer /> -->
    <!-- <picker
      mode="multiSelector"
      @change="onChange"
      :range="[
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['7', '8', '9'],
        ['7', '8', '9'],
      ]"
    >
      <button>click</button>
    </picker> -->
    <PickerView @change="onChange" />
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './component/header.vue'
import Body from './component/body.vue'
import Footer from './component/footer.vue'
import PickerView from './component/picker-view.vue'

@Component({
  components: {
    Header,
    Body,
    Footer,
    PickerView,
  },
})
export default class Index extends Vue {
  public $refs!: Vue['$refs'] & {
    header:
      | {
          $data: any
        }
      | any
  }

  mounted() {
    this.update()
  }
  onShow() {}
  update() {
    // this.$refs.header.init()
    // console.log('this.$refs.header', this.$refs.header.$data.title)
    // console.log('this.$refs.header', this.$refs.header.$data.title2)
    // console.log('this.$refs.header', this.$refs.header.$data.title3)
    // console.log('this.$refs.header', this.$refs.header)
  }
  onChange(e: any) {
    console.log('onChange', e.detail.__args__[0])
  }
}
</script>

<style lang="less" scoped>
.page {
}
</style>
