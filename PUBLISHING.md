# 发布指南

## 发布新版本

按照以下步骤发布此插件的新版本：

1. 在 `manifest.json` 中更新版本号
2. 在 `package.json` 中更新相同的版本号
3. 提交更改：`git commit -am "准备发布 x.x.x"`
4. 创建新标签：`git tag x.x.x`
5. 推送更改：`git push && git push --tags`
6. GitHub Actions 将自动构建并创建一个新的 GitHub Release

## 提交到 Obsidian 插件商店

首次提交到 Obsidian 插件商店需要以下步骤：

1. 确保你已完成以上发布新版本的步骤
2. Fork [obsidian-releases](https://github.com/obsidianmd/obsidian-releases) 仓库
3. 在你的 Fork 中，编辑 `community-plugins.json`，添加你的插件信息：
   ```json
   {
     "id": "punctuation-replacer",
     "name": "标点符号替换器 (Punctuation Replacer)",
     "author": "ZanderAlastor", 
     "description": "自动将中文标点符号替换为英文标点符号 (Automatically replace Chinese punctuation with English punctuation)",
     "repo": "UFOAlastor/PunctuationReplacer",
     "branch": "main"
   }
   ```
4. 提交一个 Pull Request 到 obsidian-releases 仓库

## 后续版本更新

对于后续的版本更新，只需完成上述"发布新版本"的步骤即可。Obsidian 会自动从你的 GitHub Release 获取最新版本。 