import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// VITE_BASE_URL is injected by actions/configure-pages (e.g. '/repo-name').
// It has no trailing slash; we add one. Empty or '/' means root (user pages / local dev).
const rawBase = process.env.VITE_BASE_URL ?? ''
const base = !rawBase || rawBase === '/' ? '/' : `${rawBase}/`

export default defineConfig({
  plugins: [vue()],
  base: '/',
})
