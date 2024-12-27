import ReactDOM from "react-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { ProductModel } from "../models/Product";
import calculateDiscount from "../utils/calculateDiscount";

type ProductModalType = {
  product: ProductModel;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: ProductModalType) {
  const { finalPrice } = calculateDiscount(
    product.price,
    product.discountPercentage
  );

  const modalRoot = document.getElementById("modal");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div className="bg-white p-6 w-3/4 md:w-1/2 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={() => {
            onClose();
          }}
        >
          <IoMdCloseCircleOutline className="text-2xl text-textGray" />
        </button>

        <div className="flex gap-4 mt-2">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-32 h-32 border-2 border-gray-300 bg-zinc-100 rounded"
          />
          <div className="flex-1 flex flex-col ">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-sm text-textGray">{product.description}</p>
            <p className="text-lg font-semibold mt-2">৳ {finalPrice}</p>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
