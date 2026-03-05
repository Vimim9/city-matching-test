# 快速开始指南

## 🚀 3分钟部署到 Vercel

### 方式一：网页部署（推荐新手）

1. **准备代码**
   ```bash
   # 将项目推送到 GitHub
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **部署到 Vercel**
   - 打开 https://vercel.com
   - 点击 "New Project"
   - 选择你的 GitHub 仓库
   - 点击 "Deploy"

3. **完成！**
   - 等待2-3分钟
   - 获得免费 HTTPS 域名
   - 立即访问你的应用

---

### 方式二：CLI 部署（推荐开发者）

```bash
# 1. 安装 Vercel CLI
pnpm add -g vercel

# 2. 登录
vercel login

# 3. 部署
vercel --prod

# 4. 记录域名并访问
```

---

## 📦 项目文件清单

### 必需文件（部署到 Vercel）

```
✅ .coze              # Coze 配置
✅ .eslintrc.json     # ESLint 配置
✅ .gitignore         # Git 配置
✅ next.config.ts     # Next.js 配置
✅ package.json       # 依赖配置
✅ postcss.config.mjs # PostCSS 配置
✅ tailwind.config.ts # Tailwind 配置
✅ tsconfig.json      # TypeScript 配置
✅ vercel.json        # Vercel 配置
```

### 核心代码文件

```
✅ src/app/page.tsx           # 首页
✅ src/app/test/page.tsx      # 测试页
✅ src/app/result/page.tsx    # 结果页
✅ src/app/layout.tsx         # 布局
✅ src/data/questions.ts      # 45道题目
✅ src/data/cities.ts         # 50个城市
✅ src/lib/types.ts           # 类型定义
✅ src/lib/scoring.ts         # 评分算法
```

### UI 组件

```
✅ src/components/ui/*       # shadcn/ui 组件库
```

---

## 🎯 部署后检查

访问你的域名，确认：

- [ ] 首页正常显示
- [ ] 点击"开始测试"进入测试页
- [ ] 完成45道题目
- [ ] 查看匹配结果
- [ ] HTTPS 正常（小锁图标）
- [ ] 移动端正常显示

---

## 📊 应用数据

- **题目数量**: 45道
- **城市数量**: 50个
- **性格维度**: 5个
- **评分范围**: 1-10分
- **匹配度**: 0-100%

---

## 🔧 环境要求

- Node.js 18.17+
- pnpm 8+
- 现代浏览器（Chrome 90+）

---

## 📝 自定义修改

### 修改主题颜色

编辑 `tailwind.config.ts`:

```typescript
{
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#0ea5e9',  // 修改这里
          600: '#0284c7',
        }
      }
    }
  }
}
```

### 修改应用标题

编辑 `src/app/layout.tsx`:

```typescript
export const metadata = {
  title: '你的城市 - 性格匹配测试',
  description: '...',
}
```

### 修改城市数据

编辑 `src/data/cities.ts`，添加或修改城市信息。

### 修改测试题目

编辑 `src/data/questions.ts`，添加或修改题目。

---

## 🐛 常见问题

### Q: 部署后页面空白？
A: 检查 `vercel.json` 配置是否正确，确认 `buildCommand` 和 `outputDirectory` 设置正确。

### Q: 题目显示乱码？
A: 确保文件编码为 UTF-8。

### Q: 匹配结果不准确？
A: 可以调整 `src/lib/scoring.ts` 中的匹配算法权重。

### Q: 如何添加更多城市？
A: 在 `src/data/cities.ts` 中添加城市对象，包含5维度评分。

---

## 📚 更多文档

- **完整部署指南**: 查看 `DEPLOY.md`
- **项目结构**: 查看 `PROJECT_STRUCTURE.md`
- **代码规范**: Airbnb JavaScript Style Guide

---

## 💡 提示

- Vercel 免费版每月 100GB 带宽，足够本应用使用
- 可以绑定自定义域名
- 支持 Git 自动部署（推送代码自动更新）
- 查看访问统计和错误日志

---

## 🎉 开始使用

现在就访问你的应用，开始城市性格匹配测试吧！

---

**部署愉快！** 🚀
