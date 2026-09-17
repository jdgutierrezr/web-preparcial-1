import { ProductSummary, ProductDetail } from "@/src/types/product";

const BASE_URL = "https://dummyjson.com/products";

export async function getProducts(): Promise<ProductSummary[]> {
  const response = await fetch(
    `${BASE_URL}?limit=8&select=id,title,price,category,thumbnail,stock`,
  );

  if (!response.ok) throw new Error("Failed to fetch products");

  const data = await response.json();
  return data.products;
}

export async function getProductById(id: number): Promise<ProductDetail> {
  const response = await fetch(`${BASE_URL}/${id}`);

  if (!response.ok) throw new Error(`Failed to fetch product with id ${id}`);

  const data = await response.json();
  return data;
}
