import { useState } from "react";
import SingleCartInfo from "./SingleCartInfo";
import placeholder from "/placeholder.png";
export default function ProductImage({product}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative">
      <img 
      src={!isLoaded ? placeholder : product?.thumbnail} 
      alt={product?.title} 
      onLoad={() => setIsLoaded(true)}
      className="rounded-md w-full h-auto bg-neutral-100" />

      <SingleCartInfo product={product} />
    </div>
  )
}
