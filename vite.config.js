import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import seoPrerender from 'vite-plugin-seo-prerender'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    seoPrerender({
      routes: ['/', '/sons', '/visualizer', '/shows', '/contact', '/press', '/contrate'],
      delay: 3000,
      removeStyle: false
    })
  ],
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Target modern browsers for smaller output
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate heavy vendor libs into their own chunk
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-gsap': ['gsap'],
          'vendor-lenis': ['@studio-freight/lenis'],
        }
      }
    }
  }
})
