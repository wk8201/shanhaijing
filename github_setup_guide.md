# GitHub Pages 部署指南

## 在GitHub上创建仓库的步骤

1. 登录您的GitHub账号
2. 点击右上角的"+"号，选择"New repository"
3. 在Repository name中输入"sh-ancient"
4. 可以添加描述信息（可选）
5. 选择仓库可见性（Public或Private）
6. 点击"Create repository"完成创建

## 下一步

仓库创建完成后，我们将执行以下命令来设置远程仓库并推送代码：

```bash
# 设置远程仓库
git remote add origin https://github.com/[您的GitHub用户名]/sh-ancient.git

# 推送代码到远程仓库
git push -u origin master
```