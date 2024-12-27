
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartProvider from "./providers/CartProvider";
import FavouriteProvider from "./providers/FavouriteProvider";

export default function App() {

  return (
  <CartProvider>
    <Header />

    <div className="container mx-auto font-murecho">
      <FavouriteProvider>
        <ProductList />
      </FavouriteProvider>
    </div>

    <ToastContainer 
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />

    <div id="modal"></div>
  </CartProvider>
  );
}
