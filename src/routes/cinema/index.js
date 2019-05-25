export default {
    path: '/cinema',
    component: () =>
        import ('@/view/cinema') //这是按需引入的写法，@表示src目录

}