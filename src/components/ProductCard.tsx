"use client";

import { ProductSummary } from "@/src/types/product";
import { useCart } from "@/src/context/CartContext";
import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
  product: ProductSummary;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 flex flex-col justify-between hover:shadow-md transition">
      <div>
        <div className="relative w-full h-48 mb-3">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <span className="text-xs text-red-600 font-semibold uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="font-semibold text-lg text-slate-800 mt-1">
          {product.title}
        </h3>
        <p className="text-slate-500 text-sm mt-1">Stock: {product.stock}</p>
      </div>
      <div className="mt-4 pt-3 border-t flex items-center justify-between">
        <span className="text-xl font-bold text-slate-900">
          ${product.price}
        </span>
        <div className="flex gap-2">
          <Link
            href={`/products/${product.id}`}
            className="px-3 py-1.5 text-sm bg-red-100 text-slate-700 rounded-lg hover:bg-slate-200"
          >
            Detalles
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="px-3 py-1.5 text-sm bg-red-600 text-white rounded-lg hover:bg-indigo-700"
          >
            + Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
