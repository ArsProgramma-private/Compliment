// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { messages } from './messages';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext): void {
	reloadConfig(context);
	vscode.workspace.onDidChangeConfiguration(config => reloadConfig(context));	
	context.subscriptions.push(vscode.workspace.onWillSaveTextDocument(_=>showMessage((context.workspaceState.get('hideAfterMs') as any).duration)));
}

const reloadConfig = (context: vscode.ExtensionContext): void => {
	const currentConfig = vscode.workspace.getConfiguration('compliment');
	context.workspaceState.update('hideAfterMs', {duration: currentConfig.get('hideAfterMs', 3000)});
};

function showMessage(dur: number): void {
	const message: string = messages[Math.floor((Math.random()*messages.length))];
	vscode.window.setStatusBarMessage(message, Math.abs(dur)  || 3000);
}

// this method is called when your extension is deactivated
export function deactivate(): void { }


