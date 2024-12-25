
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductList from "./components/ProductList";
import CartProvider from "./providers/CartProvider";

export default function App() {

  return (
    <div className="container mx-auto p-4 my-10">
      <CartProvider>
        <ProductList />
        <ToastContainer />
      </CartProvider>
    </div>
  );
}
