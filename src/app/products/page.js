"use client";

import React from "react";

const products = [
    { id: 1, name: "Product 1", description: "Description 1", price: "$10" },
    { id: 2, name: "Product 2", description: "Description 2", price: "$20" },
    { id: 3, name: "Product 3", description: "Description 3", price: "$30" },
];

export default function ProductsPage() {
    return (
        <div className="min-h-screen p-10 bg-gray-100">
            <h1 className="text-4xl font-bold mb-6 text-center">Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border rounded p-4 bg-white shadow">
                        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                        <p className="mb-2">{product.description}</p>
                        <p className="font-bold">{product.price}</p>
                        <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
