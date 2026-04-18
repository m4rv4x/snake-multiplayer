# snake-multiplayer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> Real-time multiplayer Snake game — Express server + React client + WebSockets.

## 🎮 Features

- 🐍 Classic Snake mechanics
- 🧑‍🤝‍🧑 Multiplayer via WebSockets
- ⚛️ React client
- 🚀 Express + ws server

## 🚀 Quick Start

### Server
```bash
npm install
node server.js
```

Server listens on http://localhost:3000

### Client
```bash
cd client
npm install
npm start
```

Client dev server on http://localhost:3001

## 🏗️ Architecture

```
snake-multiplayer/
├── server.js           # Express + WebSocket game server
├── package.json
└── client/             # React client (CRA)
    ├── src/
    ├── public/
    └── package.json
```

## 📄 License

[MIT](LICENSE) © [marvax](https://github.com/m4rv4x)
