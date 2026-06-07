# Gaofeicm 博客项目架构文档

> 生成时间：2026-06-07
> 生成方式：代码审查与静态分析

---

## 一、项目基本信息

| 属性 | 值 |
|------|------|
| 站点名称 | Gaofeicm / 高飞嫣鱼 |
| 域名 | gaofeicm.cf (已失效) |
| GitHub | github.com/gaofeicm |
| 部署方式 | GitHub Pages |
| 状态 | 已废弃（2020年后无更新） |

---

## 二、技术栈

| 层级 | 技术 | 版本 |
|------|------|------|
| 静态站点生成器 | Hexo | 4.2.0 |
| 主题 | NexT | 7.7.1 |
| 主题方案 | Gemini | - |
| 动画引擎 | Velocity.js | - |
| 动画库 | Anime.js | - |
| 依赖库 | jQuery | 1.8.3 (已过时) |
| 图标字体 | Font Awesome | - |

**⚠️ 注意**：所有技术版本均为2020年的旧版本，严重过时。

---

## 三、目录结构

```
gaofeicm-work.github.io/
│
├── index.html                    # 首页（文章列表）
├── search.xml                    # 本地搜索索引
├── README.md                     # 空文件
│
├── 2020/04/12/java异常处理/      # 文章详情页
│   └── index.html
│
├── archives/                     # 归档页
│   ├── index.html                # 归档总页
│   └── 2020/
│       ├── index.html            # 2020年归档
│       └── 04/index.html         # 2020年4月归档
│
├── java/                         # 分类页
│   ├── index.html                # 分类列表
│   └── java异常处理.html          # 分类文章
│
├── 404/
│   └── 404.html                  # 404页面
│
├── css/
│   └── main.css                  # 全站样式
│
├── js/                           # 功能脚本
│   ├── jquery-1.8.3.min.js
│   ├── next-boot.js              # 启动引导
│   ├── utils.js                  # 工具函数
│   ├── motion.js                 # 页面动效
│   ├── local-search.js           # 本地搜索
│   ├── fireworks.js              # 烟花特效
│   ├── love.js                   # 爱心特效
│   ├── snow.js                   # 雪花特效
│   ├── canvas-nest.min.js        # 背景粒子
│   ├── bookmark.js               # 书签
│   ├── anime.min.js
│   └── schemes/
│       ├── muse.js
│       └── pisces.js
│
├── lib/                          # 第三方库
│   ├── font-awesome/
│   ├── velocity/
│   └── anime.min.js
│
├── live2dw/                      # 看板娘
│   ├── assets/
│   └── lib/
│
└── images/                       # 图片资源
    ├── avatar.png / avatar.gif
    ├── bg-1.jpg / bg-2.jpg
    ├── pasted-*.png             # 文章配图(11张)
    └── ...
```

---

## 四、Hexo 配置信息

从 HTML 中提取的配置：

```javascript
CONFIG = {
  hostname: "gaofeicm.cf",
  root: "/",
  scheme: "Gemini",          // 主题方案
  version: "7.7.1",          // NexT版本
  sidebar: {
    position: "left",         // 侧边栏位置
    display: "post"          // 仅文章页显示侧边栏
  },
  back2top: {
    enable: true,
    sidebar: false,
    scrollpercent: true       // 显示滚动百分比
  },
  localsearch: {
    enable: true,
    trigger: "auto",
    top_n_per_article: 1
  },
  motion: {
    enable: true,
    transition: {
      post_block: "fadeIn",
      post_header: "slideDownIn",
      post_body: "slideDownIn",
      coll_header: "slideLeftIn",
      sidebar: "slideUpIn"
    }
  }
}
```

---

## 五、CSS 主题变量

```css
:root {
  --body-bg-color: #eee;       /* 页面背景 */
  --content-bg-color: #fff;    /* 内容区背景 */
  --card-bg-color: #f5f5f5;    /* 卡片背景 */
  --text-color: #555;          /* 正文颜色 */
  --link-color: #555;          /* 链接颜色 */
  --link-hover-color: #222;    /* 链接悬停颜色 */
  --brand-color: #fff;         /* 品牌色 */
}
```

---

## 六、功能清单

| 功能 | 状态 | 备注 |
|------|------|------|
| 文章展示 | ✅ | 首页列表 + 详情页 |
| 归档 | ✅ | 按年/月分类 |
| 分类 | ✅ | Java分类 |
| 本地搜索 | ✅ | search.xml驱动 |
| 页面动效 | ✅ | 淡入/滑入动画 |
| 鼠标烟花 | ✅ | 点击触发 |
| 鼠标爱心 | ✅ | 点击触发 |
| 雪花飘落 | ✅ | 全屏飘雪 |
| 背景粒子 | ✅ | canvas-nest |
| Live2D看板娘 | ✅ | hijiki猫 |
| GitHub角标 | ✅ | 右上角跳转 |
| 回到顶部 | ✅ | 带百分比显示 |
| 站点统计 | ✅ | 不蒜子统计 |
| 运行时间 | ✅ | 自定义脚本 |
| 评论系统 | ❌ | 未配置 |
| 百度统计 | ❌ | 未配置 |
| RSS | ❌ | 未配置 |

---

## 七、文章内容

### 当前文章列表

| 标题 | 日期 | 分类 | 字数 | 阅读时长 |
|------|------|------|------|----------|
| Java异常处理 | 2020-04-12 | Java | 4.8k | 4分钟 |

### 文章内容摘要

- **主题**：Java 异常处理机制详解
- **内容**：
  - Java 异常处理概述
  - try-catch-finally 用法
  - 异常类型（Checked/Unchecked）
  - JVM 异常处理原理
  - 异常性能分析
- **配图**：11张（pasted-0.png ~ pasted-10.png）

---

## 八、关键问题

1. **源文件丢失**：仓库中只有 `hexo generate` 后的静态HTML，没有 Hexo 源码和 Markdown 原文
2. **版本过时**：Hexo 4.2.0 + NexT 7.7.1，已停止维护多年
3. **依赖过时**：jQuery 1.8.3 存在安全漏洞
4. **域名失效**：gaofeicm.cf 免费域名可能已失效
5. **内容匮乏**：仅1篇文章，网站近乎空白

---

## 九、重建建议

### 方案对比

| 方案 | 优势 | 劣势 |
|------|------|------|
| Hexo 7.x + NexT 8.x | 迁移成本低，熟悉度高 | 社区活跃度下降 |
| VitePress | 现代、极简、性能极佳 | 主题较少 |
| Hugo | 编译极快，主题丰富 | Go模板语法有学习成本 |
| Astro | 灵活，支持多框架 | 配置复杂 |

### 推荐路径

1. **首选**：Hexo 7.x + NexT 8.x（保持技术栈延续性，便于迁移现有文章）
2. **备选**：VitePress（如果你追求现代开发和极致性能）

---

## 十、数据提取清单

如需迁移，以下资源可复用：

- [ ] 文章内容：从 HTML 中提取（已有11张配图链接）
- [ ] CSS 样式：main.css 中的主题变量可复用
- [ ] 看板娘：live2dw 目录下的 hijiki 模型
- [ ] 特效脚本：fireworks.js, love.js, snow.js
- [ ] 头像/背景图：images/ 目录

---

*文档由 AI 代码审查工具自动生成*
