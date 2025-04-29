const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function setupServer() {
  const root = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
  if (!root) return;

  const serverPath = path.join(root, 'server');
  if (!fs.existsSync(serverPath)) fs.mkdirSync(serverPath);

  execSync('npm init -y', { cwd: serverPath, stdio: 'inherit' });
  execSync('npm install express', { cwd: serverPath, stdio: 'inherit' });

  const folders = ['controllers', 'db', 'middlewares', 'models', 'routes', 'services'];
  folders.forEach(folder => {
    const folderPath = path.join(serverPath, folder);
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);
  });

  // Create app.js
  const appContent = `
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Folderizes backend is running');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
`.trim();
  fs.writeFileSync(path.join(serverPath, 'app.js'), appContent);
}

module.exports = setupServer;
