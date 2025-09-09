// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import User from "./models/adminUser";
const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());

// Dummy admin user (replace later with MongoDB)
// const ADMIN = {
//   email: "admin@site.com",
//   password: "admin123",
// };

// Auth route
try {
  // find user by email
  const user = await User.findOne({ email });

  // check if user exists and password matches
  if (!user || user.password !== password) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  console.log("✅ Login successful:", user.email);

  // Normally you would generate a JWT here
  return res.json({
    success: true,
    token: "fake-jwt-token",
    user: { email: user.email },
  });
} catch (err) {
  console.error("❌ Login error:", err.message);
  res.status(500).json({ success: false, message: "Server error" });
}


// Test admin route
// app.get("/admin", (req, res) => {
//   res.json({ message: "Welcome to admin panel 🚀" });
// });

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
