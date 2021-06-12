import React from 'react';
import { history, useLocation } from '@vitjs/runtime';
import { Divider, Layout, Menu, Space, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import * as H from 'history';

import SwitchTabs from '@/components/SwitchTabs';

export interface IRoute {
  component: React.ComponentType<{ location: H.Location }>;
  icon?: React.ReactNode;
  name?: string;
  path: string;
  redirect: string;
  routes: IRoute[];
}

export interface BasicLayoutProps {
  children: JSX.Element;
  /** 完整路由表 */
  routes: IRoute[];
  /** 当前层级路由表 */
  route: IRoute;
}

export default function BasicLayout(props: BasicLayoutProps) {
  const { children, route } = props;
  const location = useLocation();

  const getRoutesMenuData = (routes: IRoute[]) => {
    return routes.filter((item) => {
      return !item.redirect && item.path;
    });
  };

  const renderSubMenu = (route: IRoute) => {
    const subRoutes = getRoutesMenuData(route.routes);
    return (
      <Menu.SubMenu key={route.path} icon={route.icon} title={route.name}>
        {getRoutesMenuData(subRoutes).map((item) => {
          return (
            <Menu.Item key={item.path} icon={item.icon} onClick={() => history.push(item.path)}>
              {item.path === '/' ? 'Home' : item.name || item.path}
            </Menu.Item>
          );
        })}
      </Menu.SubMenu>
    );
  };

  const renderMenu = () => {
    return (
      <Menu mode='inline' selectedKeys={[location.pathname]}>
        {getRoutesMenuData(route.routes).map((item) => {
          const subRoutes = item.routes;

          if (subRoutes) {
            return renderSubMenu(item);
          }
          return (
            <Menu.Item key={item.path} icon={item.icon} onClick={() => history.push(item.path)}>
              {item.path === '/' ? 'Home' : item.name || item.path}
            </Menu.Item>
          );
        })}
      </Menu>
    );
  };

  return (
    <Layout>
      <Layout.Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
        width={240}
        theme='light'
      >
        <h2 style={{ padding: 16 }}>🚀 use-switch-tabs</h2>
        {renderMenu()}
      </Layout.Sider>
      <Layout style={{ height: '100vh', marginLeft: 240 }}>
        <Layout.Content>
          <SwitchTabs originalRoutes={route.routes}>{children}</SwitchTabs>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          <Space>
            <a href='https://github.com/theprimone/use-switch-tabs' target='_blank'>
              <Typography.Text type='secondary'>
                <GithubOutlined />
              </Typography.Text>
            </a>
            <Divider type='vertical' />
            <a href='https://github.com/theprimone' target='_blank'>
              <Typography.Text type='secondary'>theprimone</Typography.Text>
            </a>
          </Space>
        </Layout.Footer>
      </Layout>
    </Layout>
  );
}
