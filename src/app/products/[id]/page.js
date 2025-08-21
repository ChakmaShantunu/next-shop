"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function ProductDetailsPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const router = useRouter();

    // Fetch single product
    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => {
                const foundProduct = data.find((item) => item.id === parseInt(id));
                setProduct(foundProduct);
            });
    }, [id]);

    if (!product) {
        return (
            <div className="flex justify-center items-center h-[70vh]">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="p-6">
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <div className="w-[400px] h-[300px] overflow-hidden rounded-lg relative group cursor-pointer">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain transition-transform duration-300 transform group-hover:scale-110"
                    />
                </div>


                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{product.name}</h2>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-lg font-bold">Price: {product.price}</p>

                    <div className="flex gap-2 flex-wrap">
                        {product.tags.map((tag, index) => (
                            <div key={index} className="badge badge-outline">
                                {tag}
                            </div>
                        ))}
                    </div>

                    <div className="card-actions justify-end mt-4">
                        <button className="btn bg-[#541212] text-white">Buy Now</button>
                        <button className="btn btn-outline" onClick={() => router.back()}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
