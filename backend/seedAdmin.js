// seedAdmin.js
import mongoose from "./connection.js";
import User from "./models/adminUser.js";

const seedAdmin = async () => {
  try {
    // delete existing admin if exists (avoid duplicates)
    // await User.deleteMany({ email: "admin@site.com" });

    // create new admin
    const admin = new User({
      email: "sahil@site.com",
      password: "sahil123", // later we’ll hash this
    });

    await admin.save();
    console.log("✅ Admin user created successfully");
  } catch (err) {
    console.error("❌ Error seeding admin:", err.message);
  } finally {
    mongoose.connection.close();
  }
};

seedAdmin();
