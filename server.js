const express = require("express");
const mongoose = require("mongoose");
const playerRoutes = require("./routes/players");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/players", playerRoutes);

// Connect to MongoDB and start server
mongoose
  .connect("mongodb://localhost:27017/PlayersDB")
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.error("❌ Failed to connect:", err));
