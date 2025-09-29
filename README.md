# Shoaib Mohd F00621060
# Node API  with MongoDB, Express, Node.js

This project is a simple REST API
- **Node.js**
- **Express**
- **MongoDB**

It allows you to **create, read, update, and delete (CRUD)** players in a sports team.

---

## Getting Started

### 1. Open terminal and add
```bash
cd node-api
```

### 2. Install NPM
```bash
npm install
```

### 3. Start MongoDB
```bash
mongod
```

### 4. Run the server
```bash
node server.js
```

Server will run at:  
`http://localhost:3000`

---

## API Endpoints

### Players
- **POST** `/api/players` → Create a new player  
- **GET** `/api/players` → Get all players  
- **GET** `/api/players/:id` → Get a single player  
- **PATCH** `/api/players/:id` → Update a player  
- **DELETE** `/api/players/:id` → Delete a player  

---
