import { FaMinus, FaPlus } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";
import useCart from "../../hooks/useCart";

export default function AddedToCartButton({product}) {
  const {state, dispatch} = useCart();
  const quantity = state.cartItems.find(item => item.id === product.id)?.quantity;

  function handleIncrease() {
    dispatch({type: "increase-quantity", payload: {id: product.id}});
  }

  function handleDecrease() {
    dispatch({type: "decrease-quantity", payload: {id: product.id}});
  }

  function handleRemove() {
    dispatch({type: "remove-from-cart", payload: {id: product.id}});
  }

  return (
    <div className="flex items-center justify-between gap-2 bg-buttonGreen text-white text-sm p-[7px] rounded cursor-pointer">
      {quantity >1 ? <FaMinus onClick={handleDecrease} /> : <LuTrash2 onClick={handleRemove} />}
      <span className="mb-1 leading-none">{quantity} Added to Cart</span>
      <FaPlus onClick={handleIncrease} />
    </div>
  )
}
