import React from "react";
import { useProducts } from "../../hooks/useProducts";
import { Grid, Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import ProductCard from "../../components/ProductCard";
import { useNavigate } from "react-router-dom";

const WomensClothing = () => {
    const { products, loading, error } = useProducts("women's clothing");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading products.</div>;

    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
                Women's Clothing
            </Typography>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <ProductCard
                            product={product}
                            onAddToCart={() =>
                                dispatch(
                                    addToCart({
                                        id: product.id,
                                        title: product.title,
                                        price: product.price,
                                        image: product.image,
                                    })
                                )
                            }
                            onViewDetail={() =>
                                navigate(`/womens/${product.id}`)
                            }
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default WomensClothing;
