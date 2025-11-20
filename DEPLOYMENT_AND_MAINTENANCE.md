# Vue项目部署与维护文档

## 部署过程记录

### 项目准备与构建

1. **项目构建测试**
   - 运行 `npm run build` 确保项目能正确构建
   - 构建成功生成 `dist` 目录，包含所有静态资源

2. **Git仓库初始化**
   - 执行 `git init` 初始化Git仓库
   - 配置Git用户信息：
     ```bash
     git config user.name "sh-ancient"
     git config user.email "sh-ancient@example.com"
     ```
   - 添加所有文件到暂存区：`git add .`
   - 提交初始代码：`git commit -m "Initial commit: Vue 3 + TypeScript + Tailwind CSS project"`

### 项目配置调整

1. **路由配置修改**
   - 更新 `src/router/index.ts`，使用相对路径支持GitHub Pages：
     ```typescript
     history: createWebHistory(process.env.BASE_URL || "/")
     ```

2. **Vite配置修改**
   - 更新 `vite.config.ts`，添加base配置：
     ```typescript
     base: '/sh-ancient/'
     ```

### GitHub Pages部署设置

1. **GitHub仓库创建**
   - 在GitHub上创建名为"sh-ancient"的仓库
   - 配置远程仓库并推送代码：
     ```bash
     git remote add origin https://github.com/[GitHub用户名]/sh-ancient.git
     git push -u origin master
     ```

2. **GitHub Pages配置**
   - 进入仓库Settings > Pages
   - 选择源为分支（master/main）的根目录
   - 保存配置，等待自动部署完成

3. **CI/CD自动化部署**
   - 创建GitHub Actions工作流文件 `.github/workflows/deploy.yml`
   - 配置自动构建和部署流程
   - 当推送到main/master分支时自动触发部署

## 后续维护注意事项

### 代码更新流程

1. **本地开发与测试**
   - 在本地进行开发和测试
   - 确保所有功能正常工作

2. **构建与验证**
   - 运行 `npm run build` 构建项目
   - 可选：使用本地服务器测试构建后的文件

3. **代码提交与推送**
   - 提交更改：
     ```bash
     git add .
     git commit -m "描述你的更改"
     git push origin master
     ```
   - 如果配置了GitHub Actions，部署将自动触发

### 常见问题排查

1. **部署失败**
   - 检查GitHub Actions运行日志
   - 确认Node.js版本兼容性
   - 验证依赖安装是否成功

2. **网站加载问题**
   - 检查资源路径是否正确
   - 验证base配置是否与仓库名称匹配
   - 查看浏览器控制台错误信息

3. **路由问题**
   - 对于刷新页面404的问题，考虑：
     - 使用Hash模式路由（createWebHashHistory）
     - 或创建自定义404.html文件进行重定向

### 性能优化建议

1. **资源优化**
   - 定期更新依赖包
   - 考虑使用CDN加载第三方库
   - 启用图片压缩和懒加载

2. **构建优化**
   - 在vite.config.ts中配置合理的构建优化选项
   - 考虑代码分割和按需加载

### 安全注意事项

1. **依赖安全**
   - 定期运行 `npm audit` 检查依赖安全问题
   - 及时更新有安全漏洞的依赖包

2. **敏感信息保护**
   - 确保不在代码中存储敏感信息
   - 使用环境变量管理配置信息

## 资源链接

- [Vue Router文档](https://router.vuejs.org/)
- [Vite文档](https://vitejs.dev/)
- [GitHub Pages文档](https://docs.github.com/cn/pages)
- [GitHub Actions文档](https://docs.github.com/cn/actions)

## 部署清单

- [x] 项目构建测试
- [x] Git仓库初始化
- [x] 项目配置调整（路由、Vite）
- [x] GitHub仓库创建与代码推送
- [x] GitHub Pages配置
- [x] CI/CD自动化部署配置
- [x] 部署验证
- [x] 维护文档编写