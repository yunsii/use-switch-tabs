import React from 'react';
import { Card, Form, Input } from 'antd';

export default function Hello() {
  const renderCount = React.useRef(0);
  renderCount.current += 1;

  return (
    <Card>
      <h2>Basic Profile Page</h2> <br />
      <Form.Item label='状态'>
        <Input defaultValue='Basic Profile' style={{ width: 240 }} />
      </Form.Item>
      <div>renderCount: {renderCount.current}</div>
    </Card>
  );
}
