import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import useCart from "../../hooks/useCart";

export default function CartItem ({
  id,
  image,
  title,
  price,
  quantity,
  discountPercentage = 0,
}) {

  const {state, dispatch} = useCart();

  function handleIncrease() {
    dispatch({type: "increase-quantity", payload: {id}});
  }

  function handleDecrease() {
    dispatch({type: "decrease-quantity", payload: {id}});
  }
  return (
    <div className="flex items-center justify-between gap-2 border p-2">
      <img src={image} alt="thumbnail" className="w-20 mr-2" />
      <div>
        <h3 className="font-bold leading-4">{title}</h3>
        <div className="flex space-x-2 items-center">
          <h3 className="font-semibold">${price}</h3>
          {discountPercentage !== 0 && (
            <span className="text-xs">-{discountPercentage}%</span>
          )}
        </div>

        <div className="flex items-center space-x-1">
          <IoIosRemoveCircleOutline
            className="cursor-pointer hover:opacity-80"
            onClick={handleDecrease}
          />
          <span data-test="cart-item-quantity">{quantity}</span>
          <IoIosAddCircleOutline
            className="cursor-pointer hover:opacity-80"
            onClick={handleIncrease}
          />
        </div>
      </div>
      <div className="font-bold col-span-2">
        {quantity && (
          <span data-test="cart-item-price">
            ${(price - (price * discountPercentage) / 100).toFixed(2)}
          </span>
        )}
        <RiDeleteBin6Line
          className="text-red-500 cursor-pointer text-2xl hover:text-red-600"
          data-test="cart-remove-btn"
        />
      </div>
    </div>
  );
};
