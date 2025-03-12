import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
  // ...
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
  ],
  server: {
    proxy: {
      // 单个代理
      '/api': {
        target: 'superapi.qirin.cn', // 后端接口地址
        changeOrigin: true, // 修改请求头中的 Origin
        rewrite: (path) => path.replace(/^\/api/, '') // 路径重写(可选)
      },
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')  // 确保路径解析正确 ‌:ml-citation{ref="2,3" data="citationList"}
    }
  }
})
