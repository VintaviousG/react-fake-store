import React from "react";
import { useProducts } from "../../hooks/useProducts";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const WomensClothing = () => {
    const { products, loading, error } = useProducts("women's clothing");

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading products.</div>;

    return (
        <div>
            <Typography variant="h4" sx={{ mb: 3 }}>
                Women's Clothing
            </Typography>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card
                            sx={{ maxWidth: 345, height: "100%" }}
                            
                        >
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
                            <Typography
                                    variant="h6"
                                    gutterBottom
                                    component={Link}
                                    to={`/womens/${product.id}`}
                                >
                                    {product.title}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="primary"
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

export default WomensClothing;
