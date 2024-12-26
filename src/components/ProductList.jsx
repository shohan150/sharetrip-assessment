import useFetchProducts from "../hooks/useFetchProducts.js";
import ProductCard from "./product-card/ProductCard.jsx";
import Loading from "./common/Loading"

export default function ProductList() {
  const { products, loading, error } = useFetchProducts();

    if (loading) {
      return <Loading />; 
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {
        products.map((product) => <ProductCard key={product.id} product={product} />)
      }
    </div>
  );
}
