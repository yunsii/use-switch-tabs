// @ts-nocheck
import { dynamic } from '@vitjs/runtime';
import React from 'react';
import SmileOutlined from '@ant-design/icons/SmileOutlined'
import ControlOutlined from '@ant-design/icons/ControlOutlined'
import ProfileOutlined from '@ant-design/icons/ProfileOutlined'
import TableOutlined from '@ant-design/icons/TableOutlined'

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
            "path": "/control",
            "icon": React.createElement(ControlOutlined),
            "name": "控制台",
            "component": dynamic({ loader: () => import('/home/zpr1g/Workspaces/github/use-switch-tabs/example/src/pages/Control'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/profile",
            "icon": React.createElement(ProfileOutlined),
            "name": "详情页",
            "routes": [
              {
                "path": "/profile/basic",
                "name": "基础详情页",
                "component": dynamic({ loader: () => import('/home/zpr1g/Workspaces/github/use-switch-tabs/example/src/pages/Profile/Basic'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "path": "/profile/advanced",
                "name": "高级详情页",
                "component": dynamic({ loader: () => import('/home/zpr1g/Workspaces/github/use-switch-tabs/example/src/pages/Profile/Advanced'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/search",
            "icon": React.createElement(TableOutlined),
            "name": "搜索列表",
            "component": dynamic({ loader: () => import('/home/zpr1g/Workspaces/github/use-switch-tabs/example/src/pages/Search'), loading: LoadingComponent}),
            "routes": [
              {
                "path": "/search/projects",
                "name": "搜索列表（项目）",
                "component": dynamic({ loader: () => import('/home/zpr1g/Workspaces/github/use-switch-tabs/example/src/pages/Search/Projects'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "path": "/search/applications",
                "name": "搜索列表（应用）",
                "component": dynamic({ loader: () => import('/home/zpr1g/Workspaces/github/use-switch-tabs/example/src/pages/Search/Applications'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          }
        ]
      }
    ]
  }
];
  return routes;
}
