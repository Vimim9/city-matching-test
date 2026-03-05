# 🚀 完整部署指南 - 一步步操作

## 目录
- [方案一：Vercel 自动域名（推荐，最简单）](#方案一vercel-自动域名推荐最简单)
- [方案二：免费域名服务 + Vercel（自定义域名）](#方案二免费域名服务--vercel自定义域名)
- [常见问题解决](#常见问题解决)

---

## 方案一：Vercel 自动域名（推荐，最简单）

**自动获得 `https://your-project.vercel.app`，完全免费！**

### 📋 前置准备

- ✅ 电脑已安装 Git
- ✅ 拥有 GitHub 账号（如果没有，先注册：https://github.com）
- ✅ 拥有 Vercel 账号（如果没有，稍后会注册）

### 第一步：准备项目代码

在您的项目目录中执行：

```bash
# 1. 进入项目目录
cd /workspace/projects

# 2. 初始化 Git 仓库
git init

# 3. 添加所有文件
git add .

# 4. 创建初始提交
git commit -m "feat: 完成性格城市匹配测试应用"
```

### 第二步：创建 GitHub 仓库

#### 方法 A：通过 GitHub 网页创建（推荐）

1. **访问 GitHub**：https://github.com
2. **登录账号**
3. **创建新仓库**：
   - 点击右上角 `+` 图标
   - 选择 "New repository"
   - 填写仓库信息：
     - **Repository name**：`city-matching-test`（或其他名称）
     - **Description**：性格城市匹配测试应用
     - **Public/Private**：选择 Public（推荐）或 Private
   - 点击 "Create repository"
4. **复制仓库地址**：
   - 会看到类似这样的地址：`https://github.com/YOUR_USERNAME/city-matching-test.git`

#### 方法 B：通过 GitHub CLI 创建（高级）

```bash
# 1. 安装 GitHub CLI（如果没有）
# macOS: brew install gh
# Windows: winget install --id GitHub.cli

# 2. 登录
gh auth login

# 3. 创建仓库
gh repo create city-matching-test --public --source=. --remote=origin

# 4. 推送代码
git push -u origin main
```

### 第三步：推送代码到 GitHub

如果您使用方法 A（网页创建），执行：

```bash
# 关联远程仓库（替换为您的仓库地址）
git remote add origin https://github.com/YOUR_USERNAME/city-matching-test.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

**如果遇到认证问题**：

```bash
# 使用个人访问令牌（推荐）
# 1. 访问 https://github.com/settings/tokens
# 2. 点击 "Generate new token" → "Generate new token (classic)"
# 3. 勾选 "repo" 权限
# 4. 生成并复制令牌

# 5. 使用令牌推送（输入用户名和令牌作为密码）
git push -u origin main
```

### 第四步：注册 Vercel 账号

1. **访问 Vercel**：https://vercel.com
2. **注册账号**（推荐使用 GitHub 账号登录）：
   - 点击 "Sign Up"
   - 选择 "Continue with GitHub"
   - 授权 Vercel 访问您的 GitHub
   - 完成注册

### 第五步：部署到 Vercel

#### 详细步骤：

1. **进入仪表板**：
   - 登录后会进入 Vercel Dashboard
   - 点击 "Add New..." → "Project"

2. **导入 GitHub 仓库**：
   - 在 "Import Git Repository" 下找到 `city-matching-test` 仓库
   - 点击 "Import" 按钮
   - **如果没有显示**：
     - 点击 "Adjust GitHub App Permissions"
     - 确保已授权该仓库
     - 刷新页面重试

3. **配置项目设置**：
   Vercel 会自动检测并填充以下配置（确认即可）：

   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: pnpm install && pnpm run build
   Output Directory: .next
   Install Command: pnpm install
   ```

4. **环境变量**（本应用不需要，跳过）

5. **开始部署**：
   - 点击底部的 "Deploy" 按钮
   - 等待构建（通常 2-3 分钟）

6. **查看部署进度**：
   - 会看到构建日志
   - 绿色 ✅ 表示成功
   - 红色 ❌ 表示失败（查看错误信息）

7. **部署完成**：
   - 看到 "Congratulations!" 页面
   - **记录下域名**，例如：`https://city-matching-test.vercel.app`

### 第六步：访问您的应用

1. **点击部署链接**
2. **或者直接访问**：`https://city-matching-test.vercel.app`
3. **测试功能**：
   - ✅ 首页正常显示
   - ✅ 点击"开始测试"
   - ✅ 完成45道题目
   - ✅ 查看匹配结果

### 🎉 完成！

您现在拥有：
- ✅ 一个在线的应用
- ✅ 免费的 HTTPS 域名
- ✅ 全球 CDN 加速
- ✅ 自动 SSL 证书

---

## 方案二：免费域名服务 + Vercel（自定义域名）

**如果您想要更个性化的域名，如 `city-test.xyz`**

### 免费域名服务推荐

#### 1. Freenom（完全免费顶级域名）

**支持域名**：`.tk`, `.ml`, `.ga`, `.cf`, `.gq`

**步骤**：

1. **注册 Freenom 账号**：
   - 访问：https://www.freenom.com
   - 点击 "Sign Up"
   - 填写邮箱和密码
   - 验证邮箱

2. **搜索并注册域名**：
   - 在首页搜索框输入想要的域名（如 `city-test`）
   - 查看可用的免费域名后缀（.tk, .ml 等）
   - 选择一个，点击 "Checkout"
   - 填写注册信息：
     - Registration Period: 12 Months @ Free
   - 点击 "Continue"
   - 确认订单

3. **配置 DNS**：
   - 登录 Freenom
   - 点击 "My Domains" → "Manage Domain"
   - 选择 "Management Tools" → "Nameservers"
   - 添加 Vercel 的名称服务器：
     ```
     ns1.vercel-dns.com
     ns2.vercel-dns.com
     ```
   - 保存更改

4. **在 Vercel 添加域名**：
   - 进入您的 Vercel 项目
   - 点击 "Settings" → "Domains"
   - 输入您的域名（如 `city-test.tk`）
   - 点击 "Add"
   - Vercel 会提供 DNS 记录

5. **配置 DNS 记录**：
   - 回到 Freenom 域名管理
   - 选择 "Management Tools" → "DNS"
   - 添加以下记录：
     ```
     Type: CNAME
     Name: @
     Value: cname.vercel-dns.com
     TTL: 3600
     ```
   - 保存更改

6. **等待 DNS 生效**：
   - 通常 10-30 分钟
   - 最多 24 小时

7. **验证**：
   - 访问 `https://city-test.tk`
   - 应该看到您的应用

#### 2. EU.org（免费二级域名）

**地址**：https://nic.eu.org

**步骤**：
1. 注册账号
2. 提交域名申请（需要审核）
3. 审核通过后配置 DNS（同上）

#### 3. DuckDNS（免费动态DNS）

**地址**：https://www.duckdns.org

**特点**：
- 适合动态 IP
- 子域名格式：`your-name.duckdns.org`

---

## 常见问题解决

### ❓ Git 推送失败

**问题**：
```
fatal: remote origin already exists
```

**解决**：
```bash
# 删除旧的远程仓库
git remote remove origin

# 重新添加
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

**问题**：
```
fatal: Authentication failed
```

**解决**：
```bash
# 使用个人访问令牌
# 1. 访问 https://github.com/settings/tokens
# 2. 生成新令牌（勾选 repo 权限）
# 3. 推送时输入用户名和令牌作为密码
```

### ❓ Vercel 部署失败

**问题**：构建超时

**解决**：
```bash
# 增加 Vercel 构建超时时间
# 在项目根目录创建 vercel.json（已有）
{
  "buildCommand": "pnpm install && pnpm run build",
  "maxDuration": 300
}
```

**问题**：找不到 pnpm

**解决**：
Vercel 会自动检测并使用，但可以明确指定：
```json
{
  "installCommand": "pnpm install"
}
```

### ❓ 域名访问不了

**问题**：域名显示 "404 Not Found"

**解决**：
1. 检查 DNS 配置是否正确
2. 等待 10-30 分钟后重试
3. 使用 `nslookup` 检查 DNS：
   ```bash
   nslookup city-test.tk
   ```
4. 在 Vercel 中检查域名状态

### ❓ HTTPS 证书问题

**问题**：浏览器显示"不安全"

**解决**：
1. Vercel 会自动配置 Let's Encrypt SSL
2. 等待 5-10 分钟
3. 刷新页面
4. 如果仍有问题，在 Vercel 中：
   - Settings → Domains → 点击域名 → "Renew Certificate"

---

## 🎯 推荐选择

**对于您的应用，我强烈推荐方案一（Vercel 自动域名）**

**原因**：
1. ✅ 完全免费
2. ✅ 无需额外注册
3. ✅ 即开即用
4. ✅ 自动 HTTPS
5. ✅ 全球 CDN
6. ✅ 无需维护

**如果您确实想要自定义域名，建议使用 Freenom 的 `.tk` 域名**

---

## 📝 部署检查清单

### 部署前：
- [ ] Git 已安装并配置
- [ ] GitHub 账号已注册
- [ ] 代码已提交到本地仓库

### 部署中：
- [ ] GitHub 仓库已创建
- [ ] 代码已推送到 GitHub
- [ ] Vercel 账号已注册
- [ ] 仓库已导入 Vercel
- [ ] 部署配置已确认

### 部署后：
- [ ] 部署成功（绿色 ✅）
- [ ] 域名可访问
- [ ] HTTPS 正常（小锁图标）
- [ ] 功能测试通过
- [ ] 移动端正常

---

## 🆘 需要帮助？

如果遇到问题：

1. **查看 Vercel 部署日志**：
   - 进入项目 → Deployments → 点击部署记录

2. **查看 Vercel 文档**：
   - https://vercel.com/docs

3. **联系支持**：
   - Vercel 社区：https://vercel.com/support

---

**祝您部署顺利！🎉**
