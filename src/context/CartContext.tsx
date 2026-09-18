"use client";

import { createContext, useState, useContext } from "react";
import { ProductSummary, ProductDetail, CartItem } from "@/src/types/product";

interface CartContextType {
  items: CartItem[];
  addToCart: (product: ProductSummary | ProductDetail) => void;
  removeItem: (productId: number) => void;
  emptyCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: ProductSummary | ProductDetail) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.product.id === product.id,
      );

      if (existingIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + 1,
        };
        return updatedItems;
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const removeItem = (productId: number) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.product.id === productId,
      );

      if (existingIndex > -1) {
        const updatedItems = [...prevItems];
        const currentQuantity = updatedItems[existingIndex].quantity;

        if (currentQuantity > 1) {
          updatedItems[existingIndex] = {
            ...updatedItems[existingIndex],
            quantity: currentQuantity - 1,
          };
          return updatedItems;
        } else {
          return prevItems.filter((item) => item.product.id !== productId);
        }
      }
      return prevItems;
    });
  };

  const emptyCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeItem,
        emptyCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) throw new Error("useCart must be used within a CartProvider");

  return context;
}
