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
        cinemaRouter
    ]
})