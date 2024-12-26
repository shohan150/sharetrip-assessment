import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import useCart from "../../hooks/useCart";
import useFavourite from "../../hooks/useFavourite";
import AddToCartButton from "../buttons/AddToCartButton";
import AddedToCartButton from "../buttons/AddedToCartButton";
import QuickViewButton from "../buttons/QuickViewButton";

export default function SingleCartInfo({product}) {
  const {state} = useCart();  
  const {favourites, setFavourites} = useFavourite();

  function addToFavourites() {
    setFavourites([...favourites, product.id]);
    toast.info(`${product.title} added to favourites`);
  }

  function removeFromFavourites() {
    setFavourites(favourites.filter(item => item !== product.id));
    toast.warning(`${product.title} removed from favourites`);
  }

  return (
    <div className="absolute w-full h-full top-0 left-0 bg-zinc-600 bg-opacity-50 rounded-tr-md rounded-tl-md p-3 transition-all duration-75 invisible group-hover/product:visible flex flex-col justify-between items-end">
      {favourites.find(item => item === product.id) ? 
        <FaHeart 
        className="text-white text-xl align-end mt-1 cursor-pointer"
        onClick={removeFromFavourites} /> 
          : 
        <FaRegHeart 
        className="text-white text-xl align-end mt-1 cursor-pointer" 
        onClick={addToFavourites}/>}

      <div className="w-full space-y-2">
        {
          state.cartItems.find(item => item.id === product.id) ? <AddedToCartButton product={product} /> : <AddToCartButton product={product} />
        }
         <QuickViewButton product={product} />
      </div>
    </div>
  )
}
