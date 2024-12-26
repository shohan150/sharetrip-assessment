import { useContext } from "react";
import { cartContext } from "../context";

 export default function useCart() {
 const {state, dispatch} = useContext(cartContext);

   return {state, dispatch}
 }
