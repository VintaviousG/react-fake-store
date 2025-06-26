import React from "react";
import { useProducts } from "../../hooks/useProducts";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

// Jewelery component to display products in the "jewelery" category
// It uses the custom hook useProducts to fetch and display products
// from the "jewelery" category of the Fake Store API.
const Jewelery = () => {
    const { products, loading, error } = useProducts("jewelery");

    //Since the data was fetch inside the useProducts hook, we can use the products, loading, and error states directly
    //If loading is true, we return a loading message
    //If there is an error, we return an error message
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading products.</div>;

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
                                image={product.image}
                                alt={product.title}
                                sx={{
                                    objectFit: "contain",
                                    p: 2,
                                    bgcolor: "#fafafa",
                                }}
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {product.title}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                >
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
