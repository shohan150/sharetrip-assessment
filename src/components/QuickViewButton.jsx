import { MdOutlineRemoveRedEye } from "react-icons/md";
export default function QuickViewButton() {
  return (
    <div className="flex items-center justify-center gap-2 rounded text-white text-sm border border-white p-[2px] bg-transparent/40">
      <MdOutlineRemoveRedEye className="text-lg" />
      <p className="mb-1">Quick View</p>
    </div>
  )
}
