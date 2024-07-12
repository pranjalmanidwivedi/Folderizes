const vscode = require('vscode');
const fs = require('fs'); // Added for file creation

async function createFolders(context) {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders) {
    return;
  }

  const rootPath = workspaceFolders[0].uri.fsPath; // Assuming single root folder

  const folderNames = [
    'config', 'controllers', 'models', 'public', 'routes', 'utils', 'views'
  ];

  for (const folderName of folderNames) {
    await createFolder(rootPath, folderName);
  }

  const publicSubfolders = ['images', 'javascripts', 'stylesheets'];
  const publicPath = rootPath + '/public';
  await createSubfolders(publicPath, publicSubfolders);

  // Create app.js with basic Express.js setup
  const appJsContent = `
const express = require('express');

const app = express();

// ... Add your custom routes and middleware here

app.listen(3000, () => console.log('Server listening on port 3000'));
`;

  await createFile(rootPath, 'app.js', appJsContent);
}

async function createFolder(path, folderName) {
  const folderPath = path + '/' + folderName;
  try {
    await fs.promises.mkdir(folderPath);
    console.log(`Folder created: ${folderPath}`);
  } catch (error) {
    console.error(`Failed to create folder: ${folderPath}`, error);
  }
}

async function createSubfolders(path, subfolders) {
  for (const subfolder of subfolders) {
    await createFolder(path, subfolder);
  }
}

async function createFile(path, fileName, content) {
  const filePath = path + '/' + fileName;
  try {
    await fs.promises.writeFile(filePath, content);
    console.log(`File created: ${filePath}`);
  } catch (error) {
    console.error(`Failed to create file: ${filePath}`, error);
  }
}

function activate(context) {
  // Trigger folder and file creation on activation
  createFolders(context);
  context.subscriptions.push(vscode.commands.registerCommand('folderizes.Folderizes', createFolders));
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
