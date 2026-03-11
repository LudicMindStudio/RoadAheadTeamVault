import {
	Plugin,
	TFile,
	TFolder,
	Notice,
	Modal,
	Setting,
	App,
	Editor,
	MarkdownView,
} from "obsidian";
import {
	Extension,
	RangeSetBuilder,
	StateField,
	StateEffect,
	EditorState,
	Transaction,
} from "@codemirror/state";
import {
	EditorView,
	ViewPlugin,
	ViewUpdate,
	WidgetType,
	Decoration,
	DecorationSet,
} from "@codemirror/view";

// ==================== TYPES ====================

interface DialogueNode {
	id: string;
	path: string;
	rootCharacter: string;
	characters: string[];
	bundle: string;
	parent: string | null;
	children: string[];
	content: string;
}

interface DialoguePluginSettings {
	templatePath: string;
	dialogueFolderName: string;
}

const DEFAULT_SETTINGS: DialoguePluginSettings = {
	templatePath: "1.1 Admin/Resources/Templates/Dialogue Template.md",
	dialogueFolderName: "Dialogues",
};

// ==================== WIDGET ====================

class DialogueLinkWidget extends WidgetType {
	constructor(
		readonly linkText: string,
		readonly exists: boolean,
		readonly plugin: DialoguePlugin
	) {
		super();
	}

	toDOM(): HTMLElement {
		const container = document.createElement("span");
		container.className = "dialogue-link-widget";
		container.style.display = "inline-flex";
		container.style.alignItems = "center";
		container.style.gap = "4px";
		container.style.marginLeft = "4px";

		if (this.exists) {
			// Link exists - show navigate and delete buttons
			const navBtn = document.createElement("button");
			navBtn.textContent = "→";
			navBtn.className = "dialogue-btn dialogue-nav-btn";
			navBtn.title = "Go to dialogue";
			navBtn.onclick = (e) => {
				e.preventDefault();
				e.stopPropagation();
				this.plugin.openDialogue(this.linkText);
			};
			container.appendChild(navBtn);

			// Add delete button
			const deleteBtn = document.createElement("button");
			deleteBtn.textContent = "-";
			deleteBtn.className = "dialogue-btn dialogue-delete-btn";
			deleteBtn.title = "Delete dialogue";
			deleteBtn.onclick = (e) => {
				e.preventDefault();
				e.stopPropagation();
				this.plugin.deleteDialogue(this.linkText);
			};
			container.appendChild(deleteBtn);
		} else {
			// Link doesn't exist - show create button
			const createBtn = document.createElement("button");
			createBtn.textContent = "+";
			createBtn.className = "dialogue-btn dialogue-create-btn";
			createBtn.title = "Create dialogue";
			createBtn.onclick = (e) => {
				e.preventDefault();
				e.stopPropagation();
				this.plugin.createDialogueFromLink(this.linkText);
			};
			container.appendChild(createBtn);
		}

		return container;
	}

	eq(other: DialogueLinkWidget): boolean {
		return this.linkText === other.linkText && this.exists === other.exists;
	}
}

// ==================== CODEMIRROR EXTENSION ====================

function buildDecorations(state: EditorState, plugin: DialoguePlugin): DecorationSet {
	const builder = new RangeSetBuilder<Decoration>();
	const text = state.doc.toString();
	// Match |DIA|[[LinkName]] - note: | needs to be escaped in regex
	const regex = /\|DIA\|\[\[([^\]]+)\]\]/g;
	let match;

	while ((match = regex.exec(text)) !== null) {
		const linkText = match[1];
		// Position widget right after the closing ]]
		const from = match.index + match[0].length;
		const exists = plugin.fileExists(linkText);
		
		const widget = new DialogueLinkWidget(linkText, exists, plugin);
		builder.add(from, from, Decoration.widget({
			widget,
			side: 1,
		}));
	}

	return builder.finish();
}

