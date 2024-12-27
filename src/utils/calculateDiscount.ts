function calculateDiscount(
  price: number,
  discountPercentage: number
): { finalPrice: number; discountAmount: number } {
  const discountAmount = (price * discountPercentage) / 100;
  const finalPrice = price - discountAmount;

  return {
    finalPrice: Number(finalPrice.toFixed(2)),
    discountAmount: Number(discountAmount.toFixed(2)),
  };
}

export default calculateDiscount;
