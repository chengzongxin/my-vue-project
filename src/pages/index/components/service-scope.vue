<template>
  <div class="service-scope">
    <h1 class="title">服务范围</h1>
    <div class="area-item" v-for="(scope, index) in serviceScope" :key="index">
      <span class="area-tag">{{ scope.area }}</span>
      <div class="city-list">{{ scope.cityList }}</div>
    </div>
    <div class="tips">
      <span>注意事项:</span>
      <p>
        （1）以上城市的部分区域暂未提供巴兔先装修后支付服务、质检服务，具体开通及覆盖情况，以当地实际情况为准，详情可致电4006-900-288确认。
      </p>
      <p>
        （2）关于先装修后支付服务的具体付款规则、质检服务的节点及次数均以您在土巴兔平台上签署的服务合同或APP后台展示的详情为准。请您在签署合同前仔细阅读相关条款，了解服务的具体内容和要求。
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      serviceScope: [
        {
          area: '华北地区',
          cityList: '北京，天津，廊坊，石家庄，太原，沈阳，大连',
        },
        {
          area: '华东地区',
          cityList:
            '上海，南昌，杭州，嘉兴，昆山，张家港，南京，宁波，南通，苏州，常州，常熟，太仓，无锡，泰州，扬州，徐州，温州，镇江，福州，泉州，厦门，济南，合肥，芜湖，青岛，烟台',
        },
        {
          area: '中南地区',
          cityList: '郑州，长沙，襄阳，武汉，东莞，佛山，广州，惠州，海口，深圳，中山，珠海，南宁',
        },
        {
          area: '西南地区',
          cityList: '重庆，成都，绵阳，昆明，贵阳',
        },
        {
          area: '西北地区',
          cityList: '西安，兰州',
        },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
.service-scope {
  width: 710rpx;
  background: #ffffff;
  border-radius: 16rpx;
  margin: 20rpx auto 0;
  padding: 0 40rpx 28rpx 24rpx;
  box-sizing: border-box;
  .title {
    font-size: 34rpx;
    font-weight: bold;
    color: #333333;
    line-height: 100rpx;
    text-align: center;
    padding: 25rpx 0 15rpx;
  }
  .area-item {
    display: flex;
    align-items: baseline;
    margin-bottom: 20rpx;
    .area-tag {
      height: 56rpx;
      padding: 0 18rpx;
      background: #eceef3;
      border-radius: 6rpx;
      font-size: 24rpx;
      font-weight: bold;
      color: #333333;
      line-height: 56rpx;
      margin-right: 30rpx;
      flex: none;
    }
    .city-list {
      font-size: 24rpx;
      color: #333333;
      line-height: 36rpx;
    }
  }
  .tips {
    display: inline-block;
    font-size: 24rpx;
    font-weight: 400;
    color: #999999;
    line-height: 36rpx;
    text-align: justify;
    margin-top: 24rpx;
    span {
      font-weight: bold;
    }
    p {
      margin-bottom: 24rpx;
    }
  }
}
</style>
