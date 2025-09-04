//Make  custom hook to fetch product details by ID
import { useState, useEffect } from "react";
import { fetchProductById } from "../api/fakeStoreApi";

// useProductDetail hook to fetch product details based on the provided ID
//custom hook to encapsulate the logic for fetching product details by ID
export const useProductDetail = (id) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        
        fetchProductById(id)
            .then(setProduct)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [id]);

    return { product, loading, error };
}