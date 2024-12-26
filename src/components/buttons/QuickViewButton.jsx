import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import ProductModal from "../ProductModal";
export default function QuickViewButton({product}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center gap-2 rounded text-white text-sm border border-white p-1 bg-transparent/40 cursor-pointer" onClick={handleOpenModal}>
      <MdOutlineRemoveRedEye className="text-lg" />
      <p className="mb-1">Quick View</p>

      {isModalOpen && <ProductModal product={product} onClose={handleCloseModal} />}
    </div>
  )
}
