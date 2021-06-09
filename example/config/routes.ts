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
            path: '/account',
            icon: 'user',
            name: '个人页',
            component: './pages/Account',
          },
        ],
      },
    ],
  },
];
