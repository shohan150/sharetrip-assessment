import { GiBroom } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";
import useCart from "../../hooks/useCart";
import calculateDiscount from "../../utils/calculateDiscount";
import CartItem from "./CartItem";

export default function CartDetails({closeCart}) {
  const { state, dispatch } = useCart();

  function handleClearCart(){
    dispatch({type: "empty-cart"});

    toast.error("Cart has been cleared.");
  }

  const calculateTotal = () => {
    let total = 0;
    state.cartItems.forEach((item) => {
      if (item.quantity){
        const {finalPrice} = calculateDiscount(item.price, item.discountPercentage);
        total += Number((finalPrice * item.quantity).toFixed(2));
    }});
    return total.toFixed(2);
  };

  return (
    <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-auto">
      <div
        className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-2xl">Your Cart</h3>
            <div className="flex gap-4 items-center text-textGray">
              <GiBroom 
              className="text-2xl cursor-pointer hover:opacity-70"
              onClick={handleClearCart}
              />
              <RxCross1
                className="text-2xl cursor-pointer hover:opacity-70"
                onClick={closeCart}
              />
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {state.cartItems?.length > 0 ? (
              state.cartItems.map((item) => <CartItem key={item.id} {...item} />)
            ) : (
              <div className="flex flex-col justify-center items-center p-4">
                <img src="/empty-cart.png" alt="empty-cart" className="w-40 h-40" />
                <p className="text-center text-lg text-textGray my-2">Your cart is empty. Please add something.</p>
              </div>
            )}
          </div>
        </div>

        
      {state.cartItems?.length > 0 && (
        <div className="flex items-center justify-between p-2 border-t-2 border-gray-600">
          <h2 className="font-bold text-2xl">Total</h2>
          <h2 className="font-bold text-2xl">৳ {calculateTotal()}</h2>
        </div>
      )}
      </div>
    </div>
  );
}
