require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Check .env values
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

console.log("PORT:", PORT);
console.log("MONGO_URI:", MONGO_URI);

// MongoDB Connection
if (!MONGO_URI) {
  console.log("MongoDB Error: MONGO_URI is missing in .env file");
  console.log("Create a .env file inside the backend folder");
} else {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((error) => console.log("MongoDB Error:", error.message));
}

// Routes
app.get("/", (req, res) => {
  res.send("Hello from MERN Backend");
});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Welcome to the VMS CLASS: Project 1",
    institute: "VMS CLASS",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
