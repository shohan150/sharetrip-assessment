import { FaPlus } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";

export default function AddToCartButton() {
  return (
    <div className="flex items-center justify-between bg-buttonGreen text-white text-sm p-[5px]  rounded">
      <LuTrash2 />
      <span className="mx-2 mb-1 leading-none">Add to cart</span>
      <FaPlus />
    </div>
  )
}
