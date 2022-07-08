import { defineConfig } from 'vite'
import Component from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    Component({
      include: [/\.vue/, /\.md/],
      dirs: '.vitepress/components',
      dts: '.vitepress/components.d.ts'
    })
  ]
})
