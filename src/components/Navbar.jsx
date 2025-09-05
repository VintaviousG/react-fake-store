import { AppBar, Toolbar, Button} from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
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
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
