"use client";

import { useCart } from "@/src/context/CartContext";
import { ProductDetail } from "@/src/types/product";

export default function AddToCartButton({
  product,
}: {
  product: ProductDetail;
}) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="w-full mt-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition cursor-pointer"
    >
      Añadir al Carrito
    </button>
  );
}
