import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor chunks - these change less frequently
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['lucide-react'],
        },
      },
    },
    // Minification settings
    minify: 'esbuild',
    // Target modern browsers for smaller bundle size
    target: 'es2020',
    // Enable source maps for production debugging (optional, can be disabled)
    sourcemap: false,
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
    // CSS code splitting
    cssCodeSplit: true,
  },
  // Enable compression and caching hints
  server: {
    // Enable response compression during development
    middlewareMode: false,
  },
});
