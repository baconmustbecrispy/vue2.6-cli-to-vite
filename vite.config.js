import { createVuePlugin } from "vite-plugin-vue2";
import { defineConfig } from "vite";
import path from "path";
export default defineConfig({
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
  base: "/",
  plugins: [
    // vue()
    createVuePlugin(),
  ],
});
