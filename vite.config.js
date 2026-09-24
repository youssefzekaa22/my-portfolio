import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// `base: './'` makes the build work on GitHub Pages under /<repo-name>/,
// on a custom domain, or on any other static host without extra config.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
});
