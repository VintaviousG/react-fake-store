import React from "react";
import { useProducts } from "../../hooks/useProducts";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Box,
} from "@mui/material";
import { Link } from "react-router-dom";

const MensClothing = () => {
    const { products, loading, error } = useProducts("men's clothing");

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading products.</div>;

    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 3 }}>
                Men's Clothing
            </Typography>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        key={product.id + product.category}
                    >
                        <Card sx={{ maxWidth: 345, height: "100%" }}>
                            <CardMedia
                                component="img"
                                height="200"
                                src={product.image}
                                alt={product.title}
                                sx={{
                                    objectFit: "contain",
                                    p: 2,
                                    bgcolor: "#fafafa",
                                }}
                            />
                            <CardContent>
                                <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    {product.categoryLabel}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    component={Link}
                                    to={`/mens/${product.id}`}
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
        </Box>
    );
};

export default MensClothing;
