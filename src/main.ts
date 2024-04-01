import Vue from 'vue'
import App from './App.vue'
import './uni.promisify.adaptor'
// import warnSunBtn from '@chengzongxin/test-com'
import TestCom from '@chengzongxin/test-com'
import '@chengzongxin/test-com/lib/test-com.css'
Vue.use(TestCom)

// import warnSunBtn from 'warn_sun_btn_yjs_zt'
// import 'warn_sun_btn_yjs_zt/lib/warn-sun-btn.css'

// Vue.use(warnSunBtn)

Vue.config.productionTip = false

const app = new (typeof App === 'function' ? App : Vue.extend(Object.assign({ mpType: 'app' }, App)))()
app.$mount()
