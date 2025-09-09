const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: { type: String, required: false },   // Cloudinary secure_url
  imagePublicId: { type: String, required: false }
}, { timestamps: true });

module.exports = mongoose.model("Category", categorySchema);
