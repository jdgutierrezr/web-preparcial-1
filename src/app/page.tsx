import { getProducts } from "@/src/services/api";
import ProductCard from "@/src/components/ProductCard";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6 text-red-900">
        Catálogo de Productos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
