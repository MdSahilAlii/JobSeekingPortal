import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import Category from "./models/Category"; // adjust path

const router = express.Router();

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Storage for multer
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "categories", // images will be stored in a folder called "categories"
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

// Route: Add category
router.post("/api/categories", upload.single("image"), async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || !req.file) {
      return res.status(400).json({ success: false, message: "Name and image required" });
    }

    const category = new Category({
      name,
      imageUrl: req.file.path, // Cloudinary URL
      imagePublicId: req.file.filename, // Cloudinary public_id
    });

    console.log("Creating category:", category);
    await category.save();

    res.status(201).json({ success: true, category });
  } catch (err) {
    console.error("Error adding category:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
