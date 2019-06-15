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
            path: 'detail/1/:movieId',
            components: {
                default: () =>
                    import ('@/components/NowPlaying'), //默认指向router-view没有name的组件
                detail: () =>
                    import ('@/view/move/detail')
            },
            props: {
                detail: true
            }
        },
        {
            path: 'detail/2/:movieId',
            components: {
                default: () =>
                    import ('@/components/ComingSoon'), //默认指向router-view没有name的组件
                detail: () =>
                    import ('@/view/move/detail')
            },
            props: {
                detail: true
            }
        },
        {
            path: '/move',
            redirect: '/move/nowplaying'
        },
    ]


}