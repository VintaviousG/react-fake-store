import React from "react";
import { useProducts } from "../../hooks/useProducts";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const WomensClothing = () => {
    const { products, loading, error } = useProducts("women's clothing");
    const dispatch = useDispatch();

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
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    component={Link}
                                    to={`/womens/${product.id}`}
                                >
                                    {product.title}
                                </Typography>
                                <Typography variant="subtitle1" color="primary">
                                    ${product.price}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 2 }}
                                    onClick={() =>
                                        dispatch(
                                            addToCart({
                                                id: product.id,
                                                title: product.title,
                                                price: product.price,
                                                image: product.image,
                                            })
                                        )
                                    }
                                >
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default WomensClothing;
