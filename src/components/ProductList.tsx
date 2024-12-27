import { useState } from "react";
import useFetchProducts from "../hooks/useFetchProducts.js";
import { ProductModel } from "../models/Product.js";
import Loading from "./common/Loading.jsx";
import ProductCard from "./product-card/ProductCard.jsx";

export default function ProductList() {
  const initialUrl = "https://dummyjson.com/products?limit=10&skip=0";
  const { products, loading, error, setUrl, totalProducts } =
    useFetchProducts(initialUrl);

  const [skip, setSkip] = useState<number>(10);

  const loadMore = () => {
    setSkip(skip + 10);
    setUrl(`https://dummyjson.com/products?limit=10&skip=${skip}`);
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-28 mb-10">
        {products.map((product: ProductModel) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {loading && <Loading />}

      {error && <div>Error: {error}</div>}

      {!loading && !error && skip < totalProducts && (
        <div className="flex w-full justify-center mt-40 mb-28">
          <button
            onClick={loadMore}
            className="bg-skyBlue text-xl text-white py-4 px-8 rounded"
          >
            Load More Product
          </button>
        </div>
      )}
    </>
  );
}
