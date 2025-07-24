// Womens Clothing Details Page
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductById } from "../../api/fakeStoreApi";
import { CircularProgress,   Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box, } from "@mui/material";


const WomensDetail = () => {
    const { id } = useParams(); // Get the product ID from the URL parameters
    const [product, setProduct] = useState(null); // State to hold the product details
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to manage error state

    useEffect(() => {
        fetchProductById(id) // Fetch product details by ID
            .then(setProduct) // Set the product details in state
            .catch(setError) // Handle any errors
            .finally(() => setLoading(false)); // Set loading to false after fetching
    }, [id]);

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
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>
          </CardContent>
        </Grid>
      </Card>
    </Container>
    );
}


export default WomensDetail;// This component will display the details