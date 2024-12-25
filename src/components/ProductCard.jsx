export default function ProductCard({product}) {
  return (
    <div>
      <img src={product?.thumbnail} alt={product?.title} />
      <h6>{product.brand}</h6>
      <h4>{product.title}</h4>

      <div className="flex gap-2">
         <p>{product.price}</p>
         <p>{product.discountPercentage}</p>
      </div>
    </div>
  )
}
