"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/highlights.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-10 p-4 w-full">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-[#EEEEEE] p-10 text-center rounded-2xl min-h-[60vh]"
        style={{
          backgroundImage: "url('/Images/hero-bg.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <h1 className="text-5xl font-bold mb-4">Welcome to Next-Shop</h1>
        <p className="text-lg mb-6">
          Your simple product management app built with Next.js
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/products"
            className="bg-[#541212] text-white px-6 py-2 rounded hover:bg-[#350a0a]"
          >
            Browse Products
          </Link>
        </div>
      </section>

      {/* Product Highlights */}
      <h2 className="text-4xl text-center font-bold">Products Highligts</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-sm rounded-lg overflow-hidden flex flex-col">
            <div className="relative w-full h-60 sm:h-64 md:h-72 lg:h-80 overflow-hidden group cursor-pointer">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>

            <div className="card-body flex flex-col flex-1">
              <h2 className="card-title flex justify-between items-center">
                {product.name}
                <span className="badge badge-secondary">NEW</span>
              </h2>
              <p className="flex-1 mt-2">{product.description}</p>
              <p className="font-bold text-lg mt-2">{product.price}</p>

              <div className="card-actions flex-wrap gap-1 mt-2">
                {Array.isArray(product.tags) &&
                  product.tags.map((tag, index) => (
                    <span key={index} className="badge badge-outline">
                      {tag}
                    </span>
                  ))}
              </div>

              <Link href={`/products/${product.id}`} className="mt-3">
                <button className="btn bg-[#541212] text-white w-full rounded-xl hover:bg-[#350a0a]">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
