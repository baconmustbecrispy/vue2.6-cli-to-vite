import { createVuePlugin } from 'vite-plugin-vue2';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import path from 'path';
import Unocss from 'unocss/vite';

export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  base: '/',
  plugins: [createVuePlugin(), Unocss(), splitVendorChunkPlugin()],
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          'element-ui': ['element-ui'],
        },
      },
    },
  },
});
