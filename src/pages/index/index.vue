<template>
  <view class="page">
    <!-- 头部用户信息 -->
    <view class="header">
      <view class="user">
        <image src="/static/logo.png" mode="scaleToFill" />
        <text>用户名</text>
      </view>
      <view class="user">
        <image src="/static/logo.png" mode="scaleToFill" />
        <text>用户名</text>
      </view>
    </view>

    <!-- 出图 -->
    <view class="pic">
      <view class="pic-1">
        <image class="pic-result" :src="selectHouseImg" mode="scaleToFill" />
      </view>
      <view class="pic-1">
        <image class="pic-result" src="/static/logo.png" mode="scaleToFill" />
      </view>
    </view>

    <progress :percent="progress" show-info stroke-width="3" style="color: white" />

    <scroll-view scroll-y style="height: 100px; width: 100%">
      <!-- 聊天内容 -->
      <view class="chat-list" v-for="item in chatList">
        <text class="chat-item">{{ item }}</text>
      </view>
    </scroll-view>

    <!-- 底部tool -->
    <view class="tool-bar">
      <view class="left-box">
        <view class="tool-item">
          <image class="house-img" v-if="selectHouseImg" :src="selectHouseImg" mode="scaleToFill" />
          <text v-else @click="onClickBuild">设计我家效果</text>
        </view>
      </view>
      <view class="right-box">
        <view class="tool-item">
          <text @click="audioInputAction">按住说话</text>
        </view>
        <view class="tool-item">
          <text>快捷修图</text>
        </view>
        <view class="tool-item">
          <text>暂停</text>
        </view>
      </view>
      >
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {},
})
export default class Index extends Vue {
  //   houseImg = 'https://pic.to8to.com/te/osf/1377b11f00f3417fb60cd422f1ab0b73.jpg'
  initImg = 'https://pic1.shejiben.com/case/2017/02/12/20170212161743-6b0dda85.jpg'

  houseImg = 'https://pic.to8to.com/te/osf/faf2d7977a1b412db7c39e93e0683a08.jpg'

  selectHouseImg: null | string = null

  audioInputList = [
    'https://pic.to8to.com/te/osf/4d22ff087c884560849d7c22f2ba0021.m4a',
    'https://pic.to8to.com/te/osf/a5c911b28058439a916f6b44b13d1137.m4a',
    'https://pic.to8to.com/te/osf/0b6aaa1d585d42c7a3ba1688aff066af.m4a',
    'https://backtest-1318194069.cos.ap-guangzhou.myqcloud.com/chunk_dds_1.wav',
  ]

  audioIndex = 0

  businessId = 0

  sd_params = {
    batch_size: 4,
    resize_mode: 0,
    seed: -1,
    t8t_method: 'img2img',
    steps: 30,
    negative_prompt: 'nsfw,(low quality,normal quality,worst quality,jpeg artifacts)',
    sampler_name: 'DPM++ 2M SDE Karras',
    denoising_strength: 0.65,
    control_nets: [
      {
        guidance_end: 0.95,
        threshold_b: 0.1,
        resize_mode: 'Crop and Resize',
        control_mode: 'Balanced',
        guidance_start: 0,
        module: 'mlsd',
        threshold_a: 0.1,
        input_image: 'https://pic.to8to.com/tc/AiPicture/cd90c78190cb4bcc9b3fe4040ad4f53f.jpg',
        weight: 1.2,
        model: 'control_v11p_sd15_mlsd [aca30ff0]',
        processor_res: 512,
      },
    ],
    width: 682,
    input_image: 'https://pic.to8to.com/te/shortlink/7a821e418aa544a599651e85b72f596d.jpg',
    prompt:
      '(best quality,4k,8k,highres,masterpiece:1.2),ultra-detailed,(realistic,photorealistic:1.37),modern living room design,minimalist furniture,sectional sofa,abstract art pieces,engineered wood floors,smart home gadgets,track lighting,sheer curtains,focal point fireplace,spacious feel,modular shelving,solid color rug,metallic finishes,clean lines,(simplicity,functional design:1.2),(Soft lightColor combinations are usually simple and lively:1.2),<lora:lit:0.3>,blue,lounge sofa.',
    cfg_scale: 7,
    height: 512,
  }

