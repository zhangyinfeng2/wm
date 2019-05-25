import Vue from 'vue'
import App from './App.vue'
import router from '../src/routes/router'
import store from '../src/stores/store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')