import { useEffect, useState } from "react";

const useFetchProducts = () => {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://dummyjson.com/products?limit=10');
        const allProducts = await response.json();
        setProducts(allProducts.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

   return { products, loading, error };
}; 

export default useFetchProducts;