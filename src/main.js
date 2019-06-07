import Vue from 'vue'
import App from './App.vue'
import router from '../src/routes/router'
import store from '../src/stores/store'


import axios from 'axios'

Vue.prototype.axios = axios

//过滤器，筛选图片地址
Vue.filter('setWH', (url, arg) => {
    return url.replace(/w\.h/, arg);
})


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')