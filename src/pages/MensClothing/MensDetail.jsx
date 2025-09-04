//Mens Details Page for specific item
import { Link, useParams } from "react-router-dom";

import { useProductDetail } from "../../hooks/useProductDetail";
import { CircularProgress,  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box, } from "@mui/material";

const MensDetail = () => {
    const { id } = useParams(); // Get the product ID from the URL parameters
  const {product, loading, error} = useProductDetail(id);

    if (loading) return <CircularProgress />; // Show loading spinner while fetching data
    if (error) return <Typography color="error">Error: {error.message}</Typography>; // Show error message if there's an error

    return (
         <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        {/* Left Side: Product Image */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
          <CardMedia
            component="img"
            sx={{
              width: '100%',
              maxHeight: 400, // Adjust as needed
              objectFit: 'contain',
              borderRadius: 2,
            }}
            image={product.image}
            alt={product.title}
          />
        </Grid>

        {/* Right Side: Product Details (Title, Price, Description only) */}
        <Grid item xs={12} md={6}>
          <CardContent sx={{ flex: '1 0 auto', p: 4 }}>
            {/* Title */}
            <Typography component="h1" variant="h4" gutterBottom>
              {product.title}
            </Typography>

            {/* Price */}
            <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
              ${product.price ? product.price.toFixed(2) : 'N/A'}
            </Typography>

            {/* Description */}
            <Typography variant="body1" >
              {product.description}
            </Typography>
          </CardContent>
        </Grid>
      </Card>
    </Container>
    );
}

export default MensDetail;