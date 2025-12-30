// docs/.vitepress/head.mjs 正确写法
export default [
  // 格式：[标签名, 属性对象, 可选的innerHTML]
  ['link', {
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
    // 补全 crossorigin 避免资源加载报错（可选，但推荐）
    crossorigin: 'anonymous'
  }],
  ['script', {
    src: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js',
    crossorigin: 'anonymous',
    // 加 async/defer 避免阻塞渲染（可选）
    defer: true
  }]
]