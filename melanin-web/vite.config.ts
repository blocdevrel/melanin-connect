import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  server: { port: 8080 },
  resolve: { tsconfigPaths: true },
  plugins: [
    tanstackStart(),
    // Nitro produces the deployable server output. Vercel is the target host.
    command === "build" && nitro({ preset: "vercel" }),
    viteReact(),
    tailwindcss(),
  ],
}));
