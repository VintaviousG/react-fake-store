// Womens Clothing Details Page
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductById } from "../../api/fakeStoreApi";
import { CircularProgress, Typography, Box } from "@mui/material";


const WomensDetail = () => {
    const { id } = useParams(); // Get the product ID from the URL parameters
    const [product, setProduct] = useState(null); // State to hold the product details
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to manage error state

    useEffect(() => {
        fetchProductById(id) // Fetch product details by ID
            .then(setProduct) // Set the product details in state
            .catch(setError) // Handle any errors
            .finally(() => setLoading(false)); // Set loading to false after fetching
    }, [id]);

    if (loading) return <CircularProgress />; // Show loading spinner while fetching data
    if (error) return <Typography color="error">Error: {error.message}</Typography>; // Show error message if there's an error

    return (
        <Box>
            <Typography variant="h4">{product.title}</Typography>
            <img src={product.image} alt={product.title} style={{ width: "200px" }} />
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="h6">${product.price}</Typography>
        </Box>
    );
}


export default WomensDetail;// This component will display the details