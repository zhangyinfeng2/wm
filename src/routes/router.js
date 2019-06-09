import Vue from 'vue'
import Router from 'vue-router'
import moveRouter from './move'
import mineRouter from './mine'
import cinemaRouter from './cinema'

Vue.use(Router)

export default new Router({
    routes: [
        moveRouter,
        mineRouter,
        cinemaRouter,
        {
            path: '/',
            redirect: '/move'
        } //当路由都没匹配时进行重定向，写在最下面
    ]
})