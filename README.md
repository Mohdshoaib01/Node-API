# Node API (MongoDB, Express, Node.js)

This project is a simple **REST API** built with:
- **Node.js**
- **Express**
- **MongoDB** (via Mongoose)

It allows you to **create, read, update, and delete (CRUD)** players in a sports team.

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/node-api.git
cd node-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start MongoDB
Make sure MongoDB is running locally:
```bash
mongod
```

### 4. Run the server
```bash
npm run dev
```
or
```bash
node server.js
```

Server will run at:  
👉 `http://localhost:3000`

---

## 🛠 API Endpoints

### Players
- **POST** `/api/players` → Create a new player  
- **GET** `/api/players` → Get all players  
- **GET** `/api/players/:id` → Get a single player  
- **PATCH** `/api/players/:id` → Update a player  
- **DELETE** `/api/players/:id` → Delete a player  

---

## 📸 Screenshots (to include)
Take Postman screenshots of:
- One `GET` request  
- One `POST` request  
- One `PATCH` request  
- One `DELETE` request  

And add them here or submit separately.

---

## 📦 Example POST Body
```json
{
  "name": "Jordan Love",
  "number": 10,
  "position": "Quarterback"
}
```
