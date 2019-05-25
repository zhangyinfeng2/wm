export default {
    path: '/move',
    component: () =>
        import ('@/view/move') //这是按需引入的写法，@表示src目录

}