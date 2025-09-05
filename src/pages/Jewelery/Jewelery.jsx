import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Box, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

const BASE_URL = "https://fakestoreapi.com";

// Fetch all products except electronics
export const fetchProductsWithoutElectronics = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) throw new Error("Failed to fetch products");
    const data = await response.json();

    // Filter out electronics
    return data.filter((product) => product.category !== "electronics");
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Helper to fix image URLs
function normalizeImageUrl(url) {
  if (!url) return "https://via.placeholder.com/200";
  if (!url.startsWith("http")) url = `${BASE_URL}${url}`;
  if (url.endsWith(".jpg")) return url.replace(".jpg", ".png");
  return url;
}

const Jewelery = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchProductsWithoutElectronics()
      .then((data) => {
        // Filter for only jewelery
        const jeweleryProducts = data
          .filter((p) => p.category === "jewelery")
          .map((p) => ({ ...p, image: normalizeImageUrl(p.image) }));
        setProducts(jeweleryProducts);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Box display="flex" justifyContent="center" mt={4}><CircularProgress /></Box>;
  if (error) return <Typography color="error">Error loading products.</Typography>;

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Jewelery
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <CardMedia
                component="img"
                height="200"
                src={product.image} // ✅ fixed
                alt={product.title}
                sx={{ objectFit: "contain", p: 2, bgcolor: "#fafafa" }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  component={Link}
                  to={`/jewelery/${product.id}`}
                >
                  {product.title}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Jewelery;


