import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // GitHub Pages部署时需要设置正确的base路径
  // 请将此处替换为您的GitHub仓库名称，格式为'/仓库名称/'
  base: '/sh-ancient/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
