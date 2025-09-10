import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
  Box,
    Button,
    CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { useDispatch } from "react-redux"; //Used to use
import { addToCart } from "../../store/cartSlice";

const MensClothing = () => {
    const { products, loading, error } = useProducts("men's clothing");
    const dispatch = useDispatch(); // Initialize the dispatch function
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
                Men's Clothing
            </Typography>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
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
};

export default MensClothing;
