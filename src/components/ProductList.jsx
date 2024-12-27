import { useState } from "react";
import useFetchProducts from "../hooks/useFetchProducts.js";
import Loading from "./common/Loading";
import ProductCard from "./product-card/ProductCard.jsx";

export default function ProductList() {
  const initialUrl = "https://dummyjson.com/products?limit=10&skip=0"
  const { products, loading, error, setUrl, totalProducts } = useFetchProducts(initialUrl);

  const [skip, setSkip] = useState(10);
  
  const loadMore = () => {
    setSkip(skip + 10);
    setUrl(`https://dummyjson.com/products?limit=10&skip=${skip}`);
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 my-10">
        {
          products.map((product) => <ProductCard key={product.id} product={product} />)
        }
      </div>

      {
        loading && <Loading />
      }

      {
        error && <div>Error: {error}</div>
      }

      {
        !loading && !error && (skip < totalProducts) && (
          <div className="flex w-full justify-center mb-10">
            <button
              onClick={loadMore}
              className="bg-skyBlue text-white py-2 px-4 rounded"
            >
              Load More
            </button>
          </div>
        )
      }

    </>
  );
}
