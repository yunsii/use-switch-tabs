// @ts-nocheck
import { createBrowserHistory, History } from '@vitjs/runtime';

const options = {
  "basename": "/use-switch-tabs/"
};

if (options.basename) {
  (window as any).routerBase = options.basename;
}

const history: History = createBrowserHistory(options);

export default history;
