import type { Metadata } from "next";
import { CartProvider } from "@/src/context/CartContext";
import Header from "@/src/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShopHub App",
  description:
    "App for 'Programación con Tecnologías Web' course at Universidad de los Andes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 min-h-screen overflow-x-hidden">
        <CartProvider>
          <Header />
          <main className="container mx-auto p-6">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
