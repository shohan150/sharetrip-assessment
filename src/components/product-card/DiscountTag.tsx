type discountAmountType = {
  discountAmount: number;
};

export default function DiscountTag({ discountAmount }: discountAmountType) {
  return (
    <div className="absolute top-4 -left-1 bg-[url('/discount-amount.png')] bg-no-repeat bg-cover w-16 h-7">
      <p className="text-sm text-white pl-[6px] py-[2px]">৳ {discountAmount}</p>
    </div>
  );
}
