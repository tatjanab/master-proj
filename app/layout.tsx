import type { Metadata } from "next";
import { CartProvider } from "@contexts/CartContext";
import { CategoryProvider } from "@contexts/CategoryContext";
import "@styles/main.scss";

export const metadata: Metadata = {
  title: "ILS furniture",
  description: "Make your house a home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <CartProvider>
          <CategoryProvider>
            <div id='root'>{children}</div>
          </CategoryProvider>
        </CartProvider>
      </body>
    </html>
  );
}
