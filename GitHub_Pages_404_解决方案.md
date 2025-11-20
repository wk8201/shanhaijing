# GitHub Pages 404 错误解决方案

经过分析，您的网站 https://wk8201.github.io/shanhaijing/ 在选择 docs 目录部署后出现 404 错误的原因如下：

## 问题原因

1. **docs 目录不存在**：项目中没有创建 docs 目录，但 GitHub Pages 配置选择了 docs 目录作为部署源
2. **路径不匹配**：vite.config.ts 中配置的 base 路径是'/sh-ancient/'，但实际 GitHub 仓库名是'shanhaijing'
3. **部署配置不一致**：GitHub Actions 工作流配置的是从 dist 目录部署，而非 docs 目录

## 解决方案

请选择以下两种方案之一：

### 方案一：修改为从 docs 目录部署（推荐）

1. **创建 docs 目录并配置 Vite 输出到 docs**

   修改 vite.config.ts 文件：

   ```typescript
   import { defineConfig } from "vite";
   import vue from "@vitejs/plugin-vue";
   import { resolve } from "path";

   export default defineConfig({
     plugins: [vue()],
     // 修改为正确的GitHub仓库名称
     base: "/shanhaijing/",
     resolve: {
       alias: {
         "@": resolve(__dirname, "src"),
       },
     },
     // 配置输出目录为docs
     build: {
       outDir: "docs",
     },
   });
   ```

2. **修改 GitHub Actions 工作流**

   修改 .github/workflows/deploy.yml 文件中的上传路径：

   ```yaml
   # 上传构建产物
   - name: Upload artifact
     uses: actions/upload-pages-artifact@v2
     with:
       # 修改为docs目录
       path: "./docs"
   ```

3. **重新构建并推送**

   ```bash
   npm run build
   git add .
   git commit -m "Update build config for GitHub Pages"
   git push
   ```

4. **在 GitHub 上配置 Pages**
   - 进入仓库设置 → Pages
   - 确保 Source 选择为：Deploy from a branch
   - 选择分支（main 或 master）和目录 /docs
   - 点击 Save

### 方案二：继续使用 dist 目录部署

1. **修改 base 路径**

   修改 vite.config.ts 文件：

   ```typescript
   base: '/shanhaijing/',
   ```

2. **在 GitHub 上配置 Pages**
   - 进入仓库设置 → Pages
   - 确保 Source 选择为：GitHub Actions 或 Deploy from a branch
   - 如果选择 Deploy from a branch，确保选择分支和根目录 / (root)
   - 点击 Save

## 其他注意事项

1. **路径一致性**：确保所有配置中的路径保持一致
2. **等待部署完成**：GitHub Pages 部署可能需要几分钟时间生效
3. **清除缓存**：部署完成后，清除浏览器缓存再访问网站
4. **检查构建输出**：确保构建过程没有错误，且输出目录包含所有必要文件

## 验证方法

1. 构建项目：npm run build
2. 本地预览：npm run preview
3. 推送后检查 GitHub Actions 工作流是否成功执行
4. 访问 https://wk8201.github.io/shanhaijing/ 验证网站是否正常访问

如果按照以上步骤操作后仍有问题，请检查 GitHub Pages 配置是否正确，以及构建产物是否包含 index.html 文件。
