const vscode = require('vscode');
const setupClient = require('./setupClient');
const setupServer = require('./setupServer');

function activate(context) {
  let disposable = vscode.commands.registerCommand('folderizes.Folderizes', async function () {
    vscode.window.showInformationMessage('Folderizes v2 is setting up your project...');
    await setupClient();
    await setupServer();
    vscode.window.showInformationMessage('Folderizes setup completed!');
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
