// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import { onMounted, onUnmounted } from 'vue'

// 自定义样式
import './custom.css'
import './style.css'

export default {
  extends: DefaultTheme,

  // 可选：在 enhanceApp 中注册全局组件
  enhanceApp({ app }) {
    // app.component('MyComponent', MyComponent)
  },

  // 导航栏滚动阴影：onUnmounted 必须与 onMounted 同级注册，
  // 写在 onMounted 回调内部不会生效（组件实例已不存在），会造成监听器泄漏。
  setup() {
    const handleScroll = () => {
      const body = document.querySelector('body')
      if (window.scrollY > 20) {
        body?.classList.add('scrolled')
      } else {
        body?.classList.remove('scrolled')
      }
    }

    onMounted(() => {
      handleScroll()
      window.addEventListener('scroll', handleScroll, { passive: true })
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
  },

  Layout: DefaultTheme.Layout
}
