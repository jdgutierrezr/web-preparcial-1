import Link from "next/link";
import Image from "next/image";
import { getProductById } from "@/src/services/api";
import AddToCartButton from "@/src/components/AddToCartButton";

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product = await getProductById(Number(id));

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl border shadow-sm">
      <Link href="/" className="text-red-600 hover:underline mb-6 inline-block">
        ← Volver al Catálogo
      </Link>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative w-full h-80">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-contain rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-xs text-red-600 font-semibold uppercase">
              {product.category}
            </span>
            <h1 className="text-2xl font-bold text-slate-900 mt-1">
              {product.title}
            </h1>
            <p className="text-3xl font-extrabold text-slate-900 my-4">
              ${product.price}
            </p>
            <p className="text-slate-600 text-sm mb-4">{product.description}</p>
            <p className="text-slate-500 text-xs">
              Unidades disponibles: {product.stock}
            </p>
          </div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
