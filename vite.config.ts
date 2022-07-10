import { defineConfig } from 'vite'
import Component from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  plugins: [
    Component({
      include: [/\.vue/, /\.md/],
      dirs: '.vitepress/components',
      dts: '.vitepress/components.d.ts'
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
      ]
    })
  ]
})
