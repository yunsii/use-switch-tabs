import React from 'react';
import { Card, Form, Input } from 'antd';

export default function Hello({ children }: React.PropsWithChildren<{}>) {
  return (
    <Card>
      <h2>Search Page</h2> <br />
      <Form.Item label='状态'>
        <Input defaultValue='Search' style={{ width: 240 }} />
      </Form.Item>
      <div style={{ border: 'dashed 1px red' }}>{children}</div>
    </Card>
  );
}
