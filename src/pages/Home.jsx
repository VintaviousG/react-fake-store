import React, { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Box,
    CircularProgress,
} from "@mui/material";

const CATEGORIES = [
    { key: "men's clothing", label: "Men's Clothing" },
    { key: "jewelery", label: "Jewelery" },
    { key: "women's clothing", label: "Women's Clothing" },
];

function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        Promise.all(
            CATEGORIES.map((cat) =>
                fetch(
                    `https://fakestoreapi.com/products/category/${encodeURIComponent(
                        cat.key
                    )}`
                )
                    .then((res) => {
                        if (!res.ok)
                            throw new Error("Failed to fetch " + cat.label);
                        return res.json();
                    })
                    .then((data) =>
                        data.map((p) => ({ ...p, categoryLabel: cat.label }))
                    )
            )
        )
            .then((results) => setProducts(results.flat()))
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
        <Box width={"auto"}>
            <Typography variant="h4" sx={{ mb: 3 }}>
                Featured Products
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
                                    variant="subtitle2"
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    {product.categoryLabel}
                                </Typography>
                                <Typography variant="h6" gutterBottom>
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
}

export default Home;
