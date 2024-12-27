import { useReducer } from "react";
import { cartContext } from "../context";
import { cartReducer, initialState } from "../reducers/cartReducer";

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}
