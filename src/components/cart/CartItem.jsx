import {
   IoIosAddCircleOutline,
   IoIosRemoveCircleOutline,
} from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function CartItem ({
  id,
  thumbnail,
  title,
  price,
  quantity,
  rating,
  category,
  discountPercentage = 0,
}) {

  return (
    <div className="grid grid-cols-7 gap-3 border items-center">
      <img src={thumbnail} alt="thumbnail" className="h-20 col-span-2" />
      <div className="col-span-3">
        <h3 className="font-bold leading-4">{title}</h3>
        <div className="flex space-x-2 items-center">
          <h3 className="font-semibold">${result.toFixed(2)}</h3>
          {discountPercentage !== 0 && (
            <span className="text-xs">-{discountPercentage}%</span>
          )}
        </div>

        <div className="flex items-center space-x-1">
          <IoIosRemoveCircleOutline
            className="cursor-pointer hover:opacity-80"
          />
          <span data-test="cart-item-quantity">{quantity}</span>
          <IoIosAddCircleOutline
            className="cursor-pointer hover:opacity-80"
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
