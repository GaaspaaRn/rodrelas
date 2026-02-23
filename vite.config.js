import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isCI = process.env.VERCEL || process.env.CI

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Pre-rendering runs locally only (Vercel lacks Chrome system libs for Puppeteer)
    !isCI && (await import('vite-plugin-seo-prerender')).default({
      routes: ['/', '/sons', '/visualizer', '/shows', '/contact', '/press', '/contrate'],
      delay: 3000,
      removeStyle: false
    })
  ].filter(Boolean),
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
