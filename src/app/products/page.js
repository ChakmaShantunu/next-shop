"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);

    // Fetch data from products.json
    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="card bg-base-100 w-96 shadow-sm">
                        <div className="w-[400px] h-[300px] overflow-hidden rounded-lg relative group cursor-pointer">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain transition-transform duration-300 transform group-hover:scale-110"
                            />
                        </div>

                        <div className="card-body">
                            <h2 className="card-title">
                                {product.name}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{product.description}</p>
                            <p className="font-bold text-lg">{product.price}</p>
                            <div className="card-actions justify-end">
                                {product.tags.map((tag, index) => (
                                    <div key={index} className="badge badge-outline">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                            <button className="btn bg-[#541212]  text-white mt-3">Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
