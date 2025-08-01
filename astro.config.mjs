// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import alpinejs from "@astrojs/alpinejs";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://bobfactory.github.io",
  base: "/BobFactory.github.io", // Only if using project pages, remove if using custom domain
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), alpinejs({ entrypoint: "/src/entrypoint" }), icon()],
});
