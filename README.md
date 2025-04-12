# 标点符号替换器 (Punctuation Replacer)

这是一个为 Obsidian 设计的插件，能够自动将中文标点符号替换为英文标点符号。
(This is a plugin designed for Obsidian that automatically replaces Chinese punctuation with English punctuation.)

## 功能介绍 (Features)

本插件可以自动检测并替换以下中文标点符号为对应的英文标点符号：
(This plugin can automatically detect and replace the following Chinese punctuation marks with their corresponding English punctuation:)

| 中文标点 (Chinese) | 英文标点 (English) |
| ------------------ | ------------------ |
| ，                 | ,                  |
| 、                 | ,                  |
| 。                 | .                  |
| ！                 | !                  |
| ？                 | ?                  |
| ；                 | ;                  |
| ：                 | :                  |
| "                  | "                  |
| "                  | "                  |
| '                  | '                  |
| '                  | '                  |
| （                 | (                  |
| ）                 | )                  |
| 【                 | [                  |
| 】                 | ]                  |
| ・                 | ·                  |
| —                  | -                  |
| ～                 | ~                  |
| …                  | ...                |
| 　(全角空格)        | (半角空格)          |

## 安装方法 (Installation)

1. 打开 Obsidian 设置面板 (Open Obsidian settings panel)
2. 前往「第三方插件」并关闭「安全模式」(Go to "Community plugins" and turn off "Safe mode")
3. 点击「浏览」并搜索「标点符号替换器」(Click "Browse" and search for "Punctuation Replacer")
4. 安装插件并启用 (Install the plugin and enable it)

## 使用说明 (Usage)

本插件提供两种使用方式：(This plugin provides two ways to use:)

1. **自动替换模式 (Auto Replace Mode)**：启用后，当你在编辑器中输入文本时，中文标点会自动替换为英文标点 (When enabled, Chinese punctuation will be automatically replaced with English punctuation as you type in the editor)
2. **手动替换命令 (Manual Replace Command)**：使用命令面板执行「替换标点符号 (Replace Punctuation)」命令替换当前文档中的所有中文标点 (Use the command palette to execute the "Replace Punctuation" command to replace all Chinese punctuation in the current document)

## 热键配置 (Hotkey Configuration)

插件没有预设默认热键，你可以按照以下步骤设置自定义热键：
(The plugin does not have a preset default hotkey. You can set up a custom hotkey by following these steps:)

1. 打开 Obsidian 设置 (Open Obsidian settings)
2. 前往「快捷键」设置 (Go to "Hotkeys" settings)
3. 搜索「替换标点符号」或「Replace Punctuation」(Search for "Replace Punctuation")
4. 点击添加按钮，设置你喜欢的热键组合 (Click the add button to set your preferred hotkey combination)

**推荐热键 (Recommended hotkey)**：`Ctrl+Shift+R`（Windows/Linux）或 `Cmd+Shift+R`（macOS）

## 设置选项 (Settings)

在插件设置中，你可以：(In the plugin settings, you can:)

- **启用/禁用自动替换 (Enable/Disable Auto Replace)**：控制是否在输入时自动替换标点符号 (Control whether to automatically replace punctuation when typing)
- **热键设置说明 (Hotkey Settings Guide)**：查看热键配置指南 (View the hotkey configuration guide)

## 常见问题 (FAQ)

**问 (Q)**：为什么我的标点符号没有自动替换？
**答 (A)**：请确认在插件设置中已启用「自动替换」选项。
(Please confirm that the "Auto Replace" option is enabled in the plugin settings.)

**问 (Q)**：替换后光标位置会改变吗？
**答 (A)**：不会，插件会保持光标位置不变。
(No, the plugin will maintain the cursor position.)

## 开发者信息 (Developer Information)

- 开发者 (Developer)：ZanderAlastor
- 许可证 (License)：MIT
- GitHub 仓库 (Repository)：[https://github.com/UFOAlastor/PunctuationReplacer](https://github.com/UFOAlastor/PunctuationReplacer)

## 参与贡献 (Contribution)

欢迎提交问题报告或功能建议！如果你想为此项目做出贡献，请：
(Issue reports and feature suggestions are welcome! If you want to contribute to this project, please:)

1. Fork 此仓库 (Fork this repository)
2. 创建你的功能分支 (Create your feature branch) (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (Commit your changes) (`git commit -m '添加某某功能 (Add some feature)'`)
4. 推送到该分支 (Push to the branch) (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request (Open a Pull Request)

## 构建说明 (Build Instructions)

```bash
# 安装依赖 (Install dependencies)
npm install

# 开发模式 (Development mode)
npm run dev

# 构建生产版本 (Build production version)
npm run build
```
