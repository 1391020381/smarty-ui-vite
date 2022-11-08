import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";
// https://vitejs.dev/config/

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};
export default defineConfig({
  plugins: [vue(), vueJsx(), Unocss()],
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "SmaryUI",
      fileName: "smarty-ui",
      // formats: ["esm", "umd", "iife"],
      formats: ["es", "umd", "iife"],
    },
  },
});