function createDialogueExtension(plugin: DialoguePlugin): Extension {
	const dialogueField = StateField.define<DecorationSet>({
		create(state: EditorState): DecorationSet {
			// Build decorations on initial load
			return buildDecorations(state, plugin);
		},
		update(oldSet: DecorationSet, tr: Transaction): DecorationSet {
			// Rebuild decorations when document changes
			if (!tr.docChanged) {
				return oldSet.map(tr.changes);
			}
			return buildDecorations(tr.state, plugin);
		},
		provide(field) {
			return EditorView.decorations.from(field);
		},
	});

	return dialogueField;
}

// ==================== MODALS ====================

class StartDialogueModal extends Modal {
	characterName: string = "";
	dialogueName: string = "";
	onSubmit: (characterName: string, dialogueName: string) => void;

	constructor(
		app: App,
		onSubmit: (characterName: string, dialogueName: string) => void
	) {
		super(app);
		this.onSubmit = onSubmit;
	}

	onOpen() {
		const { contentEl } = this;
		contentEl.createEl("h2", { text: "Start New Dialogue Chain" });

		new Setting(contentEl)
			.setName("Character Name")
			.setDesc("The character this dialogue is for")
			.addText((text) =>
				text.onChange((value) => {
					this.characterName = value;
				})
			);

		new Setting(contentEl)
			.setName("Bundle Name")
			.setDesc("Becomes (BundleName)_0")
			.addText((text) =>
				text.onChange((value) => {
					this.dialogueName = value;
				})
			);

		new Setting(contentEl).addButton((btn) =>
			btn
				.setButtonText("Create")
				.setCta()
				.onClick(() => {
					if (!this.characterName || !this.dialogueName) {
						new Notice("Please fill in all fields");
						return;
					}
					this.onSubmit(this.characterName, this.dialogueName);
					this.close();
				})
		);
	}

	onClose() {
		const { contentEl } = this;
		contentEl.empty();
	}
}

class AddOptionModal extends Modal {
	optionName: string = "";
	optionText: string = "";
	defaultBundleName: string = "";
	onSubmit: (optionName: string, optionText: string) => void;

	constructor(
		app: App,
		defaultBundleName: string,
		onSubmit: (optionName: string, optionText: string) => void
	) {
		super(app);
		this.defaultBundleName = defaultBundleName;
		this.onSubmit = onSubmit;
	}
	
	onOpen() {
		const { contentEl } = this;
		contentEl.createEl("h2", { text: "Add Dialogue Option" });
		
		this.optionName = this.defaultBundleName;
		new Setting(contentEl)
			.setName("Bundle Name")
			.setDesc("")
			.addText((text) => {
				text.setValue(this.defaultBundleName);
				text.onChange((value) => {
					this.optionName = value;
				});
			});
		new Setting(contentEl)
			.setName("Display Name")
			.setDesc("Player see this text.")
			.addText((text) =>
				text.onChange((value) => {
					this.optionText = value;
				})
			);

		new Setting(contentEl).addButton((btn) =>
			btn
				.setButtonText("Add Option")
				.setCta()
				.onClick(() => {
					this.onSubmit(this.optionName, this.optionText);
					this.close();
				})
		);
	}

	onClose() {
		const { contentEl } = this;
		contentEl.empty();
	}
}

// ==================== MAIN PLUGIN ====================

export default class DialoguePlugin extends Plugin {
	settings: DialoguePluginSettings;

	async onload() {
		await this.loadSettings();

		// Add CSS styles
		this.addStyles();

		// Register CodeMirror extension
		this.registerEditorExtension(createDialogueExtension(this));

		// Add ribbon icon
		this.addRibbonIcon("message-square", "Start New Dialogue", () => {
			new StartDialogueModal(this.app, (characterName, dialogueName) => {
				this.startNewDialogueChain(characterName, dialogueName);
			}).open();
		});

		// Add commands
		this.addCommand({
			id: "start-new-dialogue",
			name: "Start New Dialogue Chain",
			callback: () => {
				new StartDialogueModal(this.app, (characterName, dialogueName) => {
					this.startNewDialogueChain(characterName, dialogueName);
				}).open();
			},
		});

		this.addCommand({
			id: "add-dialogue-option",
			name: "Add Dialogue Option",
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const activeFile = this.app.workspace.getActiveFile();
				if (!activeFile) {
					new Notice("No active file");
					return;
				}
				
				// Get current bundle name and calculate next option number
				const content = editor.getValue();
				const currentBundle = this.extractBundle(content) || activeFile.basename;
				const existingOptions = this.countExistingOptions(content);
				const nextOptionNumber = existingOptions + 1;
				const defaultBundleName = `${currentBundle}_${nextOptionNumber}`;
				
				new AddOptionModal(this.app, defaultBundleName, (optionName, optionText) => {
					this.addDialogueOption(editor, optionName, optionText);
				}).open();
			},
		});

