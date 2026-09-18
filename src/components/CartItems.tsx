"use client";

import { useCart } from "@/src/context/CartContext";
import ItemCard from "@/src/components/ItemCard";
import PaymentForm from "@/src/components/PaymentForm";

export default function CartItems() {
  const { items, emptyCart, totalPrice } = useCart();

  return (
    <div>
      {items.length > 0 ? (
        <div className="bg-white p-6 rounded-xl border shadow-sm flex gap-4">
          <div className="flex flex-col justify-between">
            <div>
              {items.map((item) => (
                <ItemCard key={item.product.id} item={item} />
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => emptyCart()}
                className="text-red-800 cursor-pointer"
              >
                Vaciar carrito
              </button>
              <p className="text-xl font-bold text-red-950">
                Total: $ {totalPrice.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="mt-6 max-w-4xl mx-auto bg-white p-6 rounded-xl border shadow-sm">
            <h1 className="text-3xl font-bold my-4 text-red-900">
              Formulario de pago
            </h1>
            <PaymentForm />
          </div>
        </div>
      ) : (
        <div className="text-gray-500 text-center m-5">
          No hay items en el carrito
        </div>
      )}
    </div>
  );
}
