"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    // Pagination logic
    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const currentProducts = products.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(products.length / productsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };
    const prevPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentProducts.map((product) => (
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
                            <Link href={`/products/${product.id}`}>
                                <button className="btn bg-[#541212] text-white mt-3 rounded-xl">
                                    Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-6 space-x-4">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
