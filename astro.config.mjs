import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Add your domain name here
  site: "https://nzxf.my.id",
  base: "nzxf.github.io",
  integrations: [ sitemap()]
});