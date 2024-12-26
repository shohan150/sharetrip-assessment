import SingleCartInfo from "./SingleCartInfo";
export default function ProductImage({product}) {
  return (
    <div className="relative">
      <img src={product?.thumbnail} alt={product?.title} className="rounded-md w-full h-auto bg-neutral-100" />

      <SingleCartInfo product={product} />
    </div>
  )
}