  timer: any = null

  progress: number = 0

  chatList: string[] = []

  mounted() {
    console.log('mounted')
    this.imageToAudio(this.houseImg)
  }

  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }

  /* 点击出图 */
  async onClickBuild() {
    this.selectHouseImg = this.houseImg
    const taskId = (await this.onBuild(this.selectHouseImg)) as number

    this.clearTimer()
    this.timer = setInterval(async () => {
      const res = await this.fetchTaskResult(taskId)
      this.progress = res.progress
      if (res.progress === 100) {
        this.clearTimer()
      }
    }, 2000)
  }

  get aAudioUrl() {
    if (this.audioIndex >= this.audioInputList.length) {
      this.audioIndex = 0
    }
    const url = this.audioInputList[this.audioIndex]
    this.audioIndex++
    return url
  }

  /* 按住说话 */
  async audioInputAction() {
    // 采集语音
    const audioUrl = this.aAudioUrl
    // 语音转文字
    const audioText = (await this.audioToText(audioUrl)) as string
    this.chatList.push(`User: ${audioText}`)
    // 调用GPT提炼关键字
    const businessId = await this.fetchKeyword(audioText)
    // 查询GPT提炼结果
    const keyword = await this.fetchKeywordResult(businessId)
    // 根据关键字出图
    const taskId = (await this.onBuild(this.selectHouseImg!, keyword)) as number
    // 获取出图结果
    const img = await this.fetchTaskResult(taskId)
    // 生成讲解语音
    this.imageToAudio(img)
    this.selectHouseImg = img
  }

  /* 语音转文本 */
  async audioToText(audioUrl: string): Promise<string | null> {
    const res: any = await uni.request({
      url: 'https://chat-api.to8to.com:6443/audio/audioSelfToText',
      method: 'POST',
      data: {
        businessKey: 'aipk',
        businessId: `${Date.now()}`,
        audioUrl,
      },
    })
    if (res && res.statusCode === 200 && res.data) {
      return res.data.text
    } else {
      return null
    }
  }

  /* 生成对话 */
  async imageToAudio(imageUrl: string) {
    const res: any = await uni.request({
      url: 'https://chat-api.to8to.com:6443/ai/pk/chat',
      method: 'POST',
      data: {
        imageUrl,
        audioText: '',
      },
    })
    console.log('res', res, typeof res)
    if (res && res.statusCode === 200 && res.data) {
      console.log(res)
    }
  }

  /* 调用GPT 提炼关键字 */
  async fetchKeyword(text: string): Promise<string | null> {
    const res: any = await uni.request({
      url: 'https://chat-api.to8to.com:6443/completions',
      method: 'POST',
      data: {
        modelName: 'gpt-4-1106-preview',
        question: `你现在是一名优秀的装修顾问，请帮我总结以下这句用户的意图 、提炼、并精简成 三  四 个关键短语 ,请参照以下这个示例 例如 ：我想把沙发颜色换成蓝色,贵妃椅沙发总结提炼之后的短语 ：蓝色贵妃椅沙发 用户诉求：${text}请把提取之后的关键词进行翻译为英文, 并只返回英文关键词`,
        businessKey: 'aipk',
        businessId: `${Date.now()}`,
      },
    })
    if (res && res.statusCode === 200) {
      console.log('🚀 ~ Index ~ fetchKeyword ~ res:', res.data.businessId)
      return res.data.businessId
    } else {
      return null
    }
  }

  /* 查询提炼结果 */
  async fetchKeywordResult(businessId: string | null): Promise<string> {
    return new Promise((resolve) => {
      this.clearTimer()
      this.timer = setInterval(async () => {
        const res = await this.fetchKeywordById(businessId)
        if (res.queryStatus === 1) {
          this.clearTimer()
          resolve(res.text)
        }
      }, 3000)
    })
  }

  /* 轮训关键词结果 */
  async fetchKeywordById(businessId: string | null): Promise<any> {
    const res: any = await uni.request({
      url: 'https://chat-api.to8to.com:6443/findRecordById',
      method: 'POST',
      data: {
        businessKey: 'aipk',
        businessId: businessId,
      },
    })
    console.log('res', res, typeof res)
    if (res && res.statusCode === 200 && res.data) {
      console.log(res)
      return res.data
    } else {
      return ''
    }
  }

  /* 发送出图任务 */
  async onBuild(imgUrl: string, keyword?: string): Promise<number | null> {
    this.sd_params.input_image = imgUrl
    if (keyword) {
      this.sd_params.prompt += keyword
    }

    this.sd_params.input_image = this.selectHouseImg as string
    const res: any = await uni.request({
      url: 'https://tumaxflashapi.to8to.com/api/sdxcx/sendTask',
      method: 'POST',
      data: {
        use_type: 2,
        account_id: 24004695,
        proportion: '',
        space_name: '客厅',
        pic_num: 1,
        sign: '657d92fc768b21d7dbe8c05c7b5fa6d4',
        source_img_url: imgUrl,
        sd_params: this.sd_params,
        pic_desc: '',
        pic_type: 0,
        style_name: '现代',
      },
    })
    if (res && res.statusCode === 200 && res.data) {
      return res.data.data.task_id
    } else {
      return null
    }
  }

  /* 抓取出图结果 */
  async fetchTaskResult(task_id: number): Promise<any> {
    return new Promise((resolve) => {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
      this.timer = setInterval(async () => {
        const res = await this.fetchTaskById(task_id)
        this.progress = res.progress || 0
        if (res.progress === 100) {
          clearInterval(this.timer)
          this.timer = null
          resolve(res.data.result_img_urls[0])
        }
      }, 2000)
    })
  }

  async fetchTaskById(task_id: number): Promise<any> {
    const res: any = await uni.request({
      url: 'https://tumaxflashapi.to8to.com/api/sd/progress',
      method: 'GET',
      data: {
        task_id,
      },
    })
    console.log('res', res, typeof res)
    if (res && res.statusCode === 200 && res.data) {
      console.log(res)
      return res.data
    } else {
      return null
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  min-height: 100vh;
  background-color: rgb(25, 24, 24);
  .header {
    display: flex;
    justify-content: space-between;
    padding: 20rpx;
    .user {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      image {
        // border-radius: 50%;
        width: 90%;
      }
      text {
        margin-top: 10rpx;
        font-size: 24rpx;
        color: white;
      }
    }
  }

  .pic {
    margin-top: 88rpx;
    display: flex;
    justify-content: space-between;
    padding: 20rpx;
    .pic-1 {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .pic-result {
        width: 90%;
        height: 160px;
      }
    }
  }

  .tool-bar {
    display: flex;
    justify-content: space-between;
    // float: left;
    position: absolute;
    bottom: 44rpx;
    width: 100%;
    padding: 0 20rpx;

    .left-box,
    .right-box {
      display: flex;
      flex: 1;
      flex-direction: row;
    }
  }
}

.house-img {
  width: 88px;
  height: 88px;
}

.tool-item {
  background-color: black;
  border-radius: 44rpx;
  overflow: hidden;
  //   display: inline-flex;
  //   flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20rpx;
  height: 88rpx;
  line-height: 88rpx;
  image {
    width: 40rpx;
    height: 100%;
  }
  text {
    font-size: 24rpx;
    color: white;
    line-height: 88rpx;
    height: 88rpx;
    text-align: center;
  }
}

.chat-list {
  .chat-item {
    font-family: MiSans-Demibold;
    font-size: 28rpx;
    color: #ffffff;
    letter-spacing: 0;
    text-align: right;
    font-weight: 600;
  }
}
</style>
