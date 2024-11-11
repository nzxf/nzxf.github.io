// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://nzxf.github.io',
  base: '/nzxf.github.io',
  output: 'static',
  integrations: [tailwind()],
});