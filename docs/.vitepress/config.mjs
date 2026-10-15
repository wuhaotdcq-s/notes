import { defineConfig } from 'vitepress'
import nav from './nav.mjs'
import { generateSidebar } from './sidebar.mjs'

const SITE_HOSTNAME = 'https://wuhaotdcq-s.github.io'
const SITE_BASE = '/notes/'
const REPO_URL = 'https://github.com/wuhaotdcq-s/notes'
const SITE_TITLE = '笔记站'

// 站点图标：内联 SVG（📚），无需额外静态资源
const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E📚%3C/text%3E%3C/svg%3E"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: SITE_BASE,
  lang: 'zh-CN',
  title: SITE_TITLE,
  description: '我的笔记站',
  titleTemplate: `:title | ${SITE_TITLE}`,

  // 启用「最近更新时间」（需要 git 历史；文案在 themeConfig.lastUpdated 中配置）
  lastUpdated: true,

  // 生成 sitemap.xml，便于搜索引擎收录
  // 注意：VitePress 不会自动为 sitemap 拼接 base，hostname 必须包含 base 路径，
  // 且结尾要带 `/`（地址解析依赖它），否则 /notes 前缀会被丢掉
  sitemap: {
    hostname: `${SITE_HOSTNAME}${SITE_BASE}`
  },

  // 注意：head 是顶层配置项，放在 themeConfig 里不会生效
  head: [
    ['link', { rel: 'icon', href: FAVICON }],
    ['meta', { name: 'theme-color', content: '#a6acff' }]
  ],

  markdown: {
    lineNumbers: true,
    // 容器标签中文配置
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '警告',
      infoLabel: '信息',
      detailsLabel: '详情'
    },
    // 数学公式由 markdown-it-mathjax3 在构建期渲染为内联 SVG，无需再引入 KaTeX 的 CSS/JS
    math: true,
    image: {
      // v2 中该选项已由 lazyLoading 更名为 lazyLoad（默认 false）
      lazyLoad: true
    }
  },

  themeConfig: {
    nav,
    sidebar: generateSidebar(),
    logo: 'https://vitepress.dev/vitepress-logo-large.svg',

    // 分页导航
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // 编辑此页
    editLink: {
      text: '编辑此页面',
      pattern: `${REPO_URL}/edit/main/docs/:path`
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
      label: '目录'
    },
    lastUpdated: {
      text: '最近更新时间',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'medium'
      }
    },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
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
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: REPO_URL },
      { icon: 'bilibili', link: 'https://space.bilibili.com/66129848' },
      { icon: 'wechat', link: 'https://weixin.su/' }
    ]
  }
})
