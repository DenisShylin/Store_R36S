import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: "/", // Явно указываем базовый путь
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  // Настройка для публичных ассетов
  publicDir: "public",
  assetsInclude: ["**/*.MP4", "**/*.mp4", "**/*.webm", "**/*.gif"],
  // Настройка для обработки ассетов
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          } else if (/mp4|webm|MP4/i.test(extType)) {
            extType = "video";
          }
          return `assets/${extType}/[name][extname]`;
        },
      },
    },
  },
});
