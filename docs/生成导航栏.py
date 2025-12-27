import os
import re

def get_sorted_subdirs_by_order(root_path):
    """
    获取指定路径下的子目录，并按子目录中index.md的order值升序排列
    :param root_path: 根路径
    :return: 排序后的子目录名称列表
    """
    dir_with_order = []
    order_pattern = re.compile(r'order\s*:\s*(\d+)', re.IGNORECASE)

    if not os.path.exists(root_path) or not os.path.isdir(root_path):
        print(f"警告：根路径 {root_path} 不存在或不是目录")
        return []
    
    subdir_names = [
        item for item in os.listdir(root_path)
        if os.path.isdir(os.path.join(root_path, item))
    ]

    for dir_name in subdir_names:
        md_file_path = os.path.join(root_path, dir_name, "index.md")
        order_value = None

        if not os.path.exists(md_file_path):
            print(f"警告：目录 {dir_name} 下未找到 index.md 文件，将排除该目录")
            continue
        
        try:
            with open(md_file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                match = order_pattern.search(content)
                if match:
                    order_value = int(match.group(1))
                else:
                    print(f"警告：目录 {dir_name} 的 index.md 中未找到有效 order 值，将排除该目录")
        except Exception as e:
            print(f"错误：读取目录 {dir_name} 的 index.md 失败 - {str(e)}，将排除该目录")
            continue
        
        if order_value is not None:
            dir_with_order.append((dir_name, order_value))

    # 按order值升序排序
    dir_with_order.sort(key=lambda x: x[1])
    sorted_dir_names = [item[0] for item in dir_with_order]

    return sorted_dir_names

# 主逻辑
if __name__ == "__main__":
    # 获取当前脚本所在的根路径
    zong_lu_jing = os.path.dirname(__file__)
    # print(f"根路径：{zong_lu_jing}")

    # 定义主目录列表
    zhu_mu_lu = ['知识积累', '考试', '工作', '兴趣', '软件学习', '其他']
    # 存储每个主目录对应的子目录配置字符串
    zhu_mu_lu_config = []

    for main_dir in zhu_mu_lu:
        # 拼接主目录的完整路径
        main_dir_path = os.path.join(zong_lu_jing, main_dir)
        # 获取排序后的子目录名称
        sorted_subdirs = get_sorted_subdirs_by_order(main_dir_path)
        
        # 拼接子目录的配置项（每个项是 {text:..., link:...}）
        sub_config_items = []
        for sub_dir in sorted_subdirs:
            # 拼接 link 路径，确保格式正确
            link = f"/{main_dir}/{sub_dir}/"
            sub_config_items.append(f"{{ text: '{sub_dir}', link: '{link}' }}")
        
        # 将子配置项用逗号分隔，拼接成字符串（空列表则返回空字符串）
        sub_config_str = ",\n      ".join(sub_config_items)
        zhu_mu_lu_config.append(sub_config_str)
        # print(f"\n【{main_dir}】的子目录配置：")
        # print(sub_config_str if sub_config_str else "无有效子目录")

    # 定义 JavaScript 模板（用双大括号 {{ }} 转义 Python 的格式化占位符）
    js_template = '''export default [
  {{ text: '首页', link: '/index' }},
  {{
    text: '知识积累', items: [
      {0}
    ]
  }},
  {{ text: '考试', items: [
      {1}
    ] }},
  {{ text: '工作', items: [
      {2}
    ] }},
  {{ text: '兴趣', items: [
      {3}
    ] }},
  {{ text: '软件学习', items: [
      {4}
    ] }},
  {{ text: '其他', items: [
      {5}
    ] }}
]
'''

    # 替换模板中的占位符（{0}-{5}），生成最终的 JS 配置内容
    final_js_content = js_template.format(*zhu_mu_lu_config)
    # print("\n================ 最终生成的 JS 配置 ================")
    # print(final_js_content)

    # 可选：将生成的内容写入文件（比如 nav.config.js）
    with open(r"d:/notes/docs/.vitepress/nav.mjs", "w", encoding="utf-8") as f:
        f.write(final_js_content)
    # print("\n配置已写入 docs/.vitepress/nav.mjs 文件")