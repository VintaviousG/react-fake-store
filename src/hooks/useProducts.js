// Custom hook to fetch products by category
import { useState, useEffect } from "react";
import { fetchProductsWithoutElectronics, normalizeImageUrl } from "../api/fakeStoreApi";

// useProducts hook to fetch products based on the provided category
// Custom hook to fetch products by category
export const useProducts = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchProductsWithoutElectronics()
      .then((data) => {
        // Filter for the requested category and normalize images
        const filtered = data
          .filter((p) => p.category === category)
          .map((p) => ({ ...p, image: normalizeImageUrl(p.image) }));
        setProducts(filtered);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [category]);

  return { products, loading, error };
};
