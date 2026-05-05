import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  // GitHub Pages: Settings → Pages → deploy from branch "main" → folder "/docs"
  // (Kök dizin /root kullanırsan şu anki kaynak index.html boş kalır — sadece geliştirme içindir.)
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});
