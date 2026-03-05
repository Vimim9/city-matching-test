# 性格城市匹配测试 - 部署指南

## 快速部署到 Vercel（推荐）

### 方法一：通过 Vercel 网页部署（最简单）

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 注册或登录账号（支持 GitHub、GitLab、Google 等）

2. **导入项目**
   - 点击 "New Project"
   - 将代码推送到 GitHub/GitLab
   - 选择仓库并导入

3. **配置项目**
   - Framework Preset: Next.js
   - Build Command: `pnpm install && pnpm run build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`

4. **部署**
   - 点击 "Deploy"
   - 等待部署完成（约 2-3 分钟）
   - 获得 `https://your-project.vercel.app` 域名

### 方法二：使用 Vercel CLI

```bash
# 1. 安装 Vercel CLI（已完成）
pnpm add -g vercel

# 2. 登录 Vercel
vercel login

# 3. 部署到生产环境
vercel --prod

# 4. 记录下显示的域名
```

---

## 部署到 Netlify

### 通过 Netlify 网页部署

1. **访问 Netlify**
   - 打开 https://netlify.com
   - 注册或登录账号

2. **导入项目**
   - 点击 "Add new site" → "Import an existing project"
   - 连接 GitHub/GitLab
   - 选择仓库

3. **配置构建**
   ```
   Build command: pnpm install && pnpm run build
   Publish directory: .next
   ```

4. **部署**
   - 点击 "Deploy site"
   - 获得 `https://your-site.netlify.app` 域名

---

## 自定义域名（可选）

### 在 Vercel 中添加自定义域名

1. 进入项目设置 → Domains
2. 点击 "Add Domain"
3. 输入您的域名（如 `city-test.yourdomain.com`）
4. 按照提示配置 DNS 记录

### 在 Netlify 中添加自定义域名

1. 进入 Domain settings
2. 点击 "Add custom domain"
3. 配置 DNS 记录

---

## 部署到自己的服务器

### 前提条件
- 一台 Linux 服务器（如阿里云、腾讯云）
- 已安装 Node.js 和 pnpm

### 部署步骤

```bash
# 1. 克隆代码到服务器
git clone <your-repo-url>
cd projects

# 2. 安装依赖
pnpm install

# 3. 构建项目
pnpm run build

# 4. 安装 PM2（进程管理器）
npm install -g pm2

# 5. 启动服务
pm2 start npm --name "city-test" -- start

# 6. 配置开机自启
pm2 startup
pm2 save

# 7. 配置 Nginx 反向代理
# 编辑 /etc/nginx/sites-available/city-test
```

### Nginx 配置示例

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# 启用配置
sudo ln -s /etc/nginx/sites-available/city-test /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# 8. 配置 HTTPS（使用 Let's Encrypt）
sudo certbot --nginx -d your-domain.com
```

---

## 当前项目状态

✅ 项目已构建成功
✅ Vercel CLI 已安装
✅ 部署配置文件已准备

---

## 推荐方案

**最简单快速**：使用 Vercel 网页部署
- 无需配置服务器
- 自动 HTTPS
- 全球 CDN
- 免费额度充足

**完全控制**：部署到自己的服务器
- 需要服务器费用
- 完全控制
- 需要自己配置 HTTPS

---

## 部署后检查清单

- [ ] 访问域名，首页正常显示
- [ ] 测试流程完整（首页 → 测试 → 结果）
- [ ] 检查 HTTPS 是否正常（小锁图标）
- [ ] 测试移动端适配
- [ ] 验证所有 50 个城市数据正常

---

## 常见问题

### Q: Vercel 免费额度限制？
A: 免费版每月 100GB 带宽，100 次构建，对本项目完全够用。

### Q: 如何更新网站？
A: 推送代码到 GitHub，Vercel 会自动重新部署。

### Q: 域名访问慢？
A: Vercel/Netlify 提供全球 CDN，访问速度会自动优化。

### Q: 数据会丢失吗？
A: 测试结果保存在用户浏览器 localStorage，不会丢失。

---

## 联系支持

如有部署问题，请查看：
- Vercel 文档：https://vercel.com/docs
- Netlify 文档：https://docs.netlify.com
