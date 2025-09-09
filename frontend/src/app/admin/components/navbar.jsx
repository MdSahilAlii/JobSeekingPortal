"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");   // ✅ remove token cookie
    router.replace("/login");  // ✅ redirect to login
  };

  return (
    <nav className="bg-white border-b p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Admin Panel</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </nav>
  );
}
