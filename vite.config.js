import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  publicDir: "public",
  assetsInclude: ["**/*.MP4", "**/*.mp4", "**/*.webm", "**/*.gif"],

  server: {
    port: 3000,
    open: true,
    host: true,
    strictPort: false,
    cors: true,
    // Добавляем обработку ошибок сервера
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: true,
    },
  },

  build: {
    assetsDir: "assets",
    minify: "terser",
    sourcemap: mode === "development",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split(".").at(1)?.toLowerCase();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/img/[name][extname]`;
          }
          if (/mp4|webm/i.test(extType)) {
            return `assets/video/[name][extname]`;
          }
          return `assets/other/[name][extname]`;
        },
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react")) {
              return "vendor.react";
            }
            if (id.includes("@reduxjs")) {
              return "vendor.redux";
            }
            return "vendor";
          }
        },
      },
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },

    terserOptions: {
      compress: {
        drop_console: mode === "production",
        drop_debugger: mode === "production",
      },
    },

    // Добавляем дополнительные оптимизации сборки
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    reportCompressedSize: false,
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@reduxjs/toolkit",
      "react-redux",
      "axios",
    ],
    exclude: ["accordion-js"],
  },

  // Добавляем настройки для улучшения производительности
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
}));
