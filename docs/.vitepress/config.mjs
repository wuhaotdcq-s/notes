import { defineConfig } from 'vitepress'
import nav from './nav.mjs'
import head from './head.mjs'
import { generateSidebar } from './sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/notes/',
  title: "笔记站",
  description: "我的笔记站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    head,
    sidebar: generateSidebar(),
    search: {
          placeholder: '搜索文档', // 搜索框占位符（默认：Search）
          ariaLabel: '搜索文档', // 无障碍标签（默认：Search）
          // 搜索结果无匹配时的提示（默认：No results found for "{query}"）
          noResultsText: '未找到 "{query}" 相关结果',
          // 搜索结果标题（默认：Results for "{query}"）
          resultsText: '{count} 条 "{query}" 相关结果',
          // 搜索加载中（默认：Loading...）
          loadingText: '加载中...'
        },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/66129848' },
      { icon: 'wechat', link: 'https://weixin.su/' }
    ]
  }
})