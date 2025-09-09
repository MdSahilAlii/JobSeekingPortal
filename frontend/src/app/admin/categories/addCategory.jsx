"use client";
import React, { useState } from "react";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !image) {
      alert("Please enter a category name and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/categories`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Response data:", data);

      if (data.success) {
        alert("Category added successfully!");
        setName("");
        setImage(null);
      } else {
        alert("Error adding category: " + data.message);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Error adding category");
    }
  };

  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Category</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category Name */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Category Name"
          className="w-full px-3 py-2 rounded-md bg-gray-600 text-gray-200 focus:outline-none"
        />

        {/* File Input */}
        <div>
          <label className="block mb-2 text-sm text-gray-300">Upload Image</label>
          <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white inline-block">
            Choose File
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="hidden"
            />
          </label>
          {image && <span className="ml-2 text-sm text-gray-300">{image.name}</span>}
        </div>

        {/* Preview */}
        {image && (
          <div className="mt-3">
            <p className="text-sm text-gray-400 mb-1">Preview:</p>
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-md border"
            />
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