		// Add settings tab
		// this.addSettingTab(new DialogueSettingTab(this.app, this));
	}

	onunload() {
		this.removeStyles();
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	// ==================== FILE OPERATIONS ====================

	fileExists(linkText: string): boolean {
		// Try to find the file
		const file = this.app.metadataCache.getFirstLinkpathDest(linkText, "");
		return file !== null;
	}

	async openDialogue(linkText: string) {
		const file = this.app.metadataCache.getFirstLinkpathDest(linkText, "");
		if (file) {
			await this.app.workspace.openLinkText(linkText, "", false);
		} else {
			new Notice(`Dialogue "${linkText}" not found`);
		}
	}

	async deleteDialogue(linkText: string) {
		// Show confirmation modal
		const confirmed = confirm(`Are you sure you want to delete "${linkText}"?\n\nThis will delete the file and remove the link from the parent note.`);
		if (!confirmed) return;

		const file = this.app.metadataCache.getFirstLinkpathDest(linkText, "");
		if (file && file instanceof TFile) {
			// Get the active file to remove the link from it
			const activeFile = this.app.workspace.getActiveFile();
			
			try {
				// Delete the file
				await this.app.vault.delete(file);
				
				// Remove the link from the parent file
				if (activeFile) {
					await this.removeLinkFromParent(activeFile, linkText);
				}
				
				new Notice(`Deleted dialogue: ${linkText}`);
			} catch (e) {
				new Notice(`Error deleting dialogue: ${e}`);
			}
		} else {
			new Notice(`Dialogue "${linkText}" not found`);
		}
	}

	async removeLinkFromParent(parentFile: TFile, linkText: string) {
		const content = await this.app.vault.read(parentFile);
		// Remove the line containing the |DIA|[[linkText]]
		const lines = content.split('\n');
		const filteredLines = lines.filter(line => !line.includes(`|DIA|[[${linkText}]]`));
		const updatedContent = filteredLines.join('\n');
		
		if (content !== updatedContent) {
			await this.app.vault.modify(parentFile, updatedContent);
		}
	}

	// ==================== DIALOGUE CREATION ====================

	async startNewDialogueChain(characterName: string, dialogueName: string) {
		const characterFileName = `${characterName} - Profile`;
		
		// Search for character file recursively in the vault
		const characterFile = this.findFileRecursively(`${characterFileName}.md`);
		
		if (!characterFile) {
			new Notice(`Character profile "${characterFileName}.md" not found. Make sure the file exists.`);
			return;
		}

		// Get the folder where the character profile is located
		const characterFolder = characterFile.parent?.path || "";
		
		// Create dialogue folder: CharacterName/Dialogues/
		const dialoguesFolder = characterFolder ? `${characterFolder}/Dialogues` : "Dialogues";
		const dialogueChainFolder = `${dialoguesFolder}/${dialogueName}`;
		
		try {
			await this.app.vault.createFolder(dialogueChainFolder);
		} catch (e) {
			// Folder might already exist
		}

		// Create first dialogue file
		const fileName = `${dialogueName}_0`;
		const filePath = `${dialogueChainFolder}/${fileName}.md`;
		
		const template = await this.getTemplate();
		const content = this.fillTemplate(template, {
			date: new Date().toISOString().split("T")[0],
			root: `[[${characterFileName}]]`,
			characters: characterName,
			bundle: `${dialogueName}_0`,
		});

		try {
			await this.app.vault.create(filePath, content);
			
			// Add link to character profile
			if (characterFile instanceof TFile) {
				await this.addLinkToCharacterProfile(characterFile, fileName);
			}

			// Open the new file
			await this.app.workspace.openLinkText(filePath, "", false);
			new Notice(`Created dialogue: ${fileName}`);
		} catch (e) {
			new Notice(`Error creating dialogue: ${e}`);
		}
	}

	async createDialogueFromLink(linkText: string) {
		const activeFile = this.app.workspace.getActiveFile();
		if (!activeFile) {
			new Notice("No active file");
			return;
		}

		// Parse the link to get folder path
		const pathParts = activeFile.path.split("/");
		const currentFolder = pathParts.slice(0, -1).join("/");
		
		// Determine the target folder
		// If we're in a Dialogue folder already, use that
		// Otherwise create in Dialogues/ subfolder
		let targetFolder: string;
		if (currentFolder.includes("/Dialogues/")) {
			// We're already in a dialogue chain folder, create sibling file
			targetFolder = currentFolder;
		} else {
			// Create in Dialogues subfolder
			targetFolder = `${currentFolder}/Dialogues`;
			try {
				await this.app.vault.createFolder(targetFolder);
			} catch (e) {
				// Folder might already exist
			}
		}
		
		const filePath = `${targetFolder}/${linkText}.md`;

		// Get parent info
		const parentContent = await this.app.vault.read(activeFile);
		const characters = this.extractCharacters(parentContent);
		const root = this.extractRoot(parentContent);

		const template = await this.getTemplate();
		const content = this.fillTemplate(template, {
			date: new Date().toISOString().split("T")[0],
			root: root || `[[${activeFile.basename}]]`,
			prev: `[[${activeFile.basename}]]`,
			characters: characters.join(", "),
			bundle: linkText,
		});

		try {
			await this.app.vault.create(filePath, content);
			
			// Update the parent file to use |DIA|[[link]] format
			await this.updateParentOptions(activeFile, linkText);
			
			await this.app.workspace.openLinkText(filePath, "", false);
			new Notice(`Created dialogue: ${linkText}`);
		} catch (e) {
			new Notice(`Error creating dialogue: ${e}`);
		}
	}

	async addDialogueOption(editor: Editor, optionName: string, optionText: string) {
		const activeFile = this.app.workspace.getActiveFile();
		if (!activeFile) {
			new Notice("No active file");
			return;
		}

		// Get current file name for generating the link
		const baseName = activeFile.basename;
		const existingOptions = this.countExistingOptions(editor.getValue());
		const optionNumber = existingOptions + 1;
		const linkName = `${baseName}_${optionNumber}`;

		// Find the Options section
		const content = editor.getValue();
		const optionsMatch = content.match(/\*\*Options\*\*[\s\S]*?(?=\n\*\*|$)/);
		
		if (optionsMatch) {
			// Insert before the closing of Options section or at the end
			const insertPos = optionsMatch.index! + optionsMatch[0].length;
			const newOption = `\n- |DIA|[[${linkName}]] : ${optionText}`;
			editor.replaceRange(newOption, editor.offsetToPos(insertPos));
		} else {
			// Add Options section
			const newSection = `\n\n**Options**\n- |DIA|[[${linkName}]] : ${optionText}`;
			editor.replaceRange(newSection, { line: editor.lastLine(), ch: editor.getLine(editor.lastLine()).length });
		}

		new Notice(`Added option: ${optionName}`);
	}

	// ==================== FILE SEARCH ====================

	findFileRecursively(filename: string): TFile | null {
		const files = this.app.vault.getMarkdownFiles();
		for (const file of files) {
			if (file.name === filename || file.path.endsWith(`/${filename}`)) {
				return file;
			}
		}
		return null;
	}

	// ==================== HELPERS ====================

	async getTemplate(): Promise<string> {
		try {
			const templateFile = this.app.vault.getAbstractFileByPath(this.settings.templatePath);
			if (templateFile instanceof TFile) {
				return await this.app.vault.read(templateFile);
			}
		} catch (e) {
			// Template not found, use default
		}
		
		// Default template
		return `---
Date_Created: {{DATE}}
---


*Dialogue Root* : {{ROOT}}
*Previous Node* : {{PREV}}
# Characters: {{CHARACTERS}}
## Bundle : {{BUNDLE}}

CharacterName: Example words...

**Options**
- |DIA|[[Option1Name]]


`;
	}

	fillTemplate(template: string, data: { [key: string]: string }): string {
		let result = template;
		for (const [key, value] of Object.entries(data)) {
			result = result.replace(new RegExp(`{{${key.toUpperCase()}}}`, "g"), value);
		}
		return result;
	}

	extractCharacters(content: string): string[] {
		const match = content.match(/# Characters:\s*(.+)/);
		if (match) {
			return match[1].split(",").map(c => c.trim());
		}
		return [];
	}

	extractRoot(content: string): string | null {
		const match = content.match(/\*Dialogue Root\*\s*:\s*(.+)/);
		return match ? match[1].trim() : null;
	}

	extractBundle(content: string): string | null {
		const match = content.match(/## Bundle\s*:\s*(.+)/);
		return match ? match[1].trim() : null;
	}

	countExistingOptions(content: string): number {
		const optionsMatch = content.match(/\*\*Options\*\*/);
		if (!optionsMatch) return 0;
		
		const optionsSection = content.substring(optionsMatch.index!);
		const optionLines = optionsSection.match(/^- /gm);
		return optionLines ? optionLines.length : 0;
	}

	async addLinkToCharacterProfile(characterFile: TFile, dialogueName: string) {
		const content = await this.app.vault.read(characterFile);
		// Match "# Character Dialogue" or "# Character Dialogues" (with optional 's')
		const headerMatch = content.match(/# Character Dialogue[s]?/i);
		
		if (headerMatch) {
			// Find end of section or insert after header
			const insertPos = headerMatch.index! + headerMatch[0].length;
			const newLink = `\n- |DIA|[[${dialogueName}]]`;
			
			// Check if link already exists
			if (!content.includes(`|DIA|[[${dialogueName}]]`)) {
				await this.app.vault.modify(characterFile, 
					content.slice(0, insertPos) + newLink + content.slice(insertPos));
			}
		} else {
			// Header not found, add it at the end of the file
			const newSection = `\n\n--- \n# Character Dialogue\n- |DIA|[[${dialogueName}]]`;
			await this.app.vault.modify(characterFile, content + newSection);
		}
	}

	async updateParentOptions(parentFile: TFile, linkText: string) {
		const content = await this.app.vault.read(parentFile);
		// Replace plain link with |DIA|[[link]] if it exists
		const updatedContent = content.replace(
			new RegExp(`- \\|DIA\\|\\[\\[${linkText}\\]\\]`, "g"),
			`- |DIA|[[${linkText}]]`
		);
		
		if (content !== updatedContent) {
			await this.app.vault.modify(parentFile, updatedContent);
		}
	}

	// ==================== STYLES ====================

	addStyles() {
		const style = document.createElement("style");
		style.id = "dialogue-plugin-styles";
		style.textContent = `
			.dialogue-link-widget {
				display: inline-flex !important;
				align-items: center;
				gap: 4px;
				margin-left: 4px;
				vertical-align: middle;
			}
			
			.dialogue-btn {
				background: var(--interactive-accent);
				color: var(--text-on-accent);
				border: none;
				border-radius: 4px;
				padding: 2px 6px;
				font-size: 12px;
				cursor: pointer;
				line-height: 1;
				min-width: 20px;
				height: 20px;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: opacity 0.2s;
			}
			
			.dialogue-btn:hover {
				opacity: 0.8;
			}
			
			.dialogue-nav-btn {
				background: var(--interactive-success);
			}
			
			.dialogue-create-btn {
				background: var(--interactive-accent);
			}
			
			.dialogue-delete-btn {
				background: var(--text-error);
			}
		`;
		document.head.appendChild(style);
	}

	removeStyles() {
		const style = document.getElementById("dialogue-plugin-styles");
		if (style) {
			style.remove();
		}
	}
}
