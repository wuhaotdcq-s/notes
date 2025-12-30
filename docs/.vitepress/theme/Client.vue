<template>
    <!-- 空模板：仅用于挂载 Vue 生命周期钩子 -->
</template>

<script setup lang="ts">
import { onMounted, onUpdated } from 'vue'
import { useRoute } from 'vitepress'

declare global {
    interface Window {
        mermaid?: any
    }
}

// 获取当前路由实例，监听路由变化
const route = useRoute()

// 核心：Mermaid 图表渲染函数
const renderMermaid = () => {
    // 确保 window.mermaid 已加载（避免 CDN 延迟导致的错误）
    if (window.mermaid) {
        // 渲染所有带有 .mermaid 类的容器
        window.mermaid.init(
            {
                startOnLoad: false, // 禁用自动加载（手动控制渲染时机）
                theme: 'default'    // 与配置文件中 mermaid 主题保持一致
            },
            '.mermaid'
        )
    }
}

// 1. 页面首次挂载完成后渲染图表（解决初始加载不显示问题）
onMounted(() => {
    renderMermaid()
})

// 2. 路由切换后重新渲染图表（解决单页应用切换页面后图表消失问题）
onUpdated(() => {
    // 路由变化时，延迟 100ms 确保 DOM 已更新（避免 Vue 渲染优先级问题）
    setTimeout(renderMermaid, 100)
})
</script>