import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";

export default function ProductCard({product}) {
  return (
    <div className="group/product relative border border-gray-200 rounded-md shadow-md flex flex-col items-stretch hover:scale-105 hover:shadow-lg transition-transform duration-200">

      <ProductImage product={product} />

      <ProductDetails product={product} />
      
    </div>
  )
}
