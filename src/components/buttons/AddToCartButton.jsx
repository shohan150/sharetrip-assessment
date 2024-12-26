import { BiCartAdd } from "react-icons/bi";
import useCart from "../../hooks/useCart";

export default function AddToCartButton({product}) {
  const {dispatch} = useCart();

  function handleAddToCart() {
    dispatch({
      type: "add-to-cart",
      payload: {
        id: product.id,
        title: product.title,
        image: product.thumbnail,
        quantity: 1,
        price: product.price,
        discount: product.discountPercentage,
      },
    });
  }
  return (
    <div className="flex items-center justify-center gap-2 rounded text-white text-sm border border-white p-1 bg-transparent/40"
    onClick={handleAddToCart}
    >
      <BiCartAdd className="text-lg" />
      <p className="mb-1">Add to cart</p>
    </div>
  )
}
