import { FaMinus, FaPlus } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";
import { toast } from "react-toastify";
import useCart from "../../hooks/useCart";
import { CartModel } from "../../models/Cart";
import { ProductModel } from "../../models/Product";

export default function AddedToCartButton({
  product,
}: {
  product: ProductModel;
}) {
  const { state, dispatch } = useCart();
  const quantity = state.cartItems.find(
    (item: CartModel) => item.id === product.id
  ).quantity;

  function handleIncrease() {
    dispatch({ type: "increase-quantity", payload: { id: product.id } });

    toast.success(`${quantity + 1} ${product.title} have been added to cart.`);
  }

  function handleDecrease() {
    dispatch({ type: "decrease-quantity", payload: { id: product.id } });

    toast.warning(
      `1 removed. ${quantity - 1} ${product.title} are in the cart.`
    );
  }

  function handleRemove() {
    dispatch({ type: "remove-from-cart", payload: { id: product.id } });

    toast.error(`${product.title} have been removed from the cart.`);
  }

  return (
    <div className="flex items-center justify-between gap-2 bg-buttonGreen text-white text-sm p-[7px] rounded cursor-pointer">
      {quantity > 1 ? (
        <FaMinus onClick={handleDecrease} />
      ) : (
        <LuTrash2 onClick={handleRemove} />
      )}
      <span className="mb-1 leading-none">{quantity} Added to Cart</span>
      <FaPlus onClick={handleIncrease} />
    </div>
  );
}
