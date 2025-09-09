'use client';
import React from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Clear token cookie
    document.cookie = "token=; Max-Age=0; path=/;";

    // Optionally clear localStorage/sessionStorage if used
    localStorage.clear();
    sessionStorage.clear();

    // Redirect to login page
    router.push("/login");
  };

  return (
    <header className="flex justify-between items-center bg-gray-800 p-4 shadow-md">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        className="px-3 py-2 w-1/3 rounded-md bg-gray-700 text-gray-300 focus:outline-none"
      />

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button className="text-gray-300 hover:text-white">🔔</button>

        {/* Profile Picture */}
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full border"
        />

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
