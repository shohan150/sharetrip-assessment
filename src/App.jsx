import { useReducer } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductList from "./components/ProductList";
import { cartContext } from "./context";
import { cartReducer, initialState } from "./reducers/cartReducer";

export default function App() {

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div className="h-full w-full">
      <cartContext.Provider value={{ state, dispatch }}>
        <ProductList />
        <ToastContainer />
      </cartContext.Provider>
    </div>
  );
}
