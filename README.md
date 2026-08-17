# 小謇的足迹

这是一个用 Astro 搭建的个人文章网站，收录公众号文章、校方公众号文章和本地图片资源。

## 本地预览

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物会输出到 `dist/`。

## 发布到 Vercel

推荐发布方式：

1. 把本目录作为一个独立 Git 仓库推送到 GitHub。
2. 登录 Vercel，选择 Import Git Repository。
3. 选择这个仓库。
4. Framework Preset 选择 Astro。
5. Build Command 使用 `npm run build`。
6. Output Directory 使用 `dist`。
7. 点击 Deploy。

发布成功后，Vercel 会给出一个 `*.vercel.app` 网址。以后只要把新修改推送到 GitHub，Vercel 会自动重新发布。

## 发布到 GitHub Pages

本项目也支持发布到 GitHub Pages。GitHub Actions 会在推送到 `main` 分支后自动构建，并发布到：

```text
https://liangbandexiaojian.github.io/xiaojian-footprints/
```

GitHub Pages 构建时会设置 `DEPLOY_TARGET=github-pages`，从而自动使用 `/xiaojian-footprints` 路径前缀。
