# ⚡ 快速参考 - 部署关键命令

## Git 命令速查

```bash
# 初始化仓库
git init
git add .
git commit -m "feat: 初始提交"
git branch -M main

# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 推送到 GitHub
git push -u origin main

# 强制推送（谨慎使用）
git push -f origin main
```

## Vercel CLI 命令

```bash
# 安装 Vercel CLI
pnpm add -g vercel

# 登录
vercel login

# 部署到预览环境
vercel

# 部署到生产环境
vercel --prod

# 查看部署列表
vercel ls

# 删除部署
vercel rm <deployment-id>
```

## 域名 DNS 配置

### Vercel 名称服务器
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

### DNS 记录
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
TTL: 3600
```

## GitHub 个人访问令牌

1. 访问：https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 勾选权限：
   - ✅ repo（完整仓库访问）
   - ✅ workflow（可选）
4. 点击 "Generate token"
5. **立即复制**（只显示一次）

## Vercel 环境变量（如需要）

```bash
# 在 Vercel 项目中设置
Settings → Environment Variables

# 示例
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgres://...
```

## 常用诊断命令

```bash
# 检查 Git 状态
git status

# 查看 Git 远程仓库
git remote -v

# 检查本地端口
lsof -i :5000  # macOS/Linux
netstat -ano | findstr :5000  # Windows

# DNS 查询
nslookup your-domain.com
dig your-domain.com

# 检查 HTTP 状态
curl -I https://your-domain.com
```

## 本地开发命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start

# 类型检查
npx tsc --noEmit
```

## Vercel 项目配置（vercel.json）

```json
{
  "buildCommand": "pnpm install && pnpm run build",
  "outputDirectory": ".next",
  "devCommand": "pnpm run dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "regions": ["hkg1"]
}
```

---

## 📞 快速帮助

| 问题 | 解决方案 |
|------|----------|
| Git 推送失败 | 使用个人访问令牌 |
| Vercel 构建失败 | 检查构建日志 |
| 域名访问不了 | 检查 DNS 配置 |
| HTTPS 不安全 | 等待证书生成（5-10分钟） |
| 端口被占用 | 杀死进程或更换端口 |

---

**保存此文件以便快速查阅！** 📌
