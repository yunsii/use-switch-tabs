import React from 'react';
import { Card } from 'antd';
import { match as Match } from 'react-router';
import * as H from 'history-with-query';

export default function Result({ match, location }: { match: Match; location: H.LocationDescriptorObject }) {
  return (
    <Card title='Result'>
      <pre>
        <b>match</b>: {JSON.stringify(match, null, 2)}
      </pre>
      <pre>
        <b>location</b>: {JSON.stringify(location, null, 2)}
      </pre>
    </Card>
  );
}
