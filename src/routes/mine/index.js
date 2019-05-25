export default {
    path: '/mine',
    component: () =>
        import ('@/view/mine') //这是按需引入的写法，@表示src目录

}