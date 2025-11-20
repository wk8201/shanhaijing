import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 已更新为正确的GitHub仓库名称'shanhaijing'
  base: '/shanhaijing/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  // 配置输出目录为docs，用于GitHub Pages部署
  build: {
    outDir: 'docs'
  }
})
