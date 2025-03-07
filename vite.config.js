import { defineConfig } from "vite";
import monacoEditorEsmPlugin from "vite-plugin-monaco-editor-esm";
import { resolve } from "path";
// import "./style.css";
// import "./reset.css";


export default defineConfig({
  plugins: [monacoEditorEsmPlugin()],
  server: {
    host: "0.0.0.0", // 讓 WSL 內部可訪問
    port: 5173,
  },
  build: {
    assetsInlineLimit: 0, // 確保 CSS 檔案不會被內嵌
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "./style.css"; @import "./reset.css";`,
  //     },
  //   },
  // },
  resolve: {
    alias: {
      $fonts: resolve("./src"),
    },
  },
});
