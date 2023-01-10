import { createVuePlugin } from "vite-plugin-vue2";
import { defineConfig } from "vite";
import path from "path";
import Unocss from 'unocss/vite'

export default defineConfig({
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
  base: "/",
  plugins: [
    createVuePlugin(),
    Unocss({ /* options */ }),
  ],
});
