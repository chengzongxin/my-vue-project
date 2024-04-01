import Vue from 'vue'
import App from './App.vue'
import './uni.promisify.adaptor'

import TestCom from '@chengzongxin/test-com'
import '@chengzongxin/test-com/lib/test-com.css'
Vue.use(TestCom)

Vue.config.productionTip = false

const app = new (typeof App === 'function' ? App : Vue.extend(Object.assign({ mpType: 'app' }, App)))()
app.$mount()
