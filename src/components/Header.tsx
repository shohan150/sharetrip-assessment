import { useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import useCart from "../hooks/useCart";
import CartDetails from "./cart/CartDetails";

export default function Header() {
  const { state } = useCart();
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  function handleOpenCart() {
    setIsCartOpen(true);
  }

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-10">
      {isCartOpen && <CartDetails closeCart={handleCloseCart} />}
      <nav className="flex items-center justify-between px-12 py-6 border-b-2 border-gray-200">
        <h3 className="text-2xl text-skyBlue font-bold tracking-wider">
          Assessment
        </h3>

        <div className="relative cursor-pointer" onClick={handleOpenCart}>
          <BsCartCheck className="text-2xl text-textGray" />
          {state.cartItems.length > 0 && (
            <span className="rounded-full absolute bottom-3 left-3 bg-buttonGreen text-white text-xs text-center p-[2px] w-5 h-5">
              {state.cartItems.length}
            </span>
          )}
        </div>
      </nav>
    </header>
  );
}
