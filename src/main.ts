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
            name: 'Replace Punctuation',
            callback: () => {
                const view = this.app.workspace.getActiveViewOfType(MarkdownView);
                if (view) {
                    this.replacePunctuation(view.editor);
                }
            },
            hotkeys: [{ modifiers: ['Ctrl', 'Shift'], key: 'R' }],
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

        containerEl.createEl('h2', { text: 'Punctuation Replacer Settings' });

        new Setting(containerEl)
            .setName('Enable Auto Replace')
            .setDesc('Automatically replace Chinese punctuation with English punctuation.')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.autoReplace)
                .onChange(async (value: boolean) => {
                    this.plugin.settings.autoReplace = value;
                    await this.plugin.saveSettings();
                }));
    }
}
