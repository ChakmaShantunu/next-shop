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
    <div className="w-full min-h-screen p-6 flex justify-center items-start">
      <div className="w-full max-w-5xl bg-base-100 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Add Product</h1>

        {message && (
          <p className="mb-6 text-center text-green-600 font-medium">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
          {/* Product Name */}
          <div className="flex flex-col w-full">
            <label className="mb-2 font-semibold">Product Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
              required
              className="input w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Product Description */}
          <div className="flex flex-col w-full">
            <label className="mb-2 font-semibold">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
              required
              className="input w-full border rounded px-3 py-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Product Price */}
          <div className="flex flex-col w-full">
            <label className="mb-2 font-semibold">Price ($)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter product price"
              required
              className="input w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 text-black rounded bg-[#EEEEEE] hover:bg-[#350a0a] hover:text-white cursor-pointer"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
