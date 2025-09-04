// API utility for Fake Store
const BASE_URL = "https://fakestoreapi.com";

//Fetching product from Fake Store API based on Category
//Then returning the products in JSON format
export const fetchProductsByCategory = async (category) => {
  const response = await fetch(
    `${BASE_URL}/products/category/${encodeURIComponent(category)}`
  );
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

//Fetching product details by ID from the Fake Store API
//Then returning the product details in JSON format
export const fetchProductById = async (id) => {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error("Failed to fetch product details");
    return response.json();
}

//const BASE_URL = "https://fakestoreapi.com";

// Fetch all products except electronics
export const fetchProductsWithoutElectronics = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) throw new Error("Failed to fetch products");
    const data = await response.json();

    // Filter out electronics
    const filtered = data.filter(
      (product) => product.category !== "electronics"
    );

    return filtered;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
