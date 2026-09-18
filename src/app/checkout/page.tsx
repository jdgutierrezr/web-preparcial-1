import Link from "next/link";
import CartItems from "@/src/components/CartItems";

export default function CheckoutPage() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl border shadow-sm">
      <Link href="/" className="text-red-600 hover:underline mb-6 inline-block">
        ← Volver al Catálogo
      </Link>

      <h1 className="text-3xl font-bold my-4 text-red-900">Mi carrito</h1>
      <CartItems />
    </div>
  );
}
