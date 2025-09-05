import { Card, CardContent, CardMedia, Typography, Grid, Box, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";



// Helper to fix image URLs


const Jewelery = () => {
   const { products, loading, error } = useProducts("jewelery");
 

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


