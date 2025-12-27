import { defineConfig } from 'vitepress'
import nav from './nav.mjs'
import head from './head.mjs'
import { generateSidebar } from './sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vp-notes/',
  title: "笔记站",
  description: "我的笔记站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    head,
    sidebar: generateSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/66129848' },
      { icon: 'wechat', link: 'https://weixin.su/' }
    ]
  }
})