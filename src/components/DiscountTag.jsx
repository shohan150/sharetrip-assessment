export default function DiscountTag({discountAmount}) {
  return (
   <div className="absolute top-4 -left-1 bg-[url('../../public/discount-amount.png')] bg-no-repeat bg-cover w-16 h-7">
      <p className="text-sm text-white px-1 py-[2px]">৳ {discountAmount}</p>
   </div>
  )
}
