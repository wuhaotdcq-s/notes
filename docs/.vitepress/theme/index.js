// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
// 注意路径：若 style.css 和 index.js 同目录（theme/ 下），路径是 './style.css'（确认文件存在！）
import './style.css'
import './custom.css'

// 可选：如需用 Vue 渲染函数，需导入 h
// import { h } from 'vue'

export default {
  // ✅ 关键修复：用展开运算符继承默认主题的所有配置
  ...DefaultTheme,
  mounted() {
    const body = document.querySelector('body')
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) { // 滚动超过20px时添加类名
        body.classList.add('scrolled')
      } else {
        body.classList.remove('scrolled')
      }
    })
  },
  // ✅ 修复 Layout 函数（两种写法任选）
  // 写法1：最简版（无自定义布局，仅继承默认）
  Layout: DefaultTheme.Layout,

  // 写法2：如需自定义插槽（比如加页脚，需打开注释）
  // Layout: () => {
  //   return {
  //     components: { Layout: DefaultTheme.Layout },
  //     template: `
  //       <Layout>
  //         <template #footer-after>
  //           <div class="custom-footer">© 2025 我的笔记 | 保留所有权利</div>
  //         </template>
  //       </Layout>
  //     `
  //   }
  // },

  // 可选：全局组件注册
  enhanceApp({ app }) {
    // 示例：注册自定义组件（需先创建组件文件）
    // import MyButton from './components/MyButton.vue'
    // app.component('MyButton', MyButton)
  }
}