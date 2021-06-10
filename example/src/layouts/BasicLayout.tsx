import React from 'react';
import { Link } from '@vitjs/runtime';
import * as H from 'history';

import Block from '@/components/Block';
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

  const renderMenu = (routes: IRoute[], depth = 0) => {
    return routes
      .filter((item) => {
        return !item.redirect && item.path;
      })
      .map((item) => {
        const subRoutes = item.routes;

        return (
          <div key={item.path} style={{ marginLeft: 16 * depth }}>
            <Link to={item.path}>
              {item.icon && <span style={{ marginRight: 4 }}>{item.icon}</span>}
              {item.path === '/' ? 'Home' : item.name || item.path}
            </Link>
            {subRoutes && <div>{renderMenu(subRoutes, depth + 1)}</div>}
          </div>
        );
      });
  };

  console.log('route.routes', route.routes);
  console.log('children', children);

  return (
    <Block>
      <h2>Basic Layout</h2>
      {renderMenu(route.routes)}
      <hr />
      <SwitchTabs originalRoutes={route.routes}>{children}</SwitchTabs>
    </Block>
  );
}
