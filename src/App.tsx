import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductCategory from "./pages/ProductCategoryPage";
import ProductDetails from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import { Toaster } from "./ui/toaster";
import { CartProvider } from "./contexts/CartContext";
import CheckoutPage from "./pages/CheckoutPage";

const router = createBrowserRouter([
  { path: "", element: <Homepage /> },
  { path: "/products/:categoryId", element: <ProductCategory /> },
  { path: "/products/:categoryId/:productId", element: <ProductDetails /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/checkout", element: <CheckoutPage /> },
]);

function App() {
  return (
    <>
      <CartProvider>
        <RouterProvider router={router} />
        <Toaster />
      </CartProvider>
    </>
  );
}

export default App;
