# 🚀 Vercel 部署指南 - 超详细步骤

## 目录
- [前置准备](#前置准备)
- [步骤一：注册 Vercel 账号](#步骤一注册-vercel-账号)
- [步骤二：导入 GitHub 仓库](#步骤二导入-github-仓库)
- [步骤三：配置项目](#步骤三配置项目)
- [步骤四：开始部署](#步骤四开始部署)
- [步骤五：验证部署](#步骤五验证部署)
- [常见问题解决](#常见问题解决)

---

## 前置准备

### ✅ 已完成
- [x] GitHub 仓库已创建：`Vimim9/city-matching-test`
- [x] 代码已推送到 GitHub
- [x] 项目配置文件已准备（`vercel.json`）

### 📋 需要准备的
- [ ] 浏览器访问 Vercel 网站
- [ ] GitHub 账号（已有）

---

## 步骤一：注册 Vercel 账号

### 方法 A：访问 Vercel 网站

1. **打开浏览器**
2. **访问 Vercel**：
   ```
   https://vercel.com
   ```

### 注册账号

如果您还没有 Vercel 账号：

1. **点击右上角 "Sign Up" 按钮**（绿色）
2. **选择登录方式**（推荐使用 GitHub）：
   - 点击 "Continue with GitHub"（GitHub 图标）
   - 或 "Continue with GitLab"
   - 或 "Continue with Bitbucket"
3. **授权 Vercel 访问 GitHub**：
   - GitHub 会跳转到授权页面
   - 查看请求的权限（包含读取仓库权限）
   - 点击 "Authorize Vercel" 绿色按钮
4. **完善个人信息**：
   - 输入用户名（将作为 Vercel 用户名）
   - 选择团队（个人或团队）
   - 点击 "Continue"
5. **邮箱验证**（如果需要）：
   - Vercel 会发送验证邮件
   - 打开邮件，点击验证链接

### 登录账号

如果您已有 Vercel 账号：

1. 点击右上角 "Log In"
2. 选择登录方式（推荐 GitHub）
3. 完成登录

---

## 步骤二：导入 GitHub 仓库

### 进入部署页面

登录后，您会看到 Vercel Dashboard：

1. **找到 "Add New..." 按钮**（在页面右上角或左侧菜单）
2. **点击 "Add New..."**
3. **选择 "Project"**

### 导入仓库

在 "Import Git Repository" 页面：

1. **查看可用仓库列表**
   - 您会看到所有已授权的 GitHub 仓库
   - 找到 `city-matching-test` 仓库
   - 仓库所有者：`Vimim9`

2. **如果看不到仓库**：
   - 点击 "Adjust GitHub App Permissions"（灰色按钮）
   - 确保已授权该仓库
   - 点击 "Save" 或刷新页面
   - 重新查找 `city-matching-test`

3. **点击 "Import" 按钮**
   - 在 `city-matching-test` 仓库右侧
   - 点击蓝色 "Import" 按钮

---

## 步骤三：配置项目

导入后，会进入项目配置页面。Vercel 会**自动检测并填充配置**，您只需要确认即可。

### 配置详情

#### 1. Framework Preset（框架预设）

**自动检测值**：`Next.js`

**说明**：
- Vercel 会自动识别这是一个 Next.js 项目
- 无需手动修改

**验证**：
- 应该显示 "Next.js" 或 "Next.js (create-next-app)"

---

#### 2. Root Directory（根目录）

**自动检测值**：`./`

**说明**：
- 项目根目录
- 无需修改

**验证**：
- 应该显示 `./` 或留空

---

#### 3. Build Command（构建命令）

**自动检测值**：`pnpm install && pnpm run build`

**说明**：
- 先安装依赖
- 然后构建项目

**验证**：
- 应该完全匹配：`pnpm install && pnpm run build`

**如果没有自动填充**：
```
pnpm install && pnpm run build
```

---

#### 4. Output Directory（输出目录）

**自动检测值**：`.next`

**说明**：
- Next.js 构建输出目录
- 无需修改

**验证**：
- 应该显示 `.next`

---

#### 5. Install Command（安装命令）

**自动检测值**：`pnpm install`

**说明**：
- 使用 pnpm 安装依赖

**验证**：
- 应该显示 `pnpm install`

**如果没有自动填充**：
```
pnpm install
```

---

#### 6. Environment Variables（环境变量）

**状态**：本应用不需要配置环境变量

**说明**：
- 本应用是纯前端，不需要环境变量
- 此部分可以留空

---

#### 7. Build & Development Settings（构建设置）

**Vercel 会自动读取 `vercel.json` 配置文件**

自动配置包括：
- **Build Command**：`pnpm install && pnpm run build`
- **Output Directory**：`.next`
- **Framework**：`Next.js`
- **Regions**：香港节点（`hkg1`）

---

### 配置确认清单

在点击部署之前，确认以下配置：

- [ ] Framework: Next.js
- [ ] Root Directory: `./`
- [ ] Build Command: `pnpm install && pnpm run build`
- [ ] Output Directory: `.next`
- [ ] Install Command: `pnpm install`
- [ ] Team: 个人账户（或您选择的团队）
- [ ] Project Name: `city-matching-test`（或自动生成的名称）

---

## 步骤四：开始部署

### 点击部署按钮

1. **滚动到页面底部**
2. **点击 "Deploy" 按钮**（绿色，在页面右下角）
3. **开始构建过程**（通常需要 2-5 分钟）

---

### 部署过程说明

部署过程会自动执行以下步骤：

#### 阶段 1：克隆仓库
```
Cloning repository...
Cloned from git@github.com:Vimim9/city-matching-test.git
```

#### 阶段 2：安装依赖
```
Installing dependencies...
> pnpm install
> Added 200+ packages in 30s
```

#### 阶段 3：构建项目
```
Building project...
> pnpm run build
> Build completed in 60s
```

#### 阶段 4：部署应用
```
Deploying to Edge Functions...
> Uploading to Edge Network...
> Deployment complete!
```

---

### 部署进度查看

在部署过程中，您可以：

1. **查看实时日志**：
   - 页面会显示构建日志
   - 绿色 ✅ 表示成功
   - 黄色 ⚠️ 表示警告
   - 红色 ❌ 表示错误

2. **查看构建步骤**：
   - 每个步骤都会显示状态
   - 预计剩余时间

3. **取消部署**（如果需要）：
   - 点击 "Cancel" 按钮
   - 可以重新部署

---

## 步骤五：验证部署

### 部署成功标志

当您看到以下内容时，说明部署成功：

1. **页面顶部显示**：
   ```
   Congratulations!
   ```

2. **Deployment Status**：
   ```
   Ready
   ✅
   ```

3. **显示部署域名**：
   ```
   https://city-matching-test.vercel.app
   ```
   或
   ```
   https://city-matching-test-x.vercel.app
   ```
   （其中 `x` 是随机字符串）

---

### 访问应用

1. **点击域名链接**
   - 在页面上找到 "Domains" 部分
   - 点击域名链接（蓝色）

2. **或者直接访问**：
   ```
   https://city-matching-test.vercel.app
   ```

3. **验证功能**：
   - ✅ 页面正常加载
   - ✅ 显示首页内容
   - ✅ 点击"开始测试"可以进入测试页面
   - ✅ 测试流程正常

---

### 验证 HTTPS

1. **查看浏览器地址栏**
2. **应该看到**：
   - 🔒 锁形图标（安全标志）
   - `https://` 前缀

**说明**：
- Vercel 自动配置 SSL 证书
- 无需手动配置
- 完全免费

---

### 查看部署详情

在 Vercel Dashboard 中，您可以：

1. **查看部署记录**：
   - 点击 "Deployments" 标签
   - 查看所有部署历史

2. **查看构建日志**：
   - 点击任意部署记录
   - 查看 "Build Logs"

3. **查看性能数据**：
   - 点击 "Analytics"
   - 查看访问统计

---

## 常见问题解决

### 问题 1：找不到 GitHub 仓库

**现象**：
- 在 "Import Git Repository" 中看不到 `city-matching-test` 仓库

**解决方案**：
1. 点击 "Adjust GitHub App Permissions"
2. 确保已授权该仓库
3. 点击 "Save"
4. 刷新页面
5. 重新查找

---

### 问题 2：构建失败

**现象**：
- 部署状态显示 ❌
- 构建日志中有错误信息

**常见错误**：

#### 错误 A：依赖安装失败
```
Error: Cannot find module 'xxx'
```

**解决方案**：
1. 检查 `package.json` 是否正确
2. 确认依赖已提交到 GitHub
3. 重新部署

#### 错误 B：构建超时
```
Error: Build timed out after 10 minutes
```

**解决方案**：
1. 在项目根目录创建 `vercel.json`（已有）
2. 添加 `maxDuration` 配置：
   ```json
   {
     "buildCommand": "pnpm install && pnpm run build",
     "maxDuration": 300
   }
   ```
3. 重新部署

#### 错误 C：TypeScript 错误
```
Error: Type 'xxx' is not assignable to type 'yyy'
```

**解决方案**：
1. 本地运行 `pnpm run build` 检查
2. 修复类型错误
3. 提交修复
4. 重新部署

---

### 问题 3：域名访问不了

**现象**：
- 部署成功，但无法访问域名
- 显示 "404 Not Found"

**解决方案**：
1. **等待 DNS 生效**：
   - 首次部署需要 5-10 分钟
   - 耐心等待后重试

2. **检查部署状态**：
   - 在 Vercel Dashboard 查看
   - 确认部署状态为 "Ready"

3. **清除浏览器缓存**：
   - 按 `Ctrl + Shift + R`（Windows）
   - 或 `Cmd + Shift + R`（Mac）

4. **尝试无痕模式**：
   - 打开无痕/隐私浏览窗口
   - 再次访问域名

---

### 问题 4：HTTPS 不正常

**现象**：
- 浏览器显示"不安全"
- 没有 🔒 锁形图标

**解决方案**：
1. **等待证书生成**：
   - SSL 证书需要 5-10 分钟生成
   - 稍后刷新页面

2. **检查域名配置**：
   - 在 Vercel 项目设置中
   - Settings → Domains
   - 确认域名状态正常

3. **重新生成证书**：
   - 在 Domains 页面
   - 点击域名
   - 点击 "Renew Certificate"

---

### 问题 5：自定义域名无法访问

**现象**：
- 添加自定义域名后无法访问
- 显示 "This site can't be reached"

**解决方案**：
1. **配置 DNS 记录**：
   - 在域名服务商处
   - 添加 CNAME 记录：
     ```
     Type: CNAME
     Name: @
     Value: cname.vercel-dns.com
     ```

2. **等待 DNS 生效**：
   - 通常 10-30 分钟
   - 最多 24 小时

3. **验证 DNS 配置**：
   ```bash
   nslookup your-domain.com
   ```

---

## 🎯 部署成功后的下一步

### 自动更新

**好消息**：部署成功后，以后更新代码会自动部署！

1. **在本地修改代码**
2. **提交并推送到 GitHub**：
   ```bash
   git add .
   git commit -m "update: 添加新功能"
   git push
   ```
3. **Vercel 自动检测并重新部署**
4. **无需手动操作**

### 自定义域名（可选）

如果您想要更个性化的域名：

1. **购买域名**（如阿里云、腾讯云）
2. **在 Vercel 中添加**：
   - Settings → Domains → Add Domain
3. **配置 DNS 记录**
4. **完成**

### 监控和分析

在 Vercel Dashboard 中，您可以：

1. **查看访问统计**：Analytics
2. **查看构建日志**：Deployments
3. **查看错误日志**：Logs
4. **设置告警**：Notifications

---

## 📋 部署检查清单

### 部署前
- [ ] GitHub 仓库已创建
- [ ] 代码已推送到 GitHub
- [ ] Vercel 账号已注册
- [ ] 已授权 Vercel 访问 GitHub

### 部署中
- [ ] 仓库已成功导入
- [ ] 配置自动检测正确
- [ ] 构建成功（绿色 ✅）
- [ ] 部署完成

### 部署后
- [ ] 域名可访问
- [ ] HTTPS 正常（🔒）
- [ ] 功能测试通过
- [ ] 移动端正常
- [ ] 页面加载速度快

---

## 🎉 部署完成！

恭喜！您的应用已成功部署到 Vercel！

**您现在拥有**：
- ✅ 在线应用：`https://city-matching-test.vercel.app`
- ✅ 免费 HTTPS 域名
- ✅ 全球 CDN 加速
- ✅ 自动 SSL 证书
- ✅ 自动更新
- ✅ 零成本（完全免费）

---

## 📞 需要帮助？

如果遇到问题：

1. **查看构建日志**：
   - Vercel Dashboard → Deployments → 选择部署 → View Logs

2. **查看 Vercel 文档**：
   - https://vercel.com/docs

3. **联系支持**：
   - Vercel 社区：https://vercel.com/support

---

**祝您部署顺利！🚀**

---

## 📝 快速命令参考

如果需要重新部署：

```bash
# 在本地修改代码后
git add .
git commit -m "update: 更新内容"
git push

# Vercel 会自动重新部署
```

---

**保存此文档以便查阅！** 📌
