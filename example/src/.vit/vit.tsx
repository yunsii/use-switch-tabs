// @ts-nocheck
import ReactDOM from 'react-dom';
import { renderRoutes } from '@vitjs/runtime';
import { Router, history } from '@vitjs/runtime';

import getRoutes from './routes';
import '../global.ts';


ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      {renderRoutes({ routes: getRoutes() })}
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
