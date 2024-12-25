function calculateDiscount(price, discountPercentage) {
   const discountAmount = (price * discountPercentage) / 100;
   const finalPrice = price - discountAmount;
   
   return {
     finalPrice: finalPrice.toFixed(2),
     discountAmount: discountAmount.toFixed(2)
   };
 }

 export default calculateDiscount;