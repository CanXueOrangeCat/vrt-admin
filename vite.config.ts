import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteArco from '@arco-plugins/vite-react';
import sgvr from 'vite-plugin-svgr';
import conventionalEntries from 'vite-plugin-conventional-entries';
import tsAlias from 'vite-plugin-ts-alias';

// const isPord = process.env.NODE_env === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsAlias(), react(), viteArco(), sgvr(), conventionalEntries()],
});
