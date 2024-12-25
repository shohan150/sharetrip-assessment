import { BiCartAdd } from "react-icons/bi";

export default function AddToCartButton() {
  return (
    <div className="flex items-center justify-center gap-2 rounded text-white text-sm border border-white p-[2px] bg-transparent/40">
      <BiCartAdd className="text-lg" />
      <p className="mb-1">Add to cart</p>
    </div>
  )
}
