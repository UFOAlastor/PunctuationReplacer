import { App, Editor, MarkdownView, Plugin, PluginSettingTab, Setting } from 'obsidian';

interface PunctuationReplacerSettings {
    autoReplace: boolean;
}

const DEFAULT_SETTINGS: PunctuationReplacerSettings = {
    autoReplace: true
};

export default class PunctuationReplacer extends Plugin {
    settings: PunctuationReplacerSettings;

    async onload(): Promise<void> {
        await this.loadSettings();

        this.addCommand({
            id: 'replace-punctuation',
            name: '替换标点符号 (Replace Punctuation)',
            callback: () => {
                const view = this.app.workspace.getActiveViewOfType(MarkdownView);
                if (view) {
                    this.replacePunctuation(view.editor);
                }
            },
        });

        this.registerEvent(
            this.app.workspace.on('editor-change', () => {
                if (this.settings.autoReplace) {
                    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
                    if (view) {
                        this.replacePunctuation(view.editor);
                    }
                }
            })
        );

        this.addSettingTab(new PunctuationReplacerSettingTab(this.app, this));
    }

    async loadSettings(): Promise<void> {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings(): Promise<void> {
        await this.saveData(this.settings);
    }

    replacePunctuation(editor: Editor): void {
        const cursor = editor.getCursor();
        const content = editor.getValue();
        const newContent = content
            .replace(/，/g, ', ')
            .replace(/。/g, '. ')
            .replace(/！/g, '! ')
            .replace(/？/g, '? ')
            .replace(/；/g, '; ')
            .replace(/：/g, ': ')
            .replace(/"/g, '"')
            .replace(/"/g, '"')
            .replace(/'/g, "'")
            .replace(/'/g, "'");

        if (content !== newContent) {
            editor.setValue(newContent);
            editor.setCursor(cursor);
        }
    }
}

class PunctuationReplacerSettingTab extends PluginSettingTab {
    plugin: PunctuationReplacer;

    constructor(app: App, plugin: PunctuationReplacer) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;
        containerEl.empty();

        containerEl.createEl('h2', { text: '标点符号替换器设置 (Punctuation Replacer Settings)' });

        new Setting(containerEl)
            .setName('启用自动替换 (Enable Auto Replace)')
            .setDesc('自动将中文标点符号替换为英文标点符号 (Automatically replace Chinese punctuation with English punctuation)')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.autoReplace)
                .onChange(async (value: boolean) => {
                    this.plugin.settings.autoReplace = value;
                    await this.plugin.saveSettings();
                }));

        // 热键设置说明 (Hotkey Settings Description)
        containerEl.createEl('h3', { text: '热键设置 (Hotkey Settings)' });

        containerEl.createEl('p', { text: '您可以在Obsidian快捷键设置中为"替换标点符号 (Replace Punctuation)"命令自定义热键。 (You can customize hotkeys for the "Replace Punctuation" command in Obsidian\'s hotkey settings.)' });

        containerEl.createEl('p', { text: '推荐热键: Ctrl+Shift+R 或 Cmd+Shift+R (Recommended hotkey: Ctrl+Shift+R or Cmd+Shift+R)' });

        containerEl.createEl('p', { text: '设置路径: 设置 → 快捷键 → 搜索"替换标点符号" (Settings path: Settings → Hotkeys → Search for "Replace Punctuation")' });
    }
}