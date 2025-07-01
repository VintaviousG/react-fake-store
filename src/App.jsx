import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Jewelery from "./pages/Jewelery/Jewelery";
import JeweleryDetail from "./pages/Jewelery/JeweleryDetail";

import MensClothing from "./pages/MensClothing/MensClothing";
import WomensClothing from "./pages/WomensClothing/WomensClothing";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import Home from "./pages/Home";

const App = () => (
    
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
        <Container sx={{ mt: 4 }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jewelery" element={<Jewelery />} />
                <Route path="jewelery/:id" element={<JeweleryDetail />} />
                <Route path="/mens" element={<MensClothing />} />
                <Route path="/womens" element={<WomensClothing />} />
                <Route path="*" element={<Jewelery />} />
            </Routes>
        </Container>
    
    </>
);

export default App;
