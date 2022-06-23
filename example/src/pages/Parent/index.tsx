import React from 'react';
import { Card, Steps } from 'antd';
import type * as H from 'history-with-query';
import { history } from '@vitjs/runtime';

export default ({ children, location }: { children: React.ReactChildren; location: H.Location }) => {
    const setCurrentByLocation = () => {
      if (location.pathname.endsWith('1')) {
        return 0;
      }
      if (location.pathname.endsWith('2')) {
        return 1;
      }
      return 2;
    };

    return (
        <Card title="Parent">
          <Steps
            current={setCurrentByLocation()}
            onChange={(_current) => {
              history.push(`/parent/child${_current + 1}`);
            }}
          >
            <Steps.Step title="child 1" />
            <Steps.Step title="child 2" />
            <Steps.Step title="child 3" />
          </Steps>
          <div style={{
            margin: 24,
            border: '1px solid red'
          }}>{children}</div>
        </Card>
    );
  }
