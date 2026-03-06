# 性格城市匹配测试应用

一个基于性格分析的智能城市匹配应用，通过45道专业题目从5个维度分析用户性格，推荐最匹配的国内城市。

## ✨ 功能特性

- **45道专业测试题目** - 覆盖生活节奏、职业倾向、社交倾向、文化偏好、心理需求五个维度
- **50个城市数据库** - 涵盖北京、上海、深圳、广州等国内主要城市
- **智能匹配算法** - 基于欧氏距离算法计算匹配度
- **详细分析报告** - 性格画像、城市推荐、生活建议
- **响应式设计** - 完美支持桌面和移动设备
- **现代化 UI** - 使用 shadcn/ui 组件库

## 🚀 在线访问

**GitHub 仓库**：https://github.com/Vimim9/city-matching-test

---

## 📦 本地开发

### 前置要求

- Node.js 18.17+
- pnpm 8+

### 安装与运行

```bash
# 克隆项目
git clone https://github.com/Vimim9/city-matching-test.git
cd city-matching-test

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 访问 http://localhost:5000
```

---

## 🌐 部署指南

### Vercel 部署（推荐）

**快速部署（5 分钟）**：查看 [VERCEL_QUICK_START.md](./VERCEL_QUICK_START.md)

**详细指南**：查看 [VERCEL_DEPLOY_GUIDE.md](./VERCEL_DEPLOY_GUIDE.md)

**快速步骤**：
1. 访问 https://vercel.com
2. 使用 GitHub 账号登录
3. 导入 `city-matching-test` 仓库
4. 点击 Deploy
5. 完成！获得免费 HTTPS 域名

**部署后访问**：`https://city-matching-test.vercel.app`

---

## 📂 项目结构

```
src/
├── app/
│   ├── page.tsx          # 首页
│   ├── test/page.tsx     # 测试页面
│   ├── result/page.tsx   # 结果页面
│   └── layout.tsx        # 根布局
├── components/ui/        # shadcn/ui 组件
├── data/
│   ├── questions.ts      # 45道题目
│   └── cities.ts         # 50个城市数据
└── lib/
    ├── types.ts          # 类型定义
    ├── scoring.ts        # 评分算法
    └── utils.ts          # 工具函数
```

---

## 📚 文档

- [部署指南](./DEPLOY.md) - 完整的部署步骤
- [项目结构](./PROJECT_STRUCTURE.md) - 项目架构说明
- [快速开始](./QUICK_START.md) - 快速上手指南
- [GitHub 推送指南](./GITHUB_PUSH_GUIDE.md) - Git 操作详细说明
- [Vercel 部署指南](./VERCEL_DEPLOY_GUIDE.md) - Vercel 部署详细步骤
- [图片访问指南](./IMAGE_ACCESS_GUIDE.md) - 图片资源访问方式

---

## 🧮 算法说明

### 评分算法

- 每题1-5分
- 按维度分组计算平均分
- 结果范围：1-10分

### 匹配算法

使用欧氏距离计算用户性格与城市的差异：

```
差异度 = √[(用户1-城市1)² + (用户2-城市2)² + ... + (用户5-城市5)²]
匹配度 = (最大差异 - 实际差异) / 最大差异 × 100%
```

---

## 📊 技术栈

- **框架**: Next.js 16 (App Router)
- **UI库**: React 19 + shadcn/ui
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 4
- **包管理**: pnpm
- **部署**: Vercel

---

## 🎯 核心功能

### 1. 性格分析

- 生活节奏分析
- 职业倾向评估
- 社交偏好识别
- 文化需求分析
- 心理需求洞察

### 2. 城市匹配

- 精准匹配度计算
- 详细城市信息
- 优势与挑战分析
- 生活建议推荐

### 3. 结果展示

- 多标签页展示
- 性格雷达图
- 城市排行榜
- 个性化建议

---

## 🔧 自定义配置

### 修改城市数据

编辑 `src/data/cities.ts` 添加或修改城市信息。

### 修改测试题目

编辑 `src/data/questions.ts` 调整测试内容。

### 修改主题

编辑 `tailwind.config.ts` 调整颜色和样式。

---

## 🐛 常见问题

### Q: 如何重置测试？
A: 点击结果页面的"重新测试"按钮。

### Q: 数据会丢失吗？
A: 测试结果保存在浏览器 localStorage 中。

### Q: 支持移动端吗？
A: 完全支持，响应式设计适配各种设备。

### Q: 图片无法访问？
A: 查看 [图片访问指南](./IMAGE_ACCESS_GUIDE.md)

---

## 📄 许可证

MIT License

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**找到属于你的城市灵魂** 🏙️✨

**在线演示**：[city-matching-test.vercel.app](https://city-matching-test.vercel.app) （部署后可用）
