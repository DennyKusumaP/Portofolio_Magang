import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  // 1. Force the Lovable config to keep the nitro deploy framework active locally
  nitro: true,

  tanstackStart: {
    server: {
      entry: "server",
    },
  },

  // 2. Explicitly bind the nitro integration to the underlying vite compiler
  vite: {
    base: "/",
    plugins: [
      nitro({
        preset: "vercel",
      }),
    ],
  },
});
