import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
} from "@mui/material";

function ProductCard({ product, onAddToCart, onViewDetail }) {
    return (
        <Card
            sx={{
                maxWidth: 345,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "box-shadow 0.3s",
                boxShadow: 3,
                "&:hover": { boxShadow: 8 },
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: "contain", p: 2, bgcolor: "#fafafa" }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                >
                    {product.category}
                </Typography>
                <Typography variant="h6" gutterBottom noWrap>
                    {product.title}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                    ${product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onViewDetail}>
                    View
                </Button>
                <Button size="small" variant="contained" onClick={onAddToCart}>
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;
