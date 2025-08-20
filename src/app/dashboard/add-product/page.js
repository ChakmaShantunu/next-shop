"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Example POST request to your backend API
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price }),
      });

      if (res.ok) {
        setMessage("Product added successfully!");
        setName("");
        setDescription("");
        setPrice("");
      } else {
        setMessage("Failed to add product.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>

      {message && (
        <p className="mb-4 text-center text-green-600 font-medium">{message}</p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-3 border rounded"
        />
        <textarea
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="p-3 border rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="p-3 border rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
