# 🚀 Remote Code Execution System (Code Clan)

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)](https://socket.io/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![Monaco Editor](https://img.shields.io/badge/Monaco%20Editor-0078D4?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://microsoft.github.io/monaco-editor/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

> **A powerful, real-time collaborative code execution platform that enables multiple users to write, share, and execute code together in a synchronized environment. Built with React, Node.js, and WebSocket technology.**

## 🌟 Overview

Code Clan is a sophisticated remote code execution system that provides a collaborative coding environment where multiple developers can work together in real-time. The platform supports multiple programming languages, offers live code sharing, and provides instant code execution with a beautiful, intuitive interface powered by Monaco Editor.

### ✨ Key Highlights

- **🔄 Real-time Collaboration**: Multiple users can code together with live synchronization
- **🌐 Multi-language Support**: C++, Python, JavaScript, and Java execution
- **⚡ Instant Execution**: Server-side code compilation and execution
- **🎨 Monaco Editor Integration**: VS Code-like editing experience
- **🏠 Room-based System**: Private coding sessions with room IDs
- **🌙 Theme Support**: Dark and light mode for comfortable coding
- **📱 Responsive Design**: Works seamlessly across different devices

## 🏗️ System Architecture

```
┌─────────────────────┐    ┌──────────────────────┐    ┌─────────────────────┐
│   React Frontend    │    │   Node.js Server     │    │   Code Execution    │
│   (Client)          │ -> │   (WebSocket + API)  │ -> │   (File System)     │
│                     │    │                      │    │                     │
│ • Monaco Editor     │    │ • Socket.io Server   │    │ • Language Runners  │
│ • Real-time UI      │    │ • Express.js APIs    │    │ • File Operations   │
│ • Room Management   │    │ • User Management    │    │ • Process Execution │
└─────────────────────┘    └──────────────────────┘    └─────────────────────┘
```

## 🛠️ Technology Stack

### Frontend Technologies

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | ^17.0.0 |
| **Monaco Editor** | Code Editor Component | ^4.0.0 |
| **Socket.io Client** | Real-time Communication | ^4.0.0 |
| **React Bootstrap** | UI Components | ^1.6.0 |
| **React Router** | Navigation & Routing | ^5.2.0 |
| **React Toastify** | Notifications | ^7.0.0 |
| **Axios** | HTTP Client | ^0.21.0 |
| **Typewriter Effect** | Animated Text | ^2.18.0 |

### Backend Technologies

| Technology | Purpose | Version |
|------------|---------|---------|
| **Node.js** | Server Runtime | ^14.0.0 |
| **Express.js** | Web Framework | ^4.17.0 |
| **Socket.io** | WebSocket Server | ^4.0.0 |
| **Body Parser** | Request Parsing | ^1.19.0 |
| **CORS** | Cross-Origin Support | ^2.8.5 |
| **Child Process** | Code Execution | Built-in |
| **File System** | File Operations | Built-in |

### Supported Languages

- **C++** - GCC Compiler
- **Python** - Python 3 Interpreter
- **JavaScript** - Node.js Runtime
- **Java** - OpenJDK Compiler & Runtime

## 📋 Features

### 🎯 Core Functionality

- **Real-time Code Sharing**: Changes are instantly synchronized across all connected users
- **Multi-language Execution**: Support for 4 major programming languages
- **Room-based Collaboration**: Private coding sessions with unique room IDs
- **Live Input/Output**: Shared input and real-time output display
- **Theme Switching**: Toggle between light and dark editor themes

### 👥 Collaboration Features

- **User Join/Leave Notifications**: Toast notifications when users enter or exit rooms
- **Synchronized Language Changes**: Language switches are shared across all users
- **Live Code Synchronization**: Real-time code updates via WebSocket
- **Shared Input Data**: Input data is synchronized for all participants

### 🔧 Development Features

- **Monaco Editor**: Professional code editing experience with syntax highlighting
- **Error Handling**: Comprehensive compilation and runtime error reporting
- **File Management**: Temporary file creation and cleanup for code execution
- **Process Isolation**: Safe code execution using child processes

## ⚙️ Installation & Setup

### Prerequisites

- **Node.js 14+** and npm
- **GCC** for C++ compilation
- **Python 3** for Python execution
- **Java JDK** for Java compilation and execution

### 🔧 Server Setup

1. **Navigate to server directory**

   ```bash
   cd server
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Required packages:**

   ```json
   {
     "express": "^4.17.1",
     "socket.io": "^4.0.0",
     "body-parser": "^1.19.0",
     "cors": "^2.8.5"
   }
   ```

4. **Start the server**

   ```bash
   node index.js
   ```

   Server will be available at: `http://localhost:4000`

### 🎨 Client Setup

1. **Navigate to client directory**

   ```bash
   cd client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Required packages:**

   ```json
   {
     "react": "^17.0.2",
     "@monaco-editor/react": "^4.2.1",
     "socket.io-client": "^4.0.0",
     "react-bootstrap": "^1.6.1",
     "react-router-dom": "^5.2.0",
     "react-toastify": "^7.0.4",
     "axios": "^0.21.1",
     "typewriter-effect": "^2.18.0"
   }
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

   Frontend will be available at: `http://localhost:3000`

## 🚀 Usage Guide

### 🏠 Getting Started

1. **Access the Application**
   - Open `http://localhost:3000` in your browser
   - You'll see the "Code Clan" home screen with typewriter animation

2. **Join a Coding Session**

   ```
   Enter Name: YourUsername
   Enter Room ID: your-room-id
   Click Submit
   ```

3. **Start Collaborating**
   - The IDE interface will load with Monaco Editor
   - Other users can join using the same Room ID
   - All code changes will be synchronized in real-time

### 💻 Using the IDE

#### Language Selection

```javascript
// Supported languages with default code templates:
- C++: "Hello World" with iostream
- Python: print("Hello World")
- JavaScript: console.log("Hello World")
- Java: Main class with System.out.println
```

#### Code Execution

1. Write your code in the Monaco Editor
2. Add input data in the Input panel (if needed)
3. Click "Run Code" to execute
4. View output in the Output panel

#### Real-time Features

- **Code Sync**: All typing is shared live with room participants
- **Language Sync**: Language changes affect all users
- **Input Sync**: Input data is shared across the session

## 🔗 API Endpoints

### Code Execution API

| Endpoint | Method | Description |
|----------|---------|-------------|
| `/` | POST | Execute code with specified language and input |

#### Request Format

```javascript
{
  "code": "console.log('Hello World');",
  "lang": "javascript",
  "input": "optional input data"
}
```

#### Response Format

```javascript
// Success
"Hello World\n"

// Error
"Compilation error: syntax error"
```

### WebSocket Events

#### Client to Server Events

| Event | Data | Description |
|-------|------|-------------|
| `joinroom` | `{username, roomid}` | Join a coding room |
| `sendCode` | `code string` | Share code changes |
| `sendInput` | `input string` | Share input data |
| `changeLanguage` | `{language, room}` | Change programming language |

#### Server to Client Events

| Event | Data | Description |
|-------|------|-------------|
| `joinedmssg` | `username` | User joined notification |
| `leavemssg` | `username` | User left notification |
| `recivecode` | `code string` | Receive code updates |
| `getInput` | `input string` | Receive input updates |
| `receiveLanguageChange` | `language` | Receive language change |

## 💡 Code Examples

### Adding Custom Language Support

```javascript
// In server/index.js - Add new language case
case "go":
  fileName = "runner.go";
  compileCommand = `go build -o ./temp/runner ./temp/${fileName}`;
  runCommand = `./temp/runner < ./temp/in.txt`;
  break;

// In client/src/utils/defaultcode.js - Add default code
const def_code = {
  // ... existing languages
  Go: `package main
import "fmt"
func main() {
    fmt.Println("Hello World")
}`
};
```

### Custom WebSocket Event

```javascript
// Client side - Sending custom event
socket.emit("customEvent", { data: "custom data" });

// Server side - Handling custom event
Socket.on("customEvent", (data) => {
  console.log("Received custom data:", data);
  Socket.to(user.room).emit("customResponse", data);
});
```

## 🗂️ Project Structure

```
Remote-Code-Execution-System/
├── client/                       # React Frontend
│   ├── src/
│   │   ├── components/          # React Components
│   │   │   ├── Editor/          # Monaco Editor Integration
│   │   │   ├── Home/            # Landing Page
│   │   │   ├── Main/            # Main IDE Interface
│   │   │   ├── Input/           # Input Panel Component
│   │   │   └── output/          # Output Display Component
│   │   ├── utils/               # Utility Functions
│   │   └── Assests/             # Images and Media
│   └── package.json
├── server/                       # Node.js Backend
│   ├── utils/                   # Server Utilities
│   │   └── users.js             # User Management
│   ├── temp/                    # Temporary Execution Files
│   └── index.js                 # Main Server File
├── Docker/                       # Docker Configurations
│   ├── cpp                      # C++ Container Setup
│   ├── python                   # Python Container Setup
│   ├── java                     # Java Container Setup
│   └── javascript               # Node.js Container Setup
└── DockerFile                    # Main Docker Configuration
```

## 🔧 Language-Specific Setup

### C++ Requirements

```bash
# Ubuntu/Debian
sudo apt-get install build-essential

# macOS
xcode-select --install

# Windows
# Install MinGW or Visual Studio
```

### Python Requirements

```bash
# Ensure Python 3 is installed
python3 --version

# Should output Python 3.x.x
```

### Java Requirements

```bash
# Install OpenJDK
sudo apt-get install openjdk-11-jdk

# Verify installation
java --version
javac --version
```

## 🐳 Docker Support

### Using Docker Containers

The project includes Docker configurations for isolated language execution:

```bash
# Build C++ container
docker build -t cpp-runner -f Docker/cpp .

# Build Python container
docker build -t python-runner -f Docker/python .

# Build Java container
docker build -t java-runner -f Docker/java .

# Build JavaScript container
docker build -t js-runner -f Docker/javascript .
```

### Main Application Docker

```bash
# Build and run the entire application
docker build -t code-clan .
docker run -p 3000:3000 -p 4000:4000 code-clan
```

## 🔍 Code Execution Flow

1. **User Input**: Code is written in Monaco Editor
2. **Real-time Sync**: Code changes are sent via WebSocket to all room participants
3. **Execution Request**: User clicks "Run Code"
4. **Server Processing**:
   - Code is written to temporary file
   - Input data is written to `in.txt`
   - Compilation occurs (for compiled languages)
   - Execution happens with input redirection
5. **Output Return**: Results are sent back to client
6. **Display**: Output is shown in the Output panel

## 🛡️ Security Considerations

- **File Isolation**: Each execution uses temporary files
- **Process Limits**: Child processes prevent infinite loops
- **Input Validation**: Server validates language types
- **Error Handling**: Comprehensive error catching prevents crashes

## 🎨 UI/UX Features

### Monaco Editor Integration

```javascript
// Features provided by Monaco Editor:
- Syntax highlighting for all supported languages
- IntelliSense and auto-completion
- Error squiggles and syntax validation
- Multiple cursors and selections
- Find and replace functionality
- Code folding and minimap
```

### Theme Support

```javascript
// Available themes:
- vs-light: Light theme for day coding
- vs-dark: Dark theme for night coding
// Themes sync across all editor instances
```

### Notifications

```javascript
// Toast notifications for:
- User join events: "Username has joined the Room"
- User leave events: "Username has left the Room"
- Error notifications: "Code execution failed"
```

## 🚀 Advanced Features

### Room Management

```javascript
// User management system:
const users = [];

function userJoin(id, username, room) {
  const user = { id, username, room };
  users.push(user);
  return user;
}

function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}
```

### Language Detection

```javascript
// Automatic language mapping:
const langMap = {
  "C++": "cpp",
  "Python": "python", 
  "Javascript": "javascript",
  "Java": "java"
};
```

## 📈 Performance Optimizations

- **WebSocket Connection Pooling**: Efficient socket management
- **File System Cleanup**: Automatic temporary file removal
- **React Optimization**: useCallback and memoization
- **Debounced Updates**: Prevents excessive socket emissions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow React best practices and hooks patterns
- Use proper error handling for server operations
- Maintain WebSocket event consistency
- Test across all supported languages

## 🐛 Troubleshooting

### Common Issues

#### Language Compilation Errors

```bash
# Ensure compilers are installed:
g++ --version  # For C++
python3 --version  # For Python
node --version  # For JavaScript
javac --version  # For Java
```

#### WebSocket Connection Issues

```javascript
// Check server status:
curl http://localhost:4000
// Verify CORS settings in server configuration
```

#### File Permission Errors

```bash
# Ensure temp directory has write permissions:
chmod 755 server/temp/
```