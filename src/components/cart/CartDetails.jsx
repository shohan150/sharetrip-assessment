import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";
import useCart from "../../hooks/useCart";
import CartItem from "./CartItem";

export default function CartDetails({closeCart}) {
  const { state, dispatch } = useCart();


  const calculateTotal = () => {
    let total = 0;
    state.cartData.forEach((item) => {
      if (item.quantity && item.discountPercentage)
        total +=
          (item.price - (item.price * item.discountPercentage) / 100) *
          item.quantity;
    });
    return total.toFixed(2);
  };

  const handleOrder = () => {
    toast.success("your order has been confirmed", { duration: 3000 });
  };

  return (
    <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-auto">
      <div
        className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 font-karla dark:bg-slate-600 dark:text-white"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-2xl">Your Cart</h3>
          <RxCross1
            className="text-[24px] cursor-pointer hover:opacity-70"
            onClick={closeCart}
            data-test="cart-close"
          />
        </div>
        <div className="mt-6 space-y-2">
          {state.cartItems?.length > 0 ? (
            state.cartItems.map((item) => <CartItem key={item.id} {...item} />)
          ) : (
            <div className="flex flex-col justify-center items-center p-4">
              <p className="text-center text-xl my-2">Your cart is empty</p>
            </div>
          )}
        </div>
        {state.cartData?.length > 0 && (
          <div className="flex items-center justify-between p-2">
            <h2 className="font-bold text-2xl">Total</h2>
            <h2 className="font-bold text-2xl">${calculateTotal()}</h2>
          </div>
        )}
      </div>
    </div>
  );
}
