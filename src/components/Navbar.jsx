import { AppBar, Toolbar, Button} from "@mui/material";
//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
   // const cartItems = useSelector((state) => state.cart.items);
    //const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
        <>
            <AppBar position="static">
                <Toolbar>
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
                     <Button color="inherit" component={Link} to="/cart">
                                        Cart
                                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
