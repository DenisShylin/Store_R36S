import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/r32s/" : "/",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  publicDir: "public",
  assetsInclude: ["**/*.MP4", "**/*.mp4", "**/*.webm", "**/*.gif"],

  server: {
    port: 3001, // Изменим на 3001, чтобы соответствовало текущему запуску
    open: true,
    host: true,
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: "esbuild",
    sourcemap: mode === "development",
    emptyOutDir: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            "react",
            "react-dom",
            "react-router-dom",
            "@reduxjs/toolkit",
            "react-redux",
            "axios",
          ],
        },
        assetFileNames: "assets/[name].[hash][extname]",
        chunkFileNames: "assets/js/[name].[hash].js",
        entryFileNames: "assets/js/[name].[hash].js",
      },
    },
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
