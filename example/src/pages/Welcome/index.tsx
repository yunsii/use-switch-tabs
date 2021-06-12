import React from 'react';
import { Alert, Card, Form, Input, Tag } from 'antd';

import { withSwitchTab } from '../../../../src';

function Hello() {
  const renderCount = React.useRef(0);
  renderCount.current += 1;

  return (
    <div>
      <Card>
        <Alert message='已优化渲染性能' type='info' />
        <h2>Welcome Page</h2>
        <Form.Item label='状态'>
          <Input defaultValue='Welcome' style={{ width: 240 }} />
        </Form.Item>
        <div>renderCount: {renderCount.current}</div>
      </Card>
    </div>
  );
}

export default withSwitchTab(Hello);
