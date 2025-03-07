import { defineConfig } from 'vite';
import monacoEditorEsmPlugin from 'vite-plugin-monaco-editor-esm'

export default defineConfig({
  plugins: [monacoEditorEsmPlugin()],
  server: {
    host: '0.0.0.0',  // 讓 WSL 內部可訪問
    port: 5173,
  },
});