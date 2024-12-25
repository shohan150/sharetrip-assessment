import { FaRegHeart } from "react-icons/fa";
import AddToCartButton from "./AddToCartButton";
import QuickViewButton from "./QuickViewButton";

export default function SingleCartInfo() {
  return (
    <div className="absolute w-full h-full top-0 left-0 bg-zinc-600 bg-opacity-50 rounded-tr-md rounded-tl-md p-3 transition-all duration-75 invisible group-hover/product:visible flex flex-col justify-between items-end">
      <FaRegHeart className="text-white text-xl align-end mt-1" />

      <div className="w-full space-y-2">
         <AddToCartButton />
         <QuickViewButton />
      </div>
    </div>
  )
}
