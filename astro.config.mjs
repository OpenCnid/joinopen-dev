// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: Change back to 'https://joinopen.dev' once DNS is connected
  site: 'https://joinopen-dev.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});