import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductCategory from "./pages/ProductCategoryPage";
import ProductDetails from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import { Toaster } from "./ui/toaster";
import { CartProvider } from "./contexts/CartContext";
import CheckoutWithReactHookForm from "./pages/CheckoutWithReactHookForm";
import { CategoryProvider } from "./contexts/CategoryContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  { path: "", element: <Homepage /> },
  { path: "/products/:categoryId", element: <ProductCategory /> },
  { path: "/products/:categoryId/:productId", element: <ProductDetails /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/checkout", element: <CheckoutWithReactHookForm /> },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <CategoryProvider>
            <RouterProvider router={router} />
            <Toaster />
          </CategoryProvider>
        </CartProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
