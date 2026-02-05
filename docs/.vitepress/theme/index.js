// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import { h, onMounted, onUnmounted } from 'vue'

// 导入 Mermaid 组件

// 可选：导入自定义样式
import './custom.css'
import './style.css'

export default {
  extends: DefaultTheme,

  // 🔥 关键：在 enhanceApp 中注册全局组件
  enhanceApp({ app }) {
    // 注册 Mermaid 为全局组件
//    app.component('Mermaid', Mermaid)

    // 也可以注册为其他名称
    // app.component('MermaidChart', Mermaid)
  },

  // 可选：添加滚动监听
  setup() {
    onMounted(() => {
      const handleScroll = () => {
        const body = document.querySelector('body')
        if (window.scrollY > 20) {
          body?.classList.add('scrolled')
        } else {
          body?.classList.remove('scrolled')
        }
      }

      handleScroll()
      window.addEventListener('scroll', handleScroll)

      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
      })
    })
  },

  Layout: DefaultTheme.Layout
}