import React, { useEffect, useState } from "react";
import { fetchProductsWithoutElectronics } from "../api/fakeStoreApi";
import { Grid, Box, CircularProgress, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        fetchProductsWithoutElectronics()
            .then((data) => setProducts(data))
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    if (loading)
        return (
            <Box display="flex" justifyContent="center" mt={4}>
                <CircularProgress />
            </Box>
        );
    if (error)
        return <Typography color="error">Error loading products.</Typography>;

    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
                Featured Products
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
                                navigate(`/jewelery/${product.id}`)
                            }
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Home;
