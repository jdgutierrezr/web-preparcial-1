"use client";

import { CartItem } from "@/src/types/product";
import { useCart } from "@/src/context/CartContext";
import Image from "next/image";

type ItemCardProps = {
  item: CartItem;
};

export default function ItemCard({ item }: ItemCardProps) {
  const { addToCart, removeItem } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 my-4 flex hover:shadow-md transition items-center">
      <div className="relative w-24 h-24 overflow-hidden rounded-md shrink-0">
        <Image
          src={item.product.thumbnail}
          alt={item.product.title}
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>
      <div className="ml-4 flex flex-col w-full">
        <span className="text-xs text-red-600 font-semibold uppercase tracking-wider">
          {item.product.category}
        </span>
        <h3 className="font-semibold text-lg text-slate-800 mt-1">
          {item.product.title}
        </h3>
        <p className="text-slate-500 text-sm mt-1">
          $ {(item.product.price * item.quantity).toFixed(2)}
        </p>
      </div>
      <div>
        <div className="flex mx-4">
          <button
            onClick={() => {
              removeItem(item.product.id);
            }}
            className="px-4 text-xl text-white bg-red-900 cursor-pointer"
          >
            -
          </button>
          <div className="px-4 text-xl text-red-950 bg-slate-200">
            {item.quantity}
          </div>
          <button
            onClick={() => {
              addToCart(item.product);
            }}
            className="px-4 text-xl text-white bg-red-900 cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
