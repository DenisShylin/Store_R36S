import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: "./", // Изменено с "/" на "./" для относительных путей
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
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: "esbuild",
    sourcemap: mode === "development",
    emptyOutDir: true, // Очистка папки dist перед сборкой
    cssCodeSplit: true, // Явное разделение CSS
    rollupOptions: {
      output: {
        manualChunks: {
          // Разделение вендоров на отдельные чанки
          vendor: [
            "react",
            "react-dom",
            "react-router-dom",
            "@reduxjs/toolkit",
            "react-redux",
            "axios",
          ],
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const extType = info[info.length - 1];
          if (extType === "css") {
            return `assets/css/[name].[hash][extname]`;
          }
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name].[hash][extname]`;
          }
          if (/mp4|webm/i.test(extType)) {
            return `assets/videos/[name].[hash][extname]`;
          }
          return `assets/[name].[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name].[hash].js",
        entryFileNames: "assets/js/[name].[hash].js",
      },
    },
    // Оптимизация сборки
    target: "es2015",
    polyfillDynamicImport: false,
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

  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
}));
