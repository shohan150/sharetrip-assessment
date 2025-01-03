import { BiCartAdd } from "react-icons/bi";
import { toast } from "react-toastify";
import useCart from "../../hooks/useCart";
import { ProductModel } from "../../models/Product";

export default function AddToCartButton({
  product,
}: {
  product: ProductModel;
}) {
  const { dispatch } = useCart();

  function handleAddToCart() {
    dispatch({
      type: "add-to-cart",
      payload: {
        id: product.id,
        title: product.title,
        image: product.thumbnail,
        quantity: 1,
        price: product.price,
        discountPercentage: product.discountPercentage,
      },
    });

    toast.success(`${product.title} Added to Cart`);
  }
  return (
    <div
      className="flex items-center justify-center gap-2 rounded text-white text-sm border border-white p-1 bg-transparent/40 cursor-pointer"
      onClick={handleAddToCart}
    >
      <BiCartAdd className="text-lg" />
      <p className="mb-1">Add to cart</p>
    </div>
  );
}
