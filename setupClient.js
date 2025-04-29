const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function setupClient() {
  const root = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
  if (!root) return;

  const clientPath = path.join(root, 'client');
  execSync('npm create vite@latest client -- --template react', { cwd: root, stdio: 'inherit' });
  execSync('npm install', { cwd: clientPath, stdio: 'inherit' });

  // Create subfolders in src
  const srcPath = path.join(clientPath, 'src');
  const folders = ['components', 'contexts', 'hooks', 'lib', 'pages'];
  folders.forEach(folder => {
    const fullPath = path.join(srcPath, folder);
    if (!fs.existsSync(fullPath)) fs.mkdirSync(fullPath);
  });

  // Modify App.jsx
  const appJsxPath = path.join(srcPath, 'App.jsx');
  fs.writeFileSync(appJsxPath, `
function App() {
  return <h1>Folderizes created folder successfully</h1>;
}
export default App;
`.trim());

  // Clear App.css and index.css
  const styles = ['App.css', 'index.css'];
  styles.forEach(file => {
    const filePath = path.join(srcPath, file);
    if (fs.existsSync(filePath)) fs.writeFileSync(filePath, '');
  });
}

module.exports = setupClient;
