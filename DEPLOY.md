# 部署指南

## 📦 部署前检查清单

### 必需文件（全部已准备完成）

- [x] `index.html` - 主页面
- [x] `style.css` - 样式文件
- [x] `web-app.js` - 应用逻辑
- [x] `wordsData-full.js` - 单词数据（3-6年级完整版）
- [x] `README.md` - 项目说明

### 文件大小检查

| 文件 | 大小 | 状态 |
|------|------|------|
| index.html | ~5KB | ✅ |
| style.css | ~10KB | ✅ |
| web-app.js | ~15KB | ✅ |
| wordsData-full.js | ~200KB | ✅ |
| **总计** | **~230KB** | ✅ |

> 注意：所有文件都很小，加载速度快，适合各种网络环境。

---

## 🚀 推荐部署方案

### 方案一：Vercel（最简单，推荐）

**优点**：免费、自动HTTPS、全球CDN、国内访问快

步骤：
1. 访问 https://vercel.com
2. 用GitHub账号登录
3. 点击 "Add New..." → "Project"
4. 选择 "Import Git Repository" 或直接用命令行：
   ```bash
   npm i -g vercel
   cd h:\EnglishCS
   vercel
   ```
5. 按提示完成部署
6. 获得 `xxx.vercel.app` 域名

### 方案二：GitHub Pages（免费）

**优点**：完全免费、与GitHub集成

步骤：
1. 在GitHub创建新仓库（如 `english-learning`）
2. 上传所有文件：
   ```bash
   cd h:\EnglishCS
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/english-learning.git
   git push -u origin main
   ```
3. 进入仓库 → Settings → Pages
4. Source 选择 "Deploy from a branch"
5. Branch 选择 "main" / "/ (root)"
6. 点击 Save
7. 等待几分钟后访问 `https://你的用户名.github.io/english-learning`

### 方案三：Netlify（免费）

**优点**：拖拽部署、自动HTTPS

步骤：
1. 访问 https://www.netlify.com
2. 注册/登录账号
3. 在部署页面拖拽整个 `EnglishCS` 文件夹
4. 自动获得 `xxx.netlify.app` 域名

### 方案四：国内云存储（推荐国内用户）

#### 阿里云OSS
1. 登录阿里云控制台
2. 创建OSS存储桶（选择"公共读"）
3. 上传所有文件
4. 开启静态网站托管
5. 绑定自定义域名（可选）

#### 腾讯云COS
1. 登录腾讯云控制台
2. 创建COS存储桶
3. 上传所有文件
4. 开启静态网站
5. 配置CDN加速（推荐）

---

## 🔧 部署后验证

部署完成后，请检查以下功能：

### 基础功能
- [ ] 页面正常加载，无404错误
- [ ] 年级切换正常（3-6年级）
- [ ] 上下册切换正常
- [ ] 单元选择正常

### 单词学习
- [ ] 单词显示正常（英文+音标+中文）
- [ ] "朗读单词"按钮正常工作
- [ ] "例句"按钮正常显示例句
- [ ] 例句中文翻译正确显示
- [ ] 上一个/下一个按钮正常

### 课文朗读
- [ ] 课文列表加载正常
- [ ] 课文内容显示正常
- [ ] 朗读全文功能正常

### 单词测试
- [ ] 测试题目正常显示
- [ ] 播放发音正常
- [ ] 选项点击正常
- [ ] 得分统计正常

---

## 🌐 自定义域名（可选）

### 购买域名
推荐：阿里云、腾讯云、GoDaddy、Namecheap

### 配置步骤
1. 在域名服务商添加DNS记录：
   - 类型：CNAME
   - 主机：www 或 @
   - 记录值：你的部署平台域名（如 `xxx.vercel.app`）
2. 在部署平台添加自定义域名
3. 等待DNS生效（通常几分钟到几小时）

---

## 📱 分享给别人

部署完成后，您可以直接分享链接：

```
https://你的域名
```

或者生成二维码方便手机扫描访问。

---

## ❓ 常见问题

### Q: 为什么语音功能不工作？
A: 请确保：
1. 使用Chrome或Edge浏览器
2. 允许浏览器使用音频权限
3. 设备有网络连接（语音API需要联网）

### Q: 手机访问页面显示不正常？
A: 项目已做响应式设计，如遇到问题请尝试：
1. 刷新页面
2. 清除浏览器缓存
3. 使用Chrome浏览器

### Q: 如何更新内容？
A: 修改 `wordsData-full.js` 文件，然后重新部署即可。

---

## 🎉 完成！

现在您的英语单词学习系统已经准备好部署了！

推荐使用 **Vercel** 或 **GitHub Pages**，简单快捷且免费。

如有任何问题，请查看 README.md 或联系技术支持。
