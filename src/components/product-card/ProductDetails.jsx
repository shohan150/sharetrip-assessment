import calculateDiscount from "../../utils/calculateDiscount";
import DiscountTag from "./DiscountTag";
"../../public/discount-amount.png"
export default function ProductDetails({product}) {
   const { finalPrice, discountAmount } = calculateDiscount(product.price, product.discountPercentage);

  return (
   <div className="p-3 xl:p-4 flex-1 flex flex-col justify-between">
      <div>
      <h6 className="text-sm text-textGray">{product.brand}</h6>
      <h4 className="font-semibold text-black">{product.title}</h4>
      </div>

      <div className="flex gap-2 items-center">
         <p className="font-semibold text-skyBlue text-lg">৳ {finalPrice}</p>
         {product?.discountPercentage > 0 && <p className="text-sm text-textGray mt-[2px] line-through">৳ {product.price}</p>}
      </div>

      {
         product?.discountPercentage > 0 && <DiscountTag discountAmount={discountAmount} />
      }
   </div>
  )
}
