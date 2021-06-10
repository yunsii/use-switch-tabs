import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';
import vitePluginImp from 'vite-plugin-imp';

import vitApp from '@vitjs/vit';
import routes from './config/routes';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/use-switch-tabs/',
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
    vitApp({
      debug: true,
      routes,
      dynamicImport: { loading: './components/PageLoading' },
      exportStatic: {},
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      less: {
        // modifyVars: { 'primary-color': '#13c2c2' },
        javascriptEnabled: true,
      },
    },
  },
});
