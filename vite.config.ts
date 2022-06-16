import tsAlias from 'vite-plugin-ts-alias';
import sgvr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteArco from '@arco-plugins/vite-react';

// const isPord = process.env.NODE_env === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsAlias(), react(), viteArco(), sgvr()],
});
