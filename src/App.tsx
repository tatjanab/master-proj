import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductCategory from "./pages/ProductCategoryPage";
import ProductDetails from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import CartIcon from "./components/CartIcon";
import { Toaster } from "./ui/toaster";
import { useState, useEffect } from "react";
import { CartProvider } from "./contexts/CartContext";

const router = createBrowserRouter([
  { path: "", element: <Homepage /> },
  { path: "/products/:categoryId", element: <ProductCategory /> },
  { path: "/products/:categoryId/:productId", element: <ProductDetails /> },
  { path: "/cart", element: <CartPage /> },
]);

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  let cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <>
      <CartProvider>
        <CartIcon itemCount={cartCount} />
        <RouterProvider router={router} />
        <Toaster />
      </CartProvider>
    </>
  );
}

export default App;
