export default [
    {
        path: '/',
        component: require('@/view/layout/FrontLayout').default,
        children: [
            {
                path: '',
                component: require('@/view/Home').default,
                name: 'home'
            },
            {
                path: 'posts/draft',
                component: require('@/view/Post/MyPosts').default,
                name: 'my-posts'
            },
            {
                path: 'post/:slug',
                component: require('@/view/Post/PostShow').default,
                name: 'post-show'
            },
        ]
    },
    {
        path: '/admin',
        component: require('@/view/Layout/AdminLayout').default,
        children: [
            {
                path: 'dashboard',
                component: require('@/view/Admin/Dashboard').default,
                name: 'admin-dashboard'
            }
        ]
    },
    {
        path: '/login',
        component: require('@/view/Auth/Login').default,
        name: 'login'
    },
    {
        path: '/register',
        component: require('@/view/Auth/Register').default,
        name: 'register'
    },
    {
        path: '/404',
        component: require('@/view/Error/NotFound').default,
        name: 'not-found'
    },
    {
        path: '/403',
        component: require('@/view/Error/AccessDenied').default,
        name: 'access-denied'
    },
    {
        path: '*',
        component: require('@/view/Error/NotFound').default,
        redirect: '/404'
    },
]
