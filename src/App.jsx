
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartProvider from "./providers/CartProvider";

export default function App() {

  return (
  <CartProvider>
    <Header />
    <div className="container mx-auto font-murecho">
      <ProductList />
      <ToastContainer />
    </div>
    <div id="modal"></div>
  </CartProvider>
  );
}
