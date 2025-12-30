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
    head: head,
    sidebar: generateSidebar(),
    // 分页导航
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },

        // 编辑此页（如需开启请替换仓库地址）
        editLink: {
          text: '编辑此页面',
          // 示例：替换为你的实际仓库路径
          pattern: 'https://github.com/wuhaotdcq-s/notes/tree/main/docs/:path'
        },
    footer: {
      message: '笔记站',
      copyright: `版权所有 © 2025-${new Date().getFullYear()} 笔记站`
    },
// 侧边栏相关
        selectText: '选择笔记',
        sidebarMenuLabel: '侧边栏',
        toggleSidebar: '切换侧边栏',
    outline: {
      level: [1, 3],
      label: "目录",
    },
    lastUpdated: {
      text: '最近更新时间',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'medium'
      }
    },
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            },
          },
        },
      },
    },
   markdown: {
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '警告',
      infoLabel: '信息',
      detailsLabel: '详情'
    },

    math: true,
    codeTransformers: [],

    config: (md) => {
      // 可在此处添加 Markdown 插件
    }
  },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/66129848' },
      { icon: 'wechat', link: 'https://weixin.su/' }
    ]
  }

})