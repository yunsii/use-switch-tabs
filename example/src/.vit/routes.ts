// @ts-nocheck
import { dynamic } from '@vitjs/runtime';
import React from 'react';
import SmileOutlined from '@ant-design/icons/SmileOutlined'
import UserOutlined from '@ant-design/icons/UserOutlined'

import LoadingComponent from '/home/zpr1g/Workspaces/github/use-switch-tabs/example/src/components/PageLoading';

export default function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import('/home/zpr1g/Workspaces/github/use-switch-tabs/example/src/layouts/BlankLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/",
        "redirect": "/welcome",
        "exact": true
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import('/home/zpr1g/Workspaces/github/use-switch-tabs/example/src/layouts/BasicLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/",
            "redirect": "/welcome",
            "exact": true
          },
          {
            "path": "/welcome",
            "icon": React.createElement(SmileOutlined),
            "name": "欢迎页",
            "component": dynamic({ loader: () => import('/home/zpr1g/Workspaces/github/use-switch-tabs/example/src/pages/Welcome'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/account",
            "icon": React.createElement(UserOutlined),
            "name": "个人页",
            "component": dynamic({ loader: () => import('/home/zpr1g/Workspaces/github/use-switch-tabs/example/src/pages/Account'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      }
    ]
  }
];
  return routes;
}
