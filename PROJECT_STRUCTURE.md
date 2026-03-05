# 项目结构说明

```
projects/
├── .coze                    # Coze 项目配置文件
├── .eslintrc.json           # ESLint 配置
├── .gitignore               # Git 忽略文件
├── DEPLOY.md                # 部署指南
├── PROJECT_STRUCTURE.md     # 本文件
├── next.config.ts           # Next.js 配置
├── package.json             # 项目依赖
├── postcss.config.mjs       # PostCSS 配置
├── tailwind.config.ts       # Tailwind CSS 配置
├── tsconfig.json            # TypeScript 配置
│
├── public/                  # 静态资源目录
│   ├── favicon.ico
│   └── ...
│
└── src/
    ├── app/                 # Next.js App Router 目录
    │   ├── layout.tsx       # 根布局
    │   ├── page.tsx         # 首页（应用入口）
    │   ├── test/
    │   │   └── page.tsx     # 测试页面
    │   ├── result/
    │   │   └── page.tsx     # 结果页面
    │   └── robots.ts        # SEO 配置
    │
    ├── components/          # 组件目录
    │   └── ui/              # shadcn/ui 组件库
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── tabs.tsx
    │       ├── badge.tsx
    │       ├── progress.tsx
    │       ├── alert.tsx
    │       └── ...          # 其他 UI 组件
    │
    ├── data/                # 数据文件
    │   ├── questions.ts     # 45道测试题目
    │   └── cities.ts        # 50个城市数据库
    │
    ├── lib/                 # 工具函数和逻辑
    │   ├── types.ts         # TypeScript 类型定义
    │   ├── scoring.ts       # 评分与匹配算法
    │   └── utils.ts         # 通用工具函数
    │
    └── hooks/               # React Hooks
        └── use-mobile.ts    # 移动端检测
```

---

## 核心文件说明

### 1. 页面组件

#### `src/app/page.tsx` - 首页
- 应用入口页面
- 介绍功能、引导开始测试
- 响应式设计，支持移动端

#### `src/app/test/page.tsx` - 测试页面
- 展示45道测试题目
- 分步式 UI（每页10题）
- 进度条显示
- 选项记忆功能

#### `src/app/result/page.tsx` - 结果页面
- 展示匹配的城市
- 多标签页展示（匹配城市、性格分析、推荐城市）
- 详细分析报告
- 重新测试功能

---

### 2. 数据文件

#### `src/data/questions.ts` - 测试题目
- 包含45道专业心理测试题目
- 覆盖5个性格维度：
  - 生活节奏 (Pace of Life)
  - 职业倾向 (Career Focus)
  - 社交倾向 (Social Orientation)
  - 文化偏好 (Cultural Preference)
  - 心理需求 (Psychological Needs)
- 每题5个选项（1-5分）

#### `src/data/cities.ts` - 城市数据库
- 包含50个国内主要城市
- 每个城市包含：
  - 基本信息：名称、省份、人口、GDP
  - 5维度评分（1-10分）
  - 详细描述
  - 优势、挑战、建议
- 涵盖直辖市、省会城市、重点经济城市

---

### 3. 核心逻辑

#### `src/lib/types.ts` - 类型定义
```typescript
- Question: 题目类型
- City: 城市类型
- UserAnswer: 用户答案类型
- PersonalityScores: 性格评分类型
- CityMatch: 城市匹配结果类型
```

#### `src/lib/scoring.ts` - 评分算法
- `calculateScores()`: 计算用户5维度得分
- `calculateMatchScore()`: 计算城市匹配度（欧氏距离算法）
- `getPersonalityProfile()`: 生成性格画像
- `getCityRankings()`: 对城市进行排名

---

### 4. UI 组件

使用 shadcn/ui 组件库，位于 `src/components/ui/`

常用组件：
- `Button`: 按钮
- `Card`: 卡片
- `Tabs`: 标签页
- `Badge`: 徽章
- `Progress`: 进度条
- `Alert`: 提示框
- `Accordion`: 手风琴

---

## 技术栈详情

### 前端框架
- **Next.js 16**: React 全栈框架
- **React 19**: UI 库
- **TypeScript 5**: 类型安全

### 样式方案
- **Tailwind CSS 4**: 实用优先的 CSS 框架
- **shadcn/ui**: 现代化 UI 组件库
- **Radix UI**: 无障碍的 UI 原语

### 构建工具
- **pnpm**: 高效的包管理器
- **Turbopack**: 高性能构建工具（Next.js 内置）

### 部署平台
- **Vercel**: 推荐的部署平台
- 支持其他平台：Netlify、自建服务器

---

## 数据流说明

```
用户访问首页
    ↓
点击"开始测试"
    ↓
进入测试页面
    ↓
逐题回答45个问题
    ↓
答案存储到 localStorage
    ↓
计算5维度得分
    ↓
与50个城市进行匹配
    ↓
按匹配度排序
    ↓
展示结果页面
    ↓
显示最佳匹配城市和详细分析
```

---

## 算法说明

### 1. 评分算法
- 每题1-5分
- 按维度分组计算平均分
- 结果范围：1-10分

### 2. 匹配算法（欧氏距离）
```
差异度 = √[(用户1-城市1)² + (用户2-城市2)² + ... + (用户5-城市5)²]
匹配度 = (最大差异 - 实际差异) / 最大差异 × 100%
```

### 3. 排名规则
- 匹配度从高到低排序
- 相同匹配度时，优先推荐一线城市
- 展示前5名和后3名

---

## 性能优化

- **静态生成**: 使用 Next.js SSG 优化首屏加载
- **代码分割**: 按路由自动分割
- **懒加载**: 组件按需加载
- **压缩资源**: 自动优化图片和代码
- **CDN 缓存**: Vercel 全球 CDN

---

## 浏览器兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- 移动端浏览器（iOS Safari 14+, Chrome Mobile）

---

## 开发与部署

### 本地开发
```bash
pnpm install
pnpm dev
```

### 生产构建
```bash
pnpm build
pnpm start
```

### 部署到 Vercel
```bash
vercel --prod
```

详见 `DEPLOY.md`

---

## 未来扩展方向

1. **功能增强**
   - 增加更多城市数据
   - 支持多语言
   - 添加分享功能
   - 保存历史记录

2. **算法优化**
   - 引入机器学习
   - 个性化推荐
   - 季节性调整

3. **用户体验**
   - 增加 AI 对话分析
   - 视觉化数据展示
   - 社交分享功能

---

## 贡献指南

欢迎提交 Issue 和 Pull Request！

---

## 许可证

MIT License
