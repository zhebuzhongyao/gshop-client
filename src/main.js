import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'

import './api'
import store from './store'

// 注册全局组件
Vue.component('Header',Header)
Vue.component('Star',Star)

Vue.config.productionTip=false  //去掉提示输出

new Vue({
    el:'#app',
    render:h=>h(App),//需要单独配置，否则会报错
    router,
    store
})
