import { useEffect, useState } from "react";
import { ProductModel } from "../models/Product";

const useFetchProducts = (initialUrl: string) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [url, setUrl] = useState<string>(initialUrl);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        const getProducts: { products: ProductModel[]; total: number } =
          await response.json();
        setTotalProducts(getProducts.total);
        getProducts.products.forEach((product: ProductModel) => {
          setProducts((prevProducts) => [...prevProducts, product]);
        });
      } catch (err: any) {
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
