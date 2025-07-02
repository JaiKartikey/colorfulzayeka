import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';



export default defineConfig({
  plugins: [react()],
  base: '/colorfulzayeka/', 
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // Correct Vite SPA fallback config
  server: {
    fs: { strict: false },
  },
});
