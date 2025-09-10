import {
    AppBar,
    Toolbar,
    Button,
    Badge,
    IconButton,
    Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const cartCount = useSelector((state) =>
        state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
    );
    return (
        <>
            <AppBar position="static" color="primary" elevation={2}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}
                    >
                        React Fake Store
                    </Typography>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/jewelery">
                        Jewelery
                    </Button>
                    <Button color="inherit" component={Link} to="/mens">
                        Men's Clothing
                    </Button>
                    <Button color="inherit" component={Link} to="/womens">
                        Women's Clothing
                    </Button>
                    <IconButton
                        color="inherit"
                        component={Link}
                        to="/cart"
                        sx={{ ml: 2 }}
                    >
                        <Badge badgeContent={cartCount} color="error">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
