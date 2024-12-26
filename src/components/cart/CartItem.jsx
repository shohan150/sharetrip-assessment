import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import useCart from "../../hooks/useCart";
import calculateDiscount from "../../utils/calculateDiscount";

export default function CartItem ({
  id,
  image,
  title,
  price,
  quantity,
  discountPercentage = 0,
}) {

  const {state, dispatch} = useCart();

  const {finalPrice, discountAmount} = calculateDiscount(price, discountPercentage);

  function handleIncrease() {
    dispatch({type: "increase-quantity", payload: {id}});
    toast.success(`${quantity + 1} ${title} have been added to cart.`);
  }

  function handleDecrease() {
    dispatch({type: "decrease-quantity", payload: {id}});
    toast.warning(`1 removed. ${quantity - 1} ${title} are in the cart.`);
  }

  function handleRemove() {
    dispatch({type: "remove-from-cart", payload: {id}});
    toast.error(`${title} have been removed from the cart.`);
  }

  return (
    <div className="flex items-center justify-between gap-2 border rounded">
      <div className="flex gap-3">
        <img src={image} alt="thumbnail" className="w-24 bg-zinc-100" />
        <div className="my-1">
          <h3 className="font-bold leading-4">{title}</h3>
          <div className="flex space-x-2 items-center">
            <h3 className="font-semibold">৳ {(price * quantity).toFixed(2)}</h3>
            {discountPercentage > 0 && (
              <span className="text-xs"> save ৳ {(discountAmount * quantity).toFixed(2)}</span>
            )}
          </div>

          <div className="flex items-center space-x-1">
            <IoIosRemoveCircleOutline
              className="cursor-pointer hover:opacity-80"
              onClick={handleDecrease}
            />
            <span>{quantity}</span>
            <IoIosAddCircleOutline
              className="cursor-pointer hover:opacity-80"
              onClick={handleIncrease}
            />
          </div>
        </div>
      </div>

      <div className="font-bold min-w-20">
        <h3 className="text-right mr-2">
          ৳ {(finalPrice * quantity).toFixed(2)}
        </h3>
        <RiDeleteBin6Line
          className="ml-auto mr-2 text-red-500 cursor-pointer text-2xl"
          onClick={handleRemove}
        />
      </div>
    </div>
  );
};
