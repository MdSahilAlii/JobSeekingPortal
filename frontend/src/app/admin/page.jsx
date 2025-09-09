import { cookies } from "next/headers";
import AdminLayout from "./components/adminLayout";

export default async function AdminPage() {
  const token = cookies().get("token")?.value;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/admin`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    return (
      <main className="p-8">
        <h1 className="text-xl font-semibold mb-3">Access denied</h1>
        <p className="text-red-600">{data?.message || "Forbidden"}</p>
      </main>
    );
  }

  const data = await res.json();

  return <AdminLayout data={data} />;
}
