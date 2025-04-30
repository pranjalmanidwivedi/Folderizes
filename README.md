# 🚀 Folderizes - Full Stack Project Scaffolder for VS Code

**Folderizes** is a powerful Visual Studio Code extension that automates the creation of a complete full-stack project structure — including a React + Vite client and an Express.js backend — with just one command.

---

## ✨ Features

### 🔧 Frontend (React + Vite)
- Automatically runs: `npm create vite@latest client -- --template react`
- Installs Vite and React dependencies
- Creates useful folders under `client/src`:
  - `components/`, `hooks/`, `contexts/`, `lib/`, `pages/`
- Replaces the default `App.jsx` content with:
  ```jsx
  <h1>Folderizes created folder successfully</h1>
Clears default styling in App.css and index.css

⚙️ Backend (Express.js)
Creates a server folder with:

controllers/, db/, middlewares/, models/, routes/, services/

Installs Express and sets up a basic app.js with a working server

📁 client/
│   └── src/
│       ├── components/
│       ├── contexts/
│       ├── hooks/
│       ├── lib/
│       ├── pages/
│       ├── App.jsx         ← Modified
│       ├── App.css         ← Emptied
│       └── index.css       ← Emptied
│
📁 server/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── app.js              ← Express starter server
🛠️ How to Use
Open your workspace folder in VS Code.

Press Ctrl+Shift+P (or Cmd+Shift+P on Mac).

Search for and run: Folderizes: Run Folderizes Setup

Watch your client/ and server/ folders come to life!

📥 Installation
You can install Folderizes directly from the Visual Studio Code Marketplace.

🧪 Version
Current Version: 0.0.2
See CHANGELOG.md for detailed changes.

💡 Future Plans
Support for TypeScript templates

Optional Tailwind or Bootstrap setup

MongoDB integration for backend

Custom project templates via prompts

👨‍💻 Author
Created by Pranjal Mani Dwivedi
Contributions & feedback welcome!

📄 License
MIT License


Let me know if you need anything else, including a shorter version for the Marketplace!
