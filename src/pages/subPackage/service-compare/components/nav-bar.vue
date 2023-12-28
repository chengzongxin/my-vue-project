<template>
  <div class="nav-bar">
    <ul class="nav" ref="navRef">
      <li v-for="(item, index) in list" :key="index" :class="{ on: active === index }" @click="handleClickItem(index)">
        {{ item.tab }}
      </li>
    </ul>
  </div>
</template>
<script>
// import widgetReportMixin from '@/mixins/widgetReportMixin';

export default {
  // mixins: [widgetReportMixin],
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    widgetUid: String,
    activeIndex: Number,
  },
  data() {
    return {
      active: this.activeIndex,
    }
  },
  watch: {
    active: {
      handler() {
        this.report()
      },
      immediate: true,
    },
  },
  mounted() {
    if (this.active) {
      this.moveAnchor(this.active)
    }
  },
  methods: {
    report() {
      // this.widgetReport(
      //   {
      //     widget_uid: this.widgetUid,
      //     widget_index: this.active,
      //     widget_title: this.list[this.active].tab,
      //   },
      //   'webWidgetShow'
      // )
    },
    setActiveIndex(index) {
      if (index === this.active) {
        return
      }
      this.active = index
    },
    handleClickItem(index) {
      if (index === this.active) {
        return
      }
      this.active = index
      this.$emit('on-click-item', index)
    },
    moveAnchor(index) {
      const navRef = this.$refs.navRef
      const navItems = navRef.children
      const navWidth = navRef.clientWidth
      const offsetLeft = navItems[index].offsetLeft
      const itemWidth = navItems[index].clientWidth
      const offsetX = Math.max(offsetLeft + itemWidth / 2 - navWidth / 2, 0)

      this.active = index
      $(navRef).stop(true).animate(
        {
          // eslint-disable-line
          scrollLeft: offsetX,
        },
        200
      )
    },
  },
}
</script>
<style lang="less" scoped>
.nav-bar {
  width: 100%;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  transition-property: left;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background-color: #1dc87c;
  .nav {
    width: 100%;
    font-size: 0rpx;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    position: relative;
    padding: 30rpx 0rpx 30rpx;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      display: inline-block;
      position: relative;
      cursor: pointer;
      font-size: 30rpx;
      color: #ffffff;
      opacity: 0.6;
      padding: 0 40rpx;
      &.on {
        opacity: 1;
        font-weight: bold;
        &::after {
          content: ' ';
          position: absolute;
          left: 50%;
          bottom: -16rpx;
          margin-left: -17rpx;
          width: 34rpx;
          height: 8rpx;
          background: #ffffff;
          border-radius: 4rpx;
        }
      }
    }
  }
}
</style>
