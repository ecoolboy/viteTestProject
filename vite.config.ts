import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//配置文件别名,
import path from 'path'

export default defineConfig({
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'src'),
      "assets":path.resolve(__dirname,'src/assets'),
      "components":path.resolve(__dirname,'src/components'),
      "getLocation":path.resolve(__dirname,'src/getLocation'),
      "views":path.resolve(__dirname,'src/views'),
      "store":path.resolve(__dirname,'src/store')
    }
  },
  plugins: [vue()]
})
