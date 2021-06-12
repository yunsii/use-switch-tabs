import React from 'react';
import { Card } from 'antd';

export default function Hello() {
  const renderCount = React.useRef(0);
  renderCount.current += 1;

  return (
    <Card>
      <h2>Projects Search Page</h2> <br />
      <div>renderCount: {renderCount.current}</div>
    </Card>
  );
}
