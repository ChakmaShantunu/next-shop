import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex flex-col items-center justify-center bg-[#EEEEEE] p-10 text-center rounded-2xl mt-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Next-Shop</h1>
          <p className="text-lg mb-6">
            Your simple product management app built with Next.js
          </p>
          <div className="flex space-x-4">
            <a
              href="/products"
              className="bg-[#541212] text-white px-6 py-2 rounded hover:bg-[#350a0a]"
            >
              Browse Products
            </a>
            <a
              href="/login"
              className="bg-[#541212] text-white px-6 py-2 rounded hover:bg-[#350a0a]"
            >
              Login
            </a>
          </div>
        </section>

        {/* Product Highlights */}
        <section className="p-10">
          <h2 className="text-3xl font-bold mb-4 text-center">Product Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border p-4 rounded">Product 1</div>
            <div className="border p-4 rounded">Product 2</div>
            <div className="border p-4 rounded">Product 3</div>
          </div>
        </section>
      </div>
    </>
  );
}
