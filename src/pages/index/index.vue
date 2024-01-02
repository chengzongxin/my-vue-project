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
    <picker-view
      :value="initSelected"
      @change="onChange"
      class="picker-view"
      mask-class="mask-class"
      indicator-class="indicator-class"
      immediate-change
    >
      <picker-view-column>
        <view
          class="item"
          :class="{
            active: rowDistance(0, index) === 0,
            delta1: rowDistance(0, index) === 1,
            delta2: rowDistance(0, index) > 1,
          }"
          v-for="(item, index) in woshi"
          :key="index"
        >
          {{ item }}卧室
        </view>
      </picker-view-column>
      <picker-view-column>
        <view
          class="item"
          :class="{
            active: rowDistance(1, index) === 0,
            delta1: rowDistance(1, index) === 1,
            delta2: rowDistance(1, index) > 1,
          }"
          v-for="(item, index) in ting"
          :key="index"
        >
          {{ item }}厅
        </view>
      </picker-view-column>
      <picker-view-column>
        <view
          class="item"
          :class="{
            active: rowDistance(2, index) === 0,
            delta1: rowDistance(2, index) === 1,
            delta2: rowDistance(2, index) > 1,
          }"
          v-for="(item, index) in chufang"
          :key="index"
        >
          {{ item }}厨房
        </view>
      </picker-view-column>
      <picker-view-column>
        <view
          class="item"
          :class="{
            active: rowDistance(3, index) === 0,
            delta1: rowDistance(3, index) === 1,
            delta2: rowDistance(3, index) > 1,
          }"
          v-for="(item, index) in wei"
          :key="index"
        >
          {{ item }}卫
        </view>
      </picker-view-column>
      <picker-view-column>
        <view
          class="item"
          :class="{
            active: rowDistance(4, index) === 0,
            delta1: rowDistance(4, index) === 1,
            delta2: rowDistance(4, index) > 1,
          }"
          v-for="(item, index) in yangtai"
          :key="index"
        >
          {{ item }}阳台
        </view>
      </picker-view-column>
    </picker-view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './component/header.vue'
import Body from './component/body.vue'
import Footer from './component/footer.vue'

@Component({
  components: {
    Header,
    Body,
    Footer,
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
  initSelected = [2, 1, 0, 0, 1]
  selectValues = [0, 0, 0, 0, 0]
  woshi = [1, 2, 3, 4, 5]
  ting = [1, 2, 3, 4, 5]
  chufang = [1, 2, 3, 4, 5]
  wei = [1, 2, 3, 4, 5]
  yangtai = [1, 2, 3, 4, 5]
  onChange(e: any) {
    console.log(e.detail.value)
    this.selectValues = e.detail.value
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
  selectRows(column: number, row: number) {
    console.log(column, row)
    const isActive = this.selectValues[column] === row
    const isDelta1 = this.selectValues[column] - row == 1 || this.selectValues[column] - row == -1
    const isDelta2 = this.selectValues[column] - row >= 2 || this.selectValues[column] - row <= -2
    // return { active: isActive, delta1: isDelta1, delta2: isDelta2 }
    return { active: isActive }
  }
  rowDistance(column: number, row: number) {
    const i = Math.abs(this.selectValues[column] - row)
    return i
  }
}
</script>

<style lang="less" scoped>
.page {
  background-color: #111;
  .picker-view {
    width: 750rpx;
    height: 486rpx;
    background-color: transparent;
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #999;
    &.active {
      color: #fff;
    }
    &.delta1 {
      color: #999;
    }
    &.delta2 {
      color: #666;
    }
  }
}
/deep/ .indicator-class {
  width: 100rpx;
  height: 102rpx;
  line-height: 102rpx;
  position: relative;
  &::before,
  &::after {
    // width : 150rpx * 5
    position: absolute;
    width: 50rpx;
    left: 50rpx;
    background-image: linear-gradient(-78deg, #1cea9a 0%, #1cea9a 96%);
    // transform: translateX(50%);
  }
}

/deep/ .mask-class {
  background: rgba(0, 0, 0, 0.1);
}
</style>
