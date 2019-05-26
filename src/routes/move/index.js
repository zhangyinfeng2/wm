export default {
    path: '/move',
    component: () =>
        import ('@/view/move'), //这是按需引入的写法，@表示src目录
    children: [{
            path: 'city',
            component: () =>
                import ('@/components/City')
        },
        {
            path: 'comingsoon',
            component: () =>
                import ('@/components/ComingSoon')
        },
        {
            path: 'search',
            component: () =>
                import ('@/components/Search')
        },
        {
            path: 'nowplaying',
            component: () =>
                import ('@/components/NowPlaying')
        },
        {
            path: '/move',
            redirect: '/move/nowplaying'
        }
    ]


}