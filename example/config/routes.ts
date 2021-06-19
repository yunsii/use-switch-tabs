export default [
  {
    path: '/',
    component: './layouts/BlankLayout',
    routes: [
      {
        path: '/',
        redirect: '/welcome',
      },
      {
        path: '/',
        component: './layouts/BasicLayout',
        routes: [
          {
            path: '/',
            redirect: '/welcome',
          },
          {
            path: '/welcome',
            icon: 'smile',
            name: '欢迎页',
            component: './pages/Welcome',
          },
          {
            path: '/control',
            icon: 'control',
            name: '控制台',
            component: './pages/Control',
          },
          {
            path: '/profile',
            icon: 'profile',
            name: '详情页',
            routes: [
              {
                path: '/profile/basic',
                name: '基础详情页',
                component: './pages/Profile/Basic',
              },
              {
                path: '/profile/advanced',
                name: '高级详情页',
                component: './pages/Profile/Advanced',
              },
            ],
          },
          {
            path: '/search',
            icon: 'table',
            name: '搜索列表',
            component: './pages/Search',
            routes: [
              {
                path: '/search/projects',
                name: '搜索列表（项目）',
                component: './pages/Search/Projects',
              },
              {
                path: '/search/applications',
                name: '搜索列表（应用）',
                component: './pages/Search/Applications',
              },
            ],
          },
        ],
      },
    ],
  },
];