import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite"; // 1. Add this import

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
  // 2. Move your Nitro configuration inside the vite object plugins array
  vite: {
    plugins: [
      nitro({
        preset: "vercel",
      }),
    ],
  },
});