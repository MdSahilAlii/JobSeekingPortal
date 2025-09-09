"use client";
import React, { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import AddCategory from "../categories/addCategory";
import EditCategory from "../categories/editCategory";
import DeleteCategory from "../categories/deleteCategory";

const AdminLayout = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "add-category":
        return <AddCategory />;
      case "edit-category":
        return <EditCategory />;
      case "delete-category":
        return <DeleteCategory />;
      default:
        return <h1 className="text-white">Dashboard</h1>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      <Sidebar setActivePage={setActivePage} /> {/* ✅ pass function */}
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 bg-gray-800">{renderContent()}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
