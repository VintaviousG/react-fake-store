// Custom hook to fetch products by category
import { useState, useEffect } from "react";
import { fetchProductsByCategory } from "../api/fakeStoreApi";

// useProducts hook to fetch products based on the provided category
export const useProducts = (category) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
// Initialize state for products, loading, and error
    useEffect(() => {
        setLoading(true);
        //This function fetches the products based on the category passed to the function
        fetchProductsByCategory(category)
            //.then is used to handle the promise returned by fetchProductsByCategory 
            //If any error use .catch to handle the error, and finally is used to set loading to false
            .then(setProducts)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [category]);

    return { products, loading, error };
};
