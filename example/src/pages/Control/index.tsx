import React from 'react';
import { Card, Alert, Button, Space } from 'antd';

export default function Control() {
  const renderCount = React.useRef(0);
  renderCount.current += 1;

  return (
    <Card>
      <Alert message='可通过调用全局方法控制标签页的刷新，返回和关闭' type='success' showIcon banner />
      <Alert
        message='请打开控制台查看相关操作反馈'
        type='warning'
        showIcon
        banner
        style={{
          marginBottom: 48,
        }}
      />
      <Space>
        <Button
          type='primary'
          onClick={() => {
            window.tabsAction.reloadTab();
          }}
        >
          reload tab
        </Button>
        <Button
          onClick={() => {
            window.tabsAction.goBackTab();
          }}
        >
          go back tab
        </Button>
        <Button
          onClick={() => {
            window.tabsAction.closeTab();
          }}
        >
          close tab
        </Button>
        <Button
          onClick={() => {
            window.tabsAction.closeAndGoBackTab();
          }}
        >
          close and go back tab
        </Button>
        <Button
          onClick={() => {
            window.tabsAction.closeAndGoBackTab('/profile/basic', () => window.tabsAction.reloadTab('/profile/basic'));
          }}
        >
          close, go to '/profile/basic' and refresh
        </Button>
      </Space>
      <div>renderCount: {renderCount.current}</div>
    </Card>
  );
}
