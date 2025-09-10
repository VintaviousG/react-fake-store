import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    removeFromCart,
    clearCart,
} from "../store/cartSlice";
import {
    Box,
    Typography,
    IconButton,
    Button,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
    //items array of objects in the cart from Redux store
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    if (items.length === 0)
        return <Typography sx={{ mt: 4 }}>Your cart is empty.</Typography>;

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Cart
            </Typography>
            <Grid container spacing={2}>
                {items.map((item) => (
                    <Grid item xs={12} md={6} key={item.id}>
                        <Card sx={{ display: "flex", alignItems: "center" }}>
                            <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.title}
                                sx={{
                                    width: 100,
                                    objectFit: "contain",
                                    p: 2,
                                    bgcolor: "#fafafa",
                                }}
                            />
                            <CardContent sx={{ flex: 1 }}>
                                <Typography variant="h6">
                                    {item.title}
                                </Typography>
                                <Typography color="text.secondary">
                                    ${item.price}
                                </Typography>
                                <Box display="flex" alignItems="center" mt={1}>
                                    <IconButton
                                        onClick={() =>
                                            dispatch(decrement(item.id))
                                        }
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                    <Typography>{item.quantity}</Typography>
                                    <IconButton
                                        onClick={() =>
                                            dispatch(increment(item.id))
                                        }
                                    >
                                        <AddIcon />
                                    </IconButton>
                                    <IconButton
                                        onClick={() =>
                                            dispatch(removeFromCart(item.id))
                                        }
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box
                mt={3}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
                <Button
                    variant="contained"
                    color="error"
                    onClick={() => dispatch(clearCart())}
                >
                    Clear Cart
                </Button>
            </Box>
        </Box>
    );
};

export default Cart;
