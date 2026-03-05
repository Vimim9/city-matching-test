# ✅ 部署前检查清单

在部署之前，请确保完成以下所有检查项。

## 📋 阶段一：本地环境检查

### Git 配置
- [ ] Git 已安装（运行 `git --version` 检查）
- [ ] Git 用户名已配置
  ```bash
  git config --global user.name "Your Name"
  ```
- [ ] Git 邮箱已配置
  ```bash
  git config --global user.email "your.email@example.com"
  ```

### Node.js 环境
- [ ] Node.js 版本 ≥ 18.17
  ```bash
  node --version
  ```
- [ ] pnpm 已安装
  ```bash
  pnpm --version
  ```

### 项目文件检查
- [ ] `vercel.json` 文件存在且配置正确
- [ ] `package.json` 文件完整
- [ ] 所有依赖已安装（运行 `pnpm install`）
- [ ] 本地运行正常（运行 `pnpm dev` 可访问 http://localhost:5000）

---

## 📋 阶段二：GitHub 准备

### GitHub 账号
- [ ] 已注册 GitHub 账号
- [ ] 已验证邮箱

### 代码准备
- [ ] 代码已提交到本地 Git 仓库
  ```bash
  git add .
  git commit -m "feat: 完成性格城市匹配测试应用"
  ```
- [ ] GitHub 远程仓库已创建
- [ ] 远程仓库已关联
  ```bash
  git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
  ```
- [ ] 代码已推送到 GitHub
  ```bash
  git push -u origin main
  ```

### GitHub 仓库检查
- [ ] 在 GitHub 网站上可以看到代码
- [ ] 主要文件都存在：
  - [ ] `src/app/page.tsx`
  - [ ] `src/data/questions.ts`
  - [ ] `src/data/cities.ts`
  - [ ] `vercel.json`

---

## 📋 阶段三：Vercel 准备

### Vercel 账号
- [ ] 已注册 Vercel 账号
- [ ] 已登录 Vercel
- [ ] 已授权 Vercel 访问 GitHub

### 项目配置
- [ ] 可以在 Vercel 看到您的 GitHub 仓库
- [ ] 项目配置自动检测正确：
  - [ ] Framework: Next.js
  - [ ] Build Command: `pnpm install && pnpm run build`
  - [ ] Output Directory: `.next`
  - [ ] Install Command: `pnpm install`

---

## 📋 阶段四：部署执行

### 部署过程
- [ ] 已点击 "Deploy" 按钮
- [ ] 构建日志正常输出
- [ ] 构建成功（绿色 ✅）
- [ ] 部署完成

### 域名获取
- [ ] 记录下 Vercel 提供的域名（如 `https://your-project.vercel.app`）
- [ ] 域名可访问
- [ ] HTTPS 正常（浏览器地址栏有小锁图标）

---

## 📋 阶段五：功能测试

### 首页测试
- [ ] 首页正常加载
- [ ] 页面样式正确
- [ ] "开始测试"按钮可点击

### 测试流程
- [ ] 可以进入测试页面
- [ ] 题目正常显示
- [ ] 选项可选择
- [ ] 进度条正常更新
- [ ] 可以完成所有题目

### 结果页面
- [ ] 可以看到匹配的城市
- [ ] 性格分析正确显示
- [ ] 城市推荐列表正常
- [ ] "重新测试"按钮可用

### 移动端测试
- [ ] 在手机浏览器中访问正常
- [ ] 页面布局自适应
- [ ] 触摸操作流畅

---

## 📋 阶段六：可选高级功能

### 自定义域名（如需要）
- [ ] 已注册免费域名（如 Freenom）
- [ ] DNS 配置完成
- [ ] Vercel 中已添加域名
- [ ] 域名解析正常
- [ ] HTTPS 证书已生成

### 环境变量（如需要）
- [ ] 环境变量已配置
- [ ] 变量在应用中可访问

---

## 🔍 常见问题检查

### 如果构建失败
- [ ] 查看构建日志中的错误信息
- [ ] 检查 `vercel.json` 配置
- [ ] 确认依赖版本兼容性

### 如果域名访问不了
- [ ] 检查 DNS 配置
- [ ] 等待 10-30 分钟后重试
- [ ] 使用 `nslookup` 或 `dig` 检查 DNS

### 如果 HTTPS 不正常
- [ ] 等待 5-10 分钟让证书生成
- [ ] 刷新浏览器页面
- [ ] 在 Vercel 中重新生成证书

---

## 📊 部署统计

### 预期时间
- Git 推送：1-2 分钟
- Vercel 构建：2-3 分钟
- 首次访问：< 5 秒

### 预期成本
- Vercel 免费版：$0
- 自定义域名：$0（使用 Freenom）

---

## 🎯 部署成功标志

当您看到以下内容时，说明部署成功：

✅ Vercel 显示 "Congratulations!"
✅ 可以通过 `https://your-project.vercel.app` 访问
✅ 浏览器地址栏显示安全锁图标（🔒）
✅ 所有功能正常运行

---

## 📞 需要帮助？

如果遇到问题：

1. **查看日志**：Vercel → Deployments → 选择部署 → View Logs
2. **检查配置**：确认 `vercel.json` 正确
3. **重新部署**：Vercel → Deployments → Redeploy
4. **联系支持**：https://vercel.com/support

---

**祝您部署顺利！** 🚀

---

**部署时间统计**：____ 分钟
**首次访问时间**：____ 秒
**总费用**：$0.00
