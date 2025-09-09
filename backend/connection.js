// connection.js
import mongoose from "mongoose";

const url =
  process.env.MONGO_URI ||
  "mongodb+srv://job:portal@cluster0.8kaxi5f.mongodb.net/JobPortal?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Database connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

// ✅ Correct ESM export
export default mongoose;
