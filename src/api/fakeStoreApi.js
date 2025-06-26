// API utility for Fake Store
const BASE_URL = "https://fakestoreapi.com";

//Fetching product from Fake Store API based on Category
//Then returning the products in JSON format
export const fetchProductsByCategory = async (category) => {
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
};

//Geting a list of all categories from the Fake Store API
//Then returning the categories in JSON format
export const fetchCategories = async () => {
    const response = await fetch(`${BASE_URL}/products/categories`);
    if (!response.ok) throw new Error("Failed to fetch categories");
    return response.json();
};
