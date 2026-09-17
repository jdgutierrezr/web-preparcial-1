export interface ProductSummary {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  stock: number;
}

export interface ProductDetail extends ProductSummary {
  description: string;
  brand?: string;
  images?: string[];
}

export interface CartItem {
  product: ProductSummary | ProductDetail;
  quantity: number;
}
