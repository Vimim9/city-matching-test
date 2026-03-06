# 🚀 Netlify 部署指南（备用方案）

## ⚡ 为什么选择 Netlify？

Vercel 可能遇到连接问题，Netlify 作为备用方案更稳定：
- ✅ 部署更简单
- ✅ 全球 CDN
- ✅ 免费 HTTPS
- ✅ 自动部署

---

## 📋 Netlify 部署步骤（3 分钟）

### 第 1 步：访问 Netlify

1. **打开浏览器**
2. **访问**：https://app.netlify.com
3. **点击 "Sign up"** 或 "Log in"

### 第 2 步：登录

**推荐使用 GitHub 登录**：
1. 点击 "Sign up with GitHub"
2. 授权 Netlify 访问 GitHub

### 第 3 步：导入项目

1. 登录后，点击 "Add new site" → "Import an existing project"
2. 在 "Import from Git" 下，选择 GitHub
3. 找到 `city-matching-test` 仓库
4. 点击 "Import"

### 第 4 步：配置构建

Netlify 会自动检测配置，确认以下设置：

```
Build command: pnpm install && pnpm run build
Publish directory: .next
```

**如果需要手动设置**：
- Branch: `main`
- Build command: `pnpm install && pnpm run build`
- Publish directory: `.next`

### 第 5 步：部署

1. 点击 "Deploy site"
2. 等待 2-3 分钟

### 第 6 步：完成

部署成功后，Netlify 会提供一个域名，例如：
```
https://city-matching-test.netlify.app
```

---

## 🎯 部署完成后

1. **复制 Netlify 提供的域名**
2. **在浏览器中访问**
3. **测试应用功能**

---

## ⚡ 快速参考

```
1. 访问 https://app.netlify.com
2. 用 GitHub 登录
3. 导入 city-matching-test 仓库
4. Build: pnpm install && pnpm run build
5. Publish: .next
6. 点击 Deploy
7. 等待 2-3 分钟
8. 访问域名
```

---

## ✅ 预期结果

部署成功后，您会看到：
- ✅ 页面正常加载
- ✅ "性格城市匹配测试"标题
- ✅ "开始测试"按钮
- ✅ 🔒 锁形图标（HTTPS）

---

## 🆘 如果遇到问题

### 问题 1：找不到 GitHub 仓库

**解决**：
1. 点击 "Configure Netlify on GitHub"
2. 确保已授权该仓库
3. 刷新页面重试

### 问题 2：构建失败

**解决**：
1. 查看构建日志
2. 告诉我错误信息
3. 我帮您修复

---

**现在访问 https://app.netlify.com 开始部署吧！** 🚀

**部署完成后告诉我域名，我帮您验证！** ✨
