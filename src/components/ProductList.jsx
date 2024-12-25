import useFetchProducts from "../hooks/useFetchProducts.js";
import ProductCard from "./ProductCard.jsx";

export default function ProductList() {
  const { products, loading, error } = useFetchProducts();

    if (loading) {
      return <div>Loading...</div>; 
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
  return (
    <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {
        products.map((product) => <ProductCard key={product.id} product={product} />)
      }
    </div>
  );
}
