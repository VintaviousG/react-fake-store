import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Jewelery from "./pages/Jewelery/Jewelery";
import JeweleryDetail from "./pages/Jewelery/JeweleryDetail";
import MensClothing from "./pages/MensClothing/MensClothing";
import MensDetail from "./pages/MensClothing/MensDetail";
import WomensClothing from "./pages/WomensClothing/WomensClothing";
import WomensDetail from "./pages/WomensClothing/WomensDetail";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./components/Cart";

const App = () => (
    <Provider store={store}>
        <>
            <Navbar />

            <Container sx={{ mt: 4 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/jewelery" element={<Jewelery />} />
                    <Route path="jewelery/:id" element={<JeweleryDetail />} />
                    <Route path="/mens" element={<MensClothing />} />
                    <Route path="mens/:id" element={<MensDetail />} />
                    <Route path="/womens" element={<WomensClothing />} />
                    <Route path="womens/:id" element={<WomensDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<Home/>} />
                </Routes>
            </Container>
        </>
    </Provider>
);

export default App;
