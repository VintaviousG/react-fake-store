import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Jewelery from "./pages/Jewelery/Jewelery";
import JeweleryDetail from "./pages/Jewelery/JeweleryDetail";
import MensClothing from "./pages/MensClothing/MensClothing";
import MensDetail from "./pages/MensClothing/MensDetail";
import WomensClothing from "./pages/WomensClothing/WomensClothing";
import WomensDetail from "./pages/WomensClothing/WomensDetail";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/jewelery" element={<Jewelery />} />
                    <Route path="jewelery/:id" element={<JeweleryDetail />} />
                    <Route path="/mens" element={<MensClothing />} />
                    <Route path="mens/:id" element={<MensDetail />} />
                    <Route path="/womens" element={<WomensClothing />} />
                    <Route path="womens/:id" element={<WomensDetail />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
