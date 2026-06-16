import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite"; // Nitro comes pre-bundled in your node_modules

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
  
  // Inject the Vercel routing configuration inside the native vite object array
  vite: {
    plugins: [
      nitro({
        preset: "vercel",
      }),
    ],
  },
});