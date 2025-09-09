"use client";
import React, { useState } from "react";
import {
  Home,
  Users,
  ShoppingCart,
  BarChart2,
  Headphones,
  Folder,
  ChevronDown,
  ChevronRight,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";

const Sidebar = ({ setActivePage }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <aside className="w-64 bg-gray-900 text-gray-300 min-h-screen p-4">
      <h1 className="text-2xl font-bold text-white mb-8">Flowbite</h1>

      <nav className="space-y-4">
        <button
          onClick={() => setActivePage("dashboard")}
          className="flex items-center space-x-3 hover:text-white w-full text-left"
        >
          <Home size={20} /> <span>Dashboard</span>
        </button>

        {/* Categories */}
        <div>
          <button
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="flex items-center justify-between w-full text-left hover:text-white"
          >
            <span className="flex items-center space-x-3">
              <Folder size={20} /> <span>Categories</span>
            </span>
            {isCategoryOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </button>

          {isCategoryOpen && (
            <div className="ml-8 mt-2 space-y-2 text-sm">
              <button
                onClick={() => setActivePage("add-category")}
                className="flex items-center space-x-2 hover:text-white w-full text-left"
              >
                <Plus size={16} /> <span>Add Category</span>
              </button>
              <button
                onClick={() => setActivePage("edit-category")}
                className="flex items-center space-x-2 hover:text-white w-full text-left"
              >
                <Pencil size={16} /> <span>Edit Category</span>
              </button>
              <button
                onClick={() => setActivePage("delete-category")}
                className="flex items-center space-x-2 hover:text-white w-full text-left"
              >
                <Trash2 size={16} /> <span>Delete Category</span>
              </button>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
