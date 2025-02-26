import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // TODO: Remove after use-intl has full ESM support
  // https://vitejs.dev/guide/dep-pre-bundling#monorepos-and-linked-dependencies
  optimizeDeps: {include: ['use-optimal-intl']},
  build: {commonjsOptions: {include: [/use-optimal-intl/, /node_modules/]}}
});
