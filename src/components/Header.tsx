"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/src/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="flex justify-between items-center p-4 bg-red-950 text-white shadow-md sticky top-0 z-50">
      <div>
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-bold tracking-wide"
        >
          <Image src="/logo.png" alt="ShopHub" width={40} height={40} />
          ShopHub
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/checkout"
          className="flex items-center gap-3 text-xl font-bold tracking-wide"
        >
          <div className="bg-red-900 px-4 py-2 rounded-full border border-white">
            Ir a checkout
          </div>
        </Link>
        <div className="bg-red-900 px-4 py-2 rounded-full border border-white">
          Carrito:{" "}
          <span className="font-bold text-emerald-400">{totalItems}</span>
        </div>
      </div>
    </header>
  );
}
