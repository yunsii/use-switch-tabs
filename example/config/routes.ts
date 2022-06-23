export default [
  {
    path: '/',
    component: './layouts/RootLayout',
    routes: [
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
            path: '/query',
            icon: 'question',
            name: '查询页',
            component: './pages/Query',
          },
          {
            path: '/result',
            icon: 'control',
            name: '结果页',
            component: './pages/Result',
            hideInMenu: true,
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
          {
            path: '/parent',
            icon: 'table',
            name: '嵌套路由',
            component: './pages/Parent',
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/parent',
                redirect: '/parent/child1',
              },
              {
                path: '/parent/child1',
                component: './pages/Parent/Child1',
              },
              {
                path: '/parent/child2',
                component: './pages/Parent/Child2',
              },
              {
                path: '/parent/child3',
                component: './pages/Parent/Child3',
              },
            ],
          },
          {
            path: '/dynamic/:anyStr',
            icon: 'table',
            name: '动态路由',
            component: './pages/Dynamic',
            hideInMenu: true,
          },
        ],
      },
    ],
  },
];
