# GitHub Pages 配置指南

## 在GitHub上配置GitHub Pages

假设您已经在GitHub上创建了名为"sh-ancient"的仓库并推送了代码，现在请按照以下步骤配置GitHub Pages：

1. 登录GitHub并进入您的"sh-ancient"仓库
2. 点击顶部导航栏中的"Settings"（设置）选项卡
3. 在左侧菜单中找到并点击"Pages"选项
4. 在"Build and deployment"部分，找到"Source"（源）设置：
   - 选择"Deploy from a branch"（从分支部署）
   - 从"Branch"（分支）下拉菜单中选择"master"或"main"分支
   - 从文件夹下拉菜单中选择"/(root)"（根目录）
   - 也可以选择"/docs"如果您的文档在docs目录中
5. 点击"Save"（保存）按钮

## 等待部署完成

- GitHub Pages会自动开始构建和部署您的网站
- 部署完成后，您将在页面顶部看到一个绿色的成功消息和您的网站URL
- 网站URL通常格式为：`https://[您的GitHub用户名].github.io/sh-ancient/`

## 注意事项

1. 部署可能需要几分钟时间完成
2. 确保您的仓库中包含index.html文件作为入口页面
3. 如果使用了前端路由（如Vue Router），请确保路由配置正确支持GitHub Pages的路径结构
4. 如果您在vite.config.ts中设置了base路径，请确保它与您的仓库名称匹配

## 自定义域名（可选）

如果您想使用自定义域名，可以在GitHub Pages设置页面的"Custom domain"（自定义域名）部分添加您的域名，并按照GitHub的说明在您的DNS提供商处配置相应的DNS记录。