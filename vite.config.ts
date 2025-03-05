import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/homepage/',
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  },
  server: {
    proxy: {
      '^/api': {
        target: 'http://api.honghouse.cn/', //目标源，目标服务器，真实请求地址
        changeOrigin: true, //支持跨域
        rewrite: (path) => path.replace(/^\/api/, "/api"), //重写真实路径,替换/api
      }
    }
  }
})
