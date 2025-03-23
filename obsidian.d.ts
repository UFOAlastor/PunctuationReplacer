declare module "obsidian" {
    export class App {
        workspace: Workspace;
    }

    export class Workspace {
        getActiveViewOfType<T>(type: new(...args: any[]) => T): T | null;
        on(name: string, callback: (...args: any[]) => any, ctx?: any): EventRef;
    }

    export interface Editor {
        getCursor(): EditorPosition;
        getValue(): string;
        setValue(content: string): void;
        setCursor(pos: EditorPosition): void;
    }

    export interface EditorPosition {
        line: number;
        ch: number;
    }

    export class MarkdownView {
        editor: Editor;
        file: TFile;
    }

    export abstract class Plugin {
        app: App;
        loadData(): Promise<any>;
        saveData(data: any): Promise<void>;
        registerEvent(ref: EventRef): void;
        addCommand(command: Command): void;
        addSettingTab(tab: PluginSettingTab): void;
    }

    export abstract class PluginSettingTab {
        app: App;
        containerEl: HTMLElement & {
            empty(): void;
            createEl(tag: string, attrs?: any): HTMLElement;
        };
        constructor(app: App, plugin: Plugin);
        display(): void;
    }

    export class Setting {
        constructor(containerEl: HTMLElement);
        setName(name: string): this;
        setDesc(desc: string): this;
        addToggle(cb: (toggle: Toggle) => any): this;
    }

    export interface Command {
        id: string;
        name: string;
        callback?: () => any;
        hotkeys?: Hotkey[];
    }

    export interface Hotkey {
        modifiers: string[];
        key: string;
    }

    export interface EventRef {}

    export interface Toggle {
        setValue(value: boolean): this;
        onChange(cb: (value: boolean) => any): this;
    }

    export interface TFile {
        path: string;
    }
}
