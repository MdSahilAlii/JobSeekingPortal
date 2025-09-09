// index.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import User from "./models/adminUser.js";
import mongoose from "./connection.js"; // connects to MongoDB

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());

// Dummy admin user (replace later with MongoDB User model)
const ADMIN = {
  email: "admin@.com",
  password: "admin123",
};

// Auth route
// Auth route
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    console.log("✅ Login successful:", user.email);

    return res.json({
      success: true,
      token: "fake-jwt-token",
      user: { email: user.email },
    });
  } catch (err) {
    console.error("❌ Login error:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


// Test admin route
app.get("/admin", (req, res) => {
  res.json({ message: "Welcome to admin panel 🚀" });
});

// Base route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
