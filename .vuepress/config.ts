import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '../src/theme/lib/node'
import { defineUserConfig } from 'vuepress'
import path from 'path'

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../', 'src')
        }
      }
    }
  }),
  theme: defaultTheme({
    navbar: [
      {
        text: '测试',
        link: './'
      }
    ]
  }),
})
