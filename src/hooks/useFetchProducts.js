import { useEffect, useState } from "react";

const useFetchProducts = (initialUrl) => {
   const [products, setProducts] = useState([]);
   const [url, setUrl] = useState(initialUrl);
   const [totalProducts, setTotalProducts] = useState(0);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        const getProducts = await response.json();
        setProducts([...products, ...getProducts.products]);
        setTotalProducts(getProducts.total);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

   return { products, loading, error, setUrl, totalProducts };
}; 

export default useFetchProducts;

