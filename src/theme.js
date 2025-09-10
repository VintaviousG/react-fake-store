import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: { main: "#1976d2" },
        secondary: { main: "#ff9800" },
        background: { default: "#f4f6f8" },
    },
    typography: {
        fontFamily: "Inter, Roboto, Arial, sans-serif",
        h6: { fontWeight: 700 },
    },
    shape: { borderRadius: 12 },
    components: {
        MuiButton: {
            styleOverrides: {
                root: { textTransform: "none", borderRadius: 8 },
            },
        },
    },
});

export default theme;
