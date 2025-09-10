import React, { useEffect, useState } from "react";
import { fetchProductsWithoutElectronics } from "../api/fakeStoreApi";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Box,
    CircularProgress,
    Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

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
        <Box width="auto">
            <Typography variant="h4" sx={{ mb: 3 }}>
                Featured Products
            </Typography>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
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
                                >
                                    {product.category}
                                </Typography>
                                <Typography variant="h6" gutterBottom>
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
        </Box>
    );
}

export default Home;
