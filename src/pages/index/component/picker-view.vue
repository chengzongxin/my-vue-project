<template>
  <view class="content">
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
            active: rowDelta(0, index) === 0,
            delta1: rowDelta(0, index) === 1,
            delta2: rowDelta(0, index) > 1,
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
            active: rowDelta(1, index) === 0,
            delta1: rowDelta(1, index) === 1,
            delta2: rowDelta(1, index) > 1,
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
            active: rowDelta(2, index) === 0,
            delta1: rowDelta(2, index) === 1,
            delta2: rowDelta(2, index) > 1,
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
            active: rowDelta(3, index) === 0,
            delta1: rowDelta(3, index) === 1,
            delta2: rowDelta(3, index) > 1,
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
            active: rowDelta(4, index) === 0,
            delta1: rowDelta(4, index) === 1,
            delta2: rowDelta(4, index) > 1,
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
@Component({
  components: {},
})
export default class PickerView extends Vue {
  initSelected = [2, 1, 0, 0, 1]
  selectValues = [0, 0, 0, 0, 0]
  woshi = [1, 2, 3, 4, 5]
  ting = [1, 2, 3, 4, 5]
  chufang = [1, 2, 3, 4, 5]
  wei = [1, 2, 3, 4, 5]
  yangtai = [1, 2, 3, 4, 5]
  onChange(e: any) {
    this.selectValues = e.detail.value
    this.$emit('change', e.detail.value)
  }
  rowDelta(column: number, row: number) {
    return Math.abs(this.selectValues[column] - row)
  }
}
</script>

<style lang="less" scoped>
.content {
  background-color: #111;
}
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
